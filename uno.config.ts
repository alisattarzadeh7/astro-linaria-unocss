import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerVariantGroup,
    presetTagify
} from 'unocss'

export default defineConfig({
    shortcuts: [
        { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
    ],
    transformers: [
        transformerVariantGroup(),
    ],
    presets: [
        presetUno(),
        presetTagify(),
        presetAttributify({ /* preset options */ }),
        presetIcons(),
    ],
})