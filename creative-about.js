// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initPreloader()
    initCustomCursor()
    initMobileMenu()
    initDarkMode()
    initScrollAnimations()
    initTeamFilter()
    initTestimonialSlider()
    initCounterAnimation()
    initBackToTop()
    initParallaxEffect()
  })
  
  // Preloader
  function initPreloader() {
    const preloader = document.querySelector(".preloader")
  
    if (!preloader) return
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.style.opacity = "0"
        setTimeout(() => {
          preloader.style.display = "none"
        }, 500)
      }, 1000)
    })
  }
  
  // Custom Cursor
  function initCustomCursor() {
    const cursor = document.querySelector(".cursor-dot")
    const cursorOutline = document.querySelector(".cursor-outline")
  
    if (!cursor || !cursorOutline) return
  
    // Show cursors after a delay to prevent initial jump
    setTimeout(() => {
      cursor.style.opacity = "1"
      cursorOutline.style.opacity = "1"
    }, 1000)
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
  
      // Slight delay for outline for smooth effect
      setTimeout(() => {
        cursorOutline.style.left = `${e.clientX}px`
        cursorOutline.style.top = `${e.clientY}px`
      }, 80)
    })
  
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .btn, input, select, .team-member, .filter-btn")
  
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)"
        cursorOutline.style.borderColor = "var(--primary)"
      })
  
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
        cursorOutline.style.borderColor = "var(--primary)"
      })
    })
  
    // Hide cursor when leaving window
    document.addEventListener("mouseout", (e) => {
      if (e.relatedTarget === null) {
        cursor.style.opacity = "0"
        cursorOutline.style.opacity = "0"
      }
    })
  
    document.addEventListener("mouseover", () => {
      cursor.style.opacity = "1"
      cursorOutline.style.opacity = "1"
    })
  }
  
  // Mobile Menu
  function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const closeMenu = document.querySelector(".close-menu")
  
    if (!menuToggle || !mobileMenu || !closeMenu) return
  
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll(".mobile-nav-list a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        document.body.style.overflow = ""
      })
    })
  }
  
  // Dark Mode Toggle
  function initDarkMode() {
    const themeToggle = document.querySelector(".theme-toggle")
  
    if (!themeToggle) return
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
  
    if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
      document.body.classList.add("dark-mode")
    }
  
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode")
  
      // Save preference
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark")
      } else {
        localStorage.setItem("theme", "light")
      }
    })
  }
  
  // Scroll Animations
  function initScrollAnimations() {
    // Animate header on scroll
    const header = document.querySelector(".header")
  
    if (header) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }
      })
    }
  
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll(
      ".story-content, .mission-card, .value-card, .timeline-item, .stat-card, .team-member, .testimonial-card, .partner",
    )
  
    if (animatedElements.length > 0) {
      // Create intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in")
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )
  
      // Observe elements
      animatedElements.forEach((element) => {
        element.style.opacity = "0"
        observer.observe(element)
      })
    }
  
    // Animate hero section elements
    const heroElements = document.querySelectorAll(".hero-badge, .hero-title, .hero-description, .hero-buttons")
  
    heroElements.forEach((el, index) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = `opacity 0.5s ease, transform 0.5s ease`
      el.style.transitionDelay = `${index * 0.2}s`
  
      setTimeout(() => {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, 100)
    })
  
    // Animate floating badges
    const floatingBadges = document.querySelectorAll(".floating-badge")
  
    floatingBadges.forEach((badge, index) => {
      badge.style.opacity = "0"
      badge.style.transform = "translateY(20px)"
      badge.style.transition = `opacity 0.5s ease, transform 0.5s ease`
      badge.style.transitionDelay = `${(index + heroElements.length) * 0.2}s`
  
      setTimeout(() => {
        badge.style.opacity = "1"
        badge.style.transform = "translateY(0)"
      }, 100)
    })
  
    // Animate section headers
    const sectionHeaders = document.querySelectorAll(".section-header")
  
    if (sectionHeaders.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const elements = entry.target.children
              Array.from(elements).forEach((el, index) => {
                el.style.opacity = "0"
                el.style.transform = "translateY(20px)"
                el.style.transition = `opacity 0.5s ease, transform 0.5s ease`
                el.style.transitionDelay = `${index * 0.2}s`
  
                setTimeout(() => {
                  el.style.opacity = "1"
                  el.style.transform = "translateY(0)"
                }, 100)
              })
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )
  
      sectionHeaders.forEach((header) => {
        observer.observe(header)
      })
    }
  }
  
  // Team Filter
  function initTeamFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn")
    const teamMembers = document.querySelectorAll(".team-member")
  
    if (filterBtns.length === 0 || teamMembers.length === 0) return
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"))
  
        // Add active class to clicked button
        btn.classList.add("active")
  
        const filter = btn.getAttribute("data-filter")
  
        // Filter team members
        teamMembers.forEach((member) => {
          if (filter === "all" || member.getAttribute("data-category") === filter) {
            member.style.display = ""
            setTimeout(() => {
              member.style.opacity = "1"
              member.style.transform = "translateY(0)"
            }, 100)
          } else {
            member.style.opacity = "0"
            member.style.transform = "translateY(20px)"
            setTimeout(() => {
              member.style.display = "none"
            }, 500)
          }
        })
      })
    })
  }
  
  // Testimonial Slider
  function initTestimonialSlider() {
    const slider = document.querySelector(".testimonials-slider")
    const track = document.querySelector(".testimonials-track")
    const prevBtn = document.querySelector(".testimonial-arrow.prev")
    const nextBtn = document.querySelector(".testimonial-arrow.next")
    const dotsContainer = document.querySelector(".testimonial-dots")
  
    if (!slider || !track || !prevBtn || !nextBtn || !dotsContainer) return
  
    const testimonials = document.querySelectorAll(".testimonial-card")
    let currentIndex = 0
    let slideWidth = 0
  
    // Create dots
    testimonials.forEach((_, index) => {
      const dot = document.createElement("div")
      dot.classList.add("testimonial-dot")
      if (index === 0) dot.classList.add("active")
      dot.addEventListener("click", () => goToSlide(index))
      dotsContainer.appendChild(dot)
    })
  
    const dots = document.querySelectorAll(".testimonial-dot")
  
    // Set up slider
    function setupSlider() {
      slideWidth = slider.offsetWidth
      track.style.width = `${slideWidth * testimonials.length}px`
  
      testimonials.forEach((testimonial) => {
        testimonial.style.width = `${slideWidth}px`
      })
  
      goToSlide(currentIndex)
    }
  
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = index
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`
  
      // Update dots
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
        }
      })
  
      // Disable/enable buttons
      if (currentIndex === 0) {
        prevBtn.classList.add("disabled")
      } else {
        prevBtn.classList.remove("disabled")
      }
  
      if (currentIndex === testimonials.length - 1) {
        nextBtn.classList.add("disabled")
      } else {
        nextBtn.classList.remove("disabled")
      }
    }
  
    // Previous slide
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1)
      }
    })
  
    // Next slide
    nextBtn.addEventListener("click", () => {
      if (currentIndex < testimonials.length - 1) {
        goToSlide(currentIndex + 1)
      }
    })
  
    // Initialize slider
    setupSlider()
  
    // Update on window resize
    window.addEventListener("resize", debounce(setupSlider, 200))
  
    // Auto-scroll testimonials
    let autoScrollInterval
  
    function startAutoScroll() {
      autoScrollInterval = setInterval(() => {
        if (currentIndex < testimonials.length - 1) {
          goToSlide(currentIndex + 1)
        } else {
          goToSlide(0)
        }
      }, 5000)
    }
  
    function stopAutoScroll() {
      clearInterval(autoScrollInterval)
    }
  
    // Start auto-scroll
    startAutoScroll()
  
    // Pause auto-scroll on hover
    slider.addEventListener("mouseenter", stopAutoScroll)
    slider.addEventListener("mouseleave", startAutoScroll)
  
    // Pause auto-scroll on touch
    slider.addEventListener("touchstart", stopAutoScroll)
    slider.addEventListener("touchend", startAutoScroll)
  }
  
  // Counter Animation
  function initCounterAnimation() {
    const statNumbers = document.querySelectorAll(".stat-number")
  
    if (statNumbers.length === 0) return
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            const countTo = Number.parseInt(target.getAttribute("data-count"))
            let count = 0
            const speed = 2000 / countTo
  
            const updateCount = () => {
              count++
              target.textContent = count
  
              if (count < countTo) {
                setTimeout(updateCount, speed)
              }
            }
  
            updateCount()
            observer.unobserve(target)
          }
        })
      },
      {
        threshold: 0.5,
      },
    )
  
    statNumbers.forEach((number) => {
      observer.observe(number)
    })
  }
  
  // Back to Top Button
  function initBackToTop() {
    const backToTopBtn = document.querySelector(".back-to-top")
  
    if (!backToTopBtn) return
  
    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("active")
      } else {
        backToTopBtn.classList.remove("active")
      }
    })
  
    // Scroll to top on click
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
  
  // Parallax Effect
  function initParallaxEffect() {
    // Parallax effect for hero shapes
    const heroShapes = document.querySelectorAll(".hero-shapes .shape")
  
    if (heroShapes.length > 0) {
      window.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight
  
        heroShapes.forEach((shape, index) => {
          const speed = (index + 1) * 20
          const xOffset = (x - 0.5) * speed
          const yOffset = (y - 0.5) * speed
  
          shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`
        })
      })
    }
  
    // Parallax effect for mission shapes
    const missionShapes = document.querySelectorAll(".mission-shapes .shape")
  
    if (missionShapes.length > 0) {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY
  
        missionShapes.forEach((shape, index) => {
          const speed = (index + 1) * 0.2
          const yOffset = scrollY * speed
  
          shape.style.transform = `translateY(${yOffset}px)`
        })
      })
    }
  
    // Parallax effect for stats shapes
    const statsShapes = document.querySelectorAll(".stats-shapes .shape")
  
    if (statsShapes.length > 0) {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY
  
        statsShapes.forEach((shape, index) => {
          const speed = (index + 1) * 0.15
          const yOffset = scrollY * speed
  
          shape.style.transform = `translateY(${yOffset}px)`
        })
      })
    }
  
    // Parallax effect for CTA shapes
    const ctaShapes = document.querySelectorAll(".cta-shapes .shape")
  
    if (ctaShapes.length > 0) {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY
  
        ctaShapes.forEach((shape, index) => {
          const speed = (index + 1) * 0.1
          const yOffset = scrollY * speed
  
          shape.style.transform = `translateY(${yOffset}px)`
        })
      })
    }
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
  
      if (targetId === "#") return
  
      const targetElement = document.querySelector(targetId)
  
      if (targetElement) {
        e.preventDefault()
  
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Timeline animation
  const timelineItems = document.querySelectorAll(".timeline-item")
  
  if (timelineItems.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )
  
    timelineItems.forEach((item, index) => {
      item.style.opacity = "0"
      item.style.transform = "translateY(20px)"
      item.style.transitionDelay = `${index * 0.2}s`
      observer.observe(item)
    })
  }
  
  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const emailInput = newsletterForm.querySelector('input[type="email"]')
      const submitBtn = newsletterForm.querySelector('button[type="submit"]')
  
      if (!emailInput || !submitBtn) return
  
      // Validate email
      const email = emailInput.value.trim()
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
      if (!emailRegex.test(email)) {
        // Show error
        emailInput.classList.add("error")
  
        // Create error message if it doesn't exist
        if (!newsletterForm.querySelector(".error-message")) {
          const errorMessage = document.createElement("div")
          errorMessage.className = "error-message"
          errorMessage.textContent = "Please enter a valid email address"
          errorMessage.style.color = "var(--error)"
          errorMessage.style.fontSize = "0.875rem"
          errorMessage.style.marginTop = "0.5rem"
  
          newsletterForm.appendChild(errorMessage)
        }
  
        return
      }
  
      // Remove error state
      emailInput.classList.remove("error")
      const errorMessage = newsletterForm.querySelector(".error-message")
      if (errorMessage) {
        newsletterForm.removeChild(errorMessage)
      }
  
      // Show loading state
      const originalBtnText = submitBtn.textContent
      submitBtn.textContent = "Subscribing..."
      submitBtn.disabled = true
  
      // Simulate API call
      setTimeout(() => {
        // Show success message
        emailInput.value = ""
        submitBtn.textContent = "Subscribed!"
  
        // Create success message
        const successMessage = document.createElement("div")
        successMessage.className = "success-message"
        successMessage.textContent = "Thank you for subscribing to our newsletter!"
        successMessage.style.color = "var(--success)"
        successMessage.style.fontSize = "0.875rem"
        successMessage.style.marginTop = "0.5rem"
  
        newsletterForm.appendChild(successMessage)
  
        // Reset button after a delay
        setTimeout(() => {
          submitBtn.textContent = originalBtnText
          submitBtn.disabled = false
  
          // Remove success message after a delay
          setTimeout(() => {
            const successMsg = newsletterForm.querySelector(".success-message")
            if (successMsg) {
              newsletterForm.removeChild(successMsg)
            }
          }, 3000)
        }, 2000)
      }, 1500)
    })
  }
  
  // Utility function: Debounce
  function debounce(func, delay) {
    let timeout
    return function () {
      
      const args = arguments
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), delay)
    }
  }
  
  
