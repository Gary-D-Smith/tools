export const apps = {
  shouldHave: [
    {
      name: "Vivid",
      description: "Make your Mac screen super bright or super dim.",
      useCase: "your screen's default brightness just isn't cutting it.",
      features: [
        "Unlocks turbo bright mode for sunny cafés.",
        "Lets you go below 1 bar brightness for midnight coding next to sane people.",
        "Perfect for those living between extremes."
      ],
      tags: ["Paid", "Setapp"],
      setupSince: "2019",
      delightMeter: 7,
      site: "https://vivid.lol",
      img: "vivid.png",
      favorite: true,
    },
    {
      name: "AppCleaner",
      description: "Fully uninstall apps and associated junk files.",
      useCase: "you tried one of these apps and realized… not everything sparks joy.",
      features: [
        "Lightweight tool for fully uninstalling apps",
        "Deletes all associated junk files in a click",
        "Essential for anyone who experiments with apps"
      ],
      tags: ["Free"],
      setupSince: "2017",
      delightMeter: 4,
      site: "https://freemacsoft.net/appcleaner",
      img: "appcleaner.png"
    },
    {
      name: "IINA",
      description: "A modern media player for Mac that feels as good as it works.",
      useCase: "you want to watch a video on your Mac and actually enjoy the experience before pressing play.",
      features: [
        "A modern media player that doesn't feel like it was built in 2004",
        "Plays anything you throw at it – subs, speed control, audio tweaks, all of it",
        "My go-to for downloaded lectures, screencasts, and movie nights"
      ],
      tags: ["Free"],
      setupSince: "2018",
      delightMeter: 5,
      site: "https://iina.io",
      img: "iina.png"
    },
    {
      name: "Permute",
      description: "Swiss Army encoder for all your media conversion needs.",
      useCase: "you need to convert one thing into another thing so you can upload it to the right thing.",
      features: [
        "Extracting audio from videos",
        "Resizing GIFs and compressing video",
        "Turning anything into everything else -- like a Swiss Army encoder"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2019",
      delightMeter: 5,
      site: "https://software.charliemonroe.net/permute/",
      img: "permute.png"
    },
    {
      name: "coconutBattery",
      description: "Monitor your Mac and iOS battery health at a glance.",
      useCase: "you need to know if your battery is dying – or if it's just you.",
      features: [
        "Quick check on battery health, cycles, and age",
        "Plug in your iPhone/iPad to check those, too",
        "Great reality check when your laptop dies mid-Zoom and you want to blame someone."
      ],
      tags: ["Free"],
      setupSince: "2021",
      delightMeter: 6,
      site: "https://www.coconut-flavour.com/coconutbattery",
      img: "coconutbattery.png"
    },
    {
      name: "PDF Squeezer",
      description: "Compress PDFs with control over quality vs. size.",
      useCase: "you just exported a chonky PDF and are ashamed to send it that way.",
      features: [
        "Magically compresses PDFs to a fraction of the size",
        "Gives you control over quality vs. size",
        "Handles batch jobs when you're in too deep."
      ],
      tags: ["Paid", "Setapp"],
      setupSince: "2021",
      delightMeter: 6,
      site: "https://setapp.com/apps/pdf-squeezer",
      img: "pdfsqueezer.png"
    },
    {
      name: "PDF Search",
      description: "Powerful full-text PDF search for exams, projects, and reference.",
      useCase: "you're taking an open-book exam and need to summon knowledge like Dumbledore.",
      features: [
        "Instantly searches across all PDFs in one place",
        "Built for exams, take-homes, and panic-mode referencing",
        "Surprisingly delightful to use. Great UI, speed, and power"
      ],
      tags: ["Paid", "Setapp"],
      setupSince: "2023",
      delightMeter: 8,
      site: "https://pdfsearch.app",
      img: "pdfsearch.png"
    },
    {
      name: "TripMode",
      description: "Blocks unnecessary data usage on metered Wi-Fi or hotspots.",
      useCase: "you're on airplane Wi-Fi and your grandma's iMessage cat meme is eating all your bandwidth.",
      features: [
        "Blocks apps from using data when on metered Wi-Fi or a hotspot.",
        "Auto-remembers your settings for next time",
        "Surprisingly fun to nerd out on which apps are hogging traffic."
      ],
      tags: ["Paid", "Setapp"],
      setupSince: "2024",
      delightMeter: 6,
      site: "https://tripmode.ch",
      img: "tripmode.png"
    }
  ],

  mustHave: [
    {
      name: "CleanShot X",
      description: "Pinning things to your screen, taking and annotating screenshots, sharing your screenshots with a personal domain.",
      useCase: "you need that screenshot to stick around longer than a second.",
      features: [
        "Cmd + Shift + 2: extract text from any part of the screen",
        "Cmd + Shift + 4: take + annotate screenshots, save as reusable design docs",
        "Cmd + Shift + 5: record videos/gifs with audio, cursor, webcam, and more",
        "Share everything instantly via my custom domain (ss.garysmith.me)"
      ],
      tags: ["Paid", "Setapp"],
      setupSince: "2019",
      delightMeter: 10,
      site: "https://cleanshot.com",
      img: "cleanshot-x.png",
      favorite: true,
    },
    {
      name: "SideNotes",
      description: "Best place for taking quick notes on your computer.",
      useCase: "you need to jot something down right now.",
      features: [
        "My primary quick-thought-capture app",
        "Has folders + markdown, but keeps things calm and low-pressure",
        "I have weekly cleanups → some notes move, most notes die here. That's the beauty."
      ],
      tags: ["Paid", "Setapp"],
      setupSince: "2019",
      delightMeter: 15,
      site: "https://www.apptorium.com/sidenotes",
      img: "sidenotes.png",
      favorite: true,
    },
    {
      name: "Fantastical",
      description: "A better calendar app for personal events and natural language entry.",
      useCase: "you just want to add something to your calendar like a human.",
      features: [
        "My primary calendar app for personal events",
        "Natural language event entry in the menubar saves me ungodly amounts of time",
        "Setup is a bit much, and I still use Google Calendar for scheduling, but Fantastical is home for me."
      ],
      tags: ["Free"],
      setupSince: "2017",
      delightMeter: 10,
      site: "https://flexibits.com/fantastical",
      img: "fantastical.png",
      favorite: true,
    },
    {
      name: "CleanMyMac",
      description: "Comprehensive cleaning, monitoring, and malware scanning for Mac.",
      useCase: "your laptop feels like the sun – and you don't know why.",
      features: [
        "Storage, CPU, memory, and network monitoring",
        "Malware scans and system cleanups",
        "Beautifully designed and actually helpful (unlike most \"cleaners\")"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2019",
      delightMeter: 9,
      site: "https://macpaw.com/cleanmymac",
      img: "cleanmymac.png",
      favorite: true,
    },
    {
      name: "Hand Mirror",
      description: "A fast little menubar mirror to check yourself before meetings.",
      useCase: "you need to check your hair before a meeting, but opening Photo Booth is a cry for help.",
      features: [
        "Exactly what it says: a fast little mirror",
        "Lives in the menubar",
        "Saves my dignity hourly…"
      ],
      tags: ["Free", "Setapp"],
      setupSince: "2017",
      delightMeter: 10,
      site: "https://handmirror.app",
      img: "handmirror.png",
      favorite: true,
    },
    {
      name: "Bartender",
      description: "Organizing your menu bar.",
      useCase: "your menu bar looks like Times Square and you just want peace.",
      features: [
        "Organizing menu bar sites into primary/secondary rows",
        "Adding spacers for clarity",
        "Hiding what I don't need until I need it"
      ],
      tags: ["Paid", "Setapp"],
      setupSince: "2019",
      delightMeter: 7,
      site: "https://www.macbartender.com",
      img: "bartender.png"
    },
    {
      name: "Unclutter",
      description: "A smart junk drawer for notes, clips, and screenshots.",
      useCase: "you need a smart junk drawer for notes, clips, and screenshots.",
      features: [
        "Clipboard history: saves me daily oopsies",
        "Drag-and-drop file stash: where all my screenshots go",
        "Notes pane: long-term parking for ideas that don't need SideNotes"
      ],
      tags: ["Setapp"],
      setupSince: "2019",
      delightMeter: 10,
      site: "https://unclutterapp.com",
      img: "unclutter.png"
    },
    {
      name: "Downie",
      description: "Download videos from sites that don't want you to.",
      useCase: "You need to download something, but the site's fighting you.",
      features: [
        "Downloading YouTube videos, audio clips, and Instagram posts",
        "Works like magic on stuff with no download button"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2019",
      delightMeter: 6,
      site: "https://software.charliemonroe.net/downie/",
      img: "downie.png"
    },
    {
      name: "Rectangle",
      description: "Organize your windows to the sides of your screen.",
      useCase: "you want side-by-side apps without the awkward gaps.",
      features: [
        "Window snapping, tiling, and full-screening without full-screen mode",
        "Rectangle + Mission Control = elite multitasking"
      ],
      tags: ["Free"],
      setupSince: "2018",
      delightMeter: 7,
      site: "https://rectangleapp.com",
      img: "rectangle.png"
    },
    {
      name: "One Switch",
      description: "Quick toggles for common system actions.",
      useCase: "You need to clean your screen, but closing everything is not an option.",
      features: [
        "Quick toggles: show hidden files, enable screen clean mode, prevent sleep",
        "Amphetamine is a solid free alternative"
      ],
      tags: ["Paid", "Setapp"],
      setupSince: "2020",
      delightMeter: 5,
      site: "https://fireball.studio/oneswitch",
      img: "oneswitch.png"
    },
    {
      name: "Raycast",
      description: "That emoji picker takes 2 years to load and you've got things to say.",
      useCase: "that emoji picker takes 2 years to load and you've got things to say.",
      features: [
        "Opt + Space: search emojis instantly",
        "Cmd + Space + C: summon the color picker",
        "Cmd + Space + B: open my bookmarks",
        "Beautiful calculator",
        "Confetti. Yes, actual confetti."
      ],
      tags: ["Free"],
      setupSince: "2022",
      delightMeter: 8,
      site: "https://raycast.com",
      img: "raycast.png"
    }
  ],

  nicheHave: [
    {
      name: "Craft",
      description: "Share your thoughts or essays with a bit more… craft.",
      useCase: "you want to share your thoughts – but with a little more… craft.",
      features: [
        "Sharing essays and notes that I write for individual people (not the web)",
        "Beautiful, editable docs with actual design sense",
        "Like Notion, but with ✨ taste ✨"
      ],
      tags: ["Free", "Setapp"],
      setupSince: "2024",
      delightMeter: 10,
      site: "https://craft.do",
      img: "craft.png",
      favorite: true,
    },
    {
      name: "Glyphs Mini",
      description: "Design your own fonts, from blank slate to finished typeface.",
      useCase: "you want to make a font and live your typographic dreams.",
      features: [
        "Designing fonts from scratch, copy and paste things in from Illustrator",
        "Made two fonts inspired by 1990s–2000s certificates 👉 Download them here"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2021",
      delightMeter: 6,
      site: "https://glyphsapp.com/glyphs-mini",
      img: "glyphsmini.png"
    },
    {
      name: "DevUtils",
      description: "A fast, local Swiss army knife for developers (QR, JSON, and more).",
      useCase: "you need a QR code fast, and you're not interested in meeting a cookie banner first.",
      features: [
        "Generating QR codes, coloring JSON, color tools",
        "A Swiss army knife of dev utilities – super fast, local, and no BS"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2022",
      delightMeter: 4,
      site: "https://devutils.app",
      img: "devutils.png"
    },
    {
      name: "Diagrams",
      description: "Constraint-driven, beautiful flowcharts and diagrams.",
      useCase: "you need a diagram that doesn't look like sad spaghetti.",
      features: [
        "Clean, constraint-driven flowcharts and diagrams",
        "You can't make an ugly one – it enforces beautiful structure",
        "Fun fact: used this in a teaser graphic for a research paper!"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2022",
      delightMeter: 4,
      site: "https://diagrams.app",
      img: "diagrams.png"
    },
    {
      name: "QuickLens",
      description: "Measure and align on-screen elements with ease.",
      useCase: "you want to see if two things align without grabbing a physical ruler.",
      features: [
        "Screen overlays for alignment, guides, and spacing",
        "Basically physical design tools, but designed for your screen"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2023",
      delightMeter: 5,
      site: "https://quicklens.app",
      img: "quicklens.png"
    },
    {
      name: "WiFi Signal",
      description: "Analyze the Wi-Fi signals around you with rich network info.",
      useCase: "For geeking out on the Wi-Fi signals around you when things feel a bit slow.",
      features: [
        "Shows you your network quality, IP address, speed, noise, signal, etc.",
        "Super interesting to see this stuff"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2023",
      delightMeter: 5,
      site: "https://setapp.com/apps/wifi-signal",
      img: "wifisignal.png"
    },
    {
      name: "Teleprompter App",
      description: "Read scripts for video—smooth, simple, and stress-free.",
      useCase: "you need to read a script for a video without losing your place.",
      features: [
        "Displays your script as a scrolling teleprompter",
        "Configurable speed, size, and easy to keep eye contact",
        "Perfect for video intros, presentations, and more"
      ],
      tags: ["Setapp", "Paid"],
      setupSince: "2024",
      delightMeter: 7,
      site: "https://setapp.com/apps/teleprompter-app",
      img: "teleprompter.png"
    }
  ]
}
