<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, "index"]);

Route::resource('/home', CategoryController::class);

Route::get('/admin', [AdminController::class, "index"])->middleware(['auth', 'verified'])->name('admin');

Route::resource('/category', CategoryController::class)
    ->middleware(['auth', 'verified']);

Route::resource('/article', ArticleController::class)
    ->middleware(['auth', 'verified']);

require __DIR__ . '/auth.php';
