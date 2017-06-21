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

var xhr = new XMLHttpRequest();
xhr.open('get','http://data.kcg.gov.tw/api/action/datastore_search?resource_id=0f863e9a-9028-4c2c-995c-d03b95e18558&limit=31');
xhr.send();
var str = new Array();
xhr.onload = function(){
  var data = JSON.parse(xhr.responseText);
  data1 = data.result.records;
  str.push(data1);



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);


function drawChart1() {
    var data = google.visualization.arrayToDataTable([
    ['date', '通數'],
    [str[0][0].日期,  parseInt(str[0][0].電話處理總數)],
    [str[0][1].日期,  parseInt(str[0][1].電話處理總數)],
    [str[0][2].日期,  parseInt(str[0][2].電話處理總數)],
    [str[0][3].日期,  parseInt(str[0][3].電話處理總數)],
    [str[0][4].日期,  parseInt(str[0][4].電話處理總數)],
    [str[0][5].日期,  parseInt(str[0][5].電話處理總數)],
    [str[0][6].日期,  parseInt(str[0][6].電話處理總數)],
    [str[0][7].日期,  parseInt(str[0][7].電話處理總數)],
    [str[0][8].日期,  parseInt(str[0][8].電話處理總數)],
    [str[0][9].日期,  parseInt(str[0][9].電話處理總數)],
    [str[0][10].日期,  parseInt(str[0][10].電話處理總數)],
    [str[0][11].日期,  parseInt(str[0][11].電話處理總數)],
    [str[0][12].日期,  parseInt(str[0][12].電話處理總數)],
    [str[0][13].日期,  parseInt(str[0][13].電話處理總數)],
    [str[0][14].日期,  parseInt(str[0][14].電話處理總數)],
    [str[0][15].日期,  parseInt(str[0][15].電話處理總數)],
    [str[0][16].日期,  parseInt(str[0][16].電話處理總數)],
    [str[0][17].日期,  parseInt(str[0][17].電話處理總數)],
    [str[0][18].日期,  parseInt(str[0][18].電話處理總數)],
    [str[0][19].日期,  parseInt(str[0][19].電話處理總數)],
    [str[0][20].日期,  parseInt(str[0][20].電話處理總數)],
    [str[0][21].日期,  parseInt(str[0][21].電話處理總數)],
    [str[0][22].日期,  parseInt(str[0][22].電話處理總數)],
    [str[0][23].日期,  parseInt(str[0][23].電話處理總數)],
    [str[0][24].日期,  parseInt(str[0][24].電話處理總數)],
    [str[0][25].日期,  parseInt(str[0][25].電話處理總數)],
    [str[0][26].日期,  parseInt(str[0][26].電話處理總數)],
    [str[0][27].日期,  parseInt(str[0][27].電話處理總數)],
    [str[0][28].日期,  parseInt(str[0][28].電話處理總數)],
    [str[0][29].日期,  parseInt(str[0][29].電話處理總數)],
    [str[0][30].日期,  parseInt(str[0][30].電話處理總數)],
       ]);

    var options = {
    title: '日期:2017/5/1-2017/5/31',
    hAxis: {title: '',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
    	};

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Date', '通數'],
    [str[0][0].日期,  parseInt(str[0][0].電話外撥數)],
    [str[0][1].日期,  parseInt(str[0][1].電話外撥數)],
    [str[0][2].日期,  parseInt(str[0][2].電話外撥數)],
    [str[0][3].日期,  parseInt(str[0][3].電話外撥數)],
    [str[0][4].日期,  parseInt(str[0][4].電話外撥數)],
    [str[0][5].日期,  parseInt(str[0][5].電話外撥數)],
    [str[0][6].日期,  parseInt(str[0][6].電話外撥數)],
    [str[0][7].日期,  parseInt(str[0][7].電話外撥數)],
    [str[0][8].日期,  parseInt(str[0][8].電話外撥數)],
    [str[0][9].日期,  parseInt(str[0][9].電話外撥數)],
    [str[0][10].日期,  parseInt(str[0][10].電話外撥數)],
    [str[0][11].日期,  parseInt(str[0][11].電話外撥數)],
    [str[0][12].日期,  parseInt(str[0][12].電話外撥數)],
    [str[0][13].日期,  parseInt(str[0][13].電話外撥數)],
    [str[0][14].日期,  parseInt(str[0][14].電話外撥數)],
    [str[0][15].日期,  parseInt(str[0][15].電話外撥數)],
    [str[0][16].日期,  parseInt(str[0][16].電話外撥數)],
    [str[0][17].日期,  parseInt(str[0][17].電話外撥數)],
    [str[0][18].日期,  parseInt(str[0][18].電話外撥數)],
    [str[0][19].日期,  parseInt(str[0][19].電話外撥數)],
    [str[0][20].日期,  parseInt(str[0][20].電話外撥數)],
    [str[0][21].日期,  parseInt(str[0][21].電話外撥數)],
    [str[0][22].日期,  parseInt(str[0][22].電話外撥數)],
    [str[0][23].日期,  parseInt(str[0][23].電話外撥數)],
    [str[0][24].日期,  parseInt(str[0][24].電話外撥數)],
    [str[0][25].日期,  parseInt(str[0][25].電話外撥數)],
    [str[0][26].日期,  parseInt(str[0][26].電話外撥數)],
    [str[0][27].日期,  parseInt(str[0][27].電話外撥數)],
    [str[0][28].日期,  parseInt(str[0][28].電話外撥數)],
    [str[0][29].日期,  parseInt(str[0][29].電話外撥數)],
    [str[0][30].日期,  parseInt(str[0][30].電話外撥數)],
    ]);

var options = {
	title: '日期:2017/5/1-2017/5/31',
    pieHole: 0.3  
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
};
};
function draw(data) {
		var data1 = data.result.records
        d3.select('.barChart') //選擇放在barChart這個div容器裡面
        .selectAll('div') //選取".barChart"範圍內的所有的div
        .data(data1) //將資料加入div
        .enter() //傳入資料
        .append('div') //放到畫面上
        .attr('class','item clearfix') //將剛剛放到畫面上的div，加上class "item"
        .text(function(d){return d.日期}) //加上文字描述，使用json檔案裡面的 "text" 欄位
        .append('div') //加入包含資料的div，這個div是用來畫圖用的
        .text(function (data) {
            return data.電話掛斷數+'通'; //畫圖用div加上文字描述，使用json檔案裡面的 "count" 欄位
        })          
        .attr('class','bar') //畫圖用div加上class "bar"
        .style('width', function(d){ //將剛剛對每個畫圖用div設定寬度，這裡將取出的count值乘以15，即為顯示在畫面上的px數
            return (d.電話掛斷數*2.5)  + 'px'
        });

    };
    //Mockup JSON，使用JSON Generator http://www.json-generator.com
    //資料載入完畢後會call "draw" 這個callback function
    d3.json('http://data.kcg.gov.tw/api/action/datastore_search?resource_id=0f863e9a-9028-4c2c-995c-d03b95e18558&limit=31' ,draw); //Mockup



})