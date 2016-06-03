var pointCrunch = function(totalPoints) {
      var totalCrunched = " planet earth";
      if ( totalPoints <= 13 ) {
      $('.earth').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 25 ) {
      totalCrunched = " planet mars";
      $('.mars').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 34 ) {
      totalCrunched = " planet saturn";
      $('.saturn').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 42 ) {
      totalCrunched = " planet jupiter";
      $('.jupiter').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 49 ) {
      totalCrunched = " planet venus";
      $('.venus').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 57 ) {
      totalCrunched = " planet mercury";
      $('.mercury').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 66 ) {
      totalCrunched = " planet neptune";
      $('.neptune').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 78 ) {
      totalCrunched = " planet uranus";
      $('.uranus').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 91 ) {
      totalCrunched = " planet pluto";
      $('.pluto').toggleClass('hidden');
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
