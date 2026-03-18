function generateHTML(post) {
  return `<article class="post-card">
              <header class="post-card__header container">
                <img
                  class="post-card__avatar"
                  src="${post.avatar}"
                  alt="${post.name} avatar"
                />
                <div class="post-card__header-info">
                  <h3 class="post-card__name">${post.name}</h3>
                  <p class="post-card__location">${post.location}</p>
                </div>
              </header>

              <img
                class="post-card__main-img"
                src="${post.post}"
                alt=""
                data-img
              />

              <div class="post-card__content container">
                <div class="post-card__actions">
                  <button class="post-card__action" aria-label="Like" data-like>
                    <img
                      class="post-card__action-img"
                      src="./images/icon-heart.png"
                      alt=""
                    />
                  </button>
                  <button class="post-card__action" aria-label="Comment">
                    <img
                      class="post-card__action-img"
                      src="./images/icon-comment.png"
                      alt=""
                    />
                  </button>
                  <button class="post-card__action" aria-label="Direct message">
                    <img
                      class="post-card__action-img"
                      src="./images/icon-dm.png"
                      alt=""
                    />
                  </button>
                </div>
                <p class="post-card__likes" data-likes>${formatLikes(
                  post.likes
                )}</p>
                <p class="post-card__text">
                  <span class="post-card__text-user">${
                    post.username
                  }</span>just took
                  a few mushrooms lol
                </p>
              </div>
            </article>`;
}

function toggleLike(state) {
  return {
    ...state,
    isLiked: !state.isLiked,
    likes: state.isLiked ? state.likes - 1 : state.likes + 1,
  };
}

function formatLikes(likes) {
  return likes === 1 ? `${likes} like` : `${likes} likes`;
}

export { generateHTML, toggleLike, formatLikes };
