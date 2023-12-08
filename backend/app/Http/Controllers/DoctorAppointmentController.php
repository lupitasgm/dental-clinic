<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDoctorAppointmentRequest;
use App\Http\Requests\UpdateDoctorAppointmentRequest;
use App\Models\DoctorAppointment;
use Illuminate\Http\Request;

class DoctorAppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDoctorAppointmentRequest $request)
    {
        $validated = $request->validated();
        return DoctorAppointment::query()->create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return DoctorAppointment::query()->where('user_id', $id)->with(['doctor', 'skills'])->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorAppointmentRequest $request, DoctorAppointment $doctorAppointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $appointment = DoctorAppointment::query()->where('id', $id)->firstOrFail();
        if ($appointment->user_id === auth()->user()->id) {
            $appointment->delete();
        }

        return response()->noContent();
    }
}
