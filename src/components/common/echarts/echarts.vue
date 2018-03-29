<template>
	<div id="chartData" style="width: 100%;height: 100%;"></div>
</template>

<script>
	// 导入echarts
//	import echarts from 'echarts'
	export default{
		  data() {
        return {
            // 初始化空对象
            chart: null,
            // 初始化图表配置
          	option : {
						    tooltip: {
						        trigger: 'axis'
						    },
						    legend: {
						        data:['今日','昨日','可比日','上周同期']
						    },
						    grid: {
						        left: '0%',
						        right: '0%',
						        bottom: '0%',
						        containLabel: true
						    },
						    xAxis: {
						        type: 'category',
						        boundaryGap: false,
						        data: ['周一','周二','周三','周四','周五','周六','周日']
						    },
						    yAxis: {
						        type: 'value'
						    },
						    series: [
						        {
						            name:'今日',
						            type:'line',
						            stack: '总量',
						            data:[120, 132, 101, 134, 90, 230, 210]
						        },
						        {
						            name:'昨日',
						            type:'line',
						            stack: '总量',
						            data:[220, 182, 191, 234, 290, 330, 310]
						        },
						        {
						            name:'可比日',
						            type:'line',
						            stack: '总量',
						            data:[150, 232, 201, 154, 190, 330, 410]
						        },
						        {
						            name:'上周同期',
						            type:'line',
						            stack: '总量',
						            data:[320, 332, 301, 334, 390, 330, 320]
						        }
						    ]
						}
        }
    },
    methods: {
        // 绘图
        drawGraph(id) {
            // 绘图方法
            this.chart = this.$echarts.init(document.getElementById(id))
            // 绘制图表
		        this.chart.setOption(this.option);
        }
    },
    // keypoint：执行方法
    // “将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。”
    mounted() {
        this.$nextTick(function() {
            this.drawGraph('chartData')
        })
    }
	}
</script>

<style>
</style>