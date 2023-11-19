import { reactive } from 'vue'

export const catalogosStore = reactive<Catalogo[]>([{
  title: 'Produto 1',
  description: 'Descrição do produto 1',
  publicado: false,
  id: 'asd-asd-asd',
  itens: [],
  }, {
    title: 'Produto 2',
    description: 'Descrição do produto 2',
    publicado: false,
    id: 'asd-222-asd',
    itens: [],
  }
]);
