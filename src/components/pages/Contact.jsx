import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="page_content">
        <section class="contact_hero_section">
          <div
            class="contact_hero_div"
            // style="background-image:url(../assets/contact.jpg) ;"
          >
            <div class="overlay">
              <h1 class="contact_us">Contact Us</h1>
            </div>
          </div>
        </section>

        <section>
          <div class="contain">
            <div class="wrapper">
              <div class="form">
                <h4>GET IN TOUCH</h4>
                <h2 class="form_headline">Send us a message</h2>
                <form id="submit_form">
                  <div class="form_inputs">
                    <span>
                      <input
                        id="name"
                        class="input_box input_contact"
                        type="text"
                        placeholder="Your Name*"
                      />
                      <small class="name-error"></small>
                    </span>
                    <span>
                      <input
                        id="email"
                        class="input_box input_contact"
                        type="email"
                        placeholder="Your Email*"
                      />
                      <small class="name-error"></small>
                    </span>
                  </div>
                  <p>
                    <div class="form_inputs">
                      <span>
                        <input
                          id="company-name"
                          class="input_box input_contact"
                          type="text"
                          placeholder="Company Name*"
                          required
                        />
                        <small class="name-error"></small>
                      </span>
                      <span>
                        <input
                          id="phone"
                          class="input_box input_contact"
                          type="text"
                          placeholder="Phone Number*"
                          required
                        />
                        <small class="name-error"></small>
                      </span>
                    </div>
                  </p>
                  <p>
                    <textarea
                      minlength="20"
                      id="message"
                      class="input_box"
                      cols="30"
                      rows="7"
                      placeholder="Your Message*"
                      required
                    ></textarea>
                    <small></small>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      checked
                    />
                    Yes, I would like to receive communications by call / email
                    about Company's services.
                  </p>
                  <p>
                    <button class="primary_btn" id="submit" value="submit">
                      Submit
                    </button>
                    {/* <a href="mailto:vobbiliredy.anu6298@gmail.com?Subject=Thanks for your query&body=You can ask your query here!!" class="primary_btn" >Submit</a> */}
                    <button class="secondary_btn reset">Reset</button>
                  </p>
                </form>
              </div>

              <div class="contacts contact_wrapper">
                <ul>
                  <li>
                    We've driven online revenues of over
                    <span>$2 billion</span> for our clients. Ready to know how
                    we can help you?
                  </li>
                  <span class="hightlight_contact_info">
                    <li class="email_info">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <a href="mailto:superadmin@gmail.com?Subject=Thanks for your interest!">
                        superadmin@gmail.com
                      </a>
                    </li>
                    <li class="mobile_num">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span>+1 123 4567</span>
                    </li>
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
