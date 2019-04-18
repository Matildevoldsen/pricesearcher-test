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

    public function json()
    {
        if (Storage::disk('local')->has('public/data/data.json')) {
            return Storage::disk('local')->get('public/data/data.json');
        } else {
            return response()->json([
                'error' => 'File does not exist',
                'errorMessage' => 'The file data.json does not exist.'], 404);
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
            'description' => 'required',
            'photo_path' => 'required'
        ]);

        if ($request->hasFile('photo_path')) {
            $path = $request->file('photo_path')->store('public/photos');

            Photo::create([
                'description' => $request->description,
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
        return $photo;
    }
}
