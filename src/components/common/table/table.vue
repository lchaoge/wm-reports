<template>
	<div class="tableBody">
		<table :id="wmtableId" class="dataTable" cellspacing="0" width="100%">
      <thead>
          <tr>
              <th rowspan="2">采销部类</th>
              <th colspan="2">销售</th>
              <th colspan="3">交易次数</th>
          </tr>
          <tr>
              <th>日销售额</th>
              <th>当日可比%</th>
              <th>当日环比%</th>
              <th>累计可比%</th>
              <th>进度达成%</th>
          </tr>
      </thead>
      <tbody>
      	 <!--class="level2"-->
          <tr v-for="item in tablebodyList"  @click="detailEvt(item)">
              <td class="drillable">{{item.td1}}</td>
              <td class="danger">{{item.td2}}</td>
              <td>{{item.td3}}</td>
              <td>{{item.td4}}</td>
              <td>{{item.td5}}</td>
              <td>{{item.td6}}</td>
          </tr>
          
      </tbody>
  </table>
	</div>
</template>

<script>
	export default{
		props:[
			'tablebodyList',
			'wmtableId'
		],
		computed:{
			tableBody(){
				this.tablebodyList
			},
			tableId(){
				this.wmtableId
			}
			
		},
		data(){
			return {
				datatables_options: {
			    "bAutoWidth": true,
			    "sDom": '<"top"i>rt<"bottom"flp><"clear">',           
			    "bPaginate": false,   
			    "sPaginationType": "full_numbers", 
			    "iDisplayLength": 10, 
			    "bSort": true, 
			    "bFilter": false, 
			    "aaSorting": [], 
			    "bInfo": false, 
			    "bStateSave": false, 
			    "iCookieDuration": 0, 
			    "bScrollAutoCss": true, 
			    "bProcessing": true, 
			    "bJQueryUI": false,
			    "sScrollY":"573px", // 高度
			    "sScrollX":"100%", // 宽度
			    "bScrollCollapse":true,
			    "sScrollXInner":"150%"
				},
			}
		},
		mounted(){
			var table = $('#'+this.wmtableId).DataTable(this.datatables_options);
			new $.fn.dataTable.FixedColumns(table);
		},
		methods: {
			detailEvt(item){
				alert(item.td1)
			}
		}
	}
</script>

