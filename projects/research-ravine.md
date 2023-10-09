---
layout: "project"
title: "Research Ravine"
permalink: "/research-ravine/"

video: "https://www.youtube.com/embed/Yi5lOAzYwzY"


sections:
    -   contents:
            -   text: "Research Ravine is a VR game that I developed alongside my master's thesis. As such, it heavily features procedural generation, with the entire landscape being dynamically generated using isosurface extraction. The algorithm used for this is called <a href=\"https://www.researchgate.net/publication/4112407_Dual_Marching_Cubes\"target=\"_blank\">Dual Marching Cubes</a> and was implemented in compute shaders to utilize the computation speed of the GPU. On top of that, the game uses a bike-like <a href=\"https://www.icaros.com/en/products/icaros-health\" target=\"_blank\">ICAROS system</a> as the input device to increase immersion and lower the possibility of motion sickness by having players shift their center of mass to control the input, leading to fitting full-body movements."
            -   text: "In the game, the player finds themselves in the role of a researcher stranded on a desert planet after their ship crashes. To fulfill their original goal for coming to the planet, they now have to collect as many resource samples as possible or risk getting fired once rescue arrives."
            -   text: "The gameplay loop itself has the player fly along an endless canyon to collect samples before the time runs out. Samples can be collected either by picking up crates that got lost during the crash or through the proximity to the terrain, with the collection rate being affected by both the distance and the speed of the player. To make use of the procedural nature of the environment, the player can additionally fire a mining beam that allows them to temporarily carve a tunnel through walls and skip between different paths."

    -   heading: "What was my role?"
        contents:
            -   text: "Since Research Ravine sits at the core of my master's thesis, my aim was to create as many aspects as I could myself. As a result, I worked on everything from design and gameplay to models and textures, with the only exception being the actual sounds. Some of these aspects are:"

            - bullets:
                -   text: "<b>Isosurface extraction with Dual Marching Cubes:</b> The primary focus of the project was the generation of terrain through Dual Marching Cubes. After some research, I chose this algorithm specifically as it not only provides some advantages over more traditional algorithms, such as Marching Cubes, but also because it made the overall project a lot more interesting compared to using a widely known algorithm."
                    style: "disc"
                -   text: "<b>GPU terrain generation using compute shaders:</b> My initial implementations utilized a single thread and later multiple threads to generate the terrain. However, both of these approaches didn't perform as well as I would have liked. Hence, why I decided to move the mesh calculations to compute shaders to let the GPU do most of the heavy lifting. As I had little experience with compute shaders beforehand, this required me to spend a decent amount of time researching their usage and optimizing my algorithms."
                    style: "disc"
                -   text: "<b>Octree-based level of detail:</b> Since the environment is based on volumetric data and not just a 2D heightmap, I had to devise a LOD system to realize any sort of sizeable terrain. In practice, I achieved this by constructing multiple octrees in which each terrain section maintains the same sample count while increasing the spacing between samples depending on the octree depth."
                    style: "disc"
                -   text: "<b>Seamless terrain transitions:</b> The algorithm I used left gaps between terrain sections. This is worsened further by the varying section sizes that the LODs created. To still provide seamless transitions, I spent a significant part of the project analyzing existing methods and designing a custom system that also utilized the GPU to fill these gaps. While the result is far from perfect, it fit well into the other systems and kept up with the regular terrain generation."
                    style: "disc"
                -   text: "<b>Gameplay features and improvements:</b> While I realized certain features, including pickups and the mining beam, to add more depth to the game, other features were needed due to the nature of the input device. In practice, the ICAROS takes time to get used to and has some kinks that worsened the experience. I mitigated this by, for example, adding a steering booster that enables finer movements and a difficulty setting that influences various parameters, such as the width of the ravines."
                    style: "disc"
                -   text: "<b>Immersive UI integration:</b> Since immersion was another major focus of Research Ravine and traditional UI doesn't mesh too well with VR, I opted to integrate the entire interface into the hover bike that the player uses throughout the game. This not only required me to question the design of UI elements to provide essential information in a clear and concise manner but also led me to implement features, like the minimap, that further improved the gameplay."
                    style: "disc"


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