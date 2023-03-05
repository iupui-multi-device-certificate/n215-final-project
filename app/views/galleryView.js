const renderGalleryItem = (galleryItem) => `
  <a href="#" id="${galleryItem.id}" class="gallery-item-link">
    <img src=${galleryItem.relativeImagePathSmall} />
    <div class="overlay-${galleryItem.id}"></div>
  </a>     
`;

const renderGalleryItems = (galleryItems) => ` ${galleryItems
  .map((galleryItem) => renderGalleryItem(galleryItem))
  .join("")}
`;
export const galleryView = (galleryItems) => `
  <section class="gallery content-width content-padding">
    <h1 class="section-title upper underline">Gallery:</h1>
    <div class="gallery-items-wrapper">
      ${renderGalleryItems(galleryItems)}
    </div>
 
  </section>
  
  `;
