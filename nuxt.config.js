module.exports = {
  mode: 'universal', // or 'spa'
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
      },
    },
  },
  css: ['~/css/index.css'],
  plugins: [
    { src: '~/plugins/vuex-persistedstate', ssr: false },
    '~/plugins/vue-fontawesome',
  ],
  env: {},
  modules: ['@nuxtjs/dotenv'],
};
