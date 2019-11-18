<?php

namespace App\Http\Requests\User;

use App\Entities\User\Role;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            'role' => ['required', Rule::in(Role::list())],
            'blocked' => ['required', 'boolean']
        ];
    }
}
