<template>
  <div class="reports-view-detail-detail">
  	<header id="header" class="mui-bar mui-bar-nav">
			<div class="mui-title">
				<div class="mui-segmented-control mui-segmented-control-primary">
					<a v-for="item in pageData.topbar" class="mui-control-item" :class="{'mui-active':item.active}" @click="topbarEvt(item)">{{item.name}}</a>
				</div>
			</div>
			<a class="mui-action-back mui-icon mui-icon-reload mui-pull-left" @click="reloadEvt"></a>
			<router-link :to="{name:'indexLink'}" class="mui-icon mui-icon-home mui-pull-right"></router-link>
  	</header>
  	<div class="mui-content">
	  	<mt-tab-container v-model="pageData.topbarActiveId">
			  <mt-tab-container-item id="tab-container1">
			   	<div class="box-hd">
			   		<div class="datatime">
			   			<span class="bit J_DptName">华北区,北超-采销线</span> 
			   			<span class="J_DataTime time">销售日 :2018.03.27</span>
			   		</div>
			   	</div>
			   	<div class="mui-slider">
			   		<EasyScrollbar :barOption="myBarOption">
			   			<div class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
								<a class="mui-control-item" v-for="item in pageData.subTab" :class="{'mui-active':item.active}" @click="subTabEvt(item)">{{item.name}}</a>
							</div>
						</EasyScrollbar>
						<div class="mui-slider-group">
							<mt-tab-container v-model="pageData.subTabActiveId">
								<!--采销线-->
							  <mt-tab-container-item id="tab1">
							  	<ul class="mui-table-view" style="margin-top: 1px;">
										<li class="mui-table-view-cell mui-collapse">
											<a class="mui-navigate-right">
												  销售 交易 客单 综毛 
												<mt-badge type="primary">(北超-营运线)</mt-badge>
											</a>
											<div class="mui-collapse-content">
												<h1>h1. Heading</h1>
												<h2>h2. Heading</h2>
												<h3>h3. Heading</h3>
												<h4>h4. Heading</h4>
												<h5>h5. Heading</h5>
												<h6>h6. Heading</h6>
												<p>
													p. 目前最接近原生App效果的框架。
												</p>
											</div>
										</li>
										<li class="mui-table-view-cell mui-collapse">
											<a class="mui-navigate-right">图片轮播</a>
											<div class="mui-collapse-content">
										<h1>h1. Heading</h1>
												<h2>h2. Heading</h2>
												<h3>h3. Heading</h3>
												<h4>h4. Heading</h4>
												<h5>h5. Heading</h5>
												<h6>h6. Heading</h6>
												<p>
													p. 目前最接近原生App效果的框架。
												</p>
											</div>
										</li>
										<li class="mui-table-view-cell mui-collapse">
											<a class="mui-navigate-right">文字排版</a>
											<div class="mui-collapse-content">
												<h1>h1. Heading</h1>
												<h2>h2. Heading</h2>
												<h3>h3. Heading</h3>
												<h4>h4. Heading</h4>
												<h5>h5. Heading</h5>
												<h6>h6. Heading</h6>
												<p>
													p. 目前最接近原生App效果的框架。
												</p>
											</div>
										</li>
									</ul>
							  </mt-tab-container-item>
							  <!--营运线-->
							  <mt-tab-container-item id="tab2">
2<h1>h1. Heading</h1>
												<h2>h2. Heading</h2>
												<h3>h3. Heading</h3>
												<h4>h4. Heading</h4>
												<h5>h5. Heading</h5>
												<h6>h6. Heading</h6>
												<p>
													p. 目前最接近原生App效果的框架。
												</p>
							  </mt-tab-container-item>
							  <!--供商-->
							  <mt-tab-container-item id="tab3">
3<h1>h1. Heading</h1>
												<h2>h2. Heading</h2>
												<h3>h3. Heading</h3>
												<h4>h4. Heading</h4>
												<h5>h5. Heading</h5>
												<h6>h6. Heading</h6>
												<p>
													p. 目前最接近原生App效果的框架。
												</p>
							  </mt-tab-container-item>
							  <!--新零售-->
							  <mt-tab-container-item id="tab4">
