# GFCC-Website-Redesign

Website redesign template for the Greater Framingham Community Church.

PURPOSE:

The purpose of this project is to give the Greater Framingham Community Church four web pages that showcase a potential redesign direction. At the end of this project, we will present GFCC with all repository assets and recommend a web design firm that is best suited for undertaking a full website redesign.

OBJECTIVES:

Implement a modern design
Add widgets for blogging and other social media tools
Remove the AD section of the home page
Draw the focus more on church-happenings Create a user-friendly interface
Create four sample pages of redesign (wireframes / source code)
Develop style documentation
CRITICAL SUCCESS FACTORS:

Higher Web traffic
More registered users
Less calls in the office regarding information
More viewers checking the calendar
UNDERSTANDING THE REPOSITORY:

The repository is made up of many folders and files. The index file you are currently viewing is located within the root directory of the repository. Within the root directory are several folders and files. The purpose of each older / file is listed below according to alphabetical order.

Folders
_src - location containing all html, css, js, and sass files. All developer editing should be done in this folder.
dist - location where all processed files will be dumped after gulp processes are run.
node_modules - location that contains all information needed for gulp processes. Should not be touched.

Files
Gulpfile.js - File that contains all processes. This is the file that runs when "gulp" is run from the terminal or git bash.
index.html - The current file being displayed.
package.json - json file that contains information regarding this repository including all its dependencies and github information.
readme.md - readme containing details on the project including the previously mentioned purpose, objectives, and critical success factors. contents are subject to change over the course of the project.

EDITING FILES

In order to edit the repository and take advantage of all automation tools that are included, first open the whole folder in your favorite text editor. navigate to the _src folder. This is the location where you will be working on all files. DO NOT work on files located in the dist folder as these are automatically generated files and will be overwritten by files in the _src folder.

make sure you have git installed on our machine as well as node.js. Once both programs are installed, you should be able to install gulp globally on your machine. do so by going to your terminal or git bash and typing npm install gulp -g. Once this is complete you should be ready to run gulp processes. navigate to the location of the repository and type npm install gulp -g. This will ensure that the node_modules folder has the most up-to-date versions.

Now run 'gulp' in your terminal. you should see a list of processes appear. If this is the case, gulpfile.js was successful in running. A web browser should open a new tab to a page resembling this documentation. You can now return to your _src folder and start to make changes. As you save your changes they will be automatically recognized by the gulp processes and be added to the dist folder. Finally, the web browser tab will refresh to reflect these changes. open any file within the dist folder from localhost:300/dist/html/"your_file.html". Click here or see below for a list of links to pages located in the "/dist/html/" folder.

This project was assigned as part of the BUIS 460: Information Systems Management course at Framingham State University.
