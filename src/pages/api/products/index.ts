import type { NextApiRequest, NextApiResponse } from "next";
import { LIST_PRODUCT } from "../../../constants";
import { ProductModel } from "../../../models";
import { ResponseType } from "../../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType<ProductModel[]>>
) {
  if (req.method === "GET") {
    res.status(200).json({ code: 0, data: LIST_PRODUCT, message: "Success" });
  } else {
    res.status(200).json({ code: 1, message: "Error" });
  }
}
