function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}

// Display the "About Me" section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('about');
});
document.addEventListener('DOMContentLoaded', function() {
    showSection('education');
});
document.addEventListener('DOMContentLoaded', function() {
    showSection('internships');
});
document.addEventListener('DOMContentLoaded', function() {
    showSection('projects');
});