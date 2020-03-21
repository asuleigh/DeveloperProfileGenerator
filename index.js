const axios = require('axios'),
    inquirer = require('inquirer'),
    fs = require('fs');

inquirer
.prompt([
    {
        type:"input",
        message: "What is your GitHub username?",
        name:"username"
    },
    {
        type:"list",
        message: "What is your favorite color?",
        name:"color",
        choices:["red", "blue", "pink","purple", "green", "orange"]
    }
])
.then(input => {
    axios
    .get('https://api.github.com/users/' + input.username)
    .then(res =>{
        let avatar= "![profile](" + res.data.avatar_url +")",
        displayName= "# <div style='color:" + input.color + ";'>" + res.data.name + "</div>",
        bio= "Bio: " + res.data.bio,
        repo= "Repo URL: [" + res.data.name + "'s Repo](" + res.data.html_url +")",
        publicRepos= "Public Repos: " + res.data.public_repos,
        followers= "Followers: " + res.data.followers,
        following= "Following: " + res.data.following,
        location= "Location: " + res.data.location;

        const displayOpen= "<div style='font-size:16pt;'>",
        displayClose ="</div>";

        let profile=displayName + "\n" + avatar + "\n\n" + displayOpen + bio +displayClose + 
        "\n\n" + displayOpen + repo + displayClose +"\n\n" + displayOpen + publicRepos + displayClose + 
        "\n\n" + displayOpen + followers + displayClose+"\n\n" + displayOpen + following + displayClose+ 
        "\n\n" + displayOpen + location + displayClose + "\n\n";
        
        fs.writeFile("userProfile.md",profile, error =>{
            if(error){
                console.log("Sorry! An Error Occured!")
            }else {console.log("Profile Found and Being Generated!")}
        })
    })

});