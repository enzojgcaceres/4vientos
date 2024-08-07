import React from 'react';
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Category2 from '../Category/Category2';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Partners from '../Partners/Partners';

import headphone from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/greyLogo.jpeg";
import smartwatch2 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/LogoDuBlanc.jpeg";

const BannerData = {
    discount: "30% OFF",
    title: "Cyber Monday",
    date: "10 Ene to 28 Ene",
    image: headphone,
    title2: "Carteras",
    title3: "Otoño de Ofertas",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    // bgColor: "#f42c37",
    bgColor: "#575757",
  };

  const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hours",
    date: "14 Feb to 28 Feb",
    image: smartwatch2,
    title2: "El relos de la Mariana",
    title3: "Promocion de Invierno",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#2dcc6f",
  };

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Category />
      <Category2 /> */}
      <Services />
      <Banner data={BannerData} />
      <Partners />
    </div>
  );
};

export default Home;
