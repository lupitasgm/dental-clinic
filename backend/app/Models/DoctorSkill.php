<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoctorSkill extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'doctor_id',
        'skill_id'
    ];
    
}
