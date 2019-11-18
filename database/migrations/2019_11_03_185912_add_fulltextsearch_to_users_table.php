<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFulltextsearchToUsersTable extends Migration
{
    public function up()
    {
        DB::statement('ALTER TABLE users ADD FULLTEXT fulltext_index (name, surname, email)');
    }

    public function down()
    {
        DB::statement('DROP INDEX fulltext_index on users');
    }
}
