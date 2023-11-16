/**
 * Represents a dog object.
 *
 * @class
 */
class Dog {
  /**
   * Creates an instance of the Dog class.
   *
   * @constructor
   * @param {string} name - The name of the dog.
   * @param {string} breed - The breed of the dog.
   * @param {number} age - The age of the dog.
   * @param {string} color - The color of the dog's fur.
   */
  constructor(name, breed, age, color) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
    this.isSleeping = false;
  }

  /**
   * Returns a string that contains the name and breed of the dog.
   *
   * @return {string} The description of a dog.
   */
  getDescription() {
    return `${this.name} - ${this.breed}`;
  }

  /**
   * Makes the dog sleep.
   *
   * @return {string} A message indicating that the dog is now sleeping.
   */
  sleep() {
    if (!this.isSleeping) {
      this.isSleeping = true;
      return `${this.name} is now sleeping.`;
    } else {
      return `${this.name} is already sleeping.`;
    }
  }

  /**
   * Wakes up the sleeping dog.
   *
   * @return {string} A message indicating that the dog woke up.
   */
  wakeUp() {
    if (this.isSleeping) {
      this.isSleeping = false;
      return `${this.name} woke up.`;
    } else {
      return `${this.name} is already awake.`;
    }
  }

  /**
   * Teaches the dog a new trick.
   *
   * @param {string} trick - The trick to be taught to the dog.
   * @return {string} A message indicating that the dog learned a new trick.
   */
  learnTrick(trick) {
    if (trick == null || trick == '' ) {
      throw new Error('Trick cannot be empty');
    }
    this.tricks.push(trick);
    return `${this.name} learned a new trick: ${trick}.`;
  }

  bark() {
    return `Woof! Woof!`;
  }

  /**
   * Displays information about the dog.
   *
   * @return {string} Information about the dog.
   */
  displayInfo() {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`;
  }
}

export default Dog;
