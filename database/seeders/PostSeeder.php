<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Post::Create([
        'title' => 'html',
        'descrption' =>'kjgvhcfhfgcgfxghxjchjgfvkglkjbkbkj',
         'count' => 10,
       ]);
       Post::Create([
        'title' => 'php',
        'descrption' =>'kjgvhcfhfgcgfxghxjchjgfvkglkjbkbkj',
         'count' => 50,
       ]);
    }
}
