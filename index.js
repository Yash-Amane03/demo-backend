require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitData = {
    "login": "Yash-Amane03",
    "id": 154017017,
    "node_id": "U_kgDOCS4c-Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/154017017?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Yash-Amane03",
    "html_url": "https://github.com/Yash-Amane03",
    "followers_url": "https://api.github.com/users/Yash-Amane03/followers",
    "following_url": "https://api.github.com/users/Yash-Amane03/following{/other_user}",
    "gists_url": "https://api.github.com/users/Yash-Amane03/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Yash-Amane03/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Yash-Amane03/subscriptions",
    "organizations_url": "https://api.github.com/users/Yash-Amane03/orgs",
    "repos_url": "https://api.github.com/users/Yash-Amane03/repos",
    "events_url": "https://api.github.com/users/Yash-Amane03/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Yash-Amane03/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-12-16T18:38:28Z",
    "updated_at": "2024-09-26T12:33:30Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login",(req,res)=>{
    res.send("Pls login to my server")
})
app.get("/facebook",(req,res)=>{
    res.send("this is facebook")
})
app.get("/github",(req,res)=>{
    res.json(gitData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})