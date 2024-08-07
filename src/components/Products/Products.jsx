import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Popup from "../Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

//images import
import Img1 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.48.21.jpeg";
import Img2 from "../../assets/Marucha/drive-download-20240801T144433Z-001/Bolsa Charly.png";
import Img3 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.49.24 (1).jpeg";    
import Img4 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.49.24 (2).jpeg";
import Img5 from "../../assets/Marucha/drive-download-20240801T144433Z-001/Charly Munch.png";
import Img6 from "../../assets/Marucha/drive-download-20240801T144433Z-001/Cart Meditacion.png";
import Img7 from "../../assets/Marucha/drive-download-20240801T144433Z-001/Gatitos Bolsa tk1.png";
import Img8 from "../../assets/Marucha/drive-download-20240801T144433Z-001/Almendra.png";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Cartuchera",
        price: "$120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Charly bolsa de tela",
        price: "$420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Bowie Cartuchera",
        price: "$320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Yerbera",
        price: "$220",
        aosDelay: "600",
    },
];
const ProductsData2 = [
    {
        id: 5,
        img: Img5,
        title: "Cartuchera",
        price: "$120",
        aosDelay: "0",
    },
    {
        id: 6,
        img: Img6,
        title: "boogie",
        price: "$420",
        aosDelay: "200",
    },
    {
        id: 7,
        img: Img7,
        title: "Boogie 2",
        price: "$320",
        aosDelay: "400",
    },
    {
        id: 8,
        img: Img8,
        title: "Printed",
        price: "$220",
        aosDelay: "600",
    },
]

const Products = ( {  handleOrderPopup, orderPopup } ) => {
    // const [orderPopup, setOrderPopup] = React.useState(false);
  
    // const handleOrderPopup = () => {
    //   setOrderPopup(!orderPopup);
    // };
  
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
    <div>
        <div className='container'>
            {/* header */}
            <Heading title="Nuestros Productos" subtitle={"Explora nuestros productos"} />
            {/* body */}
            <ProductCard data={ProductsData}  handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} /> 
            <ProductCard data={ProductsData2}  handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
            <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
        </div>
    </div>
  )
}

export default Products
