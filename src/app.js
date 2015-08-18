var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var role = new cc.Sprite(res.role_jpg);
        this.addChild(role);
        role.setPosition(size.width / 2, size.height / 2);
        role.setScale(0.5);

        role.setPositionX(100);
        //role.runAction(new cc.MoveTo(2, cc.p(size.width - 100, size.height / 2)));
        //role.runAction(new cc.moveBy(2, cc.p(500, 0)));

        var move1 = new cc.MoveTo(2, cc.p(size.width - 100, size.height / 2));
        var move2 = new cc.moveBy(2, cc.p(-500, 0));
        role.runAction(new cc.Sequence(move1, move2));

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

