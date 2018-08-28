'use strict'
var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();

        alert("start with " + initialNumberOfPieces + " pieces");
        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.renderPieces(game.getPieces());

    };

    return {
        'startGame': startGame
    }
}();
