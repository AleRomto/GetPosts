// obtener los posts de la API
async function getPosts() {
    try {
        // consultar a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // verifiqueishon 
        if (!response.ok) {
            throw new Error('Error al obtener los posts');
        }
        
        const posts = await response.json();
        
        // mostrar posts
        displayPosts(posts);
    } catch (error) {

        // manejo de errores
        console.error('Error en el fetch:', error);
        alert('Error al obtener los posts. Inténtalo más tarde.');
    }
}

// mostrar los posts en HTML
function displayPosts(posts) {
    const postsContainer = document.getElementById('post-data');
    postsContainer.innerHTML = ''; // Limpiar el contenido anterior

    // lista desordenada para los posts
    const ul = document.createElement('ul');
    
    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        ul.appendChild(li);
    });

    // agregar contenido al contenedor de posts
    postsContainer.appendChild(ul);
}

// función para limpiar los posts en HTML
function clearPosts() {
    const postsContainer = document.getElementById('post-data');
    postsContainer.innerHTML = ''; // Limpiar el contenido
}

// obtener los posts
document.getElementById('get-posts').addEventListener('click', getPosts);

// limpiar los posts
document.getElementById('clear-posts').addEventListener('click', clearPosts);
