document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  // Append header content
  header.innerHTML = `
    <h3>ॐ</h3>
    <h1>${headerContent.title}</h1>
    <p><i>${headerContent.subtitle}</i></p>
  `;

  // Append sections
  /*  sectionsContent.forEach((section) => {
    const sectionElement = document.createElement('section');
    sectionElement.innerHTML = `<p>${section}</p>`;
    main.appendChild(sectionElement);
  }); */

  // Append profile details table
  const profileSection = document.createElement('section');
  profileSection.innerHTML = `<h2>${profileDetails.title}</h2>`;
  const table = document.createElement('table');
  table.innerHTML = `
    <tr>
      <th>Category</th>
      <th>Details</th>
    </tr>
    ${profileDetails.data
      .map(
        (row) => `
      <tr>
        <td>${row.category}</td>
        <td>${row.details}</td>
      </tr>
    `
      )
      .join('')}
  `;
  profileSection.appendChild(table);
  main.appendChild(profileSection);

  // Append image gallery
  const imageGallerySection = document.createElement('section');
  imageGallerySection.classList.add('image-gallery');
  imageGallerySection.innerHTML = `<h2>${imageGallery.title}</h2>`;
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');

  // Create modal for mobile view
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <span class="close-modal">&times;</span>
    <img class="modal-content" id="modal-image" />
  `;
  document.body.appendChild(modal);

  // Add event listeners to images for mobile view
  imageGallery.images.forEach((image) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    imageContainer.innerHTML = `<img src="assets/photos/${image}" alt="Gallery Image" loading="lazy" fetchpriority="low"/>`;
    gallery.appendChild(imageContainer);
    imageContainer.querySelector('img').addEventListener('click', () => {
      modal.style.display = 'block';
      modal.querySelector('#modal-image').src = 'assets/photos/' + image;
    });
  });

  imageGallerySection.appendChild(gallery);
  main.appendChild(imageGallerySection);

  // Close modal when clicking on the close button
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Append contact details
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact-details');
  contactSection.innerHTML = `
    <h2>${contactDetails.title}</h2>
    <p>${contactDetails.content}</p>
  `;
  main.appendChild(contactSection);

  // Append requirements
  const requirementsSection = document.createElement('section');
  requirementsSection.innerHTML = `<h2>${requirements.title}</h2>`;
  const list = document.createElement('ul');
  list.classList.add('requirements');
  requirements.items.forEach((item) => {
    list.innerHTML += `<li>${item}</li>`;
  });
  requirementsSection.appendChild(list);
  main.appendChild(requirementsSection);

  // Append footer content
  footer.innerHTML = `<p>${footerContent.content}</p>`;
});
