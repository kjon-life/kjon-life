

# Hello! Should we talk?


I've been a builder 🍀 all my life making systems that work for enterprise, production loads. I am an `avocational` product manager, because enterprise "products" _are_ **the systems we build** to solve problems.

It's a subtle, distinct difference: Individuals buy products, enterprise buys solutions. 

Everything we build has far-reaching effects. That nifty new feature might require re-training hundreds of employees. That data-flow optimization? Might force 600 people to change their spreadsheets. My life requires a blend of pragmatic thinking, big-picture realism, and disciplined attention to detail.

This project grew out of simple HTML/CSS, front end to backend, sporadically typed with ten fingers and help from [codepen](https://codepen.io/kjon-life), [Stack Overflow](https://stackoverflow.com/users/19777134/kjon?tab=reputation), and **intellisense**. Building something from scratch because it interested me, and because there are puzzles which are poetry in code.

<img align="right" width="300" src="https://user-images.githubusercontent.com/76539355/214731371-78cb7bcb-996d-4108-9872-7af758ed5647.png" alt="A Maia">



# kjon &middot; life  
[![Fly Deploy](https://github.com/kjon-life/kjon-life/actions/workflows/fly.yml/badge.svg)](https://github.com/kjon-life/kjon-life/actions/workflows/fly.yml) 
 ![GitHub commit activity](https://img.shields.io/github/commit-activity/y/kjon-life/kjon-life) 
 ![GitHub License](https://img.shields.io/github/license/kjon-life/kjon-life)
 ![GitHub top language](https://img.shields.io/github/languages/top/kjon-life/kjon-life)
 ![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fkjon.life) 
 
This is a project that feeds my developer portfoio. To connect:  
- Mention me in an issue or pull request: @kjon-life  
- My friends connect on [Instagram: @kilo.jon](https://www.instagram.com/kilo.jon/)   
- [LinkedIn](https://www.linkedin.com/in/jonhwilliams) for professional connections.

### About:  
- I work in the intersections of orchestration, intelligence, and revenue.  
- I am deeply curious about data analytics, the way we articulate and contextualize information, and natural language processing. 
- The future is arriving faster than we know, and it's lit. Especially for those learning to use these powerful "AI" technologies to serve "our neighbors, as ourselves."
- I enjoy walking, buskers, cold plunging, '67-'73 Chevy trucks, and Chagaccino! 

### Project Overview:
* App code is a simple Go web server 
* The app is containerized into a Docker image called `kjon-life` 
* The Dockerfile uses a Go builder image to compile the app code and copies the binary into a minimal final image
* The app can be manually deployed using flyctl from the fly.toml config file
* GitHub Actions deploys main to dev automatically

### Tech stack:
* Express - for routing
* Parcel - for preprocessing SCSS
* Go - for the app code
* Docker - for unit of deployment
* flyctl - for manual deployment
* GitHub Actions - for CI/CD
* Fly.io - for the serverless hosting platform


### Running locally
1. Install the dependencies with `pnpm install`. pnpm locks versions in `pnpm-lock.yaml` and deduplicates modules for you.
2. Run `pnpm run start:local` to let Parcel watch `src/scss/main.scss`, write the compiled CSS into `public/css`, and then start the Express server (`./bin/www`) in one step—no manual SCSS compilation required.
3. When you only need to build assets, use `pnpm run build`. For production-like starts that build before starting the server, use `pnpm run start:build`. `pnpm run start` assumes the CSS is already built, while `pnpm run start:debug` or `pnpm run start:local-trace` layer on debugging and tracing helpers.

### Release readiness
1. Run `pnpm run validate:brand` (alias `pnpm test`) to exercise `scripts/validate-brand-colors.js` so every raw hex stays inside `$brand-colors`.
2. Build the CSS with `pnpm run build` and double-check the Parcel output in `public/css/main.css`.
3. Merge into `main`, let GitHub Actions publish, then deploy the updated image to Fly.io using the existing `fly.toml` configuration if you are ready for the new palette + guardrails.

```flyctl``` is a CLI tool from [Fly.io](http://fly.io)
You can read about it [here](https://fly.io/docs/hands-on/).
  

### Acknowledgements, Errors, Omissions & Legal

This project [depends](https://github.com/kjon-life/kjon-life/network/dependencies) on the copious contributions of others. If I have failed to properly cite or give credit, please [open an issue](https://github.com/kjon-life/kjon-life/issues) to help me correct errors and omissions.

For legal inquiries, please [open an issue](https://github.com/kjon-life/kjon-life/issues).

This project is possible because of these and other services:

- [Porkbun](https://porkbun.com/) - Domain registration and DNS management
- [Fly.io](https://fly.io/) - Application hosting platform
