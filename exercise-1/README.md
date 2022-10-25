# EXERCISE 1.

You probably want to create a folder for this course on your computer, something like: 'FullStack2022'.
Whatever name you choose, go inside that folder and create a folder for the exercises of this course called: 'Exercises'.
Open your command line interface (e.g. Git Bash) in the Exercises folder.
Run the command: 'npx create-react-app exercise-1'
This will create a new React project called exercise-1. This can take a couple of minutes.
Note: on the first time you do this it will also install React.

After the process finished, type commands: 'cd exercise-1' and there: 'npm start'.
This will start the local development server and also automatically opens a browser window in the address: localhost:3000/
On the web page you should see a rotating React logo.
Note: Firewall might try to prevent this, so you need to allow it.
Note: Whenever you wish to stop to server, press Ctrl+C on the CLI window.

Open the exercise-1 folder in VS Code. (You might also type command: 'code .' in the exercise-1 folder before starting the server
-this opens VS Code in the correct folder automatically.)
In the folder 'src' open the file called 'App.js'. You will notice it contains the stuff we see on the web page.
Remove the link (from '<a' to '</a>'). Save, and you will see that the link was removed from the page.
Change the paragraph text (between '<p>' and '</p>') to your name. Save, and see that the text was changed on the web page.

Next, we will put our exercises in to GitHub.
First, go to your GitHub account and create a new repository. Set the option to 'Private'. This will give you the necessary instructions.
But because it's a private repo, in order to show it to the teacher, you must add him as a collaborator (from Settings).
But imporant: We want to create a repository out of the 'Exercises' folder, not the newly created 'exercise-1'.
So, for running 'git init' navigate back to the 'Exercises' folder, and run it there.
This way we can put all the exercises of this course to one repository - much easier than having a separate repo for every exercise.
Follow GitHubs instructions to push your React app to GitHub.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
