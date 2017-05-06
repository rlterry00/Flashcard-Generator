var ClozeCard = require("./ClozeCard.js");

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

module.exports = BasicCard;

var basicCard = new BasicCard("Who was the first president of the United States?", "George Washington");

console.log("FRONT:" + " " + basicCard.front);

console.log("BACK:" + " " + basicCard.back);

