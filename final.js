$(document).ready(function(){
	$(function(){
	// 先取得必要的元素並用 jQuery 包裝
	// 再來取得 $block 的高度及設定動畫時間
	var $block = $('#abgneBlock'),
		$slides = $('ul.list', $block),
		_width = $block.width(),
		$li = $('li', $slides),
		_animateSpeed = 600, 
		// 加入計時器, 輪播時間及控制開關
		timer, _showSpeed = 3000, _stop = false;
 
	// 產生 li 選項
	var _str = '';
	for(var i=0, j=$li.length;i<j;i++){
		// 每一個 li 都有自己的 className = playerControl_號碼
		_str += '<li class="playerControl_' + (i+1) + '"></li>';
	}
 
	// 產生 ul 並把 li 選項加到其中
	var $playerControl = $('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parent()).css('left', function(){
		// 把 .playerControl 移到置中的位置
		return (_width - $(this).width()) / 2;
	});
 
	// 幫 li 加上 click 事件
	var $playerControlLi = $playerControl.find('li').click(function(){
		var $this = $(this);
		$this.addClass('current').siblings('.current').removeClass('current');
 
		clearTimeout(timer);
		// 移動位置到相對應的號碼
		$slides.stop().animate({
			left: _width * $this.index() * -1
		}, _animateSpeed, function(){
			// 當廣告移動到正確位置後, 依判斷來啟動計時器
			if(!_stop) timer = setTimeout(move, _showSpeed);
		});
 
		return false;
	}).eq(0).click().end();
 
	// 如果滑鼠移入 $block 時
	$block.hover(function(){
		// 關閉開關及計時器
		_stop = true;
		clearTimeout(timer);
	}, function(){
		// 如果滑鼠移出 $block 時
		// 開啟開關及計時器
		_stop = false;
		timer = setTimeout(move, _showSpeed);
	});
 
	// 計時器使用
	function move(){
		var _index = $('.current').index();
		$playerControlLi.eq((_index + 1) % $playerControlLi.length).click();
	}
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
    var data = google.visualization.arrayToDataTable([
    ['Year', 'Numbers'],
    ['2013',  1000],
    ['2014',  1170],
    ['2015',  660],
    ['2016',  1030]
        ]);

    var options = {
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
    	};

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    	};

google.charts.setOnLoadCallback(drawChart);
function drawChart() {

var data = google.visualization.arrayToDataTable([
    ['Country', 'Numbers'],
    ['日本',     11],
    ['美國',      2],
    ['義大利',  2],
    ['英國', 2],
    ['中國',    7]
    ]);

var options = {
    pieHole: 0.6   
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
};

function draw(data) {
  d3.select('.barChart') //選擇放在barChart這個div容器裡面
  .selectAll('div') //選取".barChart"範圍內的所有的div
  .data(data) //將資料加入div
  .enter() //傳入資料
  .append('div') //放到畫面上
  .attr('class','item clearfix') //將剛剛放到畫面上的div，加上class "item"
  .text(function(d){return d.text}) //加上文字描述，使用json檔案裡面的 "text" 欄位
  .append('div') //加入包含資料的div，這個div是用來畫圖用的
  .text(function (data) {
      return data.count; //畫圖用div加上文字描述，使用json檔案裡面的 "count" 欄位
  })
  .attr('class','bar') //畫圖用div加上class "bar"
  .style('width', function(d){ //將剛剛對每個畫圖用div設定寬度，這裡將取出的count值乘以15，即為顯示在畫面上的px數
      return (d.count *15)  + 'px'
  });
};
//Mockup JSON，使用JSON Generator http://www.json-generator.com
//資料載入完畢後會call "draw" 這個callback function
d3.json('http://www.json-generator.com/api/json/get/bTGclonYia?indent=2', draw); //Mockup

})