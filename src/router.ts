import { createRouter,createWebHistory } from 'vue-router'
import Index from './pages/Index.vue'
import About from './pages/About.vue'
 
const routes = [
    { path: '/', name: 'index', component: Index },
    { path: '/about', name: 'about', component: About },
]
 
const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})
 
export default router