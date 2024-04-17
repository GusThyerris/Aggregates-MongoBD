<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=03bb85&height=180&section=header&animation=twinkling"/>

# Dados Bancários

Este repositório contém um conjunto de comandos e consultas para manipular e analisar dados bancários usando MongoDB.

# Como executar

Para executar esse código, você precisa ter o MongoDB instalado na sua máquina. Em seguida, basta abrir o shell do MongoDB e colar o código no console.

Lembre-se de substituir os valores conforme necessário para atender aos requisitos do seu projeto.

## Inserção de Dados

Os dados bancários foram inseridos na coleção `dadosBancarios` com o seguinte código:

```javascript

use dadosBancarios
db.dadosBancarios.insertMany([
    {cliente: "Paulo", idade: 15, sexo:"M", saldo: 5000, score: 300 },
    {cliente: "Maria", idade: 28, sexo: "F", saldo: 8000, score: 600},
    {cliente: "João", idade: 42, sexo: "M", saldo: 15000, score: 750},
    {cliente: "Ana", idade: 35, sexo: "F", saldo: 6200, score: 450},
    {cliente: "Carlos", idade: 50, sexo: "M", saldo: 32000, score: 720},
    {cliente: "Lúcia", idade: 29, sexo: "F", saldo: 9500, score: 580},
    {cliente: "Rafael", idade: 23, sexo: "M", saldo: 2700, score: 400},
    {cliente: "Isabel", idade: 38, sexo: "F", saldo: 11500, score: 620},
    {cliente: "Gustavo", idade: 31, sexo: "M", saldo: 7600, score: 530},
    {cliente: "Fernanda", idade: 27, sexo: "F", saldo: 4800, score: 360},
    {cliente: "Pedro", idade: 45, sexo: "M", saldo: 21000, score: 670},
    {cliente: "Camila", idade: 32, sexo: "F", saldo: 6400, score: 510},
    {cliente: "Lucas", idade: 39, sexo: "M", saldo: 14500, score: 690},
    {cliente: "Mariana", idade: 26, sexo: "F", saldo: 5300, score: 420},
    {cliente: "André", idade: 33, sexo: "M", saldo: 9400, score: 560},
    {cliente: "Beatriz", idade: 41, sexo: "F", saldo: 17700, score: 710},
    {cliente: "Eduardo", idade: 30, sexo: "M", saldo: 6800, score: 470},
    {cliente: "Patrícia", idade: 37, sexo: "F", saldo: 10300, score: 590},
    {cliente: "Marcelo", idade: 44, sexo: "M", saldo: 28900, score: 790},
    {cliente: "Vitória", idade: 28, sexo: "F", saldo: 7600, score: 530},
    {cliente: "Ricardo", idade: 36, sexo: "M", saldo: 12800, score: 640},
    {cliente: "Juliana", idade: 29, sexo: "F", saldo: 6100, score: 480}
])

````

## Consultas

### Filtragem por gênero

#### Clientes mulheres

A coleção `dadosBancarios` retornou apenas os clientes que são mulheres com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([{
    $match: {
        sexo: "F"
    }
}])

````

#### Clientes homens

A coleção `dadosBancarios` retornou apenas os clientes que são homens com o seguinte código:

```javascript

// Retorne apenas os clientes **homens**
 
db.dadosBancarios.aggregate([{
    $match: {
        sexo: "M"
    }
}])

````

### Análise de saldo

#### Cliente mais rico

A coleção `dadosBancarios` retornou apenas o cliente mais rico com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([
    {
        $sort: {
            saldo: -1
        }
    },
    {
            $limit: 1
    }
])

````

#### Cliente mais pobre

A coleção `dadosBancarios` retornou apenas o cliente mais pobre com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([
    {
        $sort: {
            saldo: 1
        }
    },
    {
            $limit: 1
    }
])
 
````

### Média de saldo

#### Média de saldo de todas as pessoas

A coleção `dadosBancarios` retornou a média de saldo de todas as pessoas com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([
    {
        $group: {
            _id: null,
            mediaSaldo: { $avg: "$saldo"}
        }
    }
])
 
````

#### Média de saldo das mulheres

A coleção `dadosBancarios` retornou a média de saldo das mulheres com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([
    {
        $match: {
            sexo:"F"
        }
    },
    {
        $group: {
            _id:null,
            mediaMulher:{$avg:"$saldo"}
        }
    } 
])
 
````

#### Média de saldo dos homens

A coleção `dadosBancarios` retornou a média de saldo dos homens com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([
    {
        $match: {
            sexo:"M"
        }
    },
    {
        $group: {
            _id:null,
            mediaHomens:{$avg:"$saldo"}
        }
    }
])
 
````

### Somatório de saldos

#### Total de saldos bancários

A coleção `dadosBancarios` retornou o total dos saldos bancários com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([
    {
        $group: {
            _id:null,
            somaSaldo:{$sum:"$saldo"}
        }
    }
])
 
````

#### Soma dos saldos onde o sexo é masculino

A coleção `dadosBancarios` retornou a soma dos saldos onde o sexo é masculino com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([
    {
        $match: {
            sexo:"M"
        }
    },
    {
        $group: {
            _id:null,
            somaSaldoHomens:{$sum:"$saldo"}
        }
    }
])
 
````

#### Soma dos saldos onde o sexo é feminino

A coleção `dadosBancarios` retornou a soma dos saldos onde o sexo é feminino com o seguinte código:

```javascript
 
db.dadosBancarios.aggregate([
    {
        $match: {
            sexo:"F"
        }
    },
    {
        $group: {
            _id:null,
            somaSaldoMulheres:{$sum:"$saldo"}
        }
    }
])
 
````

## Resumo do projeto

Esse é um guia básico para consultas e análises iniciais dos dados bancários. Sinta-se à vontade para explorar e adaptar conforme suas necessidades!. Este arquivo README.md fornece uma visão geral do código, incluindo uma descrição do que ele faz, o código em si e instruções sobre como executá-lo. Ele também inclui um [link para a documentação do MongoDB](https://www.mongodb.com/docs/) para referência adicional.

