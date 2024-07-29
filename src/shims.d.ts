import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
}



declare global {
    namespace astroHTML.JSX {
        interface HTMLAttributes extends AttributifyAttributes { }
    }
}
