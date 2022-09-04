import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./ContactUs.module.scss";
import Head from "next/head";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,

            pauseOnFocusLoss: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={css.mainContainer} id={"contactMe"}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Form" />
        <link rel="icon" href="/icons/barber-pole-svgrepo-com.svg" />
      </Head>
      <div className={css.subContainer}>
        <div className={css.title}>
          <h3>Contact Us</h3>
        </div>
        <div className={css.formContainer}>
          <form ref={form} onSubmit={sendEmail} className={css.form}>
            <div className={css.inputs}>
              <input
                type="text"
                name="user_name"
                placeholder="Name*"
                required
                className={css.name}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email*"
                required
                className={css.email}
              />

              <input
                type="text"
                name="number"
                placeholder="Number"
                className={css.number}
              />
            </div>
            <textarea name="message" placeholder="Message*" required />
            <button type="submit" value="Send">
              Send
            </button>
            <ToastContainer theme="dark" />
          </form>
          <p>
            Please get in contact with us regarding any queries and we will get
            back to you ASAP!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
