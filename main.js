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
 
// Retorne apenas as clientes **mulheres**
 
db.dadosBancarios.aggregate([{
    $match: {
        sexo: "F"
    }
}])
 
// // Retorne apenas os clientes **homens**
 
db.dadosBancarios.aggregate([{
    $match: {
        sexo: "M"
    }
}])
 
// Quem é a pessoa mais rica da tabela?
 
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
 
// Quem é a pessoa mais pobre?
 
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
 
// Qual a **média** de saldo de todas as pessoas da tabela?
 
db.dadosBancarios.aggregate([
    {
        $group: {
            _id: null,
            mediaSaldo: { $avg: "$saldo"}
        }
    }
])
 
// Qual a **média** de saldo das mulheres?
 
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
 
// Qual a **média** de saldo dos homens?
 
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
 
// **Somando** todos os saldos bancários, temos quantos reais?
 
db.dadosBancarios.aggregate([
    {
        $group: {
            _id:null,
            somaSaldo:{$sum:"$saldo"}
        }
    }
])
 
// **Somando** o saldo **onde** o sexo é igual á M temos quantos reais?
 
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
 
// **Somando** o saldo **onde** o sexo é igual á F temos quantos reais?
 
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
