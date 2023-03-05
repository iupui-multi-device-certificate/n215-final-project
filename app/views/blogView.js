import { formatMonth, formatDay } from "../helpers.js";
//Accessibility note: ideally, should not wrap everything in anchor for screen-readers
const renderBlog = (blog) => `
<a href="#" id="${blog.id}" class="blog-link">
  <article class="blog-post">
    <div class="date-block">
      <div class="day">${formatDay(blog.datePublished)}</div>
      <div class="month upper">${formatMonth(blog.datePublished)}</div>
    </div>
    <div class="blog-content">
      <img
        src="${blog.relativeImagePathSmall}"
        alt=""
        class="blog-image"
      />
      <div class="blog-text">
        <h1 class="blog-title">
          
            ${blog.title}
        
        </h1>
        <div class="blog-paragraph">
          ${blog.summary}
      </div>
    </div>
  </article>
</a>
`;

const renderBlogs = (blogs) => ` ${blogs
  .map((blog) => renderBlog(blog))
  .join("")}
`;

export const blogView = (blogs) => `
<section class="blog content-width content-padding">
<h1 class="section-title upper underline">blog:</h1>
<div class="blogs">
  ${renderBlogs(blogs)}
</div>
</section>
`;
