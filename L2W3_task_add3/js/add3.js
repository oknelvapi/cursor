// https://gist.github.com/f86be48f4cd5bbc2903a423885b5b6ec.git

class Auditory {
    constructor(maxSize = 100, projector = false) {
        this.maxSize = maxSize;
        this.projector = projector;
    }
    check() {
        return people <= this.maxSize;
    }
    checkWithProjector() {
        return this.check(people) && this.projector;
    }
}

const aud1 = new Auditory(30); 
const aud2 = new Auditory(70, true);
const aud3 = new Auditory(15, true);
const people = 18;

aud1.check(people); 
aud2.check(people); 
aud3.check(people); 