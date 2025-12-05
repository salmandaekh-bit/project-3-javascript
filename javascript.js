var name = prompt("Welcome to Salman's Webpage, What is your name?")
console.log(name);
alert("Whats Up " + name + "! Welcome to My Webpage.");



var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {

    links[i].addEventListener("mouseover", function(){
        this.style.color = "red";
    });

    links[i].addEventListener("mouseout", function(){
        this.style.color = "blue";
    });
}

// Used AI to help debug the hover effect