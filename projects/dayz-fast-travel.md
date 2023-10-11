---
layout: "project"
title: "DayZ Fast Travel"
permalink: "/dayz-fast-travel/"



sections:
    -   contents:
            -   text: "Fast Travel aims to enhance the gameplay by adding a system to DayZ that lets players quickly travel between predefined locations. Players can choose their destination by interacting with markers on a map board. Both the cost of traveling and the locations that can be visited are highly configurable and can be set up to, for example, cut down on travel times between traders, allow players to access higher tiers of loot in walled-off areas, and function as a more immersive spawn selection."

    -   heading: "What was my role?"
        contents:
            -   text: "I developed Fast Travel alongside my first DayZ mod <a href=\"https://dennisvidal.github.io/dayz-banking/\"target=\"_blank\">Banking</a>. Because of that, a lot of the experience I gained in regards to system design, gameplay, and networking is shared between both mods. Some aspects I worked on as part of this mod include:"
                bullets:
                    -   text: "<b>Flexible fast travel system:</b> The biggest challenge during the mod's creation was the design of the system governing the actual travel between locations. Not only did it have to be configurable to support a variety of maps and server-specific scenarios, but it also had to be simple enough to enable server owners with little modding experience to set up the mod."
                        style: "disc"

                    -   text: "<b>Efficient player teleportation:</b> Even though teleporting a player itself is rather simple in DayZ, designing a system that ensures they only spawn in valid areas, that aren't too predictable to be camped, while still being efficient on the server required some thinking. The final system divides spawn areas into smaller, more manageable sections and validates chosen spawn points through collision checks to prevent players from spawning inside building meshes and other objects."
                        style: "disc"

                    -   text: "<b>Working with DayZ's codebase and networking:</b> Since I had started working on my banking mod a bit before this mod, I had already gained some familiarity with modding DayZ and its multiplayer framework. While this definitely helped and allowed me to reinforce my understanding of the systems that both mods use, Fast Travel utilizes the base game's systems to a far greater degree. This led me to work with a wider range of the game's components to integrate the mod and make it work flawlessly in multiplayer."
                        style: "disc"
            
            


links:
    -   name: "github"
        url: "https://github.com/DennisVidal/dayz-fast-travel" 
        icon: "fab fa-github"
    -   name: "steam"
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1843000706"
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

tools:
    -   name: "Visual Studio"
    -   name: "DayZ Tools"
        url: "https://store.steampowered.com/app/830640/DayZ_Tools/"
    -   name: "Blender"

screenshots:
    - "/images/dayz-fast-travel/fast-travel-1.jpg"
    - "/images/dayz-fast-travel/fast-travel-2.jpg"
    - "/images/dayz-fast-travel/fast-travel-3.jpg"
---