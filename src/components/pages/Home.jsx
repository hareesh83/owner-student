import React from "react";

const Home = () => {
  return (
    <div>
      <section class="page_content1">
        <div class="wrapper">
          <div class="carousel owl-carousel">
            <div class=" card-1" style={{backgroundColor:'none'}}>
              <h1>Welcome to UTA Market</h1>
              <p>
                One stop market place where everything available at one place!
              </p>
              <a
                class="primary_btn"
                href="Pages/signup.html"
                style={{marginTop: '100px', marginLeft: "50px"}}
              >
                Get Started
              </a>
            </div>
          </div>
          <div class=""></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
