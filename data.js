// All Handles Data Object ****************************************************

let linktreeData = [
  {
    id: 1,
    handleName: "Chapter",
    handleText: "Become a Member",
    handleLink:
      "https://gdsc.community.dev/datta-meghe-college-of-engineering-navi-mumbai/",
    imgSrc2: "./assets/community.png",
    imgSrc: "./assets/community.svg",
    imgAlt: "Community",
  },
  // {
  //   id: 2,
  //   handleName: "Discord",
  //   handleText: "Join Our Community",
  //   handleLink: "https://discord.gg/",
  //   imgSrc2: "./assets/discord-icon.svg",
  //   imgSrc: "./assets/discord-icon.svg",
  //   imgAlt: "Discord",
  // },
  {
    id: 3,
    handleName: "LinkedIN",
    handleText: "Connect Us & Stay Update",
    handleLink: "https://www.linkedin.com/company/gdsc-dmce/",
    imgSrc2: "./assets/icons8-linkedin.svg",
    imgSrc: "./assets/linkedin.svg",
    imgAlt: "LinkedIn",
  },
  // {
  //   id: 4,
  //   handleName: "YouTube",
  //   handleText: "Subscribe to Our Channel",
  //   handleLink: "https://www.youtube.com",
  //   imgSrc2: "./assets/icons8-youtube.svg",
  //   imgSrc: "./assets/youtube.svg",
  //   imgAlt: "Youtube",
  // },
  {
    id: 5,
    handleName: "Instagram",
    handleText: "Follow Us & Stay Update",
    handleLink: "https://instagram.com/gdsc.dmce",
    imgSrc2: "./assets/icons8-instagram.svg",
    imgSrc: "./assets/instagram.svg",
    imgAlt: "Instagram",
  },
  {
    id: 6,
    handleName: "GitHub",
    handleText: "Collab with us in Our Projects",
    handleLink: "https://github.com/Google-Developer-Students-Club-DMCE",
    imgSrc2: "./assets/icons8-github.svg",
    imgSrc: "./assets/github.svg",
    imgAlt: "Github",
  },
  {
    id: 7,
    handleName: "Twitter",
    handleText: "Follow us on Twitter",
    handleLink: "https://twitter.com/DmceGdsc",
    imgSrc2: "./assets/icons8-twitter.svg",
    imgSrc: "./assets/twitter.svg",
    imgAlt: "Facebook",
  },
  // {
  //   id: 8,
  //   handleName: "Facebook",
  //   handleText: "Like our page on Facebook",
  //   handleLink: "https://www.facebook.com/",
  //   imgSrc2: "./assets/icons8-facebook.svg",
  //   imgSrc: "./assets/facebook.svg",
  //   imgAlt: "Facebook",
  // },
  // {
  //   id: 9,
  //   handleName: "Website",
  //   handleText: "Official Website",
  //   handleLink: "https://gdscjgec.github.io/",
  //   imgSrc2: "./assets/icons8-website-50.png",
  //   imgSrc: "./assets/website.svg",
  //   imgAlt: "Website",
  // },
  // {
  //   id: 10,
  //   handleName: "Mail Us",
  //   handleText: "Feel Free to Contact Us",
  //   handleLink: "dmcegdsc@gmail.com",
  //   imgSrc2: "./assets/icons8-gmail.svg",
  //   imgSrc: "./assets/mail.svg",
  //   imgAlt: "Mail",
  // },
];

// All Handles Preview Mapping ****************************************************

let linktreeDiv = document.querySelector("#linktreeHandles");

Object.values(linktreeData).map((val) => {
  linktreeDiv.innerHTML += `
        <!-- Social Handle ${val.id} -->
        <div class="handle_card"  data-aos="zoom-out-up" data-aos-duration="500" data-aos-easing="ease-in-sine">
            <!-- <span><img src="${val.imgSrc}" class="watermark" alt="Watermark" /></span> -->
            <img src="${val.imgSrc2}" alt="${val.imgAlt}" />
            <p>${val.handleText}</p>
            <a href="${val.handleLink}" target="_blank" rel="noopener">
                ${val.handleName}
            </a>
        </div>
    `;
});

particlesJS("particles-js", {
  particles: {
    number: { value: 90 },
    size: { value: 8 },
    color: {
      value: [
        "#f74037", // Red
        "#1e90ff", // Blue
        "#14b25f", // Green
        "#ffcc1d", // Yellow
      ],
    },
    opacity: { value: 0.7 },
    line_linked: { color: "#000" },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }, // Add this line for click interaction
    },
  },
});
