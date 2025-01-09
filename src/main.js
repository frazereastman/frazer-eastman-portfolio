// Plugins
import { registerPlugins } from '@/plugins'

import 'vuetify/styles'; // Ensure Vuetify base styles are included
import '@/styles/settings.scss'; // Import your custom settings

// CSS
import './index.css'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
