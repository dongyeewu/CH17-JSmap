
$( document).on("pagecreate","#home",function(){$(document).on("swipeleft swiperight","#home",function(e){if($(".ui-page-active").jqmData("panel") !=="open"){
	if(e.type==="swipeleft"){slide_gobackp();}
	else if(e.type === "swiperight"){slide_gonextp();}}});});
// 名字都改移下
var slide_index=0;
var slide_productimg;//紀錄文字敘述，圖片路徑，超連結路徑

var slide_productimgarry = new Array("shark001.jpg","shark002.jpg","shark003.jpg","shark004.jpg","shark005.jpg","animal001.jpg","animal002.jpg","animal003.jpg","animal004.jpg","animal005.jpg");
//到下一頁的function
function slide_gonextp(){
	slide_index++;
	if (slide_index>9) {slide_index=0;}
		slide_productimg="img/"+slide_productimgarry[slide_index];
		
		
		// console.log 在工程模式中可以看到這個測試
		console.log(slide_productimg);
		$("#slide_img").attr("src",slide_productimg);//圖片ID
		}
function slide_gobackp(){
	slide_index--;
	if (slide_index<0) {slide_index=9;}
		slide_productimg="img/"+slide_productimgarry[slide_index];
		$("#slide_img").attr("src",slide_productimg);
		
}
	