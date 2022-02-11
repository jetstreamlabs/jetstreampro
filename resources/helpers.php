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
        Http::withoutVerifying()->get(config('vite.server'));
        $devServerIsRunning = true;
      } catch (ConnectionException) {
      }
    }

    if ($devServerIsRunning) {
      $client = config('vite.server').'/@vite/client';
      $module = config('vite.server').'/resources/js/app.js';

      return new HtmlString(<<<HTML
      <script type="module" src="{$client}"></script>
          <script type="module" src="{$module}"></script>
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
