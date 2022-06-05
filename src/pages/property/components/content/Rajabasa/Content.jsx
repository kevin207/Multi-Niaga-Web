import React from "react";
import "../content.css";

// Card Component
import Card from "../components/Card";
import { Fade } from "react-awesome-reveal";

//House Image
import IMG1_1 from "../../../assets/Rajabasa/Type 60 98/1.jpg";
import IMG1_2 from "../../../assets/Rajabasa/Type 60 98/2.jpg";

import IMG2_1 from "../../../assets/Rajabasa/Type 70 103/1.jpg";
import IMG3_1 from "../../../assets/Rajabasa/Type 75 112/1.jpg";
import IMG4_1 from "../../../assets/Rajabasa/Type 75 132/1.jpg";

const ContentRajabasa = () => {
  const property = [
    {
      id: 1,
      image: [IMG1_1, IMG1_2],
      nama: "Tipe 60/98",
      desc: "RUMAH DI RAJABASA, PERUMAHAN DESAIN MINIMALIS DENGAN KUALITAS TERBAIK DAN HARGA TERJANGKAU",
      alamat: "JL. Anggrek, Rajabasa Jaya, Kota Bandar Lampung",
      harga: "20.000.000 (DP)",
      kamar: "3",
      toilet: "1",
      lt: 98,
      lb: 60,
      keterangan: "7 menit dari teminal Rajabasa, 2 menit dari Polsek Sukarame, dekat dengan Universitas Lampung, Yayasan Al Kautsar, Ciplaz, Indogrosir, dll",
    },

    {
      id: 2,
      image: [IMG2_1],
      nama: "Tipe 70/103",
      desc: "RUMAH DI RAJABASA, PERUMAHAN DESAIN MINIMALIS DENGAN KUALITAS TERBAIK DAN HARGA TERJANGKAU",
      alamat: "JL. Anggrek, Rajabasa Jaya, Kota Bandar Lampung",
      harga: "20.000.000 (DP)",
      kamar: "3",
      toilet: "1",
      lt: 103,
      lb: 70,
      keterangan: "7 menit dari teminal Rajabasa, 2 menit dari Polsek Sukarame, dekat dengan Universitas Lampung, Yayasan Al Kautsar, Ciplaz, Indogrosir, dll",
    },

    {
      id: 3,
      image: [IMG3_1],
      nama: "Tipe 75/112",
      desc: "RUMAH DI RAJABASA, PERUMAHAN DESAIN MINIMALIS DENGAN KUALITAS TERBAIK DAN HARGA TERJANGKAU",
      alamat: "JL. Anggrek, Rajabasa Jaya, Kota Bandar Lampung",
      harga: "20.000.000 (DP)",
      kamar: "3",
      toilet: "2",
      lt: 112,
      lb: 75,
      keterangan: "7 menit dari teminal Rajabasa, 2 menit dari Polsek Sukarame, dekat dengan Universitas Lampung, Yayasan Al Kautsar, Ciplaz, Indogrosir, dll",
    },

    {
      id: 4,
      image: [IMG4_1],
      nama: "Tipe 75/132",
      desc: "RUMAH DI RAJABASA, PERUMAHAN DESAIN MINIMALIS DENGAN KUALITAS TERBAIK DAN HARGA TERJANGKAU",
      alamat: "JL. Anggrek, Rajabasa Jaya, Kota Bandar Lampung",
      harga: "20.000.000 (DP)",
      kamar: "3",
      toilet: "1",
      lt: 132,
      lb: 75,
      keterangan: "7 menit dari teminal Rajabasa, 2 menit dari Polsek Sukarame, dekat dengan Universitas Lampung, Yayasan Al Kautsar, Ciplaz, Indogrosir, dll",
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

export default ContentRajabasa;
