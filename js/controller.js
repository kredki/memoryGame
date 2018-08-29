'use strict';
var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = game.getNumberOfPieces();
        var highlightTime = view.getHighlightTime();

        console.log("highlight time: " + highlightTime);
        console.log("start with " + initialNumberOfPieces + " pieces");
        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.renderPieces(game.getPieces());

    },

    pieceClicked = function (piece) {
        console.log("piece clicked no: " + piece.id);
    },

    addLevel = function () {
        game.addLevel();
        game.startGame();
        view.renderPieces(game.getPieces());
    };

    return {
        'startGame': startGame,
        'pieceClicked' : pieceClicked,
        'addLevel' : addLevel
    }
}();
