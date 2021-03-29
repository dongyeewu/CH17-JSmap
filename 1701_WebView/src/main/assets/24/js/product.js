$(function(){
	/*bind 監聽*/
	/*id記得括起來*/
	$("#showprev").bind("click",showprev);
	$("#shownext").bind("click",shownext);
});
/*宣告變數都用var就行*/
var index=0;
/*紀錄圖片路徑,文字敘述,超連結路徑*/
var curImgSrc,curPhone,curImgHref;
var aryImgSrc = new Array("phone01.jpg","phone02.jpg","phone03.jpg","phone04.jpg","phone05.jpg","phone06.jpg","phone07.jpg","phone08.jpg","phone09.jpg","phone10.jpg");
var aryPhoneName = new Array("HTC 旗艦 01","HTC 旗艦 02","HTC 旗艦 03","HTC 旗艦 04","HTC 旗艦 05","HTC 旗艦 06","HTC 旗艦 07","HTC 旗艦 08","HTC 旗艦 09","HTC 旗艦 10");
var aryImgHref = new Array("https://www.google.com/?hl=zh_tw","https://www.youtube.com/?gl=TW&hl=zh-TW","https://tw.yahoo.com/","https://www.google.com/?hl=zh_tw","https://www.youtube.com/?gl=TW&hl=zh-TW","https://tw.yahoo.com/","https://www.google.com/?hl=zh_tw","https://www.youtube.com/?gl=TW&hl=zh-TW","https://tw.yahoo.com/","https://shopee.tw/");
/*#showprev btn back的id*/
//#pimg 商品圖片的id
//#pname 商品圖片敘述的id
//#phref 商品圖片超連結的id

function showprev() {
	index--;
	/*可循環*/
	if (index<0) {
		index=9;
	}
	/*目前取得的圖檔名(路徑)*/
	curImgSrc = "img/" + aryImgSrc[index];
	/*目前取得的手機名稱*/
	curPhone = aryPhoneName[index];
	/*attr 抓取該id中的src,把裡面的內容轉換成curImgSrc*/
	curImgHref = aryImgHref[index];
	/*debug用(到console看有沒有印出)*/
	//console.log(curImgSrc);
	//console.log(curPhone);
	//console.log(curImgHref);

	$("#pimg").attr("src",curImgSrc);
	/*該id的text顯示成curPhone(文字置換)*/
	$("#pname").text(curPhone);
	$("#phref").attr("href",curImgHref);
}
/*#shownext btn next的id*/
function shownext() {
	++index;
	if (index>9) {
		index = 0;
	}
	curImgSrc = "img/" + aryImgSrc[index];
	curPhone = aryPhoneName[index];
	curImgHref = aryImgHref[index];

	$("#pimg").attr("src",curImgSrc);
	$("#pname").text(curPhone);
	$("#phref").attr("href",curImgHref);
}