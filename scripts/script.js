const sectionReadme = document.querySelector("#readme");
const sectionProjects = document.querySelector("#projects");
const sectionTechs = document.querySelector("#techs");
const sectionContact = document.querySelector("#contact");

const hideSections = () => {
    sectionReadme.style.display = "none";
    sectionProjects.style.display = "none";
    sectionTechs.style.display = "none";
    sectionContact.style.display = "none"
};

const showReadme = () => {
    hideSections();
    sectionReadme.style.display = "block";
};

const showProjects = () => {
    hideSections();
    sectionProjects.style.display = "grid";
};

const showTechs = () => {
    hideSections();
    sectionTechs.style.display = "flex";
};

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

const showContact = () => {
    hideSections();
    sectionContact.style.display = "grid";
};