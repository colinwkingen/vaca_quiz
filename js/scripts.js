var pointCrunch = function(totalPoints) {
    var totalCrunched = 1;
      if ( totalPoints <= 13 ) {
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 25 ) {
      totalCrunched += 1;
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 34 ) {
      totalCrunched += 2;
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 42 ) {
      totalCrunched += 3;
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 49 ) {
      totalCrunched += 4;
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 57 ) {
      totalCrunched += 5;
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 66 ) {
      totalCrunched += 6;
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 78 ) {
      totalCrunched += 7;
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 91 ) {
      totalCrunched += 8;
      alert(totalCrunched);
      return totalCrunched;
    };
};

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
  });
});
