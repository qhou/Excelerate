$(function () {
    console.log("on load");
    simpleChart();
});

function countIf(columnName, expValue, csv)
{
  var data = d3.csvParse();
  var count = 0;
  for (i = 0; i < data.length; i++)
  {
    if (data[i]["Correct"]) == expValue
    {
      count++;
    }
  }
}

function simpleChart()
{
  var csv = '../data/quiz1a.csv';
  bar1 = countIf('Correct', 'TRUE', csv);
  bar2 = countIf('Correct', 'FALSE', csv);

  document.getElementById("ph1").innerHTML = bar1;
  document.getElementById("ph2").innerHTML = bar2;
}
