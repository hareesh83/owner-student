import React from "react";

const About = () => {
  return (
    <div>
      <section class="page_content">
        <section class="about_hero_section">
          <div
            class="about_hero_div"
            // style="background-image:url(../assets/about.jpg) ;"
          >
            <div class="overlay">
              <h1 class="contact_us">About Us</h1>
            </div>
          </div>
        </section>

        <section class="about_us_section">
          <div>
            <h1 class="about" style={{textAlign: 'center'}}>
              About Us
            </h1>
            <p>
              {" "}
              This a website for students exchange information, form
              organizations/clubs, buy/sell/trade goods over a marketplace, and
              monetize this product via selling ad space to local businesses.
              This product should be easily portable to other institutions as
              well.{" "}
            </p>
            <p>
              {" "}
              The student information exchange portal is a 3-sided marketplace
              the success of which depends on the onboarding and usage by the
              below 3 groups of users:{" "}
            </p>
            <ul>
              <li>student service providers,</li>
              <li>service receivers and </li>
              <li>advertisement creators. </li>
            </ul>
            <p>
              {" "}
              This application has the potential for network effects and it is
              important to onboard the users on all the sides of the market.{" "}
            </p>
            <p>
              {" "}
              The initial launch of the product will be a minimum viable product
              that could drive user adoption and bring local businesses onto it.
              The better version of the product could be released based on the
              user feedback and adoption.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
