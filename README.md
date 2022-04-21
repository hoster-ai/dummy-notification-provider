  <div style="font-size:25px;text-align:center">Dummy notification provider</div>
  <hr>
  
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Supported HTTP calls
| Method | Endpoint |
| ------- | ------- |
| GET | [url](http://localhost:3001)/info |
| POST | [url](http://localhost:3001)/send |

## .env required
 ```bash
 # General
 SERVICE_PROVIDER_TOKEN=test
 ```

## Authentication
 Provider's token as bearer in headers

 *example*
 ```
 Authorization: Bearer test
 ```

 

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dummy responses
- Returns success response in a simple notification send
- Returns error response if ANY action field includes the string "error"

## Docker
Build
```
docker build -t dummy-notification:0.0.1 .
```

Run
```
docker run -p3001:3001 --rm -d dummy-notification:0.0.1
```