---
layout: "project"
title: "Nonverbal Communication"
permalink: "/nonverbal-communication/"

video: "https://www.youtube.com/embed/t2XhstgVzgY"


sections:
    -   contents:
            -   text: "Nonverbal Communication is an AR game that lets you interact with a virtual character through a row of nonverbal means. This included both the player's gaze and their distance. The character reacts appropriately by, for example, seeking eye contact with the player when being looked at and moving to a suitable distance when they get too close for comfort."
            
            -   text: "I developed this project as part of my bachelor's thesis, and it uses a HoloLens to project virtual content into the player's surroundings to explore how a character's presence can be influenced by purely nonverbal cues, which are mostly perceived subconsciously. As such, it concerns itself with possible ways that can make characters in games more believable and lead to a better player experience. By extension, this also includes the invoking of immersion, since the absence of nonverbal cues, while often not actively perceived, can make situations feel out of place and lead to an overall worse encounter."
            

    -   heading: "What was my role?"
        contents:
            -   text: "Due to the fact that Nonverbal Communication was the final project of my bachelor's degree, I got to apply a lot of the knowledge I had obtained over previous semesters to both the design and implementation of the game mechanics as well as the creation of the character model and animations. Some of the things I worked on during this include the following:"
                bullets:
                    -   text: "<b>Research into nonverbal cues, presence, and immersion:</b> Since invoking a sense of presence in combination with the character played a central role in the project, I spent the earlier development stages researching the effects of nonverbal cues and how they can be used to influence both the character's presence and the player's immersion. This not only enabled me to achieve the desired effects in this project but also further taught me how important the design of mechanics is, and I've used this knowledge in other projects to create better player experiences."
                        style: "disc"

                    -   text: "<b>Design of interaction systems:</b> The systems that handle the interactions needed to facilitate nuanced nonverbal cues and be flexible enough to allow for adjustments without requiring large changes to other components. A good example of how I achieved this is the gaze system. It uses a row of different gaze behaviors to represent all the actions that can be taken to react to cues. This approach kept the overall system modular by making adding a reaction as simple as creating a new behavior."
                        style: "disc"

                    -   text: "<b>Directly controlling the character:</b> Considering that the character had to react fittingly in a variety of situations, I oftentimes had to take more direct control of its movements. This meant utilizing a mix of animations and directly targeting the bones to have the character face specific directions. While this approach led to natural-looking behavior and offered me the fine control needed, in hindsight, it would have probably been better to implement a more advanced form of inverse kinematics to create even more natural reactions."
                        style: "disc"

                    -   text: "<b>HoloLens integration:</b> Making use of the HoloLens required the integration of its features into the game. The biggest challenge in this context was by far getting the scanned play area to work properly with the navmesh generation that was needed for the movement of the character. Even though getting all of the features to work correctly took a decent amount of research and testing, it did allow me to develop a better understanding of how they and the generation of navmeshes work."
                        style: "disc"


links:
    -   name: "github"
        url: "https://github.com/DennisVidal/nonverbal-communication"
        icon: "fab fa-github"

release: "July 2020"

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
    -   name: "Gimp"

screenshots:
    - "/images/nonverbal-communication/nonverbal-communication-1.jpg"
    - "/images/nonverbal-communication/nonverbal-communication-2.jpg"
    - "/images/nonverbal-communication/nonverbal-communication-3.jpg"
    - "/images/nonverbal-communication/nonverbal-communication-4.jpg"
---