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

## Routes

### Session

Currently includes login function, required to access other routes.
After loggin in you will need to take the key and add it to the Authentication Header for any other requests.

### Location

/locations - GET - Gets all locations

/locations/locationId - GET - Gets a single location by ID

/location - POST - Adds new location to DB. Requires

- name
- street_address
- city
- state
- postal_code
- telephone

/location/locationId - DELETE - Removes location and all connecting data from the database

### User

/users - GET - Get all Users

/users/userId - GET - Gets a single user by ID


### Patient

/patients - GET - Get all patients

/patients/patientId - GET - Gets a single patient by ID

/patients - POST - Creates a new patient to DB. Requires

- first_name
- last_name
- street_address
- city
- state
- postal_code
- email
- telephone

/patients/patientId - DELETE - Removes patient and all connection data from the database


### Message
/messages - GET - Gets all messages

/messages/messageId - GET - Gets a single message by ID

/messages - POST - Creates a new message in DB. Requires
- message_audio_url
- message_transcript
- status

/messages/messageId - DELETE - Removes message by ID
