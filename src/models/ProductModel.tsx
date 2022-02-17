import Model from "./Model";

export default interface ProductModel extends Model {
  thumbnail: string;
  description: string;
  price: string;
}
