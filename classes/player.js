// Player class

class Player {
    constructor(firstName, lastName, team, position, height, weight, battingHand, pitchingHand) {
        // Personal info
        this.firstName = firstName;
        this.lastName = lastName;
        this.team = team;
        this.position = position;
        this.height = height;
        this.weight = weight;
        this.battingHand = battingHand;
        this.pitchingHand = pitchingHand;

        // Initialize Hitting Stats
        this.atBatsH = 0;
        this.runs = 0;
        this.hits = 0;
        this.singles = 0;
        this.doubles = 0;
        this.triples = 0;
        this.homeRuns = 0;
        this.hitByPitchH = 0;
        this.runsBattedIn = 0;
        this.walksH = 0;
        this.intentionalWalksH = 0;
        this.strikeOutsH = 0;
        this.sacFlys = 0;
        this.sacBunts = 0; 
        this.totalBases = 0;

        // Initialize Baserunning Stats
        this.leftOnBase = 0; 
        this.attemptedSteals = 0;
        this.stolenBases = 0;
        this.caughtStealing = 0;

        // Initialize Pitching Stats
        this.inningsPitched = 0;
        this.hitsAllowed = 0;
        this.earnedRuns = 0;
        this.walksP = 0;
        this.strikeOutsP = 0;
        this.wildPitches = 0;
        this.balks = 0;
        this.hitByPitchP = 0;
        this.intentionalWalksP = 0;
        this.atBatsP = 0;
        this.battersFaced = 0; 
        this.flyOuts = 0;
        this.groundOuts = 0;

        // Initialize Fielding Stats
        this.chances = 0;
        this.assists = 0;
        this.putOuts = 0;
        this.errors = 0;
        this.doublePlays = 0;

        // Intialize catcher stats
        this.stolenBaseAttempts = 0; 
        this.stolenBaseCaught = 0;   
        this.passedBalls = 0; 
        this.catchersInterferences = 0; 
    }
}