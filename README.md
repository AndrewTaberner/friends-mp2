# Friends Fan site

The Friends Fan Site is a fictional tribute website celebrating the iconic TV sitcom Friends, offering fans a nostalgic, interactive experience filled with quotes, trivia, character bios, epsisode guides.

---

## Features

1. Navigation bar
2. Character bios section
3. Interactive trivia quiz (JavaScript-powered)
4. Correct/Incorrect result dispalyed, with an audio response
5. Total number of correct/incorrect answers dispayed
6. Episode guide with a search and filter abilty by season or keyword
7. "Back to top" button for better user experience
8. Clean, responsive layout using Bootstrap 5
9. Custom-styled buttons and hover effects
10. Full-screen booking form with background image
11. Custom-styled form fields and submit button
12. Accessible and user-friendly design
13. Video playback which stops automatically when modal is closed
14. Accessible and user-friendly interface

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript
- **TMDB (The Movie Database) API** – for retrieving Friends episode and show data

---

## Audience

This website is designed for all fans of the Friends series—from casual viewers to hardcore superfans. It appeals to anyone who enjoys sitcoms, nostalgic 90s popular culture, and interactive fan experiences.

---

## Rationale for development

The Friends sitcom remains a globally recognized and beloved show, with a multi-generational fan base. This project was created to provide a centralized, easy-to-navigate platform that celebrates the show’s legacy through character spotlights, famous quotes, and a fun to play quiz.

### The key drivers behind the project are:

- Fans often search for quotes, character info or episodes, these could be usually spread across multiple platforms.
- A single, well-designed, mobile-friendly site brings together all those fun elements in one place.
- Interactive features (e.g. fun quz) keep users engaged and extend time-on-site.

### The website directly addresses these needs by:

- Providing content about each main character, helping users learn or reminisce.
- Displaying fan-favorite quotes with custom styling and images.
- Including a quiz section that lets users test their Friends knowledge.
- Using responsive design to ensure accessibility across devices.

## Security Considerations

This project uses the **TMDB (The Movie Database) API** to fetch Friends episode and show data.

- I acknowledge that embedding an API key directly in front-end code is **not secure**, as it exposes the key to anyone inspecting browser code.
- In this case, the key used is from TMDB, a **public API with generous free-tier access**, and it is **not tied to any sensitive or personal data**.
- Backend/server-side handling of sensitive keys (e.g., using .env files and Express.js) was not covered in the current scope of the course, and adding such features would go beyond the project requirements. So in this instance the API key remains in the front-end as per current learning scope.

> In a production environment, API keys would be protected by routing all requests through a secure backend server.

---

## User Stories

User stories are short, simple descriptions of a feature or requirement from the end user’s perspective. They help teams understand what users need and why. This aid the planning and design process. Here are the user stories for the project.

- As a First-Time Visitor, I need easy navigation and a user-friendly design, including a responsive layout for my device, so I can find information quickly and efficiently. I want a responsive, mobile-friendly site, so I can navigate easily regardless of my device

![Homepage showing navigation and layout](./assets/images/home-page.png)

- As a Quiz Player, I want to answer Friends-themed questions with audio and visual feedback, so I can test my knowledge and enjoy a fun, interactive experience.

![Gallery page showing cars](/assets/images/our-range.png)

- As an Episode Explorer, I want to search and filter Friends episodes by title, summary, and season, so I can find specific episodes quickly.

![Gallery page showing cars](/assets/images/our-range.png)

- As a Character Fan, I want to view profiles of the main characters with photos, quotes, and descriptions, so I can appreciate their roles in the show.

![Contact page showing contact details](/assets/images/contact-page.png)

---

## Project Planning

### Project board

The project board is a tool to aid a developer what the minimum elements are needed to be created for the website to be fit for purporse. The user stories are assigned labels for must-have, should-have, could-have (MSC prioritization):

