import { catalogosStore } from '@/stores/catalogos';

export class CatalogosRepository {

  async findById(id: string): Promise<Catalogo | null> {
    const entry = catalogosStore.find(it => it.id === id);
    
    if (!entry) return null;

    return entry;
  }

  async deleteById(id: string): Promise<boolean> {
    const entry = catalogosStore.find(it => it.id === id);
    
    if (!entry) return false;

    const index = catalogosStore.indexOf(entry);

    catalogosStore.splice(index, 1);
    
    return true;
  }

  async insert(catalogo: Catalogo): Promise<boolean>  {
    catalogosStore.push(catalogo);
    return true;
  }
}
