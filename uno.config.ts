import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerVariantGroup,
    presetTagify
} from 'unocss'
import { myPreset } from './styles-preset'

export default defineConfig({
    
    shortcuts: [
        { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
    ],
    transformers: [
        transformerVariantGroup(),
    ],
    rules:[
        ['m-1', { margin: '1px' }],
        [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
        [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
        [
            /^m-(\d)$/,
            ([, d]) => ({ margin: `${d / 4}rem` }),
            { autocomplete: 'm-<num>' }
        ],
    ],
    safelist: [
        ...Array.from({ length: 4 }, (_, i) => `mt-${i + 1}`),
    ],
    variants: [
        // hover:
        (matcher) => {
        if (!matcher.startsWith('hover:'))
            return matcher
        return {
        // slice `hover:` prefix and passed to the next variants and rules
            matcher: matcher.slice(6),
            selector: s => `${s}:hover`,
        }
        },
    ],
    presets: [
        presetUno(),
        presetTagify(),
        presetAttributify(),
        presetIcons(),
        myPreset
    ],
})