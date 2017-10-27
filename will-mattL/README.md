# Templating

**Author**: Matthew LeBlanc Will Reid
**Version**: 2.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
This application is a blog that allows us to dynamically render to the page based on author and category. In this version we used the handlebars templating to dynamically render the articles.

## Getting Started
Clone the repo from github and run it on your local machine.

## Architecture
We are using a SMACSS organization of our CSS. We are using some light CSS animations to display and hide the menu, and we are using link tags to call the CSS in.  The index.html file reveals the basic template for each article; the blogArticles.js holds all the text content; the article.js file constructs each article and makes the posting available to the DOM; and the articleView.js file allows the user to interact with the elements on-screen.
We have linked in the handlebars.js library for more streamlined templating.

## Change Log

10-27-2017 9:21am - "finished setting up script, including handlebars.js and compiling template"
10-27-2017 10:09am - "implemented arrow notation for functions and supplied comments"

## Credits and Collaborations
This version was based on starter-code supplied by the CF301 teaching staff, and links to the normalize.css v 7.0 (github.com/necolas/normalize.css), and the handlebars.js v 4.0.11.  
