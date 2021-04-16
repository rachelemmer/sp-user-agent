const userAgent = window.navigator.userAgent

window.addEventListener('load', () => {
    fetch("https://lovk1ey77g.execute-api.us-west-1.amazonaws.com/testing/", {
        method: 'POST',
        body: JSON.stringify({"user_agent": userAgent}),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => response.json())
    .then(userAgentResponse => JSON.parse(userAgentResponse))
    .then(userAgentResponse => displayUserAgent(userAgentResponse))
    .catch((error) => {
        console.error('Error:', error);
    })

    function displayUserAgent(userAgentResponse) {
        console.log(userAgentResponse)
        const h2 = document.querySelector(".display-user-agent")
        h2.innerText= "You are using " + userAgentResponse["Browser Type"] + " " + userAgentResponse["Browser Version"] + " on " + userAgentResponse["OS Type"] + " " + userAgentResponse["OS Version"]
    }
})
