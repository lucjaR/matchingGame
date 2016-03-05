/**
 * Created by lucja on 05.03.16.
 */
var numberOfFaces = 5;

function cleareBoard(board) {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}
function generateFaces() {

    var theLeftSide = document.getElementById("leftSide");
    var theRightSide = document.getElementById("rightSide");
    var theLeftSideImages;

    for (var i = 1; i <= numberOfFaces; i++) {
        var img = document.createElement("img");
        img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        img.style.position = "absolute";
        img.style.top = Math.floor(Math.random() * 400) + "px";
        img.style.left = Math.floor(Math.random() * 400) + "px";

        theLeftSide.appendChild(img);

        if (i < numberOfFaces) {
            theLeftSideImages = img.cloneNode(true);
            theRightSide.appendChild(theLeftSideImages);
        }
    }

    theLeftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 5;
        theLeftSide.lastChild.onclick = null;
        cleareBoard(theLeftSide);
        cleareBoard(theRightSide);
        generateFaces();
    };

    document.body.onclick = function gameOver() {
        alert("Game Over!");
        document.body.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };
}

