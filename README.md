# Coding Challenge

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

 #### DOCKER FULLSTACK 

```
$ git clone git@github.com:JasonBBelcher/insiten-code-challenge.git

$ cd insiten-code-challenge

$ ./start-fullstack-compose.sh

$ ./stop-fullstack-compose.sh


```
#### DOCKER BACKEND 
this will start everything up locally with the exception of mongo. 

```
$ git clone git@github.com:JasonBBelcher/insiten-code-challenge.git

$ cd insiten-code-challenge

$ ./start-backend-compose.sh

$ ./stop-backend-compose.sh
```
#### Useful Docker commands

If something is not working try 
` $ ./stop-compose-all.sh `

This will stop all containers that you could possibly start for the project

If you would like to clean things up or get space back on your HD then try

Stop all running containers
```
docker kill $(docker ps -q)
```
Delete all containers
```
docker rm $(docker ps -a -q)
```
forcefully delete containers 
```
docker rm -f $(docker ps -aq)
```
```
Delete all images
```
```
docker rmi $(docker images -q)
```
#### LOCAL NPM INSTALLATIONS
additionally you can clean up more by pruning the system
```
$ docker system prune -a -f
```

**If you prefer to run without docker-compose you can run these convenience scripts. You still need docker for the mongo image/container**

Installs everything 

```
$ ./install-fullstack
```

Installs backend (mongo and express api)

```
$ ./install-backend
```

Installs front end (angular)


```
$ ./install-angular
```


