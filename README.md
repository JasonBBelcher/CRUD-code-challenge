# Insiten Coding Challenge

## Business Problem:
A company is looking to achieve inorganic growth through acquisitions. They have asked us to develop an online tool to track and analyze potential target companies.
### Challenge:
Develop a prototype that will allow the client to perform the following activities:
- View a list of targets DONE
- Edit an existing target DONE
- Create a new target DONE
- Delete a target DONE
- Visualization of AGR data across all created targets DONE
- Deployed to Heroku DONE
- Styled with Bootstrap DONE
- Basic validation DONE 
- Edit mode as a modal popup DONE
- Dockerize the project for speedy development onboarding DONE
### Assumptions:
- Use a modern JavaScript framework (e.g., React, Angular)
- Data does not need to be persisted (use mock data) 
  -  *Targets persisted in mongo with mongoose*
     - *I'd rather use real data*
- Examples of data to be captured:
  - Status (e.g., researching, pending approval, approved, declined) 
    - *Enum in mongoose*
- CompanyInfo
  - *persisted in mongoose as String*
- KeyContacts
  - *persisted in mongoose as Array of Objects*
- FinancialPerformance
  - calculated as mongoose virtual property into a final percentage value of *AGR (annual growth rate)*


#### Live APP link for your convenience


[ACME Aquisition Tool](https://calm-escarpment-40693.herokuapp.com)

### Install instruction

[Docker](https://www.docker.com/products/docker-desktop) is required in order to run this project.

 #### DOCKER QUICK INSTALLATION

```
$ git clone git@github.com:JasonBBelcher/insiten-code-challenge.git

$ cd insiten-code-challenge

$ ./start-docker-compose.sh


```
#### DEVELOPMENT INSTALLATION
this will start everything up locally with the exception of mongo. 

```
$ git clone git@github.com:JasonBBelcher/insiten-code-challenge.git

$ cd insiten-code-challenge

$ ./start.sh

```

#### Manual starting and stopping of project


```

yourcomputer:insiten-code-challenge$ cd api
yourcomputer:api$ export NODE_ENV=developmentlive; 
yourcomputer:api$ npm run start:dev 
```

if mongo refuses to connect I usually ` docker stop mongo ` then `docker start mongo` before trying to restart api server.

```
// new iterm
yourcomputer:api$ cd angular 
yourcomputer:angular$ npm run start
// browser should automatically open 
// begin working  

```
