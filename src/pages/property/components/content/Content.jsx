import React from "react";
import "./content.css";

// Card Component
import Card from "./components/Card";
import { Fade } from "react-awesome-reveal";

//House Image
import IMG1_1 from "../../assets/Rajabasa/Type 50 84/1.jpg";
import IMG2_1 from "../../assets/Rajabasa/Type 70 103/1.jpg";
import IMG3_1 from "../../assets/Rajabasa/Type 75 112/1.jpg";
import IMG4_1 from "../../assets/Rajabasa/Type 75 132/1.jpg";

const Content = () => {
  const property = [
    {
      id: 1,
      image: IMG1_1,
      nama: "Tipe 50/84",
      desc: "Dijual/Disewakan rumah minimalis Type Z-01, harga sesuai dengan yang tertera, apabila ingin nego atau bertanya-tanya silahkan hubungi kami",
      alamat: "JL. Anggrek, Rajabasa Jaya, Kota Bandar Lampung",
      harga: "20.000.000 (DP)",
      kamar: "3",
      toilet: "1",
      lt: 84,
      lb: 50,
      keterangan: "Garasi muat 2 mobil ada kolam berenang pribadi",
    },

    {
      id: 2,
      image: IMG2_1,
      nama: "Tipe 70/103",
      desc: "Dijual/Disewakan rumah minimalis Type Z-01, harga sesuai dengan yang tertera, apabila ingin nego atau bertanya-tanya silahkan hubungi kami",
      alamat: "JL. Anggrek, Rajabasa Jaya, Kota Bandar Lampung",
      harga: "20.000.000 (DP)",
      kamar: "3",
      toilet: "1",
      lt: 103,
      lb: 70,
      keterangan: "Garasi muat 2 mobil ada kolam berenang pribadi",
    },

    {
      id: 3,
      image: IMG3_1,
      nama: "Tipe 75/112",
      desc: "Dijual/Disewakan rumah minimalis Type Z-01, harga sesuai dengan yang tertera, apabila ingin nego atau bertanya-tanya silahkan hubungi kami",
      alamat: "JL. Anggrek, Rajabasa Jaya, Kota Bandar Lampung",
      harga: "20.000.000 (DP)",
      kamar: "3",
      toilet: "1",
      lt: 112,
      lb: 75,
      keterangan: "Garasi muat 2 mobil ada kolam berenang pribadi",
    },

    {
      id: 4,
      image: IMG4_1,
      nama: "Tipe 75/132",
      desc: "Dijual/Disewakan rumah minimalis Type Z-01, harga sesuai dengan yang tertera, apabila ingin nego atau bertanya-tanya silahkan hubungi kami",
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

export default Content;
