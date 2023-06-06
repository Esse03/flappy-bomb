import {Actor, AnimationStrategy, CollisionType, Animation, range, SpriteSheet, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Obstacle extends Actor {

    wingFlap
    basicMotion

    constructor() {
        super({width: 40, height: 80});

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
                spriteWidth: 111,
                spriteHeight: 86
            }
        })

        this.basicMotion = Animation.fromSpriteSheet(this.wingFlap, range(0, 1), 80, AnimationStrategy.Loop)

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

        this.thunderSparks = SpriteSheet.fromImageSource({
            image: Resources.KillerClowd2,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: 90,
                spriteHeight: 69
            }
        })

        this.basicMotion = Animation.fromSpriteSheet(this.thunderSparks, range(0, 1), 120, AnimationStrategy.Loop)

        this.yPos = yPos
        this.yVel = yVel
        this.speed = speed

        this.graphics.add("thunderSpark", this.basicMotion)

        this.graphics.use(this.basicMotion)
    }

    onInitialize(_engine) {

        this.pos = new Vector(800,this.yPos)
        this.vel = new Vector(this.speed, 0)

    }

}