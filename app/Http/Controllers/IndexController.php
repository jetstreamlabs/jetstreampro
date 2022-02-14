<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\RouteDiscovery\Attributes\Route as DiscoveryRoute;

class IndexController extends Controller
{
  #[DiscoveryRoute(name: 'index.show')]
  public function __invoke()
  {
    return Inertia::render('Welcome', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
    ]);
  }
}
