// Datos de noticias (simulado)
const noticias = [
  {id:0, title:'La banda pierde el 3er lugar', date:'02 Oct 2025', tag:'banda', content:'La banda del colegio obtuvo el 3er lugar en el concurso de mineros, por la mala coordinación con el instructor y estudiantes.'},
  {id:1, title:'LA BANDA QUIERE VOLVER A SU PRIME', date:'25 Sep 2025', tag:'banda', content:'Los ensayos de la banda se volvieron mas estrictos...'},
  {id:2, title:'Gobierno estudiantil No hace una buena gestion!', date:'01 Oct 2025', tag:'gobierno', content:'Estudiantes comentan que el gobierno estudiantil deberia alargar los recreos!'},
  {id:3, title:'La Defensa de proyectos esta acabando con nosotros!!', date:'10 Sep 2025', tag:'gobierno', content:'Estudiantes del BTH de sistemas se quejan sobre lo cansador que es tener que charlar con chat gpt buscando la solucion aun codigo y que prefiririan haber entrado a gastronomia para mejor estresarse en huevo 2.'},
  {id:4, title:'El dia del estudiante fue una decepcion', date:'18 Sep 2025', tag:'actividades', content:'Los estudiantes de J.A.P. se quejan de que no hubo actividades interesantes y que la organización fue improvisada. Regresen los paseos escolares!!.'},
  {id:5, title:'Ocamponcito Rompe el silencio', date:'30 Sep 2025', tag:'actividades', content:'Ocamponcito Rompe el silencio tras la terrible confesion que se realizo de manera anonima y descarada que el "NO ES GAY" y niega rotundamente tener una relacion de 3 con suxo, aldahir y denilson,nos llama a la relfexion a tomar en cuenta los sentimientos de los otros y a no desinformar de esa manera.'},
  {id:6, title:'La promocion 2025 sale en la television', date:'12 Sep 2025', tag:'perfiles', content:'La promocion fue invitada a unos juegos del programa ultimo nivel en el que participaron y lamentablemente perdieron tras la mala organizacion como promocion. aunque comentan que a pesar de haber perdido ganaron la experiencia de poder divertirse y tener 2 seg de fama.'},
];

// Modal
function openModal(id){
  const noticia = noticias.find(n => n.id===id);
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  content.innerHTML = `<h2>${noticia.title}</h2><p style="color:var(--muted)">${noticia.date} • ${noticia.tag}</p><p>${noticia.content}</p>`;
  modal.style.display='flex';
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  const modal = document.getElementById('modal');
  modal.style.display='none';
  modal.setAttribute('aria-hidden','true');
}

// Search & filtering
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  filterByQuery(q);
});
function filterByQuery(q){
  const cards = document.querySelectorAll('.feed .card');
  cards.forEach(card => {
    const title = card.querySelector('.title').textContent.toLowerCase();
    const excerpt = card.querySelector('.excerpt').textContent.toLowerCase();
    const matches = title.includes(q) || excerpt.includes(q);
    card.style.display = matches ? 'flex' : 'none';
  });
}

// Tag filter
function filterTag(tag, el){
  document.querySelectorAll('.tag').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const cards = document.querySelectorAll('.feed .card');
  cards.forEach(card => {
    if(tag==='all'){card.style.display='flex';return}
    const tags = card.getAttribute('data-tags');
    card.style.display = tags.includes(tag) ? 'flex' : 'none';
  });
}

// Cerrar modal con ESC
window.addEventListener('keydown', e => {if(e.key==='Escape') closeModal()});

// Responsive hint
document.addEventListener('touchstart', ()=>{});
// --- Menú hamburguesa ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
