---
layout: "project"
title: "DayZ Breachingcharge"
permalink: "/dayz-breachingcharge/"



sections:
    -   contents:
            -   text: "Breachingcharge is a DayZ mod that adds a raiding system to the game, aimed at improving the vanilla raiding experience. It is highly configurable and features a custom damage system, allowing server owners to further adjust the experience that their servers provide to players."

    -   heading: "What was my role?"
        contents:
            -   text: "Breachingcharge is a mod primarily developed by my brother. Since I already started the development on my <a href=\"https://dennisvidal.github.io/dayz-banking/\"target=\"_blank\">Banking</a> and <a href=\"https://dennisvidal.github.io/dayz-fast-travel/\"target=\"_blank\">Fast Travel</a> mods at this point, my role in this project focused mostly on helping with the design and debugging as well as programming on multiple parts of the mod. Two of the major aspects I had a hand in are:"

                bullets:
                    -   text: "<b>Custom base raiding:</b> The raiding system at the core of the mod had a row of requirements that made development rather complex. One of the most important of these was that it had to be as configurable as possible while ideally working with any building mods that a server might use. Since not all mods supported DayZ's damage system back then, it was easier to forgo using it entirely, and led us to implement a custom damage system for the charges. Although this worked pretty well over the years, it sometimes required additional code to ensure compatibility with newly released building mods that used different setups. This is part of the reason why my brother and I decided to rework the entire system as part of the <a href=\"https://dennisvidal.github.io/dayz-more-explosives/\"target=\"_blank\">More Explosives</a> mod."
                        style: "disc"
                        
                    -   text: "<b>System design and networking:</b> Since I was already familiar with DayZ's codebase to a degree at the time, I was able to assist in designing large parts of the mod's mechanics. Apart from the above-mentioned raiding system, this includes the functionality and placement of charges as well as the synchronization of raiding data across all clients, to name a few. In addition to furthering my knowledge of the modding process, this also enabled me to deepen my understanding of networking and the design of more intricate gameplay mechanics in general."
                        style: "disc"


links:
    -   name: "github"
        url: "https://github.com/PhilippVidal/Breachingcharge"
        icon: "fab fa-github"
    -   name: "steam"
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1827241477"
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
    - "QA"

tools:
    -   name: "Visual Studio"
    -   name: "DayZ Tools"
        url: "https://store.steampowered.com/app/830640/DayZ_Tools/"

screenshots:
    - "/images/dayz-breachingcharge/breachingcharge-1.jpg"
    - "/images/dayz-breachingcharge/breachingcharge-2.jpg"
    - "/images/dayz-breachingcharge/breachingcharge-3.jpg"
    - "/images/dayz-breachingcharge/breachingcharge-4.jpg"
    - "/images/dayz-breachingcharge/breachingcharge-5.jpg"
    - "/images/dayz-breachingcharge/breachingcharge-6.jpg"
    - "/images/dayz-breachingcharge/breachingcharge-7.jpg"
    - "/images/dayz-breachingcharge/breachingcharge-8.jpg"
---