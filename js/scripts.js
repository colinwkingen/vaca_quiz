var pointCrunch = function(totalPoints) {
      var totalCrunched = " planet earth";
      if ( totalPoints <= 13 ) {
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 25 ) {
      totalCrunched = " planet mars";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 34 ) {
      totalCrunched = " planet saturn";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 42 ) {
      totalCrunched = " planet jupiter";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 49 ) {
      totalCrunched = " planet venus";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 57 ) {
      totalCrunched = " planet mercury";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 66 ) {
      totalCrunched = " planet neptune";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 78 ) {
      totalCrunched = " planet uranus";
      alert(totalCrunched);
      return totalCrunched;
    } else if ( totalPoints <= 91 ) {
      totalCrunched = " planet pluto";
      alert(totalCrunched);
      return totalCrunched;
    };
};
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
    // alert(pointCount);
    var result = pointCrunch(pointCount);
    // alert(result);
    $('.result_target').addClass(result);
    $('#theAnswer').text(result);
    $('.initial').toggleClass('hidden');
  });
});
