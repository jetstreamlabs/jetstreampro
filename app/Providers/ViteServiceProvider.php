<?php

namespace App\Providers;

use App\Support\ViteConfig;
use Illuminate\Support\ServiceProvider;

class ViteServiceProvider extends ServiceProvider
{
	/**
	 * Register Vite runner services.
	 *
	 * @return void
	 */
	public function register()
	{
		$vite = $this->app->make(ViteConfig::class)->run();

		$config = $this->app->make('config');

		$config->set(
		  'vite',
		  array_merge($vite, $config->get('vite', []))
	  );
	}
}
