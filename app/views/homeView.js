export const homeView = (eventsComponent) => `  
<section class="hero">
<!-- SEMANTIC: 
  use header when have subtitle
  https://mikebifulco.com/posts/semantic-html-heading-subtitle#using-h2-as-a-subtitle-for-an-h1-is-incorrect
-->
<div class="hero-cta">
  <header>
    <h1>Header goes here</h1>
    <p>Less important text goes here</p>
  </header>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
    aliquid minus nemo sed est.
  </p>
  <a href="#" class="btn btn--small hero-button">Read More</a>
</div>
</section>
<section class="client-quotes">
<!-- 
SEMANTIC HTML use figure:
https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/#aa-hey-what-about-the-figure-element
critique on: https://www.frontendmentor.io/solutions/testimonials-grid-section-pDG4eI238g
-->
<figure class="client-quote content-width">
  <blockquote>
    <p>
      “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium totam rem aperiam eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Iste natus error sit voluptatem accusantium
      doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo”
    </p>
  </blockquote>
  <figcaption class="client-quote-author">
    <p class="author">John Smith</p>
    <p class="title">Corporation CEO, books author.</p>
  </figcaption>
</figure>
</section>
${eventsComponent}
  
`;
