

var wardens = [

    [3, 1, 2, 3, 3], //1
    [3, 2, 3, 1, 3], //2
    [4, 2, 3, 4, 5] //3

];

let newArray = [];
let tempArr = [];

//console.log(wardens);



for (let key in wardens) {

    for (let i = 0; i < wardens.length - 1; i++) {
        //console.log(i);

        for (let j = 0; j < wardens[0].length; j++) {
            //console.log(i);

            if (i <= wardens.length) {

                if (wardens[i][j] === wardens[i + 1][j]) {

                    //console.log(wardens[i][j] + " " + wardens[i + 1][j]);

                    tempArr.push(i + 2);

                    //newArray.push(tempArr);



                } else {
                    //tempArr.push(-1);

                    //newArray.push(tempArr);

                    //console.log(wardens[i][j] + " " + wardens[i + 1][j]);
                }
            }



        }
        console.log(tempArr);

    }
}