<?php

use Illuminate\Support\Facades\Route;

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
Route::middleware(['cors'])->group(function () {
    Route::get('/hello-world-test', [App\Http\Controllers\HelloWorldController::class, 'helloWorld']);
    Route::post('/reservation/register', [App\Http\Controllers\ReservationController::class, 'storeReservation']);
    Route::put('/reservation/edit/{id}', [App\Http\Controllers\ReservationController::class, 'editReservation']);
    Route::get('/reservation/get/one/{id}', [App\Http\Controllers\ReservationController::class, 'getReservation']);
    Route::get('/reservation/get/all', [App\Http\Controllers\ReservationController::class, 'getAllReservations']);
   });
Route::get('/', function () {
    return view('index');
});

// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
