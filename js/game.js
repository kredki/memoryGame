'use strict';

var Piece = function (pieceNumber) {
    this.toGuess = false;
    this.pieceNumber = pieceNumber;
};

var game = (function () {

    var initialNumberOfPieces = 4,
        level = 0,
        currentNumberOfPieces,
        currentPieces,
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

            for (i = 0; i < getNumberOfPieces(); i++) {
                pieces.push(new Piece(i));
            }
            setPiecesToGuess(pieces);
            currentPieces = pieces;
            return pieces;
        },

        getInitialNumberOfPieces = function () {
            return initialNumberOfPieces;
        },

        setPiecesToGuess = function (pieces) {
            var numberOfSetPieces = 0;
            var numberOfPieceToGuess;
            while (numberOfSetPieces < pieces.length / 2 - 1) {
                numberOfPieceToGuess = getRandomInt(pieces.length);
                if(pieces[numberOfPieceToGuess].toGuess === false) {
                    pieces[numberOfPieceToGuess].toGuess = true;
                    numberOfSetPieces++;
                }
            }
        },

        getRandomInt = function (max) {
            return Math.floor(Math.random() * (max - 1));
        },

        getNumberOfPieces = function () {
            return currentNumberOfPieces + level * 2;
        },

        addLevel = function () {
            level++;
        }
    ;

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'getNumberOfPieces': getNumberOfPieces,
        'addLevel' : addLevel
    }
})();
