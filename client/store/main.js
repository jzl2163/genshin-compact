export const state = () => ({
  preview: [
    {
      title: "Calculators",
      description:
        "Various simple calculators for a wide variety of calculations from damage to shield bonuses",
      content: [
        { title: "Damage", src: "/damagecalculator", icon: "mdi-sword" },
        {
          title: "Reaction",
          src: "/reactioncalculator",
          icon: "mdi-flash"
        },
        {
          title: "Heal&Shield",
          src: "/supportcalculator",
          icon: "mdi-heart"
        }
      ]
    },
    {
      title: "Builders",
      description:
        "Create a build for a specific character or you can create a whole party with the ability to calculate damage in its conditions",
      content: [
        {
          title: "Character",
          src: "/characterbuilder",
          icon: "mdi-account"
        },
        {
          title: "Party",
          src: "/partybuilder",
          icon: "mdi-account-group"
        }
      ]
    },
    {
      title: "Other",
      description: "Various fun tools that you can try your luck or failure",
      content: [
        {
          title: "Gacha simmulator",
          src: "/gacha",
          icon: "mdi-human-wheelchair"
        }
      ]
    }
  ],
  news: [
    {
      title: "Create Genshin compact",
      content:
        "Genshin compact was created. Genshin compact - everything will be found soon.",
      date: "12/02/21"
    },
    {
      title: "Update site UI",
      content:
        "Redesigned the whole design, and also added a responsive design for phones.",
      date: "23/02/21"
    }
  ],
  links: [
    {
      title: "My",
      links: [
        {
          title: "Telegram",
          src: "https://t.me/genshincompact",
          color: "blue darken-3"
        },

        {
          title: "Twitter",
          src: "https://twitter.com/genshin_compact",
          color: "blue lighten-1"
        },
        {
          title: "Discrord",
          src: "https://discord.gg/QGvHUbtysn",
          color: "purple darken-2"
        },
        { title: "Donate", src: "/", color: "orange darken-3" },
        { title: "Bug report", src: "/", color: "error darken-2" }
      ]
    },
    {
      title: "Genshin Impact Official",
      links: [
        {
          title: "Youtube",
          src: "https://www.youtube.com/c/GenshinImpact",
          color: "red"
        },
        {
          title: "Twitter",
          src: "https://twitter.com/genshinimpact",
          color: "blue lighten-1"
        },
        {
          title: "Discrord",
          src: "https://discord.com/invite/genshinimpact",
          color: "purple darken-2"
        },

        {
          title: "Reddit",
          src: "https://www.reddit.com/r/Genshin_Impact/",
          color: "red darken-2"
        },
        {
          title: "Website",
          src: "https://genshin.mihoyo.com/",
          color: "grey"
        }
      ]
    }
  ],
  menu: [
    { title: "Home", src: "/", icon: "mdi-home" },
    {
      title: "News",
      src: "/news",
      icon: "mdi-newspaper-variant-outline"
    },
    {
      title: "Calculators",
      src: "/caclulators",
      content: [
        {
          title: "Damage calculator",
          src: "/damagecalculator",
          icon: "mdi-sword"
        },
        {
          title: "Reaction calculator",
          src: "/reactioncalculator",
          icon: "mdi-flash"
        },
        {
          title: "Heal&Shield calculator",
          src: "/supportcalculator",
          icon: "mdi-heart"
        }
      ]
    },
    {
      title: "Builders",
      src: "/builders",
      content: [
        {
          title: "Character builder",
          src: "/characterbuilder",
          icon: "mdi-account"
        },
        {
          title: "Party builder",
          src: "/partybuilder",
          icon: "mdi-account-group"
        }
      ]
    }
  ]
});
