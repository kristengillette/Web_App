$(".traffic-nav li").click(function(){
    $(".traffic-nav li a").removeAttr('id', 'selected');
    $(this).children().attr('id', 'selected');

})

        var lineChartData = {
            labels : ["16-22","23-29","30-5","6-12","13-19","20-26","27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets : [
                {
                    label: "My First dataset",
                    fillColor : "rgba(220,220,220,0.2)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [750,1250,1000,1500,2000,1500,1750,1250, 1800, 2300, 1800]
                }
            ]
        }

        var ctx = document.getElementById("canvas").getContext("2d");
        window.myLine = new Chart(ctx).Line(lineChartData, {
            responsive: true,
            bezierCurve : false,
            scaleOverride: true,
            scaleStepWidth: 500,
            scaleStartValue: 0,
            scaleSteps: 5,
            maintainAspectRatio: false
        });
