// Baseball Team Class

class Team {
    constructor(teamName, dateCreated, playerList, coachList, homeBallpark, division, league) {
        this.teamName = teamName;
        this.dateCreated = dateCreated;
        this.playerList = playerList;
        this.coachList = coachList;
        this.homeBallpark = homeBallpark;
        this.division = division;
        this.league = league;
        this.totalWins = 0;
        this.totalLosses = 0;
    }
    
}