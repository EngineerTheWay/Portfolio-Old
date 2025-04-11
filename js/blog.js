// Load blog posts and render them in the tile layout
fetch('./data/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('blog-section');

    posts.forEach((post, index) => {
      // Create blog tile wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'content-body';

      wrapper.innerHTML = `
        <div class="content-body-wrap bordered">
          <div class="white-tile-large">
            <h1>${post.title}</h1>
            <p><em>${post.blurb}</em></p>
          </div>
          <div class="tile">
            <h1>${post.date}</h1>
            <h3>${post.category}</h3>
            <p>Keywords: ${post.keywords.join(', ')}</p>
            <button onclick="openBlogModal('${post.id}')">Read More</button>
          </div>
        </div>
      `;

      container.appendChild(wrapper);

      // Add a divider between posts (but not after the last one)
      if (index < posts.length - 1) {
        const divider = document.createElement('div');
        divider.className = 'page-break-thin';
        container.appendChild(divider);
      }
    });
  });

// Modal
function openBlogModal(id) {
  fetch('/data/posts.json')
    .then(res => res.json())
    .then(posts => {
      const post = posts.find(p => p.id === id);
      const modal = document.createElement('div');
      modal.className = 'modal';

      modal.innerHTML = `
        <div class="modal-content">
          <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
          <h1>${post.title}</h1>
          <p>${post.content}</p>
        </div>
      `;

      document.body.appendChild(modal);
    });
}