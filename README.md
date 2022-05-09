# Event Tracker Project

## Description:

The goal of this project was to build a quick and simple RESTful API for the backend of an "Event Tracking" application. Due to the intentionally limited scope of the project, there are a few key notes:

1. The database contains only a single table with very limited data, and has not been normalized.
2. The functionality is limited to only simple CRUD (Create, Read, Update, & Delete) operations.
3. There is no frontend. All interactions with the API should be done using Postman:

<a href="https://www.postman.com/" target="_blank"><img src="images/postman_logo.png" alt="postman_logo" height="90" width="290" align="center"/></a>

-----

## Instructions:
These instructions are meant to provide only the basic information required to be able to successfully interact with the API and assumes that the user is already proficient with Postman, or another similar tool. For more detailed instructions, please see the "Walkthrough" section below.
<br><br>

- Search all flights:

```text
METHOD: GET
```

```html
ROUTE: http://3.136.215.243:8082/api/flights
```

```text
BODY: N/A
```

---

- Find a flight by its ID:

```text
METHOD: GET
```

<pre>
ROUTE: http://3.136.215.243:8082/api/flights/<b style="color:green">ID</b>
</pre>

```text
BODY: N/A
```

---

- Create a new flight:

```text
METHOD: POST
```

```html
ROUTE: http://3.136.215.243:8082/api/flights
```

```text
BODY: raw | JSON
```

---

- Update a flight:

```text
METHOD: PUT
```

<pre>
ROUTE: http://3.136.215.243:8082/api/flights/<b style="color:green">ID</b>
</pre>

```text
BODY: raw | JSON
```

- Delete a flight:

```text
METHOD: DELETE
```

<pre>
ROUTE: http://3.136.215.243:8082/api/flights/<b style="color:green">ID</b>
</pre>

```text
BODY: N/A
```

---

## Walkthrough:

1. Search all flights:

```text
METHOD: GET
```

```html
ROUTE: http://3.136.215.243:8082/api/flights
```

```text
BODY: N/A
```

---

2. Create a new flight:

```text
METHOD: POST
```

```html
ROUTE: http://3.136.215.243:8082/api/flights
```

```text
BODY: raw | JSON
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

3. Find a flight by its ID:

```text
METHOD: GET
```

<pre>
ROUTE: http://3.136.215.243:8082/api/flights/<b style="color:green">ID</b>
</pre>

```text
BODY: N/A
```

---

4. Update a flight:

```text
METHOD: PUT
```

<pre>
ROUTE: http://3.136.215.243:8082/api/flights/<b style="color:green">ID</b>
</pre>

```text
BODY: raw | JSON
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




-----

## Lessons Learned:
This was a very simple project, so I didn't run into any issues. It did help to reinforce the concepts involved in building a RESTful API to the Level 2 standards as described in the <a href="https://restfulapi.net/richardson-maturity-model/" target="_blank">Richardson Maturity Model</a>:<br><br>
<center><a href="https://martinfowler.com/articles/richardsonMaturityModel.html" target="_blank"><img src="images/richardsonmaturitymodel.png" alt="richardsonmaturitymodel" height="200" width="340"/></a></center>


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
