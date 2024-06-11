import PetShop, { AnimalType, Animal, Dog, Cat, Bird, Fish  } from "../src/index.js";

describe("Core Criteria", () => {
    let petShop;

  
    it("should exist", () => {
      petShop = new PetShop([]);
      expect(petShop).toBeInstanceOf(PetShop);
      
      let animal = new Animal("cow", 4, 10, "moooooo");
      expect(animal).toBeInstanceOf(Animal);
      animal = new Dog("Charger", 3, 9, "woof");
      expect(animal).toBeInstanceOf(Animal);
      expect(animal).toBeInstanceOf(Dog);
      animal = new Cat("whiskers", 3, 15, "meow");
      expect(animal).toBeInstanceOf(Animal);
      expect(animal).toBeInstanceOf(Cat);
      animal = new Bird("Tweeny", 3, 15, "tweeeiiit");
      expect(animal).toBeInstanceOf(Animal);
      expect(animal).toBeInstanceOf(Bird);
      animal = new Fish("Tinkerbell", 3, 15, "blooop blooop");
      expect(animal).toBeInstanceOf(Animal);
      expect(animal).toBeInstanceOf(Fish);
    });
    
    it("animals should have a name, age, expected lifespan and sound", () => {
        expect(() => {
          new Bird();
        }).toThrow("name is required");
        expect(() => {
          new Bird("Pinky");
        }).toThrow("age is required");
        expect(() => {
          new Bird("Pinky", 5);
        }).toThrow("expected lifespan is required");
        expect(() => {
          new Bird("Pinky", 5, 10);
        }).toThrow("sound is required");
        expect(() => {
          new Bird("Pinky", 5, 10, "quark");
        }).not.toThrow();
      });
    
})