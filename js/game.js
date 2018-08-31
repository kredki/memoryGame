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
        numberOfRemainedPiecesToGuess,
        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
        },

        initializePieces = function () {
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
            var indexOfPieceToGuess;
            while (numberOfSetPieces < pieces.length / 2 - 1) {
                indexOfPieceToGuess = getRandomInt(pieces.length);
                if (pieces[indexOfPieceToGuess].toGuess === false) {
                    pieces[indexOfPieceToGuess].toGuess = true;
                    numberOfSetPieces++;
                }
            }
            numberOfRemainedPiecesToGuess = numberOfSetPieces;
        },

        getRandomInt = function (max) {
            return Math.floor(Math.random() * max);
        },

        getNumberOfPieces = function () {
            return currentNumberOfPieces + level * 2;
        },

        addLevel = function () {
            level++;
        },

        resetLevel = function () {
            level = 0;
        },

        checkIfGuessed = function (id) {
            if (currentPieces[id].toGuess === true) {
                currentPieces[id].toGuess = false;
                numberOfRemainedPiecesToGuess--;
                return true;
            }
            return false;
        },

        getNumberOfRemainedPiecesToGuess = function () {
            return numberOfRemainedPiecesToGuess;
        }
    ;

    return {
        'startGame': startGame,
        'initializePieces': initializePieces,
        'getNumberOfPieces': getNumberOfPieces,
        'addLevel': addLevel,
        'resetLevel': resetLevel,
        'checkIfGuessed': checkIfGuessed,
        'getNumberOfRemainedPiecesToGuess': getNumberOfRemainedPiecesToGuess
    }
})();