<style>
	.tableBody {
		height: 573px;
	}
	table.DTFC_Cloned thead,
	table.DTFC_Cloned tfoot {
	  background-color: white;
	}
	
	div.DTFC_Blocker {
	  background-color: white;
	}
	
	div.DTFC_LeftWrapper table.dataTable,
	div.DTFC_RightWrapper table.dataTable {
	  margin-bottom: 0;
	  z-index: 2;
	}
	div.DTFC_LeftWrapper table.dataTable.no-footer,
	div.DTFC_RightWrapper table.dataTable.no-footer {
	  border-bottom: none;
	}
	/*
	 * Table styles
	 */
	table.dataTable {
	  width: 100%;
	  margin: 0 auto;
	  clear: both;
	  border-collapse: separate;
	  border-spacing: 0;
	  /*
	   * Header and footer styles
	   */
	  /*
	   * Body styles
	   */
	}
	table.dataTable thead th,
	table.dataTable tfoot th {
	  font-weight: bold;
	}
	table.dataTable thead th,
	table.dataTable thead td {
	  padding: 10px 18px;
	  /*border-bottom: 1px solid #111;*/
	    /*border-top: 1px solid #eee;*/
	    border-right: 1px solid #eee;
	    border-bottom: 1px solid #eee;
	}
	table.dataTable thead th:active,
	table.dataTable thead td:active {
	  outline: none;
	}
	table.dataTable tfoot th,
	table.dataTable tfoot td {
	  padding: 10px 18px 6px 18px;
	  border-top: 1px solid #111;
	}
	table.dataTable thead .sorting,
	table.dataTable thead .sorting_asc,
	table.dataTable thead .sorting_desc {
	  cursor: pointer;
	  *cursor: hand;
	}
	table.dataTable thead .sorting,
	table.dataTable thead .sorting_asc,
	table.dataTable thead .sorting_desc,
	table.dataTable thead .sorting_asc_disabled,
	table.dataTable thead .sorting_desc_disabled {
	  background-repeat: no-repeat;
	  background-position: center right;
	}
	table.dataTable thead .sorting {
	  background-image: url(images/sortboth.png);
	}
	table.dataTable thead .sorting_asc {
	  background-image: url(images/sortasc.png);
	}
	table.dataTable thead .sorting_desc {
	  background-image: url(images/sortdesc.png);
	}
	table.dataTable thead .sorting_asc_disabled {
	  /*background: url(images/sortascdisabled.png);*/
	}
	table.dataTable thead .sorting_desc_disabled {
	  /*background: url(images/sortaescdisabled.png);*/
	}
	table.dataTable tbody tr {
	  background-color: #ffffff;
	}
	table.dataTable tbody tr.selected {
	  background-color: #B0BED9;
	}
	table.dataTable tbody th,
	table.dataTable tbody td {
	  padding: 8px 10px;
	}
	table.dataTable.row-border tbody th, table.dataTable.row-border tbody td, table.dataTable.display tbody th, table.dataTable.display tbody td {
	  border-top: 1px solid #eee;
	}
	table.dataTable.row-border tbody tr:first-child th,
	table.dataTable.row-border tbody tr:first-child td, table.dataTable.display tbody tr:first-child th,
	table.dataTable.display tbody tr:first-child td {
	  border-top: none;
	}
	table.dataTable tbody th, table.dataTable tbody td {
	  border-top: 1px solid #eee;
	  border-right: 1px solid #eee;
	}
	table.dataTable tbody tr:first-child th,
	table.dataTable tbody tr:first-child td {
	  border-top: none;
	}
	table.dataTable.stripe tbody tr.odd, table.dataTable.display tbody tr.odd {
	  /*齐偶background-color: #f9f9f9;*/ 
	} 
	table.dataTable.stripe tbody tr.odd.selected, table.dataTable.display tbody tr.odd.selected {
	  background-color: #acbad4;
	}
	table.dataTable.hover tbody tr:hover, table.dataTable.display tbody tr:hover {
	  background-color: #f6f6f6;
	}
	table.dataTable.hover tbody tr:hover.selected, table.dataTable.display tbody tr:hover.selected {
	  background-color: #aab7d1;
	}
	table.dataTable.order-column tbody tr > .sorting_1,
	table.dataTable.order-column tbody tr > .sorting_2,
	table.dataTable.order-column tbody tr > .sorting_3, table.dataTable.display tbody tr > .sorting_1,
	table.dataTable.display tbody tr > .sorting_2,
	table.dataTable.display tbody tr > .sorting_3 {
	  background-color: #fafafa;
	}
	table.dataTable.order-column tbody tr.selected > .sorting_1,
	table.dataTable.order-column tbody tr.selected > .sorting_2,
	table.dataTable.order-column tbody tr.selected > .sorting_3, table.dataTable.display tbody tr.selected > .sorting_1,
	table.dataTable.display tbody tr.selected > .sorting_2,
	table.dataTable.display tbody tr.selected > .sorting_3 {
	  background-color: #acbad5;
	}
	table.dataTable.display tbody tr.odd > .sorting_1, table.dataTable.order-column.stripe tbody tr.odd > .sorting_1 {
	  background-color: #f1f1f1;
	}
	table.dataTable.display tbody tr.odd > .sorting_2, table.dataTable.order-column.stripe tbody tr.odd > .sorting_2 {
	  background-color: #f3f3f3;
	}
	table.dataTable.display tbody tr.odd > .sorting_3, table.dataTable.order-column.stripe tbody tr.odd > .sorting_3 {
	  background-color: whitesmoke;
	}
	table.dataTable.display tbody tr.odd.selected > .sorting_1, table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_1 {
	  background-color: #a6b4cd;
	}
	table.dataTable.display tbody tr.odd.selected > .sorting_2, table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_2 {
	  background-color: #a8b5cf;
	}
	table.dataTable.display tbody tr.odd.selected > .sorting_3, table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_3 {
	  background-color: #a9b7d1;
	}
	table.dataTable.display tbody tr.even > .sorting_1, table.dataTable.order-column.stripe tbody tr.even > .sorting_1 {
	  background-color: #fafafa;
	}
	table.dataTable.display tbody tr.even > .sorting_2, table.dataTable.order-column.stripe tbody tr.even > .sorting_2 {
	  background-color: #fcfcfc;
	}
	table.dataTable.display tbody tr.even > .sorting_3, table.dataTable.order-column.stripe tbody tr.even > .sorting_3 {
	  background-color: #fefefe;
	}
	table.dataTable.display tbody tr.even.selected > .sorting_1, table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_1 {
	  background-color: #acbad5;
	}
	table.dataTable.display tbody tr.even.selected > .sorting_2, table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_2 {
	  background-color: #aebcd6;
	}
	table.dataTable.display tbody tr.even.selected > .sorting_3, table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_3 {
	  background-color: #afbdd8;
	}
	table.dataTable.display tbody tr:hover > .sorting_1, table.dataTable.order-column.hover tbody tr:hover > .sorting_1 {
	  background-color: #eaeaea;
	}
	table.dataTable.display tbody tr:hover > .sorting_2, table.dataTable.order-column.hover tbody tr:hover > .sorting_2 {
	  background-color: #ececec;
	}
	table.dataTable.display tbody tr:hover > .sorting_3, table.dataTable.order-column.hover tbody tr:hover > .sorting_3 {
	  background-color: #efefef;
	}
	table.dataTable.display tbody tr:hover.selected > .sorting_1, table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_1 {
	  background-color: #a2aec7;
	}
	table.dataTable.display tbody tr:hover.selected > .sorting_2, table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_2 {
	  background-color: #a3b0c9;
	}
	table.dataTable.display tbody tr:hover.selected > .sorting_3, table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_3 {
	  background-color: #a5b2cb;
	}
	table.dataTable.no-footer {
	  border-bottom: 1px solid #eee;
	}
	table.dataTable.nowrap th, table.dataTable.nowrap td {
	  white-space: nowrap;
	}
	table.dataTable.compact thead th,
	table.dataTable.compact thead td {
	  padding: 4px 17px 4px 4px;
	}
	table.dataTable.compact tfoot th,
	table.dataTable.compact tfoot td {
	  padding: 4px;
	}
	table.dataTable.compact tbody th,
	table.dataTable.compact tbody td {
	  padding: 4px;
	}
	table.dataTable th.dt-left,
	table.dataTable td.dt-left {
	  text-align: left;
	}
	table.dataTable th.dt-center,
	table.dataTable td.dt-center,
	table.dataTable td.dataTables_empty {
	  text-align: center;
	}
	table.dataTable th.dt-right,
	table.dataTable td.dt-right {
	  text-align: right;
	}
	table.dataTable th.dt-justify,
	table.dataTable td.dt-justify {
	  text-align: justify;
	}
	table.dataTable th.dt-nowrap,
	table.dataTable td.dt-nowrap {
	  white-space: nowrap;
	}
	table.dataTable thead th.dt-head-left,
	table.dataTable thead td.dt-head-left,
	table.dataTable tfoot th.dt-head-left,
	table.dataTable tfoot td.dt-head-left {
	  text-align: left;
	}
	table.dataTable thead th.dt-head-center,
	table.dataTable thead td.dt-head-center,
	table.dataTable tfoot th.dt-head-center,
	table.dataTable tfoot td.dt-head-center {
	  text-align: center;
	}
	table.dataTable thead th.dt-head-right,
	table.dataTable thead td.dt-head-right,
	table.dataTable tfoot th.dt-head-right,
	table.dataTable tfoot td.dt-head-right {
	  text-align: right;
	}
	table.dataTable thead th.dt-head-justify,
	table.dataTable thead td.dt-head-justify,
	table.dataTable tfoot th.dt-head-justify,
	table.dataTable tfoot td.dt-head-justify {
	  text-align: justify;
	}
	table.dataTable thead th.dt-head-nowrap,
	table.dataTable thead td.dt-head-nowrap,
	table.dataTable tfoot th.dt-head-nowrap,
	table.dataTable tfoot td.dt-head-nowrap {
	  white-space: nowrap;
	}
	table.dataTable tbody th.dt-body-left,
	table.dataTable tbody td.dt-body-left {
	  text-align: left;
	}
	table.dataTable tbody th.dt-body-center,
	table.dataTable tbody td.dt-body-center {
	  text-align: center;
	}
	table.dataTable tbody th.dt-body-right,
	table.dataTable tbody td.dt-body-right {
	  text-align: right;
	}
	table.dataTable tbody th.dt-body-justify,
	table.dataTable tbody td.dt-body-justify {
	  text-align: justify;
	}
	table.dataTable tbody th.dt-body-nowrap,
	table.dataTable tbody td.dt-body-nowrap {
	  white-space: nowrap;
	}
	
	table.dataTable,
	table.dataTable th,
	table.dataTable td {
	  -webkit-box-sizing: content-box;
	  box-sizing: content-box;
	}
	
	/*
	 * Control feature layout
	 */
	.dataTables_wrapper {
	  position: relative;
	  clear: both;
	  *zoom: 1;
	  zoom: 1;
	}
	.dataTables_wrapper .dataTables_length {
	  float: left;
	}
	.dataTables_wrapper .dataTables_filter {
	  float: right;
	  text-align: right;
	}
	.dataTables_wrapper .dataTables_filter input {
	  margin-left: 0.5em;
	}
	.dataTables_wrapper .dataTables_info {
	  clear: both;
	  float: left;
	  padding-top: 0.755em;
	}
	.dataTables_wrapper .dataTables_paginate {
	  float: right;
	  text-align: right;
	  padding-top: 0.25em;
	}
	.dataTables_wrapper .dataTables_paginate .paginate_button {
	  box-sizing: border-box;
	  display: inline-block;
	  min-width: 1.5em;
	  padding: 0.5em 1em;
	  margin-left: 2px;
	  text-align: center;
	  text-decoration: none !important;
	  cursor: pointer;
	  *cursor: hand;
	  color: #333 !important;
	  border: 1px solid transparent;
	  border-radius: 2px;
	}
	.dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
	  color: #333 !important;
	  border: 1px solid #979797;
	  background-color: white;
	  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, white), color-stop(100%, #dcdcdc));
	  /* Chrome,Safari4+ */
	  background: -webkit-linear-gradient(top, white 0%, #dcdcdc 100%);
	  /* Chrome10+,Safari5.1+ */
	  background: -moz-linear-gradient(top, white 0%, #dcdcdc 100%);
	  /* FF3.6+ */
	  background: -ms-linear-gradient(top, white 0%, #dcdcdc 100%);
	  /* IE10+ */
	  background: -o-linear-gradient(top, white 0%, #dcdcdc 100%);
	  /* Opera 11.10+ */
	  background: linear-gradient(to bottom, white 0%, #dcdcdc 100%);
	  /* W3C */
	}
	.dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
	  cursor: default;
	  color: #666 !important;
	  border: 1px solid transparent;
	  background: transparent;
	  box-shadow: none;
	}
	.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
	  color: white !important;
	  border: 1px solid #111;
	  background-color: #585858;
	  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111));
	  /* Chrome,Safari4+ */
	  background: -webkit-linear-gradient(top, #585858 0%, #111 100%);
	  /* Chrome10+,Safari5.1+ */
	  background: -moz-linear-gradient(top, #585858 0%, #111 100%);
	  /* FF3.6+ */
	  background: -ms-linear-gradient(top, #585858 0%, #111 100%);
	  /* IE10+ */
	  background: -o-linear-gradient(top, #585858 0%, #111 100%);
	  /* Opera 11.10+ */
	  background: linear-gradient(to bottom, #585858 0%, #111 100%);
	  /* W3C */
	}
	.dataTables_wrapper .dataTables_paginate .paginate_button:active {
	  outline: none;
	  background-color: #2b2b2b;
	  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));
	  /* Chrome,Safari4+ */
	  background: -webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
	  /* Chrome10+,Safari5.1+ */
	  background: -moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
	  /* FF3.6+ */
	  background: -ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
	  /* IE10+ */
	  background: -o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
	  /* Opera 11.10+ */
	  background: linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);
	  /* W3C */
	  box-shadow: inset 0 0 3px #111;
	}
	.dataTables_wrapper .dataTables_paginate .ellipsis {
	  padding: 0 1em;
	}
	.dataTables_wrapper .dataTables_processing {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  width: 100%;
	  height: 40px;
	  margin-left: -50%;
	  margin-top: -25px;
	  padding-top: 20px;
	  text-align: center;
	  font-size: 1.2em;
	  background-color: white;
	  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(25%, rgba(255, 255, 255, 0.9)), color-stop(75%, rgba(255, 255, 255, 0.9)), color-stop(100%, rgba(255, 255, 255, 0)));
	  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
	  background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
	  background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
	  background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
	  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
	}
	.dataTables_wrapper .dataTables_length,
	.dataTables_wrapper .dataTables_filter,
	.dataTables_wrapper .dataTables_info,
	.dataTables_wrapper .dataTables_processing,
	.dataTables_wrapper .dataTables_paginate {
	  color: #333;
	}
	.dataTables_wrapper .dataTables_scroll {
	  clear: both;
	}
	.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody {
	  *margin-top: -1px;
	  -webkit-overflow-scrolling: touch;
	}
	.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody th, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody td {
	  vertical-align: middle;
	}
	.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody th > div.dataTables_sizing,
	.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody td > div.dataTables_sizing {
	  height: 0;
	  overflow: hidden;
	  margin: 0 !important;
	  padding: 0 !important;
	}
	.dataTables_wrapper.no-footer .dataTables_scrollBody {
	  border-bottom: 1px solid #111;
	}
	.dataTables_wrapper.no-footer div.dataTables_scrollHead table,
	.dataTables_wrapper.no-footer div.dataTables_scrollBody table {
	  border-bottom: none;
	}
	.dataTables_wrapper:after {
	  visibility: hidden;
	  display: block;
	  content: "";
	  clear: both;
	  height: 0;
	}
	
	@media screen and (max-width: 767px) {
	  .dataTables_wrapper .dataTables_info,
	  .dataTables_wrapper .dataTables_paginate {
	    float: none;
	    text-align: center;
	  }
	  .dataTables_wrapper .dataTables_paginate {
	    margin-top: 0.5em;
	  }
	}
	@media screen and (max-width: 640px) {
	  .dataTables_wrapper .dataTables_length,
	  .dataTables_wrapper .dataTables_filter {
	    float: none;
	    text-align: center;
	  }
	  .dataTables_wrapper .dataTables_filter {
	    margin-top: 0.5em;
	  }
	}
	
	/***自定义****/
	table.dataTable thead th,
	table.dataTable tfoot th {
	  color:#6f6e74;
	
	}
	table.dataTable tbody td {
	  color:#797979;
	  text-align:center;
	}
	table.dataTable tbody td:first-child{
		padding: 0 10px 0 20px;
	  position: relative;
	}
	table.dataTable tbody td.drillable:before {
	  content: " ";
	  display: block;
	  width: 12px;
	  height: 12px;
	  background: url(images/drill.png) no-repeat;
	  float: left;
	  background-size: 100% 100%;
	  position: absolute;
	  top: 50%;
	  left: 7px;
	  margin-top: -6px;
	}
	 	table.dataTable .dataTables_scrollHead thead td, table.dataTable .dataTables_scrollHead thead th {
	    padding: 10px 18px;
	    border-top: 1px solid #eee;
	    border-right: 1px solid #eee;
	    border-bottom: 1px solid #eee;
	}
	table.dataTable.cell-border .dataTables_scrollBody tbody td, table.dataTable.cell-border .dataTables_scrollBody tbody th {
	    border-top: 1px solid #eee;
	    border-right: 1px solid #eee;
	}
	 table.dataTable tfoot th,  table.dataTable thead th {
	    color: #6f6e74;
	    background-color: #EEF6FF;
	    border-color: #D7D7D7!important;
	}
	 table.dataTable tbody td,  table.dataTable thead th {
	    font-family: PingFangSC-Regular;
	    font-size: 12px;
	    color: #222;
	    letter-spacing: 0;
	    font-weight: initial;
	    border-color: #D7D7D7!important;
	    white-space: nowrap;
	    padding: 7px 15px;
	}
	table.dataTable.display tbody tr.even, table.dataTable.stripe tbody tr.even {
	    background-color: rgba(249,249,249,.5);
	}
	.DTFC_LeftWrapper{
		background: #fff;
	}
	.DTFC_LeftWrapper table.dataTable.stripe tbody tr.odd{
		background-color: rgba(255,255,255,1);
	}
	.DTFC_LeftWrapper table.dataTable.stripe tbody tr.even{
		background-color: rgba(249,249,249,1);
	}
	.DTFC_LeftWrapper table.dataTable tbody tr.level2 {
	  background-color: rgba(255,233,219,1)!important;
	}
	table.dataTable tbody tr.level2 {
	    background-color: rgba(255,211,183,.5)!important;
	}
	 table.dataTable tbody td.danger {
	    color: red;
	}
	.dataTables_wrapper.no-footer .dataTables_scrollBody{
		border-bottom: 1px solid #D7D7D7;
	}
</style>