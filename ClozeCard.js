var inquirer = require("inquirer");




var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = text;
	this.fullText = cloze + " " + text;


};

var cloze = new ClozeCard("was the president of the United States", "George Washington");


if (cloze) {
	console.log("FRONT:" + " " + "___" + cloze.text);

	inquirer.prompt([{ 
	  type: 'confirm',
      name: 'confirm',
      message: 'Do You Want to flip Card?'
      
    }]).then(function(answers) {
    	
    if (answers.confirm === true) {
    	console.log("BACK:" + " " + cloze.cloze);

    	console.log(cloze.fullText);

    }

    else {
    	console.log("I guess you know it all?");
    }
});
}


