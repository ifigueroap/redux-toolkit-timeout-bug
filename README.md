# Bug reproduction repo

## How to run

1. Go into `app` folder.
2. Run `npm install`.
3. Run `npx json-server --watch db.json --port 3005` to start the fake json API.
4. Star the application with `npm run start`.

## What to look for

In the file `TheAPI.ts` there is a timeout parameter, `globalApiTimeout`, when
it is set to `10` the API call yields an `ABORT_ERROR` (rather than a timeout
error). Rising this value, for instance to 1000 makes the API call succeed.
