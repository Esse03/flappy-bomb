import {Actor, Input, Vector, CollisionType} from "excalibur";
import {Resources} from "./resources.js";
import {Obstacle} from "./obstacle.js";

export class Player extends Actor {

    yvel
    ypos

    constructor(scene1) {
        super({width: Resources.Rokkett.width, height: Resources.Rokkett.height});
        this.scene = scene1
        this.body.collisionType = CollisionType.Active
    }

    onInitialize(_engine) {
        this.game = _engine
        super.onInitialize(_engine);

        this.yvel = 0
        this.ypos = 100

        this.graphics.use(Resources.Rokkett.toSprite())
        this.pos = new Vector(200, 100)
        this.on("collisionstart", (evt) => this.onCollisionStart(evt))
    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta);

        let keys = _engine.input.keyboard

        if (keys.isHeld(Input.Keys.Space)) {

            this.yvel = -600
            this.rotation = 0

        } else {

            this.yvel = 600
            this.rotation = 1
        }

        this.vel = new Vector(0, this.yvel)
    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);

        this.on("exitviewport", (event) => {
            this.kill()

                if(this.isKilled()) {

                    this.game.goToScene('GameOverScene')

                }

        })

    }

    onCollisionStart(event) {
        if(event.other instanceof Obstacle)
            this.kill()
            this.game.gameOver()
        }

}

export class Booster extends Actor {

    constructor() {
        super();

        this.body.collisionType = CollisionType.Passive
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.graphics.use(Resources.RegularBoost.toSprite())
    }

}

