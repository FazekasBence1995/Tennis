if (typeof Player === "undefined") {
    var Player = require("./Player.js");
}

const ResultEnums = {
    LOVE_ALL: 'Love-All',
    FIFTEEN_ALL: 'Fifteen-All',
    THIRTY_ALL: 'Thirty-All',
    DEUCE:'Deuce',
    ADVANTAGE_PLAYER1: 'Advantage player1',
    ADVANTAGE_PLAYER2: 'Advantage player2',
    WIN_FOR_PLAYER1: 'Win for player1',
    WIN_FOR_PLAYER2: 'Win for player2'
}

const PointEnums = {
    ZERO_POINT: 0,
    FIFTEEN_POINT: 1,
    THIRTY_POINT: 2
}

var TennisGame1 = function(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === this.player1.name) {
        this.player1.winPoint();
    } else if (playerName === this.player2.name) {
        this.player2.winPoint();
    }
};

TennisGame1.prototype.calculateDrawScore = function() {
    switch (this.player1.score) {
        case PointEnums.ZERO_POINT:
            return ResultEnums.LOVE_ALL;
        case PointEnums.FIFTEEN_POINT:
            return ResultEnums.FIFTEEN_ALL;
        case PointEnums.THIRTY_POINT:
            return ResultEnums.THIRTY_ALL;
        default:
            return ResultEnums.DEUCE;
    }
}

TennisGame1.prototype.calculateWinnerScore = function() {
    let diffrence = this.player1.score - this.player2.score;
    if (diffrence === 1 ){
        return ResultEnums.ADVANTAGE_PLAYER1;
    } else if (diffrence === -1) {
        return ResultEnums.ADVANTAGE_PLAYER2;
    } else if (diffrence >= 2) {
        return ResultEnums.WIN_FOR_PLAYER1;
    } else {
        return ResultEnums.WIN_FOR_PLAYER2;
    }
}

TennisGame1.prototype.calculateSimpleScore = function() {
    return `${this.player1.getScoreName()}-${this.player2.getScoreName()}`
}

TennisGame1.prototype.getScore = function() {
    let score = "";
    if (draw(this.player1, this.player2)) {
        score = this.calculateDrawScore();
    } else if (moreThanThree(this.player1, this.player2)) {
       score = this.calculateWinnerScore();
    } else {
       score = this.calculateSimpleScore();
    }
    return score;
}

function draw(player1, player2) {
    return player1.score === player2.score;
}

function moreThanThree(player1, player2){
    return player1.score >= 4 || player2.score >= 4;
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}