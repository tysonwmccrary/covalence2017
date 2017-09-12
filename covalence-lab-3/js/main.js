//Set an array of friends
friends = ['Thomas', 'George', 'Cliff', 'Susan', 'Pat'];

//Make a function to include all things to happen
function loop() {
    //loop through the array and select a friend.
    for (var j = 0; j < friends.length; j++) {
        var myFriends = (friends[j]);
        //Create a div to store friend name once selected.
        var div = document.createElement('div');
        div.classname = 'number1';
        var h3 = document.createElement('h3');
        //Place the name of friend into heading.
        var headingText = document.createTextNode(myFriends);
        h3.appendChild(headingText);
        div.appendChild(h3);

        //Use this loop to add different lines of song when it meets the condintion.
        //Set p.innerText equal to, so that it is placed inside the created p tag.
        for (var i = 100; i >= 0; i--) {
            var p = document.createElement('p')
            if (i > 1) {
                p.innerText = i + ' ' + 'lines of code in the file,' + ' ' + i + ' ' + 'lines of code,' + ' ' + friends[j] + ' ' + 'strikes one out, clears it all out,' + ' ' + (i - 1) + ' ' + 'loose of code in the file.';
            }
            else if (i === 1) {
                p.innerText = i + ' ' + 'line of code in the file,' + ' ' + i + ' ' + 'line of code,' + ' ' + friends[j] + ' ' + 'strikes one out, clears it all out,' + ' ' + (i - 1) + ' ' + 'lines of code in the file.';
            }
            else {
                p.innerText = 'No More line of Code in the File!!!';
            }
            div.appendChild(p);
        }
        document.body.appendChild(div);
    }
}


//This eventListner is for the whole document.
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('home');
    button.addEventListener('click', loop);
});
