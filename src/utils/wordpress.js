export const getAllSlugsForPostType = (postType = "posts") => {
  return new Promise((resolve, reject) => {
    const state = {
      posts: [],
      baseUrl: `${import.meta.env.PUBLIC_API_URL}/${postType}?status='publish'`,
      perPage: "&per_page=10",
    };

    async function fetchPosts(numPages) {
      for (let page = 1; page <= numPages; page += 1) {
        const post = await fetch(
          `${state.baseUrl}${state.perPage}&page=${page}&_fields=slug`
        );

        const pagePostData = await post.json();

        pagePostData.forEach((post) => {
          state.posts.push(post.slug);
        });
      }

      return true;
    }

    getNumPages(postType, 10)
      .then((numPosts) => fetchPosts(numPosts))
      .then(() => {
        resolve(state.posts);
      })
      .catch((e) => reject(new Error(e)));
  });
};

export async function getNumPages(postType = "posts", perPage = 10) {
  const { headers } = await fetch(
    `${
      import.meta.env.PUBLIC_API_URL
    }/${postType}?status='publish'&per_page=${perPage}`
  );

  return parseInt(headers.get("x-wp-totalpages"));
}
