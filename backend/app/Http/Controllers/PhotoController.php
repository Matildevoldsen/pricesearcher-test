<?php

namespace App\Http\Controllers;

use App\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $photos = Photo::all();

        if (!$photos) {
            return response()->json($photos);
        } else {
            return response()->json([
                'error' => 'Whoops, there is no data here.',
            ]);
        }
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
            'descr' => 'required',
            'photo_path' => 'required'
        ]);

        if ($request->hasFile('photo_path')) {
            $path = $request->file('photo_path')->store('public/photos');

            Photo::create([
                'descr' => $request->descr,
                'photo_path' => $path
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function show(Photo $photo)
    {
        //
    }
}
