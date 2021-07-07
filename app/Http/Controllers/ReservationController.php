<?php

namespace App\Http\Controllers;
use App\Models\Reservation;
use Illuminate\Support\Facades\DB;
use Throwable;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class ReservationController extends Controller
{
    public function storeReservation(Request $request){
        $payLoad=$request->all();
        try{
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|max:255', 
                'last_name' => 'required|max:255', 
                'client_type' => 'required|max:255', 
                'description' => 'required|max:255', 
                'date_from' => 'required|date_format:Y-m-d|after:today', 
                'duration' => 'required|integer', 
                'budget_from' => 'required|regex:/^\d+(\.\d{1,3})?$/', 
                'budget_to' => 'required|regex:/^\d+(\.\d{1,3})?$/', 
                'email' => 'email', 
                'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:8',
                'transport_include'=>'boolean'
            ]);
        
            if ($validator->fails()) {
                return response(['code'=>'fails_validation',
                                    'error_message'=>$validator->errors()],400);
                            // ->withErrors($validator)
                            // ->withInput();
            }else{
                $reservation=Reservation::create([
                    "first_name"=>$payLoad['first_name'],
                    "last_name"=>$payLoad['last_name'],
                    "client_type"=>$payLoad['client_type'],
                    "description"=>$payLoad['description'],
                    "date_from"=>$payLoad['date_from'],
                    "duration"=>$payLoad['duration'],
                    "budget_from"=>$payLoad['budget_from'],
                    "budget_to"=>$payLoad['budget_to'],
                    "phone"=>$payLoad['code'].' '.$payLoad['phone'],
                    "email"=>$payLoad['email'],
                    "transport_include"=>$payLoad['transport_include'],
                    "status"=>"En attente"
                ]);
                return response(['code'=>'success',
                                    'error_message'=>[]],200);
            }

        }catch(Throwable $e) {
            return response(['code'=>'fails_extern','error_message'=>$e],500);
        }
    }

    public function getAllReservations(){
        try{
            $reservation=Reservation::all();
                return response(['code'=>'success',
                                    'content'=>$reservation],200);
        }catch(Throwable $e) {
            return response(['code'=>'fails_extern','error_message'=>$e],500);
        }
    }

    public function getReservation($id){
        try{
            $reservation=Reservation::find($id);
            if($reservation){
                return response(['code'=>'success',
                                'content'=>$reservation],200);
            }else{
                return response(['code'=>'fails',
                                    'error_message'=>'Reservation not found'],400);
            }
                
        }catch(Throwable $e) {
            return response(['code'=>'fails_extern','error_message'=>$e],500);
        }
    }

    public function editReservation(Request $request,$id){
        $payLoad=$request->all();
        try{
            $reservation=Reservation::find($id);
            if($reservation){
                DB::table('reservations')
                    ->where('id', $reservation->id)
                    ->update(['status' => $payLoad['status']]);
                return response(['code'=>'success',
                                'content'=>$reservation],200);
            }else{
                return response(['code'=>'fails',
                                    'error_message'=>'Reservation not found'],400);
            }
                
        }catch(Throwable $e) {
            return response(['code'=>'fails_extern','error_message'=>$e],500);
        }
    }
    
}
