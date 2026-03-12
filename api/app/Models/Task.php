<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title',
        'desc',
        'status_exec',
        'status_aprov',
        'boss_id',
        'func_id'
    ];

    public function boss(){
        return $this->belongsTo(User::class, 'boss_id', 'id');
    }
    
    public function func(){
        return $this->belongsTo(User::class, 'func_id', 'id');
    }
}
