import { ICompletePack } from '../interfaces';

// WIP
const getTotalPrice = (data: ICompletePack[]): number =>
  Number(data.reduce(
    (acc: number, curr: ICompletePack): number =>
      acc + curr.qty * curr.productData.salesPrice,
    0,
  ).toFixed(2));

const getTotalCost = (data: ICompletePack[]): number =>
  Number(data.reduce(
    (acc: number, curr: ICompletePack): number =>
      acc + curr.qty * curr.productData.costPrice,
    0,
  ).toFixed(2));

export default { getTotalPrice, getTotalCost };
