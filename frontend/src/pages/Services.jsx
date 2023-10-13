import React from 'react'
import service from '../assets/images/service.jpg';

function Services() {
    let services = [
        { name: "Limpieza Dental", id: "1", description: "Eliminación de placa y sarro de los dientes para prevenir caries y enfermedades de las encías" },
        { name: "Radiografías Dentales", id: "2", description: "Imágenes de rayos X " },
        { name: "Empastes", id: "3", description: "Reparación de dientes con caries utilizando materiales de restauración" },
        { name: "Endodoncia", id: "4", description: " Tratamiento de conducto para salvar un diente dañado o infectado eliminando el tejido dental dañado y sellando el conducto." },
        { name: "Extracciones", id: "5", description: "Eliminación de dientes dañados o problemáticos, como las muelas del juicio." },
        { name: "Blanqueamiento Dental", id: "6", description: "Procedimientos para aclarar y mejorar el color de los dientes." },
        { name: "Ortodoncia", id: "7", description: "Tratamientos para corregir la alineación de los dientes y la mandíbula, como los brackets y los alineadores invisibles." },
        { name: "Implantes Dentales", id: "8", description: "Sustitución de dientes perdidos mediante la colocación de implantes de titanio en el hueso mandibular y la fijación de coronas o prótesis." }
      ];
    
      return (
        <section id='services' className="min-h-screen bg-[#BCDAF2] flex items-center">
          <div className="container mx-auto flex flex-col md:flex-row py-20 md:py-32">
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src={service}
                alt="Services"
                className="w-full h-auto rounded-lg shadow-lg md:mx-10"
              />
            </div>
            <div className="md:w-1/2 flex items-center p-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-213140">
                  Servicios:
                </h1>
                <ul className="text-custom-213140 divide-y divide-gray-500">
                  {services.map((service) => (
                    <li key={service.id} className="py-6">
                      <h2 className="text-lg font-bold">{service.name}</h2>
                      <p className="mt-2 font-semibold text-gray-600">{service.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Services