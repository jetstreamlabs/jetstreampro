window.locale = document.getElementsByTagName('html')[0].getAttribute('lang')

import '../css/app.css'

import { createJetstreamApp } from '@/Application'
import { InertiaProgress } from '@inertiajs/progress'

// Github actions strips quotes from secrets so any app name
// with whitespace stored in a secret will not parse when copied
// to a .env file. Thusly we can't use the env to get our app name.

// If your app has no whitespace you can switch these.
const appName = import.meta.env.VITE_APP_NAME
//const appName = 'Jetstream Pro'

createJetstreamApp({ appName: appName })

InertiaProgress.init({ color: 'rgb(104, 117, 245)' })
