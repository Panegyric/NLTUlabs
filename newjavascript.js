/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function get() {
    var day1, day2, day3, day4, day5, day6;
    if(document.getElementById('d1').checked)
    {day1="Понеділок "} else{day1=""}
    if(document.getElementById('d2').checked)
        {day2="Вівторок "} else(day2="")
        if(document.getElementById('d3').checked)
        {day3="Середа "} else(day3="")
        if(document.getElementById('d4').checked)
        {day4="Четвер "} else(day4="")
        if(document.getElementById('d5').checked)
        {day5="П`ятниця "} else(day5="")
        if(document.getElementById('d6').checked)
        {day6="Субота "} else(day6="")

    alert("Ім`я = "+document.getElementById('1').value+"\n"+
            "Email = "+document.getElementById('2').value+"\n"+
            "Місто = "+document.getElementById('3').value+"\n"+
            "Робочі дні "+"\n"+
            day1+day2+day3+day4+day5+day6);
}

