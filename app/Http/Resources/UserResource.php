<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class UserResource
 * @package App\Http\Resources
 *
 * @property integer $id
 * @property string $name
 * @property string $surname
 * @property string $email
 * @property string $role
 * @property boolean $blocked
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 */
class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'surname' => $this->surname,
            'fullName' => trim("{$this->surname} {$this->name}"),
            'email' => $this->email,
            'role' => $this->role,
            'blocked' => $this->blocked,
            'created' => $this->created_at,
            'updated' => $this->updated_at,
            'auth' => auth()->user()->getAuthIdentifier() === $this->id
        ];
    }
}
