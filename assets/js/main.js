let quote=document.querySelector(" .text")
let author=document.querySelector(" .sm-text")
let api_url = "https://api.quotable.io/random";
let snd_btn=document.querySelector(".sound")
let cpy_btn=document.querySelector(".copy")

async function getQuote(url) {
    let response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
};

getQuote(api_url);
function share(){
    window.open(href="https://twitter.com/intent/tweet?text="+ quote.innerHTML,
    "Twitter Window","width=600,height=600" )
}

snd_btn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${quote.innerHTML} by ${author.innerHTML} `);
    speechSynthesis.speak(utterance);
});

cpy_btn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quote.innerHTML);
    alert("copied Successfully")
});
