var PreloadState = {
    
    preload: function() {

        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5);

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('backyard', 'assets/backyard.png');
        this.load.image('apple', 'assets/apple.png');
        this.load.image('candy', 'assets/candy.png');
        this.load.image('rotate', 'assets/rotate.png');
        this.load.image('toy', 'assets/rubber_duck.png');
        this.load.image('arrow', 'assets/arrow.png');
        this.load.spritesheet('pet', 'assets/pet.png', 97, 83, 5, 1, 1);
    },
    create: function() {
        this.state.start('HomeState');
    }
};