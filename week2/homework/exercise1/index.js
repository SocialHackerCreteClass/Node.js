`use strict`

const express = require("express");
const fs = require("fs"); 
const randomId = require("uuid");

const app = express();
app.use(express.json());

const port = 3000;
const blogPath =  "./blogs/blogs.json";

// POST A NEW BLOG
app.post("/blogs", (req, res) => {
    // How to get the tile and content from the request??
    const newPost = {
        id: randomId.v4(),
        title: req.query.title, 
        content: req.query.content
    };

    fs.access(blogPath, fs.F_OK, (err) => {
        if (err){   // There is no file with that name
            let blog = {};   // creates the JSON format
            blog.table = [];   // Table inside JSON
            blog.table.push(newPost);
            fs.writeFileSync(blogPath, JSON.stringify(blog, null, 4)); 
            res.end("New file created");
        }
        else {   // The file exists already
            console.log("File exists");
            readAndFind("post", req, res, newPost);
        }
    })
});

// UPDATE NEW BLOG
app.put('/blogs/:id', (req, res) => {
    // How to get the tile and content from the request??
    fs.access(blogPath, fs.F_OK, (err) => {
        if (err){   // There is no file with that name
            res.send("Files does not exist...");
            res.end();
        }
        else {   // The file exists already
            readAndFind("put", req, res);
        }
    })
});

// DELETE A BLOG POST
app.delete('/blogs/:id', (req, res) => {
    // How to get the tile and content from the request??
    fs.access(blogPath, fs.F_OK, (err) => {
        if (err){   // There is no file with that name
            res.send("Files does not exist...");
            res.end();
        }
        else {   // The file exists already
            readAndFind("delete", req, res);
        }
    })
});

// GET A BLOG POST
app.get('/blogs/:id', (req, res) => {
    // How to get the tile and content from the request??
    fs.access(blogPath, fs.F_OK, (err) => {
        if (err){   // There is no file with that name
            res.send("Files does not exist...");
            res.end();
        }
        else {   // The file exists already
            readAndFind("get", req, res);
        }
    })
});

function readAndFind(method, req, res, newBlog = ""){
    fs.readFile(blogPath, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log("Error trying to read 'blogs.json' file...");
            throw err;
        } else {
            let blog = JSON.parse(data); // Gets the info from the blog file
            const found = blog.table.some(post => req.params.id === post.id);

            // POST. NEW POSTS DO NOT REQUIRE TO READ AN ID
            if(method === "post"){
                blog.table.push(newBlog);
                fs.writeFile(blogPath, JSON.stringify(blog, null, 4), 'utf8',err => {
                    if(err) throw err; }
                ); // write it back
                res.end("Ok");
            }

            if (found) {
                // GET METHOD
                if(method === "get"){
                    blog.table.forEach((post, index) => {
                        if (post.id === req.params.id) {
                            res.send(post);
                            res.end();
                        }
                    })
                }
                // PUT
                if(method === "put"){
                    blog.table.forEach((post, index) => { 
                        if(post.id === req.params.id){
                            blog.table[index].title = req.query.title ? req.query.title : post.title;
                            blog.table[index].content =  req.query.content ? req.query.content : post.content;
                        }
                    })
                    fs.writeFile(blogPath, JSON.stringify(blog, null, 4), 'utf8',err => {
                        if(err) throw err; 
                    }); // write it back 
                    res.end('ok'); 
                }
                // DELETE
                if(method === "delete"){
                    let indexDeletePost = 0;
                    blog.table.forEach((post, index) => {
                        if (post.id === req.params.id) {
                            indexDeletePost = index;
                        }
                    })
                    blog.table.splice(indexDeletePost, 1);
                    fs.writeFile(blogPath, JSON.stringify(blog, null, 4), 'utf8', err => {
                        if (err) throw err;
                    }); // write it back 
                    res.end('ok'); 
                }
            } else {
                res.end("Post does not exist.")
            }
        }
    })
}

app.listen(port, () => console.log(`Port ${port} ready for action!`));  
