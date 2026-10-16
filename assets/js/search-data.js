// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
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
      },{id: "news-excited-to-share-that-i-have-been-accepted-to-the-phd-program-in-music-technology-at-new-york-university-i-will-join-this-fall-2026-and-start-my-degree-in-the-marl-lab",
          title: 'Excited to share that I have been accepted to the PhD program in...',
          description: "",
          section: "News",},{id: "projects-kad",
          title: 'KAD',
          description: "A distribution-free, unbiased and efficient evaluation metric for audio generation (ICML 2025 Workshop)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kad/";
            },},{id: "projects-t-foley",
          title: 'T-FOLEY',
          description: "A controllable waveform-domain diffusion model for temporal-event-guided foley sound synthesis (ICASSP 2024)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/t_foley/";
            },},{id: "projects-v2a-genealogy",
          title: 'V2A Genealogy',
          description: "An interactive map of video-to-audio generation systems, metrics and datasets from 2016 to 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/v2a_genealogy/";
            },},{id: "projects-vocoder-effect",
          title: 'Vocoder Effect',
          description: "A hand-built channel vocoder tuned to mimic the vocal sound of Daft Punk, Zedd and Stevie Wonder",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vocoder_demo/";
            },},{id: "projects-ym2413-mdb",
          title: 'YM2413-MDB',
          description: "A multi-instrumental FM video game music dataset with emotion annotations (ISMIR 2022)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ym2413_mdb/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/YoonjinXD", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yoon-jin-chung-03783016a", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UXaiGH4AAAAJ", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%63%38%37%39%33@%6E%79%75.%65%64%75", "_blank");
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
