# tools-of-curiosity-app
This repository hold everything for the Tools Of Curiosity game.

# Getting Started

## Set up Git LFS
* Install Git LFS from https://git-lfs.github.com
* Run `git lfs install` if you have never used git lfs on your machine before.
* Clone this repo. 
    * If you have already cloned this repo, go into it and run `git lfs pull`

## Set up Python
From the tools-of-curiosity directory:
* Create a python virtualenv
    * `python3 -m venv venv`
* Activate the virtual environment
    * `source ./venv/bin/activate`
* Install python requirements
    * `./venv/bin/pip install -r requirements.txt`

## Set up Heroku 
* Install the Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli#download-and-install
* If you want your own Heroku instance:
   * `heroku create`
   * Set up a postgres database in the Heroku UI, and set up config vars (look at existing Heroku apps or app.json)
   * Follow setup instructions here: https://ankane.org/git-lfs-on-heroku

## Running Locally
From the tools-of-curiosity directory:
* `source ./venv/bin/activate`
* `heroku local` 

## Deploying to Heroku
* When you push to main, changes automatically appear at https://tools-of-curiosity.herokuapp.com
   * You can see [deployments happening here](https://github.com/Innovators-for-Purpose/tools-of-curiosity/deployments/activity_log?environment=tools-of-curiosity).
* If you set up your own Heroku instance, use:
   * `git push heroku main --no-verify`
