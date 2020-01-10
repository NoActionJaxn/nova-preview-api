# Nova Preview API

## Project Setup
To run this application you must do the following:
1. Clone the Project: https://github.com/NoActionJaxn/nova-preview-api.git
2. Find the cloned directory
3. Install dependencies - Yarn Preferred i.e. yarn install
4. Create a .env file in the root directory of this project
4. Add the following values to your .env file

PORT= Application Nework Port 

DATABASE= Postgres Database

DATABASE_USER= Postgres Super User

DATABASE_PASSWORD= Postgres Password for User

JWT_SECRET= Secret Application Key

SALTING_ROUNDS= Amount of passes run when salting passwords

DEBUG=express:* & node index.js (optional - Use for debugging)
