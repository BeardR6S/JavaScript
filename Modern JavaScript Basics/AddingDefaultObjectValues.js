//! Guide to Adding Default Object Values to JavaScript Function Arguments.

// const blog = {
//     title: 'My Great Post',
//     summary: 'Summary of the post'
// }

// const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
//     console.log(`
//     og-title=${title}
//     og-description=${summary}
//     `);
// }

// openGraphMetadata(blog);

//! Coding Exercise 

const user= {username:'Brandon',status:'away'};

const loginEvent=(userObject)=>{
    userObject.status='active';
    return `${userObject.username} is ${userObject.status}`;
}
loginEvent(user); 

console.log(user)