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
    version: "V1.2.3",
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

## Section Class

### newSection `Page.newSection({ title, chips });`

Creates a new section on page that holds columns.

`title` --> The title of the new sedction & the text to display on the sectiom.

`chips` --> List of chips to display alongside the title.

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});

const section = page.newSection({
    title: "Section Title",
    chips: [
        { title: "Chip 1", color: "#ff0000" },
        { title: "Chip 2", color: "#00ffff" },
    ],
});
```

## Column Class

### newColumn `Section.newColumn();`

Creates a new column inside a section, this can hold many things. like buttons and inputs.

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});
const section = page.newSection({...});
const column = section.newColumn();
```
---

### createBreak `Column.createBreak();`

Creates a thematic break in the columm to separate content.

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});
const section = page.newSection({...});
const column = section.newColumn();

column.createBreak();
```

### newContainer `Column.newContainer();`

Creates a column inside a column, returns a column object. Might be buggy with labels, meant for side by side buttons & inputs.

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});
const section = page.newSection({...});
const column = section.newColumn();

const innerColumn = column.newContainer();
```

### newTitle `Column.createTitle(text);`

Creates a new title to display text inside a column.

`text` --> The string to display as the title.

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});
const section = page.newSection({...});
const column = section.newColumn();

column.newTitle("Example Title");
```

### newButton `Column.createButton({ label, title, icon, func });`

Creates a new button inside a column.

`label` An optional variable that will display label/description of what the button is for.

`title` The text to display inside the button.

`icon` An optional icon to put inside the button.

`func` The function to execute once the button is clicked

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});
const section = page.newSection({...});
const column = section.newColumn();

column.newButton({
    label: "Button Label",
    title: "Button",
    icon: "ss-objects-column",
    func: () => {
        console.log("Button Clicked");
    },
});
```

### newCheckbox `Column.newCheckbox({ label, title, status, func });`

Creates a new checkbox inside a column.

`label` An optional variable that will display label/description of what the checkbox is for.

`title` The text to display inside the checkbox.

`stats` The default state of the checkbox.

`func` The function to execute once the checkbox is toggled

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});
const section = page.newSection({...});
const column = section.newColumn();

column.newCheckbox({
    label: "Checkbox Label",
    title: "Checkbox",
    status: false,
    func: (state) => {
        console.log("Checkbox Toggled:", state);
    },
});
```

### newInput `Column.newInput({ label, title, status, func });`

Creates a new input inside a column.

`label` An optional variable that will display label/description of what the input is for.

`title` The text to display on the top of the input.

`placeholder` The placeholder text to display inside the input.

`func` The function to execute once the users clicks off the input.

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});
const section = page.newSection({...});
const column = section.newColumn();

column.newInput({
    label: "Input Label",
    title: "Input",
    placeholder: "Placeholder",
    func: (input) => {
        console.log("Focus Lost:", input);
    },
});
```

## Universal Functions

### Destroy `Object.Destroy()`

It should be aviable on most items that are created, used to remove content.

```js
const object = new Class();
object.Destory()
```

### Accessing the objects element

Most of the functions for creating displayed contents allows you to directly access the element as a variable and modify it as you wish.

```js
const dashboard = new Dashboard({...});
const page = dashboard.newPage({...});
const section = page.newSection({...});
const column = section.newColumn();

const title = column.newTitle("Example Title");
title.element.innerText = "Updated Example Title"
```

## Other Functions

### notification `notification({ title, description, delay })`

Displays an in-app notification with a title and description for a specified amount of time.

`title` --> The title to display on the notification.

`description` --> The description to display on the notification.

`delay` --> How long the notification should stay on screen for.

```js
notification({
    title: "Notification Title",
    description: "Notification Description",
    delay: 5,
})
```