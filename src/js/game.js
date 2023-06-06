import '../css/style.css'
import {Actor, Engine, Physics, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Scene1} from "./scenes/scene1.js";
import {GameOverScene} from "./scenes/gameover.js";

export class Game extends Engine {

    constructor() {
        super()
        Physics.useRealisticPhysics()
        Physics.gravity = new Vector(0, 800)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        this.add('Scene1', new Scene1())
        this.add('GameOverScene', new GameOverScene())

        this.goToScene('Scene1')
    }

    gameOver() {

            this.goToScene('GameOverScene')

        }

}

new Game()
