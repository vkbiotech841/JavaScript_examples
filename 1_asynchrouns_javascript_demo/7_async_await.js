// Async and await are build on top of promises. 
// They are syntactical sugar that allow us to write an asynchronous codes that look synchronous.
// Whereever we are expecting a promise, we can use await.
// then we write a named function.
// then, we decorate this name function with async.
// Eventually, we call this named function.
// To display the result, we put the await within a try and catch block.

console.log('Before');
// Async and await method:
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUserName);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message);
    }
};
displayCommits();

console.log('After');




function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some asynchronous work
        setTimeout(() => {
            console.log('Reading a user from a database...')
            resolve({ id: id, gitHubUserName: 'vikram' });
        }, 2 * 1000);
    });
};


function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling github API...');
            resolve(['rep01', 'rep02', 'rep03']);
        }, 2 * 1000)
    });
};


function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling github API for commits ...')
            resolve(['commit']);
        }, 2 * 1000)
    });
};
