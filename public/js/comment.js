const postId = window.location.toString().split("/")[4];
console.log(postId);

const commentFormHandler = async function (event) {
  event.preventDefault();

  // const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;
  // wrapped in one data set. All info will be availble to the server
  if (body) {
    await fetch(`/api/comment/${parseInt(postId)}`, {
      method: "POST",
      body: JSON.stringify({
        postId,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
