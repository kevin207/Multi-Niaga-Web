import React from "react";
import "../property.css";

//Sub Components
import Header from "../../components/header/Header";
import Footer from "../../../home/components/footer/Footer";
import ContentKorpri from "./../../components/content/Korpri/Content";

const Korpri = () => {
  return (
    <>
      <Header />
      <ContentKorpri />
      <Footer />
    </>
  );
};

export default Korpri;
