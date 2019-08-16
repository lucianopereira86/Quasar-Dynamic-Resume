# Quasar Dynamic Resumé (quasar-dynamic-resume)

Dynamic multi-language resumé developed with Quasar.

## Technologies

- Quasar v1.0
- Highcharts.js

## Objective

In this project you will be able to build a dynamic resumé to show your profile, professional history, education background, events, awards, programming knowledge, portfolio projects and articles. Also it will be possible to share files from the project or from external links.
There's a demo hosted at [Surge](http://lucianopereira.surge.sh/#/).

## How It Works

The "/config" folder contains the dynamic data from each module in both available languages: brazilian portuguese (BR) and english (EN).

![code01](/docs/code01.JPG)

The "/lang.js" file creates an object containing all the data from the "/config" folder.

![code02](/docs/code02.JPG)

The method "set" from the "/src/boot/lang.js" plugin saves the selected language in the "localStorage" and uses the "/lang.js" file to return an object.

![code03](/docs/code03.JPG)

The mutation "SET_LANG" from the "/src/store/general/mutations.js" file updates the "LANG" state with the object returned by the plugin.

![code04](/docs/code04.JPG)

The "LANG" state's attributes are responsible for showing the dynamic data in the website. Their values are located inside the "/config" folder. For example, in the "/src/components/DrawerAwards.vue" component:

![code05](/docs/code05.JPG)

The "LANG.labels.drawer.awards" variable's value is located at:

![code06](/docs/code06.JPG)

## How to run this project

Install the dependencies

```bash
npm install
```

Run the app

```bash
quasar dev
```

The main screen shows a navigation bar and a circular menu with two lists in both sides.

![quasar01](/docs/quasar01.JPG)

The navigation bar contains the title, a message and the language toggle.

![quasar02](/docs/quasar02.JPG)

The circular menu contains the options: Professional, Awards, Education, Portfolio, Coding and Profile. The Highcharts plugin is responsible for the hover effect over the buttons.
Each menu option shows a window containing their respective data and structure.

![quasar03](/docs/quasar03.JPG)

The left list shows the user's most experienced technologies.

![quasar04](/docs/quasar04.JPG)

The right list shows the shared files.

![quasar05](/docs/quasar05.JPG)

### Professional History

It's shown by the "Professional" button and contains one list for both job types: EMPLOYEE and FREELANCER.
Each one contains the company's logo, employee's function, company's name, period, job description and used technologies.

![quasar06](/docs/quasar06.JPG)

### Events and Awards

It's shown by the "Awards" button and contains one list with the event's banner, exercised function, location, period and description.

![quasar07](/docs/quasar07.JPG)

### Education Background

It's shown by the "Education" button and contains one list with the school's banner, educational degree, school's name and period. In the bottom, the languages spoken by the website's owner are listed with a word describing his/her level of knowledge.

![quasar08](/docs/quasar08.JPG)

### Portfolio

It's shown by the "Portfolio" button and is composed by two tabs: GitHub and Articles. In the "GitHub" tab, the owner's "Sourcerer.io" profile link can be shared above the list of repositories downloaded in real time.

![quasar09_1](/docs/quasar09_1.JPG)

The "Articles" tab groups the articles by their website.

![quasar09_2](/docs/quasar09_2.JPG)

### Coding

It's shown by the "Coding" button and has one list for each technology layer (front-end, back-end, etc) containing technologies ordered by descending level of knowledge. The first positions are highlighted.

![quasar10](/docs/quasar10.JPG)

### Profile

It's shown by the "Profile" button and contains the photo, name, birthday, phone number, e-mail, location, Whatsapp number, LinkedIn profile, Skype e-mail and summary text.

![quasar11](/docs/quasar11.JPG)

## Conclusion

If you were thinking about creating a website but didnt want to waste too much time programming and designing one, I hope you use this project and share your dynamic resumé it with us.
Until next time!
