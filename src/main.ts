/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import Gleap from 'gleap';

// Please make sure to call this method only once!
Gleap.initialize("ogWhNhuiZcGWrva5nlDS8l7a78OfaLlV");

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
