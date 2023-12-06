document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/users/jvragazzi');
        const data = await response.json();

        document.getElementById('profileName').textContent = data.name;
        document.getElementById('profileUsername').textContent = '@' + data.login;
        document.getElementById('repoCount').textContent = data.public_repos;
        document.getElementById('followersCount').textContent = data.followers;
        document.getElementById('followingCount').textContent = data.following;
        document.getElementById('profileLink').href = data.html_url;
        document.getElementById('avatarPerfil').src = data.avatar_url;
    } catch (error) {
        console.error('Erro ao obter os dados:', error);
    }
}

