const raiz = document.documentElement;
const contraste = document.querySelector('#contraste');
const status = document.querySelector('#status');
let tamanho = 100;
let alto = false;
try { const dados = JSON.parse(localStorage.getItem('acessoPreferencias') || '{}'); tamanho = [80,90,100,110,120,130,140,150,160,170,180,190,200].includes(dados.tamanho) ? dados.tamanho : 100; alto = dados.alto === true; } catch(e) {}
function aplicar(mensagem = '') {
  raiz.style.fontSize = tamanho + '%';
  raiz.classList.toggle('contraste', alto);
  contraste.setAttribute('aria-pressed', String(alto));
  status.textContent = mensagem;
  try { localStorage.setItem('acessoPreferencias', JSON.stringify({tamanho, alto})); } catch(e) {}
}
document.querySelector('#mais').addEventListener('click', () => { tamanho = Math.min(200, tamanho + 10); aplicar('Texto: ' + tamanho + '%'); });
document.querySelector('#menos').addEventListener('click', () => { tamanho = Math.max(80, tamanho - 10); aplicar('Texto: ' + tamanho + '%'); });
contraste.addEventListener('click', () => { alto = !alto; aplicar(alto ? 'Alto contraste ativado.' : 'Alto contraste desativado.'); });
document.querySelector('#reset').addEventListener('click', () => { tamanho = 100; alto = false; aplicar('Configurações restauradas.'); });
aplicar();
