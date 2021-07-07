<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactForm extends Controller
{
    public function createForm(Request $request) {
        return view('index');
      }
  
      // Store Contact Form data
      public function ContactUsForm(Request $request) {
  
          // Form validation
          $this->validate($request, [
              'name' => 'required',
              'email' => 'required|email',
              'subject'=>'required',
              'message' => 'required'
           ]);
  
          //  Store data in database
          Contact::create($request->all());
  
          //  Send mail to admin
          \Mail::send('mail', array(
              'name' => $request->get('name'),
              'email' => $request->get('email'),
              'subject' => $request->get('subject'),
              'user_query' => $request->get('message'),
          ), function($message) use ($request){
              $message->from($request->email);
              $message->to('bjdd1234@gmail.com')->subject($request->get('subject'));
          });
  
          return response('OK');
      }
}
