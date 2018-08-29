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
            var indexOfPieceToGuess;
            while (numberOfSetPieces < pieces.length / 2 - 1) {
                indexOfPieceToGuess = getRandomInt(pieces.length);
                if(pieces[indexOfPieceToGuess].toGuess === false) {
                    pieces[indexOfPieceToGuess].toGuess = true;
                    numberOfSetPieces++;
                }
            }
            numberOfRemainedPiecesToGuess = numberOfSetPieces;
        },

        getRandomInt = function (max) {
            return Math.floor(Math.random() * (max - 1));
        },

        getNumberOfPieces = function () {
            return currentNumberOfPieces + level * 2;
        },

        addLevel = function () {
            level++;
        },

        checkIfGuessed = function (id) {
            if(currentPieces[id].toGuess === true) {
                currentPieces[id].toGuess = false;
                numberOfRemainedPiecesToGuess--;
                return true;
            }
            return false;
        }
    ;

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'getNumberOfPieces': getNumberOfPieces,
        'addLevel' : addLevel,
        'checkIfGuessed' : checkIfGuessed
    }
})();
