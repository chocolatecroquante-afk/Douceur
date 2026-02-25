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
  {
    title:"L'importance de parler de ses émotions",
    content:`
<p>💬 <strong>Parler de ses émotions :</strong> ose les écouter et les partager</p>

<h3>🌈 1. Qu’est-ce qu’une émotion ?</h3>
<p>Une émotion, c’est ce que ton corps et ton cœur ressentent face à une situation : joie 😄, tristesse 😢, colère 😠, peur 😨…</p>
<p>💡 Astuce : pour la reconnaître, pose-toi ces questions :</p>
<ul>
  <li>Que ressens‑je exactement ?</li>
  <li>Où dans mon corps le ressens‑je ? (ventre, poitrine, épaules…)</li>
  <li>Qu’est-ce qui a déclenché cette sensation ?</li>
</ul>
<p>Même dire à voix haute « je suis triste » ou « je me sens frustré·e » peut te soulager et te donner de la clarté.</p>
<hr>

<h3>🗣️ 2. Pourquoi exprimer ses émotions ?</h3>
<p>Garder ses émotions pour soi peut créer du stress, de l’anxiété et des tensions internes. Les exprimer :</p>
<ul>
  <li>Apaise ton esprit et ton corps 🧘‍♀️</li>
  <li>Renforce des relations sincères 🤝</li>
  <li>Permet de demander de l’aide quand tu en as besoin 💌</li>
</ul>
<p>Petit conseil : partager ne signifie pas tout raconter à tout le monde. Choisis juste une personne de confiance ou un moment pour toi.</p>
<hr>

<h3>✨ 3. Comment les exprimer ?</h3>
<p>Voici quelques façons simples et efficaces :</p>
<ul>
  <li>Parler : « Aujourd’hui je me sens… » à un ami, un proche ou un professionnel.</li>
  <li>Écrire : journaling, lettres ou notes sur ton téléphone.</li>
  <li>Bouger : courir, danser, respirer profondément, ou simplement marcher.</li>
  <li>Créer : dessiner, peindre, chanter ou jouer d’un instrument 🎨🎶</li>
</ul>
<p>💡 Astuce pratique : note une émotion par jour et ce qui l’a déclenchée. Tu verras, ça devient plus facile de la comprendre et de la gérer.</p>
<hr>

<p>💖 <strong>Conclusion : pourquoi oser les partager</strong></p>
<p>Exprimer ses émotions, c’est se respecter et se comprendre. C’est aussi permettre aux autres de te comprendre et de créer des liens plus vrais.</p>
<p>Alors n’hésite pas : parle, écris, bouge ou crée… tes émotions méritent d’être entendues ! 🌟</p>
`
  },
  {
    title:"Gérer l'anxiété au quotidien",
    content:"Quelques exercices simples de respiration ou de méditation peuvent aider à retrouver le calme."
  },
  {
    title:"Page 3114 - Ressources de soutien",
    content:"Cet article fictif représente la page 3114 pour référence. Vous pouvez y ajouter votre contenu sécurisé."
  },
  {
    title:"Prendre soin de sa santé mentale",
    content:"Identifier les sources de stress et pratiquer l'auto-compassion favorisent un bien-être durable."
  }
];

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
