describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        //given
        var pieces;
        game.startGame();

        //when
        pieces = game.initializePieces();

        //then
        expect(pieces.length).toBe(4);
    });

    it('should guess piece', function () {
        //given
        var pieces,
        i,
        piecesToGuess = [];
        game.startGame();

        //when
        pieces = game.initializePieces();

        for (i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                piecesToGuess.push(i);
            }
        }

        //then
        for (i = 0; i < piecesToGuess.length; i++) {
            expect(game.checkIfGuessed(piecesToGuess[i])).toBe(true);
        }
    });

    it('should not guess the same piece twice', function () {
        //given
        var pieces,
        i,
        piecesToGuessIndex;
        game.startGame();

        //when
        pieces = game.initializePieces();

        for (i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                piecesToGuessIndex = i;
                break;
            }
        }

        //then
        expect(game.checkIfGuessed(piecesToGuessIndex)).toBe(true);
        expect(game.checkIfGuessed(piecesToGuessIndex)).toBe(false);

    });

    it('one pieces should be to guess after game start', function () {
        //given
        var piecesToGuess;
        game.startGame();

        //when
        piecesToGuess = findPiecesToGuess(game.initializePieces());

        //then
        expect(piecesToGuess.length).toBe(1);
    });

    it('two pieces should be to guess after game start', function () {
        //given
        var piecesToGuess,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);

        //when
        piecesToGuess = findPiecesToGuess(game.initializePieces());

        //then
        expect(piecesToGuess.length).toBe(2);
    });

    it('two pieces should be to guess after game start', function () {
        //given
        var piecesToGuess,
            config = {
                numberOfPieces: 8
            };
        game.startGame(config);

        //when
        piecesToGuess = findPiecesToGuess(game.initializePieces());

        //then
        expect(piecesToGuess.length).toBe(3);
    });

    it('should start game with configured number of pieces', function () {
        //given
        var pieces,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);

        //when
        pieces = game.initializePieces();

        //then
        expect(pieces.length).toBe(6);
    });


    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    }
});
