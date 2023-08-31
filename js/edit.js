let formData = document.querySelector('form');
const singleContent = new URLSearchParams(window.location.search).get('${id}');

formData.addEventListener('submit', async (e)=>{
    try{
       e.preventDefault() 
      let formInputdata = new FormData(formData)
      formString = Object.fromEntries(formInputdata)
     
let url = `http://localhost:3000/posts/${singleContent}`
      await fetch(url,{
        method:'PATCH',
        body:JSON.stringify(formString),
        headers:{'content-type':'application/json'}
        
      })
window.location = './index.html'
    }catch(error){
        console.log(error)
    }
})