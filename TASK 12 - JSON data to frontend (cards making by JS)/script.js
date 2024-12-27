var arr = [
    {
      name : 'Apaar',
      city : 'Bhopal',
      salary : 10 + " lpa",
    },
    {
      name : 'Akshay',
      city : 'Sagar',
      salary : 8 + " lpa",
    },
    {
      name : 'Aniket',
      city : 'Lucknow',
      salary : 6 + " lpa",
    }
  ]
  
  var sum = ''
  
  arr.forEach(function(elem){
     
    sum += `<div id="box">
          <h1>${elem.name}</h1>
          <h4>${elem.city}</h4>
          <p>salary : ${elem.salary}</p>
      </div>`
  })
  
  var body = document.querySelector('body')
  body.innerHTML = sum