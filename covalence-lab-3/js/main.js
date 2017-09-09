
    


var friends = ['Thomas', 'George', 'Cliff', 'Susan', 'Pat'];

function loop() {
    for (var j = 0; j < friends.length; j++) {
        h3.innerHTML = (friends[j]);
/*
var div = document.createElement('div');
div.classname ='friend';
var h3 = document.createElement('h3');
var headingText = document.createTextNode(friend)
h3.appendChild(headingText);
div.appendChild(h3);
*/
        for (var i = 100; i >= 1; i--) {
            var p = document.createElement('p')
            p.innerHTML = (i + ' ' + 'lines of code in the file,' + ' ' + i + ' ' + 'lines of code,' + ' ' + friends[j] + ' ' + 'strikes one out, clears it all out,' + ' ' + (i - 1) + ' ' + 'lines of code in the file.');

        }
       // div.appendChild(p);
    }
    //document.body.appendChild(div);
}




    document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('home');
    button.addEventListener('click', loop());
        var para = document.createElement('p');
        var text = document.createTextNode('h3');

        para.appendChild(text);

        document.body.appendChild(para);
    });







