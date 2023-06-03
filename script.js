fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((element) => {
      document.getElementById("post-container").innerHTML += `
      <div id="post-container__inner">
      <div id="post-container__title"><span class="post-container__style-text">Заголовок:</span> ${element.title}</div>
      <div id="post-container__text"><span class="post-container__style-text">Текст:</span> ${element.body}</div>
      </div>`;
    });
  });
