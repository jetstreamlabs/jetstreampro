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
		if ($this->app->environment('local')) {
			$config = $this->app->make('config');

			$vite = $this->app->make(ViteConfig::class)->run();

			$config->set(
		'vite',
		array_merge($vite, $config->get('vite', []))
	  );
		}
	}
}
