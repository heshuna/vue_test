<template>
	<div class="nav">
		<ul>
			<li v-for="(item,i) in navs" @click="clickNav(i)" >
				<router-link :to="{name: item.src}">
					{{item.title}}
				</router-link>
			</li>
			<!--<li>
					<router-link :to="{name: 'photos'}">
						照片
					</router-link>
				</li>
				<li>
					<router-link :to="{name: 'article'}">
						文本
					</router-link>
				</li>
				<li>
					<router-link :to="{name: 'mine'}">
						我的
					</router-link>
				</li>-->

		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nowIndex: 0,
			navs: [
				{ title: '首页', src: 'index',num:0 },
				{ title: '照片', src: 'photos',num:1},
				{ title: '文本', src: 'article' ,num:2},
				{ title: '我的', src: 'mine',num:0 },

			]
		}
	},
	methods: {
		clickNav(i) {
			console.log(i)
			this.nowIndex = i
		}
	}
}
</script>



<style lang="less" scoped>
@import url('../../assets/css/base.less');
.nav {
	background-color: deepskyblue;
	width: 100%;
	position: fixed;
	bottom: 0;
	line-height: 50px;
	ul {
		display: flex;
		li {
			flex: 1;
			text-align: center;
			a {
				text-align: center; //  color: #fff;
				padding: 5px 10px;
			}
		}
		// .on {
		// 	background: #000;
		// 	a {
		// 		color: #fff;
		// 	}
		// }
		// router-link-active 是router-link选中时自带的class属性
		.router-link-active{
				background: #000;
		
				color: #fff;
			
		}
	}
}
</style>