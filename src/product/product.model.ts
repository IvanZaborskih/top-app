export class ProductModel {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  advantages: string;
  disAdvantages: string;
  categories: string[];
  characteristics: {
    [key: string]: string;
  };
}
