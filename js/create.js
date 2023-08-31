let formData = document.querySelector('form')

formData.addEventListener('submit', async (e)=>{
    try{
       e.preventDefault() 
      let formInputdata = new FormData(formData)
      formString = Object.fromEntries(formInputdata)
     

      await fetch(`http://localhost:3000/posts`,{
        method:'POST',
        body:JSON.stringify(formString),
        headers:{'content-type':'application/json'}
      })

      window.location = './index.html';

    }catch(error){
        console.log(error)
    }
})
