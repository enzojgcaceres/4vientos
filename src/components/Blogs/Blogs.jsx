import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData = [
    {
        title: "Como elegir tu marca perfecta",
        subtitle: "minima facere deserunt accusantium sunt fugit officiis, elegendi coporis maiores molestiae laudantium. Porro?",
        published: "jan 20, 2024 by Platón",
        image: Img1,
    },
    {
        title: "Como elegir tu ropa perfecta",
        subtitle: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod?",
        published: "jan 20, 2024 by Aristoteles",
        image: Img2,
    }, 
    {
        title: "Como elegir tu realidad perfecta",
        subtitle: "Como volverse un vegetal viviendo en una realidad paralela desarrollada por las marcas mas despiadadas de la actualidad?",
        published: "jan 20, 2024 by B. Gatos",
        image: Img3,
    }
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container' >
             {/* header */}
             <Heading title="Noticias Recientes" subtitle={"Explora nuestros Blogs"} />

             {/* blog section */}
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/* blog card */}
                {
                    BlogData.map((data) => (
                        <div key={data.title} className='bg-white dark:bg-gray-900'>
                            {/* image */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                            </div>
                            {/* content section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600'>{data.subtitle}</p>
                            </div>
                        </div>    
                    ))
                }
             </div>
        </div>
      
    </div>
  )
}

export default Blogs
