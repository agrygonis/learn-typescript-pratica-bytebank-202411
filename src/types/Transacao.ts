import { TipoTransacao } from "./TipoTransacao.js";

export type Transação = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}