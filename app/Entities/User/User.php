<?php

namespace App\Entities\User;

use App\Components\FullTextSearch\FullTextSearch;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

/**
 * App\Entities\User\User
 *
 * @property int $id
 * @property string $name
 * @property string|null $surname
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property string|null $role
 * @property bool $blocked
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Client[] $clients
 * @property-read int|null $clients_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Token[] $tokens
 * @property-read int|null $tokens_count
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User\User onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User search($term)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereBlocked($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereSurname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\User\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User\User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User\User withoutTrashed()
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use HasApiTokens, Notifiable, SoftDeletes, FullTextSearch;

    public const BLOCKED = true;

    protected $fillable = [
        'name', 'email', 'password', 'role', 'surname', 'blocked'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'blocked' => 'boolean'
    ];

    protected $searchable = [
        'name',
        'surname',
        'email'
    ];

    public function isBlocked()
    {
        return $this->blocked === self::BLOCKED;
    }

    public function toggleBlocked(): self
    {
        switch ($this->isBlocked()) {
            case true:
                $this->blocked = false;
                break;
            case false:
                $this->blocked = true;
                break;
            default:
                $this->blocked = false;
        }

        $this->save();

        return $this;
    }
}
