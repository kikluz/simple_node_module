

var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y)=> (x*y)
};

// function takes two parameters length and berth of the rectangle
function solveRect(l,b){
    console.log("Solving for rectangle with  l =  " + l + " and b = " + b);

    if(l <= 0 || b <= 0){
         console.log("Rectangle dimension should be greater than zero: l = " + l + ", and b: = " + b)
    }else {
        console.log("The area of the rectangle is " + rect.area(l,b))
        console.log("the perimeter of the rectangle is " + rect.perimeter(l, b))
    }
}

solveRect(2,4)
solveRect(3,5)
solveRect(0,5)
solveRect(-3,4)