# https://www.vincentsylo.com

[![Build Status](https://travis-ci.org/vincentsylo/vincentsylo.com.svg?branch=master)](https://travis-ci.org/vincentsylo/vincentsylo.com)

## About

Hi, Vincent here. I'm a software engineer in my day job and provide web & mobile consultancy services after hours.

This is my personal portfolio website created to showcase that building a scaleable website can be quite cheap by leveraging your frontend skills, as well as serverless compute.

The only cost involved is the renewal of my domain name, [vincentsylo.com](https://www.vincentsylo.com/). 

## Technologies

**Frontend:**
- [React.js](https://reactjs.org/)
- CSS Modules

**Backend:**
- [Node.js](https://nodejs.org/)
- API source: https://github.com/vincentsylo/vincentsylo.api

**Hosting:**
- [Firebase Hosting](https://firebase.google.com/products/hosting/) - free custom domain & SSL.
- *alternatively* [GitHub Pages](https://pages.github.com/) - free custom domain.

**Server:**
- [Firebase Cloud Functions](https://firebase.google.com/products/functions/) - free until 125,000 invocations per month.
- *alternatively* [AWS Lambda](https://aws.amazon.com/lambda/) - free until 1M requests per month.

**Continuous Integration:**
- [Travis CI](https://travis-ci.org/) - free for open source projects.
- *alternatively* [CircleCI](https://circleci.com/) - free first container, 1,500 builds per month, 1 concurrent build.

**Total running cost:**
- $0.00

## Getting started

```
yarn
yarn start
```

## Build for production

```
yarn build
```

## What's next?

- Adding a blog, formatted for [Medium](https://medium.com), and imported directly into Medium.
- Server side rendering with [react-snapshot](https://github.com/geelen/react-snapshot) - free.
- *alternatively* [prerender.io](https://prerender.io/pricing) - free up to 250 pages.
