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

The left list shows the user's most experienced technologies.

![quasar04](/docs/quasar04.JPG)

The right list shows the shared files.

![quasar05](/docs/quasar05.JPG)

The circular menu contains the options: Professional, Awards, Education, Portfolio, Coding and Profile. The Highcharts plugin is responsible for the hover effect over the buttons.
Each menu option shows a window containing their respective data and structure.

![quasar03](/docs/quasar03.JPG)

### Professional History

![quasar06](/docs/quasar06.JPG)

### Events and Awards

![quasar07](/docs/quasar07.JPG)

### Education Background

![quasar08](/docs/quasar08.JPG)

### Portfolio

![quasar09_1](/docs/quasar09_1.JPG)

![quasar09_2](/docs/quasar09_2.JPG)

### Coding

![quasar10](/docs/quasar10.JPG)

### Profile

![quasar11](/docs/quasar11.JPG)

## Conclusion

If you were thinking about creating a website but didn't want to waste too much time programming and designing one, I hope you use this project and share your dynamic resumé it with us.

Until next time!
