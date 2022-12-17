const MINIMUM_HUNGER = 0;
const MAXIMUM_FITNESS = 10;
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const INITIAL_FITNESS = 10;
const GROWUP_AGE = 1;
const GROWUP_HUNGER = 5;
const GROWUP_FITNESS = 3;
const WALK_FITNESS = 4;
const FEED_HUNGER = 3;
function Pet(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = INITIAL_FITNESS;
    this.checkupResult = "I feel great";
}
Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};
Pet.prototype.growUp = function() {
    this.age += GROWUP_AGE;
    this.hunger += GROWUP_HUNGER;
    this.fitness -= GROWUP_FITNESS;
};
Pet.prototype.walk = function() {
    this.fitness += WALK_FITNESS;
    if (this.fitness > MAXIMUM_FITNESS) {
        this.fitness = MAXIMUM_FITNESS;
    }
};
Pet.prototype.feed = function() {
    this.hunger -= FEED_HUNGER;
    if (this.hunger < MINIMUM_HUNGER) {
        this.hunger = MINIMUM_HUNGER;
    }
};
Pet.prototype.checkup = function() {
    if (this.fitness > 3 && this.hunger < 5) {
        this.checkupResult = "I feel great";
    } else if (this.fitness < 4 && this.hunger > 4) {
        this.checkupResult =  "I am hungry AND I need a walk";
    } else if (this.fitness < 4) {
        this.checkupResult =  "I need a walk";
    } else if (this.hunger > 4) {
        this.checkupResult =  "I am hungry";
    }
};

module.exports = Pet;