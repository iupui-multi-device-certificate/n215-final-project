import { formatMonth, formatDay } from "../helpers.js";
const renderBlog = (blog) => `
<article class="blog-post">
  <div class="date-block">
    <div class="day">${formatDay(blog.datePublished)}</div>
    <div class="month upper">${formatMonth(blog.datePublished)}</div>
  </div>
  <div class="blog-content">
    <img
      src="${blog.relativeImagePath}"
      alt=""
      class="blog-image"
    />
    <div class="blog-text">
      <h1 class="blog-title">
        <a href="#" id="${blog.id}" class="blog-link">
          ${blog.title}
        </a>
      </h1>
      <div class="blog-paragraph">
        ${blog.summary}
    </div>
  </div>
</article>`;

const renderBlogs = (blogs) => ` ${blogs
  .map((blog) => renderBlog(blog))
  .join("")}
`;
//TODO: fix top margin, not consistent across pages
export const blogView = (blogs) => `
<section class="blog content-width ">
<h1 class="section-title upper">blog:</h1>
<div class="blogs">
  ${renderBlogs(blogs)}
</div>
</section>
`;
