function myFunction(){
	alert("This code is inside the function");
	//loops, if statement, anything!
}
//sometime later
myFunction(); //we call it. i can use the name of the function followed by the empty parentheses and a semicolon
//This causes the function body to be called and all the code inside it so executed

//WHERE TO DECLARE FUNCTIONS

function myFunction() {
	//lots of code
	myOtherFunction();
}

function myotherFunction() {
	//lots of code
}

myFunction();