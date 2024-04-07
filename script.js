function getHeader() {
    document.write('<meta charset="utf-8">');
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
    document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">');
    document.write('<link href="./styles.css" rel="stylesheet">');

}

function getNavbar() {
    document.write('<nav class="navbar navbar-expand-lg navbar-light bg-warning">');
    document.write('<div class="container">');
    document.write('<a class="navbar-brand" href="./index.html">Welcome to my Portfolio!</a>');
    document.write('<button class="navbar-toggler" typer="button" data-bs-toggle="collaspe" data-bs-target="#navbar');
    document.write('<span class="navbar-toggler-icon"></span>');
    document.write('</button');
    document.write('<div class="collaspe navbar-collaspe" id="navbarSupportedContent">');
    document.write('<ul class="navbar-nav ms auto mb-2 mb-1g-0">');
    document.write('<li class="nav item">');
    document.write('<a class="nav link" href="./about.html">Experience</a>');
    document.write('</li>');
    document.write('<li class="nav-item">');
    document.write('<a class="nav-link" href="./experience.html">Experience</a>');
    document.write('</li>');
    document.write('<li class="nav-item">');
    document.write('<a class="nav-link" href="./projects.html">Projects</a>');
    document.write('</li');
    document.write('</ul');
    document.write('</div');
    document.write('</div');
    document.write('</nav');
}

function getFooter() {
    document.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>');
}

function getAccordion() {

    const accordionHeaders = documents.getElementsByClassName('accordion-header');
    const accordionContents = documents.getElementsByClassName('accordion-content');
    const accordionIcons = documents.getElementsByClassName('accordion-icon');

    for (let i = 0; i < accordionHeaders.length; i++) {
            accordionHeaders[i].addEventListener('click', () => {
            accordionContents[i].style.display = accordionContents[i].style.display == 'block' ? 'none' : 'block';
            accordionIcons[i].innerHTML = accordionContents[i].style.display == 'block' ? '-' : '+';
    
        });
    }
}