import {Actor, AnimationStrategy, CollisionType, Animation, range, SpriteSheet, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Obstacle extends Actor {

    wingFlap
    basicMotion

    constructor() {
        super({width: 30, height: 60});

        this.body.collisionType = CollisionType.Active
        this.body.useGravity = false
    }

}

export class MurderBox extends Obstacle {

    constructor(yPos, yVel, speed) {
        super();

        this.wingFlap = SpriteSheet.fromImageSource({
            image: Resources.MurderBox2,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: 223,
                spriteHeight: 86
            }
        })

        this.basicMotion = Animation.fromSpriteSheet(this.wingFlap, range(0, 2), 80, AnimationStrategy.Loop)

        this.yPos = yPos
        this.yVel = yVel
        this.speed = speed

        this.graphics.add("wingFlap", this.basicMotion)

        this.graphics.use(this.basicMotion)

    }

    onInitialize(_engine) {

        this.pos = new Vector(800,this.yPos)
        this.vel = new Vector(this.speed,this.yVel)

    }

}

export class KillerClowd extends Obstacle {

    constructor(yPos, yVel, speed) {
        super();

        this.yPos = yPos
        this.yVel = yVel
        this.speed = speed
    }

    onInitialize(_engine) {

        this.graphics.use(Resources.KillerClowd.toSprite())
        this.pos = new Vector(800,this.yPos)
        this.vel = new Vector(this.speed, 0)

    }

}