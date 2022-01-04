window.locale = document.getElementsByTagName('html')[0].getAttribute('lang');

import '../css/app.css';

import { createJasmineApp } from '@/Jasmine';
import { InertiaProgress } from '@inertiajs/progress';

const appName =
	window.document.getElementsByTagName('title')[0]?.innerText || 'Jasmine';

createJasmineApp({
	appName: appName,
});

InertiaProgress.init({ color: '#4B5563' });
