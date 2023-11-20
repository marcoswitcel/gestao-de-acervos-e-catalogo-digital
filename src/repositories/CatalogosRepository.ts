import { catalogosStore } from '@/stores/catalogos';

export class CatalogosRepository {

  async deleteById(id: string): Promise<boolean> {
    const entry = catalogosStore.find(it => it.id === id);
    
    if (!entry) return false;

    const index = catalogosStore.indexOf(entry);

    catalogosStore.splice(index, 1);
    
    return true;
  }
}
