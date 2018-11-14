import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

const state = {
	count:1
}
export default new vuex.Store({
	state,
    mutations:{
    	add(state){
    		state.count++;
    	},
    	reduce(state){
    		state.count--;
    	}
    },
    computed:{
    	count(){
    		return this.$store.state.count;
    	}
    }
})
