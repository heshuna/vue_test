<template>
<div>
  <router-view>
   
   </router-view>
   <v-nav></v-nav>
</div>
   
</template>

<script>
import Mynav from './components/common/nav.vue';

export default {
  name:"app",
		data() {
			return {
             
			}
		},
		methods:{
			
		},
		components:{
			"v-nav":Mynav,

		}
 
}
</script>

<style lang='less'>
@import url('./assets/css/base.less');
</style>
