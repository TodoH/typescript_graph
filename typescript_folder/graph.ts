/// <reference path="d.ts/easeljs/easeljs.d.ts"/>
class ts_graph extends createjs.Container{
    private _shape:createjs.Shape[];
    private _canvas_size_width:number;
    private _canvas_size_height:number;
    private _range_min:number;
    private _range_max:number;
    private _data:number[];
    private _data_length:number;
    private _waku :createjs.Shape =new createjs.Shape();
    constructor() {
        super();
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
    public setData(data : number[] ){
        this._data = data;
        console.log(this._data);
        for(var i = 0 ; i < data.length ; i++)console.log(data[i]);
        // this._data_length = data.length;
        // console.log(this._data_length);
    }
    public setSize(height:number,width:number){
        this._canvas_size_height=height;
        this._canvas_size_width=width;
    }
    public setRange(min:number, max:number){
        this._range_max=max;
        this._range_min=min;
    }
    
    public render(){
        console.log(this._shape.length);
        console.log(this._data.length);

        //データサイズが足りない時の処理
        if(this._shape.length<this._data.length){
            for(var i=this._shape.length;i < this._data.length;i++){
                
                this._shape[i] = new createjs.Shape();
                this.addChild(this._shape[i]);
            }
        }
         
        //データサイズが余る時の処理
        if(this._shape.length>this._data.length){
            for(var i=this._shape.length-1;i >= this._data.length;i--){
                this._shape.pop();
                this.removeChildAt(i);          
            }                        
        }
        
        console.log(this._shape.length);
        console.log(this._data.length);

        for(var i = 0;i < this._data.length ; i++){
            // this._shape[i].x=
            this._shape[i].graphics.clear();
            this._shape[i].graphics.beginFill("#555555").drawRect(
                (this._canvas_size_width/this._data.length)*(i),
                this._canvas_size_height-this._canvas_size_height/10,
                (this._canvas_size_width/this._data.length)/2, 
                -1*(this._canvas_size_height/(this._range_max-this._range_min)*(this._data[i]-this._range_min)));
            console.log(this._shape[i]);
            this._shape[i].x=0;                
                // console.log(this._canvas_size_height-this._canvas_size_height/10);
                // console.log((this._canvas_size_width/this._data_length)/2*(i+1));
                // console.log((this._canvas_size_width/this._data.length)/2);
                // console.log(-1*(this._canvas_size_height/(this._range_max-this._range_min)*(this._data[i]+this._range_min)));
            }
this._waku.graphics.clear();
this._waku.graphics.beginStroke("#555555").drawRect(1,1,this._canvas_size_width-2,this._canvas_size_height-2);
this.addChild(this._waku);
    }    
    // waku
          
};

//drawrectが重複してる
//プロパティの変更がわからん・・・。
//とりあえずクリアしといたろ。