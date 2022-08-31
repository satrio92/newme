import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faThLarge, faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThLarge, faArrowRight)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
