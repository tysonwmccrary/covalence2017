//Create an empty array to store number of dice.
var diceArray = [];

//Apply the function to id that will create a new die.
//Place a new die numbers into the array.
document.getElementById('generate-button').addEventListener('click', function () {
    var d = new Die();
    diceArray.push(d);
    // diceArray.push(new Die());
});

//Locate the id attribute and add eventlistener and function.
//When clicked loop through the array.
//This is made into a variable to set an eventlistener to it.
var rollBtn = document.getElementById('roll-button');
rollBtn.addEventListener('click', function () {
    for (var i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
});

//Add eventlistener to the sum-button to call numbers 1-6.
document.getElementById('sum-button').addEventListener('click', function () {
    var sum = 0;
    for (var i = 0; i < diceArray.length; i++) {
        sum = sum + diceArray[i].value;
        // sum += diceArray[i].value;
    }
    alert('The sum of the dice is ' + sum);
});

//Creat the the CLass Die, used as a constructor.
function Die() {
    this.div = document.createElement('div');
    this.div.className = 'die';
    this.div.addEventListener('click', this.roll.bind(this));
    // this.div.addEventListener('click', function() {
    //     this.roll();
    // }.bind(this));
    this.div.addEventListener('dblclick', this.removeDie.bind(this));
    this.roll();
    document.body.appendChild(this.div);
}

//Make prototype from the constructor/function.

//Make a prototype with the function to select random numbers from 1-6.
//This is placed into the div class name 'die'.
Die.prototype.roll = function () {
    this.value = Math.ceil(Math.random() * 6);
    this.div.innerHTML = this.value;
}

//Make a second prototype with the function to remove the dice.
Die.prototype.removeDie = function () {
    this.div.remove();

//This will remove the number for the array.
    var index = diceArray.indexOf(this);
    diceArray.splice(index, 1);
}