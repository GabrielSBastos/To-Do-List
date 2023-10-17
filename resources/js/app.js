require('./bootstrap');

import Vue from 'vue'

import App from './vue/app'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlusSquare, faTrash)

const app = new Vue({
    el: '#app',
    comments: {App}
})
