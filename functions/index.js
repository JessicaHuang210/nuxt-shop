const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const { Nuxt } = require("nuxt");
const express = require("express");

const app = express();

const config = {
  dev: false
};

const nuxt = new Nuxt(config);

let isReady = false;
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true;
  })
  .catch(() => {
    process.exit(1);
  });

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise;
  }
  res.set("Cache-Control", "public, max-age=1, s-maxage=1");
  await nuxt.render(req, res);
}

app.get("*", handleRequest);
app.use(handleRequest);
exports.nuxtssr = functions.https.onRequest(app);
