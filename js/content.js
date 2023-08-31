const singleContent = new URLSearchParams(window.location.search).get("id");
console.log(singleContent)
const contentWrapper = document.querySelector(".contentwrapper");

const contentBody = async () => {
  let url = `http://localhost:3000/posts/${singleContent}`;
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    let div = "";

    div += `
    <div class="main-story">
        <img src="${posts.link}" alt="${singleContent}">
        <h4>${posts.title}</h4>
        <p>${posts.text}</p>
        <button class="backbutton">back</button>
    </div>
`;
   


    contentWrapper.innerHTML = div;
    
 const backBtn = document.querySelector('.backbutton')
    backBtn.addEventListener('click', () => {
      window.location = './index.html';
    });


    const btnEdit = document.querySelector(".edit");
    btnEdit.addEventListener("click", () => {
      window.location = "./edit.html";
    });
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", async () => contentBody());
