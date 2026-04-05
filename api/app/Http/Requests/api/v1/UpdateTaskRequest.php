<?php

namespace App\Http\Requests\api\v1;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'sometimes|required|string|max:255',
            'desc' => 'sometimes|nullable|string',

            'status_exec' => 'sometimes|nullable|in:Pendente,Execução,Finalizado',
            'status_aprov' => 'sometimes|nullable|in:Pendente,Aprovado,Recusado',

            'boss_id' => 'sometimes|nullable|exists:users,id',
            'func_id' => 'sometimes|required|exists:users,id',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'O título é obrigatório.',
            'title.string' => 'O título deve ser um texto.',
            'title.max' => 'O título não pode ter mais de 255 caracteres.',

            'desc.string' => 'A descrição deve ser um texto.',

            'status_exec.in' => 'O status de execução deve ser: Pendente, Execução ou Finalizado.',
            'status_aprov.in' => 'O status de aprovação deve ser: Pendente, Aprovado ou Recusado.',

            'boss_id.exists' => 'O boss selecionado não existe.',

            'func_id.required' => 'O funcionário é obrigatório.',
            'func_id.exists' => 'O funcionário selecionado não existe.',
        ];
    }
}
