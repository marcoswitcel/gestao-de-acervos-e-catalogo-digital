import { $api } from '@/utilities/api';


export class ProdutosRepository {

  async getAll(): Promise<Produto[]> {
    const response = await $api.get<Produto[]>('api/v1/products/');
    return response.data;
  }

  async findById(id: string): Promise<Produto | null> {
    const response = await $api.get<Produto|null>('api/v1/products/' + id);
    
    if (!response.data) return null;
  
    return response.data;
  }

  async updateById(id: string, produto: Produto): Promise<boolean> {
    const response = await $api.get<Produto|null>('api/v1/products/' + id);
    
    if (!response.data) return false;

    const updatedReponse = await $api.patch<Produto>('api/v1/products/' + id, produto);

    return !!updatedReponse.data;
  }


  async deleteById(id: string): Promise<boolean> {
    const response = await $api.get<Produto|null>('api/v1/products/' + id);
    
    if (!response.data) return false;

    // @note tratar retorno
    await $api.delete<Produto>('api/v1/products/' + id);

    return true;
  }

  async insert(produto: Produto): Promise<boolean>  {
    
    const createResponse = await $api.post<Produto>('api/v1/products/', produto);

    return !!createResponse.data;
  }
}
