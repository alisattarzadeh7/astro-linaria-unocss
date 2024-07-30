/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/info" />
/// <reference types="vite-plugin-pwa/vanillajs" />

import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
}



declare global {
    namespace astroHTML.JSX {
        interface HTMLAttributes extends AttributifyAttributes { }
    }
}

declare module 'virtual:pwa-register' {
    import type { RegisterSWOptions } from 'vite-plugin-pwa/types'

    export type { RegisterSWOptions }

    export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>
}

