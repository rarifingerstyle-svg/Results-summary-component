# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_2X12eZP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [GitHub repository URL here](https://github.com/rarifingerstyle-svg/Results-summary-component)
- Live Site URL: [Vercel URL here](https://results-summary-component-nine-livid.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (Fetch API for dynamic rendering)
- Google Fonts (`Hanken Grotesk`)

### What I learned

In this project, I learned how to build a responsive layout using CSS Flexbox and dynamically fetch data from a local `data.json` file using JavaScript.

#### Dynamic Rendering with Fetch API:
```js
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    // Dynamic element rendering code here
  });

  :root {
  --clr-light-red: hsl(0, 100%, 67%);
  --grad-bg-start: hsl(252, 100%, 67%);
  --grad-bg-end: hsl(241, 81%, 54%);
}

.summary-item.reaction {
  background-color: hsla(0, 100%, 67%, 0.08);
}
