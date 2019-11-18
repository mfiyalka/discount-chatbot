<?php

namespace App\Repositories\Eloquent;

use App\Entities\User\User;
use App\Repositories\AbstractRepository;
use App\Repositories\Contracts\UserRepository;

class UserRepositoryEloquent extends AbstractRepository implements UserRepository
{
    public function model()
    {
        return User::class;
    }
}
