//SGN your JS code here. If required.
document.getElementById("btn").onclick = function() {myFunction()};

function myFunction() {
 let input = document.getElementById("ip").value;
	let output = document.getElementById("output");

	let promise1= new Promise((resolve, reject) => { 
		resolve(output.innerHTML = 'Result: ${input}');
		return promise2;
        
		},2000).then((data1) =>{
		resolve(output.innerHTML = 'Result: {data1 * 2}');
		},)
												   
												   											   
	}