//! This is going to be ran on Google inspect console.

let hashtagBtns = document.querySelectorAll('.mn-discovery-hashtag-card__action-btn')

hashtagBtns //* Shows the buttons you have on the recommended for you hashtag page

hashtagBtns.length //* Shows the number of buttons

hashtagBtns.forEach(btn => btn.click()) //! Running this in google on linkedin will follow all the hashtags on the page.

//! This next snippet of code is to unfollow on Linkedin

const followingBtns = document.querySelectorAll('.follows-recommendation-card__follow-btn')

followingBtns //* shows you the buttons selected by the above code snippet

followingBtns.forEach(followbtn => followbtn.click()) //* Run this to unfollow the hashtags