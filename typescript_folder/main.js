var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="d.ts/easeljs/easeljs.d.ts"/>
var ts_graph = (function (_super) {
    __extends(ts_graph, _super);
    function ts_graph() {
        _super.call(this);
        this._shape = new Array();
        this._data = new Array();
        this._canvas_size_height = 400;
        this._canvas_size_width = 600;
        this._range_min = 0;
        this._range_max = 100;
        // this._data_length=0;
        // var shape1:createjs.Shape= new createjs.Shape();
        // shape1.graphics.beginFill("#666666").drawRect(100,100,100,100);
        // this.addChild(shape1);
    }
    ts_graph.prototype.setData = function (data) {
        this._data = data;
        console.log(this._data);
        for (var i = 0; i < data.length; i++)
            console.log(data[i]);
        // this._data_length = data.length;
        // console.log(this._data_length);
    };
    ts_graph.prototype.setSize = function (height, width) {
        this._canvas_size_height = height;
        this._canvas_size_width = width;
    };
    ts_graph.prototype.setRange = function (min, max) {
        this._range_max = max;
        this._range_min = min;
    };
    ts_graph.prototype.render = function () {
        console.log(this._shape.length);
        console.log(this._data.length);
        //データサイズが足りない時の処理
        if (this._shape.length < this._data.length) {
            for (var i = this._shape.length; i < this._data.length; i++) {
                this._shape[i] = new createjs.Shape();
                this.addChild(this._shape[i]);
            }
        }
        //データサイズが余る時の処理
        if (this._shape.length > this._data.length) {
            for (var i = this._shape.length - 1; i >= this._data.length; i--) {
                this._shape.pop();
                this.removeChildAt(i);
            }
        }
        console.log(this._shape.length);
        console.log(this._data.length);
        for (var i = 0; i < this._data.length; i++) {
            // this._shape[i].x=
            this._shape[i].graphics.clear();
            this._shape[i].graphics.beginFill("#555555").drawRect((this._canvas_size_width / this._data.length) * (i), this._canvas_size_height - this._canvas_size_height / 10, (this._canvas_size_width / this._data.length) / 2, -1 * (this._canvas_size_height / (this._range_max - this._range_min) * (this._data[i] - this._range_min)));
            console.log(this._shape[i]);
            this._shape[i].x = 0;
        }
    };
    return ts_graph;
})(createjs.Container);
;
//drawrectが重複してる
//プロパティの変更がわからん・・・。
//とりあえずクリアしといたろ。 
/// <reference path="graph.ts"/>
window.onload = function () {
    var stage = new createjs.Stage("canvas");
    var data = [10, 20, 30, 20, 10];
    var g = new ts_graph();
    stage.addChild(g);
    g.setData(data); //データをセット
    g.setRange(0, 50); //グラフの範囲をセット（0 ~ 50）
    g.setSize(stage.canvas["height"], stage.canvas["width"]); //グラフの描画範囲をセット(width, height)
    g.render(); //グラフのレンダリング
    stage.update();
    g.setData([10, 20, 30, 40, 50, 60]);
    g.setSize(300, 400);
    g.render();
    stage.update();
    g.setData([10, 20, 60]);
    g.setSize(600, 700);
    g.render();
    stage.update();
};
