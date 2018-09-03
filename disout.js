var ui=document.getElementById("out");
var ui1=document.getElementById("out1");
var ui2=document.getElementById("out2");

var row2 = document.getElementById("mytable").rows[1].cells;

var maxmark=50;


ui.onclick=outp;
function outp() {
var correct=0;
var incorrect=0;
	// clearTimeout(str);
	ui1.style.display="block";
	ui2.style.display="none"; 
var i;
	for(i in inda){
		var cbv = "abcd";
		var res=qes[i].ans;
		var pos = cbv.lastIndexOf(res);  //value 0,1,2,3
		if (inda[i]==pos) { correct++;} 
		else {incorrect++;}
		}

var nega=(incorrect*(1/3)).toFixed(2);

console.log(correct,incorrect,"jfskfjksfjksfsd",pos,inda[i]);
row2[1].innerHTML=correct;                //co11.innerHTML=correct;
row2[2].innerHTML=incorrect;

row2[3].innerHTML=nega;
row2[4].innerHTML=(correct-(incorrect*(1/3))).toFixed(2);
row2[5].innerHTML= maxmark;


	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['tag', "marks"],
          ['correct',     correct],
          ['incorrect', incorrect],
           
        ]);

        var options = {
          title: 'Your Marks'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

	}


