/**
 * Controls chair parts with two sets of up/down buttons.
 */
window.onload = function(){
    // Define each chair part, starting degree and min/max degree.
    var seat     = new Part('seat',     90, 90, 120);
    var footrest = new Part('footrest',  0,  0,  100);
    var backrest = new Part('backrest',  0,  0,  70);

    // Buttons for controlling the footrest and backrest.
    var footrestUp = document.getElementById("footrest-up");
    var footrestDown = document.getElementById("footrest-down");

    // Buttons for controlling the seat.
    var seatUp = document.getElementById("seat-up");
    var seatDown = document.getElementById("seat-down");

    // Rotate footrest and backrest up.
    footrestUp.addEventListener('click', function() {
        footrest.rotate(-70)
        backrest.rotate(-40);
    });

    // Rotate footrest and backrest down.
    footrestDown.addEventListener('click', function() {
        footrest.rotate(70);
        backrest.rotate(40);
    });

    // Rotates seat up.
    seatUp.addEventListener('click', function() {
        // Rotate the other parts only if not already at minimum position.
        if (seat.rotate(-30)) {
            footrest.rotate(-30);
            backrest.rotate(-30);

            // Hack to compensate the fact that rotating the seat
            // changes also location of the footrest.
            document.getElementById("footrest").style.right = "97px";
            document.getElementById("footrest").style.top = "158px";
        }
    });

    // Rotates seat down.
    seatDown.addEventListener('click', function() {
        // Rotate the other parts only if not already at maximum position.
        if (seat.rotate(30)) {
            footrest.rotate(30);
            backrest.rotate(30);

            // Hack to compensate the fact that rotating the seat
            // changes also location of the footrest.
            document.getElementById("footrest").style.right = "78px";
            document.getElementById("footrest").style.top = "87px";
        }
    });
};

/**
 * Represents a rotatable chair part.
 */
function Part(id, startRotation, minRotation, maxRotation) {
    this.degrees = startRotation;
    this.minRotation = minRotation;
    this.maxRotation = maxRotation;
    this.element = document.getElementById(id);

    // Set initial rotation (needed to access it through element.style).
    this.element.style.transform = "rotate(" + startRotation + "deg)";

    /**
     * Rotates the part to desired degree (within the min and max values).
     */
    this.rotate = function(degrees) {
        var newDegree = this.degrees + degrees;

        console.log(id + ": " + this.degrees + " + " + degrees + " = " + newDegree);

        // Rotate upwards only if new degree is below the maximum allowed value.
        if (newDegree > this.degrees && newDegree > this.maxRotation) {
            console.log("The target value: " + newDegree + " is above the maximum allowed value: " + maxRotation);
            return false;
        }

        // Rotate downwards only if new degree is above minimum allowed value.
        if (newDegree < this.degrees && newDegree < this.minRotation) {
            console.log("The target value: " + newDegree + " is below the minimum allowed value: " + minRotation);
            return false;
        }

        this.element.style.transform = "rotate(" + newDegree + "deg)";

        this.degrees = newDegree;

        return true;
    };
};
