<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
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

//Route::post('/sanctum/token', [AuthenticationService::class, 'authenticate']);

Route::group(['middleware' => ['auth:sanctum']], function () {
	Route::get('/me', function (Request $request) {
		return response($request->user());
	});
});

Broadcast::routes(['middleware' => ['auth:sanctum']]);
