<?php

namespace App\Repositories\Criteria;

use App\Entities\User\User;
use Illuminate\Http\Request;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

class UserFilterCriteria implements CriteriaInterface
{
    private $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        if (!empty($value = $this->request->get('search'))) {
            $ids = User::search($value)->get()->pluck('id')->toArray();
            $model->whereIn('id', $ids);
        }

        if (!empty($value = $this->request->get('role'))) {

            switch ($value) {
                case 'all':
                    break;
                default:
                    $model->where('role', $value);
                    break;
            }
        }

        if (!empty($value = $this->request->get('blocked'))) {

            switch ($value) {
                case 'y':
                    $model->where('blocked', 1);
                    break;
                case 'n':
                    $model->where('blocked', 0);
                    break;
                default:
                    break;
            }
        }

        return $model;
    }
}
