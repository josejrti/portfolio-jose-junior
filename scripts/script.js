const form = document.querySelector("#contact-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const response = await fetch(
        "https://formspree.io/f/xeaoeayr",
        {
            method: "POST",
            body: new FormData(form),
            headers: {
                Accept: "application/json"
            }
        }
    );
    if (response.ok) {
        alert("Mensagem enviada!");
        form.reset();
    } else {
        alert("Erro ao enviar mensagem.");
    }
});