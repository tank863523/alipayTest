<template>
  <Header></Header>
  <div>
    <RouterLink to="/AliPay">AliPay</RouterLink>
<RouterLink to="/WeChatPay">WeChatPay</RouterLink>
<RouterView></RouterView>
  </div>


</template>

<script lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
export default{
  name:'vue', 
  components:{Header,},
  data(){return{
    message:'hello',
  }},
  methods:{},
  computed:{},
  watch:{},
  
}

</script>

