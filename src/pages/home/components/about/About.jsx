import React from "react";
import "./about.css";

import { Slide, Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="about" id="about">
      <Slide triggerOnce duration={1500}>
        <div className="left-about">
          <Slide triggerOnce>
            <div className="about-title">Tentang Kami</div>
          </Slide>
        </div>
      </Slide>

      <Slide direction="right" triggerOnce duration={1500}>
        <div className="right-about">
          <div className="transparent">
            <Fade direction="right" triggerOnce>
              <div className="company">Multi Niaga Property</div>
            </Fade>

            <Fade direction="right" triggerOnce>
              <div className="company-desc">
                Multi Niaga Property Lampung merupakan perusahaan yang bergerak di bidang Agent and Developer Property. MN Property menawarkan beberapa jenis tipe rumah dengan desain mewah, lingkungan yang nyaman untuk tempat tinggal atau
                investasi jangka panjang dengan harga yang terjangkau.
              </div>
            </Fade>

            <Fade direction="right" triggerOnce>
              <div className="company-desc"> Didukung dengan lokasi strategis di Kota Bandar Lampung serta dekat dengan akses transportasi, terminal, supermarket, rumah sakit hingga sarana pendidikan dan fasilitas umum lainnya.</div>
            </Fade>

            <Fade direction="right" triggerOnce>
              <div className="company-desc">Selama berdiri MN property telah membangun lebih dari 5+ cluster perumahan satu pintu dengan beragam tipe rumah yang disesuaikan dengan kebutuhan untuk kalangan milenial yang dinamis.</div>
            </Fade>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default About;
