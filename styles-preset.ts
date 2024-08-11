import { Preset } from 'unocss'

export const myPreset: Preset = {
  name: 'my-preset',
  theme: {
    // ...
    colors: {
      'veryCool': '#0000ff', // class="text-very-cool"
      'brand': {
        'primary': 'hsl(var(--hue, 217) 78% 51%)', //class="bg-brand-primary"
        'secondary': '#ccaa33', //class="bg-brand-primary"
      },
    },
  },
  rules: [
    [/^m-([.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^p-([.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    [/^text-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
    ['flex', { display: 'flex' }],
  ],
  variants: [/* ... */],
  shortcuts: [
    { 'title': 'text-3xl font-bold'},
    { 'subtitle': 'text-xl'},
    { 'dot': 'inline-block w-4 h-4 rounded-full bg-veryCool align-middle'},
    { 'code': 'bg-gray-200 p-8.5 font-md'},
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 m-20 py-2 px-4 rounded-lg`],
  ],
}