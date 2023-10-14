---
layout: "project"
title: "Research Ravine"
permalink: "/research-ravine/"

video: "https://www.youtube.com/embed/Yi5lOAzYwzY"


sections:
    -   contents:
            -   text: "Research Ravine is a VR game in which you are a researcher flying through an endless, procedurally generated ravine to gather as many research samples as possible before the time runs out. Samples can be gathered through various means, such as flying at high speed along the sides of the ravine. Inputs in the game are controlled via a bike-like <a href=\"https://www.icaros.com/en/products/icaros-health\" target=\"_blank\">ICAROS system</a>, which has the user shift their center of mass to control virtual movements. Not only does this specialized hardware allow for a far greater degree of immersion on top of the already immersive nature of VR, but the required physical involvement also makes the entire experience significantly more challenging and doubles as a decent workout."

            -   text: "I developed this game alongside my master's thesis, with the overall goal of creating a fun and immersive VR flight simulation that utilizes a variety of procedural aspects. As such, the entire terrain is dynamically generated using noise-based isosurface extraction and combined with different gameplay features that add depth and replayability to deliver an enjoyable experience."

    -   heading: "What was my role?"
        contents:
            -   text: "Since Research Ravine sits at the core of my master's thesis, my aim was to create as many aspects as I could myself. This led to me working on everything from design and gameplay to models and textures, with the only exception being the actual sounds. Some of these aspects include:"

            - bullets:
                -   text: "<b>Procedural terrain:</b> Simple heightmap-based terrain wouldn't do for the kind of terrain I had envisioned. So, I spent the start of the project researching isosurface extraction methods and ended up using an algorithm called <a href=\"https://www.researchgate.net/publication/4112407_Dual_Marching_Cubes\"target=\"_blank\">Dual Marching Cubes</a>. Apart from teaching me a lot about terrain creation, this algorithm created a cleaner mesh than, for example, Marching Cubes does. On top of that, the use of a not widely known algorithm made the overall project much more interesting while also allowing me to put my problem-solving skills to the test."
                    style: "disc"

                -   text: "<b>Compute Shader utilization:</b> Since the game was supposed to run on a high-resolution VR headset, it was a big goal for me to achieve as high a framerate as possible. My initial implementations utilized a single thread and later multiple threads to generate the terrain. However, both of these approaches didn't perform as well as I would have liked. Therefore, I decided to move the mesh calculations to compute shaders to let the GPU do most of the heavy lifting. As I had little experience with compute shaders beforehand, this required me to spend a decent amount of time researching their usage and optimizing my algorithms, but this time investment was well worth it in the end."
                    style: "disc"

                -   text: "<b>Octree-based level of detail:</b> To enable the environment sizes needed in Research Ravine, I had to devise a LOD system to reduce the number of generated terrain sections. In practice, I achieved this by constructing multiple octrees in which each terrain section keeps the same amount of samples while the spacing between individual samples increases depending on the octree depth. This allowed me to create considerably larger terrain and simultaneously maintain a more than playable framerate."
                    style: "disc"

                -   text: "<b>Seamless terrain transitions:</b> The method I used to create the terrain left visible gaps between neighboring sections. This was worsened further by the varying section sizes that the LODs created. To fix this, I spent a good part of the project analyzing existing methods and designing a completely custom system that also utilized the GPU to fill these gaps. Although the result isn't quite perfect, it fit well into the other systems and kept up with the regular terrain generation."
                    style: "disc"

                -   text: "<b>Gameplay features and improvements:</b> Making the gameplay entertaining required a variety of features. While I implemented some, like item effects, a mining beam, and a minimap, primarily to add depth to the gameplay, others were needed due to the nature of the input device. In practice, the ICAROS takes time to get used to and has some kinks that worsened the experience. I mitigated these issues through various means, such as a steering booster that enables finer movements and a difficulty setting that influences the width of the ravines and other parameters. As a result, the final testers at the end of the project were able to enjoy the game noticeably more, even without prior experience."
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