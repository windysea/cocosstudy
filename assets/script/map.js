cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        title:{
            default:null,
            type:cc.Label
        },
        map:{
            default:null,
            type:cc.TiledMap
        }
    },

    // use this for initialization
    onLoad: function () {
        var objectLayer = this.map.getObjectGroup("o");
        var array = objectLayer.getObjects();
        cc.log("this is:"+objectLayer.getObject("b").name);
        this.title.string =objectLayer.getObject("b").name;

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
