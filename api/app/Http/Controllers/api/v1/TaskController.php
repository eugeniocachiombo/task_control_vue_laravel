<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Http\Requests\api\v1\StoreTaskRequest;
use App\Http\Requests\api\v1\UpdateTaskRequest;
use App\Http\Resources\api\v1\TaskResource;

class TaskController extends Controller
{

    public function index()
    {
        return Task::all();
    }

    public function store(StoreTaskRequest $request)
    {
        return Task::create($request->validated());
    }

    public function show(string $id)
    {
        $data = Task::find($id);
        if (!$data) {
            return response()->json($data, 404);
        }
        return response()->json($data, 200);
    }

    public function update(UpdateTaskRequest $request, string $id)
    {
        $data = Task::find($id);
        if (!$data) {
            return response()->json($data, 404);
        }
        $data->update($request->validated());
        return response()->json($data, 200);
    }

    public function destroy(string $id)
    {
        $data = Task::find($id);
        if (!$data) {
            return response()->json($data, 404);
        }
        $data->delete();
        return response()->json($data, 204);
    }
}
