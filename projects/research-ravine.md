---
layout: "project"
title: "Research Ravine"
permalink: "/research-ravine/"

video: "https://www.youtube.com/embed/Yi5lOAzYwzY"

descriptions:
    - "Research Ravine is a VR game I developed alongside my master's thesis, and as such, it makes heavy use of procedural generation. More precisely, it features terrain that is completely created with the help of an isosurface extraction algorithm called <a href="https://www.researchgate.net/publication/4112407_Dual_Marching_Cubes"target="_blank">Dual Marching Cubes</a> and implemented using compute shaders to utilize the power of the GPU. Another highlight of the project is the usage of an <a href="https://www.icaros.com/en/products/icaros-health" target="_blank">ICAROS system</a>, a bike-like contraption that allows the player to control their character by shifting their center of mass."
    - "In the game, the player finds themselves in the role of a researcher stranded on a desert planet after their ship crashed. Even though they barely survived the crash, they now have to collect as many resource samples as possible to fulfill their original goal for coming to the planet or risk getting fired."
    - "The gameplay loop itself has the player fly through an endless canyon to collect samples before the time runs out. Samples can be collected either by picking up research crates that got lost during the crash or through the player's proximity to the terrain, with the collection rate of the latter being affected by both the distance to the terrain and the speed of the player. To make use of the procedural nature of the environment, the player can fire a mining beam that allows them to temporarily carve a tunnel through walls and skip between different paths."

role-descriptions:
    - "As Research Ravine sits at the core of my master's thesis, I worked on every aspect of it and created all assets myself, with the exception of the actual sounds used for the different effects. The most noteworthy system I created in this context is probably the one responsible for the terrain generation."
    - "It consists of the subdivision of the terrain into smaller chunks to allow for manageable mesh creation on the GPU without having to rebuild the entire terrain every time. To improve the performance and allow for larger view distances, I additionally implemented a level of detail system based on an octree around the player. Connecting the resulting chunks of different sizes seamlessly was by far the biggest challenge of the project. Since the chunks didn't connect well at the seams due to their varying sizes, I had to come up with a system that would not only fit that purpose but also be able to run on the GPU to keep up with the creation of the actual chunks."

links:
    -   name: "github"
        url: "https://github.com/DennisVidal/research-ravine"
        icon: "fab fa-github"

release: "May 2022"

engine:
    name: "Unity"

languages:
    -   name: "C#"

roles:
    - "Programmer"
    - "Designer"
    - "Artist"

tools:
    -   name: "Visual Studio"
    -   name: "Blender"
    -   name: "Substance Painter"
    -   name: "Gimp"

screenshots:
    - "/images/research-ravine/research-ravine-1.jpg"
    - "/images/research-ravine/research-ravine-2.jpg"
    - "/images/research-ravine/research-ravine-3.jpg"
    - "/images/research-ravine/research-ravine-4.jpg"
    - "/images/research-ravine/research-ravine-5.jpg"
    - "/images/research-ravine/research-ravine-6.jpg"
    - "/images/research-ravine/research-ravine-7.jpg"
---