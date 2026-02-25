// Affichage / retour blog
function showBlog() {
  document.getElementById('content').style.display='none';
  document.getElementById('blog-section').style.display='flex';
}
function showCocon() {
  document.getElementById('blog-section').style.display='none';
  document.getElementById('content').style.display='block';
}

// Gestion ajout articles
const addBtn = document.getElementById('add-btn');
const newTitle = document.getElementById('new-title');
const newContent = document.getElementById('new-content');
const articlesContainer = document.getElementById('articles');

// Articles publics par défaut
const defaultArticles = [
  {title:"L'importance de parler de ses émotions", content:"Partager ses émotions avec un proche ou un professionnel peut réduire le stress et l'anxiété."},
  {title:"Gérer l'anxiété au quotidien", content:"Quelques exercices simples de respiration ou de méditation peuvent aider à retrouver le calme."},
  {title:"Page 3114 - Ressources de soutien", content:"Cet article fictif représente la page 3114 pour référence. Vous pouvez y ajouter votre contenu sécurisé."},
  {title:"Prendre soin de sa santé mentale", content:"Identifier les sources de stress et pratiquer l'auto-compassion favorisent un bien-être durable."}
];

// Ajouter les articles par défaut au chargement
defaultArticles.forEach(a=>{
  const card=document.createElement('div');
  card.className='card';
  card.dataset.content=a.content;
  card.innerHTML=`<h2>${a.title}</h2><p>Cliquez pour voir plus...</p><span class="date">Publié le ${new Date().toLocaleDateString()}</span>`;
  card.addEventListener('click',()=>{
    card.querySelector('p').innerText=card.dataset.content;
    card.style.background='rgba(255,255,255,0.95)';
    card.style.boxShadow='0 12px 30px rgba(0,0,0,0.1)';
  });
  articlesContainer.appendChild(card);
});

// Ajouter un nouvel article via le formulaire
addBtn.addEventListener('click', () => {
  const title = newTitle.value.trim();
  const contentText = newContent.value.trim();
  if(title && contentText){
    const card=document.createElement('div');
    card.className='card';
    card.dataset.content=contentText;
    card.innerHTML=`<h2>${title}</h2><p>Cliquez pour voir plus...</p><span class="date">Publié le ${new Date().toLocaleDateString()}</span>`;
    card.addEventListener('click', ()=>{
      card.querySelector('p').innerText=card.dataset.content;
      card.style.background='rgba(255,255,255,0.95)';
      card.style.boxShadow='0 12px 30px rgba(0,0,0,0.1)';
    });
    articlesContainer.prepend(card);
    newTitle.value=''; newContent.value='';
  } else {
    alert('Merci de remplir le titre et le contenu.');
  }
});
