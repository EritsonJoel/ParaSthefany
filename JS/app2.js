

   $('#fadein').click(() =>{
     $('div').fadeIn(2000)
   })
   
   $('#fadei').click(() =>{
    $('header').fadeIn(2000)
  })
   
   


   setInterval(() =>{
    $('h2').fadeOut(500, ()=>{
    $('h2').fadeIn(500)
    })

  } ,1200)





  const si = document.getElementById('si')
  const no = document.getElementById('no')
  const body = document.getElementById('body')
    
    
  si.addEventListener('click' , e =>{
    

        body.style.background = 'white'
        Swal.fire({
            icon: 'success',
            title: 'shii!! gracias ! bb mi amor',
            text: 'no te fallaré!',
          
          })
   
    
    
  })

  no.addEventListener('click', e=>{
    Swal.fire({
        icon: 'error',
        title: 'no! noo..!  :( :(',
        text: 'adiós!',
      
      })
  })