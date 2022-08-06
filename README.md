# preact-boilerplate [![Build Status](https://github.com/willwalker753/preact-boilerplate/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/willwalker753/preact-boilerplate/actions/workflows/pages/pages-build-deployment)

> Quickstart to using Preact with Github Pages.

## Getting Started

1. Install Docker (Node is not required)
2. Clone the repo
    ```bash
        git clone https://github.com/willwalker753/preact-boilerplate.git {{PROJECT_NAME}}
    ```
3. cd into project directory
    ```bash
        cd {{PROJECT_NAME}}
    ```
4. Remove existing git history
    ```bash
        rm -rf .git
    ```
5. Change the "preact-boilerplate" to {{PROJECT_NAME}} in:
   * .github/workflows/gh-pages
   * src/template.html
   * manifest.json
   * package.json
6. Create an inital commit
    ```bash
        git init
        git add .
        git commit -m 'init commit'
    ```
7. In Github, create a new repo named {{PROJECT_NAME}}
8. Push your commit to Github
    ```bash
        git remote add origin https://github.com/{{USERNAME}}/{{PROJECT_NAME}}.git
        git branch -M develop
        git push -u origin develop
    ```
10. Start the local server with hot reload
    ```bash
        . start.sh
    ```
11. App is now served on [localhost:8080](http://localhost:8080/)

---

## Deploying to Github Pages

1. Create a branch named `gh-pages` and push to Github
    ```bash
        git checkout -b gh-pages
        git push origin gh-pages
    ```
2. Create ssh key pair for Github to deploy with
    ```bash
        ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
    ```
3. In Github, go to `{{PROJECT_REPO}} > Settings > Deploy Keys` and add your public key with `Allow write access`
4. Go to `Secrets > Actions` and add your private key as `ACTIONS_DEPLOY_KEY`
5. Delete the local key pair
    ```bash
        rm gh-pages
        rm gh-pages.pub 
    ```
6. Go to `Pages` and change the `Branch` to `gh-pages`, and then change `Source` to `Github Actions`
7. Push a new commit to the `develop` branch in Github
8. Go to the `Actions` tab in Github to watch the deployment process. 
9. Go back to `Pages` and change `Source` to `Deploy from a branch`
    * You will need to switch the `Source` on all following deployments. First select `Github Actions`, then push a commit to `develop`, then select `Deploy from a branch`
10. Go to the `Code` tab's `Environment` section. Eventually, it will show the deployment there and a link to the site (see example below). Give 10-15 minutes for deployment to complete after the `Actions` build. 

> Example: [https://willwalker753.github.io/preact-boilerplate/](https://willwalker753.github.io/preact-boilerplate/)

---

## Bugs

* When refreshing the page on any route except root, Github returns a 404 because only index.html is hosted. Need to find a way to point all requests there or redirect there.
