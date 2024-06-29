<?php

namespace Database\Factories;

use App\Models\Tugas;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TugasAnswer>
 */
class TugasAnswerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tugas_id' => Tugas::inRandomOrder()->where('is_active', 'Y')->first()->id,
            'user_id' => User::inRandomOrder()->first()->id,
            'answer_1' => $this->faker->paragraph(),
            'answer_2' => $this->faker->randomElement(['placeholder-1.pdf']),
            'answer_3' => $this->faker->randomElement(['placeholder-1.pdf']),
            'grade' => $this->faker->numberBetween(1, 100),
            'grade_category' => $this->faker->randomElement(['A', 'B', 'C', 'D', 'E']),
            'feedback'=> $this->faker->paragraph()
        ];
    }
}
