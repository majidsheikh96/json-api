import { addTodo } from "./list";

export default function handler(req, res) {
  if (req.method === "POST") {
    let { name: todo } = JSON.parse(req.body);
    addTodo(todo);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ msg: "todo added" });
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(400).json({ msg: "invalid request method" });
  }
}
