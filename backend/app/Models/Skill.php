<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'specialization'
    ];

    public function doctors(): BelongsToMany {
        return $this->belongsToMany(Doctor::class, 'doctor_skills', 'skill_id', 'doctor_id');
    }
}
