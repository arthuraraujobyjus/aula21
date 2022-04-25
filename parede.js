class Parede {
    constructor(posX, posY, lar, alt){
        var config = {
            isStatic: true
        }
        this.corpo = Bodies.rectangle(posX, posY, lar, alt, config);
        this.l = lar;
        this.a = alt;
        World.add(world, this.corpo);
    }

    mostrar(){
        var pos = this.corpo.position;

        push();
        stroke("green");
        fill("red");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.l, this.a)
        pop();

    }
}