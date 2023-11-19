
type Produto = {
  title: string;
  description: string | null | undefined;
  rascunho: boolean;
  id: string;
  foto: string | null | undefined;
}

type Catalogo = {
  title: string;
  description?: string;
  publicado: boolean;
  id: string;
  itens: Produto[];
}
