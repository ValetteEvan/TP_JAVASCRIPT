const API_URL = 'https://digicode.cleverapps.io/utilisateurs';
let utilisateurs = [];
let modeEdition = false;

// Charger les utilisateurs au chargement de la page si l'ID créateur est dans le localStorage
window.addEventListener('load', () => {
    const savedIdCreateur = localStorage.getItem('idCreateur');
    if (savedIdCreateur) {
        document.getElementById('idCreateur').value = savedIdCreateur;
        chargerUtilisateurs();
    }
});

// Gestionnaire de soumission du formulaire
document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const idCreateur = document.getElementById('idCreateur').value.trim();
    if (!idCreateur) {
        afficherMessage('Veuillez entrer votre identifiant créateur', 'error');
        return;
    }

    const userId = document.getElementById('userId').value;

    if (modeEdition && userId) {
        await modifierUtilisateur(userId);
    } else {
        await creerUtilisateur();
    }
});

// Fonction pour charger les utilisateurs (GET)
async function chargerUtilisateurs() {
    const idCreateur = document.getElementById('idCreateur').value.trim();

    if (!idCreateur) {
        afficherMessage('Veuillez entrer votre identifiant créateur', 'error');
        return;
    }

    // Sauvegarder l'ID créateur dans le localStorage
    localStorage.setItem('idCreateur', idCreateur);

    try {
        document.getElementById('userList').innerHTML = '<p class="loading">Chargement des utilisateurs...</p>';

        const response = await fetch(`${API_URL}/${encodeURIComponent(idCreateur)}`);

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        utilisateurs = await response.json();
        afficherUtilisateurs();
        afficherMessage(`${utilisateurs.length} utilisateur(s) chargé(s)`, 'success');

    } catch (error) {
        document.getElementById('userList').innerHTML = '<p class="error">Erreur lors du chargement des utilisateurs</p>';
        afficherMessage(`Erreur: ${error.message}`, 'error');
        console.error('Erreur:', error);
    }
}

// Fonction pour créer un utilisateur (POST)
async function creerUtilisateur() {
    const idCreateur = document.getElementById('idCreateur').value.trim();
    const utilisateur = recupererDonneesFormulaire();
    utilisateur.idCreateur = idCreateur;

    console.log('=== DONNÉES ENVOYÉES ===');
    console.log(JSON.stringify(utilisateur, null, 2));
    console.log('========================');

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(utilisateur)
        });

        console.log('Status de la réponse:', response.status);
        console.log('Headers de la réponse:', [...response.headers.entries()]);

        // Accepter les codes 200, 201 (Created) et 204 (No Content)
        if (response.status >= 200 && response.status < 300) {
            console.log('✓ Succès !');

            // Essayer de lire la réponse si elle existe
            let nouvelUtilisateur = null;
            const contentType = response.headers.get('content-type');

            if (contentType && contentType.includes('application/json')) {
                try {
                    nouvelUtilisateur = await response.json();
                    console.log('Utilisateur créé:', nouvelUtilisateur);
                } catch (e) {
                    console.log('Pas de corps JSON dans la réponse');
                }
            }

            afficherMessage('Utilisateur créé avec succès !', 'success');
            resetFormulaire();
            await chargerUtilisateurs();
            return;
        }

        // Si le statut n'est pas un succès
        let errorText;
        try {
            errorText = await response.text();
            console.error('=== ERREUR DU SERVEUR ===');
            console.error(errorText);
            console.error('========================');
        } catch (e) {
            errorText = 'Impossible de lire la réponse';
        }
        throw new Error(`Erreur HTTP ${response.status}: ${errorText}`);

    } catch (error) {
        // Vérifier si l'utilisateur a quand même été créé
        console.warn('Une erreur est survenue, mais vérifions si l\'utilisateur a été créé...');

        afficherMessage(`Erreur lors de la création: ${error.message}. Vérification en cours...`, 'error');

        // Attendre un peu puis recharger pour vérifier
        setTimeout(async () => {
            await chargerUtilisateurs();
        }, 1000);

        console.error('=== ERREUR COMPLÈTE ===');
        console.error(error);
        console.error('======================');
    }
}

// Fonction pour modifier un utilisateur (PUT)
async function modifierUtilisateur(id) {
    const idCreateur = document.getElementById('idCreateur').value.trim();
    const utilisateur = recupererDonneesFormulaire();
    utilisateur.idCreateur = idCreateur;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(utilisateur)
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const utilisateurModifie = await response.json();
        afficherMessage('Utilisateur modifié avec succès !', 'success');
        resetFormulaire();
        await chargerUtilisateurs();

    } catch (error) {
        afficherMessage(`Erreur lors de la modification: ${error.message}`, 'error');
        console.error('Erreur:', error);
    }
}

