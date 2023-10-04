let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res =document.querySelector('div#res')
let valores = []// 1ª coisa, vetor usado para analisar valores na lista

function isNumero(n){// 3ª depois de criado no if na função adicionar
    if(Number(n) >= 1 && Number(n) <= 100){// verificação se o número está entre 0e 100
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){// 4º tendo como parametro numero e lista
    if(l.indexOf(Number(n)) != -1){// se está na lista (indexOf ssobre vetores)
        return true;
    }else{
        return false;
    }
}

function adicionar(){//2ª função do botão adicionar
    if(isNumero(num.value) && !inLista(num.value, valores)){// perceba e se não( ! inLista) está na lista
        valores.push(Number(num.value))// 5ª adicionar o numero digitado e validado no vetor Valores
        let item = document.createElement('option')// 6º criar um item que vai ter um valor e vai ser adicionado no select
        item.text = `valor ${num.value} adiciando.`// 7º o item está sendo ecrito dentro do select o valor que será adicionado
        lista.appendChild(item)// 8º adiciona o item na lista
        res.innerHTML = ''// 13º ao clicar em finalizar fica vazio na lista adicionar
    }else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ""// 9º serve para apagar o numero depois de digitado
    num.focus()// o cursor fica disponivel para digitar de novo
}

function finalizar(){// 10º criar o botão finalizar no html e chamar a função ak
    if(valores.length == 0){// 11 testar o vetor
        window.alert('Adicionar valores antes de finaalizar')
    }else{
        let total = valores.length// 12º precisa criar essa variável para imprimir um texto com valor intermpolado após finalizar
        let maior = valores[0]// 15º valor quando digitado ele é maior ou o menor
        let menor = valores[0]
        let soma = 0// 18º
        let media = 0
        for(let pos in valores){// 16º foreach variavel posição dentro do vetor
            soma = soma + valores[pos]// 19º
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total// 20º
        res.innerHTML = ''// 14º
        res.innerHTML += `<p>Ao todo, temos ${total} númros cadastrados.<p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.<p>`// 17º 
        res.innerHTML += `<p>O menor valor informado foi ${menor}.<p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<p>`// 21º
        res.innerHTML += `<p>A media dos valores digitados ${media}.<p>`
    }
}
