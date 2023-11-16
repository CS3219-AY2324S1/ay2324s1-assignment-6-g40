# PeerPrep
## Local Deployment on Docker Desktop
### Instructions
To run the project:
1. Ensure a Docker daemon is running
2. `cd` to the root of the project
3. In a terminal run:
    * `docker-compose up`, or,
    * `docker-compose up -d` to run in detached mode

To tear down the project
1. In a terminal, run:
    * `docker-compose down`

Access the application in a web browser at the URL `127.0.0.1:8080`.

## Admin Account Elevation
### Instructions
To elevate a user to an `admin` role
1. Execute the following commands in the integrated terminal of the running `user-db` container (On Docker Desktop, go to "Containers" > "user-db" > "Exec"):
    * `mongosh`
    * `use user_db`
    * `var adminid = db.roles.findOne({name:'admin'}, {_id:1})._id`
    * `db.users.updateOne({ username: '<CREATED_USERNAME>' }, { $set: { roles: [adminid] } })`

(_where_ `<CREATED_USERNAME>` _is the username of an existing user to be elevated to an `admin` role_)

- Configure the following GitHub repository secrets ("Settings" > "Security" > "Secrets and variables" > "Actions"):
    * `GKE_PROJECT`: the ID of the Google Cloud Project set up 
    * `GKE_SA_KEY`: the generated service account key for the service account with sufficient permissions

_Serverless Function Deployment:_

The serverless function is automatically deployed to the Google Cloud Platform on a push to the `master` branch. The instructions to manually deploy the serverless function are as follows:

1. Ensure that `gcloud` is installed. Run the following command in terminal:
    * `npm i gcloud`
2. Log in to Google Cloud Platform. Run the following command in terminal:
    * `gcloud auth login`
3. Login using your Google Cloud Platform account
4. Next, `cd` into the function directory:
    * `cd question-fetcher`
5. Deploy the application using the following command:
    * `gcloud app deploy`
