<?php

namespace App\Entities\User;

class Role
{
    public const ROLE_ADMIN = 'admin';
    public const ROLE_MANAGER = 'manager';
    public const ROLE_OPERATOR = 'operator';

    public static function list(): array
    {
        return [
            self::ROLE_ADMIN,
            self::ROLE_MANAGER,
            self::ROLE_OPERATOR
        ];
    }
}
