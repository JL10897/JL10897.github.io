// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "In reverse chronological order. * denotes equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
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
      },{id: "news-started-my-phd-at-nyu-advised-by-hanan-salam-supported-by-the-nyu-abu-dhabi-global-phd-fellowship",
          title: 'Started my PhD at NYU, advised by Hanan Salam, supported by the NYU...',
          description: "",
          section: "News",},{id: "news-mopse-personality-aware-engagement-detection-for-online-learning-accepted-at-the-acm-mm-2025-mrac-workshop",
          title: 'MOPSE (personality-aware engagement detection for online learning) accepted at the ACM MM 2025...',
          description: "",
          section: "News",},{id: "news-presented-our-work-on-personalised-valence-arousal-prediction-as-an-oral-at-acii-2025",
          title: 'Presented our work on personalised valence/arousal prediction as an oral at ACII 2025....',
          description: "",
          section: "News",},{id: "news-our-paper-prefix-on-preference-adaptation-in-human-agent-interaction-was-accepted-at-acl-findings-2026",
          title: 'Our paper PrefIx on preference adaptation in human–agent interaction was accepted at ACL...',
          description: "",
          section: "News",},{id: "news-joined-the-tencent-hunyuan-foundation-model-team-as-a-research-intern-through-tencent-project-up-青云计划-working-on-data-synthesis-and-reward-model-alignment-for-long-horizon-companion-agents",
          title: 'Joined the Tencent Hunyuan Foundation Model Team as a research intern through Tencent...',
          description: "",
          section: "News",},{id: "news-released-mempabench-a-benchmark-for-whether-personal-agents-remember-how-each-user-wants-to-be-assisted-paper-on-arxiv",
          title: 'Released MemPABench, a benchmark for whether personal agents remember how each user wants...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%61%6C%69%6E.%6C%69@%6E%79%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JL10897", "_blank");
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
