function getPx(number)
{
        return number.toString() + "px";
}
class plot{
    constructor()
    {
        this.heightNum = 500;
        this.widthNum = 1000;
        this.DIV = "plotDiv";
        document.getElementById(this.DIV).style.width=getPx(this.widthNum);
        document.getElementById(this.DIV).style.height=getPx(this.heightNum);       
    }

    draw(xVals,yVals)
    {
        for(var i = 0; i<xVals.length;i++)
        {
            if(0<xVals[i] && xVals[i]<this.widthNum && 0<yVals[i] && yVals[i]<this.heightNum)
            {   
                var node = document.createElement("span");
                node.id = "dot";
                node.style.left = getPx(xVals[i]);
                node.style.top= getPx(this.heightNum-yVals[i]);
                document.getElementById(this.DIV).appendChild(node);
            }
        }
    }
    
}

const Plot = new plot();

function pl(){
    let xVal = [100,200,300,400,500,600,700,800,1000];
    let yVal = [20,40,60,80,100,120,140,160,180];
    Plot.draw(xVal,yVal);
}