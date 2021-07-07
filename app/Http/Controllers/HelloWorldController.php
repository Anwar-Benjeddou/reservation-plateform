<?php

namespace App\Http\Controllers;
use App\Models\Catégorie;

use Illuminate\Http\Request;

class HelloWorldController extends Controller
{
    //
    public function helloWorld(){
        return "HELLO WORLD : this is a test message!";
    }
    public function getServices(){
        return Catégorie::all();
    }
}
