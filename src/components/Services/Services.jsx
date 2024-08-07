import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
        title: "Envios a todo el pais",
        description: "Con cualquier pedido",
    }, 
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        title: "Transferencia segura",
        description: "Reembolso 30 días",
        
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
        title: "Pagos seguros",
        description: "Todos los medios de pago",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        title: "24/7 Support",
        description: "Atencion al cliente",
    }
]

const Services = () => {
  return (
    <div>
        <div className='container my-14 md:my-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {
                ServiceData.map((data) => (
                <div key={data.id} className='flex flex-col items-start sm:flex-row gap-4'>
                {data.icon}
                <div>
                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                <h1 className='text-gray-400 text-sm' >{data.description}</h1>
                </div>
            </div>
                    
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services
