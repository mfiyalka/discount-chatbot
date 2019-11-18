<?php

namespace App\Http\Controllers;

use App\Entities\User\User;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Repositories\Contracts\UserRepository;
use App\Repositories\Criteria\UserFilterCriteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index(Request $request)
    {
        $this->userRepository->pushCriteria(new UserFilterCriteria($request));
        $users = $this->userRepository->orderBy('created_at', 'desc')->paginate(10);
        return UserResource::collection($users);
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function store(StoreUserRequest $request)
    {
        $data = array_merge($request->all(), ['password' => Hash::make($request->get('password'))]);
        $user = $this->userRepository->create($data);
        return new UserResource($user);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->all();

        if (!is_null($request->get('password'))) {
            $data = array_merge($data, ['password' => Hash::make($request->get('password'))]);
        }

        if (is_null($request->get('password'))) {
            $data = $request->except('password');
        }

        $user = $this->userRepository->update($data, $user->id);
        return new UserResource($user);
    }

    public function destroy(User $user)
    {
        $this->userRepository->delete($user->id);
        return response()->json('Deleted successfully', 200);
    }

    public function toggleBlocked(User $user)
    {
        return new UserResource($user->toggleBlocked());
    }
}
