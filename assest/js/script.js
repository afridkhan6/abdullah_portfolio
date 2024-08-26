let profile = document.getElementById("profile");
let skills = document.getElementById("skills");
let qualification = document.getElementById("qualification");
let projects = document.getElementById("projects");
let profile_div = document.getElementById("profile_div");
let skills_div = document.getElementById("skills_div");
let qualification_div = document.getElementById("qualification_div");
let projects_div = document.getElementById("projects_div");

let buttons = [profile, skills, qualification, projects];
let contents = [profile_div, skills_div, qualification_div, projects_div];

let oldContent = null; // Initialize oldContent

function hideAllContents() {
    contents.forEach((content) => {
        if (!content.classList.contains('hide')) {
            content.classList.remove('slide-up-background');
            content.classList.add('slide-down-background');
            setTimeout(() => {
                content.classList.add('hide');
            }, 700); // Hide after animation
        }
    });
}

function showContent(contentToShow) {
    contentToShow.classList.remove('hide');
    contentToShow.classList.remove('slide-down-background');
    contentToShow.classList.add('slide-up-background');
}

function handleButtonClick(contentToShow) {
    if (oldContent !== contentToShow) {
        hideAllContents();
        setTimeout(() => {
            showContent(contentToShow);
        }, 700); // Delay showing to allow the slide effect
        oldContent = contentToShow;
    }
}

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        handleButtonClick(contents[index]);
        hoverRemove();
        btn.classList.add('hover-frozen');
    });
});

function hoverRemove() {
    buttons.forEach((btn) => {
        btn.classList.remove('hover-frozen');
    });
}

// Initialize sections with default content if needed
profile_div.innerHTML = `
    <h3 class="text-decoration-underline">Profile</h3>
    <p class="fs-5">I am Abdullah Ansari, a third-year BSc IT student with a strong foundation in
        Information Technology and a keen interest in web development.<br> Currently, I am interning at
        Herzsoft, where I have been applying and enhancing my skills in web development for the past two
        months.<br>I am eager to continue growing my technical expertise and contribute effectively to
        innovative projects.</p>
`;

qualification_div.innerHTML = `
    <h3 class="text-decoration-underline">Qualification</h3>
    <p class="fs-5">I have completed a Diploma in Information Technology and am currently in the final year of
        Bachelor of Science in Information Technology (BSc IT). Alongside my studies, I'm gaining
        practical experience as a Web Development Intern at Hertzsoft, where I have been working for the
        past two months. My role involves assisting in the development and maintenance of web
        applications, collaborating with the team to design and implement new features, and working with
        various web technologies like HTML, CSS, and JavaScript.</p>
`;

skills_div.innerHTML = `
    <h3 class="text-decoration-underline">Skills</h3>
    <p class="fs-5">I have a foundational understanding of web development, with proficiency in HTML, CSS, and JavaScript. I am also familiar with Bootstrap, which I use to create responsive and visually appealing layouts. My skills in these technologies allow me to develop user-friendly and functional web pages, and I am continuously working on improving my expertise in this field.</p>
`;

projects_div.innerHTML = `
    <h3 class="text-decoration-underline">Projects</h3>
    <p class="fs-5">As part of my web development projects, I have built several responsive websites and web applications using HTML, CSS, and JavaScript. I created a clone of the Alpine River Hill website, focusing on replicating its design and user experience. Additionally, I developed interactive JavaScript-based projects, including a fully functional cart page with add-to-cart functionality, a dynamic calculator, and a "Guess the Number" game, among others. These projects have strengthened my skills in front-end development and enhanced my understanding of user interface design.</p>
`;
