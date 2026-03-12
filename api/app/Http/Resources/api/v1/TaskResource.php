<?php

namespace App\Http\Resources\api\v1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'desc' => $this->desc,
            'status_exec' => $this->status_exec,
            'status_aprov' => $this->status_aprov,
            'boss_id' => $this->whenLoaded('boss'),
            'func_id' => $this->whenLoaded('func'),
        ];
    }
}
