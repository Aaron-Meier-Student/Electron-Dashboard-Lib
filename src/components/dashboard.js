class Dashboard {
    constructor({
        title = "Untitled",
        version = "V0.0.1",
        icon = "ss-objects-column",
    }) {
        document.querySelector("#titleBar .icon").className += ` fi fi-${icon}`;
        document.querySelector("#titleBar .title").innerHTML = title;
        document.querySelector(
            "#titleBar .version"
        ).innerHTML = `<i class="fi fi-ss-bullet"></i><i class="fi fi-ss-bullet pulse"></i>${version}`;
    }

    newPage({ title = "Untitled", icon = "fi fi-ss-bullet", set = false }) {
        return new Page({ title, icon, set });
    }

    createNavBreak() {
        const navBreak = document.createElement("div");
        navBreak.className = "navBreak";
        document.querySelector("nav").appendChild(navBreak);
    }

    newTitle({ title = "Untitled", icon = "fi fi-ss-bullet" }) {
        const titleDiv = document.createElement("div");
        titleDiv.className = "title";
        titleDiv.innerHTML = `<i class="fi fi-${icon}"></i>${title}`;
        document.querySelector("nav").appendChild(titleDiv);
    }
}
