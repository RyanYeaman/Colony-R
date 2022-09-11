//functionality for the model preveiws 
const modelContainer = document.getElementsByClassName("model-image");
const inquiryButton = document.getElementsByClassName("inquiry-button");

for (const container of modelContainer) {
    container.addEventListener("mouseover", () => {
        const button = container.children[0];
        button.classList.add("inquire-active");
    });

    container.addEventListener("mouseout", () => {
        const button = container.children[0];
        button.classList.remove("inquire-active");
    });
};

// functionailty for the the inquiry box 

const inquiryBox = document.querySelector("#inquire-box");
const exitButton = document.querySelector("#inquiry-exit-button");
const inquiryLink = document.querySelectorAll(".inquiry-button");

for (const link of inquiryLink) {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        inquiryBox.classList.add("inquire-box-enabled");
    });
};

if (exitButton) {
    exitButton.addEventListener("click", () => {
        inquiryBox.classList.remove("inquire-box-enabled");
    });
};

//submit data to the backend for nodemailer

const resultForm = document.getElementById("result-form");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const resultButtom = document.getElementById("result-button");
const formInfo = document.querySelector(".contact-form");

let fullName = document.getElementById("name");
let email = document.getElementById("email");
let selectedModel = document.getElementById("model-list");

resultButtom.addEventListener("click", () => {
    resultForm.classList.add("hide");
    inquiryBox.classList.remove("inquire-box-enabled");
    document.getElementById("form-data").style.opacity = 1;
});

formInfo.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = {
        fullName: fullName.value,
        email: email.value,
        model: selectedModel.value
    };

    let response = await fetch("/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            return data
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    fullName.value = "";
    email.value = "";
    selectedModel.value = 0;

    document.getElementById("form-data").style.opacity = 0;
    resultForm.classList.remove("hide");

    resultTitle.innerHTML = response?.success ? "success!" : "Error";
    resultMessage.innerHTML = response?.success
        ? `Thank you for your interest in ${response.data.model}, ${response.data.fullName}. Please check <strong>${response?.data?.email?.toLowerCase()}</strong> for an email from us!`
        : "We had an issue submitting your form. Please try again later";
});

const homeButton = document.getElementById("home-nav-button");
const aboutButton = document.getElementById("about-nav-button");
const modelsButton = document.querySelectorAll(".models-button");
const mediaQuery = window.matchMedia('(max-width: 495px)');


const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const scrolled = window.scrollY;

console.log(scrollable, scrolled)

if(homeButton) {
    homeButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
};

if(aboutButton) {
    aboutButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 556,
            left: 0,
            behavior: "smooth"
        });
    });
    
};

for(button of modelsButton) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 1157,
            left: 0,
            behavior: "smooth"
        });
    });
    
};

if(mediaQuery.matches) {
    for(button of modelsButton) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 1443,
                left: 0,
                behavior: "smooth"
            });
        });
    
    };
}

const openContact = document.getElementById("contact-nav-button");
const closeContact = document.querySelector(".fa-xmark");
const contactInfo = document.getElementById("contact-box");

if(openContact) {
    openContact.addEventListener("click", (e) => {
        e.preventDefault();

        contactInfo.classList.toggle("contact-info-hidden");
        contactInfo.classList.toggle ("contact-info-active");
    });
};
 
if(closeContact) {
    closeContact.addEventListener("click", () => {
        contactInfo.classList.add("contact-info-hidden");
        contactInfo.classList.remove("contact-info-active");
    });
};

//mobile navbar functions.
const menuToggler = document.querySelector("#mobile-menu");
const menu = document.querySelector(".navbar-list-items");
const navbarLinks = document.querySelectorAll(".links");

menuToggler.addEventListener("click", () => {
    menu.classList.toggle("navbar-list-items-active");
    menuToggler.classList.toggle("is-active");
});

for(let link of navbarLinks) {
    link.addEventListener("click", () => {
        menu.classList.remove("navbar-list-items-active");
    })
}




