<?php 
namespace App\Actions;

use Inertia\Inertia;
use App\Core\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class Index extends Controller 
{
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
