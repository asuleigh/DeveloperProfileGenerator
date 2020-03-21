const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "grey",
      photoBorderColor: "#grey"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "grey",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "grey",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "grey",
      photoBorderColor: "grey"
    }
  };
  
  var profile = function(bgColor, data) {
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>${data.data.name}'s Resume</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           .card {
            padding: 20px;
            border-radius: 6px;
            background-color: ${colors[bgColor.color].headerBackground};
            color: ${colors[bgColor.color].headerColor};
            width: 40%;
            display: inline-block;
            justify-content: center;
            align-content: center;
          }
          .col {
            flex: 1;
            text-align: center;
            justify-content: center;
            align-content: center;
            margin: 30px 4%;
            }
           </style>
           <body>
           <div class="wrapper">
             <div class="row photo-header">
               <div class="col align">
                 <h1>Hi!</h1>
                 <h1>My name is ${data.data.name}!</h1>
                 <h6>${data.data.bio}</h6>
                 <ul class="links-nav">
                   <li class="nav-link"><a href='${data.data.html_url}'target='_blank'><i class="fab fa-github"></i>Github</a></li>
                   <li class="nav-link"><a href='https://www.google.com/maps/place/${data.data.location}'><i class="fas fa-location-arrow"></i>${data.data.location}</a></li>
                 </ul>
                 <img class="photo-header" src=${data.data.avatar_url}>
               </div>
             </div>
             <div class="row">
               <div class="col card container">
                 <h3>Public Repositories</h3>
                 <h5>${data.data.public_repos}</h5>
               </div>
               <div class="col card container">
                 <h3>Total Number Followers</h3>
                 <h5>${data.data.followers}</h5>
               </div>
             </div>
             <div class="row">
               <div class="col card">
                 <h3>Total Number Following</h3>
                 <h5>${data.data.following}</h5>
               </div>
             </div>
           </div>
           </body>`
          }

module.exports = {
    profile: profile
};