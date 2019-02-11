var Player = function(name) {
    this.name = name;
    this.score = 0;
}; 

const SimpleResultEnums = {
    LOVE: 'Love',
    FIFTEEN: 'Fifteen',
    THIRTY: 'Thirty',
    FORTY:'Forty'
}

const SimplePointEnums = {
    ZERO_POINT: 0,
    FIFTEEN_POINT: 1,
    THIRTY_POINT: 2,
    FORTY_POINT: 3
}

Player.prototype.winPoint = function(){
        this.score += 1;
};

Player.prototype.getScoreName = function() {
    switch (this.score) {
        case SimplePointEnums.ZERO_POINT:
            return SimpleResultEnums.LOVE;
        case SimplePointEnums.FIFTEEN_POINT:
           return SimpleResultEnums.FIFTEEN;
        case SimplePointEnums.THIRTY_POINT:
            return SimpleResultEnums.THIRTY;
        case SimplePointEnums.FORTY_POINT:
            return SimpleResultEnums.FORTY;
    }
};

if (typeof window === "undefined") {
    module.exports = Player;
}