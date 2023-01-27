# <a href="http://dlakhotia.com/ByeByeBytes" target="_blank" rel="noopener noreferrer"><b><i><ins>ByeByeBytes</ins></i></b></a>

<a href="http://dlakhotia.com/ByeByeBytes" target="_blank" rel="noopener noreferrer"><b><i><ins>ByeByeBytes</ins></i></b></a> is an encrypted repository of your end-of-life letters to loved ones and friends to be shared after you're gone. <b>BBB</b> is a fully-featured social media web application, built with MERN.

**Direct Link:** <a href="https://byebyebytes.herokuapp.com" target="_blank" rel="noopener noreferrer">https://byebyebytes.herokuapp.com</a>

<a href="http://dlakhotia.com/ByeByeBytes" target="_blank" rel="noopener noreferrer"><img src="https://i.ibb.co/LJkSczb/11111.jpg" /></a>

---

## Features

<a href="https://byebyebytes.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://i.ibb.co/WxvsRVD/22222.jpg" /></a>
- read, create, edit, and delete bytes (posts)
- like and unlike bytes
- sort bytes by likes, date, or controversial
- search bytes by title
- create, reply to, update, and delete nested comments
- sign up and login using JWT authentication
- auto-generate user avatars with RoboHash
- private message other users discretely in real-time
- create your own public bio for your profile
- view other users' profiles — their public bytes, comments, and liked bytes
- anti-spam cooldowns for posting and commenting
- profanity filter
- infinite scrolling
- fully responsive layout

---

## How It's Made

**Packages/Dependencies Used:**

axios, bad-words, bcrypt, cors, dotenv, emotion, express, express-validator, formik, jsonwebtoken, moment, mongoose, mui, nodemon, react, react-icons, react-markdown, socket.io, validator

---

## Problem-Solution Fit

The `target market` for **BBB** are individuals who are struggling with suicidal thoughts or mental health issues. Family members and loved ones of individuals who are at risk of suicide are also a TM, as they would be the primary and secondary guarantors who would receive the encrypted messages.

The `problem` the platform addresses is the lack of communication and support for individuals who are struggling with suicidal thoughts. Many people who are at risk of suicide may not have the support or resources they need to reach out for help, and **BBB** provides a way for them to express their feelings and thoughts in safe and secure channels.

**BBB** provides a `solution` by allowing users to log in and write lengthy messages to loved ones, which are encrypted and can only be accessed by designated primary and secondary guarantors in the event of their passing. This provides a way for individuals who are at risk of suicide to express their feelings and thoughts in a safe space, while providing a way for loved ones to be alerted to their struggles so support may be provided.

**BBB** offers a `unique value proposition` by providing a secure and private way for individuals who are struggling with suicidal thoughts to communicate with loved ones and to be sure that their thoughts will be shared in the event of their passing. It also allows loved ones to be aware of the individual's struggles and to provide support, while helping to ensure that the individual's last words and wishes are not lost or forgotten.

**BBB** could theoretically be `monetized` by offering a subscription-based model where users pay a monthly or annual fee to access the app's features. Additionally, considerations can be made for paid add-ons like advanced security options, additional storage for messages, and other premium features. I'd much rather reach out to and partner with organizations and groups that focus on mental health and suicide prevention (Talkspace and BetterHelp, among others) to promote the platform to those in need.

**BBB**'s main avenues of `distribution` include Apple's App Store and Google's Play Store, alongside an official browser-based web application.

---

## Optimizations

- someone with a great palette to add a splash of color!
- light + dark mode toggle
- public/private functionality
- nodemailer
- ocr capability
- video upload

---

## Installation and Usage

1. Clone this repository
```
git clone https://github.com/TypingTapestry/ByeByeBytes.git
```
2. Install dependencies
```
cd ByeByeBytes
npm install
cd client
npm install
```
3. Create a `.env` file in root directory
```
cd ..
touch .env
```
4. Add the following as `key = value`
```
PORT      = <any port>
MONGO_URI = <your db connection string>
TOKEN_KEY = <your secret>
```
5. Run the server
```
npm run server
```
6. Open a new terminal and start the development server
```
cd ByeByeBytes
cd client
npm start
```

---

## Contributions

<a href="http://dlakhotia.com/ByeByeBytes" target="_blank" rel="noopener noreferrer"><b><i><ins>ByeByeBytes</ins></i></b></a> is an open-source project. Whether you would like to help fix bugs or propose new features, all contributions are welcome. If you're interested in contributing, you may submit a PR or reach me directly on Discord at `QT#9789`.

---

<h6 align="center">Thank you to <a href="http://dlakhotia.com/er" target="_blank" rel="noopener noreferrer">the select few</a> for inspiring me to keep soldiering on.</h6>
