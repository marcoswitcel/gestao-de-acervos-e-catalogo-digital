import { retrieveFromStorage } from '@/utilities';
import { reactive } from 'vue'

const initialValues: Produto[] = [{
  title: 'Produto 1',
  description: 'Descrição do produto 1',
  rascunho: false,
  id: 'produto-1',
  foto: null,
}, {
  title: 'Produto 2',
  description: 'Descrição do produto 2',
  rascunho: false,
  id: 'produto-2',
  foto: null,
}, {
  title: 'Produto 3',
  description: 'Descrição do produto 3',
  rascunho: false,
  id: 'produto-3',
  foto: null,
}, {
  title: 'Produto 4',
  description: 'Descrição do produto 4',
  rascunho: false,
  id: 'produto-4',
  foto: null,
}, {
  title: 'Produto 5',
  description: 'Descrição do produto 5',
  rascunho: false,
  id: 'produto-5',
  foto: null,
}, {
  title: 'Produto 6',
  description: 'Descrição do produto 6',
  rascunho: false,
  id: 'produto-6',
  foto: null,
}];

const value = retrieveFromStorage<Produto[]>('produtos');

let currentValue = initialValues;

if (value != null) {
  currentValue = value;
}

export const produtosStore = reactive<Produto[]>(currentValue);
