//MVC
//data base structure done 
//controller done
//route done
//utils done
//connectDB done

### Backend platform

## MVC 

## All urls

### home route
- **GET** request for home route
- the url of home route
```
http://localhost:3000

```

### register route
- **POST** request for register route
 - the url of home route
```
http://localhost:3000/api/users/register

in header 

Content-Type: application/json

body (body ->raw -> JSON)

{
  "name": string,
  "email": string,
  "password": string
}

```



### Login route
- **POST** request for login route
 - the url of home route
```
http://localhost:3000/api/users/login

in header 

Content-Type: application/json

body (body ->raw -> JSON)

{
  "email": string,
  "password": string
}

```



### booking route
- **POST** request for booking route
 - the url of home route
```
http://localhost:3000/api/bookings/create-booking

in header 

Content-Type: application/json
Authorization: Bearer [The token from login response]

body (body ->raw -> JSON)

{
    "data": date,  // YY-MM-DD
    "purpose": string
}

```



### get booked rpoute of the user 
- **POST** request for booking route
 - the url of home route
```
http://localhost:3000/api/bookings/get-bookings

in header 

Content-Type: application/json
Authorization: Bearer [The token from login response]

```