<?php

use Illuminate\Http\Request;

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

Route::get('/photos', 'PhotoController@index')->name('photos.index')->middleware('cors');;
Route::get('/photos/data/json', 'PhotoController@json')->name('photos.json')->middleware('cors');;
Route::post('/photos', 'PhotoController@store')->name('photos.store')->middleware('cors');;
Route::get('/photos/{photo}', 'PhotoController@show')->name('photos.show')->middleware('cors');;
