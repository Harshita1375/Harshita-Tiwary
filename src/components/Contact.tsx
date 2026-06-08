import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;


    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

      .then(
        () => {
          setShowSuccess(true);

          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
          form.current?.reset();
        },
        (error) => {
          console.error(error);
        }
      );
    }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h2>Let's Work Together</h2>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="service"
          placeholder="Service Required"
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Tell me about your project"
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
      {showSuccess && (
        <div className="success-popup">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>
              Thank you for reaching out. I'll get back to you soon.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;