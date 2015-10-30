var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="d.ts/easeljs/easeljs.d.ts"/>
// class {
// 	public set_data(data){
// 		// if(typeof (data[0])=="number"){
// 			alert("setdata");
// 			document.write(data[3]);
// 			return 0;
// 		// }
// 		// else{
// 			alert("dame");
// 			return 0;
// 		// }
// 	}
// }
var ts_graph = (function (_super) {
    __extends(ts_graph, _super);
    function ts_graph() {
        var _this = this;
        _super.apply(this, arguments);
        // constructor() {
        //     this.stage = new createjs.Stage('canvas');
        //     this.obj = new createjs.Shape();
        //     this.obj.graphics.beginFill('#ff9999').drawCircle(0,0,50);
        //     this.obj.x = 100;
        //     this.obj.y = 100;
        //     this.stage.addChild(this.obj);
        //     createjs.Ticker.framerate = 30;
        //     createjs.Ticker.addEventListener('tick', this.handleTick);
        // }
        this.handleTick = function (event) {
            _this.obj.x += 5;
            if (_this.obj.x > _this.stage.canvas['width'])
                _this.obj.x = 0;
            _this.stage.update();
            console.log("あほ");
        };
    }
    return ts_graph;
})(createjs.Container);
;
/// <reference path="graph.ts"/>
window.onload = function () {
    var gp = new ts_graph();
};
