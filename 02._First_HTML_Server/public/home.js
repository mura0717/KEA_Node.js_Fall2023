  // asignment: personalize the message
  fetch('/welcomeMessage?user=Kaan')
.then((response) => response.json())
.then((result) => {
    const welcomeMessageHeader = document.getElementById("welcomeMessage");
    welcomeMessageHeader.innerText = result.data; //prints on the page.
    //console.log(result.data); //logs into console in browser
});

  /*         setTimeout(() => {
            console.log("hello");
        }, 1000); */