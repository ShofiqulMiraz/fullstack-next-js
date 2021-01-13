import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/Postmodel";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const post = await Post.findById(id);
        if (!post) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      res.status(400).json({ success: false });
      break;

    case "DELETE" /* Delete a model by its ID */:
      res.status(400).json({ success: false });
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
