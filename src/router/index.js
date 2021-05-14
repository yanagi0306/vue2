import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '../Info.vue'
import Question from '../Question.vue'
import Consultation from '../Consultation.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Info',
    component: Info
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: Consultation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
