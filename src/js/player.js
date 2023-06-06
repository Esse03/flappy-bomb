import {Actor, Input, Vector, CollisionType, SpriteSheet, Animation, range, AnimationStrategy} from "excalibur";
import {Resources} from "./resources.js";
import {Obstacle} from "./obstacle.js";

export class Player extends Actor {

    yvel
    ypos

    constructor(scene1) {
        super({width: Resources.Rokkett.width, height: Resources.Rokkett.height});
        this.scene = scene1
        this.body.collisionType = CollisionType.Active

        this.graphics.use(Resources.Rokkett.toSprite())
    }

    onInitialize(_engine) {
        this.game = _engine
        super.onInitialize(_engine);

        this.yvel = 0
        this.ypos = 100

        this.booster = new Booster()
        this.addChild(this.booster)

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

    speed

    constructor() {
        super();

        this.body.collisionType = CollisionType.Passive

        this.booster = SpriteSheet.fromImageSource({
            image: Resources.RegularBoost,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: 91,
                spriteHeight: 63
            }
        })

        this.basicMotion = Animation.fromSpriteSheet(this.booster, range(0, 1), 120, AnimationStrategy.Loop)

        this.graphics.add("booster", this.basicMotion)

        this.graphics.use(this.basicMotion)
        this.scale = new Vector(0.6, 0.6)
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.pos = new Vector(-60, 0)

    }

}

