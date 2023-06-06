import {Scene, Timer} from "excalibur"
import {GameOverScene} from "./gameover.js";
import {Background, Sun} from "../background.js";
import {Player} from "../player.js";
import {ObstacleSpawner} from "../spawn.js";

export class Scene1 extends Scene {

    game

    onInitialize(_engine) {

        this.game = _engine
        console.log("the scene has started!")

        const backGround = new Background()
        this.add(backGround)

        const sun = new Sun()
        this.add(sun)

    }

    onActivate(ctx) {

        this.pause = new Timer({
            fcn: () => this.loadGameObjects(this.game),
            interval: 3000,
            repeats: false
        })
        this.game.currentScene.add(this.pause)
        this.pause.start()
    }

    loadGameObjects() {
        this.rokkett = new Player(this)
        this.add(this.rokkett)

        this.spawner = new ObstacleSpawner()
        this.add(this.spawner)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
        this.rokkett.kill()
        this.spawner.eliminateAllObstacles()
    }
}