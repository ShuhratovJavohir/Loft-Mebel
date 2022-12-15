import {products} from "../../../app/utils/data";

export default function handler(req, res) {
    res.status(200).json(products.find(product => product._id == req.query.id))
}