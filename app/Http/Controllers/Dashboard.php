<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Dashboard extends Controller
{
	public function __invoke(Request $request)
	{
		return Inertia::render('Dashboard');
	}
}
