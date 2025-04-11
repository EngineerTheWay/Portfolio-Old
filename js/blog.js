// Load blog posts and render them in the static tile layout
fetch('./data/posts.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch posts.json");
    }
    return response.json();
  })
  .then(posts => {
    const container = document.getElementById('blog-section');

    posts.forEach((post, index) => {
      // Create the post tile wrapper
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
            <p><strong>Keywords:</strong> ${post.keywords.join(', ')}</p>
          </div>
        </div>
      `;

      // Append the post to the blog section
      container.appendChild(wrapper);

      // Add spacing between posts (but not after the last one)
      if (index < posts.length - 1) {
        const spacer = document.createElement('div');
        spacer.className = 'page-break-thin';
        container.appendChild(spacer);
      }
    });
  })
  .catch(error => {
    console.error("Error loading blog posts:", error);
  });