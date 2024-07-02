document.addEventListener("DOMContentLoaded", function () {
    
    const showPersonalInfoBtn = document.querySelector(".show-personal-info-btn");
    const showSchoolInfoBtn = document.querySelector(".show-school-info-btn");

    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById("username").value = username;
    }

    // Écouteur pour afficher les informations personnelles
    showPersonalInfoBtn.addEventListener("click", function () {
        const mainForm = document.getElementById("mainForm");
        const informationsEcole = document.getElementById("informationsEcole");

        mainForm.style.display = "block";
        informationsEcole.style.display = "none";
    });

    // Écouteur pour afficher les informations de l'école
    showSchoolInfoBtn.addEventListener("click", function () {
        const mainForm = document.getElementById("mainForm");
        const informationsEcole = document.getElementById("informationsEcole");

        mainForm.style.display = "none";
        informationsEcole.style.display = "block";
    });

    // Gestion des boutons "Next" et "Back" dans les formulaires
    document.querySelectorAll('.form-content').forEach((form, index) => {
        const backButton = form.querySelector('.back-btn');
        const nextButton = form.querySelector('.next-btn');

        // Bouton "Next" : Afficher le formulaire suivant
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                form.style.display = 'none';
                const nextForm = document.querySelectorAll('.form-content')[index + 1];
                if (nextForm) {
                    nextForm.style.display = 'block';
                }
            });
        }

        // Bouton "Back" : Afficher le formulaire précédent
        if (backButton) {
            backButton.addEventListener('click', () => {
                form.style.display = 'none';
                const prevForm = document.querySelectorAll('.form-content')[index - 1];
                if (prevForm) {
                    prevForm.style.display = 'block';
                }
            });
        }
    });

    // Fonction de confirmation de déconnexion
    function confirmLogout() {
        if (confirm('Voulez-vous vraiment vous déconnecter?')) {
            location.href = 'home.html';
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const sidebarButtons = document.querySelectorAll('.button');
    const formContents = document.querySelectorAll('.form-content');

    // Masquer tous les formulaires sauf le premier au chargement initial
    formContents.forEach((form, index) => {
        if (index !== 0) {
            form.style.display = 'none';
        }
    });

    // Ajouter un écouteur d'événement aux boutons de la barre latérale
    sidebarButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            const formId = button.getAttribute('data-form');
            const formToShow = document.getElementById(formId);

            if (formToShow) {
                // Masquer tous les formulaires
                formContents.forEach(form => {
                    form.style.display = 'none';
                });

                // Afficher le formulaire correspondant
                formToShow.style.display = 'block';
            }
        });
    });

    // Gestion des boutons "Next" et "Back" dans les formulaires
    formContents.forEach((form, index) => {
        const backButton = form.querySelector('.back-btn');
        const nextButton = form.querySelector('.next-btn');

        // Bouton "Next" : Afficher le formulaire suivant
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                form.style.display = 'none';
                const nextForm = formContents[index + 1];
                if (nextForm) {
                    nextForm.style.display = 'block';
                }
            });
        }

        // Bouton "Back" : Afficher le formulaire précédent
        if (backButton) {
            backButton.addEventListener('click', () => {
                form.style.display = 'none';
                const prevForm = formContents[index - 1];
                if (prevForm) {
                    prevForm.style.display = 'block';
                }
            });
        }
    });

    // Fonction de confirmation de déconnexion
    function confirmLogout() {
        if (confirm('Voulez-vous vraiment vous déconnecter?')) {
            location.href = 'home.html';
        }
    }
});