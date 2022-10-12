import React from "react";

const Service = () => {
  return (
    <div>
      <section class="page_content">
        <section class="service_hero_section">
          <div
            class="service_hero_div"
            // style="background-image:url(../assets/service.jpg)"
          >
            <div class="overlay">
              <h1 class="contact_us">Our Services</h1>
            </div>
          </div>
        </section>

        <section>
          <div class="service_wrapper">
            <div class="service_card_wrapper">
              <div class="pic"></div>
              <p class="card_header">Exchange information with your peers</p>
              <p class="card_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                harum amet, unde veritatis ipsum itaque laborum placeat, facere
                voluptatibus necessitatibus quisquam corrupti nisi vitae?
                Maiores iste laboriosam nostrum distinctio tenetur.
              </p>
              <a href="#">
                <div class="card_readmore">
                  <b>Read more!</b> <i class="fas fa-angle-right"></i>
                </div>
              </a>
            </div>

            <div class="service_card_wrapper">
              <div class="pic"></div>
              <p class="card_header">Check out the clubs on the campus</p>
              <p class="card_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                harum amet, unde veritatis ipsum itaque laborum placeat, facere
                voluptatibus necessitatibus quisquam corrupti nisi vitae?
                Maiores iste laboriosam nostrum distinctio tenetur.
              </p>
              <a href="#">
                <div class="card_readmore">
                  <b>Read more!</b> <i class="fas fa-angle-right"></i>
                </div>
              </a>
            </div>

            <div class="service_card_wrapper">
              <div class="pic"></div>
              <p class="card_header">
                Trade books and other things with your peers
              </p>
              <p class="card_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                harum amet, unde veritatis ipsum itaque laborum placeat, facere
                voluptatibus necessitatibus quisquam corrupti nisi vitae?
                Maiores iste laboriosam nostrum distinctio tenetur.
              </p>
              <a href="#">
                <div class="card_readmore">
                  <b>Read more!</b> <i class="fas fa-angle-right"></i>
                </div>
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Service;
