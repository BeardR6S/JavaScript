let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello....')
    }, 2000);
//!Comment setTimeout to cause an error.

    setTimeout(() => {
        reject(Error('Too sleepy...'))
    }, 2000);
});

sleepyGreeting
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });