import {Label, ScreenElement, Font, FontUnit, Color, Vector} from 'excalibur'

//wijzig

export class UI extends ScreenElement {

    constructor() {
        super();
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.info = new Label({
            text: 'Press/Hold Space to fly',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black
            }),
            pos: new Vector(500, 500)
        })
        this.addChild(this.info)
    }

}