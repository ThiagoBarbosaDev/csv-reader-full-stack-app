export interface IPack {
  id: number,
  name: string,
}

export interface IProductPack {
  packId: number,
  productId: number,
  qty: number,
}

export interface IProduct {
  code: number;
  name: string;
  costPrice: number;
  salesPrice: number;
}

export interface ICompletePack extends IProductPack {
  packData: IPack;
  productData: IProduct;
}
