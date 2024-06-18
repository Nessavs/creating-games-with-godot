const readline = require('readline')

function calculateRank(wins, losses) {

  const winBalance = wins - losses

  let rank;
  if (wins < 10) {
    rank = 'Ferro'
  } else if (wins >= 11 && wins <= 20) {
    rank = 'Bronze'
  } else if (wins >= 21 && wins <= 50) {
    rank = 'Prata'
  } else if (wins >= 51 && wins <= 80) {
    rank = 'Ouro'
  } else if (wins >= 81 && wins <= 90) {
    rank = 'Diamante'
  } else if (wins >= 91 && wins <= 100) {
    rank = 'Lendário'
  } else if (wins >= 101) {
    rank = 'Imortal'
  }

  console.log(`O Herói tem de saldo de ${winBalance} está no nível de ${rank}`)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Insira o número de vitórias: ', (wins) => {
  rl.question('Insira o número de derrotas: ', (losses) => {
    wins = parseInt(wins)
    losses = parseInt(losses)

    calculateRank(wins, losses)

    rl.close()
  })
})
