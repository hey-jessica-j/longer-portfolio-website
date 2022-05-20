var profileInformation = {};
var imageTag = "img/"

//User Information
profileInformation.name = "Jessica Jennings";
profileInformation.emailAddress = "hellojessicajennings@gmail.com";
profileInformation.resumeDownload = "";
profileInformation.personalWebsite = "www.bluebutterbiscuit.design";
profileInformation.repoGallery = "https://hey-jessica-j.github.io/github-repo-gallery/";
profileInformation.github = "https://www.github.com/hey-jessica-j";
profileInformation.linkedIn = "https://www.linkedin.com/in/jessica-jennings-48a64baa";
profileInformation.codeSandbox = "https://www.codesandbox.io/u/hey-jessica-j";
profileInformation.replit =  "https://repl.it/@heyJessicaJ";

//User Styles
profileInformation.backgroundColor = "#000000"
profileInformation.fontColorOne = "#F482D9";
profileInformation.fontColorTwo = "#FFFFFF";

profileInformation.fontStyleUserName = "'Megrim', cursive";
profileInformation.fontStyleNavigation = "'Grape Nuts', cursive";
profileInformation.fontStyleHeader = "'Expletus Sans', cursive";
profileInformation.fontStyleText = "'Saira Condensed', sans-serif";

//Paragraphs
profileInformation.aboutMeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
profileInformation.contactMeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


//--------------------Main Style defaults

document.body.style.setProperty('--main-color', profileInformation.fontColorOne);
document.body.style.setProperty('--secondary-color', profileInformation.fontColorTwo);
document.body.style.setProperty('--name-font', profileInformation.fontStyleUserName);
document.body.style.setProperty('--navigation-font', profileInformation.fontStyleNavigation);
document.body.style.setProperty('--header-font', profileInformation.fontStyleHeader);
document.body.style.setProperty('--text-font', profileInformation.fontStyleText);


// ----------------------------------------------------
//--------------------  MAIN CODE ---------------------
// ----------------------------------------------------

//function that creates a tag with links


// ---------Set User Name
var userName = document.getElementById('userName');
userName.innerText = profileInformation.name;

// ---------Set About Me Information
//Text
document.getElementById('about-me-text-content').innerText = profileInformation.aboutMeText;

// ---------Set My Work Information
//function to display the slide show




// ---------Set Contact Me Information
//Text
document.getElementById('contact-me-text-content').innerText = profileInformation.contactMeText;



// ----------- Social Media
//function that creates social media icons with links
