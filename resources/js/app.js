window.locale = document.getElementsByTagName('html')[0].getAttribute('lang')

import '../css/app.css'

import { createJetstreamApp } from '@/Application'
import { InertiaProgress } from '@inertiajs/progress'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Jetstream Pro'

createJetstreamApp({ appName: appName })

InertiaProgress.init({ color: 'rgb(104, 117, 245)' })
