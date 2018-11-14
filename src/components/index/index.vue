<template>
	<div id="indexs">
		<v-title :title="title"></v-title>
		<div class="imgs">
			<div >
				<ul>
					<li  v-for="(item, index) in imgs" @mouseover="clearRun"><img v-show="index===selectIndex" :src="item.src"></li>
				</ul>
			</div>
            <ul class="point">
				<li v-for="(item, index) in imgs" :class="{on:index==selectIndex}">{{item.num}}</li>
			</ul>
		</div>
		<div class="btn_left" @click="clickLeft">< </div>
		<div class="btn_right" @click="clickRight"> > </div>
	</div>
</template>
<!--<script type="text/javascript" src="../../main.js"></script>-->

<script>
import Mtitle from '../common/title.vue';
export default {
	name: "app",
	data() {
		return {
			title: '我的App',
			selectIndex: 0,
			imgs: [
				{
					num: 1,
					src: require('../../assets/img/l_01.jpg')
				},
				{
					num: 2,
					src: require('../../assets/img/l_02.jpg')
				},
				{ num: 3, src: require('../../assets/img/l_03.jpg') },
				{ num: 4, src: require('../../assets/img/l_04.jpg') },
				{ num: 5, src: require('../../assets/img/l_05.jpg') },
				{ num: 6, src: require('../../assets/img/l_06.jpg') },
				{ num: 7, src: require('../../assets/img/l_07.jpg') }
			]
		}
	},
	computed: {

	},
	created:function(){
		this.slideAuto()
	},
	methods: {
		clearRun(){
			clearInterval(timer)
		},
		slideAuto() {
			var that = this;
		 var timer = setInterval(function() {
				that.clickRight();
			}, 3000)
		},
		clickRight() {
			// console.log(this.selectIndex)
			if (this.selectIndex == this.imgs.length - 1) {
				this.selectIndex = 0;
			} else {
				this.selectIndex++;
			}
		},
		clickLeft(){
			if (this.selectIndex ==0) {
				this.selectIndex = 0;
			} else {
				this.selectIndex--;
			}
		}


	},

	components: {
		'v-title': Mtitle
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
#indexs {
	.imgs {
		position: relative; // background: red;
		img {
			width: 100%;
			height: 250px;
		}
		ul {
			overflow: hidden;
			li{display: inline-block;}
		}
	}
	.point {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: right; // background: red;
		li {
			display: inline-block;
			margin-right: 2px;
			width: 15px;
			background: rgba(0, 0, 0, 0.2);
			line-height: 15px;
			text-align: center;
			border-radius: 50%;
			color: #fff;
		}
		.on{
           color: #000;
		   background:#fff;
		}
	}
	.btn_left {
		position: absolute;
		left: 0;
		top: 50%;
		background: rgba(0, 0, 0, 0.2);
		width: 15px;
		line-height: 30px;
		text-align: center;
	}
	.btn_right {
		position: absolute;
		right: 0;
		top: 50%;
		background: rgba(0, 0, 0, 0.2);;
		width: 15px;
		line-height: 30px;
		text-align: center;
	}
}
</style>