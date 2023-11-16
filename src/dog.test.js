// dog.test.js
/* eslint-disable max-len */


let Dog = require ('../src/dog.js');

describe('Dog class tests', () => {
let dog;

  beforeEach(() => {
    dog = new Dog("Buddy", "Golden Retriever", 2, "Golden");
  });

  test('Dog can bark', () => {
    expect(dog.bark()).toBe("Woof! Woof!");
  });

  test('Dog can sleep and wake up', () => {
    expect(dog.sleep()).toBe("Buddy is now sleeping.");
    expect(dog.wakeUp()).toBe("Buddy woke up.");
  });

  test('Dog can learn and perform tricks', () => {
    expect(dog.learnTrick("Sit")).toBe("Buddy learned a new trick: Sit.");
    expect(dog.learnTrick("Roll Over")).toBe("Buddy learned a new trick: Roll Over.");

    // Mock Math.random() to always return 0 for predictable test results
    const originalRandom = Math.random;
    Math.random = jest.fn(() => 0);

    // Test doTrick() with a predictable result
    expect(dog.doTrick()).toBe("Buddy is doing the trick: Sit.");

    // Restore Math.random() to its original state
    Math.random = originalRandom;
  });

  test('Dog displays information', () => {
    expect(dog.displayInfo()).toBe("Name: Buddy, Breed: Golden Retriever, Age: 2, Color: Golden");
  });
});


