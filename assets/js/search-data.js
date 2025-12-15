// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "🏠",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "dropdown-sdgs",
              title: "SDGs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/sdgs/";
              },
            },{id: "dropdown-gallery",
              title: "Gallery",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/gallery/";
              },
            },{id: "dropdown-geonate",
              title: "geonate",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://canng.github.io/geonate/";
              },
            },{id: "dropdown-repositories",
              title: "Repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "post-biodiversity-intactness-footprint-data-on-scientific-data",
        
          title: "📰 Biodiversity intactness footprint data on Scientific Data",
        
        description: "Consistent global dataset on biodiversity intactness footprint of agricultural production from 2000 to 2020",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Paper_SciData_BIIFP/";
          
        },
      },{id: "post-editing-a-special-issue-on-designing-resilient-cities-sustainability-mdpi",
        
          title: "📢 Editing a Special Issue on Designing Resilient Cities (Sustainability, MDPI)",
        
        description: "Designing Resilient Cities – Landscape-Based Architecture and Green Space Strategies for Urban Sustainability",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/SI-Sustainability-copy/";
          
        },
      },{id: "post-deep-learning-for-fruit-tree-classification-on-rsase",
        
          title: "📰 Deep learning for Fruit tree Classification on RSASE",
        
        description: "Leveraging Convolutional Neural Networks and Textural Features for Tropical Fruit Tree Species Classification",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Paper-RSASE-CNN-Fruit/";
          
        },
      },{id: "post-simulate-land-use-changes-under-scenarios-on-land",
        
          title: "📰 Simulate Land use Changes under Scenarios on LAND",
        
        description: "Benefits and Trade-Offs from Land Use and Land Cover Changes Under Different Scenarios in the Coastal Delta of Vietnam",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Paper-LAND-landuse-sim/";
          
        },
      },{id: "post-set-up-windows-10-machine-for-deep-learning",
        
          title: "Set-up Windows 10 machine for Deep Learning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Install_tensorflow/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-excited-to-begin-my-role-on-ebm-of-discover-cities",
          title: 'I am excited to begin my role on EBM of Discover Cities 👍...',
          description: "",
          section: "News",},{id: "news-i-am-pleased-to-join-the-editorial-board-of-discover-sustainability",
          title: 'I am pleased to join the Editorial Board of Discover Sustainability 😄',
          description: "",
          section: "News",},{id: "news-new-dataset-on-biodiversity-intactness-for-agricultural-systems-published-on-zenodo",
          title: 'New Dataset on Biodiversity Intactness for agricultural systems published on Zenodo',
          description: "",
          section: "News",},{id: "news-our-special-issue-on-sustainability-accepts-the-first-article",
          title: 'Our Special Issue on Sustainability accepts the first article 👏',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-in-international-journal-of-applied-earth-observation-and-geoinformation",
          title: 'New paper accepted in International Journal of Applied Earth Observation and Geoinformation',
          description: "",
          section: "News",},{id: "projects-urban-environments",
          title: 'Urban Environments',
          description: "Urbanization, Urban Expansion Modeling, Urban Heat Islands",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_Research_topic_Built/";
            },},{id: "projects-geoinformatic-applications",
          title: 'Geoinformatic Applications',
          description: "Spectral Index, Remote Sensing and GIS Applications in Environment and Natural Resources",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_Research_topic_RSGIS/";
            },},{id: "projects-social-ecological-systems",
          title: 'Social-Ecological Systems',
          description: "Ecosystem Services, Social Perception, Livelihood",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_Research_topic_ESS/";
            },},{id: "projects-ecological-environments",
          title: 'Ecological Environments',
          description: "Biodiversity, Ecological Environment, Conservation, Ecological Assessments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_Research_topic_Eco/";
            },},{id: "projects-gacr-expro-23-07984x",
          title: 'GACR EXPRO-23-07984X',
          description: "Pathways towards Environmental Sustainability (2023–2027)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/21_Project_GACR/";
            },},{id: "projects-vnu-hcm-c2024-16-07",
          title: 'VNU-HCM-C2024-16-07',
          description: "Assessing the situation of rural urbanization in the Long Xuyen Quadrangle under the impact of flood prevention dikes [2024-2025]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/22_Project_AGU_Rural_Urbanization/";
            },},{id: "projects-vnu-hcm-c2024-16-19",
          title: 'VNU-HCM-C2024-16-19',
          description: "Assessing Shifting Agriculture Land Use Structure to Adapt to Changes in Flood and Drought-Saline Intrusion Regimes in the Vietnam Mekong Delta [2024-2025]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/23_Project_AGU_Flood_Drought/";
            },},{id: "projects-cgiar-c-2022-105",
          title: 'CGIAR-C-2022-105',
          description: "Securing the food system of Asian mega-deltas for Climate and Livelihood resilience; Funded by CGIAR [2023]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/31_Project_CGIAR/";
            },},{id: "projects-cbas-ait-gistda",
          title: 'CBAS (AIT-GISTDA)',
          description: "Integrated Assessment of SDGs for Bangkok Metropolitan Region (BMR) and Eastern Economic Corridor (EEC) based on Earth-Observation and Space Technology; Funded by CBAS Global SDG Partnership [2022-2025, resigned from 2023]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/32_Project_CBAS_SDGs/";
            },},{id: "projects-so-cool-kmutt-plan",
          title: 'So COOL KMUTT Plan',
          description: "Funded by KMUTT Steering Committee for Carbon Neutrality by 2040 [2021]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/33_Project_SoCool/";
            },},{id: "projects-ctu-jica-oda",
          title: 'CTU-JICA ODA',
          description: "Can Tho University Improvement Project [2017-2021]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/34_Project_CTU_ODA/";
            },},{id: "projects-ctu-2017-39",
          title: 'CTU-2017-39',
          description: "Solution for Cloud removal on MODIS time series to Assess Variations of Rice crop Structures in the Mekong Delta region, Vietnam; Funded by Can Tho University [2017-2018]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/35_Project_Cloud/";
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
