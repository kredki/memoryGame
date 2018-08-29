'use strict';
var view = (function () {
    var renderPieces = function (pieces) {
        var i;
        var element = document.getElementById("pieces");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        for(i=0; i < pieces.length; i++) {
            var para = document.createElement("button");
            para.setAttribute("onclick", "controller.pieceClicked(this)")
            para.setAttribute("id", i);
            element.appendChild(para);
        }
    };

    var getHighlightTime = function () {
        return document.getElementById("time").value;
    };

    return {
        'renderPieces' : renderPieces,
        'getHighlightTime' : getHighlightTime
    }
})();
