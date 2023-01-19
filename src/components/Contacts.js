import React from "react";
import emailjs from '@emailjs/browser';
import {useForm} from 'react-hook-form';
import {useState} from 'react';



const Contacts = () => {
  const [succsessMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // All this must to be in config.js file and you need fill in your data from emailjs-com (serviceID, templateID, userID)
  const YOUR_SERVICE_ID = "service_ID";
  const YOUR_TEMPLATE_ID = "template_ID";
  const YOUR_USER_ID = "3HJsomTFW1xgtYIc3";

  const onSubmit = (data, r) => {
    sendEmail(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      YOUR_USER_ID
    );
    r.target.reset();
  };

  // emailjs functionality
  const sendEmail = (
    YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID,
    variables,
    YOUR_USER_ID
  ) => {
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, variables, YOUR_USER_ID)
      .then(() => {
        setSuccessMessage(
          "Message sent successfully! I'll will contact you soon."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Please fill the form below if you have a project or you want to hire me. I'll will contact
          you soon. Thank you.
        </p>
        <span className="success-message">{succsessMessage}</span>
      </div>
      <div className="container">
        {/* Form starts here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 co col-xs-12">
              {/* Name input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>

              <span className="error-message">
                {errors.name && errors.name.message}
              </span>

              {/* Phone input */}
              <div className="text-center">
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  aria-invalid={errors.phone ? "true" : "false"}
                  {...register("phone", {
                    required: "Please add your phone number",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>

              {/* Email input */}
              <div className="text-center">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Please add your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>

              {/* Subject input */}
              <div className="text-center">
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  aria-invalid={errors.subject ? "true" : "false"}
                  {...register("subject", {
                    required: "You forget to add the subject",
                  })}
                />
                <div className="line"></div>
              </div>

              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 co col-xs-12">
              {/* Description */}
              <div className="text-center">
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Type your text here..."
                  name="description"
                  name="subject"
                  aria-invalid={errors.subject ? "true" : "false"}
                  {...register("description", {
                    required: "Please describe your project needs...",
                  })}
                ></textarea>

                <div className="line"></div>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
