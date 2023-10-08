---
layout: "project"
title: "Neon Coil"
permalink: "/neon-coil/"

video: "https://www.youtube.com/embed/k10owDuPYw4"


sections:
    -   contents:
            -   text: "Neon Coil is a 2D arcade shooter that my brother and I developed within a span of two weeks with the following two primary goals in mind:"
                bullets:
                -   text: "Create a sort of Unreal example for our portfolios, as our more noteworthy university projects were mostly based on Unity and therefore left us with little to show in regards to both our C++ and Unreal skills."
                    style: "decimal"
                -   text: "Familiarize ourselves with a handful of Unreal's components that we hadn't worked with in depth before, such as the Enhanced Input System, Niagara, Lumen, and Paper2D."
                    style: "decimal"

            -   text: "In regards to gameplay, Neon Coil combines elements from both Snake and Space Invaders to provide a fun and intuitive game loop. The player controls a snake-like ship with which they have to defend a city from incoming alien threats. The ship follows and shoots towards the mouse cursor and consists of one or more modules, each coming with their own type of weapon and adding to the overall length of the ship. The weapon modules additionally function as the ship's health and are lost either when hit by an enemy or when it runs out of ammo. Consequently, the player has to weigh picking up and using modules to manage the length of their ship, firepower, and health. The game is lost once the ship runs out of modules or when the aliens destroy the city's protective shield and invade."

    -   heading: "What was my role?"
        contents:
            -   text: "To fulfill the previously mentioned goals, I had a hand in nearly all aspects of the project. That includes the actual design and implementation of gameplay systems as well as artistic aspects such as Niagara effects, materials, and the overall look of the game. Some of the aspects I worked on include:"
                bullets:
                    -   text: "<b>Flexible entity spawning:</b> We weren't quite sure how far we would take the project, so we ideally wanted a design that could be easily build on down the line. To achieve this, I based it on Risk of Rain 2's director system, with each game mode having two generalized directors to spawn both enemies and items. Each director utilizes an array of behaviors and registered areas to decide when and where to spawn entities in a modular and easily extendable way."
                        style: "disc"

                    -   text: "<b>A modular ability system:</b> As part of Neon Coil, we decided to create an inheritance-based ability system that takes inspiration from Unreal's Gameplay Ability System but is of course a lot more rudimentary to keep the project simple and within the timeframe we set while still making it easy to implement any abilities we might decide to add later on."
                        style: "disc"

                    -   text: "<b>Interface-based score, item, and damage systems:</b> I opted to use interfaces to manage the communication between most classes. This allowed us to eliminate a lot of direct dependencies and made development overall significantly simpler, as we didn't need to know what object we were dealing with as long as it implemented the required interface."
                        style: "disc"
                    
                    -   text: "<b>UI design and integration:</b> To improve the gameplay experience, we tried to integrate the UI elements seamlessly into the game. Examples include the city's health, which is indicated by the color of its protective shield, and the ship module's type and ammo, which are directly visible as part of its sprite."
                        style: "disc"

                    -   text: "<b>Snake-like ship movement:</b> Initially, I kept the ship movement simple by having each module move directly towards the next. This, however, felt off during gameplay as individual modules cut corners and unintentionally collided with other entities. In the end, I switched to building an approximative path based on the head of the ship, with each module now following the next along this path while keeping the appropriate distance."
                        style: "disc"



links:
    -   name: "github"
        url: "https://github.com/DennisVidal/neon-coil"
        icon: "fab fa-github"

release: "August 2023"

engine:
    name: "Unreal Engine"

languages:
    -   name: "C++"
    -   name: "Blueprint Scripting"

roles:
    - "Programmer"
    - "Designer"
    - "Artist"

tools:
    -   name: "Visual Studio"

screenshots:
    - "/images/neon-coil/neon-coil-1.jpg"
    - "/images/neon-coil/neon-coil-2.jpg"
    - "/images/neon-coil/neon-coil-3.jpg"
    - "/images/neon-coil/neon-coil-4.jpg"
    - "/images/neon-coil/neon-coil-5.jpg"
    - "/images/neon-coil/neon-coil-6.jpg"
    - "/images/neon-coil/neon-coil-7.jpg"
---
