# Deployment

## Make Port Dynamic

## Set up Continuous Deployment on Heroku

so that we can make changes > commit and push > gets deployed

### Steps

- npm i dotenv
- npm i helmet
- create .env file
- create config folder
- add defaults.js into config
- add secrets.js into config.

- create new app on heroku. App needs a unique name.
- got to the "Deploy" tab
- click on Github button and consent to the security prompt
- search for your repository on github
- ignore checking CI unless you are using continuous integration, like testing, before each new deploy in your app
- click "Connect" next to the repository name
- choose the branch to deploy and click "Enable Automatic Deploys"
- click "Deploy Branch"
- go to the "Overview" tab
- once it is "Deployed" click on "Open App" on the top right


### To see logs on heroku

heroku logs -a app-shouts --tail (app name is whatever you named it on heroku)

## to config production with heroku/postgres

npm i pg
add the production config for pg into knex file

- on your deplyed heroku site: 
in the app homepage, go to resources, select heroku postgres & accept(provision)


- to run migrations to production on postgres, vs say sqlite3 which is development
npx heroku run knex migrate:latest -a nameOnHerokuOfApp