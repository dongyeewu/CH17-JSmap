$( document).on("pagecreate","#home",function()//該頁面的ID要叫做home
	{$(document).on("swipeleft swiperight","#home",function(e)
		{if($(".ui-page-active").jqmData("panel") !=="open")
		{if(e.type==="swipeleft"){$("#panel2").panel("open");}//左邊panel的id名稱
		else if(e.type === "swiperight"){$("#panel1").panel("open");}}});});
