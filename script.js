const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.background = '#0073e6';
    });
    link.addEventListener('mouseout', () => {
        link.style.background = '';
    });
});

const sectionHeaders = document.querySelectorAll('section h2');
sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const sectionContent = header.nextElementSibling;
        sectionContent.style.display = sectionContent.style.display === 'none' ? 'block' : 'none';
    });
});

const copyrightYear = document.querySelector('footer p');
copyrightYear.textContent = `&copy; ${new Date().getFullYear()} Semester Project Nanotechnology Website`;
