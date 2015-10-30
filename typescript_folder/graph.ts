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
    stage:createjs.Stage;
    obj:createjs.Shape;
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

    handleTick = (event:createjs.Event):void => {
        this.obj.x += 5;
        if (this.obj.x > this.stage.canvas['width']) this.obj.x = 0;
        this.stage.update();
        console.log("あほ");
    }
};
