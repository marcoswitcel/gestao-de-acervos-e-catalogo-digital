import { retrieveFromStorage } from '@/utilities';
import { reactive } from 'vue'

const initialValues: Catalogo[] = [{
  title: 'Catálogo 1',
  description: 'Descrição do Catálogo 1',
  publicado: false,
  id: 'catalogo-1',
  itens: [],
}, {
  title: 'Produto 2',
  description: 'Descrição do produto 2',
  publicado: false,
  id: 'catalogo-2',
  itens: [],
}, {
  title: 'Produto 3',
  description: 'Descrição do produto 3',
  publicado: true,
  id: 'catalogo-3',
  itens: [],
},{
  title: 'Catálogo 4',
  description: 'Descrição do Catálogo 4',
  publicado: false,
  id: 'catalogo-4',
  itens: [],
}, {
  title: 'Produto 5',
  description: 'Descrição do produto 5',
  publicado: true,
  id: 'catalogo-5',
  itens: [],
}, {
  title: 'Produto 6',
  description: 'Descrição do produto 6',
  publicado: false,
  id: 'catalogo-6',
  itens: [],
}]

const value = retrieveFromStorage<Catalogo[]>('catalogos');

let currentValue = initialValues;

if (value != null) {
  currentValue = value;
}


export const catalogosStore = reactive<Catalogo[]>(currentValue);

