// add them user name to the text
fetch("/welcomeMessage?user=Michael")
    .then((response) => response.json())
    .then((result) => {
        const welcomeMessageHeader = document.getElementById("welcomeMessage")
        welcomeMessageHeader.innerText = result.data;
    });    