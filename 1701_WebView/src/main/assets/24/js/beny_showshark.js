$(function(){
	// bing 監聽事件
	$('#showshark_gonextp').bind('click',showshark_gonextp);//#gonextp btn next的ID
	$('#showshark_gobackp').bind('click',showshark_gobackp);//#gobackp btn back的ID
});

var showshark_index=0;
var showshark_productname,showshark_productimg,showshark_gotolink;//紀錄文字敘述，圖片路徑，超連結路徑
var showshark_productnamearry = new Array("這是沙沙01","這是沙沙02","這是沙沙03","這是沙沙04","這是沙沙05","這是貓咪","這是草尼瑪","這是羊","這是松鼠","這是狗");
var showshark_productimgarry = new Array("shark001.jpg","shark002.jpg","shark003.jpg","shark004.jpg","shark005.jpg","animal001.jpg","animal002.jpg","animal003.jpg","animal004.jpg","animal005.jpg");
var showshark_gotolinkarry =new Array("https://www.google.com/?hl=zh_tw","https://www.facebook.com/","https://www.google.com/?hl=zh_tw","https://www.facebook.com/","https://www.google.com/?hl=zh_tw","https://www.facebook.com/","https://www.google.com/?hl=zh_tw","https://www.facebook.com/","https://www.google.com/?hl=zh_tw","https://www.facebook.com/")
//到下一頁的function
function showshark_gonextp(){
	showshark_index++;
	if (showshark_index>9) {showshark_index=0;}
		showshark_productimg="img/"+showshark_productimgarry[showshark_index];
		showshark_productname=showshark_productnamearry[showshark_index];
		showshark_gotolink=showshark_gotolinkarry[showshark_index];
		// console.log 在工程模式中可以看到這個測試
		console.log(showshark_productimg);
		$("#showshark_sharkimg").attr("src",showshark_productimg);//圖片ID
		$("#showshark_sharkinfo").text(showshark_productname);//文字ID
		$("#showshark_linktowhere").attr("href",showshark_gotolink);//超連結ID
}
function showshark_gobackp(){
	showshark_index--;
	if (showshark_index<0) {showshark_index=9;}
		showshark_productimg="img/"+showshark_productimgarry[showshark_index];
		showshark_productname=showshark_productnamearry[showshark_index];
		$("#showshark_sharkimg").attr("src",showshark_productimg);
		$("#showshark_sharkinfo").text(showshark_productname);
}
	