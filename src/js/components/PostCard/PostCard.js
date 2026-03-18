import { generateHTML, toggleLike, formatLikes } from "./utils.js";

export default function PostCard(root, post) {
  let state = {
    isLiked: false,
    likes: post.likes,
  };

  root.innerHTML = generateHTML(post);

  const imgEl = root.querySelector("[data-img]");
  const likeBtn = root.querySelector("[data-like]");
  const likesEl = root.querySelector("[data-likes]");

  imgEl.addEventListener("dblclick", handleLikeClick);
  likeBtn.addEventListener("click", handleLikeClick);

  function handleLikeClick() {
    state = toggleLike(state);

    renderLike();
  }

  function renderLike() {
    likesEl.textContent = formatLikes(state.likes);
  }
}
