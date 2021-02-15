# Team-Profile-Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Team profile genereator creates a index.html file of team members based on user inputs in the command line termainl. The application prompt question on command line termainl and once you finished the adding team members then the appliaction will genereate the index.html file.

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation
1. Clone the current repository to your computer and run command line to repository directory.
2. Install dependencies using -npm install- command.
```
npm install
```
3. Then type -node index.js- to run the application
```
node index.js
```

## How to Use
Once you run node inde.js the application will run and prompt the following questions
```
Enter the team manager's name ?
Enter the team manager's employee ID ?
Enter the team manager's email address ?
Enter the team manager's office number ?
```
then select from the following menu to add more team members of finish the application
```
----  Add new team members OR Finish  ----
      - Add an engineer
      - Add an intern'
      - Finish building my team
```
If you would choose to Add an engineer then the following questions will be prompt
```
----  Add an engineer  ----
Enter the engineer's name ?
Enter the engineer's employer ID ?
Enter the engineer's email address ?
Enter the engineer's GitHub username ?
```
If you would choose to Add an intern then the following questions will be prompt
```
----  Add an intern  ----
Enter the intern's name ?
Enter the intern's school ID ?
Enter the intern's email address ?
Enter the intern's school ?
```
And finily if you would choose to Finish building my team then application will generate the html file.
```
----  Finish building my team  ----
Successfully index.html is created
```

All you need is to answer the prompt question and the application will generate the html file automatically using your responses.

[Click Here](https://drive.google.com/file/d/1jxbrEhsSHyNQBtOd_zqm-LFPxm8Zr_En/view) to view walkthrough video of how to use the application.

## Screenshots
### Prompt questions on terminal command-line
![Image of prompt questions](https://raw.githubusercontent.com/MushtaqSafie/Team-Profile-Generator/main/assets/prompt.JPG)

### Generated index.html file (source file screenshot)
![Image of index.html source file](https://raw.githubusercontent.com/MushtaqSafie/Team-Profile-Generator/main/assets/html.JPG)

### index.html display
![Image of index.html](https://raw.githubusercontent.com/MushtaqSafie/Team-Profile-Generator/main/assets/output.JPG)


## Tests
The application has 4 Test Suites and 16 tests using npm jest, in order to test all the classes function within the appliaction. TO run test files type the following in terminal.
```
npm run test
```

### Screenshot of pass test
![test](https://raw.githubusercontent.com/MushtaqSafie/Team-Profile-Generator/main/assets/test2.JPG)


## License
This application is covered under the MIT License.
For more information, [click here](https://opensource.org/licenses/MIT).

## Questions
**My GitHub Profile**: [MushtaqSafie](https://github.com/MushtaqSafie)

If you have any further questions, please email me at [mushtaq.safie@students.mq.edu.au](mailto:mushtaq.safie@students.mq.edu.au).
