class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorCompra = 0;
        let itemExtra = [];
        
        
        for (let i=0;i<itens.length;i++){
            const [codigo,quantidade] = itens[i].split(',')
            if (isNaN(quantidade) || parseInt(quantidade) <= 0) {
                return "Quantidade inválida!";
              }else{
                codigo ===0;
                return "Item inválido!"
              }
        }
           
        if (!metodoDePagamento.includes(metodoDePagamento)){
            return "Forma de pagamento inválida!"
        }
        
        if (metodoDePagamento === 'dinheiro'){
            valorCompra *= 0.95
        }else if(metodoDePagamento === 'credito'){
            valorCompra *=1.03 
                 
        }
       
        if (itens.length === 0 ){
            return "Não há itens no carrinho de compra!"
        }
        if (itens<=0){
            return "Quantidade inválida!"
        }  
        if (['queijo','chantily'].includes(itens.length)){
            if (!itens.includes('sanduiche')){
                return "Item extra não pode ser pedido sem o principal"
            }
        }
     


        return "R$" + valorCompra.toFixed(2).replace('.',',');
    }

}

export { CaixaDaLanchonete };
