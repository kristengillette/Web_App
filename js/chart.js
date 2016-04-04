var dailyLineData = {
            labels : ["S", "M", "T", "W", "T", "F", "S"],
            datasets : [
                {
                    fillColor : "#e2e3f6",
                    strokeColor : "#7377bf",
                    pointColor : "#fff",
                    pointStrokeColor : "#7377bf",
                    pointHighlightFill : "#7377bf",
                    pointHighlightStroke : "#fff",
                    data : [75,100,175,125,225,200,100]
                }
            ]
        }

var weeklyLineData = {
            labels : ["16-22","23-29","30-5","6-12","13-19","20-26","27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets : [
                {
                    fillColor : "#e2e3f6",
                    strokeColor : "#7377bf",
                    pointColor : "#fff",
                    pointStrokeColor : "#7377bf",
                    pointHighlightFill : "#7377bf",
                    pointHighlightStroke : "#fff",
                    data : [750,1250,1000,1500,2000,1500,1750,1250, 1800, 2300, 1800]
                }
            ]
        }

var dailyBarData = {
            labels : ["S", "M", "T", "W", "T", "F", "S"],
            datasets : [
                {
                    fillColor : "#7377bf",
                    strokeColor : "#7377bf",
                    data : [75,100,175,125,225,200,100]
                }
            ]
        }

var mobileChartData = [
    {
        value: 300,
        color:"#7377bf",
        label: "Desktop"
    },
    {
        value: 50,
        color: "#81c98f",
        label: "Tablets"
    },
    {
        value: 100,
        color: "#74b1bf",
        label: "Phones"
    }
];
      

$(".traffic-nav li").click(function(){
    $(".traffic-nav li a").removeAttr('id', 'selected');
    $(this).children().attr('id', 'selected');
})


var weeklyLine = document.getElementById("traffic").getContext("2d");
window.myLine = new Chart(weeklyLine).Line(weeklyLineData, {
    responsive: true,
    bezierCurve : false,
    scaleOverride: true,
    scaleStepWidth: 500,
    scaleStartValue: 0,
    scaleSteps: 5,
    maintainAspectRatio: false
});


var dailyBar = document.getElementById("daily-traffic").getContext("2d");
window.myBar = new Chart(dailyBar).Bar(dailyBarData, {
	responsive : true,
	scaleOverride: true,
    scaleStepWidth: 50,
    scaleStartValue: 0,
    scaleSteps: 5,
    maintainAspectRatio: false
});

var pieChart = document.getElementById("mobile-traffic").getContext("2d");
window.myChart = new Chart(pieChart).Doughnut(mobileChartData, {
	responsive : true,
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
});

var legend = myChart.generateLegend();
$("#legend").html(legend);

$(".weekly").click(function(){
	$(".canvas").empty();
	$(".canvas").html('<canvas id="traffic"><canvas>');
		var weeklyLine = document.getElementById("traffic").getContext("2d");
		window.myLine = new Chart(weeklyLine).Line(weeklyLineData, {
		    responsive: true,
		    bezierCurve : false,
		    scaleOverride: true,
		    scaleStepWidth: 500,
		    scaleStartValue: 0,
		    scaleSteps: 5,
		    maintainAspectRatio: false
		});
})

$(".daily").click(function(){
	$(".canvas").empty();
	$(".canvas").html('<canvas id="traffic"><canvas>');
		var dailyLine = document.getElementById("traffic").getContext("2d");
		window.myLine = new Chart(dailyLine).Line(dailyLineData, {
	        responsive : true,
	        bezierCurve : false,
			scaleOverride: true,
		    scaleStepWidth: 50,
		    scaleStartValue: 0,
		    scaleSteps: 5,
		    maintainAspectRatio: false
});
})


