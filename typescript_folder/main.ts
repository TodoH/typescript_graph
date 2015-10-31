/// <reference path="graph.ts"/>
window.onload = function () {
    var stage = new createjs.Stage("canvas");
    var data:Array<number> = [10, 20, 30, 20, 10];
    var g:ts_graph = new ts_graph();
    stage.addChild(g);
    g.setData(data); //データをセット
    g.setRange(0, 50); //グラフの範囲をセット（0 ~ 50）
    g.setSize(stage.canvas["height"], stage.canvas["width"]); //グラフの描画範囲をセット(width, height)
    g.render(); //グラフのレンダリング
    stage.update();

    g.setData([10,20,30,40,50,60]);
    g.setSize(300,400);
    g.render();
    stage.update();
    
    g.setData([10, 20, 60]);
    g.setSize(600, 700);
    g.render();
    
    stage.update();


};