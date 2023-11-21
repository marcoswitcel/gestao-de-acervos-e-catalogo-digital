import { produtosStore } from '@/stores/produtos';
import { persistOnStorage } from '@/utilities';

export class ProdutosRepository {

  async findById(id: string): Promise<Produto | null> {
    const entry = produtosStore.find(it => it.id === id);
    
    if (!entry) return null;

    return JSON.parse(JSON.stringify(entry));
  }

  async updateById(id: string, produto: Produto): Promise<boolean> {
    const entry = produtosStore.find(it => it.id === id);
    
    if (!entry) return false;
    const index = produtosStore.indexOf(entry);

    produtosStore[index] = produto;

    persistOnStorage('produtos', produtosStore);

    return true;
  }


  async deleteById(id: string): Promise<boolean> {
    const entry = produtosStore.find(it => it.id === id);
    
    if (!entry) return false;

    const index = produtosStore.indexOf(entry);

    produtosStore.splice(index, 1);

    persistOnStorage('produtos', produtosStore);
    
    return true;
  }

  async insert(produto: Produto): Promise<boolean>  {
    produtosStore.push(produto);

    persistOnStorage('produtos', produtosStore);

    return true;
  }
}
