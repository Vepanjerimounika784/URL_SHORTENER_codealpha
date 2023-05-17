let btn = document.getElementById("shorten");

btn.addEventListener('click', short);
//async allows us to write promises-based code.async functions always return a value.
//await function is used to wait for the promise.it is used with in async only.

async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
}

