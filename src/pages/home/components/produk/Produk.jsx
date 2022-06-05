import React from "react";
import "./produk.css";

//Animation
import { Fade } from "react-awesome-reveal";

//Assets
import VID1 from "../../assets/video/1.mp4";
import VID2 from "../../assets/video/2.mp4";
import VID3 from "../../assets/video/3.mp4";
import VID4 from "../../assets/video/4.mp4";

const Produk = () => {
  return (
    <>
      <section className="produk" id="produk">
        <div className="container-section">
          <Fade direction="down" triggerOnce>
            <h2 className="produk-title">Produk Kami</h2>
          </Fade>

          <div className="house-wrap">
            <video playsInline muted controls="true" autoPlay="autoplay" loop="loop" className="media_vid">
              <source src={VID1} type="video/mp4" />
            </video>

            <video playsInline muted controls="true" autoPlay="autoplay" loop="loop" className="media_vid">
              <source src={VID4} type="video/mp4" />
            </video>

            <video playsInline muted controls="true" autoPlay="autoplay" loop="loop" className="media_vid">
              <source src={VID2} type="video/mp4" />
            </video>

            <video playsInline muted controls="true" autoPlay="autoplay" loop="loop" className="media_vid">
              <source src={VID3} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Produk;
