var names = ['Bishop', 'GQ', 'Steal', 'Raheem', 'Blizzard'];

var places = ['Harlem', 'Bronx', 'Manhattan', 'Queens', 'Staton Island', 'Brooklyn', 'Chattanooga', 'Atlanta',
    'Nashville', 'Greensboro'];

var weapons = ['baseball bat', 'rake', 'liquid sword', 'rock', 'hammer', 'tire iron', 'bare hands', 'knife', 'tennis racket',
    'hockey stick', 'stapler', 'exstension cord', 'frying pan', 'plastic bag', 'razor blade', 'high heel shoe', 'sunglasses',
    'shotgun', 'ice pick', 'mop'];

document.addEventListener('DOMContentLoaded', function () {


    function loopAll() {

        for (var j = 0; j <= 10; j++) {
            h3.innerText = ('Accusation ' + j + ' ' + 'I believe ' + names[j] + ' ' + 'did it!!! ');

            function loopNames() {
                for (var i = 0; i < names.length; i++) {
                    var h3 = document.createElement('h3');
                    h3.inner = names[i];
                    var who = names[i];
                    h3.appendChild(who);
                }
            }
            //loopNames();
        }

        // function loopPlaces() {
        //     for (var i = 0; i < places.length; i++) {
        //         h3.innerHTML = places[i];
        //         var where = places[i];
        //         h3.appendChild(where);
        //     }
        // }

        // function loopWeapons() {
        //     for (var i = 0; i < weapons.length; i++) {
        //         h3.innerHTML = weapons[i];
        //         var item = weapons[i];
        //         h3.appendChild(item);
        //     }
        // }
        document.body.appendChild(h3);
    }

    loopAll();
});


