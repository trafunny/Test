
// var heading1 = document.querySelector('.heading')
// heading1.classList.add('red')

// setInterval(()=>{
//     heading1.classList.remove('red')

// },1000)
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, (valueFromA) => {
    hell(valueFromA + 1, (valueFromB) => {
        hell(valueFromB + 1, (valueFromC) => {
            // hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromA );
                console.log(valueFromB );
                console.log(valueFromC );


            // });
        });
    });
});
     