window.onload = function(){

    // Define chair parts.
    var seat = document.getElementById('seat');
    var footrest = document.getElementById('footrest');
    var backrest = document.getElementById('backrest');

    // Define initial positions.
    seat.style.transform = "rotate(90deg)";
    footrest.style.transform = "rotate(0deg)";
    backrest.style.transform = "rotate(0deg)";

    // Define buttons.
    var footrestUp = document.getElementById("footrest-up");
    var footrestDown = document.getElementById("footrest-down");
    var seatUp = document.getElementById("seat-up");
    var seatDown = document.getElementById("seat-down");

    // Footrest and backrest controls.
    footrestUp.addEventListener('click', function() {
        footrest.style.background = "red";
        backrest.style.background = "red";

        var newFootDeg = getCurrentRotation(footrest) - 70;
        footrest.style.transform = "rotate(" + newFootDeg + "deg)";

        var newBackDeg = getCurrentRotation(backrest) - 30;
        backrest.style.transform = "rotate(" + newBackDeg + "deg)";
    });
    footrestDown.addEventListener('click', function() {
        footrest.style.background = "green";
        backrest.style.background = "green";

        var newFootDeg = getCurrentRotation(footrest) + 70;
        footrest.style.transform = "rotate(" + newFootDeg + "deg)";

        var newBackDeg = getCurrentRotation(backrest) + 30;
        backrest.style.transform = "rotate(" + newBackDeg + "deg)";
    });

    // Seat controls.
    seatUp.addEventListener('click', function() {
        seat.style.background = "blue";
        seat.style.transform = "rotate(90deg)";

        footrest.style.right = "140px";
        footrest.style.bottom = "184px";

        var newFootDeg = getCurrentRotation(footrest) - 30;
        footrest.style.transform = "rotate(" + newFootDeg + "deg)";

        var newBackDeg = getCurrentRotation(backrest) - 30;
        backrest.style.transform = "rotate(" + newBackDeg + "deg)";
    });

    seatDown.addEventListener('click', function() {
        seat.style.background = "yellow";
        seat.style.transform = "rotate(120deg)";

        footrest.style.right = "120px";
        footrest.style.bottom = "260px";

        var newFootDeg = getCurrentRotation(footrest) + 30;
        footrest.style.transform = "rotate(" + newFootDeg + "deg)";

        var newBackDeg = getCurrentRotation(backrest) + 30;
        backrest.style.transform = "rotate(" + newBackDeg + "deg)";
    });

    function getCurrentRotation(element) {
        var degrees = element.style.transform.match("[0-9]+")[0];

        return parseInt(degrees);
    }
};
