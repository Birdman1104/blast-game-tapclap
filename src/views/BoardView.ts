import { Container, Sprite, Text } from 'pixi.js';

export class BoardView extends Container {
    constructor() {
        super();
        this.build();
    }

    private build(): void {
        const img = Sprite.from('counter-bkg.png');

        img.anchor.set(0.5, 0.5);
        img.position.set(11, 4);
        img.scale.set(1, 1.2);
        img.alpha = 0.8;
        img.tint = 0x00aa00;
        img.angle = 11;

        img.eventMode = 'static';
        img.on('pointerdown', () => {
            console.log('click on img');
            this.emit('imageClick');
        });

        this.addChild(img);

        ///////
        const text = new Text('TEST APP', {
            fill: 0xff0000,
            fontSize: 32,
            fontWeight: '900',
        });

        text.anchor.set(0.5, 0.5);
        text.position.copyFrom(img);

        this.addChild(text);
    }
}
