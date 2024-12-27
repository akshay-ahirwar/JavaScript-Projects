var arr = [
{
    dp : "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status : "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username : "Justin",
    time : 10  + " min ago",
},
{
    dp : "https://images.unsplash.com/photo-1578067141755-c40d45e10124?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status : "https://images.unsplash.com/photo-1578067141755-c40d45e10124?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username : "LISA",
    time : 50  + " min ago",

},
{
    dp : "https://images.unsplash.com/photo-1530981785497-a62037228fe9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status : "https://images.unsplash.com/photo-1530981785497-a62037228fe9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username : "Scarlett",
    time : 2  + " hr ago",

},
{
    dp :"https://images.unsplash.com/photo-1654772423141-0d4bbca75172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGN1dGUlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
    status : "https://images.unsplash.com/photo-1654772423141-0d4bbca75172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGN1dGUlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
    username : "Kylie",
    time : 10 +" : " + 45 + " A M",
},
{
    dp : "https://images.unsplash.com/flagged/photo-1557609713-c01702d79ec9?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status : "https://images.unsplash.com/flagged/photo-1557609713-c01702d79ec9?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username : "DIDO",
    time : "Yesterday",
    
},
]
  
  var sum = ''
  
  arr.forEach(function(elem,idx){
    
    sum = sum + `<div class="status" id=${idx}>
    <img src=${elem.dp} alt="">
    <div class="status-in">
        <h4>${elem.username}</h4>
        <h6>${elem.time}</h6>
    </div>
  </div>`
  })
  
  var allStatus = document.querySelector('#allStatus')
  var full = document.querySelector('#full')
  
  allStatus.innerHTML = sum
  
  allStatus.addEventListener('click',function(dets){
    var gold = arr[dets.target.id]
  
    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`
  
    setTimeout(function(){
    full.style.display = 'none'
  
    },3000)
  })