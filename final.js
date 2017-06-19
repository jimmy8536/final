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
    ['2012',  14],
    ['2013',  13],
    ['2014',  9],
    ['2015',  11],
    ['2016',  12]
        ]);

    var options = {
    title: '近五年資料',
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
    ['日本', 47],
    ['韓國', 32],
    ['印尼', 9],
    ['中國', 7],
    ['紐西蘭', 7],
    ['美國', 5],
    ['澳洲', 5],
    ['其他', 18]
    ]);

var options = {
	title: '共130所姊妹校',
    pieHole: 0.6   
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
};

google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {

var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["國小", 23, "#3f51b5"],
    ["國中", 42, "#3f51b5"],
    ["高中", 38, "#3f51b5"],
    ["高職", 27, "#3f51b5"]
    ]);

var view = new google.visualization.DataView(data);
view.setColumns([0, 1,
    { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
      2]);

var options = {
    width: 800,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
    };
var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
chart.draw(view, options);
  }


})