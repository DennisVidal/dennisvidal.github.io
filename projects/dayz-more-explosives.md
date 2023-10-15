---
layout: "project"
title: "DayZ More Explosives"
permalink: "/dayz-more-explosives/"

video: "https://www.youtube.com/embed/l5rjBDkBL3I"



sections:
    -   contents:
            -   text: "More Explosives is a DayZ mod that adds a row of explosives and a custom raiding system to the game. It is both an upgrade over the older <a href=\"/projects/Breachingcharge/Breachingcharge.html\" target=\"_blank\">Breachingcharge</a> mod and a highly configurable addition to DayZ's explosives. It uses DayZ's config and damage system as a base to allow for easier compatibility with other mods and includes explosive charges that can be placed on most surfaces, giving players more freedom and options in dealing with different situations."

    -   heading: "What was my role?"
        contents:
            -   text: "Similar to Breachingcharge, this mod was primarily developed by my brother. While my role mainly consisted of assisting in the design and realization of the mod's systems, I was significantly more involved in the mod's development than I was in Breachingcharge. My involvement includes, but isn't limited to:"
                bullets:
                    -   text: "<b>Networking of explosives:</b> One of the main features of the mod is the ability to freely connect any number of charges to any number of detonators and vice versa. Even though this was relatively easy to put into code, figuring out an efficient way to communicate this data between clients was not. The final design keeps track of a client's state to send only the required data while removing any redundant information and compacting the remaining data, ensuring that the performance isn't impacted even when detonators are connected to large quantities of explosives."
                        style: "disc"

                    -   text: "<b>Integration into DayZ's damage system:</b> The biggest issue with Breachingcharge was the need for custom code to ensure compatibility in some cases. To circumvent this, I helped my brother build the entire mod around the game's built-in damage system. Apart from automating large parts of the system and removing the need to send a lot of the data to the clients at runtime, this had some other positive effects on the gameplay. The most important one is arguably the removal of nearly all placement restrictions, allowing players to put charges on nearly anything, ranging from vehicles to the inventories of other players."
                        style: "disc"

                    -   text: "<b>Modular approach to explosives:</b> As part of the mod, we wanted to improve the explosives by adding modularity to them. We did this by choosing an approach in which each charge consists of a row of components on top of the base explosive. These components come in the form of, for example, a timer or receiver and alter the visual appearance of the explosive to make each configuration easily recognizeable. As a result, we ended up with a highly customizable explosive system that can be quickly built upon by any server owner with some modding experience."
                        style: "disc"



links:
    -   name: "github"
        url: "https://github.com/PhilippVidal/MoreExplosives"
        icon: "fab fa-github"
    -   name: "steam"
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2916864737"
        icon: "fab fa-steam"

release: "January 2023"

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
    - "/images/dayz-more-explosives/more-explosives-1.jpg"
    - "/images/dayz-more-explosives/more-explosives-2.jpg"
    - "/images/dayz-more-explosives/more-explosives-3.jpg"
    - "/images/dayz-more-explosives/more-explosives-4.jpg"
    - "/images/dayz-more-explosives/more-explosives-5.jpg"
    - "/images/dayz-more-explosives/more-explosives-6.jpg"
    - "/images/dayz-more-explosives/more-explosives-7.jpg"
---