// Fonction pour supprimer un utilisateur (DELETE)
async function supprimerUtilisateur(id) {
    const idCreateur = document.getElementById('idCreateur').value.trim();

    if (!confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${encodeURIComponent(idCreateur)}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        afficherMessage('Utilisateur supprimé avec succès !', 'success');
        await chargerUtilisateurs();

    } catch (error) {
        afficherMessage(`Erreur lors de la suppression: ${error.message}`, 'error');
        console.error('Erreur:', error);
    }
}

// Fonction pour récupérer les données du formulaire
function recupererDonneesFormulaire() {
    const data = {
        nom: document.getElementById('nom').value.trim(),
        prenom: document.getElementById('prenom').value.trim(),
        genre: document.getElementById('genre').value,
        dateNaissance: document.getElementById('dateNaissance').value
    };

    // Ajouter les champs optionnels seulement s'ils ne sont pas vides
    const lieuNaissance = document.getElementById('lieuNaissance').value.trim();
    if (lieuNaissance) data.lieuNaissance = lieuNaissance;

    const departementNaissance = document.getElementById('departementNaissance').value.trim();
    if (departementNaissance) data.departementNaissance = departementNaissance;

    const numeroRue = document.getElementById('numeroRue').value.trim();
    if (numeroRue) data.numeroRue = numeroRue;

    const libelleRue = document.getElementById('libelleRue').value.trim();
    if (libelleRue) data.libelleRue = libelleRue;

    const codePostal = document.getElementById('codePostal').value.trim();
    if (codePostal) data.codePostal = codePostal;

    const ville = document.getElementById('ville').value.trim();
    if (ville) data.ville = ville;

    return data;
}

// Fonction pour afficher les utilisateurs
function afficherUtilisateurs() {
    const userList = document.getElementById('userList');

    if (utilisateurs.length === 0) {
        userList.innerHTML = '<p class="loading">Aucun utilisateur trouvé. Créez-en un !</p>';
        return;
    }

    let html = '';
    utilisateurs.forEach(user => {
        const adresse = [user.numeroRue, user.libelleRue, user.codePostal, user.ville]
            .filter(Boolean)
            .join(' ');

        html += `
            <div class="user-card">
                <h3>${user.prenom} ${user.nom}</h3>
                <div class="user-info"><strong>Genre:</strong> ${user.genre || 'N/A'}</div>
                <div class="user-info"><strong>Date de naissance:</strong> ${formatDate(user.dateNaissance)}</div>
                ${user.lieuNaissance ? `<div class="user-info"><strong>Lieu de naissance:</strong> ${user.lieuNaissance} (${user.departementNaissance || 'N/A'})</div>` : ''}
                ${adresse ? `<div class="user-info"><strong>Adresse:</strong> ${adresse}</div>` : ''}
                <div class="user-info"><strong>Dernière mise à jour:</strong> ${formatDateTime(user.dateMaj)}</div>
                <div class="user-info"><strong>ID:</strong> ${user.id}</div>
                <div class="user-actions">
                    <button class="btn-edit" onclick="editerUtilisateur(${user.id})">Modifier</button>
                    <button class="btn-delete" onclick="supprimerUtilisateur(${user.id})">Supprimer</button>
                </div>
            </div>
        `;
    });

    userList.innerHTML = html;
}

// Fonction pour éditer un utilisateur
function editerUtilisateur(id) {
    const user = utilisateurs.find(u => u.id === id);
    if (!user) return;

    modeEdition = true;
    document.getElementById('formTitle').innerHTML = 'Modifier l\'utilisateur <span class="badge badge-edit">MODE ÉDITION</span>';
    document.getElementById('submitBtn').textContent = 'Modifier l\'utilisateur';

    document.getElementById('userId').value = user.id;
    document.getElementById('nom').value = user.nom || '';
    document.getElementById('prenom').value = user.prenom || '';
    document.getElementById('genre').value = user.genre || '';
    document.getElementById('dateNaissance').value = user.dateNaissance || '';
    document.getElementById('lieuNaissance').value = user.lieuNaissance || '';
    document.getElementById('departementNaissance').value = user.departementNaissance || '';
    document.getElementById('numeroRue').value = user.numeroRue || '';
    document.getElementById('libelleRue').value = user.libelleRue || '';
    document.getElementById('codePostal').value = user.codePostal || '';
    document.getElementById('ville').value = user.ville || '';

    // Scroll vers le formulaire
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour annuler la modification
function annulerModification() {
    resetFormulaire();
}

// Fonction pour réinitialiser le formulaire
function resetFormulaire() {
    modeEdition = false;
    document.getElementById('formTitle').textContent = 'Créer un nouvel utilisateur';
    document.getElementById('submitBtn').textContent = 'Créer l\'utilisateur';
    document.getElementById('userForm').reset();
    document.getElementById('userId').value = '';
}

// Fonction pour afficher un message
function afficherMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<div class="${type}">${message}</div>`;

    setTimeout(() => {
        messageDiv.innerHTML = '';
    }, 5000);
}

// Fonction pour formater une date
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
}

// Fonction pour formater une date et heure
function formatDateTime(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR');
}
