class Eventos {
    constructor(nome = 'Evento', id = 0, data = ""){
        this.nome = nome;
        this.id = id;
        this.data = data;
    }
}

function carregarEventos(){
  var lEvento = [ new Eventos('Batizado Mestre Kauê', 1, '20/03/2019'), new Eventos('Resistencia Zumbi', 2, '15/05/2019') ];
  return lEvento;
}