

# Hello! Should we talk?

<div style="display:flex; align-items:flex-start;">
  <div>
    I'm a solutions consultant in startup to enterprise SaaS pre-sales, an avocational product manager, and management consultant experienced in transformation. I love conversations that lead to clarity of action, improved quality, and more joy.
    <ul>
      <li>👀 curious: human process & performance</li>
      <li>🌱 interested: python, rust</li>
      <li>💞️ collaborating: systems that work to create delightful experiences</li>
    </ul>
  </div>
  <img src="https://user-images.githubusercontent.com/76539355/214731371-78cb7bcb-996d-4108-9872-7af758ed5647.png" alt="A Maia" style="margin-left:1rem;">
</div>


# kjon life &middot; 
[![Fly Deploy](https://github.com/kjon-life/kjon-life/actions/workflows/fly.yml/badge.svg)](https://github.com/kjon-life/kjon-life/actions/workflows/fly.yml) ![GitHub commit activity](https://img.shields.io/github/commit-activity/y/kjon-life/kjon-life) ![GitHub License](https://img.shields.io/github/license/kjon-life/kjon-life)
 ![GitHub top language](https://img.shields.io/github/languages/top/kjon-life/kjon-life)
 ![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fkjon.life) 
[![GitHub Release](https://img.shields.io/github/release/kjon-life/kjon-life.svg?style=flat&tag=release/v0.0.2)](https://github.com/kjon-life/kjon-life/releases/tag/release/v0.0.2)




This project is an avocational exploration of web development.  


### Project Overview:
* App code is a simple Go web server 
* The app is containerized into a Docker image called `kjon-life` 
* The Dockerfile uses a Go builder image to compile the app code and copies the binary into a minimal final image
* The app can be manually deployed using flyctl from the fly.toml config file
* GitHub Actions deploys main to dev automatically

### Tech stack:
* Go - for the app code
* Docker - for containerization
* flyctl - for manual deployment
* GitHub Actions - for CI/CD
* Fly.io - for the serverless hosting platform

```flyctl``` is a CLI tool from [Fly.io](http://fly.io)
You can read about it [here](https://fly.io/docs/hands-on/).

### History:  
[March 23, 2024](2024-03-23-20-42-51.png)  

[November 5, 2023](2023-11-06-00-36-15.png)  
[November 5, 2023](2023-11-05-23-08-50.png)  
#### v0.0.0  

[November 5, 2023](2023-11-05-21-59-08.png)  

### Acknowledgements:

This project [depends](https://github.com/kjon-life/kjon-life/network/dependencies) on the copious contributions of others and is possible because of the following services:

- [Porkbun](https://porkbun.com/) - Domain registration and DNS management
- [Fly.io](https://fly.io/) - Application hosting platform
