import React from "react";
import "./beranda.css";
import { TiLocation } from "react-icons/ti";

//Animation
import { Fade } from "react-awesome-reveal";

//React-router
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const navigate = useNavigate();

  return (
    <section className="beranda" id="beranda">
      <div className="beranda-wrap">
        <div className="beranda-transparent">
          <div className="beranda-left">
            <small>WELCOME TO</small>
            <h2>Multi Niaga Property Official Website</h2>
          </div>
        </div>

        <div className="beranda-right">
          <div className="beranda-right-title">Cluster Kami</div>
          <div className="location-wrap">
            <Fade triggerOnce>
              <div
                className="location b1"
                onClick={() => {
                  navigate("/property/rajabasa");
                }}
              >
                <TiLocation className="beranda-icon" />
                <h5>Rajabasa</h5>
                <small className="about-small">( Anggrek Residence )</small>
              </div>
            </Fade>

            <Fade triggerOnce>
              <div
                className="location b2"
                onClick={() => {
                  navigate("/property/korpri");
                }}
              >
                <TiLocation className="beranda-icon" />
                <h5>Korpri Raya</h5>
                <small className="about-small">( Senopati Residence )</small>
              </div>
            </Fade>

            <Fade triggerOnce>
              <div
                className="location b3"
                onClick={() => {
                  navigate("/property");
                }}
              >
                <TiLocation className="beranda-icon" />
                <h5>Sukarame</h5>
                <small className="about-small">( Coming Soon )</small>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
