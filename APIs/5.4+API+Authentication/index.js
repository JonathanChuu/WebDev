import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "queen";
const yourPassword = "akindofmagic";
const yourAPIKey = "09abcf8b-7e45-45be-819f-dffd2fb74078";
const yourBearerToken = "8e384e4c-4c68-4cc2-a8c6-4f122741b0bd";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.

  try {
    const noAuthAPI = await axios.get("https://secrets-api.appbrewery.com/random");
    const noAuthResult = JSON.stringify(noAuthAPI.data);
    res.render("index.ejs", { content: noAuthResult })
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908

  //   const usernamePasswordBuffer = Buffer.from("queen:akindofmagic");
  //   const base64Data = usernamePasswordBuffer.toString('base64');
  //   const axiosObject = axios.create({
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Authorization': `Basic ${base64Data}`,
  //     }
  // });
  // console.log(axiosObject);

  try{
    const basicAuthAPI = await axios.get('https://secrets-api.appbrewery.com/all?page=2', {
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    });
    res.render("index.ejs", { content: JSON.stringify(basicAuthAPI.data) })
  } catch (error) {
    res.status(404).send(error.message)
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try{
    const apiKeyAPI = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    }
  )
    res.render("index.ejs", { content: JSON.stringify(apiKeyAPI.data) });
  } catch (error) {
    res.status(404).send(error.message);
  };
});


app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402

  try{
    const bearerTokenAPI = await axios.get(API_URL + "/secrets/42", {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}`
      },
    });
    res.render("index.ejs", {content: JSON.stringify(bearerTokenAPI.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
