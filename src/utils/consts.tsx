import Icon from "./IconChoice";

export const HOME_NAV_LABELS = ["Home", "Produtos", "Contato", "Sobre"];
export const HOME_NAV_ICONS = [<Icon name="user"/>, <Icon name="search"/>, <Icon name="cart"/>]

export const fields = {
  produtos: [
    {
      scope: '',
      name: 'nome', 
      type: 'text', 
      placeholder: 'Nome'
    },
    {
      scope: '',
      name: 'preco', 
      type: 'number', 
      placeholder: 'Preço'
    },
    {
      scope: 'descricao',
      name: 'pt', 
      type: 'text', 
      placeholder: 'Descrição PT-BR'
    },
    {
      scope: 'descricao',
      name: 'en', 
      type: 'text', 
      placeholder: 'Descrição EN'
    },
    {
      scope: '',
      name: 'imagem_link', 
      type: 'text', 
      placeholder: 'Link da Imagem'
    }
  ],
  cartoes: [
    {
      scope: '',
      name: 'card_number', 
      type: 'text', 
      placeholder: 'Nº do Cartão'
    },
    {
      scope: '',
      name: 'valid_tru', 
      type: 'text', 
      placeholder: 'Data de Validade'
    },
    {
      scope: '',
      name: 'verify_digit', 
      type: 'number', 
      placeholder: 'Dígito verificador'
    },
    {
      scope: '',
      name: 'user_cpf', 
      type: 'text', 
      placeholder: 'CPF do Propietário'
    }
  ],
  
}
 