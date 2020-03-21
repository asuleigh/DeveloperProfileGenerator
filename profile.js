const colors = {
  green: {
    wrapperBackground: "green",
    headerBackground: "green",
    headerColor: "white",
    photoBorderColor: "green"
  },
  blue: {
    wrapperBackground: "blue",
    headerBackground: "blue",
    headerColor: "white",
    photoBorderColor: "blue"
  },
  pink: {
    wrapperBackground: "pink",
    headerBackground: "pink",
    headerColor: "white",
    photoBorderColor: "pink"
  },
  red: {
    wrapperBackground: "red",
    headerBackground: "red",
    headerColor: "white",
    photoBorderColor: "red"
  }
};

var profile = function (bgColor, data) {
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
        .photo-header {
        position: relative;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color: ${colors[bgColor.color].headerBackground};
        color: ${colors[bgColor.color].headerColor};
        width: 95%;
        border-radius: 2px;
        }
        .photo-header img {
        width: 200px;
        height: 200px;
        border-radius: 10%;
        object-fit: cover;
        top: 30px;
        border: 6px solid white;
        box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
        margin-bottom: 20px;
        }
        .photo-header h1, .photo-header h2 {
        width: 100%;
        text-align: center;
        }
        .photo-header h1 {
        margin-top: 5px;
        }
        .links-nav {
        width: 100%;
        text-align: center;
        padding: 5px 0;
        font-size: 1.1em;
        margin: 5px;
        }
        .nav-link {
        display: inline-block;
        margin: 5px 10px;
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
        .container {
        padding: 50px;
        padding-left: 100px;
        padding-right: 100px;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
          margin-bottom: 20px;
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
              <h1>${data.data.name}</h1>
              <h4>${data.data.bio}</h4>
              <ul class="links-nav">
                <a class="nav-link" href='https://www.google.com/maps/place/${data.data.location}' 
                style="color: white;"><i class="fas fa-location-arrow"></i>${data.data.location}</a></li>
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
              <h3></i>GitHub Repository</h3>
              <a href='${data.data.html_url}'target='_blank' style="font-size: 24px; color: white;"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <div class="row">
          <div class="col card container">
            <h3>Followers</h3>
            <h5>${data.data.followers}</h5>
          </div>
            <div class="col card container">
              <h3>Following</h3>
              <h5>${data.data.following}</h5>
          </div>
          </div>
        </div>
        </body>`
}

module.exports = {
  profile: profile
};