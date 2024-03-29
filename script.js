

const inputField = document.getElementById("email");
const submitButton = document.getElementById("submit");
const infoSelector = document.getElementById("info");


submitButton.addEventListener("click",  (event) =>  {
    event.preventDefault();
    const email = inputField.value
    fetch("https://bloggerserverv2-production.up.railway.app/auth/deleteData",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: email})
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            infoSelector.textContent = res.msg
        })
        .catch((err) => {
            console.log("Error: ", err)
            infoSelector.textContent = "Failed to delete your data"
        })
})