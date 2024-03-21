// Game class file


class Game {
    constructor(homeTeam, awayTeam, date, startTime, ballpark) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = 0;
        this.awayScore = 0;
        this.homeHits = 0;
        this.awayHits = 0;
        this.homeErrors = 0;
        this.awayErrors = 0;
        this.currInning = 1;
        this.date = date;
        this.start_time = start_time;
        this.ballpark = ballpark;
        this.bases = [false, false, false];
    }

    //Player gets a hit
    hit() {

    }





}