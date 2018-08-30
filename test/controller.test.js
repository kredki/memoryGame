describe('Controller', function () {
    it('should start game', function () {
        //given
        var pieces = [];
        spyOn(view, 'getHighlightTime');
        spyOn(game, 'resetLevel');
        spyOn(game, 'startGame');
        spyOn(game, 'initializePieces').and.returnValue(pieces);
        spyOn(view, 'renderPieces');
        spyOn(game, 'getNumberOfRemainedPiecesToGuess').and.returnValue(1);
        spyOn(view, 'setNumberOfRemainedPiecesToGuess');
        spyOn(view, 'highlightPieces');

        controller.highlightIsFinished();

        //when
        controller.startGame();

        //then
        expect(view.getHighlightTime).toHaveBeenCalled();
        expect(game.resetLevel).toHaveBeenCalled();
        expect(game.startGame).toHaveBeenCalled();
        expect(game.initializePieces).toHaveBeenCalled();
        expect(view.renderPieces).toHaveBeenCalledWith(pieces);
        expect(game.getNumberOfRemainedPiecesToGuess).toHaveBeenCalled();
        expect(view.setNumberOfRemainedPiecesToGuess).toHaveBeenCalledWith(1);
        expect(view.highlightPieces).toHaveBeenCalled();
    });

    it('should check if piece is clicked correctly', function () {
        //given
        var piece = {},
            piecesToGuess = 0,
            pieces = [];
        piece.id = 1;

        spyOn(game, 'checkIfGuessed').and.returnValue(true);
        spyOn(view, 'highlightGreen');
        spyOn(game, 'getNumberOfRemainedPiecesToGuess').and.returnValue(piecesToGuess);
        spyOn(game, 'addLevel');
        spyOn(game, 'startGame');
        spyOn(game, 'initializePieces').and.returnValue(pieces);
        spyOn(view, 'renderPieces');
        spyOn(view, 'setNumberOfRemainedPiecesToGuess');
        spyOn(view, 'highlightPieces');

        spyOn(view, 'highlightRed');
        spyOn(controller, 'startGame');

        controller.highlightIsFinished();

        //when
        controller.pieceClicked(piece);

        //then
        expect(game.checkIfGuessed).toHaveBeenCalledWith(1);
        expect(view.highlightGreen).toHaveBeenCalled();
        expect(game.getNumberOfRemainedPiecesToGuess).toHaveBeenCalled();
        expect(game.addLevel).toHaveBeenCalled();
        expect(game.startGame).toHaveBeenCalled();
        expect(game.initializePieces).toHaveBeenCalled();
        expect(view.renderPieces).toHaveBeenCalledWith(pieces);
        expect(game.getNumberOfRemainedPiecesToGuess).toHaveBeenCalled();
        expect(view.setNumberOfRemainedPiecesToGuess).toHaveBeenCalledWith(piecesToGuess);
        expect(view.highlightPieces).toHaveBeenCalledWith(pieces);
    });

});