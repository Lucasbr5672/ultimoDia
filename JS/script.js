document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.github.com/users/Lucasbr5672')
        .then(response => response.json())
        .then(data => {
            console.log(data.avatar_url);
            const perfisGit = document.getElementById('perfil');

            perfisGit.innerHTML = `
                <h2 class="nome">${data.name}</h2>
                <img class="perfil-img" src="${data.avatar_url}" alt="Avatar">
                <p class="bio">${data.bio}</p>
            `;

            fetch(data.followers_url)
                .then(response => response.json())
                .then(followersData => {
                    const listaDeSegidores = document.getElementById('listaSeguidores');
                    followersData.forEach(follower => {
                        const seguidorDiv = document.createElement('div');
                        seguidorDiv.classList.add('seguidor');
                        const img = document.createElement('img');
                        img.src = follower.avatar_url;
                        img.alt = 'Avatar';
                        img.addEventListener('click', function() {
                            
                            alert(`Nome: ${follower.login}\nID: ${follower.id}`);
                        });
                        seguidorDiv.appendChild(img);
                        listaDeSegidores.appendChild(seguidorDiv);
                    });
                })
                .catch(error => console.error('Erro ao carregar a página:', error));
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
});