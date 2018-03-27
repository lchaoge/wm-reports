<template>
	<div class="reports-view-index-index">
		<mt-header fixed title="核心绩效指标">
		  <mt-button icon="back" slot="left"></mt-button>
		</mt-header>
		<div class="mui-content">
		   <div class="box-hd">
		    <div class="dept-type">
		     <span @click="selectBoxEvt">华北区,北超-采销线</span> 
		     <span @click="opDateBoxEvt" class="saleDate">销售日:2018.03.26</span>
		    </div>
		    <div class="notice">
		     产品公告:
		     <span class="title">test4</span>
		    </div>
		   </div>
		   <div class="item">
		    <router-link :to="{name:'detailLink'}">
		     <h3 class="h-title pl10">交易次数</h3>
		     <div class="row">
		      <div class="col-6 pl10">
		       <span class="type">日交易数：<em>629988次</em></span> 
		       <span class="type">当日可比：<em class="f-red">-3.98%</em></span>
		      </div>
		      <div class="col-6 pl10">
		       <span class="type">累计可比：<em>0.43%</em>(阳历)</span> 
		       <span class="type">当日环比：<em class="f-red">-15.75%</em></span>
		      </div>
		     </div><h3 class="h-title pl10">未税销售</h3>
		     <div class="row">
		      <div class="col-6 pl10">
		       <span class="type">日销售额：<em>30940.32</em></span> 
		       <span class="type">当日可比：<em class="f-red">-10.28%</em></span>
		      </div>
		      <div class="col-6 pl10">
		       <span class="type">累计可比：<em>0.97%</em>(阳历)</span> 
		       <span class="type">进度达成：<em>98.24%</em></span>
		      </div>
		     </div><h3 class="h-title pl10">综合毛利</h3>
		     <div class="row">
		      <div class="col-6 pl10">
		       <span class="type">月综毛额：<em>227157.79</em></span>
		      </div>
		      <div class="col-6 pl10">
		       <span class="type">累计达成：<em>78.34%</em></span>
		      </div>
		     </div><h3 class="h-title pl10">净毛利</h3>
		     <div class="row">
		      <div class="col-6 pl10">
		       <span class="type">日净毛利：<em>3056.62</em></span>
		      </div>
		      <div class="col-6 pl10">
		       <span class="type">当日可比：<em class="f-red">-37.81%</em></span>
		      </div>
		     </div></a>
		   	</router-link>
		   </div>
		   <div class="item">
		   	<router-link :to="{name:'detailLink'}" :index="1">
		     <h3 class="h-title pl10">库存周转天数</h3>
		     <div class="row">
		      <div class="col-6 pl10">
		       <span class="type">预算天数：<em>20.17天</em></span>
		      </div>
		      <div class="col-6 pl10">
		       <span class="type">实际天数：<em>27.80天</em></span>
		      </div>
		     </div><h3 class="h-title pl10">缺货率 <span class="gray">(所选岗位)</span></h3>
		     <div class="row">
		      <div class="col-6 pl10">
		       <span class="type">月初：<em>5.18%</em></span>
		      </div>
		      <div class="col-6 pl10">
		       <span class="type">昨日：<em>4.46%</em></span>
		      </div>
		     </div><h3 class="h-title pl10">缺货率 <span class="gray">(杂百)</span></h3>
		     <div class="row">
		      <div class="col-6 pl10">
		       <span class="type">月初：<em>4.98%</em></span>
		      </div>
		      <div class="col-6 pl10">
		       <span class="type">昨日：<em>4.34%</em></span>
		      </div>
		     </div><h3 class="h-title pl10">退货率</h3>
		     <div class="row">
		      <div class="col-6 pl10">
		       <span class="type">月至今值：<em class="f-red">-4.95%</em></span>
		      </div>
		     </div></a>
		   	</router-link>
		   </div>
		   <div class="item">
		    <div class="ul_box">
		     <ul class="secondary-li">
		      <li class="ol"><span class="saleval">日销售:4176.64千元</span></li>
		      <li class="oc"><span class="saleval">日可比:-87.47%</span></li>
		      <li class="or"><span class="saleval">日达成:11.84%</span></li>
		     </ul>
		    </div>
		    <div class="echars-box">
		     	<wm-echars></wm-echars>
		    </div>
		   </div>
		</div>
	 	<!--选择采销线-->
		<mt-popup v-model="selectBox.popupVisible" position="bottom">
			<div class="select-box">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
							<li class="mui-table-view-cell">华北区,北超-采销线</li>
						</ul>
					</div>	
		</mt-popup>
		<!--销售日可比日-->
		<mt-popup v-model="opDateBox.popupVisible" position="bottom">
			<div class="opDate">
				<div class="date sale">
					<h3>销售日</h3>
					2018.03.26 星期一 多云 8~26℃（空气重污染橙色预警）
				</div>
				<div class="date comp">
					<h3>可比日</h3>
					2017.03.27 星期一 晴~多云 3~16℃
				</div>
			</div>
		</mt-popup>
	</div>
</template>

<script>
	import Echars from '../common/echars/echars'	
	export default{
		data(){
			return {
				selectBox:{
					popupVisible:false
				},
				opDateBox:{
					popupVisible:false
				}
			}
		},
		components:{
			'wm-echars':Echars
		},
		methods:{
			selectBoxEvt(){
				this.selectBox.popupVisible = true
			},
			opDateBoxEvt(){
				this.opDateBox.popupVisible = true
			}
		}
	}
</script>

<style>
	@import url("index.css")
</style>