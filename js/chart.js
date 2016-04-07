var hourlyLineData = {
            labels : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
            datasets : [
                {
                    fillColor : "#e2e3f6",
                    strokeColor : "#7377bf",
                    pointColor : "#fff",
                    pointStrokeColor : "#7377bf",
                    pointHighlightFill : "#7377bf",
                    pointHighlightStroke : "#fff",
                    data : [7,10,17,12,22,20,10,7,10,17,12,22,7,10,17,12,22,20,10,7,10,17,12,22]
                }
            ]
        }

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

var monthlyLineData = {
            labels : ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            datasets : [
                {
                    fillColor : "#e2e3f6",
                    strokeColor : "#7377bf",
                    pointColor : "#fff",
                    pointStrokeColor : "#7377bf",
                    pointHighlightFill : "#7377bf",
                    pointHighlightStroke : "#fff",
                    data : [7500,10000,17500,12500,22500,20000,10000,7500,10000,17500,12500,22500]
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
                },

                {
                    fillColor : "#81c98f",
                    strokeColor : "#81c98f",
                    data : [100,65,75,25,89,55,90]
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
    },

    {
        value: 100,
        color: "#454994",
        label: "Netbooks"
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


$(".monthly").click(function(){
    $(".canvas").empty();
    $(".canvas").html('<canvas id="traffic"><canvas>');
        var monthlyLine = document.getElementById("traffic").getContext("2d");
        window.myLine = new Chart(monthlyLine).Line(monthlyLineData, {
            responsive : true,
            bezierCurve : false,
            scaleOverride: true,
            scaleStepWidth: 2000,
            scaleStartValue: 5000,
            scaleSteps: 10,
            maintainAspectRatio: false
});
})

$(".hourly").click(function(){
    $(".canvas").empty();
    $(".canvas").html('<canvas id="traffic"><canvas>');
        var hourlyLine = document.getElementById("traffic").getContext("2d");
        window.myLine = new Chart(hourlyLine).Line(hourlyLineData, {
            responsive : true,
            bezierCurve : false,
            scaleOverride: true,
            scaleStepWidth: 5,
            scaleStartValue: 0,
            scaleSteps: 5,
            maintainAspectRatio: false
});
})

