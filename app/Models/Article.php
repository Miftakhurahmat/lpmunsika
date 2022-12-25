<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "slug",
        "body",
        "category_id",
        "user_id",
        "image",
        "is_active",
        "views",
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, "category_id", "id");
    }

    public function user()
    {
        return $this->belongsTo(User::class, "user_id", "id");
    }
}
