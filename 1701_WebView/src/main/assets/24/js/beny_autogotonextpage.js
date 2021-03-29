// img的id必須改變imgchange
// 修改時間參數
// 修改Array內的圖片
// functiona 名琛要改
$(function(){
	// bing 監聽事件
	
	setInterval(gonextp,3000);//gonextp 到下一頁的function
});

var index=0;
var productimg;//紀錄文字敘述，圖片路徑，超連結路徑
var productimgarry = new Array("alpaca001.jpg","alpaca002.jpg","alpaca003.jpg","alpaca004.jpg",
	"alpaca005.jpg","alpaca006.jpg","alpaca007.jpg","alpaca008.jpg","alpaca009.jpg","alpaca010.jpg");
//到下一頁的function
function gonextp(){
	index++;
	if (index>9) {index=0;}
		productimg="img/"+productimgarry[index];
		// console.log 在工程模式中可以看到這個測試
		console.log(productimg);
		$("#imgchange").attr("src",productimg);//圖片ID
		
}