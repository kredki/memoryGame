'use strict'

var Piece = function (isPieceToGuess) {
    this.toGuess = isPieceToGuess;
}

var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
        },

        getPieces = function () {
            var i,
                pieces = [];

            for(i=0; i < currentNumberOfPieces; i++) {
                pieces.push(new Piece(false));
            }
            pieces[0].toGuess = true;
            return pieces;
        },

        getInitialNumberOfPieces = function () {
            return initialNumberOfPieces;
        }
    ;

    return {
        'startGame': startGame,
        'getPieces': getPieces
    }
})();
