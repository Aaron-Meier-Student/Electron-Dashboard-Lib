const dashboard = new Dashboard({
    title: "Electron Dashboard Library - Template",
    version: "V0.0.1",
    icon: "ss-objects-column",
});

function createNavTitle() {
    dashboard.newTitle({
        title: "Electron Dashboard Library - Template",
        icon: "ss-objects-column",
    });
    dashboard.createNavBreak();
}

function createExamplePage() {
    const ExamplePage = dashboard.newPage({
        title: "Example Page",
        icon: "br-info",
        set: true,
    });
    dashboard.createNavBreak();

    const exampleSection1 = ExamplePage.newSection({
        title: "Section 1",
        chips: [
            { title: "Chip 1", color: "#ff0000" },
            { title: "Chip 2", color: "#00ffff" },
        ],
    });
    const section1column1 = exampleSection1.newColumn();
    const section1column2 = exampleSection1.newColumn();
    const section1Title = section1column1.newTitle("Column 1");
    section1column1.createBreak();
    section1column1.newButton({
        title: "Button 1",
        icon: "ss-objects-column",
        func: () => {
            console.log("Button 1 Clicked");
        }
    });
    section1column1.newButton({
        label: "Test Label",
        title: "Button 2",
        func: () => {
            console.log("Button 2 Clicked");
        }
    });
    const section1Container = section1column1.newContainer();
    const section1ContainerButton = section1Container.newButton({
        title: "Button 3",
        icon: "ss-objects-column",
        func: () => {
            console.log("Button 3 Clicked");
        }
    });
    section1ContainerButton.toggle();
    section1Container.newButton({
        title: "Button 4",
        func: () => {
            console.log("Button 4 Clicked");
        }
    });''
    const exampleSection2 = ExamplePage.newSection({
        title: "Section 2",
    });
    const section2column1 = exampleSection2.newColumn();
    const section2column2 = exampleSection2.newColumn();
    const section2column3 = exampleSection2.newColumn();

    const exampleSection3 = ExamplePage.newSection({ title: "Section 3" });
    const section3column1 = exampleSection3.newColumn();
}

createNavTitle();
createExamplePage();
