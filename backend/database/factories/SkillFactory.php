<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Skill>
 */
class SkillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition(): array
    {
        return [
            'specialization' => fake()->unique(true)->randomElement([
                "Limpieza dental",
                "Blanqueamiento dental",
                "Extracción de muelas",
                "Empastes dentales",
                "Tratamiento de conducto",
                "Coronas dentales",
                "Ortodoncia",
                "Implantes dentales",
                "Prótesis dentales",
                "Radiografías dentales",
                "Selladores dentales",
                "Tratamiento de encías",
                "Cirugía oral",
                "Odontología estética",
                "Dentaduras postizas",
                "Endodoncia",
                "Consulta de rutina",
                "Radiografía panorámica",
                "Férulas de descarga",
                "Odontopediatría"
            ])
        ];
    }
}
