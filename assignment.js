
function kilometerToMeter(distance) {
    if (distance < 0) {
        return "Put a positive number.";
    }
    else {
        meter = distance * 1000
        return meter;
    }
}

// end of first problem

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {
    if (numberOfWatch % 1 != 0 || numberOfMobile % 1 != 0 || numberOfLaptop % 1 != 0) {
        return "Put an intiger";
    }
    else if (numberOfWatch < 0 || numberOfMobile < 0 || numberOfLaptop < 0) {
        return "Put a valid number";
    }
    else {
        total = numberOfWatch * 50 + numberOfMobile * 100 + numberOfLaptop * 500;
        return total;
    }
}


// end of second problem

function hotelCost(numberOfNight) {
    var total = 0;
    if (numberOfNight < 0) {
        total = "Put a valid number"
        return total;
    }
    else if (numberOfNight <= 10) {
        total = numberOfNight * 100;
        return total;
    }
    else if (numberOfNight <= 20) {
        var first10Nights = 10 * 100;
        var remainingNights = numberOfNight - 10;
        total = first10Nights + remainingNights * 80;
        return total;
    }
    else {
        var first10Nights = 10 * 100;
        var next10Nights = 10 * 80;
        var remainingNights = numberOfNight - 20;
        total = first10Nights + next10Nights + remainingNights * 50;
        return total;
    }
}

// end of third problem


function megaFriend(arr) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    } return longest;
}
//   end of fourth problem
