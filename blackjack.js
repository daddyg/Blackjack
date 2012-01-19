var http = require('http');

var cards = [];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  cards.push(getCard());
  cards.push(getCard());
  
  res.write(cards[0].desc + ", " + cards[1].desc);
  
  res.end('\nWith a total of '+getTotal(cards)+' would you like to Twist or Stick\n');
  
}).listen(1337, "127.0.0.1");

var suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
function getCard()
{
	var card = {};
    card.number = Math.floor(Math.random()*13)+1;
    card.suit = suits[Math.floor(Math.random()*4)];
	
	if(card.number <11)
		card.desc = card.number + " of " + card.suit;
		
    switch (card.number)
    {
        case 11:
            card.desc = "Jack of " + card.suit;
            
        case 12:
            card.desc = "Queen of " + card.suit;
            
        case 13:
            card.desc = "King of " + card.suit;
    }
    
    return card;
}

function getTotal(cards)
{
	var count = 0;
	for(var i=0;i<cards.length;i++)
	{
		if(cards[i].number < 11)
			count += cards[i].number;
		else
			count += 10;
	}
	
	return count;
}