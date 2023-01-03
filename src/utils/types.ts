export interface IFormData {
  id: string
  descricao: {
    pt: string
    en: string
  }
  imagem_link: string
  nome: string
  preco: number
}

export interface IUserInterface {
  admin?: boolean;
  authProvider: string;
  id: string;
  name: string;
  uid: string;
}