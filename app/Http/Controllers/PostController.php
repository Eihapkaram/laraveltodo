<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
public function index(Post $post) {

return response()->json($post->all());
}
public function add(Request $request) {
$title=$request->title;
$dis= $request->description;
$coments=$request->number;
 Post::Create([
        'title' => $title,
        'descrption' =>$dis,
         'count' => $coments,
       ]);
return redirect('http://127.0.0.1:8000/');
}
public function destroy ($id) {
$el=Post::destroy($id);
return redirect()->back();
}
public function edit (Request $request,$id) {
    $title=$request->title;
$dis= $request->description;
$coments=$request->number;
$el=Post::find($id)->Update([
    'title' => $title,
        'descrption' =>$dis,
         'count' => $coments,
]);
return redirect('http://127.0.0.1:8000/');
}

}
