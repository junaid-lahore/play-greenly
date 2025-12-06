import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

// Adjust the import paths based on your project structure
import { AppProvider } from "../components/AppProvider";

// Import all pages statically
import App from "../pages/App";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Blog7WaysGolfCoursesCanGoGreen from "../pages/Blog7WaysGolfCoursesCanGoGreen";
import BlogAreEcoGolfBallsSafeForFishAndOceans from "../pages/BlogAreEcoGolfBallsSafeForFishAndOceans";
import BlogBiggestIssueInSustainability from "../pages/BlogBiggestIssueInSustainability";
import BlogBiodegradableGolfBallsMaterials from "../pages/BlogBiodegradableGolfBallsMaterials";
import BlogBiodegradableVsConventional from "../pages/BlogBiodegradableVsConventional";
import BlogCanYouHitGolfBallsIntoLakes from "../pages/BlogCanYouHitGolfBallsIntoLakes";
import BlogFromTeeToSea from "../pages/BlogFromTeeToSea";
import BlogPlayGreenlyVsOtherEcoGolfBalls from "../pages/BlogPlayGreenlyVsOtherEcoGolfBalls";
import BlogRedirect from "../pages/BlogRedirect";
import ContactUs from "../pages/ContactUs";
import CopyBlog from "../pages/CopyBlog";
import Home1 from "../pages/Home1";
import NewHome from "../pages/NewHome";
import PrivacyPolicy from "../pages/PrivacyPolicy";


const pages = [
  { path: "/", component: App },
  // { path: "/about-us", component: AboutUs },
  // { path: "/blog", component: Blog },
  // { path: "/blog7ways-golf-courses-can-go-green", component: Blog7WaysGolfCoursesCanGoGreen },
  // { path: "/blog-are-eco-golf-balls-safe-for-fish-and-oceans", component: BlogAreEcoGolfBallsSafeForFishAndOceans },
  // { path: "/blog-biggest-issue-in-sustainability", component: BlogBiggestIssueInSustainability },
  // { path: "/blog-biodegradable-golf-balls-materials", component: BlogBiodegradableGolfBallsMaterials },
  // { path: "/blog-biodegradable-vs-conventional", component: BlogBiodegradableVsConventional },
  // { path: "/blog-can-you-hit-golf-balls-into-lakes", component: BlogCanYouHitGolfBallsIntoLakes },
  // { path: "/blog-from-tee-to-sea", component: BlogFromTeeToSea },
  // { path: "/blog-play-greenly-vs-other-eco-golf-balls", component: BlogPlayGreenlyVsOtherEcoGolfBalls },
  // { path: "/blog-redirect", component: BlogRedirect },
  // { path: "/contact-us", component: ContactUs },
  // { path: "/copy-blog", component: CopyBlog },
  // { path: "/home1", component: Home1 },
  // { path: "/new-home", component: NewHome },
  // { path: "/privacy-policy", component: PrivacyPolicy },
];

async function prerender() {
  console.log("Starting prerender process...");
  const templatePath = path.resolve("./dist/index.html");
  console.log(`Reading template from: ${templatePath}`);
  const template = fs.readFileSync(templatePath, "utf-8");
  console.log("Template read successfully.");

  for (const page of pages) {
    console.log(`\nProcessing page: ${page.path}`);
    const PageComponent = page.component;

    console.log(`Rendering component for ${page.path}...`);
    const appHtml = renderToString(
      React.createElement(
        StaticRouter,
        // @ts-ignore
        { location: page.path },
        React.createElement(
          AppProvider,
          null,
          React.createElement(PageComponent, null)
        )
      )
    );
    console.log(`Component for ${page.path} rendered successfully.`);

    const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

    const dirPath = path.resolve("./dist", page.path.slice(1));
    console.log(`Preparing directory: ${dirPath}`);
    if (page.path !== "/") {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const outputPath = path.resolve(dirPath, "index.html");
    console.log(`Writing final HTML to: ${outputPath}`);
    fs.writeFileSync(outputPath, html);
    console.log(`Successfully wrote file for ${page.path}`);
  }
  console.log("Prerendering complete!");
}

prerender();
