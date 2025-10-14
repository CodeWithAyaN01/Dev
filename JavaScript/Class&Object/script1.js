class person {
    constructor() {
        this.species = "Human";
    }

    eat() {
        console.log("Eating");
    }
}

class engineer extends person {
    constructor(branch) {
        super();
        this.branch = branch;
    }

    work() {
        console.log("Working");
    }
}

let engineerObj = new engineer("ISE");