# Web - blogging website
<br>
## Features to be created :-
1. To create blog Post
2. To view blog Post
3. Post Update/Delete
<br>
* Same Header and Footer for every ejs page
* A css file for View Page, Home Page

## On _Home_ page
1. Can create a Post form asking 
 the post Title, post Content,
 post media( eg. photo,video).
 A simple html file and a css file required.
## On _view_ page(User redirected after submitting the web blog.)
1. The requests content is taken with help of this code as well input is taken from the 
req body.
```javascript
app.use(express.urlencoded({extended:true}));
```
2. This file is dynamically shown via a ejs file.
where the content is passed on to that file.
3. There will be 2 features. For each feature
button will be created **update** and **delete** 
a. On clicking the update feature the user wil be forwarded to a new page where on clicking it all these info will be forwarede via post http method.(info will be accessed via local.info {object passing while rendering an ejs file});
b. On clicking the delete feature a delete http method will be passed.{to be developed later.}
## On _update_ page 
1. All info will be previously filled with the info stored in the view page.
- dynamic html or ejs file will be rendered with forms values filled with the info from locals.
2. User can change it and can submit and then again redirected to the view page.

