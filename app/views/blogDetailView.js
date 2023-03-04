import { formatMonth, formatDay } from "../helpers.js";

//render blog-section
const renderBlogSection = (blogSection) => `
  <h2>${blogSection.sectionHeader}</h2>
  ${blogSection.sectionContent}
`;

//render sections - join w/ map

const renderBlogSections = (blogSections) => `
  ${blogSections.map((blogSection) => renderBlogSection(blogSection)).join("")}
`;

export const blogDetailView = (blog) => `
    <article class="blog-post-detail content-width">
        <div class="blog-banner">    
          <img src="${blog.relativeImagePath}" alt="" />
          <div class="date-block-large">
            <div class="day">${formatDay(blog.datePublished)}</div>
            <div class="month upper">${formatMonth(blog.datePublished)}</div>
          </div> 
        </div>

        <div class="blog-sections">
          ${renderBlogSections(blog.sections)}
        </div>
    </article>
`;
