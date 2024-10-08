class Hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        return `${this.type} atacou!`
    }
}

export class Warrior extends Hero{
    constructor(name, age, type){
        super(name, age, type)
    }

    attack(){
        return `Espada`
    }
}

export class Mage extends Hero{
    constructor(name, age, type){
        super(name, age, type)
    }

    attack(){
        return `Magia`
    }
}

export class Ninja extends Hero{
    constructor(name, age, type){
        super(name, age, type)
    }

    attack(){
        return `Shuriken`
    }
}

export class Monk extends Hero{
    constructor(name, age, type){
        super(name, age, type)
    }

    attack(){
        return `Artes Marciais`
    }
}