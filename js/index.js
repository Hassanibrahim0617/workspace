const mainDiv = document.querySelector('.left');
let fetchUrl = `http://localhost:3000/posts`;

const postBlog = async ()=>{
    try{
const response = await fetch(fetchUrl)
const postBlog =await response.json()

let elem = '';
postBlog.forEach(post => {
    let {id, title, text, link } = post;
    console.log(post)
    elem += `
    
    <div class="main-div">
    <img src="${link}" alt="${title}">
  <div>
    <h4>${title}</h4>
    <p>${text.slice(0, 50)}...</p>
    <a href="./content.html?id=${id}"><button>read more</button></a>
  </div>
</div>
    `

    

    
});
mainDiv.innerHTML = elem;

const btnCreate = document.querySelector('.create')
btnCreate.addEventListener('click', ()=>{
    window.location = './create.html';
});


// const btnDelete = document.querySelector('.delete')
// btnCreate.addEventListener('click', ()=>{
//     window.location = './create.html';
// })

    }catch(error){
        console.log(error)
    }
}

window.addEventListener('DOMContentLoaded', async ()=> postBlog())