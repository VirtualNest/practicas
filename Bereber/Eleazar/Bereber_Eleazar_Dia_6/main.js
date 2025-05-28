// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

// Función para crear el observer
function createObserver(className, callback) {
    const elements = document.querySelectorAll(className)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback(entry.target)
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    elements.forEach((element) => {
        observer.observe(element)
    })
}

// Animaciones cuando los elementos entran en viewport
document.addEventListener("DOMContentLoaded", () => {
    // Secciones principales
    createObserver(".section-animated", (element) => {
        element.classList.add("visible")
    })

    // Elementos del formulario
    createObserver(".form-animated", (element) => {
        element.classList.add("visible")
    })

    // Footer
    createObserver(".footer-animated", (element) => {
        element.classList.add("visible")

        // Animar secciones del footer con delay
        const footerSections = element.querySelectorAll(".footer-section")
        footerSections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add("visible")
            }, index * 200)
        })
    })

    // Pasos del juego
    createObserver(".step-item", (element) => {
        element.classList.add("visible")
    })

    // Contenido deslizante
    createObserver(".content-slide-left", (element) => {
        element.classList.add("visible")

        // Animar elementos de lista con delay
        const listItems = element.querySelectorAll(".list-item-animated")
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("visible")
            }, index * 200)
        })
    })

    createObserver(".content-slide-right", (element) => {
        element.classList.add("visible")
    })

    // Efecto de escritura para el título principal
    const heroTitle = document.querySelector(".hero-title")
    if (heroTitle) {
        const text = heroTitle.textContent
        heroTitle.textContent = ""
        heroTitle.style.borderRight = "2px solid #28a745"

        let i = 0
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i)
                i++
                setTimeout(typeWriter, 100)
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = "none"
                }, 1000)
            }
        }

        setTimeout(typeWriter, 1000)
    }

    // Animación de partículas en el hero
    createParticles()

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })

    // Efecto parallax sutil en el hero
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const heroSection = document.querySelector(".hero-section")
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`
        }
    })

    // Animación del navbar al hacer scroll
    let lastScrollTop = 0
    const navbar = document.querySelector(".navbar")

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = "translateY(-100%)"
        } else {
            // Scrolling up
            navbar.style.transform = "translateY(0)"
        }

        // Cambiar opacidad del navbar
        if (scrollTop > 50) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)"
            navbar.style.backdropFilter = "blur(10px)"
        } else {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 1)"
            navbar.style.backdropFilter = "none"
        }

        lastScrollTop = scrollTop
    })

    // Animación de hover para las cards de educación
    const educationCards = document.querySelectorAll(".card-3d")
    educationCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "rotateY(5deg) rotateX(5deg) scale(1.05)"
        })

        card.addEventListener("mouseleave", function () {
            this.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)"
        })

        // Efecto de seguimiento del mouse
        card.addEventListener("mousemove", function (e) {
            const rect = this.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = (y - centerY) / 10
            const rotateY = (centerX - x) / 10

            this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
        })
    })

    // Contador animado (si hay números en la página)
    function animateCounter(element, target) {
        let current = 0
        const increment = target / 100
        const timer = setInterval(() => {
            current += increment
            element.textContent = Math.floor(current)
            if (current >= target) {
                element.textContent = target
                clearInterval(timer)
            }
        }, 20)
    }

    // Efecto de ondas en los botones
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", function (e) {
            const ripple = document.createElement("span")
            const rect = this.getBoundingClientRect()
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2

            ripple.style.width = ripple.style.height = size + "px"
            ripple.style.left = x + "px"
            ripple.style.top = y + "px"
            ripple.classList.add("ripple")

            this.appendChild(ripple)

            setTimeout(() => {
                ripple.remove()
            }, 600)
        })
    })

    // Loading animation
    const loadingAnimation = document.createElement("div")
    loadingAnimation.className = "loading-animation"
    loadingAnimation.innerHTML = '<div class="spinner"></div>'
    document.body.appendChild(loadingAnimation)

    window.addEventListener("load", () => {
        setTimeout(() => {
            loadingAnimation.classList.add("hidden")
            setTimeout(() => {
                loadingAnimation.remove()
            }, 500)
        }, 1000)
    })
})

// Función para crear partículas en el hero
function createParticles() {
    const heroSection = document.querySelector(".hero-section")
    if (!heroSection) return

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.style.position = "absolute"
        particle.style.width = "2px"
        particle.style.height = "2px"
        particle.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        particle.style.borderRadius = "50%"
        particle.style.left = Math.random() * 100 + "%"
        particle.style.top = Math.random() * 100 + "%"
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`
        particle.style.animationDelay = Math.random() * 2 + "s"

        heroSection.appendChild(particle)
    }
}

// Agregar estilos CSS para el efecto ripple
const rippleStyle = document.createElement("style")
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(rippleStyle)

// Efecto de cursor personalizado
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor")
    if (!cursor) {
        const newCursor = document.createElement("div")
        newCursor.className = "custom-cursor"
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(40, 167, 69, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `
        document.body.appendChild(newCursor)
    }

    const cursorElement = document.querySelector(".custom-cursor")
    cursorElement.style.left = e.clientX - 10 + "px"
    cursorElement.style.top = e.clientY - 10 + "px"
})

// Animación de entrada escalonada para elementos
function staggerAnimation(selector, delay = 100) {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * delay}ms`
    })
}

// Aplicar animaciones escalonadas
staggerAnimation(".nav-item-animated", 100)
staggerAnimation(".step-item", 200)
staggerAnimation(".card-hover", 150)