# Event Tracker Project (Version 2.0)

## Description:

The second part of this continuing project (See Version 1.0 at the bottom for Part 1) was to build out a frontend for the RESTful API that was created in Part 1.

-----

## Instructions:

- See all details for a flight:

1. Click on the table entry to see the expanded view with all flight details.

- Create a new flight:

1. Fill out the form details and click the 'Submit button'.

Note: Date, Aircraft Tail #, Departing Airport Identifier, and Arriving Airport Identifier fields are mandatory.

- Update a flight:

1. Click on the table entry for the flight to update.
2. Update the form fields as required.
3. Click the 'Update Button' for the changes to take effect.

- Delete a flight:

1. Click on the table entry for the flight to delete.
3. Click the 'Delete Button' for the changes to take effect.

-----

## Lessons Learned:

I learned a substantial amount about creating webpages dynamically using Javascript and AJAX requests.

-----


## Technologies Used:

### Database {
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.mysql.com/" target="_blank"><img src="images/mysql_logo.png" alt="mysql_logo" height="50" width="100" id="mysql"/></a>


#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL Workbench:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.mysql.com/products/workbench/" target="_blank"><img src="images/mysqlworkbench_logo.jpeg" alt="mysqlworkbench_logo" height="50" width="50" id="mysqlworkbench"/></a>


### }

### Backend Connectivity {


#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.java.com/en/" target="_blank"><img src="images/java_logo.png" alt="java_logo" height="85" width="50" id="java_logo"/></a>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spring:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://spring.io/" target="_blank"><img src="images/spring_logo.svg" alt="spring_logo" height="50" width="100" id="spring_logo"/></a>

### }

### Frontend {

#### Javascript

#### HTML / CSS / Bootstrap

### }


### Testing {

Google Chrome

### }


-----

-----

-----


# Event Tracker Project (Version 1.0)

## Description:

The goal of this project was to build a quick and simple RESTful API for the backend of an "Event Tracking" application. Due to the intentionally limited scope of the project, there are a few key notes:

1. The database contains only a single table with very limited data, and has not been normalized.
2. The functionality is limited to only simple CRUD (Create, Read, Update, & Delete) operations.
3. There is no frontend. All interactions with the API should be done using Postman:

<div align="center"><a href="https://www.postman.com/" target="_blank"><img src="images/postman_logo.png" alt="postman_logo" height="90" width="290"/></a></div>

-----

## Instructions:
These instructions are meant to provide only the basic information required to be able to successfully interact with the API and assumes that the user is already proficient with Postman, or another similar tool. More detailed instructions in the for of an Application walkthrough will be provided at a later date.

NOTE: {ID} in the routes should be replaced with the appropriate identifier for the desired operation

``` e.g. /api/flights/{ID}  -->  /api/flights/3 ```


<br>

- Search all flights:

```text
METHOD: GET
```

```html
ROUTE: /api/flights
```

```text
BODY: N/A
```

---

- Find a flight by its ID:

```text
METHOD: GET
```

```html
ROUTE: /api/flights/{ID}
```

```text
BODY: N/A
```

---

- Create a new flight:

```text
METHOD: POST
```

```html
ROUTE: /api/flights
```

```text
BODY: raw | JSON
```

```text
EXAMPLE BODY:
```

```json
{
    "flightDate": "2022-05-01",
    "aircraftType": "C172NAVIII",
    "aircraftIdentifier": "N500ER",
    "departingAirportIdentifier": "KDEN",
    "arrivingAirportIdentifier": "KDEN",
    "singleEngine": 1.2,
    "pilotInCommand": 1.2,
    "totalDuration": 1.2,
    "remarks": "THIS IS A BRAND NEW FLIGHT"
}
```

---

- Update a flight:

```text
METHOD: PUT
```

```html
ROUTE: /api/flights/{ID}
```

```text
BODY: raw | JSON
```

```text
EXAMPLE BODY:
```

```json
{
    "flightDate": "2022-07-01",
    "aircraftType": "UPDATED",
    "aircraftIdentifier": "N500ER",
    "departingAirportIdentifier": "KDEN",
    "arrivingAirportIdentifier": "KDEN",
    "singleEngine": 1.2,
    "pilotInCommand": 1.2,
    "totalDuration": 1.2,
    "remarks": "THIS HAS BEEN UPDATED"
}
```

- Delete a flight:

```text
METHOD: DELETE
```

```html
ROUTE: /api/flights/{ID}
```

```text
BODY: N/A
```

-----

## Lessons Learned:
This was a very simple project, so I didn't run into any issues. It did help to reinforce the concepts involved in building a RESTful API to the Level 2 standards as described in the <a href="https://restfulapi.net/richardson-maturity-model/" target="_blank">Richardson Maturity Model</a>:<br><br>
<div align="center"><a href="https://martinfowler.com/articles/richardsonMaturityModel.html" target="_blank"><img src="images/richardsonmaturitymodel.png" alt="richardsonmaturitymodel" height="200" width="340"/></a></div>


-----


## Technologies Used:

### Database {
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.mysql.com/" target="_blank"><img src="images/mysql_logo.png" alt="mysql_logo" height="50" width="100" id="mysql"/></a>


#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL Workbench:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.mysql.com/products/workbench/" target="_blank"><img src="images/mysqlworkbench_logo.jpeg" alt="mysqlworkbench_logo" height="50" width="50" id="mysqlworkbench"/></a>


### }

### Backend Connectivity {


#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.java.com/en/" target="_blank"><img src="images/java_logo.png" alt="java_logo" height="85" width="50" id="java_logo"/></a>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spring:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://spring.io/" target="_blank"><img src="images/spring_logo.svg" alt="spring_logo" height="50" width="100" id="spring_logo"/></a>

### }


### Testing {
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Postman:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.postman.com/" target="_blank"><img src="images/postman_logo.png" alt="postman_logo" height="30" width="97"/></a>
### }
