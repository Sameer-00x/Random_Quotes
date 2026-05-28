const api_url = "https://motivational-spark-api.vercel.app/api/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;

}


getquote(api_url);

