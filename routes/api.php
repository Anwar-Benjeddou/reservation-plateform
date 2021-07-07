<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware(['cors'])->group(function () {
    Route::get('/hello-world-test', [App\Http\Controllers\HelloWorldController::class, 'helloWorld']);
    Route::post('/reservation/register', [App\Http\Controllers\ReservationController::class, 'storeReservation']);
   });
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
