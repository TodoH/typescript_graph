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
class ts_graph extends createjs.Container{
    // private stage:createjs.Stage;
    private _obj:createjs.Shape;
    private _shape:createjs.Shape[]= new Array();
    private _canvas_size_X:number;
    private _canvas_size_Y:number;
    
    constructor() {
        super();
    }
    public set_data(data:number[]):void{
        for(var i = 0 ;i < data.length ; i++){
            this._shape[this._shape.length]=new createjs.Shape();
            this._shape[this._shape.length].graphics.beginFill("#000000").drawRect(100,100+(data.length), 0, 0);
        }
    }
    public set_size(X:number, Y:number):void{
        this._canvas_size_X=X;
        this._canvas_size_Y=Y;            
   }
   


//    private handleTick(event:createjs.Event):void {
//         this.obj.x += 5;
//         if (this.obj.x > this.stage.canvas['width']) this.obj.x = 0;
//         this.stage.update();
//         console.log("あほ");
//     }
};


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