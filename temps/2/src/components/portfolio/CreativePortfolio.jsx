import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CreativePortfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <Tabs>
          <TabList className="creative-portfolio-list">
            <Tab></Tab>
            {/* <Tab>Vimeo</Tab>
            <Tab>Youtube</Tab>
            <Tab>Dribbble</Tab> */}
          </TabList>
          <TabPanel>
            <ul className="gallery_zoom">

              <SRLWrapper>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      {/* <h3>Ave Simone</h3>
                      <span>Dribbble Shoot</span> */}
                    </a>

                    <a href={GALLERY[0]}>
                      <img src={GALLERY[0]} alt="INSERTNAME" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      {/* <h3>Ave Simone</h3>
                      <span>Dribbble Shoot</span> */}
                    </a>

                    <a href={GALLERY[1]}>
                      <img src={GALLERY[1]} alt="INSERTNAME" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      {/* <h3>Ave Simone</h3>
                      <span>Dribbble Shoot</span> */}
                    </a>

                    <a href={GALLERY[2]}>
                      <img src={GALLERY[2]} alt="INSERTNAME" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      {/* <h3>Ave Simone</h3>
                      <span>Dribbble Shoot</span> */}
                    </a>

                    <a href={GALLERY[3]}>
                      <img src={GALLERY[3]} alt="INSERTNAME" />
                    </a>
                  </div>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      {/* <h3>Ave Simone</h3>
                      <span>Dribbble Shoot</span> */}
                    </a>

                    <a href={GALLERY[4]}>
                      <img src={GALLERY[4]} alt="INSERTNAME" />
                    </a>
                  </div>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="700"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      {/* <h3>Ave Simone</h3>
                      <span>Dribbble Shoot</span> */}
                    </a>

                    <a href={GALLERY[5]}>
                      <img src={GALLERY[5]} alt="INSERTNAME" />
                    </a>
                  </div>
                </li>
                {/* End image popup */}
              </SRLWrapper>
            </ul>
          </TabPanel>
        </Tabs>
        {/* END TABLIST */}
      </div>
    </SimpleReactLightbox>
  );
};

export default CreativePortfolio;
