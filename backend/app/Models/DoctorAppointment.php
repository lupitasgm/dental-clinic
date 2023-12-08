<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class DoctorAppointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'doctor_id',
        'schedule',
        'skill_id'
    ];

    public function doctor() : BelongsToMany 
    {
        return $this->belongsToMany(Doctor::class, 'doctor_appointments', 'id', 'doctor_id');
    }

    public function skills() : BelongsToMany {
        return $this->belongsToMany(Skill::class, 'doctor_appointments', 'id', 'skill_id');
    }

}
