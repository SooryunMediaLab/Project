document.addEventListener('DOMContentLoaded', () => {
    const projectsData = [
        {
            id: 'x-press-seoul',
            title: 'X-PRESS SEOUL',
            shortDescription: 'An exhibition with magazine showcases exploring Seoul\'s urban dynamics and desires',
            tags: ['Exhibition', 'Curation', 'Magazine'], 
            mainImage: 'image/Xpress_Poster1.jpg',
            topGalleryImage: 'image/Xpress_Poster2.jpg',
            thumbnailImage: 'image/Xpress_Poster1.jpg',
            role: 'Curator, Production',
            skills: [],
            summary: 'Exhibition & Magazine Project. Participated in concept development, funding documentation, designer coordination, and exhibition execution, creating an event that felt like a magazine launch.',
            description: 'Our exhibition was conceptualized as a <span class="annotation-general-highlight">magazine launch event</span>, building on a novel-based concept. My role included preparing essential documents and presentations, as well as artist and designer outreach. I collaborated extensively with the designer to shape the exhibition\'s design and visual identity. The space was dynamically arranged, presenting works from external artists alongside creations from our team. This event was a joint effort with Team X-Press, with design by Sangmin Cha.<br><br>' +
                        '<strong>Exhibition Details:</strong><br>' +
                        'The exhibition is inspired by <span class="annotation-general-highlight">Georges Perec\'s novel "Things,"</span> which profoundly depicts young people\'s struggle with their unfulfilled aspirations for wealth and a luxurious lifestyle. "XPress" is portrayed within "Things" as a magazine symbolizing the lifestyle ambitions of the youth, encapsulating their dreams for the future.<br>' +
                        'In the 1920s Paris setting of the novel, the young professionals Jérôme and Sylvie are entangled in their desires for an affluent and stylish life, illustrating their frustration and despair stemming from their inability to meet these high societal expectations.<br>' +
                        '<span class="annotation-trigger-highlight" data-annotation="This question is key to adapting the novel\'s themes to a contemporary Korean context.">What if they lived in Seoul right now? What would they desire?</span> Through the portrayal of \'Sylvie,\' we explored the contemporary lifestyle ideals represented by \'X-Press Seoul, instead of XPress in the novel.\'<br><br>' +
                        'Participants shared their own experiences of navigating between personal aspirations and reality. Meanwhile, <span class="annotation-trigger-highlight" data-annotation="(이상의 방)">The Room of Ideals</span> showed installation of light, shadow, and video to metaphorically express each person\'s unique ideals. The project is funded by the Seoul Foundation for Arts and Culture and was made possible through the collaboration of a designer, translators, writers, and project participants and our team members.',
            galleryImages: [
                'image/Xpress1.jpg', 'image/Xpress2.jpg', 'image/Xpress3.jpg',
                'image/Xpress4.jpg', 'image/XpressBook.jpeg', 'image/XpressBook2.jpeg',
                'image/XpressBook3.jpeg'
            ],
            funding: 'Supported by Seoul Metropolitan Government Arts Council.'
        },
        {
            id: 'the-game-strangers',
            title: 'THE GAME: STRANGERS',
            shortDescription: 'A storytelling game exploring online world and interections.',
            tags: ['Game Design', 'Storytelling', 'Research'], // Max 3 tags
            mainImage: 'image/StrangersMain.png',
            topGalleryImage: 'image/StrangersMain.png',
            thumbnailImage: 'image/StrangersDP.png',
            role: 'Game Designer & Producer',
            skills: ['Concept Development', 'Game Development', 'Storytelling', 'Social Media Campaign'],
            summary: '"Stranger" is a text-based, retro-style RPG that emerges from in-depth research into online gender-based violence. This project offers an interactive solution, designed to empower players and highlight critical issues through engaging gameplay and a unique digital art approach.',
            description: '<strong>Research:</strong><br> My research addressed the alarming global rise of online gender-based violence, particularly focusing on image-based sexual violence and grooming. It explored <span class="annotation-general-highlight">how net art and cyberfeminist narratives could effectively intervene in mainstream internet culture.</span> By examining works from various net art projects, the study sought to translate complex theoretical understandings into a practical, accessible project that combats online harm through artistic expression. The project was featured in an exhibition at the Schloss Fechenbach Museum. <br><br><strong>Game Details:</strong><br> "Stranger" delivers an immersive experience that directly applies research findings. The game\'s narrative guides players through challenging scenarios, teaching them to identify warning signs during anonymous online interactions and set personal boundaries. This is achieved using the Twine Engine, which allows for branching narratives and dynamic player choices. <br><br><strong>Social Media Experience:</strong><br>Beyond game development, a key component of this project was the social media campaign. Inspired by \'90s net art and cutting-edge Instagram strategies, each post was designed to function as if opening a digital file or visiting a website, linking to other accounts to create a unique form of online navigation.',
            galleryImages: [
                'image/strangersIG.jpg' 
            ],
        },
        {
            id: 'stadtwerkstatt-medien',
            title: 'STADTWERKSTATT MEDIEN',
            shortDescription: 'Media art installations and workshops at a community art space.',
            tags: ['Community Engagement', 'Workshops', 'Media'], 
            mainImage: 'https://via.placeholder.com/600x400/000000/DFFF00?text=STADTWERKSTATT',
            topGalleryImage: 'image/Stadt2.png',
            thumbnailImage: 'image/Stadt2.png',
            role: 'Workshop design',
            skills: ['Public Relations', 'Workshop Design', 'Communications'],
            summary: 'Conducted a series of media art installations and led interactive workshops for the public at Stadtwerkstatt, promoting digital literacy and creative expression.',
            description: 'StadtWerkStatt Medien is an annual media workshop. As part of the public relations team, I managed communications with partner institutions, handled invitations, and maintained the list of artists and institutions.<br><br><strong>Event Details:</strong><br>"Exploring the Dynamics of Being Apart Yet Connected Through Digital Media"<br><br>The event is organized by students from the Master’s program, aims to broaden the understanding of media aesthetics among both local and international residents. After the workshops, the creative works produced by participants are exhibited at the Schloss Fechenbach museum in an exhibition named “Apart Connected.” The digital social sculpture is showcased in an online exhibition addressing themes of isolation, connectivity, and the transformation of cultural and artistic practices following the pandemic.<br><br><strong>Workshop: Compose Dieburg:</strong><br>Stadtwerkstatt Medien is consists of several workshop sessions, where we gathered the outcomes to create a single art piece. The aim is to engage with local communities and make digital art more accessible to everyone.<br><br>In the workshop Compose Dieburg, we focused on exploring the sonic environment and allowed participants to contribute to the art of sound composition.<br><br>Traditionally held at the Dieburg marketplace, the event moved to a virtual marketplace in 2021 due to the Corona Pandemic.',
            galleryImages: [
                'image/compose.png',
               
            ],
            
        },
        {
            id: 'natur-und-metamorphose',
            title: 'NATUR UND METAMORPHOSE',
            shortDescription: 'Interactive sound and light installation inspired by nature\'s cycles.',
            tags: ['Exhibition', 'Metadata', 'CMS'], 
            mainImage: 'https://via.placeholder.com/600x400/000000/DFFF00?text=NATUR+UND+METAMORPHOSE',
            topGalleryImage: 'image/natur.jpeg',
            thumbnailImage: 'image/natur.jpeg',
            role: 'Web Implementation',
            skills: ['Web Implementation', 'WordPress','Google Analytics'],
            summary: 'Contributed to the execution of an interactive art piece presented online gallary.',
            description: '<br><br><strong>Event details:</strong><br>The exhibition Nature and Metamorphose - Digital Paths to an Ecology, showcased both at Schloss Fechenbach in Dieburg and online, we delve into the intricate convergence of humanity, technology, and nature. As part of the core team in the Master\'s program, my contribution to this collaborative project involved implementing the web presence using WordPress.<br><br>The online exhibition showcased in a variety of artworks, suchs as installations, sound compositions, and 3D audio.',
            galleryImages: [
               
            ],
           
        },
        {
            id: 'live-and-leave',
            title: 'Live & Leave',
            shortDescription: 'An exhibition exploring urban traces and gentrification.',
            tags: ['Exhibition', 'Urban Studies', 'Gentrification'], 
            mainImage: '',
            topGalleryImage: 'image/dart.jpeg',
            thumbnailImage: 'image/dart.jpeg',
            role: 'Curation & Operation',
            skills: ['Event Management', 'Communication', 'Planning'],
            summary: 'Participated in concept development, managed venue space and installation, and handled artist search and communication with the gallery.',
            description: '<br><br><strong>Exhibition details:</strong><br>The exhibition "Live and Leave" explored into the narrative of urban traces within contemporary society, exploring how cities, under the immense influence of gentrification, are constantly dismantled and reassembled.<br><br>It is aimed to take a look at the spaces and lives that have been marginalized or forgotten due to these changes. Challenging the reliance on digital mapping, it questions whether unrecognized spaces can truly remain hidden in the digital age. Through the revival of placemaking principles, \'Live, Leave\' tried to reawaken the sensory experiences of urban inhabitants, highlighting the forgotten memories, the aesthetic and structural nuances of cityscapes, and the personal narratives that weave through the urban fabric.',
            galleryImages: [
            ],
           
        },
        {
            id: 'media-lab-fulldome-audio-play',
            title: 'FULLDOME PLAY: The Only Way Out',
            shortDescription: 'Exploration of immersive audio storytelling in a fulldome environment.',
            tags: ['3D Audio', 'Fulldome', 'Experimental Media'], 
            mainImage: '',
            topGalleryImage: '',
            thumbnailImage: 'https://via.placeholder.com/150x100/000000/DFFF00?text=AUDIO+PLAY',
            role: 'Technical Assistant & 3D Sound Editing',
            skills: ['Audio Editing', 'Sound Design', 'Immersive Audio'],
            summary: 'Participated in a media lab project focusing on the creation and spatialization of audio for fulldome projections, culminating in an experimental audio play.',
            description: 'This film The Only Way Out is a modern note on child marriage, poverty and despair and questions the driving force behind poor decisions. Inspired by the fairytale, it makes use of a recurring pastry motif: the donuts. Being the epitome of the bad in the good, a sweet temptation and simultaneously deeply unhealthy, the donuts become the indicators of oppression. Sometimes the only way out is nothing but emancipation itself.',
            galleryImages: [
              
            ],
        }
    ];

    const customCursor = document.getElementById('cursor');
    let currentThumbnail = null; // Reintroduced for hover preview

    // Global annotation tooltip elements
    const globalAnnotationTooltip = document.getElementById('global-annotation-tooltip');
    const globalAnnotationText = globalAnnotationTooltip.querySelector('.annotation-text');
    const globalAnnotationArrow = globalAnnotationTooltip.querySelector('.annotation-arrow');

    // Get elements for the typing and reveal effect
    const heroNameInitial = document.getElementById('hero-name-initial');
    const heroRoles = document.querySelector('.hero-roles'); // Select by class, as it's unique here
    const homeSmallText = document.querySelector('.home-small-text'); // Select by class

    // New image popup elements
    const imagePopupOverlay = document.getElementById('image-popup-overlay');
    const imagePopupImg = document.getElementById('image-popup-img');
    const imagePopupCloseBtn = document.getElementById('image-popup-close-btn');

    /**
     * Shows a global annotation tooltip near the mouse cursor.
     * @param {MouseEvent} e - The mouse event.
     * @param {string} text - The text to display in the annotation.
     */
    function showGlobalAnnotation(e, text) {
        globalAnnotationText.textContent = text;
        globalAnnotationTooltip.classList.add('visible');

        // Calculate position relative to mouse
        const tooltipWidth = globalAnnotationTooltip.offsetWidth;
        const tooltipHeight = globalAnnotationTooltip.offsetHeight;

        // Default position: 20px below the cursor, horizontally centered on cursor
        let left = e.clientX - (tooltipWidth / 2);
        let top = e.clientY + 20; 

        // Prevent tooltip from going off-screen right
        if (left + tooltipWidth > window.innerWidth - 10) {
            left = window.innerWidth - tooltipWidth - 10;
        }
        // Prevent tooltip from going off-screen left
        if (left < 10) {
            left = 10;
        }
        // Prevent tooltip from going off-screen bottom (if it's too close to bottom, show above)
        if (top + tooltipHeight > window.innerHeight - 10) {
            top = e.clientY - tooltipHeight - 20; // 20px above the cursor
            globalAnnotationArrow.classList.remove('up');
            globalAnnotationArrow.classList.add('down'); // Change arrow direction
        } else {
            globalAnnotationArrow.classList.remove('down');
            globalAnnotationArrow.classList.add('up'); // Ensure arrow is up
        }

        globalAnnotationTooltip.style.left = `${left}px`;
        globalAnnotationTooltip.style.top = `${top}px`;
    }

    /**
     * Hides the global annotation tooltip.
     */
    function hideGlobalAnnotation() {
        globalAnnotationTooltip.classList.remove('visible');
        // Reset position to prevent it from jumping when next shown
        globalAnnotationTooltip.style.left = ''; 
        globalAnnotationTooltip.style.top = '';
    }

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
        const target = e.target;
        if (target.closest('a, button, .project-item, .tag, .annotation-trigger-highlight, strong, .hero-name-container')) { // Added .hero-name-container for interactive cursor
            customCursor.classList.add('interactive');
        } else {
            customCursor.classList.remove('interactive');
        }
        // Re-enabled thumbnail position update on mousemove
        if (currentThumbnail) {
            const offsetX = 20;
            const offsetY = 20;
            currentThumbnail.style.left = `${e.clientX + offsetX}px`;
            currentThumbnail.style.top = `${e.clientY + offsetY}px`;

            // Ensure it stays within viewport
            const thumbRect = currentThumbnail.getBoundingClientRect();
            if (thumbRect.right > window.innerWidth - 10) {
                currentThumbnail.style.left = `${e.clientX - thumbRect.width - offsetX}px`; 
            }
            if (thumbRect.left < 10) {
                currentThumbnail.style.left = `10px`;
            }
            if (thumbRect.bottom > window.innerHeight - 10) {
                currentThumbnail.style.top = `${e.clientY - thumbRect.height - offsetY}px`;
            }
            if (thumbRect.top < 10) {
                currentThumbnail.style.top = `10px`;
            }
        }
    });

    const topBar = document.querySelector('.top-bar');
    const snapContainer = document.querySelector('.snap-container');
    const projectsSection = document.getElementById('projects');
    // Get the computed height of the top bar after CSS is applied
    const topBarHeight = topBar.offsetHeight; 

    // NEW: Scroll event listener for top bar blur effect
    snapContainer.addEventListener('scroll', () => {
        const scrollTop = snapContainer.scrollTop;
        const projectsSectionTop = projectsSection.offsetTop;
        const projectsSectionHeight = projectsSection.offsetHeight;
        const projectsSectionBottom = projectsSection.offsetTop + projectsSection.offsetHeight; // Corrected calculation

        // Determine if the projects section is visible and near the top
        // If projectsSectionTop is within the viewport and its bottom is also within the viewport
        // or if it's scrolling into view from the bottom
        const projectsSectionInView = scrollTop + window.innerHeight > projectsSectionTop && scrollTop < projectsSectionBottom;

        if (scrollTop > 0) {
            // If projects section is in view, remove blur (assuming its mask handles the top)
            // Otherwise, add blur for other sections
            if (projectsSectionInView) {
                 topBar.classList.remove('scrolled');
            } else {
                 topBar.classList.add('scrolled');
            }
        } else {
            topBar.classList.remove('scrolled'); // No blur at the very top of the page
        }
    });

    document.querySelectorAll('.top-bar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                snapContainer.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const projectsGrid = document.getElementById('projects-grid');
    function loadProjects() {
        projectsData.forEach(project => {
            const projectItem = document.createElement('div');
            // MODIFIED: Removed 'hidden-initial-reveal' class from project items
            projectItem.classList.add('project-item'); 
            projectItem.dataset.projectId = project.id;
            // Limit tags to 3
            const displayTags = project.tags.slice(0, 3);
            const tagsHtml = displayTags.map(tag => `<span class="tag">${tag}</span>`).join('');
            projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.shortDescription}</p><div class="tags">${tagsHtml}</div><button class="read-more-btn">> VIEW PROJECT</button>`;
            projectsGrid.appendChild(projectItem);
        });
    }

    const projectDetailOverlay = document.getElementById('detail-overlay');
    const closeProjectDetailBtn = document.getElementById('close-btn');
    const detailTitle = document.getElementById('detail-title');
    const detailRole = document.getElementById('detail-role');
    const detailSummary = document.getElementById('detail-summary');
    const detailSkills = document.getElementById('detail-skills'); 
    const detailTags = document.getElementById('detail-tags');
    const detailDescription = document.getElementById('detail-description');
    const detailGallery = document.getElementById('detail-gallery');
    const detailFunding = document.getElementById('detail-funding');
    const detailTopImage = document.getElementById('detail-top-img');
    const fundingHeading = document.querySelector('#detail-overlay .detail-right h4:last-of-type'); 
    projectsGrid.addEventListener('click', (e) => {
        const projectItem = e.target.closest('.project-item');
        if (projectItem) {
            const projectId = projectItem.dataset.projectId;
            const project = projectsData.find(p => p.id === projectId);
            if (project) {
                detailTitle.textContent = project.title;
                detailRole.textContent = project.role;
                detailSummary.textContent = project.summary;

                // Clear and populate skills tags
                detailSkills.innerHTML = '';
                if (project.skills && project.skills.length > 0) {
                    project.skills.forEach(skill => {
                        const span = document.createElement('span');
                        span.classList.add('tag');
                        span.textContent = skill;
                        detailSkills.appendChild(span);
                    });
                }

                // Clear and populate project tags
                detailTags.innerHTML = '';
                project.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.classList.add('tag');
                    span.textContent = tag;
                    detailTags.appendChild(span);
                });
                
                // Set innerHTML for description, which contains the annotation triggers
                detailDescription.innerHTML = project.description;

                if (project.topGalleryImage) {
                    detailTopImage.src = project.topGalleryImage;
                    detailTopImage.alt = `Top image for ${project.title}`;
                    detailTopImage.classList.remove('hidden');
                } else {
                    detailTopImage.src = '';
                    detailTopImage.classList.add('hidden');
                }
                detailGallery.innerHTML = '';
                
                // Dynamically add wrapper for strangersIG.jpg only if it's the target project
                if (project.id === 'the-game-strangers') {
                    const strangersIGWrapper = document.createElement('div');
                    strangersIGWrapper.classList.add('strangers-ig-wrapper');
                    const img = document.createElement('img');
                    img.src = 'image/strangersIG.jpg';
                    img.alt = 'Gallery image for THE GAME: STRANGERS';
                    strangersIGWrapper.appendChild(img);
                    detailGallery.appendChild(strangersIGWrapper);

                    // Attach click listener to the image inside the wrapper
                    img.style.cursor = 'none'; // Indicate interactivity, but use custom cursor
                    img.onclick = function(e) {
                        e.stopPropagation(); // Prevent click from bubbling up to project-item and closing detail overlay
                        
                        const imgRect = this.getBoundingClientRect();
                        const clickX = e.clientX - imgRect.left;
                        const clickY = e.clientY - imgRect.top;

                        const cellWidth = imgRect.width / 3;
                        const cellHeight = imgRect.height / 3;

                        let targetImageSrc = '';

                        // Determine which grid cell was clicked
                        const col = Math.floor(clickX / cellWidth);
                        const row = Math.floor(clickY / cellHeight);

                        if (row === 0 && col === 0) { // Top-left
                            targetImageSrc = 'image/StrangersDP.png';
                        } else if (row === 1 && col === 1) { // Center
                            targetImageSrc = 'image/stranger.png';
                        } else if (row === 2 && col === 0) { // Bottom-left
                            targetImageSrc = 'image/strangersMS.jpg';
                        } else if (row === 2 && col === 2) { // Bottom-right
                            targetImageSrc = 'image/strangersRM.png';
                        }

                        if (targetImageSrc) {
                            // Toggle popup visibility
                            if (imagePopupOverlay.classList.contains('visible') && imagePopupImg.src.endsWith(targetImageSrc)) {
                                imagePopupOverlay.classList.remove('visible');
                                imagePopupImg.src = '';
                            } else {
                                // Append the overlay to the wrapper of the clicked image
                                this.parentNode.appendChild(imagePopupOverlay);
                                imagePopupImg.src = targetImageSrc;
                                imagePopupOverlay.classList.add('visible');
                            }
                        }
                    };
                } else {
                    // For other projects, display all images in galleryImages
                    project.galleryImages.forEach(imageSrc => {
                        const img = document.createElement('img');
                        img.src = imageSrc;
                        img.alt = `Gallery image for ${project.title}`;
                        detailGallery.appendChild(img);
                    });
                }
                
                // Handle funding section visibility
                if (project.funding) {
                    detailFunding.textContent = project.funding;
                    // Ensure both the heading and the content are shown
                    fundingHeading.style.display = 'block'; 
                    detailFunding.style.display = 'block'; 
                } else {
                    detailFunding.textContent = '';
                    // Ensure both the heading and the content are hidden
                    fundingHeading.style.display = 'none'; 
                    detailFunding.style.display = 'none'; 
                }

                projectDetailOverlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';

                // Attach event listeners to newly loaded annotation triggers in the detail view
                document.querySelectorAll('#detail-overlay .annotation-trigger-highlight').forEach(trigger => {
                    trigger.addEventListener('mouseover', (e) => {
                        const annotationText = trigger.dataset.annotation;
                        if (annotationText) {
                            showGlobalAnnotation(e, annotationText);
                        }
                    });
                    trigger.addEventListener('mouseout', hideGlobalAnnotation);
                    trigger.addEventListener('mousemove', (e) => {
                        if (globalAnnotationTooltip.classList.contains('visible')) {
                            // Re-position the tooltip if it's already visible
                            showGlobalAnnotation(e, globalAnnotationText.textContent); 
                        }
                    });
                });
            }
        }
    });

    // Function to show the image popup (now adjusted for in-place overlay)
    function showImagePopup(src) {
        imagePopupImg.src = src;
        imagePopupOverlay.classList.add('visible');
        // No need to prevent body scroll here, as it's an in-place overlay
    }

    // Event listener for image popup close button
    imagePopupCloseBtn.addEventListener('click', () => {
        imagePopupOverlay.classList.remove('visible');
        imagePopupImg.src = ''; // Clear image src
        // No need to re-enable body scroll here
    });

    // Event listener to close image popup when clicking outside the content (within the overlay)
    imagePopupOverlay.addEventListener('click', (e) => {
        // Only close if the click is directly on the overlay, not on the image itself
        if (e.target === imagePopupOverlay) {
            imagePopupOverlay.classList.remove('visible');
            imagePopupImg.src = '';
        }
    });


    // projectsGrid mouseover/mouseout for thumbnail preview
    projectsGrid.addEventListener('mouseover', (e) => {
        const projectItem = e.target.closest('.project-item');
        if (projectItem) {
            const projectId = projectItem.dataset.projectId;
            const project = projectsData.find(p => p.id === projectId);
            if (project && project.thumbnailImage) {
                if (currentThumbnail) {
                    currentThumbnail.remove();
                    currentThumbnail = null;
                }
                currentThumbnail = document.createElement('div');
                currentThumbnail.classList.add('project-thumbnail-preview');
                currentThumbnail.innerHTML = `<img src="${project.thumbnailImage}" alt="Thumbnail for ${project.title}">`;
                document.body.appendChild(currentThumbnail);

                // Position the thumbnail relative to the mouse
                const offsetX = 20;
                const offsetY = 20;
                currentThumbnail.style.left = `${e.clientX + offsetX}px`;
                currentThumbnail.style.top = `${e.clientY + offsetY}px`;

                // Ensure it stays within viewport
                const thumbRect = currentThumbnail.getBoundingClientRect();
                if (thumbRect.right > window.innerWidth - 10) {
                    currentThumbnail.style.left = `${e.clientX - thumbRect.width - offsetX}px`; 
                }
                if (thumbRect.left < 10) {
                    currentThumbnail.style.left = `10px`;
                }
                if (thumbRect.bottom > window.innerHeight - 10) {
                    currentThumbnail.style.top = `${e.clientY - thumbRect.height - offsetY}px`;
                }
                if (thumbRect.top < 10) {
                    currentThumbnail.style.top = `10px`;
                }

                currentThumbnail.classList.add('visible');
            }
        }
    });

    projectsGrid.addEventListener('mouseout', (e) => {
        if (e.target.closest('.project-item') && currentThumbnail) {
            currentThumbnail.classList.remove('visible');
            const thumbToRemove = currentThumbnail;
            thumbToRemove.addEventListener('transitionend', function handler() {
                thumbToRemove.remove();
                this.removeEventListener('transitionend', handler);
            });
            currentThumbnail = null;
        }
    });

    closeProjectDetailBtn.addEventListener('click', () => {
        projectDetailOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
        hideGlobalAnnotation(); // Hide annotation when closing detail overlay
    });

    loadProjects(); // Ensure projects are loaded before setting up observers

    // Home Section Typing Animation and Sequential Reveal
    if (heroNameInitial) {
        // The animationend listener for heroNameInitial will now be handled by CSS
        // We only need to trigger the subsequent reveals here
        heroNameInitial.addEventListener('animationend', () => {
            // No need to add 'typed' class here, CSS handles it
            // No need to remove border-right here, CSS handles it

            // Reveal heroRoles after a short delay
            setTimeout(() => {
                if (heroRoles) {
                    heroRoles.classList.add('reveal-text');
                }
            }, 300); // Delay for heroRoles

            // Reveal homeSmallText after heroRoles (additional delay)
            setTimeout(() => {
                if (homeSmallText) {
                    homeSmallText.classList.add('reveal-text');
                }
            }, 800); // Delay for homeSmallText
        }, { once: true }); // Ensure this listener runs only once
    }
