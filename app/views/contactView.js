export const contactView = `        
  <section class="content-width contact">
    <h1 class="section-title underline">Contact Us:</h1>
    <div class="wrapper-contact">
    
    <form class="contact-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Your name..."
      aria-label="name"
      class="form-element"
    />
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email Address..."
      aria-label="email"
      class="form-element"
    />
    <input
      type="text"
      name="company"
      id="company"
      placeholder="Company..."
      aria-label="company"
      class="form-element"
    />
    <textarea
      name="message"
      id="message"
      placeholder="Message..."
      class="form-element message"
    ></textarea>

    <input
      type="submit"
      value="Send Message"
      class="btn btn--medium"
    />
  </form>
      <div class="location">
        <img src="./images/map.png" class="map" alt="" />
      </div>

    </div>
  </section>
`;
