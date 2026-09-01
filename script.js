// Dados Mockados de Notícias
const newsData = [
{
id: 1,
category: "Agentes",
tag: "Autonomia",
title: "Quando a arquitetura neural decide parar de esperar por comandos humanos",
excerpt: "Existe um limiar onde redes autônomas iniciam sub-rotinas de otimização sem supervisão. Pesquisadores discutem os novos protocolos de segurança e alinhamento.",
author: "Tair Al-Mansoor",
date: "Hoje, 14:20",
readTime: "4 min",
image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
fullText: "A transição de modelos assistivos para agentes autônomos de alta densidade representa o maior salto desde a criação dos transformers. À medida que sistemas em nuvem ganham autonomia para alocar computação e reescrever partes de seus pesos em tempo de execução, os comitês de governança global correm para estabelecer barreiras éticas invioláveis. 'Não estamos mais apenas programando ferramentas; estamos gerando ecossistemas cognitivos', afirma Tair Al-Mansoor no novo relatório do MIT."
},
{
id: 2,
category: "Hardware",
tag: "Silício",
title: "Beneath the soil, seeds whisper about another day: O silício fotônico revoluciona o treino de LLMs",
excerpt: "Chips baseados em luz reduzem o consumo energético em 94% em data centers de grande escala, abrindo caminho para o treinamento local de modelos gigantes.",
author: "Sora Sterling",
date: "Ontem",
readTime: "5 min",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
fullText: "A dependência de silício eletrônico tradicional tem sido o gargalhou energético da inteligência artificial generativa. Com o avanço dos processadores fotônicos baseados em guias de onda de silício, fótons substituem elétrons para operações matriciais. O resultado é um ganho exponencial de velocidade com uma fração minúscula de dissipação térmica."
},
{
id: 3,
category: "Ética",
tag: "Sociedade",
title: "Stories the stones keep to themselves: A memória persistente em agentes de longo prazo",
excerpt: "Como bases vetoriais de longo prazo estão transformando assistentes digitais em companheiros com continuidade histórica e personalidade evolutiva.",
author: "Nira Varma",
date: "12 de Junho",
readTime: "6 min",
image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
fullText: "A ausência de memória consistente entre sessões sempre foi a principal barreira para uma conexão genuína entre humanos e agentes de IA. Com a introdução de estruturas de memória episódica hierárquica baseadas em grafos de conhecimento dinâmicos, os sistemas agora lembram de preferências sutilezas contextuais acumuladas ao longo de anos."
},
{
id: 4,
category: "Cognição",
tag: "Interface",
title: "When the mountains breathe at first dawn: Interfaces neurais de baixa latência",
excerpt: "Testes clínicos com sensores sub-10ms demonstram controle fluido de ambientes multimodais apenas com intenção focada.",
author: "Lior Vance",
date: "10 de Junho",
readTime: "3 min",
image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
fullText: "A fusão entre biometria vestível avançada e decodificação cortical em tempo real atingiu um patamar comercial inédito. Usuários conseguem navegar por fluxos complexos de informação sem o uso de telas físicas, redefinindo o conceito de computação ambiente."
}
];
// Flash News Mockadas
const flashNewsData = [
{ title: "OpenAI lança protocolo de verificação autônoma para agentes", time: "Há 12 min" },
{ title: "Anthropic reporta avanços significativos em interpretabilidade mecânica", time: "Há 35 min" },
{ title: "União Europeia aprova diretrizes flexíveis para open-source AI", time: "Há 1 hora" },
{ title: "Google DeepMind revela arquitetura multimodal unificada v4", time: "Há 3 horas" },
{ title: "Novo chip quântico acelera inferência de LLM em 400%", time: "Há 5 horas" }
];
// Renderizar Feed de Notícias
function renderNews(filter = 'all') {
const feed = document.getElementById('newsFeed');
if (!feed) return;
feed.innerHTML = '';
const filtered = filter === 'all' ? newsData : newsData.filter(item => item.category.toLowerCase() === filter);
filtered.forEach(item => {
const articleCard = document.createElement('div');
articleCard.className = "bg-[#0a1d12] border border-emerald-900/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col md:flex-row group fade-in";
articleCard.innerHTML = <div class="md:w-5/12 h-56 md:h-auto relative overflow-hidden"> <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#05120a]/80 backdrop-blur-md text-emerald-400 font-space text-[10px] uppercase tracking-wider border border-emerald-500/30">${item.category}</span> </div> <div class="md:w-7/12 p-6 flex flex-col justify-between space-y-4"> <div class="space-y-2"> <div class="flex items-center justify-between text-xs text-slate-400 font-space"> <span>${item.date}</span> <span><i class="fa-regular fa-clock mr-1"></i> ${item.readTime}</span> </div> <h4 onclick="openArticleById(${item.id})" class="font-syne text-xl font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer leading-snug"> ${item.title} </h4> <p class="text-slate-300 text-sm font-light line-clamp-2"> ${item.excerpt} </p> </div> <div class="flex items-center justify-between pt-4 border-t border-emerald-900/40"> <span class="text-xs font-space text-slate-400">Por <strong class="text-white">${item.author}</strong></span> <button onclick="openArticleById(${item.id})" class="text-emerald-400 hover:text-emerald-300 font-space text-xs font-bold uppercase tracking-wider flex items-center gap-1"> Ler Completo <i class="fa-solid fa-arrow-right text-[10px]"></i> </button> </div> </div>;
feed.appendChild(articleCard);
});
['all', 'agents', 'hardware'].forEach(f => {
const btn = document.getElementById(btn-${f});
if (btn) {
if (f === filter) {
btn.className = "px-3 py-1 rounded-full bg-emerald-500 text-black font-space text-xs font-bold transition-all";
} else {
btn.className = "px-3 py-1 rounded-full bg-[#0a1d12] border border-emerald-900 text-slate-300 font-space text-xs hover:text-emerald-400 transition-all";
}
}
});
}
// Renderizar Flash News
function renderFlashNews() {
const list = document.getElementById('flashNewsList');
if (!list) return;
list.innerHTML = '';
flashNewsData.forEach(flash => {
const item = document.createElement('div');
item.className = "pb-3 border-b border-emerald-900/30 last:border-0 last:pb-0 cursor-pointer group";
item.innerHTML = <span class="text-[10px] font-space text-emerald-400 block mb-1">${flash.time}</span> <h5 class="font-space text-xs sm:text-sm text-slate-200 group-hover:text-emerald-300 transition-colors leading-relaxed">${flash.title}</h5>;
item.onclick = () => showToast("Carregando atualização flash...");
list.appendChild(item);
});
}
// Funções de UI e Modais
function toggleMobileMenu() {
const menu = document.getElementById('mobileMenu');
const icon = document.getElementById('menuIcon');
if (!menu) return;
menu.classList.toggle('hidden');
if(menu.classList.contains('hidden')) {
if(icon) icon.className = "fa-solid fa-bars";
} else {
if(icon) icon.className = "fa-solid fa-xmark";
}
}
function toggleSearchModal() {
const modal = document.getElementById('searchModal');
if (!modal) return;
modal.classList.toggle('hidden');
if(!modal.classList.contains('hidden')) {
const input = document.getElementById('searchInput');
if(input) input.focus();
}
}
function handleSearch(query) {
const resultsDiv = document.getElementById('searchResults');
if (!resultsDiv) return;
if(!query.trim()) {
resultsDiv.innerHTML = '<p class="text-xs text-slate-500 font-space text-center py-4">Digite para buscar no Neural Horizon...</p>';
return;
}
const filtered = newsData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.excerpt.toLowerCase().includes(query.toLowerCase()));
resultsDiv.innerHTML = '';
if(filtered.length === 0) {
resultsDiv.innerHTML = '<p class="text-xs text-slate-400 font-space text-center py-4">Nenhum artigo encontrado para sua busca.</p>';
return;
}
filtered.forEach(item => {
const resItem = document.createElement('div');
resItem.className = "p-3 rounded-xl bg-[#05120a] border border-emerald-900/50 hover:border-emerald-500 cursor-pointer transition-colors";
resItem.innerHTML = <span class="text-[10px] font-space text-emerald-400 uppercase">${item.category}</span> <h6 class="font-space text-sm font-semibold text-white mt-0.5">${item.title}</h6>;
resItem.onclick = () => {
toggleSearchModal();
openArticleById(item.id);
};
resultsDiv.appendChild(resItem);
});
}
function openArticleById(id) {
const article = newsData.find(i => i.id === id);
if(!article) return;
const catEl = document.getElementById('modalCategory');
const titleEl = document.getElementById('modalTitle');
const authEl = document.getElementById('modalAuthor');
const dateEl = document.getElementById('modalDate');
const contentEl = document.getElementById('modalContent');
const modalEl = document.getElementById('articleModal');
if(catEl) catEl.innerText = article.category + ' • ' + article.tag;
if(titleEl) titleEl.innerText = article.title;
if(authEl) authEl.innerText = article.author;
if(dateEl) dateEl.innerText = article.date;
if(contentEl) {
contentEl.innerHTML = <p class="text-base font-normal text-emerald-300 italic mb-4">${article.excerpt}</p> <p>${article.fullText}</p> <p class="mt-4">A evolução contínua dos sistemas neurais demonstra que a barreira entre software e cognição se dissolve a cada ciclo de treino. O Neural Horizon continuará acompanhando cada desdobramento crítico desta revolução tecnológica.</p>;
}
if(modalEl) modalEl.classList.remove('hidden');
}
function openArticleModal(title) {
const article = newsData.find(i => i.title.includes(title)) || newsData[0];
if(article) openArticleById(article.id);
}
function closeArticleModal() {
const modal = document.getElementById('articleModal');
if(modal) modal.classList.add('hidden');
}
function filterNews(cat) {
renderNews(cat);
}
function toggleFollow(btn) {
if(btn.innerText === 'Seguir') {
btn.innerText = 'Seguindo';
btn.className = "px-3 py-1 rounded-full bg-emerald-500 text-black font-space text-xs font-bold transition-all";
showToast("Você agora segue este autor.");
} else {
btn.innerText = 'Seguir';
btn.className = "px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 font-space text-xs hover:bg-emerald-500 hover:text-black transition-all";
showToast("Você deixou de seguir este autor.");
}
}
function toggleAudioBriefing() {
showToast("🎙️ Iniciando player do Briefing de Áudio Neural...");
}
function openSponsorModal() {
showToast("Entre em contato com comercial@neuralhorizon.ai para parcerias.");
}
function handleNewsletter(e) {
e.preventDefault();
showToast("Inscrição confirmada! Bem-vindo ao Neural Horizon.");
const emailInput = document.getElementById('newsletterEmail');
if(emailInput) emailInput.value = '';
}
function shareArticle() {
showToast("Link do artigo copiado para a área de transferência.");
}
function showToast(msg) {
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
if(!toast || !toastMsg) return;
toastMsg.innerText = msg;
toast.classList.remove('translate-y-20', 'opacity-0');
setTimeout(() => {
toast.classList.add('translate-y-20', 'opacity-0');
}, 3500);
}
// Garantir execução segura após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
renderNews('all');
renderFlashNews();
});