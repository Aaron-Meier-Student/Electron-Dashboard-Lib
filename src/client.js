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
    const section1Title = section1column1.newTitle("Example Column");
    section1column1.createBreak();
    section1column1.newButton({
        title: "Button 1",
        icon: "ss-objects-column",
        func: () => {
            console.log("Button 1 Clicked");
        }
    });
    section1column1.newButton({
        label: "Button Label",
        title: "Button 2",
        func: () => {
            console.log("Button 2 Clicked");
        }
    });
    section1column1.createBreak();
    const section1Container1 = section1column1.newContainer();
    const section1ContainerButton = section1Container1.newButton({
        title: "Button 3",
        icon: "ss-objects-column",
        func: () => {
            console.log("Button 3 Clicked");
        }
    });
    section1ContainerButton.toggle();
    section1ContainerButton.setText("Button 3 Edit")
    section1Container1.newButton({
        title: "Button 4",
        func: () => {
            console.log("Button 4 Clicked");
        }
    });''
    section1column1.createBreak();
    section1column1.createBreak();
    section1column1.newCheckbox({
        title: "Checkbox 1",
        func: (status) => {
            console.log("Checkbox 1 Clicked:", status);
        }
    })
    const testcheckbox = section1column1.newCheckbox({
        label: "Checkbox Label",
        title: "Checkbox 2",
        func: (status) => {
            console.log("Checkbox 2 Clicked:", status);
        }
    })
    testcheckbox.setText("Checkbox 3 Edit");
    section1column1.createBreak();
    const section1Container2 = section1column1.newContainer();
    section1Container2.newCheckbox({
        title: "Checkbox 3",
        func: (status) => {
            console.log("Checkbox 3 Clicked:", status);
        }
    })
    section1Container2.newCheckbox({
        title: "Checkbox 4",
        func: (status) => {
            console.log("Checkbox 4 Clicked:", status);
        }
    })
    section1column1.createBreak();
    section1column1.createBreak();
    section1column1.newInput({
        title: "Input 1",
        placeholder: "Placeholder",
        func: (value) => {
            console.log("Input 1 Value:", value);
        }
    })
    section1column1.newInput({
        label: "Input Label",
        title: "Input 2",
        placeholder: "Placeholder",
        func: (value) => {
            console.log("Input 2 Value:", value);
        }
    })
    const section1Container3 = section1column1.newContainer();
    section1Container3.newInput({
        title: "Input 3",
        placeholder: "Placeholder",
        func: (value) => {
            console.log("Input 3 Value:", value);
        }
    })
    section1Container3.newInput({
        title: "Input 4",
        placeholder: "Placeholder",
        func: (value) => {
            console.log("Input 4 Value:", value);
        }
    })
}

createNavTitle();
createExamplePage();
