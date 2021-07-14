const heightNum = 500;
const widthNum = 1000;
const DIV = "plotDiv";
document.getElementById(DIV).style.width=getPx(widthNum);
document.getElementById(DIV).style.height=getPx(heightNum);

let xVals = [100,200,300,400,500,600,700,800,1000];
let yVals = [20,40,60,80,100,120,140,160,180];

function plot()
{
    for(var i = 0; i<xVals.length;i++)
    {
        if(0<xVals[i] && xVals[i]<widthNum && 0<yVals[i] && yVals[i]<heightNum)
        {   
            var node = document.createElement("span");
            node.id = "dot";
            node.style.left = getPx(xVals[i]);
            node.style.top= getPx(heightNum-yVals[i]);
            document.getElementById(DIV).appendChild(node);
        }
        
    }
    console.log("Testing");
}


function getPx(number)
{
    return number.toString() + "px";
}