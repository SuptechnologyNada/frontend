// Fonction pour ouvrir un modal spécifique
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Fonction pour fermer un modal spécifique
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Fermer le modal lorsque l'utilisateur clique en dehors de la boîte de dialogue
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
// Récupération du bouton de déconnexion
const logoutBtn = document.getElementById('logoutBtn');

// Ajout d'un gestionnaire d'événement au clic sur le bouton de déconnexion
logoutBtn.addEventListener('click', function() {
    // Redirection vers la page d'accueil (index.html)
    window.location.href = 'index.html';
});

// Fonction pour ouvrir un modal spécifique
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Fonction pour fermer un modal spécifique
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Fermer le modal lorsque l'utilisateur clique en dehors de la boîte de dialogue
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
// Gestion des modals
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.button[data-modal]');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

modals.forEach((modal) => {
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

// Gestion du bouton de déconnexion
const logoutButton = document.getElementById('logoutBtn');
logoutButton.addEventListener('click', () => {
    // Code de déconnexion à ajouter ici
    console.log('Déconnexion...');
})

;

