<template>
	<tend-chart :plan_table="plan_table">

	</tend-chart>
</template>

<script>
	import tendChart from './trend_chart.vue'
	export default {
		components: {
			tendChart
		},
		data() {
			return {
				plan_table: [
					{city: '广州',d_money: '150',y_money: '400',sum_money: '550'},
					{city: '安徽',d_money: '250',y_money: '200',sum_money: '450'},
					{city: '浙江',d_money: '550',y_money: '400',sum_money: '950'},
					{city: '山东',d_money: '150',y_money: '200',sum_money: '350'}
				]

					
				
			}
		}

	}
</script>

<style>

</style>