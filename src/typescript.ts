// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;
qualquer = "bola";

// Arrays
const lista: number[] = [];
lista.push(11, 12, 22, 13, 13);

// Tipos Personalizados
type Transacao {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0,
}