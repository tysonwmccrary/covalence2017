
var friends = ['Thomas', 'George', 'Cliff', 'Susan', 'Pat'];

function loop() {
    for (var j = 0; j < friends.length; j++) {
        console.log(friends[j]);

        for (var i = 100; i >= 1; i--) {
            console.log(i + ' ' + 'lines of code in the file,' + ' ' + i + ' ' + 'lines of code,' + ' ' + friends[j] + ' ' + 'strikes one out, clears it all out,' + ' ' + (i - 1) + ' ' + 'lines of code in the file.');

        }
    }
}
loop();











