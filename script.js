//SGN your JS code here. If required.
document.getElementById("btn").onclick = function() { myFunction(); };

function myFunction() {
    let input = document.getElementById("ip").value;
    let output = document.getElementById("output");

    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parseInt(input));
        }, 2000);
    }); 

    promise1.then((data1) => {
        output.textContent = `Result: ${data1}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(data1); }, 2000);
        });
    }).then((data2) => {
        output.textContent = `Result: ${data2 * 2}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(data2 * 2); }, 1000);
        }); 
        
    }).then((data3) => {
        output.textContent = `Result: ${data3 - 3}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(data3 - 3); }, 1000);
        });
    }).then((data4) => {
        output.textContent = `Result: ${data4 / 2}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(data4 / 2); }, 1000);
        });
    }).then((data5) => {
        output.textContent = `Result: ${data5 + 10}`;
        return new Promise((resolve, reject) => {
            resolve(data5 + 10);
        });
    }).then((data6) => {
        output.textContent = `Final Result: ${data6}`;
    });
}