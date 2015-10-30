/// <reference path="d.ts/easeljs/easeljs.d.ts"/>
class ts_graph extends createjs.Container{
    private _shape:createjs.Shape[];
    private _canvas_size_width:number;
    private _canvas_size_height:number;
    private _range_min:number;
    private _range_max:number;
    private _data:number[];
    private _data_length:number;
    constructor() {
        super();
        this._shape = new Array();
        this._data = new Array();
        this._canvas_size_height = 400;
        this._canvas_size_width = 600;
        this._range_min = 0;
        this._range_max = 100;
        // var shape1:createjs.Shape= new createjs.Shape();
        // shape1.graphics.beginFill("#666666").drawRect(100,100,100,100);
        // this.addChild(shape1);
    }
    public setData(data:number[]):void{
        this._data=data;
        for(var i=0;i<data.length;i++)console.log(data[i]);
        this._data_length=data.length;
        console.log(this._data_length);
    }
    public setSize(height:number,width:number):void{
        this._canvas_size_height=height;
        this._canvas_size_width=width;
    }
    public setRange(min:number, max:number){
        this._range_max=max;
        this._range_min=min;
    }
    public render(){
        for(var i = 0 ;i < this._data_length ; i++){
            this._shape[i]=new createjs.Shape();
            this._shape[i].graphics.beginFill("#555555").drawRect(
                this._canvas_size_height-this._canvas_size_height/10,//画面下10%マージン
                (this._canvas_size_width/this._data_length)/2*(i+1),//グラフを中心からずらす
                (this._canvas_size_width/this._data.length)/2,//グラフの横幅,画面の50%を占める 
                -1*(this._canvas_size_height/(this._range_max-this._range_min)*(this._data[i]-this._range_min)));//グラフの長さ
            this.addChild(this._shape[i]);
            }
        }
};