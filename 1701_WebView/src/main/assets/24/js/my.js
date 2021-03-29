$(function(){
	$('#ppre').bind('click',preview);
	$('#pnext').bind('click',nextview);
	//向前向後按鈕ID
	//當按鍵被點擊呼叫相對應function	
});
var index=0;
var arrimg=new Array("p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg","p7.jpg","p8.jpg","p9.jpg","p10.jpg");
var arrtext=new Array("產品1","產品2","產品3","產品4","產品5","產品6","產品7","產品8","產品9","產品10");
var arra=new Array("http://www.yahoo.com","http://www.google.com","https://tcnr.wda.gov.tw/")
var imge,text,ahref;
//將指定圖片.文字.連結存入相對應變數

function preview(){
	index--;
	if(index<0){
		index =9;
	}
	imge="img/"+arrimg[index];
	text=arrtext[index];
	ahref=arra[index%3]
	console.log(imge);
	$("#pimg").attr("src",imge);
	$("#ptext").text(text);
	$("#pa").attr("href",ahref);
	//商品圖片.文字.超連結ID
}
function nextview(){
	index++;
	if(index>9){
		index =0;
	}
	imge="img/"+arrimg[index];
	text=arrtext[index];
	ahref=arra[index%3]
	$("#pimg").attr("src",imge);
	$("#ptext").text(text);
	$("#pa").attr("href",ahref);
}