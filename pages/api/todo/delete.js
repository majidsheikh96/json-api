import { deleteTodo } from "./list";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    let { id } = req.query;
    deleteTodo(id);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ msg: "todo deleted" });
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(400).json({ msg: "invalid request method" });
  }
}
