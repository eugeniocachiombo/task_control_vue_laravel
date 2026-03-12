<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Requests\api\v1\StoreUserRequest;
use App\Http\Requests\api\v1\UpdateUserRequest;
use App\Http\Resources\api\v1\UserResource;

class UserController extends Controller
{
    
    public function index()
    {
        $items = request('items', 10);
        $data = User::paginate($items);
        return UserResource::collection($data);
    }

    public function store(StoreUserRequest $request)
    {
        $data = user::create($request->validated());
        if (!$data) {
            return response()->json($data, 404);
        }
        return response()->json($data, 201);
    }

    public function show(string $id)
    {
        $data = user::find($id);
        if (!$data) {
            return response()->json($data, 404);
        }
        return response()->json($data, 200);
    }

    public function update(UpdateUserRequest $request, string $id)
    {
        $data = user::find($id);
        if (!$data) {
            return response()->json($data, 404);
        }
        $data->update($request->validated());
        return response()->json($data, 200);
    }

    public function destroy(string $id)
    {
        $data = user::find($id);
        if (!$data) {
            return response()->json($data, 404);
        }
        $data->delete();
        return response()->json($data, 204);
    }
}
