'use strict'
var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();

        console.log("start with " + initialNumberOfPieces + " pieces");
        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.renderPieces(game.getPieces());

    };

    var pieceClicked = function (piece) {
        console.log("piece clicked no: " + piece.id);
    };

    return {
        'startGame': startGame,
        'pieceClicked' : pieceClicked
    }
}();
