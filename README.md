# React Pigeon Blog

This project was designed to practice building a React app and splitting it into structured components, then using CSS modules and components to style it. Auth0 was used to add authentication, and the website was then deployed.

See my website here: https://fervent-feynman-e562e4.netlify.app/

## Documentation

### Planning

[React Structure](https://github.com/SchoolOfCode/w10_recap-tasks-ajp64/blob/master/reactplan.dio)

The first step was planning out the structure of the app. From what was initially provided, the different parts of the app were taken apart and put into components, then reassembled in a more coherent structure.

### CSS Modules

CSS modules were used for some styling. ".module.css" files were created for each component that required it, and these were imported into the "index.js" file for the component and used.

### Component Library

[Ant Design](https://ant.design/) was used as a component library for this app. Multiple components were used including:

- [Layout](https://ant.design/components/layout/) (Header, Sider, Content)
- [Typography](https://ant.design/components/typography/) (Title, Paragraph)
- [Comments and Avatars](https://ant.design/components/comment/)
- [Buttons](https://ant.design/components/button/)

### Auth0

[Auth0](https://auth0.com/docs/quickstart/spa/react) was used to require authentication to see the body of the page. Using the react hook functionality, a sign in is prompted when accessing the page. Once logged in, the used is redirected to the main page with the blog information displayed.

### Deployment

Netlify was used to deploy the React app. The build was made directly from the Github repo. Due to certain warnings coming from the use of the Ant Design, the build command was configured to ignore warnings as errors "CI= npm run build".

## Lessons Learned

### Structure

I need to continue working on how to sucessfully plan a react app from the start. While trying to structure the components, states and props, I soon realised this would need to change as I build the app. This was mostly around needing to change where states lived, and not needing as many props as I originally thought.

Additionally, once Auth0 was brought in, to get this working as intended I had to introduce new Auth hooks and components to set it up correctly. This forced a change to the structure of the app.

### Auth0

While I was able to achieve the basic objective of requiring login to view the page, it doesn't flow as I would like. Ideally there would be a landing page, from which the user could then login and view the page. I wasn't able to achieve this as I hoped but I did get a better understanding of how Auth can be used with react.
