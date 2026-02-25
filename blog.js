// -----------------------------
// 1️⃣ Afficher la section Blog
// -----------------------------
function showBlog() {
  const blogSection = document.getElementById('blog-section');
  const contentDiv = document.getElementById('content');
  // Cacher le contenu principal du cocon
  contentDiv.style.display = 'none';
  // Afficher la section blog
  blogSection.style.display = 'block';
}

// -----------------------------
// 2️⃣ Revenir au cocon interactif
// -----------------------------
function showCocon() {
  const blogSection = document.getElementById('blog-section');
  const contentDiv = document.getElementById('content');
  // Cacher la section blog
  blogSection.style.display = 'none';
  // Réafficher le cocon
  contentDiv.style.display = 'block';
}

// -----------------------------
// 3️⃣ Ajouter un nouvel article
// -----------------------------
const addBtn = document.getElementById('add-btn');
const newTitle = document.getElementById('new-title');
const newContent = document.getElementById('new-content');
const articlesContainer = document.getElementById('articles');

addBtn.addEventListener('click', () => {
  const title = newTitle.value.trim();
  const content = newContent.value.trim();

  if (title && content) {
    // Créer la carte article
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.content = content;

    card.innerHTML = `
      <h2>${title}</h2>
      <p>Cliquez pour voir plus...</p>
      <span class="date">Publié le ${new Date().toLocaleDateString()}</span>
    `;

    // Ajouter le clic interactif pour révéler le contenu
    card.addEventListener('click', () => {
      card.querySelector('p').innerText = card.dataset.content;
      card.style.background = 'rgba(255,255,255,0.95)';
      card.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
    });

    // Ajouter l'article en haut de la liste
    articlesContainer.prepend(card);

    // Vider les champs du formulaire
    newTitle.value = '';
    newContent.value = '';
  } else {
    alert('Merci de remplir le titre et le contenu.');
  }
});
