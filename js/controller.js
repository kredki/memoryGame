'use strict';
var controller = function () {
    var startGame = function () {
            var initialNumberOfPieces = 4;
            var highlightTime = view.getHighlightTime();
            var pieces;

            game.resetLevel();
            console.log("highlight time: " + highlightTime);
            console.log("start with " + initialNumberOfPieces + " pieces");


            game.startGame({
                numberOfPieces: initialNumberOfPieces
            });
            pieces = game.initializePieces();
            view.renderPieces(pieces);
            view.setNumberOfRemainedPiecesToGuess(game.getNumberOfRemainedPiecesToGuess());
            view.highlightPieces(pieces);
        },

        pieceClicked = function (piece) {
            var isPieceGuessed;
            console.log("piece clicked no: " + piece.id);
            isPieceGuessed = game.checkIfGuessed(piece.id);
            console.log(isPieceGuessed);
        },

        addLevel = function () {
            game.addLevel();
            game.startGame();
            view.renderPieces(game.initializePieces());
            view.setNumberOfRemainedPiecesToGuess(game.getNumberOfRemainedPiecesToGuess());
        };

    return {
        'startGame': startGame,
        'pieceClicked': pieceClicked,
        'addLevel': addLevel
    }
}();
