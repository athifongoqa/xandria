# **Xandria**
🚀 Deployment: 

[https://xandria-code.vercel.app/](https://xandria-code.vercel.app/)

## Description
This a proof-of-concept for a tool which can used by CODE and students to better navigate their internal resources. The plan is to eventually adapt this into a Open-Source solution where companies and teams can benefit from the same workflow.

## Project Status 🚧

The development of the project is still in progress.

## Installation 📦

To install this project and run it locally, please follow the following steps:

1. Open the terminal and run:
```
git clone https://github.com/athifongoqa/xandria.git
```

2. Navigate to the repository (`cd xandria`) and create a .env.local file as specified below;
3. Install the npm packages by running:
```
npm install 
```

<br>

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

Test against the development server:

```bash
npm run test:e2e:run
```
or
```bash
npm run test:comp:run
```

<br>

## .env.local
```
GOOGLE_ID=
GOOGLE_SECRET=
FIREBASE_API_KEY=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
CODE_LOGO=
XANDRIA_TOKEN=
XANDRIA_BE_URL=
SCRAPER_BE_URL=
FIREBASE_SERVICE_ACCOUNT_KEY=
```