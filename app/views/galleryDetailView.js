export const galleryDetailView = (galleryItem) => `

  <section class="gallery-item-detail content-width content-padding">
    <div class="gallery-item-banner">
      <img src="${galleryItem.relativeImagePath}" alt="" />
      <div class="overlay-${galleryItem.id}"></div>
      <h1 class="gallery-item-header font-color-${galleryItem.id}"><span class="xxl-text">${galleryItem.id}.</span> <span class="xl-text">${galleryItem.title}</span></h1>
    </div>
    <div class="details">
      ${galleryItem.details}
    </div>
  </section>  
`;
