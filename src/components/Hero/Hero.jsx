import React from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/WhatsApp Image 2024-05-14 at 09.48.21.jpeg";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';


const HeroData = [
    {
         id: 1,
         img: Image1,
         subtitle: "Chijiro",
         title: "Exclusiva",
         title2: "Cartuchera",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Eh Gato!",
        title: "Zombie XXL",
        title2: "Marucha",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Alta compu",
        title: "Macbook Air",
        title2: "Apple",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
]
    

const Hero = ( { handleOrderPopup } ) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800, 
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,    
        cssEase: "ease-in-out",
        pauseOnHover: false,    
        pauseOnFocus: true,
    };

  return (
    <div className='container'>
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center"> 
      <div className='container pb-8 sm:pb-0'>
      {/* Hero section */}

        <Slider {...settings}>

            {
            HeroData.map((data) => (
                <div key={data.id}>

                    <div className='grid grid-cols-1 sm:grid-cols-2' >
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                            {data.subtitle}
                        </h1>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                            {data.title}
                        </h1>
                        <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>
                            {data.title2}
                        </h1>
                        <div>
                            <Button text="Compra por categoria"
                            bgColor="bg-primary"
                            textColor="text-white"
                            handleOrderPopup={handleOrderPopup}/>
                        </div>
                    </div>
                    {/* image section */}
                     <div className='order-1 sm:order-2' >
                        <div>
                            <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'/>
                        </div>
                     </div>
                    </div>
                </div>
            ))
            }
        </Slider>

        </div>
      </div>
    </div>
  )
}

export default Hero
