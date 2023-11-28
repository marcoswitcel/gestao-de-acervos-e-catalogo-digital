import { $api } from '@/utilities/api';

export class CatalogosRepository {

  async getAll(): Promise<Catalogo[]> {
    const response = await $api.get<Catalogo[]>('api/v1/catalogs/');
    return response.data;
  }

  async findById(id: string): Promise<Catalogo | null> {
    const response = await $api.get<Catalogo|null>('api/v1/catalogs/' + id);
    
    if (!response.data) return null;
  
    return response.data;
  }

  async updateById(id: string, catalogo: Catalogo): Promise<boolean> {
    const response = await $api.get<Catalogo|null>('api/v1/catalogs/' + id);
    
    if (!response.data) return false;

    const updatedReponse = await $api.patch<Catalogo>('api/v1/catalogs/' + id, catalogo);

    return !!updatedReponse.data;
  }

  async deleteById(id: string): Promise<boolean> {
    const response = await $api.delete<Catalogo|null>('api/v1/catalogs/' + id);
    
    if (!response.data) return false;

    // @note tratar retorno
    await $api.delete<Catalogo>('api/v1/catalogos/' + id);

    return true;
  }

  async insert(catalogo: Catalogo): Promise<boolean>  {
    
    const createResponse = await $api.post<Produto>('api/v1/catalogs/', catalogo);

    return !!createResponse.data;
  }
}
