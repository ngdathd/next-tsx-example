import type { NextApiRequest, NextApiResponse } from "next";
import { LIST_PRODUCT } from "../../../constants";
import { ProductModel } from "../../../models";
import { ResponseType } from "../../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType<ProductModel>>
) {
  const product = LIST_PRODUCT.find(
    (product) => product.id == req.query.productId
  );
  if (product) {
    res.status(200).json({ code: 0, data: product, message: "Success" });
  } else {
    res.status(200).json({ code: 1, message: "Error" });
  }
}
