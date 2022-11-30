const projectData = [
    {
        id: 1,
        projectName: "Product Preview Card Component",
        desktopPreview: "./assets/chanel_desktop_completed",
        mobileCompleted: "./assets/chanel_mobile_completed",
        desktopDesign: "./assets/chanel_desktop_design",
        mobileDesign: "./assets/chanel_mobile_design",
        liveSiteLink: "https://jezraelhope.github.io/product-preview-card-component-main/"

    },
    {
        id: 2,
        projectName: "Interactive Rating Component",
        desktopCompleted: "",
        mobileCompleted: "",
        desktopDesign: "",
        mobileDesign: "",
        liveSiteLink: ""

    },
    {
        id: 3,
        projectName: "Order Summary Component",
        desktopCompleted: "",
        mobileCompleted: "",
        desktopDesign: "",
        mobileDesign: "",
        liveSiteLink: ""

    },
    {
        id: 4,
        projectName: "Coding Bootcamp Testimonials",
        ddesktopCompleted: "",
        mobileCompleted: "",
        desktopDesign: "",
        mobileDesign: "",
        liveSiteLink: ""

    },
    {
        id: 5,
        projectName: "NFT Preview Card Component",
        desktopCompleted: "",
        mobileCompletedw: "",
        desktopDesign: "",
        mobileDesign: "",
        liveSiteLink: ""

    },
    {
        id: 6,
        projectName: "QR Code Component",
        desktopCompleted: "",
        mobileCompleted: "",
        desktopDesign: "",
        mobileDesign: "",
        liveSiteLink: ""

    }
]



const mainContainer = document.getElementById("main-container");

projectData.map(item => {
    const projectCard = document.createElement("div");
    projectCard.setAttribute("class", "project-card");

    const projectImage = document.createElement("img");
    projectImage.setAttribute("src", `${item.desktopCompleted}`);
    projectImage.setAttribute("alt", `${item.imageDescription}`);
    
})



