<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fort Intérieur v2.0</title>
<style>
body {
  margin:0;
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  color:white;
  background: linear-gradient(-45deg,#0f172a,#1e293b,#0c1a2b,#111827);
  background-size:400% 400%;
  animation:gradientMove 18s ease infinite;
}
@keyframes gradientMove {0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
header{text-align:center;padding:60px 20px 40px}
header h1{font-size:2.2rem;margin-bottom:10px}
header p{opacity:0.8}
.actions{display:flex;flex-direction:column;gap:15px;padding:20px}
.btn{padding:16px;border-radius:20px;text-align:center;font-weight:bold;text-decoration:none;transition:0.3s;cursor:pointer;}
.primary{background:#22c55e;color:black}
.primary:hover{transform:scale(1.05)}
.secondary{background:#1e293b;border:1px solid rgba(255,255,255,0.1);color:white}
.section{padding:40px 20px}
.card{background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);padding:20px;border-radius:20px;margin-bottom:20px;transition:0.3s;}
.card:hover{transform:translateY(-5px)}
.breath{width:150px;height:150px;border-radius:50%;margin:20px auto;background:#22c55e;animation:breathing 8s ease-in-out infinite;}
@keyframes breathing{0%{transform:scale(1)}50%{transform:scale(1.5)}100%{transform:scale(1)}}
.message{text-align:center;font-style:italic;margin-top:20px;opacity:0.9}
textarea{width:100%;border-radius:10px;padding:10px;margin-top:10px;font-size:1rem;background:rgba(255,255,255,0.05);color:white;border:none;resize:none;}
.navbar{position:fixed;bottom:0;width:100%;display:flex;justify-content:space-around;background:#0f172a;padding:10px 0}
.navbar a{color:white;text-decoration:none;font-size:1.1rem;}
.active{color:#22c55e;font-weight:bold;}
@media(min-width:768px){.actions{flex-direction:row;justify-content:center}}
</style>
</head>
<body>

<canvas id="particles"></canvas>

<header>
<h1>FORT INTÉRIEUR</h1>
<p>Un lieu sûr pour rester debout</p>
</header>

<div class="actions">
  <button class="btn primary" onclick="showSection('respiration')">Respirer</button>
  <button class="btn secondary" onclick="showSection('ancrage')">S’ancrer</button>
  <button class="btn secondary" onclick="showSection('journal')">Journal</button>
  <button class="btn secondary" onclick="showSection('urgence')">Aide Urgence</button>
</div>

<!-- Sections -->
<div class="section" id="respiration">
  <div class="card">
    <h2>Respiration guidée</h2>
    <p>Inspire quand le cercle grandit, expire quand il rétrécit.</p>
    <div class="breath"></div>
    <audio id="breathSound" src="https://www.soundjay.com/nature/sounds/water-1.mp3"></audio>
    <button class="btn secondary" onclick="document.getElementById('breathSound').play()">Activer le son apaisant</button>
  </div>
</div>

<div class="section" id="ancrage" style="display:none">
  <div class="card">
    <h2>Exercice 5-4-3-2-1</h2>
    <p>5 choses que tu vois<br>4 choses que tu touches<br>3 choses que tu entends<br>2 choses que tu sens<br>1 chose positive sur toi</p>
  </div>
</div>

<div class="section" id="journal" style="display:none">
  <div class="card">
    <h2>Journal émotionnel</h2>
    <textarea id="journalInput" rows="5" placeholder="Écris ce que tu ressens..."></textarea>
    <button class="btn primary" onclick="saveJournal()">Sauvegarder</button>
    <p id="journalSaved"></p>
  </div>
</div>

<div class="section" id="urgence" style="display:none">
  <div class="card">
    <h2>Aide Urgence</h2>
    <p>Si tu te sens en danger ou très mal, contacte immédiatement :</p>
    <a href="tel:3114" class="btn primary">Appeler 3114</a>
  </div>
</div>

<div class="section">
  <div class="card">
    <h2>Message pour toi</h2>
    <div class="message" id="supportMessage"></div>
  </div>
</div>

<div class="navbar">
  <a href="#" onclick="showSection('respiration')" class="nav-link active">Respirer</a>
  <a href="#" onclick="showSection('ancrage')" class="nav-link">Ancrage</a>
  <a href="#" onclick="showSection('journal')" class="nav-link">Journal</a>
  <a href="#" onclick="showSection('urgence')" class="nav-link">Urgence</a>
</div>

<script>
// ==== Particules ====
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
class Particle{
  constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.size=Math.random()*2+1;this.speedY=Math.random()*0.5+0.2;}
  update(){this.y-=this.speedY;if(this.y<0){this.y=canvas.height;this.x=Math.random()*canvas.width;}}
  draw(){ctx.fillStyle="rgba(255,255,255,0.2)";ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();}
}
function initParticles(){for(let i=0;i<60;i++){particlesArray.push(new Particle());}}
function animateParticles(){ctx.clearRect(0,0,canvas.width,canvas.height);particlesArray.forEach(p=>{p.update();p.draw();});requestAnimationFrame(animateParticles);}
initParticles();animateParticles();

// ==== Messages de soutien ====
const messages=["Tu es encore là. Et ça compte.","Respire. Ce moment va passer.","Tu n’es pas faible. Tu es en train de survivre.","Ta sensibilité est une force mal comprise.","Tu as déjà traversé pire."];
document.getElementById("supportMessage").innerText=messages[Math.floor(Math.random()*messages.length)];

// ==== Thermomètre émotionnel ====
const range = document.getElementById("moodRange");
const moodText = document.getElementById("moodText");
if(range){range.addEventListener("input",()=>{const value=range.value;if(value<=3){moodText.innerHTML="Tu sembles traverser quelque chose de lourd. Ralentis."}else if(value<=7){moodText.innerHTML="C’est fluctuant. Continue à respirer."}else{moodText.innerHTML="Il y a de la lumière aujourd’hui. Garde-la."}})}

// ==== Mode nuit automatique ====
let hour=new Date().getHours();
if(hour>=22||hour<=5){document.body.style.background="linear-gradient(#020617,#000000)"}

// ==== Journal ====
function saveJournal(){
  let content=document.getElementById("journalInput").value;
  localStorage.setItem("journalEntry",content);
  document.getElementById("journalSaved").innerText="Ton journal a été sauvegardé ✅";
}

// ==== Navigation ====
function showSection(id){
  const sections=['respiration','ancrage','journal','urgence'];
  sections.forEach(s=>document.getElementById(s).style.display=(s===id?'block':'none'));
  document.querySelectorAll('.nav-link').forEach(link=>link.classList.remove('active'));
  document.querySelector(`.nav-link[onclick="showSection('${id}')"]`).classList.add('active');
}
</script>

</body>
</html>
