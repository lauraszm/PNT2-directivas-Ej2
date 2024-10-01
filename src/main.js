import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import RickAndMorty from './components/RickAndMorty.vue'

const app = createApp(RickAndMorty)
app.mount('#app')
