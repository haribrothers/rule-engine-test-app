interface BaseItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export type Item = Partial<BaseItem>;

export interface Items {
  [key:number]: Item
}