export interface Product {
  id: string;
  name: string;
  price: number;
  sale: number;
  category_id: string;
  imageList: [
    {
      id: string;
      product_id: string;
      url: string;
    }
  ];
  content: string;
  quantity: number;
  kg: number;
  buyed: number;
  status: number;
  create_at: Date;
  modified_at: Date
}
