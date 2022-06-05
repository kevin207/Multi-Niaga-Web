import React from "react";
import "./home.css";

//Home Components
// import Hero from "./components/hero/Hero";
import BsNav from "./components/nav/Nav";
import Beranda from "./components/beranda/Beranda";
import About from "./components/about/About";
import Produk from "./components/produk/Produk";
import Why from "./components/why/Why";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <>
      <BsNav />
      <Beranda />
      <About />
      <Produk />
      <Why />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
