import { catalogosStore } from '@/stores/catalogos';
import { persistOnStorage } from '@/utilities';

export class CatalogosRepository {

  async findById(id: string): Promise<Catalogo | null> {
    const entry = catalogosStore.find(it => it.id === id);
    
    if (!entry) return null;

    return JSON.parse(JSON.stringify(entry));
  }

  async updateById(id: string, catalogo: Catalogo): Promise<boolean> {
    const entry = catalogosStore.find(it => it.id === id);
    
    if (!entry) return false;
    const index = catalogosStore.indexOf(entry);

    catalogosStore[index] = catalogo;

    persistOnStorage('catalogos', catalogosStore);

    return true;
  }

  async deleteById(id: string): Promise<boolean> {
    const entry = catalogosStore.find(it => it.id === id);
    
    if (!entry) return false;

    const index = catalogosStore.indexOf(entry);

    catalogosStore.splice(index, 1);

    persistOnStorage('catalogos', catalogosStore);
    
    return true;
  }

  async insert(catalogo: Catalogo): Promise<boolean>  {
    catalogosStore.push(catalogo);

    persistOnStorage('catalogos', catalogosStore);

    return true;
  }
}
