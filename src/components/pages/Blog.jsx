import React from "react";

const Blog = () => {
  return (
    <div>
      <section class="page_content">
        <section class="about_hero_section">
          <div
            class="about_hero_div"
            // style="background-image: url(../assets/about.jpg);"
          >
            <div class="header">
              <h2>Blog</h2>
            </div>
          </div>
        </section>

        <section class="about_us_section1">
          <div class="row">
            <div class="leftcolumn">
              <div class="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div class="fakeimg">
                  {/* <img src="../assets/club1.png" alt="" /> */}
                </div>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco.
                </p>
              </div>
              <div class="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2017</h5>
                <div class="fakeimg">
                  <img src="../assets/club2.png" alt="" />
                </div>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Blog;
