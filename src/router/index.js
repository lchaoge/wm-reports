import Index from '../components/index/index'
import Detail from '../components/detail/detail'
import Echarts from '../components/common/echarts/echarts'
import Table from '../components/common/table/table'

export const routes = [
	{path:'/',name:'indexLink',component:Index},
	{path:'/detail',name:'detailLink',component:Detail},
	{path:'/echarts',name:'echartsLink',component:Echarts},
	{path:'/table',name:'tableLink',component:Table}
	
]
