<?php

use Illuminate\Support\Facades\Route;
use Spatie\RouteDiscovery\Discovery\Discover;

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

Route::get('/', \App\Http\Controllers\FrontController::class)->name('front.show');

Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {
  Route::get('/dashboard', \App\Http\Controllers\DashboardController::class)->name('dashboard.show');
});

//Discover::controllers()->in(app_path('Http/Controllers'));
