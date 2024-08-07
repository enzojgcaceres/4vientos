import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/pages/Home.jsx';
// import Hero from "./components/Hero/Hero";
// import Category from "./components/Category/Category";
// import Category2 from "./components/Category/Category2";
// import Services from "./components/Services/Services";
// import Banner from "./components/Banner/Banner";
// import Partners from "./components/Partners/Partners.jsx";

// import headphone from "./assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/greyLogo.jpeg";
// import smartwatch2 from "./assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/LogoDuBlanc.jpeg";

import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// const BannerData = {
//   discount: "30% OFF",
//   title: "Cyber Monday",
//   date: "10 Ene to 28 Ene",
//   image: headphone,
//   title2: "Carteras",
//   title3: "Otoño de Ofertas",
//   title4:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   // bgColor: "#f42c37",
//   bgColor: "#575757",
// };

// const BannerData2 = {
//   discount: "30% OFF",
//   title: "Happy Hours",
//   date: "14 Feb to 28 Feb",
//   image: smartwatch2,
//   title2: "El relos de la Mariana",
//   title3: "Promocion de Invierno",
//   title4:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   bgColor: "#2dcc6f",
// };

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<Products handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>} />
          <Route path="/blogs/*" element={<Blogs />} />
        </Routes>
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
//       <Navbar handleOrderPopup={handleOrderPopup} />
//       <Hero handleOrderPopup={handleOrderPopup} />
//       <Category />
//       <Category2 />
//       <Services />
//       <Banner data={BannerData} />
//       <Products />
//       <Banner data={BannerData2} />
//       <Blogs />
//       <Partners />
//       <Footer />
//       <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
//     </div>
//   );
// };


