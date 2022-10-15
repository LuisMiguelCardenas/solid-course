interface Bird {
    eat(): void
}

interface FlyingBird {
    fly():void
}

interface RuningBird {
    run():void
}

interface Swimmingbird {
    swin():void
}
class Tucan implements Bird,FlyingBird {

    public fly(){}
    public eat(){}

}

class Humminbrid implements Bird, FlyingBird{
    
    public fly(){}
    public eat(){}
 
}
class Ostrich implements Bird, RuningBird {

    public eat(){}
    public run(){}
 
}

class Penguin implements Bird, Swimmingbird {

    public eat(){}
    public run(){}
    public swin(){}
}
