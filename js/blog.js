fetch('./data/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('blog-section');

    posts.forEach((post, index) => {
      // Create content-divider wrapper
      const dividerWrapper = document.createElement('div');
      dividerWrapper.className = 'content-divider';

      // Create blog tile content
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

      dividerWrapper.appendChild(wrapper);
      container.appendChild(dividerWrapper);

      // Add a line break after the post, if it's not the last one
      if (index < posts.length - 1) {
        const spacer = document.createElement('div');
        spacer.className = 'page-break-thin';
        container.appendChild(spacer);
      }
    });
  });
