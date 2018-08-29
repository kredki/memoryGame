'use strict'
var view = (function () {
    var getInitialNumberOfPieces = function () {
        return document.getElementById("initialNumberOfPieces").value;
    };

    var renderPieces = function (pieces) {
        var i;
        var element = document.getElementById("pieces");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        for(i=0; i < pieces.length; i++) {
            var para = document.createElement("button");
            var node = document.createTextNode("This is new.");
            para.appendChild(node);
            para.setAttribute("onclick", "controller.pieceClicked(this)")
            para.setAttribute("id", i);
            element.appendChild(para);
        }
    }

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces' : renderPieces
    }
})();
