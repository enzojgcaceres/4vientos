import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
    {
        title: 'Home',
        link: "#",
    },
    {
        title: 'Acerca',
        link: "#",
    },
    {
        title: 'Contacto',
        link: "#contact",
    },
    {
        title: 'Blog',
        link: "#blog",
    },
];

const FooterLinks2 = [
    {
        title: 'Premiados',
        link: "/products",
    },
    {
        title: 'Mensajes',
        link: "/products",
    },
    {
        title: 'Reseñas',
        link: "/products",
    },
    {
        title: 'Blog2',
        link: "#blog2",
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-20 pt-5'>
                {/* company details */}
                <div className='py-8 px-4'>
                    <a href='#' className='text-brandBlue font-bold tracking-wide text-2xl uppercase sm:text-3xl'>Tienda</a>
                    <p className='text-gray-600 lg:pr-24 pt-3'>
                       Acà encontraras todos los productos en Stock
                    </p>
                    <p className='text-gray-500 mt-4'>
                        Hecho con ❤ por EnzoCode + 2024
                    </p>

                    <a 
                        href='https://github.com/enzojgcaceres'
                        target='_blank'
                        className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'
                    >Visita mi GitHub</a>
                </div>

                {/* Footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3' >Links útiles</h1>
                        <ul className='space-y-3'>
                            { FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white  hover:text-black duration-300' >
                                     {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* second col */}
                    
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3' >Quick Links</h1>
                        <ul className='space-y-3'>
                            { FooterLinks2.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white  hover:text-black duration-300' >
                                     {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Company Address */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Direccion</h1>
                            <div>
                                <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Parque Avellaneda - CABA</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>+ 54 11 5947 1360</p>
                            </div>    

                            {/* social links */}
                            <div className='flex items-center gap-3 mt-6' >
                            <a href='https://www.instagram.com/4vientxs?igsh=ZGVqZDk1b2QwY3M0'>
                            <FaInstagram className='text-3xl text-gray-600 hover:text-black duration-300' />   
                            </a>
                            <a href='https://www.instagram.com/4vientxs?igsh=ZGVqZDk1b2QwY3M0'>
                            <FaFacebook className='text-3xl text-gray-600 hover:text-black duration-300' />   
                            </a>
                            <a href='#'>
                            <FaLinkedin className='text-3xl text-gray-600 hover:text-black duration-300' />   
                            </a>
                            
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
