import { ProductModel } from "../models";

export const LIST_PRODUCT: ProductModel[] = [
  {
    id: "1",
    thumbnail:
      "https://cdn.cocolux.com//2022/02/images/products/1644546090023-Son-Kem-L%C3%AC-Mac-300x300.jpeg",
    name: "Son Kem Lì",
    description: "Son Kem Lì MAC Powder Kiss Liquid - 987 M-A-CSmash.",
    price: "595 000 đ",
  },
  {
    id: "2",
    thumbnail:
      "https://cdn.cocolux.com//2022/02/images/products/1644567405202-set-qua-tang-2-300x300.jpeg",
    name: "Son Kem Eglips",
    description:
      "Son Kem Eglips Blur Powder Tint - sản phẩm hàng đầu. Soft Coral.",
    price: "1 095 000 đ",
  },
  {
    id: "3",
    thumbnail:
      "https://cdn.cocolux.com//2021/10/images/products/1634262786890-serum-giam-mun-effaclar-serum-la-roche-posay-30ml-300x300.jpeg",
    name: "Kem Dưỡng Trắng",
    description: "Kem Dưỡng Trắng Da Innisfree Jeju Cherry Blossom Tone Up.",
    price: "200 000 đ",
  },
  {
    id: "4",
    thumbnail:
      "https://cdn.cocolux.com//2022/02/images/products/1644543797191-123456-300x300.jpeg",
    name: "Phấn Phủ Bột",
    description: "Phấn Phủ Bột Kiềm Dầu Innisfree No Sebum Mineral Powder 5g.",
    price: "105 000 đ",
  },
];

export const PRODUCT_DEFAULT: ProductModel = {
  id: "0",
  thumbnail:
    "https://cdn.cocolux.com//2022/02/images/products/1644546090023-Son-Kem-L%C3%AC-Mac-300x300.jpeg",
  name: "Sản phẩm",
  description: "Sản phẩm mặc định hiển thị khi có lỗi xảy ra!",
  price: "0 đ",
};