4<h1>h1. Heading</h1>
												<h2>h2. Heading</h2>
												<h3>h3. Heading</h3>
												<h4>h4. Heading</h4>
												<h5>h5. Heading</h5>
												<h6>h6. Heading</h6>
												<p>
													p. 目前最接近原生App效果的框架。
												</p>
							  </mt-tab-container-item>
							  <!--购物中心-->
							  <mt-tab-container-item id="tab5">
5<h1>h1. Heading</h1>
												<h2>h2. Heading</h2>
												<h3>h3. Heading</h3>
												<h4>h4. Heading</h4>
												<h5>h5. Heading</h5>
												<h6>h6. Heading</h6>
												<p>
													p. 目前最接近原生App效果的框架。
												</p>
							  </mt-tab-container-item>
							  <!--团购-->
							  <mt-tab-container-item id="tab6">
6<h1>h1. Heading</h1>
												<h2>h2. Heading</h2>
												<h3>h3. Heading</h3>
												<h4>h4. Heading</h4>
												<h5>h5. Heading</h5>
												<h6>h6. Heading</h6>
												<p>
													p. 目前最接近原生App效果的框架。
												</p>
							  </mt-tab-container-item>
							</mt-tab-container>
						
						</div>
			   	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			    <div class="box-hd">
			    	<div class="datatime">
			    		<span class="bit J_DptName">华北区,北超-采销线</span> 
			    		<span class="J_DataTime time">更新:2018.03.28 17:25</span>
			    	</div>
			    </div>
			    
			    
			  </mt-tab-container-item>
			</mt-tab-container>	
  	</div>
  </div>
</template>

<script>
	export default{
		data(){
			return {
				myBarOption:{
				  barColor:"#000",   //滚动条颜色
				  barWidth:6,           //滚动条宽度
				  railColor:"#eee",     //导轨颜色
				  barMarginRight:0,     //垂直滚动条距离整个容器右侧距离单位（px）
				  barMaginBottom:0,     //水平滚动条距离底部距离单位（px)
				  barOpacityMin:0.3,      //滚动条非激活状态下的透明度
				  zIndex:"auto",        //滚动条z-Index
				  autohidemode:true,     //自动隐藏模式
				  horizrailenabled:false//是否显示水平滚动条
				},
				pageData:{
					topbar:[
						{
							active:true,
							name:"业绩",
							id:"tab-container1"
						},
						{
							active:false,
							name:"实时",
							id:"tab-container2"
						}
					],
					topbarActiveId:"", //业绩or实时
					subTab:[
						{
							active:true,
							name:"采销",
							id:"tab1"
						},
						{
							active:false,
							name:"营运线",
							id:"tab2"
						},
						{
							active:false,
							name:"供商",
							id:"tab3"
						},
						{
							active:false,
							name:"新零售",
							id:"tab4"
						},
						{
							active:false,
							name:"采购中心",
							id:"tab5"
						},
						{
							active:false,
							name:"团购",
							id:"tab6"
						}
					],
					subTabActiveId:""
				},
				
			}
		},
		created(){
			const that = this
			this.pageData.topbar.filter((item)=>{
				if(item.active){
					that.pageData.topbarActiveId = item.id		
				}
			})
			this.pageData.subTab.filter((item)=>{
				if(item.active){
					that.pageData.subTabActiveId = item.id		
				}
			})
		},
		methods:{
			/*
			 * tab点击事件 
			 * 业绩or实时
			 */
			topbarEvt(el){
				const that = this
				this.pageData.topbar.filter((item)=>{
					if(item.id==el.id){
						item.active = true
						that.pageData.topbarActiveId = item.id		
					}else{
						item.active = false
					}
				})
			},
			/*
			 * tab点击事件
			 */
			subTabEvt(el){
				const that = this
				this.pageData.subTab.filter((item)=>{
					if(item.id==el.id){
						item.active = true
						that.pageData.subTabActiveId = item.id		
					}else{
						item.active = false
					}
				})
			},
			/*
			 * 刷新页面
			 */
			reloadEvt(){
				this.$router.go(0)
			}
		}
	}
</script>

<style>
	@import url("detail.css")
</style>