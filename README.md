# iHeartMedia - Music Lab - Code Challenge

## Startup
### Prerequisites
1. install node
2. install aws sam cli

### Start AWS SAM App
From the /aws-graphql-app/src directory, run `npm start`.

This will compile the typescript files and output a build of the service into the .aws-sam directory. This may take a minute or two to complete.
Finally, an api instance will start at [localhost:3000/graphql](localhost:3000/graphql)

### Start React App
On a separate terminal, navigate to the /react-app directory and run `npm start`.

This will start the React app on [localhost:4000](localhost:4000)


## Requirements
Create a React application that shows a list of songs with their information and metrics displayed. The app should have at least **2 pages (views)**:
A landing page, and a page to show data coming from an API.

- Use typescript and graphql for everything where applicable.

- Fork this repo and share the link when you are finished!

### UI Checklist

- [ ] Create a React App using functional based components and hooks. No class based components, please.

- [ ] Create 2 views ( pages ) using React Router.

- [ ] Create a page that renders a table displaying a list songs coming from the API. Each row is a song, each column is a song attribute. 
 
   - [ ] Do not use `table` tags

- [ ] Employ **some** styling but it doesn't have to be much. You can use the styled-components library but do not use any other styling help.

- [ ] Allow the user to scroll vertically and horizontally through columns and rows that go off screen.

- [ ] Allow the user to sort the order of the song rows by the column values.

- [ ] It **does not** need to be mobile responsive.

### API Checklist

- [ ] Store the included JSON file in an S3 bucket and use the AWS SAM CLI with a **node.js** lambda function to serve the frontend with the data.

- Authentication is not necessary.

- You do not need to deploy or host this anywhere.

- SAM CLI instructions: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
