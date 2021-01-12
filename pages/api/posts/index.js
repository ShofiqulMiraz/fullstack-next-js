import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/Postmodel";
import { APIFeature } from "../../../utils/apiFeature";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const features = new APIFeature(Post.find(), req.query)
          .filter()
          .sort()
          .limitFields()
          .paginate();
        const posts = await features.query;
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const post = await Post.create(req.body);
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
