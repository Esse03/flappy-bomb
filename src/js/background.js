import { Actor, Vector, GraphicsGroup } from 'excalibur'
import { Resources } from './resources.js'

//wijzig

export class Background extends Actor {

    offset

    onInitialize(engine){

        const spaceImage = Resources.Background.toSprite()
        this.offset = spaceImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: spaceImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: spaceImage,
                    pos: new Vector(spaceImage.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)
        this.pos = new Vector(0, 0)
        this.vel = new Vector(-110, 0)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}

export class Sun extends Actor {

    onInitialize(engine) {
        super.onInitialize(engine);

        this.graphics.use(Resources.Sun.toSprite())
        this.pos = new Vector(600, 100)
    }

}

export class GameOver extends Actor {

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.pos = new Vector(_engine.drawWidth/2,_engine.drawHeight/2)
    }

}

export class FailGame extends GameOver {

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.graphics.use(Resources.GameOver.toSprite())
    }

}

export class WinGame extends GameOver {

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.graphics.use(Resources.Victory.toSprite())
    }

}