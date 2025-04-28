const translations = {
    en: {...},
    fr: {...},
    nl: {...},
    de: {...},
    pt: {...},
    fl: {...}
};
document.getElementById('language-selector').addEventListener('change', function() {
    const language = this.value;
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[language][key];
    });
});
