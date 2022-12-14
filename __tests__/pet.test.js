const Pet = require('../src/pet');
describe('Constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});
describe('Age', () => {
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});
describe('Hunger', () => {
    it('has a initial hunger of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });
});
describe('Fitness', () => {
    it('has a initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});
describe('GrowUp', () => {
    it('Adds 1 to initial age, adds 5 to initial hunger and reduces fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });
});
describe('walk', () => {
    it('Adds 4 to fitness to a max of 10', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        expect(pet.fitness).toEqual(4);
        pet.walk();
        expect(pet.fitness).toEqual(8);
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});
describe('feed', () => {
    it('Reduces hunger to a min of 0', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        expect(pet.hunger).toEqual(10);
        pet.feed();
        expect(pet.hunger).toEqual(7);
        pet.feed();
        expect(pet.hunger).toEqual(4);
        pet.feed();
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});