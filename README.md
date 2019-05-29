# burger-logger
*Full Stack App with Express, Mysql, and Handlebars*

## Purpose:
This app allowed me to practice writing my own ORM for MySQL and to practice using handlebars to serve dynamically generated content. The app is full stack with both the api server and the web server being handled by node.js and express. While not visually stunning this project required a lot of work by splitting everything into separate files which made it all more readable.

## How it works:
3 NPM packages were required for this project, MySQL, Express, and Express-handlebars. First the mysql schema and seeds are generated to provide a database for storing user input. A connection is established to this database using the mysql npm package. Next I wrote an ORM to handle get, post, and updating of the mysql database at a very abstract level. This was then handed off to the burger model which required the ORM and made the calls to the database with more specific elements relative to the burger database itself. As each file was added to the project it would require the files precedding it. The controller was written to handle the routing required to display the page as well as perform the various database functions targeting the correct API endpoints. This also called the render of the handlebars index page which was built from the main handlebars files, the index files, and the burger-block partials. The burger block partials looked at whether the burger had been devoured and put it in the correct column on the page. The client-side javascript was included on the index.handlebars page as a script tag. Location.reload functions were performed to reload the page upon generating new content. Lastly the server.js file was written to run the express engine which would server the handlebar files and do the routing which was written in the controller file. This was all then deployed to heroku for hosting and peristent up-time versus being hosted locally.


## How to use:
The actual app funcitonality is very limited, you can submit a new burger to eat using the text-box at the bottom. This will then display the burger on the left side of the screen with a devour it button. When you click the button the burger's devoured boolean is changed to true in the database which when the page is reloaded (which happens on clicking the devour  button) it will instead be rendered in the right column of already eaten burgers.


## Contributors:
This project is maintained and contributed to solely by myself, Tyler Ward.