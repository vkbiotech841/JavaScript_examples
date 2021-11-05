// Methods for dealing with asynchronous codes:
// 1.Callbacks
// 2.Promises
// Async/await
// In angular application we use observable method for asynchronous api calling.



function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...')
        callback({ id: id, gitHubUserName: 'vikram' });
    }, 2 * 1000);
};

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling github API...');
        callback(['rep01', 'rep02', 'rep03']);
    }, 2 * 1000)
};

// Asynchrous programming
console.log('Before');
getUser(1, (user) => {
    console.log('User', user);
    getRepositories(user.gitHubUserName, (repos) => {
        console.log('Repos', repos);
    });
});
console.log('After');

// Callback Hell or chrismas tree problem: 
// callback within a callback (nested callback) looks like a chrismas tree. 


// Synchrous code: Same code can be written as.

// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUserName);
// console.log('After');