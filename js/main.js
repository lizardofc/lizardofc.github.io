const type = document.querySelector('.type');

function setWebDeveloper(){
    type.innerHTML = "Web Developer";
    setTimeout(setFreelancer, 2000);
}

function setFreelancer(){
    type.innerHTML = "Freelancer";
    setTimeout(setDesigner, 2000);
}

function setDesigner(){
    type.innerHTML = "UI/UX Designer";
    setTimeout(setWebDeveloper, 2000);
}

setWebDeveloper();