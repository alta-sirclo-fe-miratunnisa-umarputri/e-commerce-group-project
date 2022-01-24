interface User {
  id: number;
  username: "";
}

export interface Product {
  category_id: number;
  deskripsi: string;
  gambar: string;
  harga: number;
  id: number;
  name: string;
  stock: number;
  user: User;
}
