//Create Arrays of Names, Places and Weapons.

var listNames = ['Bishop', 'GQ', 'Steal', 'Raheem', 'Blizzard'];

var listPlaces = ['Harlem', 'Bronx', 'Manhattan', 'Queens', 'Staton Island', 'Brooklyn', 'Chattanooga', 'Atlanta',
    'Nashville', 'Greensboro'];

var listWeapons = ['baseball bat', 'rake', 'liquid sword', 'rock', 'hammer', 'tire iron', 'bare hands', 'knife', 'tennis racket',
    'hockey stick', 'stapler', 'exstension cord', 'frying pan', 'plastic bag', 'razor blade', 'high heel shoe', 'sunglasses',
    'shotgun', 'ice pick', 'mop'];

//Call eventlistener for the document, first because script is in the head of html.
document.addEventListener('DOMContentLoaded', function () {

    //Loop through all arrays 100 times and place into header.
    for (var i = 0; i < 100; i++) {
        var h3 = document.createElement('h3');
        h3.innerText = 'Accusation ' + (i + 1);
        //Add click function to alert Accusations looping through arrays randomly.
        h3.addEventListener('click', function () {
            var names = listNames[this % listNames.length];
            var names2 = listNames[this % listNames.length];
            var places = listPlaces[this % listPlaces.length];
            var weapons = listWeapons[this % listWeapons.length];
            alert('Accusation ' + (this + 1) + ': I believe ' + names + ', used a ' + weapons + ' hurt ' + names2 + ' in ' + places + '.');
        }.bind(i));
        document.body.appendChild(h3);
    }

})


//My Javascript that does something different with the arrays.
//     function loopAll() {

//         for (var i = 1; i <= 10; i++) {
//             var h3 = document.createElement('h3');

//             for (var j = 0; j < listNames.length; j++) {
//                 var myNames = (listNames[j]);
//                 var newName = document.createTextNode(myNames);
//                 h3.appendChild(newName);
//                 if (j < listNames.length) {
//                     h3.innerText = ('Accusation ' + i + ' ' + listNames[j]);
//                 }
//             }
//             document.body.appendChild(h3);
//         }
//     }
//     loopAll();
// })



