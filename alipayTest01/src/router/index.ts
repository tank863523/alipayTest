import { createRouter, createWebHistory } from 'vue-router'
import AliPay from '@/pages/AliPay.vue'
import WeChatPay from '@/pages/WeChatPay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/AliPay',
      component: AliPay
    },
    {
      path: '/WeChatPay',
      component: WeChatPay
    }

  ]
})

export default router
