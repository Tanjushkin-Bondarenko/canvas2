window.addEventListener("load", init);

function init() {
    let context = document.querySelector("#canv").getContext("2d");
    for (let i = 0; i < 10; i++){
        context.save();
        context.translate(10, 10 + i * 10);
        context.moveTo(0, 10);
        context.lineTo(210, 10)
        context.restore()
        for (let j = 0; j < 10; j++){
            context.save();
            context.strokeStyle = "grey";
            context.translate(10 + j * 20, 10);
            context.moveTo(15, 0);
            context.lineTo(15, 110)
            context.stroke()
            context.restore()
            
        }
    }

}