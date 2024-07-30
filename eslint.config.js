import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({
  formatters: true,
  astro: true,
}, [...tailwind.configs['flat/recommended']])
