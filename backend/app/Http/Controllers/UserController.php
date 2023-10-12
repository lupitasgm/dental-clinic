<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $credentials = $request->validated();

        $userExists = User::query()->firstWhere('email', '=', $credentials['email']);
        if (!is_null($userExists)) {
            throw ValidationException::withMessages(['email' => 'User already exists with that email']);
        }

        $user = new User($credentials);
        $user->save();

        $token = $user->createToken('t')->plainTextToken;

        return ['user' => $user, 'token' => $token];
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }

    public function register(StoreUserRequest $request) {
        return $this->store($request);
    }

    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', Password::min(8)->letters()]
        ]);

        $user = User::query()->firstWhere('email', $credentials['email']);
        if (!Hash::check($credentials['password'], $user->password)) {
            throw new AuthenticationException();
        }

        $token = $user->createToken('t')->plainTextToken;

        return ['token' => $token, 'user' => $user];
    }

    public function logout(Request $request) {
        $user = request()->user();
        $user->tokens()->delete();

        return response()->noContent();
    }
}
