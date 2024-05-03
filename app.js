import inquirer from "inquirer";// allow us to get input from users
import qr from "qr-image";//generate a png image 
import fs from  "fs";//create a txt file to save user input using the native fs node module

inquirer
.prompt([//pass your question here
    {
message: "Type in your URL:",
name:"URL",
},
])
.then((answers) => {//use user feedback for____
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt",answers.URL, (err) => {
        if (err) throw err;
        console.log("this file has been saved");//to save the users input
    }); 
   
})
.catch((error) =>{
    if(error.isTtyError){//prompt couldn't be retendert in the current environment

    }else {
//something else went wrong
    }
});