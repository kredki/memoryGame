'use strict';
var controller = function () {
    var isHighLightActive = false,
        startGame = function () {
            var initialNumberOfPieces = 4,
                highlightTime = view.getHighlightTime(),
                pieces;

            if (isHighLightActive) {
                return;
            }
            isHighLightActive = true;

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
            var pieces,
                isPieceGuessed;
            if (isHighLightActive) {
                return;
            }

            console.log("piece clicked no: " + piece.id);
            isPieceGuessed = game.checkIfGuessed(piece.id);
            console.log(isPieceGuessed);
            if (isPieceGuessed) {
                view.highlightGreen(piece.id);

                if (game.getNumberOfRemainedPiecesToGuess() === 0) {
                    isHighLightActive = true;
                    game.addLevel();
                    game.startGame();
                    pieces = game.initializePieces();
                    view.renderPieces(pieces);
                    view.setNumberOfRemainedPiecesToGuess(game.getNumberOfRemainedPiecesToGuess());
                    view.highlightPieces(pieces);
                } else {
                    view.setNumberOfRemainedPiecesToGuess(game.getNumberOfRemainedPiecesToGuess());
                }
            } else {
                isHighLightActive = true;
                view.highlightRed(piece.id);
                setTimeout(function () {
                    isHighLightActive = false;
                    startGame();
                }, 500);
            }
        },

        addLevel = function () {
            var pieces;
            if (isHighLightActive) {
                return;
            }
            isHighLightActive = true;

            game.addLevel();
            game.startGame();
            pieces = game.initializePieces();
            view.renderPieces(pieces);
            view.setNumberOfRemainedPiecesToGuess(game.getNumberOfRemainedPiecesToGuess());
            view.highlightPieces(pieces);
        },

        highlightIsFinished = function () {
            isHighLightActive = false;
        },

        highlight = function () {
            var pieces;
            if (isHighLightActive) {
                return;
            }
            isHighLightActive = true;

            game.startGame();
            pieces = game.initializePieces();
            view.renderPieces(pieces);
            view.setNumberOfRemainedPiecesToGuess(game.getNumberOfRemainedPiecesToGuess());
            view.highlightPieces(pieces);
        };

    return {
        'startGame': startGame,
        'pieceClicked': pieceClicked,
        'addLevel': addLevel,
        'highlightIsFinished': highlightIsFinished,
        'highlight': highlight
    }
}();
