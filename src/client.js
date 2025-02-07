const dashboard = new Dashboard({
    title: "Electron Dashboard Library - Template",
    version: "V0.0.1",
    icon: "ss-objects-column",
});

function createNavTitle() {
    dashboard.newTitle({ title: "Electron Dashboard Library - Template", icon: "ss-objects-column" });
    dashboard.createNavBreak();
}

function createExamplePage() {
    const ExamplePage = dashboard.newPage({
        title: "Example Page",
        icon: "br-info",
        set: true
    });
    dashboard.createNavBreak();

    const exampleSection1 = ExamplePage.newSection({
        title: "Section 1",
        icon: "ss-bullet",
        mode: "switcher",
    });
    const section1column1 = exampleSection1.newColumn("Column 1");
    const section1column2 = exampleSection1.newColumn("Column 2");

    const exampleSection2 = ExamplePage.newSection({
        title: "Section 1",
        icon: "ss-bullet",
        mode: "multiple",
    });
    const section2column1 = exampleSection1.newColumn("Column 1");
    const section2column2 = exampleSection1.newColumn("Column 2");
    const section2column3 = exampleSection1.newColumn("Column 3");

    const exampleSection3 = ExamplePage.newSection({ title: "Section 1" });
    const section3column1 = exampleSection1.newColumn("Column 1");
}

createNavTitle();
createExamplePage();
dashboard.setPage("Example Page");