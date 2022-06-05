import React from "react";
import "../content.css";

// Card Component
import Card from "../components/Card";
import { Fade } from "react-awesome-reveal";

//House Image
import IMG1_1 from "../../../assets/Korpri/Type 80 112/1.jpg";

const ContentKorpri = () => {
  const property = [
    {
      id: 1,
      image: [IMG1_1],
      nama: "Tipe 80/112",
      desc: "RUMAH SIAP HUNI DI CLUSTER SENOPATI RESIDENCE KORPRI, PERUMAHAN DESAIN MINIMALIS DENGAN KUALITAS TERBAIK DAN HARGA TERJANGKAU",
      alamat: "JL. P. Senopati 1, Korpri Raya, Sukarame, Kota Bandar Lampung",
      harga: "20.000.000 (DP)",
      kamar: "3",
      toilet: "2",
      lt: 112,
      lb: 80,
      keterangan: "2 menit dari Jalur 2 Korpri, 7 menit dari Pintu Tol Kotabaru, dekat Polda Lampung, ITERA, UIN, Transmart, dll.",
    },
  ];

  return (
    <div className="content-container">
      <div className="content-wrap">
        <div className="card-wrap">
          <Fade cascade triggerOnce>
            {property.map(({ image, nama, desc, alamat, harga, kamar, toilet, lt, lb, keterangan }, index) => {
              return <Card key={index} image={image} nama={nama} desc={desc} alamat={alamat} harga={harga} kamar={kamar} toilet={toilet} lt={lt} lb={lb} keterangan={keterangan}></Card>;
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ContentKorpri;
