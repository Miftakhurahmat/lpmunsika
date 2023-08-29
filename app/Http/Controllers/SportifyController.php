<?php

namespace App\Http\Controllers;

use App\Models\Sportify;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SportifyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Sportify/Index", [
            "sportifies" => Sportify::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Sportify/Create");
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
            "link" => "required|string|max:255",
        ]);

        Sportify::create([
            "title" => $request->title,
            "link" => $request->link,
        ]);

        return redirect(route("sportify.index"))->with("success", "Data Saved Successfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sportify  $sportify
     * @return \Illuminate\Http\Response
     */
    public function show(Sportify $sportify)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sportify  $sportify
     * @return \Illuminate\Http\Response
     */
    public function edit(Sportify $sportify)
    {
        return Inertia::render('Sportify/Edit', [
            'sportify' => $sportify,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sportify  $sportify
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sportify $sportify)
    {
        $request->validate([
            "title" => "required|string|max:255",
            "link" => "required|string|max:255",
        ]);

        $sportify->update([
            "title" => $request->title,
            "link" => $request->link,
        ]);

        return redirect(route("sportify.index"))->with("success", "Data Updated Successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sportify  $sportify
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sportify $sportify)
    {
        $sportify->delete();

        return redirect(route("sportify.index"))->with("success", "Data Deleted Successfully");
    }
}
