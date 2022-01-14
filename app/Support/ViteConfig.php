<?php

namespace App\Support;

class ViteConfig
{
	/**
	 * Vite dev server port.
	 *
	 * @var int
	 */
	protected int $vitePort = 3000;

	/**
	 * Vite dev server domain.
	 *
	 * @var string
	 */
	protected string $viteDomain = '';

	/**
	 * Vite dev server protocol.
	 *
	 * @var string
	 */
	protected string $viteProtocol = 'http';

	/**
	 * Does the server expect a secure uri?
	 *
	 * @var bool
	 */
	protected bool $expectsSecure = false;

	/**
	 * Server request http_host.
	 *
	 * @var string
	 */
	protected string $serverDomain = '';

	/**
	 * Exploded APP_URL string.
	 *
	 * @var array
	 */
	protected array $baseUri = [];

	/**
	 * Full Vite dev server uri.
	 *
	 * @var string
	 */
	protected string $full = '';

	/**
	 * Create a new instance of the class.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$base = env('APP_URL', false);

		if (! $base) {
			throw new \Exception('You must set the APP_URL environment variable in .env', 1);
		}

		$this->expectsSecure = request()->server->get('HTTPS') === 'on' ? true : false;
		$this->serverDomain = request()->server->get('HTTP_HOST');

		$this->baseUri = explode('://', $base);
		$this->make();
	}

	/**
	 * Spit out our config array.
	 *
	 * @return array
	 */
	public function run(): array
	{
		$config = [
			'https' => $this->expectsSecure,
			'protocol' => $this->viteProtocol,
			'domain' => $this->viteDomain,
			'port' => $this->vitePort,
			'server' => $this->full,
		];

		return $config;
	}

	/**
	 * Build up and store the config vars.
	 *
	 * @return \App\Support\ViteConfig
	 */
	protected function make(): ViteConfig
	{
		$this->processPort()
	  ->processSecure()
	  ->processDomain();

		$this->full = $this->viteProtocol.'://'.$this->viteDomain.':'.$this->vitePort;

		unset($this->baseUri);

		return $this;
	}

	/**
	 * Determine and set the port for Vite.
	 *
	 * @return \App\Support\ViteConfig
	 */
	protected function processPort(): ViteConfig
	{
		$vitePort = env('VITE_PORT', false);

		$this->vitePort = ! $vitePort ? 3000 : $vitePort;

		return $this;
	}

	/**
	 * Determine and set secure state for Vite.
	 *
	 * @return \App\Support\ViteConfig
	 */
	protected function processSecure(): ViteConfig
	{
		$viteSecure = env('VITE_HTTPS', false);
		$defSecure = $this->baseUri[0][-1] === 's' ? true : false;

		if ($this->expectsSecure && (! $viteSecure || ! $defSecure)) {
			throw new \Exception('Your server is secure, set APP_URL and VITE_HTTPS to true.', 1);
		}

		$this->viteProtocol = $this->expectsSecure ? 'https' : 'http';

		return $this;
	}

	/**
	 * Determine and set our domain for Vite.
	 *
	 * @return \App\Support\ViteConfig
	 */
	protected function processDomain(): ViteConfig
	{
		$viteDomain = env('VITE_DOMAIN', false);
		$default = env('APP_DOMAIN', false);

		if (! $this->expectsSecure) {
			$this->viteDomain = 'localhost';

			return $this;
		}

		if ($viteDomain === $this->serverDomain) {
			$this->viteDomain = $viteDomain;

			return $this;
		}

		if ($default === $this->serverDomain) {
			$this->viteDomain = $default;

			return $this;
		}

		$this->viteDomain = $this->serverDomain;

		return $this;
	}
}
