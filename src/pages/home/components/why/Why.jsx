import React from "react";
import "./why.css";

//React Icon
import { MdNaturePeople } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiTap, GiHouse } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";

//Animation
import { Fade } from "react-awesome-reveal";

const Why = () => {
  return (
    <section className="why" id="why">
      <div className="container-section">
        <Fade direction="down" triggerOnce>
          <h2 className="title">Kenapa harus di MN Property?</h2>
        </Fade>
        <div className="pros">
          <Fade direction="right" cascade delay={500} triggerOnce>
            <div className="pro">
              <GiHouse className="icon" />
              <h4>Siap Huni</h4>
              <small>Unit cluster yang akan Anda miliki siap huni, memiliki legalitas yang terjamin, dan harga yang telah kami tentukan sudah All In tanpa harus memikirkan pengurusan surat-surat lainnya.</small>
            </div>

            <div className="pro">
              <MdNaturePeople className="icon" />
              <h4>Lingkungan bersih</h4>
              <small>Lingkungan yang bersih dengan jalan yang telah di paving/cor serta taman hijau menciptakan kesan yang asri di cluster yang akan Anda miliki</small>
            </div>

            <div className="pro">
              <AiOutlineSafetyCertificate className="icon " />
              <h4>Keamanan Terjamin</h4>
              <small>Setiap cluster yang kami bangun hanya menggunkan one gate system (satu pintu) dengan pos security sehingga bisa Anda tidur nyenyak tanpa perlu khawatir</small>
            </div>

            <div className="pro">
              <GiTap className="icon" />
              <h4>Air Bersih</h4>
              <small>Kami menyediakan sumur bor dengan pompa submersibel tiap masing-masing unit rumah dengan kriteria air yang sehat (PH 7) </small>
            </div>

            <div className="pro">
              <BiMapPin className="icon" />
              <h4>Lokasi Strategis</h4>
              <small>Lokasi perumahan  berada di lokasi strategis dengan nilai investasi yang akan berkembang tiap tahunnya, serta dekat rumah sakit, sarana pendidikan, dan sarana umum lainnya</small>
            </div>

            <div className="pro">
              <FaHandshake className="icon" />
              <h4>Garansi Kerusakan</h4>
              <small>Unit cluster mendapatkan garansi maintenance selama 3 bulan apabila unit yang Anda huni mengalami kendala teknis</small>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Why;
