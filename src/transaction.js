class Transacao {
    constructor(envio, recebimento, valor) {
      this.envio = envio;
      this.recebimento = recebimento;
      this.valor = valor;
      this.timestamp = Date.now();
    }
  
    /* Stringfying and Parser functions */ 
  }
  
  module.exports = Transacao;