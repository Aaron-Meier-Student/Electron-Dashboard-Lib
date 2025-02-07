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

    const exampleSection1 = ExamplePage.newSection({
        title: "Section 1",
        chips: [{ title: "Chip 1", color: "#ff0000" },{ title: "Chip 2", color: "#00ffff" }],
    });
    const section1column1 = exampleSection1.newColumn("Column 1");
    const section1column2 = exampleSection1.newColumn("Column 2");

    const exampleSection2 = ExamplePage.newSection({
        title: "Section 2",
    });
    const section2column1 = exampleSection2.newColumn("Column 1");
    const section2column2 = exampleSection2.newColumn("Column 2");
    const section2column3 = exampleSection2.newColumn("Column 3");

    const exampleSection3 = ExamplePage.newSection({ title: "Section 3" });
    const section3column1 = exampleSection3.newColumn("Column 1");
}

createNavTitle();
createExamplePage();