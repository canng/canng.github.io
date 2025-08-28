// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "🏠",
    section: "Navigation",
    handler: () => {
      window.location.href = "/homepage/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/cv/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "For a complete list and updated publications, please visit my Google Scholar",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/publications/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/services/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/contact/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/blog/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/repositories/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/homepage/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/homepage/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-urban-environments",
          title: 'Urban Environments',
          description: "Urbanization, Urban Expansion Modeling, Urban Heat Islands",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/01_Research_topic_1/";
            },},{id: "projects-geoinformatic-applications",
          title: 'Geoinformatic Applications',
          description: "Spectral Index, Remote Sensing and GIS Applications in Environment and Natural Resources",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/01_Research_topic_2/";
            },},{id: "projects-social-ecological-systems",
          title: 'Social-Ecological Systems',
          description: "Ecosystem Services, Social Perception, Livelihood",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/01_Research_topic_3/";
            },},{id: "projects-ecological-environments",
          title: 'Ecological Environments',
          description: "Biodiversity, Ecological Environment, Conservation, Ecological Assessments",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/01_Research_topic_4/";
            },},{id: "projects-vnu-hcm-c2024-16-19",
          title: 'VNU-HCM-C2024-16-19',
          description: "Assessing Shifting Agriculture Land Use Structure to Adapt to Changes in Flood and Drought-Saline Intrusion Regimes in the Vietnam Mekong Delta [2024-2025]",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/02_Project_AGU_Flood_Drought/";
            },},{id: "projects-vnu-hcm-c2024-16-07",
          title: 'VNU-HCM-C2024-16-07',
          description: "Assessing the situation of rural urbanization in the Long Xuyen Quadrangle under the impact of flood prevention dikes [2024-2025]",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/02_Project_AGU_Rural_Urbanization/";
            },},{id: "projects-gacr-expro-23-07984x",
          title: 'GACR EXPRO-23-07984X',
          description: "Pathways towards Environmental Sustainability (2023–2027)",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/02_Project_GACR/";
            },},{id: "projects-cbas-ait-gistda",
          title: 'CBAS (AIT-GISTDA)',
          description: "Integrated Assessment of SDGs for Bangkok Metropolitan Region (BMR) and Eastern Economic Corridor (EEC) based on Earth-Observation and Space Technology [2022-2025, resigned from 2023]",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/03_Project_CBAS_SDGs/";
            },},{id: "projects-cgiar-c-2022-105",
          title: 'CGIAR-C-2022-105',
          description: "Securing the food system of Asian mega-deltas for Climate and Livelihood resilience [2023]",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/03_Project_CGIAR/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%6F%6E%67%63%61%6E.%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/canng", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/can-t-nguyen-b76b0a1a1", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0471-4062", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Trong-Can-Nguyen/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xnzuZiAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
