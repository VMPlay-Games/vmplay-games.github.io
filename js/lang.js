// Загрузка переводов из JSON и установка языка
let translations = {};

async function loadTranslations() {
    const res = await fetch('data/translations.json');
    translations = await res.json();
}

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    // Header
    document.querySelector('.nav-links li:nth-child(1) a').textContent = t.nav_about;
    document.querySelector('.nav-links li:nth-child(2) a').textContent = t.nav_projects;
    document.querySelector('.nav-links li:nth-child(3) a').textContent = t.nav_contact;
    // Hero
    document.querySelector('.hero h1').textContent = t.hero_title;
    document.querySelector('.hero p').textContent = t.hero_desc;
    document.querySelector('.cta-button').textContent = t.hero_btn;
    // About
    document.querySelector('.section-title.fade-in').textContent = t.about_title;
    document.querySelector('.section-subtitle.fade-in').textContent = t.about_subtitle;
    document.querySelectorAll('.feature-card h3')[0].textContent = t.feature1_title;
    document.querySelectorAll('.feature-card p')[0].textContent = t.feature1_desc;
    document.querySelectorAll('.feature-card h3')[1].textContent = t.feature2_title;
    document.querySelectorAll('.feature-card p')[1].textContent = t.feature2_desc;
    document.querySelectorAll('.feature-card h3')[2].textContent = t.feature3_title;
    document.querySelectorAll('.feature-card p')[2].textContent = t.feature3_desc;
    // Projects
    document.querySelectorAll('.section-title.fade-in')[1].textContent = t.projects_title;
    document.querySelectorAll('.section-subtitle.fade-in')[1].textContent = t.projects_subtitle;
    document.querySelector('.project-header h3').textContent = t.car_parking_title;
    document.querySelector('.project-header p').textContent = t.car_parking_desc;
    document.querySelectorAll('.project-content p strong')[0].textContent = t.genre;
    document.querySelectorAll('.project-content p')[0].childNodes[1].textContent = ' ' + t.genre_value;
    document.querySelectorAll('.project-content p strong')[1].textContent = t.description;
    document.querySelectorAll('.project-content p')[1].childNodes[1].textContent = ' ' + t.car_parking_full_desc;
    // Features list
    const features = [t.feature_item1, t.feature_item2, t.feature_item3, t.feature_item4, t.feature_item5, t.feature_item6];
    document.querySelectorAll('.project-features .feature-item').forEach((el, i) => {
        el.textContent = features[i];
    });
    // Target audience
    document.querySelector('.target-audience strong').textContent = t.target_audience;
    document.querySelector('.target-audience').childNodes[2].textContent = ' ' + t.target_audience_value;
    // Contact
    document.querySelectorAll('.section-title.fade-in')[2].textContent = t.contact_title;
    document.querySelectorAll('.section-subtitle.fade-in')[2].textContent = t.contact_subtitle;
    // Form
    document.querySelector('label[for="name"]').textContent = t.form_name;
    document.querySelector('label[for="email"]').textContent = t.form_email;
    document.querySelector('label[for="company"]').textContent = t.form_company;
    document.querySelector('label[for="type"]').textContent = t.form_type;
    document.querySelector('#type option[value=""]').textContent = t.form_type_default;
    document.querySelector('#type option[value="investment"]').textContent = t.form_type_investment;
    document.querySelector('#type option[value="partnership"]').textContent = t.form_type_partnership;
    document.querySelector('#type option[value="collaboration"]').textContent = t.form_type_collaboration;
    document.querySelector('#type option[value="other"]').textContent = t.form_type_other;
    document.querySelector('label[for="message"]').textContent = t.form_message;
    document.querySelector('#message').placeholder = t.form_message_placeholder;
    document.querySelector('.submit-btn').textContent = t.form_submit;
    // Footer
    document.querySelector('footer .container p').textContent = t.footer;
}

function saveLang(lang) {
    localStorage.setItem('lang', lang);
}
function getLang() {
    return localStorage.getItem('lang') || 'en';
}

async function initLang() {
    await loadTranslations();
    setLanguage(getLang());
    document.getElementById('lang-ru').addEventListener('click', function() {
        setLanguage('ru');
        saveLang('ru');
    });
    document.getElementById('lang-en').addEventListener('click', function() {
        setLanguage('en');
        saveLang('en');
    });
}

document.addEventListener('DOMContentLoaded', initLang); 