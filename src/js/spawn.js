import {Actor, Random, Timer} from "excalibur";
import {KillerClowd, MurderBox, Obstacle} from "./obstacle.js";

export class ObstacleSpawner extends Actor {

    constructor() {
        super();

        this.random = new Random(1337)

    }

    onInitialize(_engine) {
        this.game = _engine

        this.speed = -300

        this.timer = new Timer({
            fcn: () => this.spawn(_engine),
            interval: 1000,
            repeats: true
        })
        _engine.currentScene.add(this.timer)
        this.timer.start()
    }

    spawn(_engine) {

        this.entity = this.random.integer(0, 1)

        if(this.entity === 0) {

            console.log("spawn")
            this.box = new MurderBox(
                this.random.integer(0, 600),
                this.random.integer(-100, 100),
                this.speed
            )
            _engine.currentScene.add(this.box)

        } else {

            console.log("spawn")
            this.cloud = new KillerClowd(
                this.random.integer(0, 800),
                this.random.integer(-100, 100),
                this.speed
            )
            _engine.currentScene.add(this.cloud)

        }

        if(this.speed > -800) {
            this.timer.interval -= 15
            this.speed -= 10
            console.log(this.speed, this.timer.interval)
        } else {
            this.game.gameOver()
        }
    }

    eliminateAllObstacles() {
        this.timer.stop()

        if (this.box) {

            this.box.kill()

        }
    }
}