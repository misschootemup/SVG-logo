// const inquirer = import("inquirer")
const inquirer = require("inquirer")
const SVG = require("./lib/svg")
const { Square, Circle, Triangle } = require("./lib/shapes")
const fs = require("fs")

function promptUser() {
    inquirer.prompt([
        {
            name: "words",
            type: "input",
            message: "Enter up three characters for your logo",
            validate: (chars) => chars.legnth <= 3 || "Logo can only contain 3 characters",
        },
        {
            name: "color",
            type: "input",
            message: "Select color of the text",
        },
        {
            name: "shape",
            type: "list",
            choices: ["Square", "Circle", "Triangle"],
            message: "Choose a shape for your logo",
        },
        {
            name: "shapeColor",
            type: "input",
            message: "Select solor of your shape",
        },

    ])
        .then(({ words, color, shape, shapeColor }) => {
            let shapeChosen
            switch (shape) {
                case "Square":
                    shapeChosen = new Square();
                    break;
                case "Circle":
                    shapeChose = new Circle();
                    break;
                case "Triangle":
                    shapeChosen = new Triangle();
                    break;
            }
            shapeChosen.setColor(shapeColor)
            const svg = new SVG()
            svg.setText(words, color)
            svg.setShape(shapeChosen)
            return fs.writeFile("logo.svg", svg.render())
        })
        .then(()=>{
            console.log("generated logo")
        })
        .catch((err)=>{
            console.log("something happened", err)
        })

}
promptUser()