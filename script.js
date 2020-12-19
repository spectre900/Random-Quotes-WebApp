const url = 'https://api.quotable.io/random';

function getNewQuote(){
   fetch(url)
    .then(function(data) {
         return data.json();
    })
    .then(function(data){    
        document.getElementById('quote-text').innerHTML = data.content;
        document.getElementById('quote-author').innerHTML = ` - ${data.author}`;
    })
    .catch(function(err) {
        console.log(err); 
    });
 }