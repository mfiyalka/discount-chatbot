<?php

namespace App\Http\Requests\User;

use App\Entities\User\User;

/**
 * Class UpdateUserRequest
 * @package App\Http\Requests\User
 *
 * @property integer $id
 */
class UpdateUserRequest extends UserRequest
{
    public function rules(): array
    {
        $user = User::find($this->id);

        return array_merge(parent::rules(), [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.$user->id.',id,deleted_at,NULL'],
            'password' => ['sometimes', 'nullable', 'string', 'min:8']
        ]);
    }
}
