var pointCrunch = function(totalPoints) {
      var totalCrunched = " planet earth";
      if ( totalPoints <= 21 ) {
      $('.earth').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 33 ) {
      totalCrunched = " planet mars";
      $('.mars').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 42 ) {
      totalCrunched = " planet saturn";
      $('.saturn').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 48 ) {
      totalCrunched = " planet jupiter";
      $('.jupiter').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 52 ) {
      totalCrunched = " planet venus";
      $('.venus').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 58 ) {
      totalCrunched = " planet mercury";
      $('.mercury').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 67 ) {
      totalCrunched = " planet neptune";
      $('.neptune').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 79 ) {
      totalCrunched = " planet uranus";
      $('.uranus').toggleClass('hidden');
      return totalCrunched;
    } else if ( totalPoints <= 92 ) {
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
