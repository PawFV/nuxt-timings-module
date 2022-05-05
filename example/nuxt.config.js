export default {
  alias: {
    '@bravadoco/nuxt-timings/dist/runtime': require.resolve('../src/runtime'),
    '@bravadoco/nuxt-timings': require.resolve('../src')
  },
  modules: [
    '../src',
    '@nuxt/typescript-build'
  ],
  plugins: [
    '~/plugins/long-load',
    {
      src: '~/plugins/quick-load'
    }
  ],
  timings: {
    enabled: true
  }
}
