// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/supabase"],
  supabase: {redirect: false},
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js', type: 'text/javascript'}
      ]
    }
  }
})
