<?php

use App\Models\Doctor;
use App\Models\Skill;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctor_skills', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Doctor::class);            
            $table->foreignIdFor(Skill::class);            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor_skills');
    }
};
