<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\TugasAnswer;
use Illuminate\Http\Request;

class TugasAnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('answer_2')) {
            $file = $request->file('answer_2');
            $extension = $file->getClientOriginalName();
            $fileAnswer2 = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/tugas_answer/'), $fileAnswer2);
        } else {
            $fileAnswer2 = null;
        }
        
        if ($request->hasFile('answer_3')) {
            $file = $request->file('answer_3');
            $extension = $file->getClientOriginalName();
            $fileAnswer3 = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/tugas_answer/'), $fileAnswer3);
        } else {
            $fileAnswer3 = null;
        }

        TugasAnswer::create([
            'tugas_id' => $request->input('tugas_id'),
            'kelompok_id' => $request->input('kelompok_id'),
            'answer_1' => $request->input('answer_1'),
            'answer_2' => $fileAnswer2,
            'answer_3' => $fileAnswer3
        ]);

        return to_route('kelompok.show', $request->input('kelompok_id'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
