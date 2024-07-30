/// <reference lib="webworker" />

import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import {  StaleWhileRevalidate } from 'workbox-strategies'

declare let self: ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST ?? [])

registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|css|js|woff|ttf)/,
    new StaleWhileRevalidate({
        cacheName: 'base-assets',
    })
)



registerRoute(
    (file) => file.request.url.startsWith('https://cdn.alibaba.ir'),
    new StaleWhileRevalidate({
        cacheName: 'alibaba-assets'
    })
)



self.addEventListener('message', (event) => {
    if (event.data && event.data.type) {
        if (event.data.type === 'SKIP_WAITING') {
            self.skipWaiting()
        }
    }
})
