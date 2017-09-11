//Array for color change during change function.
var boxColors = ['yellow', 'orange', 'red', 'blue', 'green', 'purple'];

//This is the eventListner for the full document.
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.innerText = 'Click to Add Square';
    btn.addEventListener('click', change);
    document.body.appendChild(btn);

    //This is the div for all newly added squares.
    var containAll = document.createElement('div');
    containAll.id = 'allSquares'
    document.body.appendChild(containAll);



    function change() {
        //Find all classname elements with attribute 'oldsquare' and set as a variable.
        //This will find the elements and place the order as an array.
        //This oldSquare is consider a number due to the length of the array.
        var oldSquare = document.getElementsByClassName('oldsquare').length;
        var oldSquareArray = document.getElementsByClassName('oldsquare');
        //This is the div for each square that is made.
        var squareContainer = document.createElement('div');
        //This will give all divs the classname of 'oldsquare'.
        squareContainer.className = 'oldsquare';
        //This will give all divs the id of 'oldsquare'.
        squareContainer.id = oldSquare;
        console.log(oldSquare);
        console.log(oldSquareArray);

        //Actions that happen when using mouse.
        squareContainer.addEventListener('click', changeColorsOfBox)
        squareContainer.addEventListener('mouseenter', insertNumber);
        squareContainer.addEventListener('mouseleave', removeNumber);
        squareContainer.addEventListener('dblclick', removeSquare);

        containAll.appendChild(squareContainer);
    }
    
    //Make funtions for each addEventListner.

    //Making the Colors Change.
    function changeColorsOfBox() {
        var choose = Math.floor(Math.random() * boxColors.length);
        var select = boxColors[choose];
        this.style.backgroundColor = select;
    }
    //Put numbers inside of div with the id of squareContainer.
    //The "id" in this case is the squareContainer id, which is a number.
    function insertNumber() {
        var number = this.id
        this.innerText = number;
    }
    //Remove number from inside div with the id of squareContainer.
    function removeNumber() {
        this.innerText = ' ';
    }
    //Remove square once they are double clicked.
    //The "id" in this case is the squareContainer id, which is a number.
    function removeSquare() {
        var number = this.id;
        //Removes the even number square.
        if (number % 2 === 0) {
            if (this.nextSibling) {
                this.nextSibling.remove();
            }
            else {
                alert('There are no even numbers to the right of this square.')
            }
        } else {
            //Removes the odd number squares.
            if (this.previousSibling) {
                this.previousSibling.remove();
            }
            else {
                alert('There are no odd numbers to the left of this square.')
            }
        }
    }
});
