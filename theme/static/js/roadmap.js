function updateCanvas(canvasJq, versions) {
    var canvasEl = canvasJq[0];
    canvasEl.width=canvasJq.width();
    canvasEl.height=canvasJq.height();
    var cOffset = canvasJq.offset();
    var ctx = canvasEl.getContext("2d");
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.beginPath();
    var previous_version;
    
    $(versions).each(function(){
            
            var rand =  Math.floor(Math.random()*181) + 20;
            $(this).css({"margin" : ""+ rand +"px 30px 30px 30px"});
            
            if(previous_version) {
                var version = $(this);
                var srcOffset = version.offset();
                var srcMidHeight = version.height()/2;
                var srcMidWidth = version.width()/2;
                
                var target = previous_version;
                var trgOffset=target.offset();
                var trgMidHeight=target.height()/2;
                var trgMidWidth=target.width()/2;
                
                ctx.moveTo(srcOffset.left + srcMidWidth, srcOffset.top + srcMidHeight);
                ctx.lineTo(trgOffset.left  + trgMidWidth, trgOffset.top + trgMidHeight);	
            }
            
            previous_version = $(this);	
                
    });
    
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = "4";
    ctx.stroke();
    ctx.closePath();
}

$(document).ready(function(){ updateCanvas($("#canvas"), $(".version")); });

