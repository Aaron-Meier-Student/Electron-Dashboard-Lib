# Electron Dashboard Lib

### What is it & why?

It's a prebuilt library for creating dashboards on an electron app with preset js functionality. I couldn't figure out how to use react so here I am using my own scuffed version. (I really just wanted to make it all myself lol)

### How can I use it?

Edit the `client.js` script to start creating your dashboard or whatever you're making. It's built to be used like a UI Library. Documention will most likely be added later.

> **NOTE:** All functionality is based on how I would've done it via Roblox Studio + LUAU

### Can I customize it?

All styles are configurable, It was only made to handle the DOM content, not styles. So if you want to change the design or structure of everything with only CSS changes, you can. If you need to change how the DOM is created then hopefully I structured it to be easily navigatable; you should have no issue finding the function you want to change.

### How can I use Icons?

We use CDN icons from [Flat Icon Interface Icons](https://www.flaticon.com/search?word=interface&weight=regular+bold&corner=rounded&type=uicon). We already imported all icons that are **Solid-Straight, Solid-Rounded, Regular-Rounded,** and **Bold-Rounded.**
Example: `br-picture`

# Documentation

## Dashboard Class

### Dashboard `new Dashboard({ title, icon, version });`

Creates a new dashboard class that is used to start building your dashboard.

`title` --> The title to display on the title bar and the top of the navigation menu.

`icon` --> The icon to display on the title bar and the top of the navigation menu.

`version` --> The version to display on the title bar.

```js
const dashboard = new Dashboard({
    title: "Example Title",
    icon: "ss-objects-column",
    version: "V1.2.3"
});
```
---
### createNavBreak `Dashboard.createNavBreak();`

Creates a thematic line break in the navigation menu.

```js
const dashboard = new Dashboard({...});

dashboard.createNavBreak();
```

### newTitle `Dashboard.newTitle({ title, icon });`

Creates a new text display, with an optional icon in the navigation menu.

`title` --> The title to display on the created display.

`icon` --> the icon to attach to the created display.

```js
const dashboard = new Dashboard({...});

dashboard.newTitle({
    title: "Example Title",
    icon: "ss-objects-column"
});
```

## Page Class

### newPage `Dashboard.newPage({ title, icon, set });`

Creates a new page and button on the navigation menu

`title` `string` --> The title of the new page & the text to display on the button.

`icon` `string` --> The icon of the new page & the icon to display on the button.

`set` `boolean` --> Whether to automatically switch to this page when its created.

```js
const dashboard = new Dashboard({...});

const page = dashboard.newPage({
    title: "Example Page",
    icon: "ss-info",
    set: true
});
```
---
