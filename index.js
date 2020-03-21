// npm install requirements
const axios= require('axios'),
    inquirer= require('inquirer'),
    fs= require('fs');
    util= require("util");

var pdf= require("html-pdf");

let profile= require("./profile");

const writeFileAsync= util.promisify(fs.writeFile);

// Array of questions prompted in terminal
const questions = 
["What is your GitHub username?", 
"What is your favorite color?"];

// Function for favorite color prompt
function questionPrompt() {
    return inquirer
    .prompt([

        {
        type: "list",
        message: questions[1],
        name: "color",
        choices: [
            "red",
            "blue",
            "pink",
            "purple",
            "green",
            "orange",
            "yellow"
        ]
        },
    ])

}

// Function for username prompt
async function userPrompt() {

    const displayName= 
    await inquirer
    .prompt({
        type: "input", 
        message: questions[0], 
        name: "username"})
   
    const gitHub= await axios.get(`https://api.github.com/users/${displayName.username}`);

    return gitHub;

}

// Uses prompts to initialize new html/pdf
async function init() {
    const favColor = await questionPrompt();
    const data = await userPrompt();

    const html = await profile.profile(favColor, data);

    await writeFileAsync("profile.html", html);

    var doc = fs.readFileSync('profile.html', 'utf8');
    var options = { format: 'Letter', orientation: "portrait" };

    pdf.create(doc, options).toFile(data.data.name + '.pdf', function(err, res) {
      if (err) return console.log(err);
    });

}

init();

// Call and functions for profile creation in terminal and md creation
// .then(input => {
//     axios
//     .get('https://api.github.com/users/' + input.username)
//     .then(res =>{
//         let avatar= "![profile](" + res.data.avatar_url +")",
//         displayName= "# <div style='color:" + input.colorChoice + ";'>" + res.data.name + "</div>",
//         bio= "Bio: " + res.data.bio,
//         repo= "Repo URL: [" + res.data.name + "'s Repo](" + res.data.html_url +")",
//         publicRepos= "Public Repos: " + res.data.public_repos,
//         followers= "Followers: " + res.data.followers,
//         following= "Following: " + res.data.following,
//         location= "Location: " + res.data.location;

//         const displayOpen= "<div style='font-size:16pt;'>",
//         displayClose ="</div>";

//         let profile=displayName + "\n" + avatar + "\n\n" + displayOpen + bio +displayClose + 
//         "\n\n" + displayOpen + repo + displayClose +"\n\n" + displayOpen + publicRepos + displayClose + 
//         "\n\n" + displayOpen + followers + displayClose+"\n\n" + displayOpen + following + displayClose+ 
//         "\n\n" + displayOpen + location + displayClose + "\n\n";
        
//         fs.writeFile(res.data.name + ".md",profile, error =>{
//             if(error){
//                 console.log("Sorry! An Error Occured!")
//             } else {console.log("Profile Found and Being Generated!")}
//         });
//     });

// });
