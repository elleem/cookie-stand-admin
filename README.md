## Project: Welcome to React, Next.js and TailwindCSS

Author: Lauren Main

Version 3.0

### Links and Resources

Thank you to chatGPT for debugging assistance. 

### Feature Tasks and Requirements

Version 1.0 Feature Tasks

- [x] `<Head>` component with page title set to "Cooke Stand Admin"
- [x] `<Header>` component that matches the spec
- [x] `<main>` component containing `<form>`
- [x] placeholder component showing a JSON string of last created Cookie Stand
- [x] `<Footer>` component that matches the spec
- [x] components are in their own functions
- [x] components are in their own files

Version 2.0 Feature Tasks

- [x] componentize index.js
- [x] add `<ReportTable>` per spec
- [x] if reports is empty render `<h2> No Cookie Stands Available>`
- [x] if reports is not empty render a table with thead, tbody and tfoot components
- [x] update `<CreateForm>` per spec
- [x] import time slot data from data.js
- [x] update `<Footer>`

Version 3.0 Feature Tasks

- [] pages/index.js exports `<Home>` component
- [] if user not logged in `<LoginForm>` renders
- [] if user logged in `<CookieStandAdmin>` renders
- [] `<LoginForm>` should receive a function passed in to call when form is submitted
- [] username/password should be arugments
- [] when user fills out form to add location data posts to API
- [] `<CookieStandTable>` renders data immediately w/ no page refresh
- [] `<CookieStandTable>` adds delete icon, which deletes a cookie stand w/ no page refresh


### Setup

clone repo from github

### Initialize

To initialize type `npm run dev` into your console and launch the localhost link. 