'use strict';
var view = (function () {
    var renderPieces = function (pieces) {
            var i;
            var element = document.getElementById("pieces");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }

            for (i = 0; i < pieces.length; i++) {
                var para = document.createElement("button");
                para.setAttribute("onclick", "controller.pieceClicked(this)");
                para.setAttribute("id", i);
                element.appendChild(para);
            }
        },

        getHighlightTime = function () {
            return document.getElementById("time").value;
        },

        setNumberOfRemainedPiecesToGuess = function (numberOfRemainedPiecesToGuess) {
            document.getElementById("remainedPieces").innerText = numberOfRemainedPiecesToGuess;
        },

        highlightPieces = function (pieces) {
            var i;
            var highlightTime = 1;
            var highlightTimeFromPage = getHighlightTime();

            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    document.getElementById(i).style.backgroundColor = "blue";
                }
            }
            if (highlightTimeFromPage > 1) {
                highlightTime = highlightTimeFromPage;
            }

            setTimeout(function () {unhighlightPieces(pieces)}, highlightTime * 1000);
        },

        unhighlightPieces = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {

                document.getElementById(i).style.backgroundColor = "yellow";

            }
            controller.highlightIsFinished();
        };

    return {
        'renderPieces': renderPieces,
        'getHighlightTime': getHighlightTime,
        'setNumberOfRemainedPiecesToGuess': setNumberOfRemainedPiecesToGuess,
        'highlightPieces': highlightPieces
    }
})();
