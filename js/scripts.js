var pointCrunch = function(totalPoints) {
      var totalCrunched = " earth";
      if ( totalPoints <= 13 ) {
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 25 ) {
      totalCrunched = " mars";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 34 ) {
      totalCrunched = " saturn";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 42 ) {
      totalCrunched = " jupiter";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 49 ) {
      totalCrunched = " venus";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 57 ) {
      totalCrunched = " mercury";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 66 ) {
      totalCrunched = " neptune";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 78 ) {
      totalCrunched = " uranus";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 91 ) {
      totalCrunched = " pluto";
      alert(totalCrunched);
      return totalCrunched;
    };

    var classPlanet = function(totalCrunched) {
      var targetItem = document.getElementById("resultBox");
      targetItem.className += totalCrunched;
    };

    *  1-Earth
    *  2-Mars
    *  3-Saturn (Moons)
    *  4-Jupiter (Moons)
    *  5-Venus
    *  6-Mercury
    *  7-Neptune
    *  8-Uranus
    *  9-Pluto

// 13:12:9:8:7:8:9:12:13:
// Distribution = these values as range.
//
$(document).ready(function() {
  $("button#submitForm").click(function() {
    var pointCount = 0;
    pointCount += parseInt($("#questionOne").val());
    pointCount += parseInt($("#questionTwo").val());
    pointCount += parseInt($("#questionThree").val());
    pointCount += parseInt($("#questionFour").val());
    pointCount += parseInt($("#questionFive").val());
    pointCount += parseInt($("#questionSix").val());
    pointCount += parseInt($("#questionSeven").val());
    pointCount += parseInt($("#questionEight").val());
    pointCount += parseInt($("#questionNine").val());
    pointCount += parseInt($("#questionTen").val());
    alert(pointCount);
    var result = pointCrunch(pointCount);
    alert(result);




  });
});