- Must-Have: Character bios, quotes section, quiz, responsive layout
- Should-Have: YouTube embed, scroll-to-top button
- Could-Have: Easter eggs, themed favicon, hover effects

The project board can be viewed here:
[project board](https://github.com/users/AndrewTaberner/projects/3)

## Wireframes

The basic wireframes were drawnup. Here is an example:

![wireframe](./assets/images/wireframe.jpg)

## Design choices

The overall design was to give an authentic Freinds style feel. The following design choices were made with this in mind:

### Font

The font chosen was "Caveat". This was chosen to give the pages a realistic Friends feel.

### Colours

The colour scheme was generated from colormind.io and has colours of white and grey to give a good contrast.

![colors](./assets/images/colourmind.jpg)

## Testing

Several different methods were employes for testing, These were:

- Features Testing
- Browser Compatability
- Responsiveness
- Code Validation
- Lighthouse
- Accessibility

To view the project and conduct testing VSCode terminal command as shown below was used. Then the link below was followed by using 'ctrl + click'.

![link](./assets/images/terminal-link.jpg)

### Feature Testing

This tests the functional elements of the site.

|       Feature        |                    Test Description                     |                     Expected Outcome                     |        Actual Outcome         | Result  |
| :------------------: | :-----------------------------------------------------: | :------------------------------------------------------: | :---------------------------: | :-----: |
|         Logo         |                     Click logo icon                     |                   Home page displayed                    | Home page displayed correctly | ✅ Pass |
|    Navigation Bar    | Click links (Home, Our Range, Contact, Request a Quote) |            Navigates to correct section/page             | All links function correctly  | ✅ Pass |
|    Our Range Page    |                  View gallery of cars                   | High-quality images and correct specifications displayed |   All images load correctly   | ✅ Pass |
|     Contact Page     |                View contact information                 |      Correct phone number, email, and address shown      |  Details displayed correctly  | ✅ Pass |
| Request a Quote Form |                 Submit valid form data                  |                Redirects to Success page                 |  Redirect works successfully  | ✅ Pass |
| Request a Quote Form |                   Submit empty fields                   |        Browser blocks submission and shows error         |       Validation works        | ✅ Pass |
| Request a Quote Form |                   Enter invalid email                   |              Browser blocks form submission              |       Validation works        | ✅ Pass |
|  Social Media Links  |              Click social icons in footer               |        Opens correct social media page in new tab        |        All links work         | ✅ Pass |

### Form Validation Testing

Testing was conducted for the quote request form to ensure user input is correctly validated.

|            Test Case             |          Expected Outcome           |           Actual Outcome           | Result  |
| :------------------------------: | :---------------------------------: | :--------------------------------: | :-----: |
|        Submit empty form         | Should show required field warnings | Browser prevented form submission  | ✅ Pass |
|       Submit invalid email       |  Form Should show validation error  | Browser displayed validation error | ✅ Pass |
| Submit complete and correct form |      Redirect to Success page       |      Successfully redirected       | ✅ Pass |

### Browser Compatibility

This tests compatibilty of the project on browsers tha the user will commonly use.

| Browser tested | Tested Elements |      Intended Responsiveness       | Result  |
| :------------: | :-------------: | :--------------------------------: | :-----: |
|     Chrome     |    Full site    | Fully functional, no visual errors | ✅ Pass |
|      Edge      |    Full site    | Fully functional, no visual errors | ✅ Pass |
|    Firefox     |    Full site    | Fully functional, no visual errors | ✅ Pass |

### Responsiveness Testing

The responsiveness of the site was tested on different devices and screen sizes.

|  Device Tested   | Screen Size Tested |           Renders as expected           | Result  |
| :--------------: | :----------------: | :-------------------------------------: | :-----: |
|    iphone 16     |       <600px       | Navigation and layout adapted correctly | ✅ Pass |
|      Tablet      |       768px        | Layout scaled properly, images resized  | ✅ Pass |
| Laptop (1024px)  |       >700px       |     Layout and responsiveness good      | ✅ Pass |
| Desktop (1440px) |    Large screen    |            Layout maintained            | ✅ Pass |

A mock up of this can be viewed [here](./assets/images/mock-up.jpg)

### Code Validation

## W3C CSS Validation

This was carried out to check for errors in the CSS files. The results are shown below.

![W3C-result](./assets/images/w3c-css.jpg)

## Validator

This was carried out the validate the code in each HTML file.
|Validator|Code Tested|Result|
| :------------: | :-----------------: | :---------------------: |
|W3 HTML Validator|index.html|No errors found, for info and a warning only|
![info-warning](./assets/images/index.html-info-warning.jpg) Info message due to format tool Prettier.
|W3 HTML Validator|gallery.html|Errors found, Warning shown|
![error](./assets/images/stray-tag.jpg)
![warning](./assets/images/validator-warning.jpg)
|W3 HTML Validator|quote.html|No errors found, for info and a warning only(see index.html)|
|W3 HTML Checker|success.html|No errors found for info (due to Prettier)and a warning only(see index.html)|
|W3 CSS Validator| style.css|No errors found|
![error](./assets/images/css-validation.jpg)|

### LightHouse

Performance and accessibilty testing was conducted usin Lighthouse. This is accessed via DevTools. As seen below, no issues were encoutered.

![lighthouse-result](./assets/images/lighthouse-result.jpg)

## Issues and Solutions

| Issue                                           | Solution                                                                                                                                                                                |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Background image hidden**                     | The form initially covered the background. We fixed this by moving the background image to the parent `.booking-form` and using `min-height: 100vh` with flexbox to center the content. |
| **Form shrinking on large screens (4K)**        | Adjusted padding and width constraints using `max-width` and flexbox to keep the form proportionate across screen sizes.                                                                |
| **Video audio kept playing after modal closed** | JavaScript resets iframe `src` on modal close:<br>`iframe.src = iframe.src;`                                                                                                            |
| **Unclear where to place modal and scripts**    | Placed modal HTML just before the closing `</body>` tag, with JavaScript right after it.                                                                                                |
| **Inconsistent button styling**                 | Styled the video button using `.btn-light` and custom CSS for consistency.                                                                                                              |
| **Sticky footer wouldn’t stay on bottom**       | Used flexbox on `body` and `main` to push the footer to the bottom.                                                                                                                     |
| **Footer not full width**                       | Used `width: 100vw` and negative side margins to stretch footer edge-to-edge.                                                                                                           |
| **Form validation not user-friendly**           | Used HTML5 attributes like `<input required>` and `<input type="email">`.                                                                                                               |
| **Mobile overflow issues**                      | Used Bootstrap responsive classes like:<br>`<div class="col-12 col-md-6">`                                                                                                              |
| **Background image obscured by form**           | Moved the background to the parent and added a dark overlay with opacity:<br>`background: url(...) center/cover no-repeat fixed;`                                                       |
| **Navbar overlapped carousel**                  | Added `z-index: 1000` to navbar CSS:<br>`#navbar { z-index: 1000; }`                                                                                                                    |

## Summary

All major features and pages were successfully tested across multiple browsers and devices.
Form validations work as intended, navigation is smooth, and the site is fully responsive and accessible.
The project meets high standards for performance, usability, and SEO.
Minor warnings from validators were reviewed and found non-critical.

---

## Video Integration

- A modal popup contains an embedded **YouTube video**.
- The video is triggered by a **“Watch Promo Video”** button.
- Video stops automatically when modal is closed.

---

## Deployment

The steps below are used to deploy the project to Github pages.

1.  Login to github.
2.  On the dashboard screen select "AndrewTaberner/milestone-project-1"
    From the top respositaries section.
    ![images](./assets/images/Repo-section.jpg)
3.  Click on the "settings" icon.
    ![settings](./assets/images/settings.jpg)
4.  In the sidebar on the left click on "Pages"
    ![images](./assets/images/pages.jpg)
5.  Under Build and Deployment select "Deploy from a branch" from the Source dropdown menu.
    ![images](./assets/images/build.jpg)
6.  Under Branch, below the Source dropdown menu, select "main" and "/ root" respectively.
7.  Select Save to confirm

Once confirmed, GitHub will build and deploy the site. After a few minutes a link to the webpage will appear.
![images](./assets/images/build.jpg)
You may need to refresh the page to see the link.

The deployed website can be viewed here:

- [View the deployed website](https://andrewtaberner.github.io/milestone-project-1/)

Once deployed, the project was tested using various devices including a laptop and mobile phone. On the desktop, browsers Edge, Chrome and Firefox were used to certify compatibility. DevTools was also used to check responsivness.

## Deployed project

![images](./assets/images/mock-up.jpg)

## How to run the project loacally

To Clone the project from GitHub:

1. Navigate to the repository [https://github.com/AndrewTaberner/milestone-project-1]
2. Click the Code button and copy the repository URL.
3. Open your terminal or Git Bash.
4. Change your working directory to where you want the cloned directory to be made.
5. Type git clone then paste in the [repository URL] from step 2.
6. Press Enter.

## Development Life Cycle

### Planning

- Defined the project goal: Create a high-end car hire website targeted at special event customers (weddings, proms, graduations).

- Identified the core features needed: Navigation, a fun quiz section powered by JavaScript, an episode guide in conjuction with an API.

- Developed user stories to clearly define user needs and help prioritize features.

- Created a project board with Must-Have, Should-Have, and Could-Have (MSC) labels to organize development tasks.

### Design

- Created initial wireframes for all major pages to visualize layout and user flow.

- Selected a modern, Freinds-inspired color palette (lilac, white, black) using Colormind.io to match the brand theme.

- Chose the "Big Shoulders" font to give the website a Friends themed feel.

- Planned a responsive design to ensure usability across devices (desktop, tablet, mobile).

### Development

- Built the website using HTML, CSS, JavaScript and some Bootstrap components (e.g., navigation bar, cards).

- Implemented the navigation bar to allow easy movement between sections.

- Developed additional section slectors using card layouts for asthetics.

- Created a Fun quiz section with interactive audio and aslo displayed to the user final score and revealed correct answers to questions answered incorrectly.

- Created an episode guide with search and filtering capabilties.

- Added social media links and icons (using FontAwesome) to enhance user engagement.

## Testing

### Feature Testing:

- Verified that all buttons, the quiz, the episode guide and links worked correctly across all pages.

### Browser Compatibility:

Tested the site on Chrome, Edge, and Firefox browsers to ensure consistent appearance and behavior.

### Responsive Testing:

Checked responsiveness on multiple screen sizes (desktop, tablet, mobile) using DevTools and physical devices.

### Code Validation:

- Used the W3C Validator to validate HTML and CSS code.

- Used .............. to validate JavaScript.

- Addressed errors and warnings (except some minor ones caused by code formatting tools like Prettier).

- Accessibility and Performance: Used Lighthouse to test for performance, accessibility, best practices, and SEO.

## Deployment

Deployed the project via GitHub Pages following the necessary GitHub setup (branch settings, Pages settings).

Confirmed successful deployment by checking the live site across different devices and browsers.

### Post-Deployment Testing

Conducted a final round of testing to ensure:

Site remained responsive.

Confirmed that users could interact easily with all the website features without encountering broken functionality.

All external links worked.

## Credits

- Thanks to my mentor Lauren-Marie for her patience and support as I built this project.

- Thanks to fellow students on slack.

- Thanks to Tutor Support.

- Code snippets used from getbootstrap.com.

- Font Awesome: For the social media and address icons in the footer.

- Code Institute Online Tutorials for use as templates.

- Fonts were sourced from Google Fonts

- Images taken from ..............

- Screenshots cropped using Paint 3D

- Mock-up created at https://techsini.com/multi-mockup/
