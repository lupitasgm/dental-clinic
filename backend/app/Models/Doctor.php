<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name', 
        'last_name', 
        'description'
    ];

    public function skills(): BelongsToMany {
        return $this->belongsToMany(Skill::class, 'doctor_skills', 'doctor_id', 'skill_id');
    }


    public function appointments(): BelongsToMany {
       return $this->belongsToMany(User::class, 'doctor_appointments', 'doctor_id', 'user_id');
    }   
}
