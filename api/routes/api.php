<?php

use App\Http\Controllers\api\v1\TaskController;
use App\Http\Controllers\api\v1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post("/v1/login", [UserController::class, 'login']);
Route::apiResource("/v1/users", UserController::class);
Route::apiResource("/v1/tasks", TaskController::class);