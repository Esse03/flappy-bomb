import {Scene, Input, Timer, Color} from "excalibur"
import {FailGame, GameOver} from "../background.js";
import {ResourceLoader} from "../resources.js";

//wijzig

export class GameOverScene extends Scene {

    game

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        console.log("the scene has started!")

        const gameover = new FailGame()
        this.add(gameover)
    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta);

        this.keys = _engine.input.keyboard

        if (this.keys.wasPressed(Input.Keys.Enter)) {

            console.log('oi')
            _engine.goToScene('Scene1')

        }
    }
}