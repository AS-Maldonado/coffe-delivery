import { CartItem } from "./CartItem";

export type Delivery = {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  pagamento: string;
  precoItens: number;
  precoTotal: number;
  itens: CartItem[];
};
