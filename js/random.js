var quotes = [
'Don\'t cry because it\'s over. Smile because it happened. -Dr. Seuss',
'Believe you can and you\'re halfway there. -Theodore Roosevelt',
'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it. -Steve Jobs',
'Faith is believing what you know ain\'t so. - Mark Twain',
'When a person tells you that you hurt them, you don\'t get to decide that you didn\'t. -Louis C.K.',
'I think the saddest people always try their hardest to make people happy because they know what it\'s like to feel absolutely worthless and they don\'t want anyone else to feel like that. - Robin Williams',
'We ask 18-year-olds to make huge decisions about their career and financial future, when a month ago they had to ask to go to the bathroom. -Adam Kotsko',
'Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That\'s relativity. - Albert Einstein'
];



function getRandomQuote(){
	var choice = quotes[Math.floor((Math.random()*(quotes.length-1))+1)];
	document.querySelector("#quoteText").innerHTML = choice
	updateBacgroundColor()
	updateTwitterButton(choice)
}



function updateBacgroundColor(){
	var hue = Math.floor(Math.random() * 360);
	var pastel = 'hsl(' + hue + ', 100%, 87.5%)';
	document.querySelector('#bodyBackground').style = "background-color:" + pastel
}

function updateTwitterButton(quote){
	var baseURL = 'https://twitter.com/intent/tweet?text='
	baseURL += quote
	document.querySelector('#twitterURL').setAttribute('href',baseURL)
}

//console.log(getRandomQuote(quotes))

document.querySelector("#getNewQuote").addEventListener('click',getRandomQuote)
