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
    it('throws an error if the pet is not alive', () => {
        const petOld = new Pet('Fido');
        petOld.age = 30;
        expect(() => petOld.growUp()).toThrow('Your pet is no longer alive :(');
    });
});
describe('walk', () => {
    it('Adds 4 to fitness to a max of 10', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.feed();
        pet.growUp();
        expect(pet.fitness).toEqual(4);
        pet.walk();
        expect(pet.fitness).toEqual(8);
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
        const petOld = new Pet('Fido');
        petOld.age = 30;
        expect(() => petOld.walk()).toThrow('Your pet is no longer alive :(');
    });
});
describe('feed', () => {
    it('Reduces hunger to a min of 0', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.feed();
        pet.growUp();
        expect(pet.hunger).toEqual(7);
        pet.feed();
        expect(pet.hunger).toEqual(4);
        pet.feed();
        expect(pet.hunger).toEqual(1);
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
        const petOld = new Pet('Fido');
        petOld.age = 30;
        expect(() => petOld.feed()).toThrow('Your pet is no longer alive :(');
    });
});
describe('checkup', () => {
    it('Return results of checkup based on Hunger and Fitness', () => {
        const pet = new Pet('Fido');
        pet.checkup();
        expect(pet.checkupResult).toEqual("I feel great")
        pet.growUp();
        pet.feed();
        pet.growUp();
        pet.feed()
        pet.growUp();
        pet.checkup();
        expect(pet.checkupResult).toEqual("I am hungry AND I need a walk")
        pet.feed();
        pet.feed();
        pet.feed();
        pet.feed();
        pet.checkup();
        expect(pet.checkupResult).toEqual("I need a walk")
        pet.walk();
        pet.growUp();
        pet.walk();
        pet.checkup();
        expect(pet.checkupResult).toEqual("I am hungry")
        pet.feed();
        pet.feed();
        pet.feed();
        pet.walk();
        pet.checkup();
        expect(pet.checkupResult).toEqual("I feel great")
    });
    it('throws an error if the pet is not alive', () => {
        const petOld = new Pet('Fido');
        petOld.age = 30;
        expect(() => petOld.checkup()).toThrow('Your pet is no longer alive :(');
    });
});
describe('isAlive', () => {
    it('returns isAlive as true or false', () => {
        const pet = new Pet('Fido');
        expect(pet.isAlive).toEqual(true);
        pet.growUp();
        pet.growUp();
        expect(pet.isAlive).toEqual(false);
    });
});
// describe('haveBaby', () => {
//     it('creates a baby of parent', () => {
//         const pet = new Pet ('Perent Pet');
//         pet.haveBaby('1st Born');
//         expect(pet.children).toStrictEqual([{name: '1st Born', age: 0, hunger: 0, fitness: 10, children:[]}]);
//         pet.haveBaby('2nd Born');
//         expect(pet.children).toStrictEqual([{name: '1st Born', age: 0, hunger: 0, fitness: 10, children:[]}, {name: '2nd Born', age: 0, hunger: 0, fitness: 10, children:[]}]);
//         pet.children[0].haveBaby('Grand Child');
//         expect(pet.children).toStrictEqual([{name: '1st Born', age: 0, hunger: 0, fitness: 10, children:[{name: 'Grand Child', age: 0, hunger: 0, fitness: 10, children:[]}]}, {name: '2nd Born', age: 0, hunger: 0, fitness: 10, children:[]}]);
//     })
// });

// describe('adoptChild', () => {
//     it('passes child into parent with adoptChild', () => {
//         const parent = new Pet ('Perent Pet');
//         const child = new Pet ('1st Adopt');
//         parent.adoptChild(child);
//         expect(parent.children[0]).toBe(child);
//         expect(parent.children).toStrictEqual([{name: '1st Adopt', age: 0, hunger: 0, fitness: 10, children:[]}]);
//     });
// });