## Project: Welcome to React, Next.js and TailwindCSS

Author: Lauren Main

Version 4.0

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

- [x] pages/index.js exports `<Home>` component
- [x] if user not logged in `<LoginForm>` renders
- [x] if user logged in `<CookieStandAdmin>` renders
- [x] `<LoginForm>` should receive a function passed in to call when form is submitted
- [x] username/password should be arguments
- [x] when user fills out form to add location data posts to API
- [x] `<CookieStandTable>` renders data immediately w/ no page refresh
- [x] `<CookieStandTable>` adds delete icon, which deletes a cookie stand w/ no page refresh

Version 4.0 Feature Tasks

- [x] if user not logged in `<CreateNewUser>` renders
- [x] users cannot see other users' entries
- [x] updates API end points to allow new user registration in project\urls.py
- [x] updates models.py
- [x] adds serializer in cooke_stands\views.py
- [x] adds serializers.py in accounts
- [x] deploy to Vercel
- [x] create a [preview build](https://cookie-stand-admin-git-dev5-elleem.vercel.app/)
- [x] update readme with link to [deployed app](https://cookie-stand-admin-elleem.vercel.app/)


### Setup

clone repo from github

### Initialize

To initialize type `npm run dev` into your console and launch the localhost link. 
