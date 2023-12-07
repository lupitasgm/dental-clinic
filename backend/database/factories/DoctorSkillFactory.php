<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\Skill;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DoctorSkill>
 */
class DoctorSkillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'doctor_id' => Doctor::factory()->createOne()->id,
            'skill_id' => Skill::factory()->createOne()->id,
        ];
    }
}
