---
layout: "project"
title: "DayZ Banking"
permalink: "/dayz-banking/"

sections:
    -   contents:
            -   text: "Banking is a mod that adds a customizable and easily configurable banking system to DayZ. Interacting with a variety of ATMs allows players to safely store their money before going exploring and take it back out to buy new equipment from traders. The mod primary aims to improve the game experience by adding more depth and giving server owners additional freedom in how they go about balancing the gameplay loop on their servers."

    -   heading: "What was my role?"
        contents:
            -   text: "I developed Banking during my bachelor's degree to gain more experience in working with existing systems and provide something of value to the community of the game I was playing at the time. On top of DayZ's modding documentation being a lot worse back then compared to nowadays, modding a game like DayZ was entirely new to me and, as such, proved to be quite the learning experience, involving countless hours of figuring out the game's different systems and debugging my own. Some of the systems I worked on and the knowledge I gained from creating this mod include the following:"

                bullets:
                    -   text: "<b>Custom banking system:</b> Since the intention behind the mod was to allow you to store and retrieve a variety of funds, a system to handle these transactions was required. I designed this core component from scratch and implemented it, utilizing the knowledge I had gained from looking into the game's systems. Part of this was working out the best way to allow a wide range of items to be used as currency and handing out the correct sum based on these items. While translating this into code and integrating it with the game's components was on the more challenging side, it gave me the chance to put my planning and problem-solving skills to the test."
                        style: "disc"

                    -   text: "<b>Working with a larger codebase and existing systems:</b> To even start development on the mod, I had to familiarize myself with both the modding side of DayZ's codebase and its mechanics. Although understanding some of the lesser documented, rather complicated systems was somewhat overwhelming at times, I quite enjoyed the process, and getting the mod to work properly with, for example, the inventory and action system, was incredibly rewarding."
                        style: "disc"

                    -   text: "<b>Multiplayer networking:</b> One essential aspect of the mod was getting the banking data to synchronize over the network. Even though back then I had theoretical knowledge of networking thanks to lectures from previous semesters, my practical experience in the environment of an actual game was lacking. So figuring out and analyzing the concepts that DayZ uses to communicate data in multiplayer was quite welcome and taught me a lot about the client-server model and best practices for networking in general."
                        style: "disc"

            -   text: "While I have implemented a number of requested features and listened to feedback from the community, I am far from satisfied with the current implementation of the mod's systems and will structure them completely differently once I rework the mod in the future. Even so, the systems that I came up with during the original development have proven to be quite robust and have survived multiple years of game updates without breaking even once."


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