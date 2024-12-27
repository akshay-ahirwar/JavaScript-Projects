const users = [
    {
      profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Passionate traveler and food lover sharing unique experiences.",
      username: "wanderlust123",
      fullName: "Aarav Sharma",
      mediaUploadedCount: 120,
      followersCount: 4500,
      followingCount: 320,
      coverPhoto1: "https://images.unsplash.com/photo-1684061578510-80d12e70d1ee?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverPhoto2 : "https://images.unsplash.com/photo-1733513457725-62877d1cd787?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTl8fHxlbnwwfHx8fHw%3D",
      coverPhoto3 : "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxicmlnaHQlMjBjb2xvcnMlMjBob3Jpem9udGFsfGVufDB8fDB8fHww"

    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=2506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Tech geek and gadget reviewer with honest opinions.",
      username: "techGuru",
      fullName: "Ishita Patel",
      mediaUploadedCount: 85,
      followersCount: 8700,
      followingCount: 250,
      coverPhoto1: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverPhoto2 :"https://images.unsplash.com/photo-1734035989543-1eef4cd1a1b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
      coverPhoto3 : "https://images.unsplash.com/photo-1732762990635-a713a09e9025?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTR8fHxlbnwwfHx8fHw%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Fitness enthusiast inspiring a healthy lifestyle daily.",
      username: "fitLife",
      fullName: "Rohan Mehta",
      mediaUploadedCount: 150,
      followersCount: 12000,
      followingCount: 180,
      coverPhoto1: "https://images.unsplash.com/photo-1680536425297-59f8a22e4a76?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverPhoto2 : "https://images.unsplash.com/photo-1733597572690-0510c968ca20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDd8fHxlbnwwfHx8fHw%3D",
      coverPhoto3 : "https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGJyaWdodCUyMGNvbG9ycyUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Artist showcasing creativity through vibrant artworks and sketches.",
      username: "artisticSoul",
      fullName: "Ananya Singh",
      mediaUploadedCount: 60,
      followersCount: 6000,
      followingCount: 300,
      coverPhoto1: "https://images.unsplash.com/photo-1684001162075-54901abdaa25?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverPhoto2 : "https://images.unsplash.com/photo-1501534664411-d04203736d05?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxicmlnaHQlMjBjb2xvcnMlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
      coverPhoto3 : "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxicmlnaHQlMjBjb2xvcnMlMjBob3Jpem9udGFsfGVufDB8fDB8fHww"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Photographer capturing moments that tell captivating stories.",
      username: "lensMaster",
      fullName: "Kabir Das",
      mediaUploadedCount: 200,
      followersCount: 15000,
      followingCount: 400,
      coverPhoto1: "https://images.unsplash.com/photo-1680539593018-1bab59cafc8f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverPhoto2 : "https://images.unsplash.com/photo-1514542124776-b1401b7dd173?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxicmlnaHQlMjBjb2xvcnMlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
      coverPhoto3 : "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJyaWdodCUyMGNvbG9ycyUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Bookworm sharing reviews and literary adventures online.",
      username: "readersHaven",
      fullName: "Priya Kapoor",
      mediaUploadedCount: 40,
      followersCount: 3000,
      followingCount: 150,
      coverPhoto1: "https://images.unsplash.com/photo-1695311510443-a616195bec72?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverPhoto2 : "https://plus.unsplash.com/premium_photo-1733760125513-f7a3171dc79a?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverPhoto3 : "https://images.unsplash.com/photo-1507603103250-564d0c9b6778?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxicmlnaHQlMjBjb2xvcnMlMjBob3Jpem9udGFsfGVufDB8fDB8fHww"
    }
  ];

  var sum = ''

  users.forEach(function(elem){
    sum += `<div id="box">
            <div id="upperimgs">
              <img
                id="img1"
                src="${elem.coverPhoto1}"
                alt=""
              />
              <img
                id="img2"
                src="${elem.coverPhoto2}"
                alt=""
              />
              <img
                id="img3"
                src="${elem.coverPhoto3}"
                alt=""
              />
            </div>
            <div id="profilepic">
              <img
                id="dp"
                src="${elem.profilePhoto}"
                alt=""
              />
              <div id="icon">
                <i class="ri-more-fill"></i>      
              </div>
            </div>
      
            <div id="part2">
              <div id="details">
                <h4>${elem.username}</h4>
                <h6>${elem.fullname}</h6>
                <h6>${elem.description}</h6>
              </div>
            </div>
            <div id="part3">
              <div id="nums">
                <h4>${elem.mediaUploadedCount}</h4>
                <h4>${elem.followersCount}</h4>
                <h4>${elem.followingCount}</h4>
              </div>
              <div id="mff">
                <h6>Media</h6>
                <h6>Followers</h6>
                <h6>Following</h6>
              </div>
            </div>
          </div>`
  })
  
   var body = document.querySelector('body')
   body.innerHTML= sum