// ==========================================================================
// 1. DONNÉES DES PROJETS (HANJA Eli Dina - Portfolio 2026)
// ==========================================================================
const myProjects = [
    {
        "title": "PolyDocs",
        "tag": "SaaS • 2025",
        "techs": ["html5", "css3-alt", "js", "ajax", "php", "mysql", "xampp"],
        "img": "assets/img/project_img/polidocs/polidocs_pc.png",
        "size": "large",
        "link": "#",
        "description": "Système complet de gestion documentaire permettant l'archivage, la recherche intelligente et la gestion des droits utilisateurs. Développé avec une architecture PHP/MySQL robuste et testé sous environnement Xampp.",
        "gallery": [
            "assets/img/project_img/polidocs/polidocs_tablette.png",
            "assets/img/project_img/polidocs/polidocs_mobile.png"
        ]
    },
    {
        "title": "Plateforme de gestion scolaire Polymathes",
        "tag": "SaaS • 2025",
        "techs": ["html5", "css3-alt", "js", "ajax", "php", "mysql", "xampp"],
        "img": "assets/img/project_img/polymathes/formulaire_connexion.png",
        "size": "small",
        "link": "#",
        "description": "Solution SaaS dédiée aux établissements scolaires pour la gestion des notes, des absences et de la communication parents-professeurs. Utilise MySQL pour une gestion de base de données relationnelle complexe.",
        "gallery": [
            "assets/img/project_img/polymathes/Acceuil_polymathes.png",
            "assets/img/project_img/polymathes/bulletin.png"
        ]
    },
    {
        "title": "BiblioTech",
        "tag": "Web App • 2025",
        "techs": ["html5", "sass", "js", "ajax", "php", "mysql", "wamp"],
        "img": "assets/img/project_img/bibliotech/Biblio_Tech.png",
        "size": "small",
        "link": "#",
        "description": "Application de gestion de bibliothèque moderne avec suivi des emprunts et catalogue interactif. L'environnement local a été configuré via Wamp pour le développement back-end.",
        "gallery": []
    },
    {
        "title": "Digital Creative Agency",
        "tag": "Intégration • 2024",
        "techs": ["html5", "css3-alt"],
        "img": "assets/img/project_img/integration_maquette/digital_web_agency.png",
        "size": "small",
        "link": "#",
        "description": "Intégration pixel-perfect d'une maquette Figma complexe mettant l'accent sur les animations fluides et le responsive design.",
        "gallery": []
    },
    {
        "title": "AetherFlow",
        "tag": "React App • 2025",
        "techs": ["react", "tailwind", "js"],
        "img": "assets/img/project_img/AetherFlow/AetherFlow.png",
        "size": "small",
        "link": "#",
        "description": "Interface dynamique développée avec React et stylisée avec Tailwind CSS, offrant une expérience utilisateur fluide pour la visualisation de données en temps réel.",
        "gallery": []
    }
];

// ==========================================================================
// 2. RENDU DES PROJETS (GRID)
// ==========================================================================
function renderProjects() {
    const container = document.getElementById('projects-container') || document.querySelector('.projects-container');
    if(!container) return;

    container.innerHTML = myProjects.map((p, index) => `
        <article class="project-card ${p.size}" data-tech="${p.techs.join(' ')}">
            <div class="project-img" style="background-image: url('${p.img}')">
                <div class="project-overlay">
                    <div class="tech-icons">
                        ${p.techs.map(t => {
                            let iconName = t;
                            let prefix = 'fab';
                            if (t === 'js') iconName = 'js-square';
                            if (t === 'scss') iconName = 'sass';
                            if (t === 'database' || t === 'server' || t === 'mysql') {
                                iconName = 'database';
                                prefix = 'fas';
                            }

                            const availableIcons = ['html5', 'css3-alt', 'js', 'php', 'database', 'react', 'tailwind', 'sass', 'scss'];
                            if (availableIcons.includes(t) || t === 'mysql') {
                                return `<i class="${prefix} fa-${iconName}"></i>`;
                            }
                            return '';
                        }).join('')}
                    </div>
                    <button onclick="openProjectDetails(${index})" class="view-btn" style="border:none; cursor:pointer;">Voir plus</button>
                </div>
            </div>
            <div class="project-info">
                <div class="project-tag">${p.tag}</div>
                <h3>${p.title}</h3>
            </div>
        </article>
    `).join('');
}

renderProjects();

