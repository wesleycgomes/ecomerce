// Função para adicionar um produto ao carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function atualizarCarrinhoCount() {
    // Atualiza o contador do carrinho
    document.getElementById('carrinho-count').textContent = carrinho.length;
}

// Adicionar produtos ao carrinho
document.querySelectorAll('.btn-comprar').forEach((button, index) => {
    button.addEventListener('click', () => {
        const produto = {
            nome: document.querySelectorAll('.produto h3')[index].textContent,
            preco: document.querySelectorAll('.produto .preco')[index].textContent,
            imagem: document.querySelectorAll('.produto img')[index].src,
        };
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinhoCount();
        alert('Produto adicionado ao carrinho!');
    });
});

// Função de busca de produtos
document.getElementById('search').addEventListener('input', function () {
    const termoBusca = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    
    produtos.forEach((produto) => {
        const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        if (nomeProduto.includes(termoBusca)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});

// Chamar a função para atualizar o carrinho na navegação
atualizarCarrinhoCount();
