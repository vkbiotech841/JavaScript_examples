
// Use Named function to rescue callback hell. This method flatens the chrimas tree pattern.
// In this case, first we write a named function and replacing callback with named function.
// Note: Here we are not calling the named function. we are just taking the refernce of the function.

console.log('Before');
getUser(1, getRepos);
console.log('After');


function getRepos(user) {
    getRepositories(user, displayRepos);
};
function displayRepos(repos) {
    getCommit(repos, displayCommits);
};
function displayCommits(commits) {
    console.log(commits);
};



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

function getCommit(repos, callback) {
    setTimeout(() => {
        console.log('Calling github API...');
        callback(['commit01', 'commit02', 'commit03']);
    }, 2 * 1000)
};


