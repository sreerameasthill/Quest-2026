document.addEventListener('DOMContentLoaded', () => {
    console.log('Quest 2026: Magic Initialized');

    // --- 0. Magical Text Loader ---
    const initLoader = () => {
        const loader = document.getElementById('loader');
        if (!loader) return;

        const hasPlayed = sessionStorage.getItem('loaderPlayed');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Skip if already played
        if (hasPlayed) {
            loader.style.display = 'none';
            document.body.classList.add('loaded');
            return;
        }

        // Reduced Motion: Instant reveal
        if (prefersReducedMotion) {
            loader.classList.add('hidden');
            document.body.classList.add('loaded');
            sessionStorage.setItem('loaderPlayed', 'true');
            setTimeout(() => loader.style.display = 'none', 800);
            return;
        }

        // Magical text animation (3 seconds total)
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.add('loaded');
            sessionStorage.setItem('loaderPlayed', 'true');
            
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }, 3000);
    };

    initLoader();

    // --- 1. Background Randomizer ---
    const backgrounds = [
        'assets/hogwarts_bg.png', 
        'assets/hp_bg_1.png',
        'assets/hp_bg_2.png',
        'assets/hp_bg_3.png'
    ];
    
    const hero = document.getElementById('hero');
    if(hero) {
        const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        hero.style.backgroundImage = `url('${randomBg}')`;
        console.log('Applied Background:', randomBg);
    }

    // --- 2. Scroll Reveal Animation (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: Stop observing once revealed
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-text, .reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));


    // --- 3. Navbar Sticky Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    // --- 4. Hero Title Liquid Morph (Ragam Style) ---
    const morphItems = document.querySelectorAll('.morph-item');
    let currentIndex = 0;

    function morphCycle() {
        if(morphItems.length === 0) return;

        const currentItem = morphItems[currentIndex];
        const nextIndex = (currentIndex + 1) % morphItems.length;
        const nextItem = morphItems[nextIndex];

        // 1. Start State: Current is Visible, Next is Invisible & Blurred
        // We will animate Current to BlurOut and Next to BlurIn simultaneously
        
        // Prepare Next Item
        nextItem.style.transition = 'none';
        nextItem.style.opacity = '0';
        nextItem.style.filter = 'blur(15px)'; // Start blurred
        nextItem.classList.remove('visible'); // Ensure class logic is clean
        
        // Force Reflow
        void nextItem.offsetWidth;

        // Restore transitions
        nextItem.style.transition = 'opacity 1.5s ease-in-out, filter 1.5s ease-in-out';
        currentItem.style.transition = 'opacity 1.5s ease-in-out, filter 1.5s ease-in-out';

        // 2. Execute Morph (Parallel)
        
        // Animate Current OUT (Melting)
        currentItem.style.opacity = '0';
        currentItem.style.filter = 'blur(15px)';

        // Animate Next IN (Forming)
        nextItem.style.opacity = '1';
        nextItem.style.filter = 'blur(0px)';
        
        // Update indices for next loop
        currentIndex = nextIndex;
    }

    if(morphItems.length > 0) {
        // Run every 3 seconds (1.5s morph + 1.5s hold)
        setInterval(morphCycle, 3000);
    }


    // --- 5. Premium Snitch Logic (Mobile & Desktop) ---
    const snitch = document.querySelector('.snitch-container');
    if (snitch) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let snitchX = window.innerWidth / 2;
        let snitchY = window.innerHeight / 2;
        let time = 0;

        const updateCoordinates = (x, y) => {
            mouseX = x;
            mouseY = y;
        };

        // Desktop
        document.addEventListener('mousemove', (e) => {
            updateCoordinates(e.clientX, e.clientY);
        });

        // Mobile Touch
        document.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            updateCoordinates(touch.clientX, touch.clientY);
        }, { passive: true });

        function animateSnitch() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                snitch.style.left = mouseX + 'px';
                snitch.style.top = mouseY + 'px';
                return;
            }

            time += 0.05;

            // Smooth following with easing
            const easing = 0.12;
            snitchX += (mouseX - snitchX) * easing;
            snitchY += (mouseY - snitchY) * easing;

            // Organic Bobbing (2D only)
            const bobX = Math.sin(time * 0.7) * 3;
            const bobY = Math.cos(time * 0.8) * 6;

            // Apply 2D transform (adjusted for smaller size)
            snitch.style.transform = `translate(${snitchX + bobX - 30}px, ${snitchY + bobY - 30}px)`;

            requestAnimationFrame(animateSnitch);
        }
        animateSnitch();
    }

    // --- 7. Dynamic Event Cards & Modal (Categorized) ---
    function initEvents() {
        const eventsGrid = document.querySelector('#eventsGrid');
        const experienceGrid = document.querySelector('#experienceGrid');
        
        if (!eventsGrid || !experienceGrid || !window.eventsData) {
            console.error("Grid elements or Data missing");
            return;
        }

        // Clear existing static content
        eventsGrid.innerHTML = '';
        experienceGrid.innerHTML = '';

        // Category Sub-header rendering helper
        const addCategoryHeader = (container, text) => {
            const h4 = document.createElement('h4');
            h4.className = 'sub-category-header reveal-up';
            h4.innerText = text;
            container.appendChild(h4);
            if (typeof observer !== 'undefined') observer.observe(h4);
        };

        const renderCard = (event, container, index) => {
            const card = document.createElement('div');
            card.className = `event-card reveal-up delay-${(index % 4) * 100}`;
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `View details for ${event.title}`);
            
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-icon">${event.icon}</div>
                    <h3>${event.title}</h3>
                    <p class="event-subtitle">(${event.subtitle})</p>
                    <p>${event.description.substring(0, 100)}...</p>
                    <button class="btn-card">Enter Trial</button>
                </div>
            `;

            card.addEventListener('click', () => openEventModal(event));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openEventModal(event);
                }
            });

            container.appendChild(card);
            if (typeof observer !== 'undefined') observer.observe(card);
        };

        // 1. Group Competition Events
        const competitionCategories = ["Management", "Cultural", "Sports"];
        let compIndex = 0;
        
        competitionCategories.forEach(cat => {
            const catEvents = window.eventsData.filter(e => e.category === cat);
            if (catEvents.length > 0) {
                addCategoryHeader(eventsGrid, cat.toUpperCase() + " EVENTS");
                catEvents.forEach(event => {
                    renderCard(event, eventsGrid, compIndex++);
                });
            }
        });

        // 2. Render Experience Events
        const experienceEvents = window.eventsData.filter(e => e.category === "Experience");
        experienceEvents.forEach((event, idx) => {
            renderCard(event, experienceGrid, idx);
        });
    }

    // Modal Logic
    const strings = {
        modalId: 'eventModal',
        titleId: 'modalTitle',
        subtitleId: 'modalSubtitle',
        iconId: 'modalIcon',
        descId: 'modalDescription',
        typeId: 'modalType',
        roundsId: 'modalRounds',
        prizeId: 'modalPrize',
        eligibleId: 'modalEligibility',
        pocsId: 'modalPocs'
    };

    function openEventModal(event) {
        const modal = document.getElementById(strings.modalId);
        if (!modal) return;

        // Populate Data
        document.getElementById(strings.titleId).innerText = event.title;
        document.getElementById(strings.subtitleId).innerText = event.subtitle;
        document.getElementById(strings.iconId).innerText = event.icon;
        document.getElementById(strings.descId).innerText = event.description;
        
        document.getElementById(strings.typeId).innerText = event.details.type;
        document.getElementById(strings.roundsId).innerText = event.details.rounds;
        document.getElementById(strings.prizeId).innerText = event.details.prize;
        document.getElementById(strings.eligibleId).innerText = event.details.eligibility;

        // POCs
        const pocContainer = document.getElementById(strings.pocsId);
        pocContainer.innerHTML = '';
        event.pocs.forEach(poc => {
            const div = document.createElement('div');
            div.className = 'poc-item';
            div.innerHTML = `
                <span class="poc-icon">🧙‍♂️</span>
                <div>
                    <div class="poc-name">${poc.name}</div>
                    ${poc.number ? `<div class="poc-number">${poc.number}</div>` : ''}
                </div>
            `;
            pocContainer.appendChild(div);
        });

        // Show Modal
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Focus Trap (Simple)
        const closeBtn = modal.querySelector('.modal-close-btn');
        if (closeBtn) closeBtn.focus();

        // Close Listeners
        const backdrop = modal.querySelector('.event-modal-backdrop');
        const closeBtnEl = modal.querySelector('.modal-close-btn');
        
        const closeModal = () => {
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            removeListeners();
        };

        const onEsc = (e) => {
            if (e.key === 'Escape') closeModal();
        };

        function removeListeners() {
            backdrop.removeEventListener('click', closeModal);
            closeBtnEl.removeEventListener('click', closeModal);
            document.removeEventListener('keydown', onEsc);
        }

        backdrop.addEventListener('click', closeModal);
        closeBtnEl.addEventListener('click', closeModal);
        document.addEventListener('keydown', onEsc);
    }

    // Init
    initEvents();


    // --- 6. Random Harry Potter Quotes (Moved) ---
    const quotes = [
        "I solemnly swear that I am up to no good.",
        "It ends tonight.",
        "Happiness can be found, even in the darkest of times.",
        "Mischief Managed.",
        "Expecto Patronum!",
        "After all this time? Always.",
        "Do not pity the dead, Harry. Pity the living.",
        "Wit beyond measure is man's greatest treasure."
    ];

    const quoteText = document.getElementById('randomQuote');
    if(quoteText) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.innerText = randomQuote;
    }

    // --- 7. Spell Glyph Codex Interaction ---
    const spellCard = document.getElementById('spellCard');
    const glyphSymbol = document.getElementById('glyphSymbol');
    const spellNameEl = document.getElementById('spellName');
    const spellDescEl = document.getElementById('spellDesc');

    // Full Spell List
    const spellBook = [
        { name: "Lumos", desc: "Creates light", rune: "☀" },
        { name: "Nox", desc: "Extinguishes light", rune: "☾" },
        { name: "Alohomora", desc: "Unlocks sealed paths", rune: "ᚷ" },
        { name: "Protego", desc: "Defensive shield", rune: "🛡" },
        { name: "Expelliarmus", desc: "Disarms opponent", rune: "⚔" },
        { name: "Accio", desc: "Summons distant objects", rune: "🧲" },
        { name: "Incendio", desc: "Conjures fire", rune: "🔥" },
        { name: "Reparo", desc: "Restores broken objects", rune: "🛠" },
        { name: "Expecto Patronum", desc: "Summons protective force", rune: "🦌" },
        { name: "Finite", desc: "Ends magical effects", rune: "❌" },
        { name: "Wingardium Leviosa", desc: "Levitation charm", rune: "🪶" },
        { name: "Obliviate", desc: "Erases memories", rune: "🧠" },
        { name: "Riddikulus", desc: "Transforms fear", rune: "🤡" },
        { name: "Silencio", desc: "Silences sound", rune: "🔇" },
        { name: "Confundo", desc: "Causes confusion", rune: "😵" },
        { name: "Legilimens", desc: "Reads thoughts", rune: "👁" },
        { name: "Revelio", desc: "Reveals hidden things", rune: "🔦" },
        { name: "Impervius", desc: "Repels water", rune: "☂" },
        { name: "Colloportus", desc: "Seals entrances", rune: "🔒" },
        { name: "Muffliato", desc: "Creates auditory distortion", rune: "🙉" }
    ];

    let spellIndex = 0;
    
    if(spellCard && glyphSymbol) {
        spellCard.addEventListener('click', () => {
            // 1. Trigger Glow
            const glow = spellCard.querySelector('.glyph-glow');
            if(glow) {
                glow.classList.remove('active');
                void glow.offsetWidth; // Reflow
                glow.classList.add('active');
            }
            
            // 2. Animate Out
            glyphSymbol.classList.add('changing');
            spellNameEl.classList.add('text-fade-out');
            spellDescEl.classList.add('text-fade-out');

            // 3. Update Content after delay
            setTimeout(() => {
                // Cycle to next spell
                const spell = spellBook[spellIndex];
                spellIndex = (spellIndex + 1) % spellBook.length;
                
                glyphSymbol.innerText = spell.rune;
                spellNameEl.innerText = spell.name;
                spellDescEl.innerText = spell.desc;
                
                // Animate In
                glyphSymbol.classList.remove('changing');
                spellNameEl.classList.remove('text-fade-out');
                spellDescEl.classList.remove('text-fade-out');
            }, 200);
        });
    }

    // --- 8. Mobile Navigation Toggle ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            console.log('Mobile menu toggled:', isActive);
        });

        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
});
