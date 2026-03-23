/* 1) O que é JavaScript ?
R: 
JavaScript é uma linguagem de programação usada principalmente para tornar páginas web interativas. 
Ele roda no navegador e permite criar funcionalidades como botões dinâmicos, validação de formulários, animações e comunicação com servidores.
*/
/* 2) É a mesma coisa que Java? Se não, quais as semelhanças e diferenças?
R: Não ,
semelhanças:
elas compartilham semelhanças superficiais, principalmente em sintaxe e orientação a objetos.
Ambas as linguagens são muito utilizadas em ambientes onde a manipulação de eventos (cliques, requisições de rede) é essencial, embora Java seja mais forte no backend/desktop e JavaScript no frontend (navegador).
diferenças:
Java é compilada e roda na JVM (Java Virtual Machine) enquanto JavaScript é interpretada (roda direto no navegador).
Java é usada mais para backend, apps e sistemas
JavaScript é usada principalmente para frontend (sites)
*/

/* 3) Quais são as utilizações mais comuns de JavaScript em HTML básico?
R: 
Manipular elementos da página (texto, imagens, estilos)
Responder a eventos (cliques, teclas, mouse)
Validar formulários
Criar animações simples
Atualizar conteúdo sem recarregar a página (AJAX)
entre outras funcionalidades que tornam a experiência do usuário mais dinâmica e interativa.
*/
/* 4) Qual o nome da notação de objetos em JavaScript? Como ela funciona?
R: é chamada de Notação Literal de Objeto (ou Object Literal em inglês).
é JSON (JavaScript Object Notation).
É uma forma de representar dados em pares chave: valor.
Utiliza um par de chaves {} para abrir e fechar o objeto.
Dentro das chaves, as propriedades são definidas por um nome (chave) seguido de dois pontos (:) e o valor da propriedade.
Múltiplas propriedades/métodos são separados por vírgulas.
Pode conter dados primitivos (strings, números, booleanos), arrays, funções (métodos) ou até outros objetos.
Exemplos:
let pessoa = {
  nome: "João",
  idade: 25
};

const pessoa = {
  nome: "Ana",
  idade: 30,
  saudar: function() {
    console.log("Olá!");
  }
};
*/
/* 5) Como JavaScript faz referência a objetos? Qual a diferença entre elemento.nome e elemento["nome"]?
R: 
JavaScript acessa propriedades de objetos de duas formas:
1. Notação de ponto (elemento.nome): Usada quando a chave é um identificador válido (sem espaços, caracteres especiais, etc.). É mais concisa e legível.
2. Notação de colchetes (elemento["nome"]): Usada quando a chave é uma string que pode conter caracteres especiais, espaços ou quando a chave é armazenada em uma variável. Permite acessar propriedades dinamicamente.
Diferenças:
1. A notação de ponto é mais concisa e legível, mas só pode ser usada com chaves válidas.
2. A notação de colchetes é mais flexível, permitindo o uso de chaves que contenham caracteres especiais ou sejam armazenadas em variáveis.
. é mais simples e usado quando o nome da propriedade é fixo
[] permite usar variáveis ou nomes dinâmicos
Exemplo:
let prop = "nome";
elemento[prop]; // funciona
elemento.prop;  // não funciona como esperado
*/

/* 6) O documento HTML pode ser considerado um conjunto de objetos? É possível manipulá-lo via JavaScript? Como?
R: 
Sim. O HTML é representado como uma estrutura chamada DOM (Document Object Model), que é basicamente um conjunto de objetos.
Sim, é possível manipulá-lo com JavaScript.
Sim, o documento HTML pode ser considerado um conjunto de objetos, e essa representação é fundamental para o desenvolvimento web moderno. Quando um navegador carrega uma página, ele transforma o código HTML em uma estrutura hierárquica baseada em objetos, conhecida como DOM (Document Object Model).
Sim, é perfeitamente possível manipulá-lo via JavaScript. O JavaScript usa o DOM para se conectar ao HTML, permitindo adicionar, remover, modificar e estilizar elementos dinamicamente.
Como :
A manipulação ocorre através de seleção (encontrar o elemento) e ação (mudar o elemento). 
Selecionando Elementos
O JavaScript utiliza métodos do objeto document para localizar elementos HTML: 
document.getElementById('id'): Seleciona um elemento único pelo ID.
document.querySelector('.classe' ou '#id' ou 'tag'): Seleciona o primeiro elemento que corresponde ao seletor CSS.
document.querySelectorAll('.classe'): Seleciona todos os elementos que correspondem ao seletor (retorna uma lista).
Modificando Elementos (Ações)
Após selecionar o elemento, você pode alterar suas propriedades: 
Alterar Texto: elemento.innerText = 'Novo Texto';
Alterar HTML Interno: elemento.innerHTML = '<b>Novo conteúdo</b>';
Alterar Estilos (CSS): elemento.style.color = 'red';
Alterar Atributos: elemento.setAttribute('src', 'imagem.jpg');
Modificar Classes: elemento.classList.add('nova-classe'); 
Criando ou Removendo Elementos
Criar: document.createElement('div');
Adicionar: pai.appendChild(novoElemento);
Remover: elemento.remove(); 

Exemplos: 
Selecionar elemento:
document.getElementById("titulo");

Alterar conteúdo:
document.getElementById("titulo").innerHTML = "Novo texto";

Alterar estilo:
document.getElementById("titulo").style.color = "red";

*/

