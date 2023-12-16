class SVG{
    constructor(){
        this.textEl=""
        this.shapeEl=""
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
    setText (color, words){
        this.textEl= `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${words}</text>`;
    }
    setShape(shape){
        this.shapeEl=shape.render()
    }
}
module.exports=SVG