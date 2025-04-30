window.addEventListener("DOMContentLoaded", () => {
  // Load blog posts via cloudflare worker API and render them in the static tile layout
  fetch('https://portfolio-insights-api.way-caleb.workers.dev/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts.json");
      }
      return response.json();
    })
    .then(posts => {
      const container = document.getElementById('blog-section');

      // Create a single outer wrapper for all blog posts
      const divider = document.createElement('div');
      divider.className = 'content-divider';

      posts.forEach((post, index) => {
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

        divider.appendChild(wrapper);

        if (index < posts.length - 1) {
          const spacer = document.createElement('div');
          spacer.className = 'page-break-thin';
          divider.appendChild(spacer);
        }
      });

      container.appendChild(divider);
    })
    .catch(error => {
      console.error("Error loading blog posts:", error);
    });
});