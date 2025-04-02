/**
 * Modern Script for EduLearn Website
 * Creative and interactive functionality for the modern educational website
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initPreloader()
    initCustomCursor()
    initParticles()
    initModernHeader()
    initGlitchEffect()
    initCategorySlider()
    initCoursesGrid()
    initLearningPaths()
    initTestimonialCarousel()
    initCounters()
    initTeamFilter()
    initFaqAccordion()
    initBackToTop()
    initDarkMode()
    initVideoModal()
    initMissionVisionTabs()
    initTimelineAnimation()
  })
  
  // Preloader
  function initPreloader() {
    const preloader = document.getElementById("preloader")
    if (!preloader) return
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.style.opacity = "0"
        setTimeout(() => {
          preloader.style.display = "none"
          // Trigger entrance animations after preloader
          document.querySelectorAll(".animate-on-load").forEach((el) => {
            el.classList.add("animate")
          })
        }, 500)
      }, 1000)
    })
  }
  
  // Custom Cursor
  function initCustomCursor() {
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")
  
    if (!cursor || !cursorFollower) return
  
    // Show cursors after a delay to prevent initial jump
    setTimeout(() => {
      cursor.style.opacity = "1"
      cursorFollower.style.opacity = "0.5"
    }, 1000)
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
  
      // Follower with slight delay for smooth effect
      setTimeout(() => {
        cursorFollower.style.left = `${e.clientX}px`
        cursorFollower.style.top = `${e.clientY}px`
      }, 100)
    })
  
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .btn, input, .card, .tab-btn, .filter-btn, .path-option",
    )
  
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursorFollower.style.width = "40px"
        cursorFollower.style.height = "40px"
      })
  
      el.addEventListener("mouseleave", () => {
        cursor.style.width = "10px"
        cursor.style.height = "10px"
        cursorFollower.style.width = "30px"
        cursorFollower.style.height = "30px"
      })
    })
  }
  
  // Particles Background
  function initParticles() {
    const particlesContainer = document.getElementById("particles-js")
    if (!particlesContainer) return
  
    // Check if particlesJS is already defined
    if (typeof particlesJS === "undefined") {
      console.error("particlesJS is not defined. Make sure the particles.js library is included.")
      return
    }
  
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#4361ee",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4361ee",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  }
  
  // Modern Header
  function initModernHeader() {
    const header = document.querySelector(".modern-header")
    const menuToggle = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".nav-menu")
  
    if (!header) return
  
    // Sticky header on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navMenu.classList.toggle("active")
      })
  
      // Close menu when clicking on a link
      const navLinks = navMenu.querySelectorAll("a")
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          menuToggle.classList.remove("active")
          navMenu.classList.remove("active")
        })
      })
    }
  }
  
  // Glitch Text Effect
  function initGlitchEffect() {
    const glitchTexts = document.querySelectorAll(".glitch-text")
  
    if (glitchTexts.length === 0) return
  
    glitchTexts.forEach((text) => {
      // Make sure the data-text attribute is set
      if (!text.getAttribute("data-text")) {
        text.setAttribute("data-text", text.textContent)
      }
    })
  }
  
  // Category Slider
  function initCategorySlider() {
    const slider = document.querySelector(".categories-slider")
    const prevBtn = document.querySelector(".prev-arrow")
    const nextBtn = document.querySelector(".next-arrow")
    const dotsContainer = document.querySelector(".slider-dots")
  
    if (!slider || !prevBtn || !nextBtn || !dotsContainer) return
  
    const cards = slider.querySelectorAll(".category-card")
    const cardWidth = cards[0].offsetWidth + 24 // card width + gap
    let currentIndex = 0
    const visibleCards = Math.floor(slider.offsetWidth / cardWidth)
    const maxIndex = cards.length - visibleCards
  
    // Create dots
    cards.forEach((_, index) => {
      if (index <= maxIndex) {
        const dot = document.createElement("div")
        dot.classList.add("slider-dot")
        if (index === 0) dot.classList.add("active")
        dot.addEventListener("click", () => {
          goToSlide(index)
        })
        dotsContainer.appendChild(dot)
      }
    })
  
    const dots = dotsContainer.querySelectorAll(".slider-dot")
  
    // Update active dot
    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
        }
      })
    }
  
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, maxIndex))
      slider.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      })
      updateDots()
    }
  
    // Next button click
    nextBtn.addEventListener("click", () => {
      goToSlide(currentIndex + 1)
    })
  
    // Previous button click
    prevBtn.addEventListener("click", () => {
      goToSlide(currentIndex - 1)
    })
  
    // Handle scroll events to update dots
    slider.addEventListener("scroll", () => {
      const scrollPosition = slider.scrollLeft
      currentIndex = Math.round(scrollPosition / cardWidth)
      updateDots()
    })
  
    // Make cards flip on hover for touch devices
    cards.forEach((card) => {
      card.addEventListener("touchstart", function () {
        this.classList.toggle("hover")
      })
    })
  }
  
  // Courses Grid
  function initCoursesGrid() {
    const coursesGrid = document.getElementById("courses-grid")
    const filterBtns = document.querySelectorAll(".filter-btn")
    const loadMoreBtn = document.querySelector(".load-more-btn")
  
    if (!coursesGrid) return
  
    // Course data
    const courses = [
      {
        id: 1,
        title: "Complete Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer",
        image: "images/course-web.jpg",
        category: "development",
        instructor: {
          name: "David Wilson",
          image: "images/instructor-1.jpg",
        },
        rating: 4.8,
        ratingCount: 2450,
        price: "$89.99",
      },
      {
        id: 2,
        title: "UI/UX Design Masterclass",
        description: "Master the principles of UI/UX design and create stunning user interfaces",
        image: "images/course-design.jpg",
        category: "design",
        instructor: {
          name: "Jessica Lee",
          image: "images/instructor-2.jpg",
        },
        rating: 4.7,
        ratingCount: 1830,
        price: "$79.99",
      },
      {
        id: 3,
        title: "Digital Marketing Strategy",
        description: "Learn how to create and implement effective digital marketing strategies",
        image: "images/course-marketing.jpg",
        category: "business",
        instructor: {
          name: "Michael Chen",
          image: "images/instructor-3.jpg",
        },
        rating: 4.6,
        ratingCount: 1240,
        price: "$69.99",
      },
      {
        id: 4,
        title: "Data Science & Machine Learning",
        description: "Master data analysis, visualization, and machine learning algorithms",
        image: "images/course-data.jpg",
        category: "data-science",
        instructor: {
          name: "Emily Rodriguez",
          image: "images/instructor-4.jpg",
        },
        rating: 4.9,
        ratingCount: 2120,
        price: "$99.99",
      },
      {
        id: 5,
        title: "Business Analytics & Intelligence",
        description: "Learn data analysis techniques to make better business decisions",
        image: "images/course-business.jpg",
        category: "business",
        instructor: {
          name: "Alex Johnson",
          image: "images/instructor-5.jpg",
        },
        rating: 4.7,
        ratingCount: 1560,
        price: "$84.99",
      },
      {
        id: 6,
        title: "Mobile App Development with Flutter",
        description: "Build cross-platform mobile apps with Flutter and Dart",
        image: "images/course-mobile.jpg",
        category: "development",
        instructor: {
          name: "Sarah Williams",
          image: "images/instructor-6.jpg",
        },
        rating: 4.8,
        ratingCount: 1890,
        price: "$94.99",
      },
    ]
  
    // Initial display - show first 6 courses
    let currentFilter = "all"
    let visibleCourses = 6
  
    // Display courses based on filter
    function displayCourses() {
      coursesGrid.innerHTML = ""
  
      const filteredCourses =
        currentFilter === "all" ? courses : courses.filter((course) => course.category === currentFilter)
  
      const coursesToShow = filteredCourses.slice(0, visibleCourses)
  
      coursesToShow.forEach((course) => {
        // Create placeholder image URL if image doesn't exist
        const imageUrl = course.image || `/placeholder.svg?height=200&width=300`
        const instructorImageUrl = course.instructor.image || `/placeholder.svg?height=40&width=40`
  
        // Generate rating stars
        let ratingStars = ""
        for (let i = 1; i <= 5; i++) {
          if (i <= Math.floor(course.rating)) {
            ratingStars += '<i class="fas fa-star"></i>'
          } else if (i - course.rating < 1 && i - course.rating > 0) {
            ratingStars += '<i class="fas fa-star-half-alt"></i>'
          } else {
            ratingStars += '<i class="far fa-star"></i>'
          }
        }
  
        const courseCard = document.createElement("div")
        courseCard.className = "course-card-modern"
        courseCard.setAttribute("data-category", course.category)
  
        courseCard.innerHTML = `
          <div class="course-image">
            <img src="${imageUrl}" alt="${course.title}">
            <div class="course-tag tag-${course.category}">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</div>
          </div>
          <div class="course-content">
            <div class="course-instructor">
              <div class="instructor-image">
                <img src="${instructorImageUrl}" alt="${course.instructor.name}">
              </div>
              <div class="instructor-name">${course.instructor.name}</div>
            </div>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-stats">
              <div class="course-rating">
                ${ratingStars}
                <span class="rating-count">(${course.ratingCount.toLocaleString()})</span>
              </div>
              <div class="course-price">${course.price}</div>
            </div>
          </div>
        `
  
        coursesGrid.appendChild(courseCard)
  
        // Add entrance animation
        setTimeout(() => {
          courseCard.classList.add("animate")
        }, 100 * coursesGrid.children.length)
      })
  
      // Show/hide load more button
      if (coursesToShow.length < filteredCourses.length) {
        loadMoreBtn.style.display = "inline-block"
      } else {
        loadMoreBtn.style.display = "none"
      }
    }
  
    // Filter buttons click event
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"))
  
        // Add active class to clicked button
        btn.classList.add("active")
  
        // Update filter and reset visible courses
        currentFilter = btn.getAttribute("data-filter")
        visibleCourses = 6
  
        // Display courses with the new filter
        displayCourses()
      })
    })
  
    // Load more button click event
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        visibleCourses += 3
        displayCourses()
      })
    }
  
    // Initial display
    displayCourses()
  }
  
  // Learning Paths
  function initLearningPaths() {
    const pathOptions = document.querySelectorAll(".path-option")
    const pathDetails = document.querySelectorAll(".path-details")
  
    if (pathOptions.length === 0 || pathDetails.length === 0) return
  
    pathOptions.forEach((option) => {
      option.addEventListener("click", () => {
        // Remove active class from all options
        pathOptions.forEach((opt) => opt.classList.remove("active"))
  
        // Add active class to clicked option
        option.classList.add("active")
  
        // Hide all path details
        pathDetails.forEach((detail) => detail.classList.remove("active"))
  
        // Show corresponding path detail
        const pathId = option.getAttribute("data-path")
        document.getElementById(pathId).classList.add("active")
      })
    })
  }
  
  // Testimonial Carousel
  function initTestimonialCarousel() {
    const track = document.querySelector(".testimonial-track")
    const prevBtn = document.querySelector(".carousel-btn.prev-btn")
    const nextBtn = document.querySelector(".carousel-btn.next-btn")
    const dotsContainer = document.querySelector(".carousel-dots")
  
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return
  
    const cards = track.querySelectorAll(".testimonial-card")
    const cardWidth = cards[0].offsetWidth + 30 // card width + gap
    let currentIndex = 0
  
    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement("div")
      dot.classList.add("carousel-dot")
      if (index === 0) dot.classList.add("active")
      dot.addEventListener("click", () => {
        goToSlide(index)
      })
      dotsContainer.appendChild(dot)
    })
  
    const dots = dotsContainer.querySelectorAll(".carousel-dot")
  
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = index
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`
  
      // Update dots
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
        }
      })
    }
  
    // Next button click
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length
      goToSlide(currentIndex)
    })
  
    // Previous button click
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length
      goToSlide(currentIndex)
    })
  
    // Auto slide
    let autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length
      goToSlide(currentIndex)
    }, 5000)
  
    // Pause auto slide on hover
    track.addEventListener("mouseenter", () => {
      clearInterval(autoSlide)
    })
  
    track.addEventListener("mouseleave", () => {
      autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length
        goToSlide(currentIndex)
      }, 5000)
    })
  }
  
  // Animated Counters
  function initCounters() {
    const counters = document.querySelectorAll(".stat-number")
  
    if (counters.length === 0) return
  
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const target = Number.parseInt(counter.getAttribute("data-count"))
            const duration = 2000 // 2 seconds
            const step = target / (duration / 30) // Update every 30ms
  
            let current = 0
            const timer = setInterval(() => {
              current += step
              counter.textContent = Math.floor(current)
  
              if (current >= target) {
                counter.textContent = target.toLocaleString()
                clearInterval(timer)
              }
            }, 30)
  
            observer.unobserve(counter)
          }
        })
      },
      { threshold: 0.5 },
    )
  
    counters.forEach((counter) => {
      counterObserver.observe(counter)
    })
  }
  
  // Team Filter
  function initTeamFilter() {
    const filterBtns = document.querySelectorAll(".team-filter-btn")
    const teamMembers = document.querySelectorAll(".team-member")
  
    if (filterBtns.length === 0 || teamMembers.length === 0) return
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"))
  
        // Add active class to clicked button
        btn.classList.add("active")
  
        const filter = btn.getAttribute("data-filter")
  
        // Show/hide team members based on filter
        teamMembers.forEach((member) => {
          if (filter === "all" || member.getAttribute("data-category") === filter) {
            member.style.display = "block"
            setTimeout(() => {
              member.style.opacity = "1"
              member.style.transform = "translateY(0)"
            }, 100)
          } else {
            member.style.opacity = "0"
            member.style.transform = "translateY(20px)"
            setTimeout(() => {
              member.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }
  
  // FAQ Accordion
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item")
  
    if (faqItems.length === 0) return
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
      const answer = item.querySelector(".faq-answer")
      const icon = item.querySelector(".faq-icon i")
  
      // Set initial height to 0
      answer.style.height = "0"
  
      question.addEventListener("click", () => {
        // Toggle active class
        item.classList.toggle("active")
  
        // Toggle icon
        if (icon.classList.contains("fa-plus")) {
          icon.classList.remove("fa-plus")
          icon.classList.add("fa-minus")
        } else {
          icon.classList.remove("fa-minus")
          icon.classList.add("fa-plus")
        }
  
        // Toggle answer height
        if (item.classList.contains("active")) {
          answer.style.height = answer.scrollHeight + "px"
        } else {
          answer.style.height = "0"
        }
      })
    })
  }
  
  // Back to Top Button
  function initBackToTop() {
    const backToTopBtn = document.querySelector(".back-to-top")
  
    if (!backToTopBtn) return
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active")
      } else {
        backToTopBtn.classList.remove("active")
      }
    })
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
  
  // Dark Mode Toggle
  function initDarkMode() {
    const themeSwitch = document.querySelector(".theme-switch")
  
    if (!themeSwitch) return
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
  
    if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
      document.body.classList.add("dark")
      themeSwitch.querySelector("i").classList.remove("fa-moon")
      themeSwitch.querySelector("i").classList.add("fa-sun")
    }
  
    themeSwitch.addEventListener("click", () => {
      document.body.classList.toggle("dark")
  
      const icon = themeSwitch.querySelector("i")
  
      if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
        localStorage.setItem("theme", "dark")
      } else {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
        localStorage.setItem("theme", "light")
      }
    })
  }
  
  // Video Modal
  function initVideoModal() {
    const playButton = document.getElementById("play-video")
  
    if (!playButton) return
  
    playButton.addEventListener("click", () => {
      // Create modal
      const modal = document.createElement("div")
      modal.className = "video-modal"
  
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      `
  
      document.body.appendChild(modal)
  
      // Prevent body scrolling
      document.body.style.overflow = "hidden"
  
      // Add active class after a small delay for animation
      setTimeout(() => {
        modal.classList.add("active")
      }, 10)
  
      // Close modal on click
      const closeBtn = modal.querySelector(".close-modal")
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active")
  
        // Remove modal after animation
        setTimeout(() => {
          document.body.removeChild(modal)
          document.body.style.overflow = ""
        }, 300)
      })
  
      // Close modal on outside click
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active")
  
          // Remove modal after animation
          setTimeout(() => {
            document.body.removeChild(modal)
            document.body.style.overflow = ""
          }, 300)
        }
      })
    })
  }
  
  // Mission Vision Tabs
  function initMissionVisionTabs() {
    const tabs = document.querySelectorAll(".mv-tab")
    const tabPanes = document.querySelectorAll(".mv-tab-pane")
  
    if (tabs.length === 0 || tabPanes.length === 0) return
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove("active"))
  
        // Add active class to clicked tab
        tab.classList.add("active")
  
        // Hide all tab panes
        tabPanes.forEach((pane) => pane.classList.remove("active"))
  
        // Show corresponding tab pane
        const tabId = tab.getAttribute("data-tab")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }
  
  // Timeline Animation
  function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll(".timeline-item")
  
    if (timelineItems.length === 0) return
  
    const timelineObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
  
    timelineItems.forEach((item, index) => {
      // Add staggered animation delay
      item.style.transitionDelay = `${index * 0.2}s`
      timelineObserver.observe(item)
    })
  }
  
  