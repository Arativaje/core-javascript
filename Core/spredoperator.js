const myName = { firstName: "Oluwatobi", lastName: "Sofela" };
const bio = { ...myName, website: "codesweetly.com" };

console.log(bio);

// The invocation above will return:
//{ firstName: "Oluwatobi", lastName: "Sofela", website: "codesweetly.com" };

const myName1 = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName1, "name."];

console.log(aboutMe);

// The invocation above will return:
[ "Oluwatobi", "Sofela", "is", "my", "name." ]