# Frontend Mentor - Audiophile E-Commerce Website

This is my solution for the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

#### Difficulty Rating: Level 5/5 (Guru)

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./screenshot.jpg)

Captured at the following breakpoints from the live solution: Desktop - 1440px, Tablet - 768px, - Mobile: 375px.

### Links

- Live Site - [@Netlify]()
- GitHub - [@GitHub](https://github.com/SStranks/MyFirstRepository/tree/master/FrontEndMentor/37_audiophile_ecommerce)
- FrontEndMentor Challenge - [@FrontEndMentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx)
- FrontEndMentor Profile - [@SStranks](https://www.frontendmentor.io/profile/SStranks)

## My process

### Built with

- Semantic HTML5
- CSS/SASS; custom architecture, modules, flexbox, grid
- Typescript and React
- JEST and React Testing Library
- Webpack 5
- Nginx
- Docker
- [Cloudinary](https://cloudinary.com/)
- [DockerHub](https://hub.docker.com/)

### What I learned

In this project I decided to focus primarily on the frontend aspect - testing and backend technologies were also utilized, see below. Building on and refining my template system developed from prior challenges, SASS architecture was used to structure the styling - I really like the modular and reusable aspect of SASS - and Typescript was used in conjunction with React and Webpack (e.g. aliasing paths). Time was spent working with the ARIA system and accessibility, experimenting with lazy loading of pages and an animation effect, and ensuring the final product was polished and met all the challenge criteria.

For this project I took the time to implement Jest/React-Testing-Library for the first time, and managed to cover the entire codebase. Further to this I spent time utilizing Chrome Dev Lighthouse tool, from which I learned about image minimization (through webpack), content-security-policies, layout shift/loading, and many items flagged by the tool.

In my attempt to develop a system for handling non-imported absolute-path image files with content-hashes, I experimented with service workers to try and intercept/adjust the request url. Whilst I did succeed in setting up a service worker, I discovered that this approach would not work as the page would need to be refreshed first to ensure the worker was active. I shifted my experimentation to Nginx and learned to remap incoming request paths, which worked successfully, and then shifted the image hosting to use Cloudinary CDN. Whilst this worked, from further research I realized that architecturally this isn't the best solution due to increased latency (two requests).

I also spent more time debugging WSL2 Ubuntu - a past upgrade botched my Docker Rootless setup! I had to scour for answers, learning much along the way, until I finally stumbled upon the solution involving the DNS resolver and systemd.

This project definitely increased my confidence to handle a wide variety of technologies, individually and synergistically, as well as my ability to solve a variety of complex problems.

### Useful resources

- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/)
- [Detect sticky element pinned](https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/)
- [CS3 Sound Bars Animation](https://codepen.io/jackrugile/pen/nryeoA)
- [Typescript - Service worker](https://www.devextent.com/create-service-worker-typescript/)
- [Service worker - Intercept req](https://medium.com/@maulanamaleek/intercept-http-request-using-serviceworker-b6ef23f97d1f)
- [Service worker - React](https://medium.com/@foyemc/implementation-of-service-worker-using-reactjs-application-to-build-pwa-6366fd9a0527)
- [MDN - Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Nginx - CSP](https://content-security-policy.com/examples/google-fonts/)
- [SASS - Strip unit function](https://css-tricks.com/snippets/sass/strip-unit-function/)
- [React - Modal & Portals](https://blog.logrocket.com/build-modal-with-react-portals/)
- [Jest - Snapshots setup](https://dev.to/crobinson42/custom-jest-snapshots-directory-setup-41hp)
- [Jest - How to mock react component](https://robertmarshall.dev/blog/how-to-mock-a-react-component-in-jest/)
- [RTL - Mocking react context](https://polvara.me/posts/mocking-context-with-react-testing-library)
- [RTL - React router location.state](https://dev.to/wolverineks/react-router-testing-location-state-33fo)
- [RTL - Check component instance](https://github.com/testing-library/react-testing-library/issues/251)
- [RTL - Snapshot & react portals](https://medium.com/@amanverma.dev/mocking-create-portal-to-utilize-react-test-renderer-in-writing-snapshot-uts-c49773c88acd)
- [Webpack 5 - URL Loader](https://webpack.js.org/loaders/css-loader/#url)
- [Webpack 5 - Brotli compression](https://tech.groww.in/enable-brotli-compression-in-webpack-with-fallback-to-gzip-397a57cf9fc6)
- [Github - WSL2 Rootless Docker](https://github.com/microsoft/WSL/issues/10152)
- [Github - @typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/issues/3517)
- [Github - Hash classnames CSS modules](https://github.com/webpack-contrib/css-loader/issues/733)
- [Github - Service worker example](https://github.com/mdn/dom-examples/blob/main/service-worker/simple-service-worker/sw.js)
- [Github - Brotli/Nginx-Apline](https://github.com/nginxinc/docker-nginx/issues/371)
- [Stackoverflow - CSS Loader](https://stackoverflow.com/a/69884638/20274651)
- [Stackoverflow - @typescript-eslint](https://stackoverflow.com/questions/62535621/typescript-casting-with-babel-eslint-parsing)
- [Stackoverflow - Select row element on grid](https://stackoverflow.com/questions/71539575/css-select-row-element-on-grid)
- [Stackoverflow - Redirect in React Router v6](https://stackoverflow.com/questions/69868956/how-can-i-redirect-in-react-router-v6)
- [Stackoverflow - React Suspense/Lazy Delay](https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay/61598220#61598220)
- [Stackoverflow - SASS pass var to @content](https://stackoverflow.com/a/57582277/20274651)
- [Stackoverflow - RTL Test Router Links](https://stackoverflow.com/questions/61869886/simplest-test-for-react-routers-link-with-testing-library-react)
- [Stackoverflow - JEST Mock Image Files](https://stackoverflow.com/a/54513338/20274651)
- [Stackoverflow - Testing Intersection Observer](https://stackoverflow.com/a/58651649/20274651)
- [Stackoverflow - Testing location with MemoryRouter](https://stackoverflow.com/a/73730116/20274651)
- [Stackoverflow - Testing request not defined router v6](https://stackoverflow.com/questions/74497916/referenceerror-request-is-not-defined-when-testing-with-react-router-v6-4?noredirect=1&lq=1)
- [Stackoverflow - Testing modal](https://stackoverflow.com/a/73616454/20274651)
- [Stackoverflow - Testing mock useNavigate](https://stackoverflow.com/a/66901155/20274651)
- [Stackoverflow - Testing JEST & Webpack Aliases](https://stackoverflow.com/questions/42629925/testing-with-jest-and-webpack-aliases)
- [Stackoverflow - Webpack 5 html-webpack-plugin](https://stackoverflow.com/a/56295889/20274651)
- [Stackoverflow - Typescript & Service workers](https://stackoverflow.com/questions/56356655/structuring-a-typescript-project-with-workers/56374158#56374158)
- [Stackoverflow - Webpack 5 Gifsicle](https://stackoverflow.com/a/65497967)
