var qoute = [
    {
        qoute: "So many books, so little time.",
        Auther: "--Frank Zappa"
    },

    {
        qoute: "'Be yourself; everyone else is already taken.'",
        Auther: "--Oscar Wilde"
    },
    {
        qoute: "'If you tell the truth, you don't have to remember anything.'",
        Auther: "--Mark Twain"
    },
    {
        qoute: "'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
        Auther: "--Albert Einstein"
    },
    {
        qoute: "'It is our choices, Harry, that show what we truly are, far more than our abilities.'",
        Auther: "--J.K. Rowling, Harry Potter and the Chamber of Secrets"
    }
]
function qoutes() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)

    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}

