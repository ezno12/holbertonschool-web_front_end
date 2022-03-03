class studentHogwarts {
    privateScore = 0;
    name = null;

    #changeScoreBy(pionts) {
        this.privateScore += pionts;
    }

    setName(newName) {
        this._name = newName;
    }

    rewardStudent() {
        this.#changeScoreBy(1);
    }

    penalizeStudent() {
        this.#changeScoreBy(-1)
    }

    getScore() {
        this.name = this._name;
        return this.name + ": " + this.privateScore;
    }
}

const harry = new studentHogwarts();

harry.setName("Harry");
for (let i = 0; i < 4; i++) {
    harry.rewardStudent()
    
}
console.log(harry.getScore());


const draco = new studentHogwarts();

draco.setName("Draco");
draco.rewardStudent();
for (let i = 0; i <= 3; i++) {
    draco.penalizeStudent();
}

console.log(draco.getScore());