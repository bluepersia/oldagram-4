import PostCard from "../PostCard/PostCard.js";

export default function MainFeed(root, data) {
  for (let i = 0; i < data.length; i++) {
    const liEl = document.createElement("li");
    liEl.className = "main-feed__item";
    PostCard(liEl, data[i]);
    root.append(liEl);
  }
}
