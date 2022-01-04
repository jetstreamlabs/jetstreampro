<?php

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;

if (! function_exists('vite_assets')) {
	function vite_assets()
	{
		$devServerIsRunning = false;

		if (app()->environment('local')) {
			try {
				Http::get('http://localhost:3000');
				$devServerIsRunning = true;
			} catch (ConnectionException) {
			}
		}

		if ($devServerIsRunning) {
			return new HtmlString(<<<'HTML'
      <script type="module" src="http://localhost:3000/@vite/client"></script>
          <script type="module" src="http://localhost:3000/resources/js/app.js"></script>
      HTML);
		}

		$manifest = json_decode(file_get_contents(
	  public_path('build/manifest.json')
	), true);

		$script = asset("/build/{$manifest['resources/js/app.js']['file']}");
		$style = asset("/build/{$manifest['resources/js/app.js']['css'][0]}");

		return new HtmlString(<<<HTML
    <link rel="stylesheet" href="{$style}">
        <script type="module" src="{$script}" defer></script>
    HTML);
	}
}
