# Insiten Coding Challenge
## Business Problem:
A company is looking to achieve inorganic growth through acquisitions. They have asked us to develop an online tool to track and analyze potential target companies.
### Challenge:
Develop a prototype that will allow the client to perform the following activities:
- View a list of targets DONE
- Edit an existing target DONE
- Create a new target DONE
- Delete a target
- Visualization of AGR data across all created targets
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
