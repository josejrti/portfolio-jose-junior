const form = document.querySelector("#contact-form");
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#responsive-menu");
const menuLinks = menu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

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


