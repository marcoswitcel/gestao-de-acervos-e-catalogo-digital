import { reactive } from 'vue'

export const produtosStore = reactive<Produto[]>([{
  title: 'Produto 1',
  description: 'Descrição do produto 1',
  rascunho: false,
  id: 'asd-asd-asd',
  foto: null,
  }, {
    title: 'Produto 2',
    description: 'Descrição do produto 2',
    rascunho: false,
    id: 'asd-222-asd',
    foto: null,
  }
]);
