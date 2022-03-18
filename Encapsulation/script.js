class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Korobitsyn';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const dima = new User('Dima', 20);
console.log(dima.age);
dima.age = 17;
console.log(dima.age);
dima.say();

