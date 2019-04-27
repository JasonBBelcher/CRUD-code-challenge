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

## Note to Insiten

Thank you for the opportunity to interview with your great company and at the very least to keep building my portfolio of experience. 
I enjoyed building this code challenge app in Angular 2+ and Node Express. I hope you like it too :) 

 The Angular app has full data persistance using mongodb and is deployed to heroku as a MEAN full stack application.  

### Things I would do or change if I had more time 
- Build in authentication on the back and front end
- more custom styles and an edit modal instead of a routed page
- more financial statistics
- filter searchable contacts and targets
- redesign the mongooose schema to use refs (foreign keys) instead of        
  nested subdocuments. Those are hard to get at and reference when you      
  need to. 
- re organize the 2 applications to only have one root folder with one      
  package.json.  You live and learn. 
- testing 
- error handling and robust error validation and normalization
- loading spinners   


#### Live APP link for your convenience


[ACME Aquisition Tool](https://calm-escarpment-40693.herokuapp.com)

### Install instruction

```

$ git clone git@github.com:JasonBBelcher/insiten-code-challenge.git

 npm i
 export NODE_ENV=production
 npm start // production with front end at localhost:8080 accessing
 // development mode
export NODE_ENV=development
 npm run start:dev 
 cd angular-targets-frontend
 yarn start 
 // this will load a proxy config file so the angular dev server can find it. 

```


