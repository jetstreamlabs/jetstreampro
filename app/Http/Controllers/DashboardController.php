<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\RouteDiscovery\Attributes\Route;

#[Route(middleware: ['auth:sanctum', 'verified'])]
class DashboardController extends Controller
{
  #[Route(name: 'dashboard.show')]
  public function __invoke(Request $request)
  {
    return Inertia::render('Dashboard');
  }
}
