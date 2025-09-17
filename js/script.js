window.scrollTo(0, 0)
document.addEventListener("DOMContentLoaded", function() {
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

    let supportSwiper = new Swiper(".support__slider", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        speed: 800,
        navigation: {
            nextEl: ".support__slider-next",
            prevEl: ".support__slider-prev",
        },
        pagination: {
            el: ".support__slider-pagination",
            clickable: true,
        },
    });
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
            selector: ".about__title",
            speed: 0.15
        },
        {
            selector: ".about__left .about__image:nth-of-type(1)",
            speed: 0.3
        },
        {
            selector: ".about__left .about__descr",
            speed: 0.2
        },
        {
            selector: ".about__left .about__image:nth-of-type(2)",
            speed: 0.35
        },
        {
            selector: ".about__who",
            speed: 0.3
        },
        {
            selector: ".about__icon",
            speed: 0.5
        },
        {
            selector: ".about__right h3",
            speed: 0.2
        },
        {
            selector: ".about__right .about__image",
            speed: 0.3
        },
        {
            selector: ".about__right .about__descr",
            speed: 0.18
        },
        {
            selector: ".about__right .about__name",
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

    const aboutName = document.querySelector(".about__name");
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

    gsap.registerPlugin(ScrollTrigger);

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

    gsap.fromTo(".trainer__title span:first-child", {
        x: "-100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".trainer__inner",
            start: "top 120%",
            end: "bottom-=100%",
            scrub: true,
            toggleActions: "play none none reverse",
        }
    });
    gsap.fromTo(".trainer__title span:last-child", {
        x: "100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        scrollTrigger: {
            trigger: ".trainer__inner",
            start: "top 120%",
            end: "bottom-=90%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

    gsap.from(".trainer__can", {
        scale: 2,
        opacity: 0,
        rotation: -15,
        duration: 0.4,
        ease: "back.out(3)",
        scrollTrigger: {
            trigger: ".trainer__can",
            start: "top 30%",
            toggleActions: "play none none reverse"
        }
    });


    gsap.from(".about__icon", {
        scale: 2,
        opacity: 0,
        rotation: 15,
        duration: 0.4,
        ease: "back.out(3)",
        scrollTrigger: {
            trigger: ".about__icon",
            start: "top 30%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".about__who", {
        scale: 0.4,
        opacity: 0,
        rotation: 15,
        duration: 0.4,
        ease: "back.out(3)",
        scrollTrigger: {
            trigger: ".about__who",
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.utils.toArray(".about__descr span").forEach((el) => {
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

    gsap.from(".about__united span", {
        x: -150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".about__united",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    gsap.timeline({
            scrollTrigger: {
                trigger: ".about__title",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })
        .from(".about__title", {
            x: -200,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".about__title span", {
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
    gsap.utils.toArray(".trainer__name, .trainer__descr").forEach((el, i) => {
        gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            delay: i * 0.2
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
            end: "bottom 100%",
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




gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const slider = document.querySelector(".brotherhood__slider-wrapper");
const slides = gsap.utils.toArray(".brotherhood__slide");
const totalSlides = slides.length;
const sliderTween = gsap.to(slider, {
    xPercent: -50 * (totalSlides - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".brotherhood__inner",
        pin: true,
        scrub: true,
        start: "top top",
        end: () => "+=" + window.innerWidth * (totalSlides - 1),
    }
});
const nextBtn = document.querySelector(".brotherhood__next");
const prevBtn = document.querySelector(".brotherhood__prev");
let currentSlide = 0;

function goToSlide(index) {
    currentSlide = Math.min(Math.max(index, 0), totalSlides - 1);
    const scrollAmount = window.innerWidth * currentSlide + sliderTween.scrollTrigger.start;
    window.scrollTo(0, scrollAmount);
}
nextBtn.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
});
prevBtn.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
});
slides.forEach(slide => {
    const logo = slide.querySelector(".brotherhood__logo");
    const title = slide.querySelector(".brotherhood__title");
    const btn = slide.querySelector(".brotherhood__btn");
    const images = slide.querySelectorAll(".brotherhood__image");

    if (logo) {
        gsap.to(logo, {
            x: -800,
            ease: "none",
            scrollTrigger: {
                trigger: ".brotherhood",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    if (title) {
        gsap.to(title, {
            x: -1000,
            ease: "none",
            scrollTrigger: {
                trigger: ".brotherhood",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    if (btn) {
        gsap.to(btn, {
            x: -1200,
            ease: "none",
            scrollTrigger: {
                trigger: ".brotherhood",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    images.forEach((img, idx) => {
        gsap.to(img, {
            x: idx % 2 === 0 ? 1000 : -1000,
            ease: "none",
            scrollTrigger: {
                trigger: ".brotherhood",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
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
