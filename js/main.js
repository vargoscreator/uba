window.scrollTo(0, 0)
document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector(".hero")) {
        const heroSection = document.querySelector(".hero");

        setTimeout(() => {
            heroSection.classList.add("animated");
        }, 100);
        setTimeout(() => {
            heroSection.classList.add("animated-second");
        }, 500);


        let swiper = new Swiper(".hero__slider", {
            loop: false,
            spaceBetween: 10,
            slidesPerView: 1,
            speed: 800,
            allowTouchMove: false,
            navigation: {
                nextEl: ".hero__slider-next",
                prevEl: ".hero__slider-prev",
            },
            pagination: {
                el: ".hero__slider-pagination",
                clickable: true,
            },
            on: {
                slideChange: function() {
                    if (this.activeIndex === 0) {
                        setTimeout(() => {
                            heroSection.classList.add("animated");
                        }, 800);
                        setTimeout(() => {
                            heroSection.classList.add("animated-second");
                        }, 1000);
                        heroSection.classList.remove("second-slide");
                    } else if (this.activeIndex === 1) {
                        heroSection.classList.add("second-slide");
                        setTimeout(() => {
                            heroSection.classList.remove("animated");
                        }, 100);
                        setTimeout(() => {
                            heroSection.classList.remove("animated-second");
                        }, 100);
                    } else {
                        heroSection.classList.remove("animated", "second-slide");
                    }
                },
            },
        });
    }

    if(document.querySelector('.support__slider')){
        const currentSlideEl = document.querySelector('.support__slides-num .current-slide');
        const totalSlidesEl = document.querySelector('.support__slides-num .total-slides');
        let supportSwiper = new Swiper(".support__slider", {
            loop: false,
            spaceBetween: 10,
            slidesPerView: 1,
            speed: 800,
            navigation: {
                nextEl: ".support__slides-next",
                prevEl: ".support__slides-prev",
            },
        });
        function updateSliderCounter(swiperInstance) {
            if (currentSlideEl) {
                currentSlideEl.textContent = swiperInstance.activeIndex + 1;
            }
        }
        if (totalSlidesEl) {
            totalSlidesEl.textContent = supportSwiper.slides.length;
        }
        supportSwiper.on('slideChange', function () {
            updateSliderCounter(this);
        });
        updateSliderCounter(supportSwiper);
    }


    let reviewsSwiper = new Swiper(".reviews__slider", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        speed: 800,
        navigation: {
            nextEl: ".reviews__slider-next",
            prevEl: ".reviews__slider-prev",
        },
        on: {
            init: function() {
                let total = this.slides.length;
                document.querySelector(".reviews__slider-number").innerHTML =
                    `<span>01</span> ${String(total).padStart(2, "0")}`;
            },
            slideChangeTransitionStart: function() {
                let currentSlide = this.slides[this.activeIndex];
                let prevSlide = this.slides[this.previousIndex];
                let current = this.realIndex + 1;
                document.querySelector(".reviews__slider-number span").textContent =
                    String(current).padStart(2, "0");
                if (prevSlide) {
                    gsap.to(prevSlide.querySelector(".reviews__slide-content"), {
                        x: 200,
                        opacity: 0,
                        filter: "blur(8px)",
                        duration: 0.8,
                        ease: "power3.in",
                    });
                    gsap.to(prevSlide.querySelector(".reviews__slide-image img"), {
                        x: -100,
                        opacity: 0,
                        filter: "blur(6px)",
                        duration: 0.8,
                        ease: "power3.in",
                    });
                }

                if (currentSlide) {
                    gsap.fromTo(
                        currentSlide.querySelector(".reviews__slide-content"), {
                            x: -200,
                            opacity: 0,
                            filter: "blur(8px)"
                        }, {
                            x: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 1,
                            ease: "power3.out",
                            delay: 0.1,
                        }
                    );
                    gsap.fromTo(
                        currentSlide.querySelector(".reviews__slide-image img"), {
                            x: 100,
                            opacity: 0,
                            filter: "blur(6px)"
                        }, {
                            x: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 1,
                            ease: "power3.out",
                            delay: 0.2,
                        }
                    );
                }
            },
        },
    });

    let yougetSlider = new Swiper(".youget__slider", {
        loop: false,
        spaceBetween: 150,
        slidesPerView: 'auto',
        speed: 800,
        navigation: {
            nextEl: ".youget__next",
            prevEl: ".youget__prev",
        },
        pagination: {
            el: '.youget__count',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                let totalSlides = (total < 10) ? `0${total}` : total; 
                return `${current} <span>/${totalSlides}</span>`;
            }
        },
    });

    let trenersSlider = new Swiper(".treners__slider", {
        loop: false,
        spaceBetween: 127,
        slidesPerView: 'auto',
        speed: 800,
        navigation: {
            nextEl: ".treners__next",
            prevEl: ".treners__prev",
        },
        pagination: {
            el: '.treners__count',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                let totalSlides = (total < 10) ? `0${total}` : total; 
                return `${current} <span>/${totalSlides}</span>`;
            }
        },
    });



    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".training__item:nth-child(1)", {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".training__item:nth-child(1)",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    gsap.from(".training__item:nth-child(2)", {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".training__item:nth-child(2)",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    gsap.from(".training__item:nth-child(3)", {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".training__item:nth-child(3)",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });


    const parallaxItems = [{
            selector: ".aboutserv__title",
            speed: 0.15
        },
        {
            selector: ".aboutserv__name",
            speed: 0.15
        },
        {
            selector: ".aboutserv__left .aboutserv__image:nth-of-type(1)",
            speed: 0.3
        },
        {
            selector: ".aboutserv__left .aboutserv__descr",
            speed: 0.2
        },
        {
            selector: ".aboutserv__left .aboutserv__image:nth-of-type(2)",
            speed: 0.35
        },
        {
            selector: ".aboutserv__who",
            speed: 0.3
        },
        {
            selector: ".aboutserv__left .aboutserv__image",
            speed: 0.3
        },
        {
            selector: ".aboutserv__left .aboutserv__descr",
            speed: 0.18
        },
        {
            selector: ".aboutserv__center .aboutserv__descr",
            speed: 0.3
        },
        {
            selector: ".aboutserv__icon",
            speed: 0.25
        },
        {
            selector: ".aboutserv__center .aboutserv__logo",
            speed: 0.2
        },
        {
            selector: ".aboutserv__center .aboutserv__info",
            speed: 0.15
        },
        {
            selector: ".aboutserv__right .aboutserv__image",
            speed: 0.22
        },
    ];
    parallaxItems.forEach(item => {
        gsap.to(item.selector, {
            y: () => -(window.innerHeight * item.speed),
            ease: "none",
            scrollTrigger: {
                trigger: item.selector,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });

    document.querySelectorAll(".aboutserv__name").forEach((aboutName) => {
        const aboutNameText = aboutName.textContent;
        aboutName.textContent = "";

        gsap.to(aboutName, {
            text: aboutNameText,
            duration: 2,
            ease: "none",
            scrollTrigger: {
                trigger: aboutName,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });


        document.querySelectorAll(".btn").forEach(btn => {
            ScrollTrigger.create({
                trigger: btn,
                start: "bottom bottom-=100",
                onEnter: () => btn.classList.add("animated"),
                onLeaveBack: () => btn.classList.remove("animated")
            });
        });

    document.querySelectorAll(".btn-2").forEach(btn => {
        ScrollTrigger.create({
            trigger: btn,
            start: "bottom bottom-=100",
            onEnter: () => btn.classList.add("animated"),
            onLeaveBack: () => btn.classList.remove("animated")
        });
    });


    gsap.fromTo(".management__title span:first-child", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".management__inner",
            start: "top 120%",
            end: "bottom-=100%",
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
    gsap.fromTo(".management__title span:last-child", {
        x: "100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".management__inner",
            start: "top 120%",
            end: "bottom-=90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });
    gsap.utils.toArray(".management__item").forEach((item, i) => {
        gsap.from(item, {
            x: i % 2 === 0 ? -100 : 100,
            y: i % 2 === 0 ? 100 : -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".schedule__content",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    tl.from(".schedule__title", {
            x: -200,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(".schedule__descr", {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.5")

    gsap.from(".schedule__time", {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".schedule__inner",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    let tlInfo = gsap.timeline({
        scrollTrigger: {
            trigger: ".scheduleinfo__inner",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
        });
        tlInfo.from(".scheduleinfo__paper", {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
        })

        .from(".scheduleinfo__title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
        }, "-=0.5")

        .from(".scheduleinfo__icon", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
        }, "-=0.5")

        .from(".scheduleinfo__when", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
        }, "-=0.5");

        gsap.from(".scheduleinfo__about p, .scheduleinfo__about span", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".scheduleinfo__about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
        });

        gsap.from(".scheduleinfo__buttons", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".scheduleinfo__buttons",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
        });


    gsap.fromTo(".trainer__title", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".trainer__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

    gsap.fromTo(".trainer__title span", {
        x: "200%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".trainer__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });


    gsap.from(".aboutserv__icon", {
        scale: 2,
        opacity: 0,
        rotation: 15,
        duration: 0.4,
        ease: "back.out(3)",
        scrollTrigger: {
            trigger: ".aboutserv__icon",
            start: "top 30%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".aboutserv__who", {
        scale: 0.4,
        opacity: 0,
        rotation: 15,
        duration: 0.4,
        ease: "back.out(3)",
        scrollTrigger: {
            trigger: ".aboutserv__who",
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.utils.toArray(".aboutserv__descr span").forEach((el) => {
        gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    gsap.from(".aboutserv__united span", {
        x: -150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".aboutserv__united",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutserv__title",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })
        .from(".aboutserv__title", {
            x: -200,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".aboutserv__title span", {
            x: -200,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4");


    gsap.from(".support__title", {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".support__title",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.utils.toArray(".support__icon").forEach((el, i) => {
        gsap.from(el, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            delay: i * 0.2
        });
    });

    document.querySelectorAll(".support__can").forEach(el => {
        const text = el.textContent;
        el.textContent = "";
        text.split("").forEach(char => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.display = "inline-block";
            el.appendChild(span);
        });

        gsap.fromTo(el.querySelectorAll("span"), {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.05,
            ease: "power1.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    document.querySelectorAll(".treners__our span").forEach(el => {
        const text = el.textContent;
        el.textContent = "";
        text.split("").forEach(char => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.display = "inline-block";
            el.appendChild(span);
        });

        gsap.fromTo(el.querySelectorAll("span"), {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.05,
            ease: "power1.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: el,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });
    });

    document.querySelectorAll(".trainer__can span").forEach(el => {
        const text = el.textContent;
        el.textContent = "";
        text.split("").forEach(char => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.display = "inline-block";
            el.appendChild(span);
        });

        gsap.fromTo(el.querySelectorAll("span"), {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.05,
            ease: "power1.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    gsap.utils.toArray(".trainer__item").forEach(item => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
        tl.from(item.querySelector(".trainer__item-image"), {
            y: 100,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        });
        tl.from(item.querySelector(".trainer__item-num"), {
            x: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out"
        }, "-=0.3");
        tl.from(item.querySelector(".trainer__item-title"), {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.2");
        tl.from(item.querySelector(".trainer__item-descr"), {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4");
        tl.from(item.querySelector(".trainer__item-link"), {
            x: 100,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4");

    });

    gsap.fromTo(".howit__title", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".howit__top",
            start: "top 120%",
            end: "bottom-=100%",
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
    gsap.fromTo(".howit__uba", {
        x: "100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".howit__top",
            start: "top 120%",
            end: "bottom-=90%",
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });

    gsap.utils.toArray(".howit__item").forEach(item => {
        gsap.from(item, {
            x: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
    });

    gsap.fromTo(".howit__images", {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".howit__images",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }

    );

    gsap.fromTo(".feedback__title", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".feedback__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

    gsap.fromTo(".feedback__title span", {
        x: "200%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".feedback__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });
    gsap.from(".feedback__descr", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".feedback__descr",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });
    gsap.utils.toArray(".feedback__form input").forEach((el, i) => {
        gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 95%",
                toggleActions: "play none none reverse"
            },
            delay: i * 0.1
        });
    });


    gsap.fromTo(".reviews__title", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".reviews__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

    gsap.fromTo(".reviews__title span", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".reviews__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

    gsap.fromTo(".reviews__content", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".reviews__content",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }

    );


    gsap.fromTo(".faq__title", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".faq__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

    gsap.fromTo(".faq__title span", {
        x: "200%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".faq__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

    gsap.utils.toArray(".faq__item").forEach(item => {
        gsap.from(item, {
            x: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
    });


    gsap.fromTo(".contacts__mountain", {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contacts__mountain",
            start: "top 30%",
            end: "bottom 10%",
            scrub: true,
        }
    });


    gsap.from(".contacts__title", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contacts__title",
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });

    gsap.from(".contacts__adress", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contacts__adress",
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(".contacts__tel", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contacts__tel",
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });

    gsap.from(".contacts__mail", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contacts__mail",
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(".contacts__socials", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contacts__socials",
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(".contacts__join", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contacts__join",
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(".contacts__quote", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contacts__quote",
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(".trainer__name", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".trainer__name",
            start: "top 50%",
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(".trainer__descr", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".trainer__descr",
            start: "top 50%",
            toggleActions: "play none none reverse",
        }
    });
    



});

document.addEventListener("DOMContentLoaded", () => {
    const howitItems = document.querySelectorAll(".howit__item");
    const howitImages = document.querySelectorAll(".howit__image");
    let activeIndex = 0;
    howitItems.forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
            howitItems.forEach(i => i.classList.remove("active"));
            howitImages.forEach(img => img.classList.remove("active"));
            item.classList.add("active");
            howitImages[index].classList.add("active");
            activeIndex = index;
        });
    });
});

document.querySelectorAll(".faq__item-title").forEach(title => {
    title.addEventListener("click", () => {
        const item = title.parentElement;
        const isActive = item.classList.contains("active");
        if (isActive) {
            item.classList.remove("active");
        } else {
            document.querySelectorAll(".faq__item.active").forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        }
    });
});
const scrollUp = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollUp.classList.add("scrolled");
    } else {
        scrollUp.classList.remove("scrolled");
    }
});
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const headerMenuList = headerMenu.querySelector('ul');
headerBurger.addEventListener('click', (e) => {
    e.stopPropagation();
    headerMenu.classList.toggle('active');
});
document.addEventListener('click', (e) => {
    const isClickInsideMenu = headerMenuList.contains(e.target);
    const isClickOnBurger = headerBurger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
        headerMenu.classList.remove('active');
    }
});
headerMenuList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        headerMenu.classList.remove('active');
    });
});


gsap.fromTo(".timetable__title", {
    x: "-100%",
    opacity: 0
}, {
    x: "0%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".timetable__inner",
        start: "top 120%",
        end: "bottom-=100%",
        scrub: true,
        toggleActions: "play none none reverse"
    }
});



let supportSwiper = new Swiper(".recruitment__slider", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
        nextEl: ".recruitment__slider-next",
        prevEl: ".recruitment__slider-prev",
    },
    pagination: {
        el: ".recruitment__slider-pagination",
        clickable: true,
    },
});

document.querySelectorAll('.heroBanner__title > span').forEach(wrapper => {
    const text = wrapper.textContent;
    wrapper.textContent = '';
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        wrapper.appendChild(span);
    });
});
const tl = gsap.timeline();
tl.to('.heroBanner__title span span', {
    y: 0,
    opacity: 1,
    duration: 0.4,
    stagger: 0.03,
    ease: 'power4.out'
});
tl.fromTo('.heroBanner__name', {
    y: 30,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: 'power4.out'
});
tl.fromTo('.heroBanner__descr', {
    y: 30,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: 'power4.out'
});
gsap.from(".heroBanner__image", {
    x: 200,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".heroBanner__inner",
        start: "top 90%",
        toggleActions: "play none none reverse",
    }
});

gsap.from(".heroBanner__about-title", {
    x: 200,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".heroBanner__about",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});


gsap.from(".heroBanner__about-descr", {
    x: -50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".heroBanner__about",
        start: "top 40%",
        toggleActions: "play none none reverse"
    }
});



gsap.fromTo(".specialize__title", {
    x: "-100%",
    opacity: 0
}, {
    x: "0%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".specialize__inner",
        start: "top 100%",
        end: "bottom-=100%",
        scrub: true,
        toggleActions: "play none none reverse"
    }
});
gsap.fromTo(".specialize__descr", {
    x: "100%",
    opacity: 0
}, {
    x: "0%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".specialize__inner",
        start: "top 120%",
        end: "bottom-=100%",
        scrub: true,
        toggleActions: "play none none reverse"
    }
});

gsap.utils.toArray(".specialize__item").forEach((item) => {
    gsap.fromTo(item, {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 40%",
            scrub: true
        }
    });
});



gsap.from(".recruitment__blockSlider", {
    y: 200,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".recruitment__blockSlider",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

gsap.from(".recruitment__title", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".recruitment__inner",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});
gsap.from(".recruitment__descr", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".recruitment__inner",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});
gsap.from(".recruitment__block", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".recruitment__inner",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});
gsap.from(".recruitment__name", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".recruitment__inner",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});


gsap.utils.toArray('.prices__title').forEach(title => {
    const firstSpan = title.querySelector('span:first-child');
    const lastSpan = title.querySelector('span:last-child');

    if (firstSpan && lastSpan) {
        gsap.fromTo(firstSpan, {
            x: "-100%",
            opacity: 0
        }, {
            x: "0%",
            opacity: 1,
            scrollTrigger: {
                trigger: title,
                start: "top 120%",
                end: "bottom-=100%",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(lastSpan, {
            x: "100%",
            opacity: 0
        }, {
            x: "0%",
            opacity: 1,
            scrollTrigger: {
                trigger: title,
                start: "top 120%",
                end: "bottom-=90%",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    }
});


gsap.utils.toArray('.prices__result').forEach(result => {
    const image = result.querySelector('.prices__image');
    if (image) {
        gsap.fromTo(image, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: result,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    }

    const infos = result.querySelectorAll('.prices__table-info');
    gsap.fromTo(infos, {
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: result,
            start: "top 20%",
            toggleActions: "play none none reverse"
        }
    });

    const items = result.querySelectorAll('.prices__table-item');
    gsap.fromTo(items, {
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: result,
            start: "top 20%",
            toggleActions: "play none none reverse"
        }
    });
});

document.querySelectorAll('.heroBanner__price-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-price-btn');
        const targetBlock = document.querySelector(`.prices__result[data-price-result="${targetId}"]`);
        
        if (targetBlock) {
            const topOffset = 100;
            const elementPosition = targetBlock.getBoundingClientRect().top;
            const offsetPosition = window.scrollY + elementPosition - topOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.recruitment__select-btn');
  const results = document.querySelectorAll('.prices__result');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const price = button.getAttribute('data-recruitment-price-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      results.forEach(result => result.classList.remove('active'));
      button.classList.add('active');
      document.querySelector(`.prices__result[data-price-result="${price}"]`)?.classList.add('active');
    });
  });
});


gsap.fromTo(".youget__title span:first-child", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".youget__inner",
            start: "top 120%",
            end: "bottom-=100%",
            scrub: true,
            toggleActions: "play none none reverse",
        }
    });
    gsap.fromTo(".youget__title span:last-child", {
        x: "100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".youget__inner",
            start: "top 120%",
            end: "bottom-=90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

gsap.utils.toArray(".youget__name").forEach((elem, i) => {
    gsap.from(elem, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: i * 0.2,
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none reverse",
        }
    });
});

gsap.from(".youget__nav", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".youget__inner",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});


document.querySelectorAll(".youget__slide").forEach((item, index) => {
    gsap.from(item, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse", 
      }
    });
});

gsap.fromTo(".treners__title", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".treners__top",
            start: "top 120%",
            end: "bottom-=90%",
            scrub: true,
            toggleActions: "play none none reverse"
        }
});
gsap.from(".treners__descr", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".treners__top",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

gsap.from(".treners__nav", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".treners__bottom",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

document.querySelectorAll(".treners__slide").forEach((item, index) => {
    gsap.from(item, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse", 
      }
    });
});



const menuBtn = document.querySelectorAll('.header__menu-btn');
menuBtn.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('show-menu');
    });
});

