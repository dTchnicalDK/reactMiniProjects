export function homeController(req, res) {
  res.send("welcome to page home");
}

export function aboutController(req, res) {
  res.status(200).json({ msg: "welcome to about page" });
}
