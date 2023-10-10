---
layout: "project"
title: "DayZ Banking"
permalink: "/dayz-banking/"

sections:
    -   contents:
            -   text: "Banking is a mod that, as the name suggests, adds a customizable and easily configurable banking system to DayZ. Players can access this system by interacting with a variety of ATMs to safely store their money before going exploring and taking it back out to buy new equipment from traders. The primary goal of this mod is to improve the player experience by adding more depth to the game and giving server owners more freedom in how they go about balancing the gameplay loop on their servers."

    -   heading: "What was my role?"
        contents:
            -   text: "I developed Banking in the later semesters of my bachelor's degree to gain more expertise in working with existing systems and provide something of value to the community. As modding a game like DayZ was entirely new to me and because DayZ's modding documentation was a lot worse back then compared to nowadays, creating this mod was quite the learning experience and involved countless hours of figuring out the game's systems and debugging my own. While it was tedious at times, the appreciative feedback I got after releasing the mod made it well worth the time I invested. Some of the systems I worked on as part of the mod and the expertise I gained from doing so include the following:"

                bullets:
                    -   text: "<b>Custom banking system:</b> I developed the banking system at the core of the mod and all related mechanics completely from scratch. Working out details like the best way to allow a wide range of items to be used as currency, translating this into code, and putting everything together to work nicely with the game's components was on the more complexe side and certainly put my planning and problem-solving skills to the test."
                        style: "disc"

                    -   text: "<b>Working with a larger codebase and existing systems:</b> Although most projects I worked on before Banking involved significantly smaller codebases with comparatively simpler systems, I quite enjoyed the process of familiarizing myself with the modding side of DayZ's codebase and mechanics. Despite this oftentimes being challenging, it was incredibly rewarding once I got the mod to work properly with, for example, the inventory and action system."
                        style: "disc"

                    -   text: "<b>Multiplayer networking:</b> Even though back then I had theoretical knowledge of networking thanks to lectures from previous semesters, my practical experience in the environment of an actual game lacked quite a bit. So analyzing the ways that DayZ uses to communicate data across the network and getting everything to sync properly between the server and clients was quite welcome and taught me a lot about the client-server model and best practices for networking in general."
                        style: "disc"


            -   text: "While I have implemented a number of requested features and listened to feedback from the community, I am far from satisfied with the current implementation of the mod's systems and would structure them completely differently if I were to rework the mod today. Even so, the systems that I came up with during the original development have proven to be quite robust and have survived multiple years of game updates without breaking even once."


links:
    -   name: "github"
        url: "https://github.com/DennisVidal/dayz-banking"
        icon: "fab fa-github"
    -   name: "steam"
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1836257061"
        icon: "fab fa-steam"

release: "August 2019"

engine:
    name: "Enfusion"
    url: "https://enfusionengine.com"

languages:
    -   name: "Enforce Script (C#&#8209like)"
        url: "https://community.bistudio.com/wiki/DayZ:Enforce_Script_Syntax"

roles:
    - "Programmer"
    - "Designer"
    - "Artist"

tools:
    -   name: "Visual Studio"
    -   name: "DayZ Tools"
        url: "https://store.steampowered.com/app/830640/DayZ_Tools/"
    -   name: "Blender"
    -   name: "Substance Painter"

screenshots:
    - "/images/dayz-banking/banking-1.jpg"
    - "/images/dayz-banking/banking-2.jpg"
    - "/images/dayz-banking/banking-3.jpg"
    - "/images/dayz-banking/banking-4.jpg"
    - "/images/dayz-banking/banking-5.jpg"
    - "/images/dayz-banking/banking-6.jpg"
    - "/images/dayz-banking/banking-7.jpg"
    - "/images/dayz-banking/banking-8.jpg"
    - "/images/dayz-banking/banking-9.jpg"
---