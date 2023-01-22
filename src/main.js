/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { vsButton, vsPrompt, vsSideBar } from 'vuesax3'
import 'vuesax3/dist/vuesax.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
app.use(vsButton)
app.use(vsPrompt)
app.use(vsSideBar)