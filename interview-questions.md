# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
JSX is a combination of both JavaScript and html elements. When we want to execute javascript code we need to initialize it with curly braces. For html elements we need them to be in the return so they can become visible on the display.

Researched answer:
JSX is a syntax extention that makes the process of writing of HTML in react easier for the user. A major difference between JSX and HTML is that when using JSX you are required to have a single element returned. 

answer via:
https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/#:~:text=One%20of%20the%20major%20differences,makes%20the%20code%20more%20readable.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer:
Yarn is a terminal command that allows the user to pull in the necessary extentions to perform tasks like testing code with jest. By using the command yarn jest you can run the added files in your code to execute test that will either fail or pass based on the funciton you created. 

Researched answer:
Yarn is a very common package manager for JavaScript and stands for Yet Another Resource Negotiator. Package .json is a file that is ran by the comman yarn. It contains functional metadata(name, version, and dependencies).

answer via:
https://phoenixnap.com/kb/package-json#:~:text=npm%20init%20command.-,The%20package.,the%20project%20and%20handle%20dependencies.



3. What is a React component?

Your answer:
A react component is an individual piece of a webpage. For example if we are writing code in react and want to build a navigation bar for users we can place that in a seperate file. From here we would import that file to our main file app.js as our brains of the code. This helps the program to be more organized and concise.

Researched answer:
Components are reusable bits of code that are seperated from eachother. Their are two types of componets, class and function componets. They act like JavaScript functions, however are orgranized separately.

answer via:
https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.

4. What is the difference between state values and props in React?

Your answer:
State values are a way to make our JSK code dynamic. They are a variable that is declared to be used throughout our code that will allow the value to changed by user input . Props is short for properties. They act much like parameters for our funcitons that allow them to have different behavor to then be called and displayed on the webpage. 

Researched answer:
The difference between state values and props is that state is locally owned and is update by the componet. Props are only read by their parent. Their change is based on the upstrean callback function. 

answer via:
https://www.knowledgehut.com/blog/web-development/react-state-vs-props


5. What is the DOM?
Your answer: DOM stands for (forgot what the D was for) OBJECT Model. It is how the flow of events takes place from embedded funcitonalty to what the user intereacts with real-time. 

Researched answer:
The Documnet Object Model is the intereface for the web document/page. It is the structure that represents the webpage so that things such as style, elemets, and functionality can be updated. s

answer via:
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: A div tag is an html element that allows us to break up elements on the webpage into seperate containers. Div can also be used for what is known as nesting which is a concept that allows us to place containers within containers. I am unsure of the difference between the two. 

Researched answer: A Div is used for organization of block-level elements as well as the styling for them. A span tag perfroms the same but is used from inline styling and organization. 

answer via: 
https://blog.hubspot.com/website/span-vs-div#:~:text=span%20vs%20div-,span%20vs%20div%20in%20HTML,for%20inline%20organization%20and%20styling.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
A model for organizing design of software based on data and objects as opposed to funcitons and logic. 

2. Ruby:
A programming language that was created with a focus on simplicity. The difference between ruby and what we have learned thus far is in Ruby all datatypes are objects (even primitive).

3. Implicit return:
Having a return value for a funciton without using the keyword return. 

4. Ruby blocks:
A funciton within Ruby that is anonymous and can be passed into a method. 

5. Ruby hashes:
A way of structuring data that is stored inside of key-value pairs. 
for example: 
pets = {'luna' => 4, 'neela' => '6'}