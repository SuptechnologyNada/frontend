// Simulons un objet ou une source de données avec les informations de l'élève
let studentData = {
    id: '12345',
    nom: 'Jean Dupont'
};

function showTable(type) {
    let tableContainer = document.getElementById('table-container');
    let tableHTML = '';

    switch (type) {
        case 'coursSalle':
            tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Cours</th>
                            <th>Salle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>Mathématiques</td>
                            <td>Salle 101</td>
                        </tr>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>Physique</td>
                            <td>Salle 102</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case 'groupeSeance':
            tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Groupe</th>
                            <th>Séance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>Groupe A</td>
                            <td>Séance 1</td>
                        </tr>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>Groupe B</td>
                            <td>Séance 2</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case 'devoirsAbsence':
            tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Devoirs</th>
                            <th>Absence</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>Maths - Chapitre 1</td>
                            <td>2 jours</td>
                        </tr>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>Physique - Chapitre 2</td>
                            <td>0 jour</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case 'classe':
            tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Classe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>3ème A</td>
                        </tr>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>3ème B</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case 'recommandations':
            tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Recommandations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>Travailler les maths 30 minutes par jour</td>
                        </tr>
                        <tr>
                            <td>${studentData.id}</td>
                            <td>Lire un livre par mois</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
    }

    tableContainer.innerHTML = tableHTML;
}
