window.locale = document.getElementsByTagName('html')[0].getAttribute('lang')

import '../css/app.css'

import { createJetstreamApp } from '@/Application'
import { InertiaProgress } from '@inertiajs/progress'

createJetstreamApp({ appName: import.meta.env.VITE_APP_NAME })

InertiaProgress.init({ color: 'rgb(104, 117, 245)' })
