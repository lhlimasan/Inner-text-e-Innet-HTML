// Capturando os elementos do HTML
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
titulo.innerText = 'Título do Projeto';
link.innerText = 'Link para o Proz Educação';
listaNaoOrdenada.innerHTML = '<li>Proz</li><li>Educação e</li><li>Formação</li>';
listaOrdenada.innerHTML = '<li><a href="https://www.google.com.br">Google</a></li><li><a href="https://www.github.com">Github</a></li><li><a href="https://www.linkedin.com">Linkedin</a></li>';
