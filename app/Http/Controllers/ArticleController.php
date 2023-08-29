<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Article/Index", [
            "articles" => Article::with(["user:id,name", "category:id,category_name"])->orderBy("id", "DESC")->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Article/Create", [
            "categories" => Category::get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            "title" => "required|string|max:255",
            "body" => "required",
            "image" => "required|mimes:jpeg,png,jpg,gif,svg",
            "category_id" => "required",
            "is_active" => "required",
        ]);

        $image = $request->file("image");
        $image->storeAs("public", $image->hashName());

        Article::create([
            "title" => $request->title,
            "slug" => Str::slug($request->title),
            "body" => $request->body,
            "category_id" => $request->category_id,
            "user_id" => Auth::id(),
            "image" => $image->hashName(),
            "is_active" => $request->is_active,
            "views" => 0,
        ]);

        return redirect(route("article.index"))->with("success", "Data Saved Successfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        return Inertia::render("Article/Edit", [
            "categories" => Category::get(),
            "article" => $article,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        $request->validate([
            "title" => "required|string|max:255",
            "body" => "required",
            "category_id" => "required",
            "is_active" => "required",
        ]);

        if ($request->file("image") == "") {
            $article->update([
                "title" => $request->title,
                "slug" => Str::slug($request->title),
                "body" => $request->body,
                "category_id" => $request->category_id,
                "user_id" => Auth::id(),
                "is_active" => $request->is_active,
                "views" => 0,
            ]);
        } else {
            Storage::disk("local")->delete("public" . $article->image);
            $image = $request->file("image");
            $image->storeAs("public", $image->hashName());
            $article->update([
                "title" => $request->title,
                "slug" => Str::slug($request->title),
                "body" => $request->body,
                "category_id" => $request->category_id,
                "user_id" => Auth::id(),
                "image" => $image->hashName(),
                "is_active" => $request->is_active,
                "views" => 0,
            ]);
        }

        return redirect(route("article.index"))->with("success", "Data Updated Successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        Storage::disk("local")->delete("public/" . $article->image);
        $article->delete();
        return redirect(route("article.index"))->with("success", "Data Deleted Successfully");
    }
}
