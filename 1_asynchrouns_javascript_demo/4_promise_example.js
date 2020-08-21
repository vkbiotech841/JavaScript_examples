

console.log('Before');

getUser(1)
    .then(user => getRepositories(user.gitHubUserName))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

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
