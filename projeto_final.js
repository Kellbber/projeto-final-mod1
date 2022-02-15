const prompt = require("prompt-sync")();
const jogador = [];
const monstroFinal = [];
let min = 10;
let max = 30;
min = Math.ceil(min);
max = Math.floor(max);
function Relatorio() {
  (this.fase = fase),
  (this.nome = jogador.nome),
  (this.classe = jogador.classe),
  (this.dano = jogador.dano),
  (this.vida = jogador.vida),
  (this.escolhaCaminho = escolhaCaminho),
  (this.calculoDeRounds = calculoDeRounds);
}
const relatorio = [];
let objRelatorio = {};
let fase = "";
let escolhaCaminho = "";
let calculoDeRounds = "";
let escolhaUsuario = "";
const javali = {//animal javali
  quantidade: 2,
  vida: 100,
  combateJavalis: () => {
    console.log(`
'       ████████ ██████ ███████████ ████████████     ██    ████████         █████████    █████████    ██ 
'       ███    ███     ██   ███   ███    ███   ██    ██    ███              ███   ███    ███   ███    ██ 
'       ███    ███   ██████████   ███    ███████     ██    ████████         █████████    █████████    ██ 
'  ██   ███    ███    ███   ███   ███    ███   ██     ██  ██     ██    ██   ███   ████  ████   ███    ██ 
'   █████ ██████ ████████   ███████ ████████   ██      ████ ███████     ███████   ██ ████ ██   █████████
                                                                                                         `);
    let vidaDosMonstros = javali.vida * javali.quantidade;
    calculoDeRounds = parseInt(vidaDosMonstros / jogador.dano);
    jogador.vida = parseInt(jogador.vida - calculoDeRounds * 2);
    console.log(
      `Demorou ${parseInt(calculoDeRounds)} rounds para matar os Javalis!`
    );
    jogador.nivel++;
    console.log(`${jogador.nome} passou de nível!`);
    if (jogador.classe == "CAVALEIRO") {
      jogador.classe = "CAVALEIRO INTERMEDIÁRIO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    } else {
      jogador.classe = "MAGO INTERMEDIÁRIO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    }
  },
};
const aves = {//animal aves
  quantidade: 10,
  vida: 20,
  combateAves: () => {
    console.log(`
'       ████████ ██████ ███████████ ████████████     ██    ████████     ███████    ██████████████ 
'       ███    ███     ██   ███   ███    ███   ██    ██    ███         ██   ███    ███    ██      
'       ███    ███   ██████████   ███    ███████     ██    ████████    ████████    ██████ ███████ 
'  ██   ███    ███    ███   ███   ███    ███   ██     ██  ██     ██    ██   ████  ████         ██ 
'   █████ ██████ ████████   ███████ ████████   ██      ████ ███████    ██   ██ ████ █████████████ 
'                                                                                                 `);
    let vidaDosMonstros = aves.vida * aves.quantidade;
    calculoDeRounds = parseInt(vidaDosMonstros / jogador.dano);
    jogador.vida = parseInt(jogador.vida - calculoDeRounds);
    console.log(
      `Demorou ${parseInt(calculoDeRounds)} rounds para matar as Aves!`
    );
    jogador.nivel++;
    console.log(`${jogador.nome} passou de nível!`);
    if (jogador.classe == "CAVALEIRO") {
      jogador.classe = "CAVALEIRO INTERMEDIÁRIO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    } else {
      jogador.classe = "MAGO INTERMEDIÁRIO ";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    }
  },
};
const urso = {//animal urso
  quantidade: 2,
  vida: 150,
  combateUrsos: () => {
    console.log(`
'       ████████ ██████ ███████████ ████████████     ██    ████████    ██    ████████████████████  
'       ███    ███     ██   ███   ███    ███   ██    ██    ███         ██    ███   ███    ██    ██ 
'       ███    ███   ██████████   ███    ███████     ██    ████████    ██    ███████████████    ██ 
'  ██   ███    ███    ███   ███   ███    ███   ██     ██  ██     ██    ██    ███   ██    ███    ██ 
'   █████ ██████ ████████   ███████ ████████   ██      ████ ███████     ████████   ██████████████
`);
    let vidaDosMonstros = urso.vida * urso.quantidade;
    calculoDeRounds = parseInt(vidaDosMonstros / jogador.dano);
    jogador.vida = parseInt(jogador.vida - calculoDeRounds * 2);
    console.log(
      `Demorou ${parseInt(calculoDeRounds)} rounds para matar os Ursos!`
    );
    jogador.nivel++;
    console.log(`${jogador.nome} passou de nível!`);
    if (jogador.classe == "CAVALEIRO INTERMEDIÁRIO") {
      jogador.classe = "CAVALEIRO TEMPLÁRIO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    } else {
      jogador.classe = "MAGO TEMPLÁRIO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    }
  },
};
const tartaruga = {//animal tartaruga
  quantidade: 5,
  vida: 70,
  combateTartarugas: () => {
    console.log(`
'       ████████ ██████ ███████████ ████████████     ██    ████████    █████████████████████████████████████    ████████ █████  
'       ███    ███     ██   ███   ███    ███   ██    ██    ███            ██ ██   ███   ██ ██ ██   ███   ███    ███     ██   ██ 
'       ███    ███   ██████████   ███    ███████     ██    ████████       ██ ████████████  ██ ██████████████    ███   █████████ 
'  ██   ███    ███    ███   ███   ███    ███   ██     ██  ██     ██       ██ ██   ███   ██ ██ ██   ███   ███    ███    ███   ██ 
'   █████ ██████ ████████   ███████ ████████   ██      ████ ███████       ██ ██   ███   ██ ██ ██   ███   ████████ ████████   ██
`);
    let vidaDosMonstros = tartaruga.vida * tartaruga.quantidade;
    calculoDeRounds = parseInt(vidaDosMonstros / jogador.dano);
    jogador.vida = parseInt(jogador.vida - calculoDeRounds * 1);
    console.log(
      `Demorou ${parseInt(calculoDeRounds)} rounds para matar as tartarugas!`
    );
    jogador.nivel++;
    console.log(`${jogador.nome} passou de nível!`);
    if (jogador.classe == "CAVALEIRO INTERMEDIÁRIO") {
      jogador.classe = "CAVALEIRO TEMPLÁRIO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    } else {
      jogador.classe = "MAGO TEMPLÁRIO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    }
  },
};
const escorpiao = {//animal escorpiao
  quantidade: 1,
  vida: 250,
  combateEscorpiao: () => {
    console.log(`
'       ████████ ██████ ███████████ ████████████     ██    ████████    ███████████████████████████████████████████ ██████  
'       ███    ███     ██   ███   ███    ███   ██    ██    ███         ██    ██    ██   ██    ███   ███   ████   ███    ██ 
'       ███    ███   ██████████   ███    ███████     ██    ████████    █████ ████████   ██    ██████████████████████    ██ 
'  ██   ███    ███    ███   ███   ███    ███   ██     ██  ██     ██    ██         ███   ██    ███   ███    ███   ███    ██ 
'   █████ ██████ ████████   ███████ ████████   ██      ████ ███████    ██████████████████████████   ███    ███   ███████
`);
    let vidaDosMonstros = escorpiao.vida * escorpiao.quantidade;
    calculoDeRounds = parseInt(vidaDosMonstros / jogador.dano);
    jogador.vida = parseInt(jogador.vida - calculoDeRounds * 2);
    console.log(
      `Demorou ${parseInt(calculoDeRounds)} rounds para matar o Escorpião!`
    );
    jogador.nivel++;
    console.log(`${jogador.nome} passou de nível!`);
    if (jogador.classe == "CAVALEIRO TEMPLÁRIO") {
      jogador.classe = "CAVALEIRO DE ELITE";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    } else {
      jogador.classe = "MAGO DE ELITE";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    }
  },
};
const tatu = {//animal tatu
  quantidade: 1,
  vida: 400,
  combateTatu: () => {
    console.log(`
'       ████████ ██████ ███████████ ████████████     ██    ████████    ████████████████████    ██ 
'       ███    ███     ██   ███   ███    ███   ██    ██    ███            ██ ██   ██ ██  ██    ██ 
'       ███    ███   ██████████   ███    ███████     ██    ████████       ██ ███████ ██  ██    ██ 
'  ██   ███    ███    ███   ███   ███    ███   ██     ██  ██     ██       ██ ██   ██ ██  ██    ██ 
'   █████ ██████ ████████   ███████ ████████   ██      ████ ███████       ██ ██   ██ ██   ██████ 
`);
    let vidaDosMonstros = tatu.vida * tatu.quantidade;
    calculoDeRounds = parseInt(vidaDosMonstros / jogador.dano);
    jogador.vida = parseInt(jogador.vida - calculoDeRounds * 1);
    console.log(
      `Demorou ${parseInt(calculoDeRounds)} rounds para matar o Tatu!`
    );
    jogador.nivel++;
    console.log(`${jogador.nome} passou de nível!`);
    if (jogador.classe == "CAVALEIRO TEMPLÁRIO") {
      jogador.classe = "CAVALEIRO DE ELITE";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    } else {
      jogador.classe = "MAGO DE ELITE";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    }
  },
};

const guarda = {//guarda
  quantidade: 2,
  vida: 450,
  combateGuarda: () => {
    console.log(`
'       ████████ ██████ ███████████ ████████████     ██    ████████     ████████    ███████████████████ ████████████ 
'       ███    ███     ██   ███   ███    ███   ██    ██    ███         ██     ██    ███   ███   ███   ███   ███      
'       ███    ███   ██████████   ███    ███████     ██    ████████    ██   ████    ███████████████   ██████████████ 
'  ██   ███    ███    ███   ███   ███    ███   ██     ██  ██     ██    ██    ███    ███   ███   ███   ███   ██    ██ 
'   █████ ██████ ████████   ███████ ████████   ██      ████ ███████     ██████ ████████   ███   █████████   ████████
`);
    let vidaDosMonstros = guarda.vida * guarda.quantidade;
    calculoDeRounds = parseInt(vidaDosMonstros / jogador.dano);
    jogador.vida = parseInt(jogador.vida - calculoDeRounds * 3);
    console.log(
      `Demorou ${parseInt(calculoDeRounds)} rounds para matar os Guardas!`
    );
    jogador.nivel++;
    console.log(`${jogador.nome} passou de nível!`);
    if (jogador.classe == "CAVALEIRO DE ELITE") {
      jogador.classe = "CAVALEIRO SUPREMO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    } else {
      jogador.classe = "MAGO SUPREMO";
      console.log(`Recebeu a classe: ${jogador.classe}`);
      jogador.dano++;
      console.log(`Seu dano foi para: ${jogador.dano}`);
    }
  },
};

function arma() {//escolha da Arma
  if (jogador.classe == "CAVALEIRO") {
    return "ESPADA";
  } else {
    return "CAJADO";
  }
}

function escolhaAbrirMochila() {//se usuario escolher abrir mochila
  mochila.abrirMochila();
  if (mochila.pocao > 0) {
    console.log(`Você consumiu uma poção.
MOCHILA: POÇÃO: ${mochila.pocao}`);
    jogador.vida = 200;
  } else if (mochila.pocao <= 0) {
    console.log(`Você consumiu a ultima poção.
MOCHILA: POÇÃO: ${mochila.pocao}`);
  }
}
const mochila = {//mochila
  pocao: 2,
  abrirMochila: () => {
    mochila.pocao--;
  },
};
function boasVindas() {  // inicio1 1

  console.log();
  console.log(`
Bem-vindo, nobre amigo(a)!
E se eu te disesse que você tem o poder de mudar a vida de um.. É.. deixa eu pens...    Ah! De um COELHO?!
Eu me chamo Roberth, sou o protetor da floresta de Grinn. Hoje você decidirá como vai ser a vida do nosso pequeno Coelho...
Ele perdeu sua mãe logo quando criança... A única imagem que lembra daquele dia é a de uma CENOURA GIGANTE saindo de sua casa...
Bom, sem mais delongas, sente-se confortavelmente e vamos nessa!
`);
  console.log(`
(+___/)
(='.'=)
(+___/)
(")_(")`);
  nomeCoelhoUsuario();
}
function nomeCoelhoUsuario() {//nome do usuario
  console.log();
  jogador.nome = prompt("Digite o nome que você deseja para o coelho: ");
  if (jogador.nome.length <= 3) {
    console.log("O nome do coelho precisa ser maior que 3: ");
    nomeCoelhoUsuario();
  } else {
    escolhaCavaleiroMago();
  }
}
function escolhaCavaleiroMago() {//escolha de classe
  console.log();
  jogador.classe = prompt(
    "Digite a escolha de sua classe: [CAVALEIRO] ou [MAGO]: "
  )
    .toUpperCase()
    .trim();
  if (jogador.classe === "CAVALEIRO" || jogador.classe === "MAGO") {
    jogador.dano = Math.floor(Math.random() * (max - min)) + min;
    jogador.nivel = 1;
    jogador.vida = 200;
    fase = "fase inicial";
    objRelatorio = new Relatorio(
      fase,
      jogador.nome,
      jogador.classe,
      jogador.dano,
      parseInt(jogador.vida)
    );
    relatorio.push(objRelatorio);
  } else {
    console.log("Classe diferente de [MAGO] e [CAVALEIRO]");
    escolhaCavaleiroMago();
  }
  atribuicoesIniciais();
}
function atribuicoesIniciais() {// inicio 2
  console.log();
  console.log(`Perfeito! Essa são suas atribuições iniciais:
 NOME: ${jogador.nome}
 CLASSE: ${jogador.classe}
 VIDA: ${jogador.vida}
 DANO: ${jogador.dano}
 NÍVEL: ${jogador.nivel}
 POÇÃO: ${mochila.pocao}`);
  console.log();
  console.log();
  console.log(`FASE - 01`);
  console.log();
  console.log(
    `${
      jogador.nome
    } sai de sua toca, monido com ${arma()} e 2 poções. Agora vai começar a sua caçada!`
  );
  console.log();
  console.log(`Andando pela trilha, ele se depara com a toca das Aves e pelo outro lado o covil dos Javalis!
Agora, meu nobre amigo, vou lhe explicar a situação...

1- se optar pelo caminho das Aves você irá demorar mais, pois são em maior número!
2- se optar pelos Javalis, demorará menos, porém você levará mais dano!`);
}
function escolherCaminhoJavaliAves() {//escolha do usuario de combate - AVES OU JAVALI
  console.log();
  escolhaUsuario = prompt(
    `Qual caminho você escolherá para ${jogador.nome}? [AVES] ou [JAVALI]: `
  )
    .toUpperCase()
    .trim();
  if (escolhaUsuario === "AVES" || escolhaUsuario === "JAVALI") {
    if (escolhaUsuario == "JAVALI") {
      console.log();
      console.log(`[JAVALI]: Quem ousa adentrar nos meus domínios da floresta?
[${jogador.nome}]: Estou aqui para encontrar a Cenoura Gigante! Deixe-me passar!
[JAVALI]: Não me importa os motivos da sua passagem por aqui. É proibida a entrada de qualquer forasteiro nessas terras. Não permitirei que prossiga!
[${jogador.nome}]: Você não me deixa escolha a não ser obrigá-lo a me deixar passar.
[JAVALI]: Então, tente, jovem coelho...`);
      javali.combateJavalis();
      if(jogador.vida>1){
      fase = "fase 1";
      escolhaCaminho = "caminho javali";
      objRelatorio = new Relatorio(
        fase,
        jogador.nome,
        jogador.classe,
        jogador.dano,
        parseInt(jogador.vida),
        escolhaCaminho,
        +javali.calculoDeRounds
      );
      relatorio.push(objRelatorio);
      mochilaAbrirFechar();
      }else{
        console.log(`O ${jogador.nome} não resistiu ao combate...`);
        fase = "fase 1";
        escolhaCaminho = "caminho javali";
        objRelatorio = new Relatorio(
          fase,
          jogador.nome,
          jogador.classe,
          jogador.dano,
          parseInt(jogador.vida),
          escolhaCaminho,
          +javali.calculoDeRounds
        );
        relatorio.push(objRelatorio);
      }
    } else {
      console.log();
      console.log(`[AVES]: Quem ousa adentrar nos nossos domínios da floresta?
[${jogador.nome}]:Estou aqui para encontrar a Cenoura Gigante! Deixe-me passar!
[AVES]: Não me importa os motivos da sua passagem por aqui. É proibida a entrada de qualquer forasteiro nessas terras. Não permitiremos que prossiga.
[${jogador.nome}]: Você não me deixa escolha a não ser obrigá-las a me deixar passar.
[AVES]: Então, tente, jovem coelho...`);
      aves.combateAves();
      if(jogador.vida>1){
      fase = "fase 1";
      escolhaCaminho = "caminho aves";
      objRelatorio = new Relatorio(
        fase,
        jogador.nome,
        jogador.classe,
        jogador.dano,
        parseInt(jogador.vida),
        escolhaCaminho,
        +aves.calculoDeRounds
      );
      relatorio.push(objRelatorio);
      mochilaAbrirFechar();
      }else{
        console.log(`O ${jogador.nome} não resistiu ao combate...`);
        fase = "fase 1";
        escolhaCaminho = "caminho aves";
        objRelatorio = new Relatorio(
          fase,
          jogador.nome,
          jogador.classe,
          jogador.dano,
          parseInt(jogador.vida),
          escolhaCaminho,
          +aves.calculoDeRounds
        );
        relatorio.push(objRelatorio);
      }
    }
  } else {
    console.log("Erro, a escolha precisa ser [AVES] ou [JAVALI]");
    escolherCaminhoJavaliAves();
  }
}
function mochilaAbrirFechar() {//opcao entre abrir mochila ou continuar jornada
  console.log();
  console.log(
    `${jogador.nome} perdeu vida durante a batalha e está com ${parseInt(
      jogador.vida
    )} pontos de vida`
  );
  console.log();
  console.log(
    `Gostaria de usar uma poção para recuperar a vida ou prefere continuar?`
  );
  escolhaUsuario = prompt(`Escolha entre [ABRIR] ou [CONTINUAR]: `)
    .toUpperCase()
    .trim();
  if (escolhaUsuario === "ABRIR" || escolhaUsuario === "CONTINUAR") {
    if (escolhaUsuario == "ABRIR") {
      escolhaAbrirMochila();
    } else {
      console.log();
      console.log(`Você optou por continuar, sendo assim sua vida permanecerá a mesma!`);
      console.log();
    }
  } else {
    console.log("Erro, a escolha precisa ser [ABRIR] ou [CONTINUAR]");
    mochilaAbrirFechar();
  }
}
function escolhaUrsoTartaruga() {//tomada de decisao sobre os animais urso e tartaruga
  console.log();
  console.log(`FASE - 02`);
  console.log();
  console.log(`Continuando sua jornada, ${jogador.nome} chegou em pequena vila, chamada Harvest.
Nessa pequena vila, corria um boato que um monstro com a aparência de uma cenoura gigante estava pelos arredores...
Seguindo o boato, você prefere ir atrás do suposto Urso em forma de cenoura ou a Tartaruga em forma de cenoura?`);
  console.log();
  escolhaUsuario = prompt(`Escolha entre [URSO] ou [TARTARUGA]: `)
    .toUpperCase()
    .trim();
  if (escolhaUsuario === "URSO" || escolhaUsuario === "TARTARUGA") {
    if (escolhaUsuario == "URSO") {
      console.log();
      console.log(`[${jogador.nome}]: Parado, Cenoura Gigante!
[URSO]: Ahn? Como assim? Acho que você está me confundindo com outro ser...
[${jogador.nome}]: Não tente me enganar! Eu sei quem você é e o que você fez! Prepare-se!`);
      urso.combateUrsos();
      if(jogador.vida>1){
      fase = "fase 2";
      escolhaCaminho = "caminho ursos";
      objRelatorio = new Relatorio(
        fase,
        jogador.nome,
        jogador.classe,
        jogador.dano,
        parseInt(jogador.vida),
        escolhaCaminho,
        +urso.calculoDeRounds
      );
      relatorio.push(objRelatorio);
      mochilaAbrirFechar();
      }else{
        console.log(`O ${jogador.nome} não resistiu ao combate...`);
        fase = "fase 2";
        escolhaCaminho = "caminho ursos";
        objRelatorio = new Relatorio(
          fase,
          jogador.nome,
          jogador.classe,
          jogador.dano,
          parseInt(jogador.vida),
          escolhaCaminho,
          +urso.calculoDeRounds
        );
        relatorio.push(objRelatorio);
      }
    } else {
      console.log();
      console.log(`[${jogador.nome}]: Parado, Cenoura Gigante!
[TARTARUGA]: Ahn? Como assim? Acho que você está me confundindo com outro ser...
[${jogador.nome}]: Não tente me enganar! Eu sei quem você é e o que você fez! Prepare-se!`);
      tartaruga.combateTartarugas();
      if(jogador.vida>1){
      fase = "fase 2";
      escolhaCaminho = "caminho tartarugas";
      objRelatorio = new Relatorio(
        fase,
        jogador.nome,
        jogador.classe,
        jogador.dano,
        parseInt(jogador.vida),
        escolhaCaminho,
        +tartaruga.calculoDeRounds
      );
      relatorio.push(objRelatorio);
      mochilaAbrirFechar();
      }else{
        console.log(`O ${jogador.nome} não resistiu ao combate...`);
        fase = "fase 2";
        escolhaCaminho = "caminho tartarugas";
        objRelatorio = new Relatorio(
          fase,
          jogador.nome,
          jogador.classe,
          jogador.dano,
          parseInt(jogador.vida),
          escolhaCaminho,
          +tartaruga.calculoDeRounds
        );
      }
    }
  } else {
    console.log("Erro, escolha precisa ser [URSO] ou [TARTARUGA]");
    escolhaUrsoTartaruga();
  }
}
function escolhaOreoPiraque() {//tomada de decisao sobre as cidades
  console.log();
  console.log(`FASE - 03`);
  console.log();
  console.log(`Após a batalha com o suposto vilão, acabou que era um boato falso...
Desanimado, ${jogador.nome} seguia caminho para a próxima cidade...
De longe, avistou uma placa informando duas cidades: Oreo e Piraquê.
Cada uma das cidades é conhecida pelos seus animais característicos...
Em Oreo, é comum encontrar Escorpião de lava e em Piraquê o famoso Tatu blindado`);
  console.log();
  escolhaUsuario = prompt(`Escolha entre [OREO] ou [PIRAQUE]: `)
    .toUpperCase()
    .trim();
  if (escolhaUsuario === "OREO" || escolhaUsuario === "PIRAQUE") {
    if (escolhaUsuario == "OREO") {
      console.log();
      console.log(`Chegando à cidade de OREO, ${jogador.nome} logo encontrou com o Escorpião.
[${jogador.nome}]: Diga-me, Escorpião. Onde posso encontrar a Cenoura Gigante?
[ESCORPIÃO]: Então é você quem vem derrotando os meus aliados? Não permitirei que passe daqui!`);
      escorpiao.combateEscorpiao();
      if(jogador.vida>1){
      fase = "fase 3";
      escolhaCaminho = "caminho Oreo(escorpião)";
      objRelatorio = new Relatorio(
        fase,
        jogador.nome,
        jogador.classe,
        jogador.dano,
        parseInt(jogador.vida),
        escolhaCaminho,
        +escorpiao.calculoDeRounds
      );
      relatorio.push(objRelatorio);
      if(!mochila.pocao<1){mochilaAbrirFechar()};
      }else{
        console.log(`O ${jogador.nome} não resistiu ao combate...`);
        fase = "fase 3";
        escolhaCaminho = "caminho Oreo(escorpião)";
        objRelatorio = new Relatorio(
          fase,
          jogador.nome,
          jogador.classe,
          jogador.dano,
          parseInt(jogador.vida),
          escolhaCaminho,
          +escorpiao.calculoDeRounds
        );
        relatorio.push(objRelatorio);
      }
    } else {
      console.log();
      console.log(`Chegando à cidade de PIRAQUE, ${jogador.nome} logo encontrou com o Tatu.
[${jogador.nome}]: Diga-me, Tatu. Onde posso encontrar a Cenoura Gigante?
[TATU]: Então é você quem vem derrotando os meus aliados? Não permitirei que passe daqui!`);
      tatu.combateTatu();
      if(jogador.vida>1){
      fase = "fase 3";
      escolhaCaminho = "caminho Piraque(tatu)";
      objRelatorio = new Relatorio(
        fase,
        jogador.nome,
        jogador.classe,
        jogador.dano,
        parseInt(jogador.vida),
        escolhaCaminho,
        +tatu.calculoDeRounds
      );
      relatorio.push(objRelatorio);
      if(!mochila.pocao<1){mochilaAbrirFechar()};
      }else{
        console.log(`O ${jogador.nome} não resistiu ao combate...`);
        fase = "fase 3";
        escolhaCaminho = "caminho Piraque(tatu)";
        objRelatorio = new Relatorio(
          fase,
          jogador.nome,
          jogador.classe,
          jogador.dano,
          parseInt(jogador.vida),
          escolhaCaminho,
          +tatu.calculoDeRounds
        );
        relatorio.push(objRelatorio);
      }
    }
  } else {
    console.log("Erro, escolha precisa ser [OREO] ou [PIRAQUE]");
    escolhaOreoPiraque();
  }
}
function subornoOuLuta() {//tomada de decisao suborno ou luta
  console.log();
  console.log(`FASE - 04`);
  console.log();
  console.log(`Após a batalha, ${jogador.nome} continua seguindo para a capital!
Porém ele não tem o visto de permissão de entrada. Você tem duas opções:

1- usar suas poções como suborno.
2- lutar contra 2 guardas.`);
  console.log();
  escolhaUsuario = prompt(`Escolha entre [SUBORNO] ou [LUTAR]: `)
    .toUpperCase()
    .trim();
  if (escolhaUsuario === "SUBORNO" || escolhaUsuario === "LUTAR") {
    if (escolhaUsuario == "LUTAR") {
      console.log();
      console.log(`[GUARDA-1]: Permissão para passagem, Coelhinho...
[${jogador.nome}]: Não tenho tal permissão, mas preciso passar de qualquer maneira!
[GUARDA-2]: HAHAHA, você que manda aqui agora? Não pode passar!
[${jogador.nome}]: Vocês não me deixam outra escolha...`);
      guarda.combateGuarda();
      if(jogador.vida>1){
      fase = "fase 4";
      escolhaCaminho = "caminho luta guarda";
      objRelatorio = new Relatorio(
        fase,
        jogador.nome,
        jogador.classe,
        jogador.dano,
        parseInt(jogador.vida),
        escolhaCaminho,
        +guarda.calculoDeRounds
      );
      relatorio.push(objRelatorio);
      mochilaAbrirFechar();
      }else{
        console.log(`O ${jogador.nome} não resistiu ao combate...`);
        fase = "fase 4";
        escolhaCaminho = "caminho luta guarda";
        objRelatorio = new Relatorio(
          fase,
          jogador.nome,
          jogador.classe,
          jogador.dano,
          parseInt(jogador.vida),
          escolhaCaminho,
          +guarda.calculoDeRounds
        );
        relatorio.push(objRelatorio);
      }
    } else {
      if (mochila.pocao <= 0) {
        console.log(`Você não possui poções, será obrigado a lutar`);
        guarda.combateGuarda();
        if(jogador.vida>1){
        fase = "fase 4";
        escolhaCaminho = "caminho luta guarda";
        objRelatorio = new Relatorio(
          fase,
          jogador.nome,
          jogador.classe,
          jogador.dano,
          parseInt(jogador.vida),
          escolhaCaminho,
          +guarda.calculoDeRounds
        );
        relatorio.push(objRelatorio);
        }else{
          console.log(`O ${jogador.nome} não resistiu ao combate...`);
          fase = "fase 4";
          escolhaCaminho = "caminho luta guarda";
          objRelatorio = new Relatorio(
            fase,
            jogador.nome,
            jogador.classe,
            jogador.dano,
            parseInt(jogador.vida),
            escolhaCaminho,
            +guarda.calculoDeRounds
          );
          relatorio.push(objRelatorio);
        }
      }
      console.log();
      console.log(`[GUARDA-1]: Permissão para passagem, Coelhinho...
[${jogador.nome}]: Não tenho tal permissão, mas posso ter algo que seja interessante para vocês.
[GUARDA-2]: Hmm... acho que não há mal em aceitarmos um presente por uma permissão, não?`);
      mochila.pocao = 0;
      fase = "fase 4";
      escolhaCaminho = "caminho suborno";
      objRelatorio = new Relatorio(
        fase,
        jogador.nome,
        jogador.classe,
        jogador.dano,
        parseInt(jogador.vida),
        escolhaCaminho,
      );
      relatorio.push(objRelatorio);
    }
  } else {
    console.log("Erro, escolha precisa ser [SUBORNO] ou [LUTAR]");
    subornoOuLuta();
  }
}
function criandoMonstroFinal() {//construção monstro final
  console.log();
  console.log(`*FASE FINAL*

  ${jogador.nome} chega em Emerald, a capital do país!
Só que uma coisa que ele não contava está acontecendo...
O vilão de seus sonhos está atacando a cidade!!!!! Se puxar na sua memória, como ele era?`);
  console.log();
  monstroFinal.nome = prompt("Digite o nome que você deseja para o monstro: ");
  monstroFinal.vida = +prompt("Digite a quantidade de vida do monstro: ");
  console.log();
  if ((monstroFinal.nome.length >3)&&(monstroFinal.vida >0) && (monstroFinal.vida < 600)) {
    console.log(`Depois de puxar na sua memória o monstro ficou assim:   
nome: ${monstroFinal.nome}
vida: ${monstroFinal.vida}`);

console.log();
console.log(`
'       ████████ ██████ ███████████ ████████████     ██    ████████    ██████ ███████████████████    ██████████    █████████      
'       ███    ███     ██   ███   ███    ███   ██    ██    ███         ██   ███    ███    ██         ██    █████   ███   ███      
'       ███    ███   ██████████   ███    ███████     ██    ████████    ████████    ██████████████    █████ ███ ██  █████████      
'  ██   ███    ███    ███   ███   ███    ███   ██     ██  ██     ██    ██   ███    ██    ██    ██    ██    ███  ██ ███   ███      
'   █████ ██████ ████████   ███████ ████████   ██      ████ ███████    ██████ ███████████████████    ██    ███   █████   ████████ 
                                                                                                                                 `);
console.log(`[${jogador.nome}]: ENFIM!!!... ATÉ QUE ENFIM EU LHE ENCONTREI, ${monstroFinal.nome}!
[${monstroFinal.nome}]: Por acaso eu deveria conhecê-lo?`);
console.log();
}
    
 else {
   console.log(`Nome deve ser maior que 3, vida maior que 0 e menor que 600! `);
   criandoMonstroFinal();
                                                                                                                                                                                                                                                         
}
}
function batalhaMonstroFinal() {//monstro final criado
  vidaDosMonstro = monstroFinal.vida;
  calculoDeRounds = parseInt(vidaDosMonstro / jogador.dano);
  jogador.vida = parseInt(jogador.vida - calculoDeRounds * 3);
  if (jogador.vida <= 0) {
    console.log(`
[${jogador.nome}]: Mesmo perdendo eu mereço uma resposta! Me diga ${monstroFinal.nome}, realmente foi você?
[${monstroFinal.nome}]: Infelizmente, ${jogador.nome}, não tive o prazer de desimar a sua família! Até então nem lhe conhecia...`);

  } else {
console.log(`Nas suas últimas palavras, ${monstroFinal.nome} diz: Mas... Mas não fui eu! Eu não lhe conhecia, muito menos a sua mãe!
[${jogador.nome}]: Depois de todo esse tempo, de caçar vários monstros para me vingar... Você me diz que não foi você?`)
    console.log(
      `${jogador.nome} demorou ${parseInt(
        calculoDeRounds
      )} rounds para matar o ${monstroFinal.nome}!
      
CONTINUA...`);
  }
  fase = "fase final";
  escolhaCaminho = `monstro final nome: ${monstroFinal.nome}`;
  objRelatorio = new Relatorio(
    fase,
    jogador.nome,
    jogador.classe,
    jogador.dano,
    parseInt(jogador.vida),
    escolhaCaminho,
    +monstroFinal.calculoDeRounds
  );
  relatorio.push(objRelatorio);
}
function relatorioFinalEndGame() {// relatorio no final do game
  console.table(relatorio);
}

loopExterno: while (true) {//looping
  boasVindas();
  let resposta = "";
  for (x = 0; x < 5; x++) {
    if (jogador.vida < 1) {
      break;
    }
    if (x == 0) {
      escolherCaminhoJavaliAves();
    } else if (x == 1) {
      escolhaUrsoTartaruga();
    } else if (x == 2) {
      escolhaOreoPiraque();
    } else if (x == 3) {
      subornoOuLuta();
    } else if (x == 4) {
      criandoMonstroFinal();
      batalhaMonstroFinal();
    }
  }
  resposta = prompt(`DESEJA REINICIAR O JOGO? [SIM] ou [NAO]? `).toUpperCase().trim();
  if (resposta === "SIM") {
    console.clear();
    relatorioFinalEndGame();
  }else{
      break loopExterno;
  }
}
relatorioFinalEndGame();