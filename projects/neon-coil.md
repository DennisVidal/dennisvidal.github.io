---
layout: "project"
title: "Neon Coil"
permalink: "/neon-coil/"

video: "https://www.youtube.com/embed/k10owDuPYw4"


sections:
    -   contents:
            -   text: "Neon Coil is a 2D arcade shooter that combines elements from both Snake and Space Invaders to provide a fun and intuitive game loop. You control a snake-like defense ship that is tasked with protecting a city from an incoming alien threat. While you will be inevitably overrun and the city's shield pierced, your goal is to destroy as many alien ships as you can to buy time for the city's evacuation. To support you in this, you are provided with a range of ship modules, each with a different type of weapon system and attack pattern."

            -   text: "My brother and I developed Neon Coil within a short time of two weeks with two primary goals in mind. The first was the creation of a sort of example project for our C++ and Unreal skills. Since most of our larger university projects were based on Unity, we were left with little noteworthy to show in regards to both of these skills. Our second goal was to familiarize ourselves with a handful of Unreal's components that we hadn't worked with in depth before. This includes the Enhanced Input System, Niagara, Lumen, and Paper2D, among others."

    -   heading: "What was my role?"
        contents:
            -   text: "To fulfill the previously mentioned goals, I had a hand in nearly all aspects of the project. That includes the actual design and implementation of gameplay systems as well as artistic aspects such as Niagara effects, materials, and the overall look of the game. Some of the aspects I worked on include:"
                bullets:
                    -   text: "<b>Flexible entity spawning:</b> We weren't quite sure how far we would take the project, so we ideally wanted a design that could be easily build on down the line. To achieve this, I based it on Risk of Rain 2's director system, with each game mode having two generalized directors to spawn both enemies and items. Each director utilizes an array of behaviors and registered areas to decide when and where to spawn entities. This not only kept the system modular and quickly modifiable but also allowed me to quickly extend it with new behaviors later on."
                        style: "disc"

                    -   text: "<b>Modular ability system:</b> As part of Neon Coil, we decided to create an inheritance-based ability system that takes inspiration from Unreal's Gameplay Ability System. The system we created is, of course, a lot more rudimentary to keep the project simple and within the set timeframe, but it is still versatile enough to make implementing new abilities quick and easy."
                        style: "disc"

                    -   text: "<b>Interface-based score, item, and damage systems:</b> Eliminating a lot of direct dependencies between components was important during the project to keep the overall development manageable. To achieve this, I opted to utilize interfaces to handle the communication between most classes. This helped significantly, as we didn't need to know what specific objects we were dealing with as long as they implemented the required interfaces."                    
                        style: "disc"
                    
                    -   text: "<b>UI design and integration:</b> It was important for us that the final game has clean and simple appearance. Part of this involved seamlessly integrating as much of the UI as possible into the game world. For example, the city's health can be deduced from the color of its protective shield, and a ship module's type and ammo are directly visible as part of its sprite. This led us to the overall look we were going for as well as making the game feel a lot better and more intuitive, as there weren't various UI elements cluttering the screen."
                        style: "disc"

                    -   text: "<b>Snake-like ship movement:</b> Another big part of the game was the control of the player's ship. Initially, I kept its movement simple by having each module move directly towards the next. This, however, felt off during gameplay as individual modules cut corners and unintentionally collided with other entities. In the end, I switched to building an approximate path based on the head of the ship, with each module now following the next along this path while keeping the appropriate distance. This made the movement immediately more intuitive and akin to what most people are used to from a game like Snake, without being restricted to a simple grid."
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
