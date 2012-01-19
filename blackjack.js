var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  res.write(getCard() + ", " + getCard());
  
  res.end('\nWould you like to Twist or Stick\n');
  
}).listen(1337, "127.0.0.1");

var suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
function getCard()
{
    var card=Math.floor(Math.random()*13)+1;
    var suit=suits[Math.floor(Math.random()*4)];
	
	if(card <11)
		return card + " of " + suit;
    switch (card)
    {
        case 11:
            return "Jack of " + suit;
            
        case 12:
            return "Queen of " + suit;
            
        case 13:
            return "King of " + suit;
    }
    
    return "Unknown card";
}