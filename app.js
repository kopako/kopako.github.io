const app = Vue.createApp({
    data() {
      return {
        currentLanguage: 'en', // Default language
        translations: {}, // Stores the loaded translations
      };
    },
    methods: {
      async loadTranslations() {
        try {
          // Fetch the selected language file dynamically
          const response = await fetch(`translations/${this.currentLanguage}.json`);
          if (!response.ok) throw new Error(`Failed to load ${this.currentLanguage}.json`);
          this.translations = await response.json();
        } catch (error) {
          console.error(error);
        }
      },
    },
    async mounted() {
      // Load the default language on app mount
      await this.loadTranslations();
    },
  });
  
  app.mount('#app');
  