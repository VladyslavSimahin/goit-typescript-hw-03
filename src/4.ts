class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
    this.tenants = [];
  }
  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person entered the house");
    } else {
      console.log("The door is cloded");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is now open");
    } else {
      console.log("Cannot open the door. Invalid key");
    }
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());
house.comeIn(person);
