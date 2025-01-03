# Astro Frontend

In progress frontend build for my WordPress site to try out Astro 5. As it is currently, it's a hybrid of "hard coded" content (homepage, menus) and content retrieved from WordPress (post/page content).

And so it's important to note that I still have a lot of work to do on this before it's actually complete:

## Todo List

[x] Update Layout.astro
[x] Create Header and Footer
[x] Create blog index template, retrieve posts from WordPress
[x] Create blog single template, retrieve post content from WordPress
[x] Create page single template, retrieve page content from WordPress
[x] Create blog pagination component
[ ] Retrieve menu content from WordPress
[ ] Build a better "projects" template
[ ] Test every core WordPress block styles, update accordingly

## Setup

In order to run this locally, you will need to create a .env file.
You can do so manually and add `PUBLIC_API_URL` to it, or copy the included .env.sample file and update the value for `PUBLIC_API_URL`.

Once that is done, you can run `npm i && npm run dev` to install and run Astro in dev mode, which will start a local dev server you can access at `https://localhost:4321`.

## 🚀 Project Structure

Inside of the Astro project, you'll see the following folders and files:

### /public

This is where public files that shouldn't be processed live. Specifically, you will find font files and some svg icons here.

### /src

This is where the bulk of the application lives. Here you will find:

#### /assets

This folder is where images that need to be compressed by the build would normally go. Currently empty.

#### /components

This folder contains reusable components as astro files. Currently, contains components for the header, footer, main and social menus, and the blog pagination.

Some of these components will have CSS in them too, to allow for Astro to scope that CSS properly.

#### /layouts

All you will find here is the main Astro Layout file. This is the layout used by pretty much every page on the site.

#### /pages

The Astro pages folder facilitates the routing and different page templates. Some of these templates will be named something like [slug].astro and these are dynamic pages.

For example, `/pages/[slug].astro` will try and obtain content from WordPress for a Page that lives at [slug] and `/blog/[slug].astro` will try and obtain content from WordPress for a blog post at [slug]. As it is currently, the main navigation links are hard coded for pages that do exist in WordPress on my website, but blog posts should be dynamic enough to work for any site.

#### /styles

A folder for CSS files, structured for it to make sense. This is where the global styles live, as well as some of the page and block specific styles.

#### /utils

A folder unrelated to Astro, and currently only contains a single JavaScript file for some WordPress API utility.
For example, in order for dynamic routes to work in a static Astro context all the available options need to be populated inside of a `getStaticPaths()` function. The file inside of this folder helps facilitate that process by retrieving all of the available slugs for a given post types from the REST API.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
