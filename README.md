# summer-cicd-mern

## To Copy Repo for Session Work
1. Fork the repo (you MUST fork the repo BEFORE you clone it)
2. Go to the forked repo on your GitHub profile and click clone. 
3. Copy/paste the URL into your local terminal and run.

## To Run Locally
1. Navigate into the repo folder on your local
2. Run `npm install` (this should install for both server and client)
3. Run `npm run dev`

### To verify app is running: 
1. Use Postman to make a GET request on `localhost:3001/api/config`. You should see: 

```javascript
{
    success: true
}
```

2. Open `localhost:3000` in your browser. You should see a default Create React App displayed. Open the console in the browser and you should see the same API call logged in the console. 

Note: This application was built using Node 14.x. It also assumes you have MongoDB running as a service already.

Happy Coding!

![Pipeline](https://media.giphy.com/media/0cN8cSVPSGD8jcl4iS/giphy.gif)