import { produtosStore } from '@/stores/produtos';

export class ProdutosRepository {

  async findById(id: string): Promise<Produto | null> {
    const entry = produtosStore.find(it => it.id === id);
    
    if (!entry) return null;

    return entry;
  }

  async deleteById(id: string): Promise<boolean> {
    const entry = produtosStore.find(it => it.id === id);
    
    if (!entry) return false;

    const index = produtosStore.indexOf(entry);

    produtosStore.splice(index, 1);
    
    return true;
  }

  async insert(produto: Produto): Promise<boolean>  {
    produtosStore.push(produto);
    return true;
  }
}
