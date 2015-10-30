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
        _super.call(this);
        this._shape = new Array();
    }
    ts_graph.prototype.set_data = function (data) {
        for (var i = 0; i < data.length; i++) {
            this._shape[this._shape.length] = new createjs.Shape();
            this._shape[this._shape.length].graphics.beginFill("#000000").drawRect(100, 100 + (data.length), 0, 0);
        }
    };
    ts_graph.prototype.set_size = function (X, Y) {
        this._canvas_size_X = X;
        this._canvas_size_Y = Y;
    };
    return ts_graph;
})(createjs.Container);
;
// drawRect ( x  y  w  h ) Graphics chainable
// Defined in drawRect:860
// Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
// Parameters:
// x Number
// y Number
// w Number
// Width of the rectangle
// h Number
// Height of the rectangle
// Returns:
// Graphics: The Graphics instance the method is called on (useful for chaining calls.) 
/// <reference path="graph.ts"/>
window.onload = function () {
    var gp = new ts_graph();
};
