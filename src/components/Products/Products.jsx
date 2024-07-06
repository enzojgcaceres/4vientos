import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

//images import
import Img1 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.48.21.jpeg";
import Img2 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.48.22.jpeg";
import Img3 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.49.24 (1).jpeg";    
import Img4 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.49.24 (2).jpeg";
import Img5 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.49.24.jpeg";
import Img6 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.49.24 (2).jpeg";
import Img7 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.49.26.jpeg";
import Img8 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.48.21.jpeg";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "$120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rock Mountain",
        price: "$420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "$320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "$220",
        aosDelay: "600",
    },
];
const ProductsData2 = [
    {
        id: 5,
        img: Img5,
        title: "Boat Headphone",
        price: "$120",
        aosDelay: "0",
    },
    {
        id: 6,
        img: Img6,
        title: "Rock Mountain",
        price: "$420",
        aosDelay: "200",
    },
    {
        id: 7,
        img: Img7,
        title: "Goggles",
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

const Products = () => {
  return (
    <div>
        <div className='container'>
            {/* header */}
            <Heading title="Nuestros Productos" subtitle={"Explora nuestros productos"} />
            {/* body */}
            <ProductCard data={ProductsData} /> 
            <ProductCard data={ProductsData2} />
        </div>
    </div>
  )
}

export default Products
