<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**randomElement
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctor>
 */
class DoctorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->unique(true)->randomElement([
                "Dentista con amplia experiencia en odontología general y procedimientos cosméticos. Comprometido con proporcionar cuidado dental de alta calidad y aliviar el miedo dental en los pacientes.",
                "Especialista en ortodoncia con enfoque en la alineación dental y corrección de maloclusiones. Utiliza tecnologías avanzadas para lograr resultados efectivos y estéticos.",
                "Dentista pediátrico apasionado por la salud bucal de los niños. Crea un ambiente amigable y educativo para que los niños se sientan cómodos durante sus visitas dentales.",
                "Cirujano oral con experiencia en extracciones complejas y procedimientos quirúrgicos. Se dedica a brindar soluciones efectivas para problemas dentales más allá de la odontología general.",
                "Especialista en periodoncia enfocado en el tratamiento de enfermedades de las encías. Trabaja para mantener la salud periodontal y prevenir problemas a largo plazo.",
                "Dentista cosmético experto en transformar sonrisas. Utiliza técnicas avanzadas de blanqueamiento, carillas y restauraciones para mejorar la estética dental de los pacientes.",
                "Odontólogo familiar con un enfoque integral en la atención dental. Proporciona cuidado preventivo y educación para promover la salud bucal a lo largo de la vida.",
                "Implantólogo dedicado a la restauración de la función dental mediante la colocación de implantes dentales. Se centra en devolver la sonrisa y confianza a los pacientes con pérdida de dientes.",
                "Dentista comprometido con la odontología mínimamente invasiva. Busca conservar la estructura dental natural y utiliza tecnologías modernas para procedimientos menos invasivos.",
                "Especialista en odontología geriátrica con enfoque en las necesidades dentales de adultos mayores. Prioriza la comodidad y la salud oral en la tercera edad.",
                "Ortodoncista con experiencia en el tratamiento de maloclusiones y problemas de mordida. Utiliza aparatos ortodónticos modernos para lograr resultados eficientes y estéticos.",
                "Dentista deportivo que comprende las necesidades dentales únicas de atletas. Ofrece cuidado especializado y personalizado para mantener la salud oral en deportistas.",
                "Dentista restaurador especializado en reconstrucción dental. Utiliza técnicas avanzadas para restaurar dientes dañados o perdidos y mejorar la funcionalidad.",
                "Endodoncista experto en tratamientos de conducto. Enfocado en aliviar el dolor y preservar la salud dental mediante procedimientos de endodoncia de alta calidad.",
                "Especialista en odontología estética con enfoque en mejorar la apariencia dental. Proporciona soluciones personalizadas para lograr sonrisas hermosas y naturales.",
                "Dentista general con un enfoque en la atención preventiva y educación del paciente. Trabaja para mantener la salud bucal y prevenir problemas dentales a largo plazo.",
                "Especialista en odontopediatría comprometido con la salud dental de los niños. Crea experiencias positivas para construir una base sólida para el cuidado oral a lo largo de la vida.",
                "Dentista de emergencia disponible para abordar problemas dentales urgentes. Brinda atención rápida y efectiva para aliviar el dolor y resolver situaciones dentales críticas.",
                "Especialista en odontología digital con enfoque en tecnologías avanzadas. Utiliza escaneo digital y planificación virtual para mejorar la precisión en los procedimientos dentales.",
                "Dentista comunitario comprometido con la salud bucal en comunidades desatendidas. Proporciona servicios accesibles y trabaja para mejorar el acceso a la atención dental."
            ]),
            'gender' => fake()->randomElement(['M', 'H'])
        ];
    }
}