// ==========================================================================
// 3. CURSEUR 3D (CUBE) AVEC INERTIE
// ==========================================================================
const cursor3d = document.getElementById('cursor3d');
const cube = document.querySelector('.cube');
let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    let dx = mouseX - currentX;
    let dy = mouseY - currentY;
    currentX += dx * 0.08;
    currentY += dy * 0.08;
    
    if(cursor3d) {
        cursor3d.style.left = currentX + 'px';
        cursor3d.style.top = currentY + 'px';
    }
    requestAnimationFrame(animate);
}
animate();

// --- EFFETS DU CUBE AU SURVOL ---
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, .project-card, .cta-button, .skill-tag, .tile')) {
        cube.style.transform = 'scale(1.8)'; 
        document.querySelectorAll('.face').forEach(f => {
            f.style.background = 'rgba(59, 130, 246, 0.5)';
            f.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        });
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, .project-card, .cta-button, .skill-tag, .tile')) {
        cube.style.transform = 'scale(1)';
        document.querySelectorAll('.face').forEach(f => {
            f.style.background = 'rgba(59, 130, 246, 0.2)';
            f.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        });
    }
});

// ==========================================================================
// 4. SCROLL PROGRESSION & INTERCONNEXION STACK
// ==========================================================================
const projectSection = document.querySelector('.projects-section');
projectSection?.addEventListener('scroll', () => {
    const scrolled = projectSection.scrollTop;
    const height = projectSection.scrollHeight - projectSection.clientHeight;
    const percentage = (scrolled / height) * 100;
    document.querySelector('.scroll-progress').style.setProperty('--scroll-height', percentage + '%');
});

const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const tech = tag.getAttribute('data-skill');
        document.querySelectorAll('.project-card').forEach(card => {
            const cardTechs = card.getAttribute('data-tech') || "";
            if (cardTechs.includes(tech)) {
                card.classList.add('highlight-tech');
            } else {
                card.style.opacity = "0.4";
            }
        });
    });

    tag.addEventListener('mouseleave', () => {
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.remove('highlight-tech');
            card.style.opacity = "1";
        });
    });
});

// ==========================================================================
// 5. MODALE DE CONTACT & CLIPBOARD
// ==========================================================================
const contactModal = document.getElementById('contactModal');
const openBtn = document.getElementById('cta-collab');
const closeBtn = document.querySelector('.close-modal');
const hoverEmail = document.querySelector('.hover-email');

openBtn?.addEventListener('click', () => contactModal.classList.add('active'));
closeBtn?.addEventListener('click', () => contactModal.classList.remove('active'));
window.addEventListener('click', (e) => { if (e.target === contactModal) contactModal.classList.remove('active'); });

hoverEmail?.addEventListener('click', () => {
    const email = hoverEmail.querySelector('.email-text').innerText;
    navigator.clipboard.writeText(email);
    const originalContent = hoverEmail.innerHTML;
    hoverEmail.innerHTML = 'Copié ! <i class="fas fa-check"></i>';
    setTimeout(() => { hoverEmail.innerHTML = originalContent; }, 2000);
});

// ==========================================================================
// 6. MODALE DÉTAILS PROJETS
// ==========================================================================
function openProjectDetails(index) {
    const project = myProjects[index];
    const modal = document.getElementById('projectDetailModal');
    
    modal.innerHTML = `
        <div class="project-modal-card">
            <button class="close-detail" onclick="closeProjectModal()"><i class="fas fa-times"></i></button>
            
            <div class="modal-scroll-area">
                <div class="modal-header-container">
                    <div class="modal-main-img" style="background-image: url('${project.img}')"></div>
                    <div class="header-content">
                        <span class="project-tag">${project.tag}</span>
                        <h2>${project.title}</h2>
                    </div>
                </div>

                <div class="modal-body-content">
                    <div class="left-col">
                        <h3 class="section-title"><i class="fas fa-info-circle"></i> À propos du projet</h3>
                        <p class="project-desc-text">${project.description}</p>
                        
                        <div class="gallery-section">
                            <h3 class="section-title"><i class="fas fa-desktop"></i> Aperçus & Responsive</h3>
                            <div class="gallery-grid">
                                ${project.gallery.map(img => `
                                    <div class="gallery-item"><img src="${img}" alt="Aperçu"></div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="right-col">
                        <h3 class="section-title"><i class="fas fa-code"></i> Technologies</h3>
                        <div class="tech-flex">
                            ${project.techs.map(t => `<span class="modal-badge">${t.toUpperCase()}</span>`).join('')}
                        </div>

                        ${project.link !== "#" ? `
                            <a href="${project.link}" target="_blank" class="cta-button" style="text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 10px;">
                                Consulter le projet <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeProjectModal() {
    const modal = document.getElementById('projectDetailModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}