/**
 * Creative Courses JavaScript
 * Modern and interactive functionality for the courses page
 */

// Add this CSS fix function to ensure course cards display properly
function addEmergencyStyles() {
    // Create a style element
    const styleEl = document.createElement("style")
    styleEl.textContent = `
      /* Emergency fixes for course cards */
      .course-card {
        position: relative;
        height: auto;
        min-height: 500px;
        margin-bottom: 30px;
        perspective: 1000px;
      }
      
      .course-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 500px;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }
      
      .course-card-front,
      .course-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-md);
        background-color: var(--bg-white);
      }
      
      .course-card-front {
        z-index: 2;
        transform: rotateY(0deg);
      }
      
      .course-card-back {
        transform: rotateY(180deg);
      }
      
      /* Fix for grid view */
      .grid-view {
        display: grid !important;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: var(--space-xl);
      }
    `
  
    // Append to head
    document.head.appendChild(styleEl)
    console.log("Emergency styles added")
  }
  
  // Add this to the DOMContentLoaded event handler
  document.addEventListener("DOMContentLoaded", () => {
    // Add emergency styles immediately
    addEmergencyStyles()
  
    // Rest of initialization
    initPreloader()
    initCustomCursor()
    initMobileMenu()
    initDarkMode()
    initCourseCards()
    initFilters()
    initSearch()
    initViewToggle()
    initTestimonialSlider()
    initBackToTop()
    initAnimations()
    fixCourseCardStyles()
  
    // Additional check to ensure courses are visible after a delay
    setTimeout(() => {
      const coursesContainer = document.getElementById("courses-container")
      if (coursesContainer && window.getComputedStyle(coursesContainer).display === "none") {
        console.log("Forcing courses container to display: grid")
        coursesContainer.style.display = "grid"
      }
    }, 1000)
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
    const interactiveElements = document.querySelectorAll(
      "a, button, .btn, input, select, .course-card, .filter-option, .search-tag",
    )
  
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
  
  // Course Cards
  function initCourseCards() {
    const courseCards = document.querySelectorAll(".course-card")
    const flipBtns = document.querySelectorAll(".flip-btn")
    const flipCloseBtns = document.querySelectorAll(".flip-close")
  
    if (courseCards.length === 0) return
  
    // Set proper height for course cards to ensure they're visible
    courseCards.forEach((card) => {
      const cardInner = card.querySelector(".course-card-inner")
      const cardFront = card.querySelector(".course-card-front")
      const cardBack = card.querySelector(".course-card-back")
  
      // Make sure cards have proper positioning and height
      if (cardInner && cardFront && cardBack) {
        // Set initial styles to ensure cards are visible
        cardInner.style.position = "relative"
        cardInner.style.height = "auto"
        cardFront.style.position = "relative"
        cardFront.style.height = "auto"
        cardBack.style.position = "absolute"
  
        // Ensure the card has a minimum height
        const frontHeight = cardFront.offsetHeight
        card.style.minHeight = `${frontHeight}px`
        cardInner.style.minHeight = `${frontHeight}px`
      }
    })
  
    // Flip card on button click
    flipBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        const card = btn.closest(".course-card")
        card.querySelector(".course-card-inner").style.transform = "rotateY(180deg)"
      })
    })
  
    // Close flipped card
    flipCloseBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        const card = btn.closest(".course-card")
        card.querySelector(".course-card-inner").style.transform = "rotateY(0)"
      })
    })
  
    // Add hover effect for touch devices
    courseCards.forEach((card) => {
      card.addEventListener("touchstart", function () {
        this.classList.add("touch-hover")
      })
  
      card.addEventListener("touchend", function () {
        setTimeout(() => {
          this.classList.remove("touch-hover")
        }, 500)
      })
    })
  }
  
  // Filters
  function initFilters() {
    const filterOptions = document.querySelectorAll(".filter-option")
    const courseCards = document.querySelectorAll(".course-card")
    const noResults = document.querySelector(".no-results")
    const resetFiltersBtn = document.querySelector(".reset-filters")
  
    if (filterOptions.length === 0 || courseCards.length === 0) return
  
    // Filter courses by category
    filterOptions.forEach((option) => {
      option.addEventListener("click", () => {
        // Remove active class from all options
        filterOptions.forEach((opt) => opt.classList.remove("active"))
  
        // Add active class to clicked option
        option.classList.add("active")
  
        const selectedCategory = option.getAttribute("data-category")
        let visibleCount = 0
  
        // Filter courses
        courseCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category")
  
          if (selectedCategory === "all" || selectedCategory === cardCategory) {
            card.style.display = ""
            visibleCount++
  
            // Add entrance animation
            setTimeout(() => {
              card.classList.add("animate-in")
            }, 100)
          } else {
            card.classList.remove("animate-in")
            card.style.display = "none"
          }
        })
  
        // Show/hide no results message
        if (visibleCount === 0 && noResults) {
          noResults.style.display = "block"
        } else if (noResults) {
          noResults.style.display = "none"
        }
      })
    })
  
    // Reset filters
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", () => {
        // Reset active filter
        filterOptions.forEach((opt) => {
          if (opt.getAttribute("data-category") === "all") {
            opt.classList.add("active")
          } else {
            opt.classList.remove("active")
          }
        })
  
        // Show all courses
        courseCards.forEach((card) => {
          card.style.display = ""
          setTimeout(() => {
            card.classList.add("animate-in")
          }, 100)
        })
  
        // Hide no results message
        if (noResults) {
          noResults.style.display = "none"
        }
  
        // Reset search input
        const searchInput = document.getElementById("search-input")
        if (searchInput) {
          searchInput.value = ""
        }
      })
    }
  }
  
  // Search Functionality
  function initSearch() {
    const searchInput = document.getElementById("search-input")
    const courseCards = document.querySelectorAll(".course-card")
    const noResults = document.querySelector(".no-results")
    const searchTags = document.querySelectorAll(".search-tag")
  
    if (!searchInput || courseCards.length === 0) return
  
    // Search function
    function performSearch(searchTerm) {
      searchTerm = searchTerm.toLowerCase().trim()
      let visibleCount = 0
  
      courseCards.forEach((card) => {
        const title = card.querySelector(".course-title").textContent.toLowerCase()
        const category = card.getAttribute("data-category").toLowerCase()
        const description = card.querySelector(".course-description p")?.textContent.toLowerCase() || ""
  
        if (title.includes(searchTerm) || category.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = ""
          visibleCount++
  
          // Highlight matching text
          highlightText(card, searchTerm)
  
          // Add entrance animation
          setTimeout(() => {
            card.classList.add("animate-in")
          }, 100)
        } else {
          card.classList.remove("animate-in")
          card.style.display = "none"
        }
      })
  
      // Show/hide no results message
      if (visibleCount === 0 && noResults) {
        noResults.style.display = "block"
      } else if (noResults) {
        noResults.style.display = "none"
      }
  
      // Reset active filter
      document.querySelectorAll(".filter-option").forEach((opt) => {
        opt.classList.remove("active")
        if (opt.getAttribute("data-category") === "all") {
          opt.classList.add("active")
        }
      })
    }
  
    // Highlight matching text
    function highlightText(card, searchTerm) {
      // Remove existing highlights
      card.querySelectorAll(".highlight-text").forEach((el) => {
        el.outerHTML = el.textContent
      })
  
      // Only highlight if search term is not empty
      if (searchTerm === "") return
  
      // Elements to search in
      const elements = [card.querySelector(".course-title"), card.querySelector(".course-description p")]
  
      elements.forEach((element) => {
        if (!element) return
  
        const text = element.innerHTML
        const regex = new RegExp(`(${searchTerm})`, "gi")
        element.innerHTML = text.replace(regex, '<span class="highlight-text">$1</span>')
      })
    }
  
    // Search on input
    searchInput.addEventListener(
      "input",
      debounce(function () {
        performSearch(this.value)
      }, 300),
    )
  
    // Search on enter key
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        performSearch(this.value)
      }
    })
  
    // Search tags
    searchTags.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        e.preventDefault()
        const searchTerm = tag.getAttribute("data-filter")
        searchInput.value = searchTerm
        performSearch(searchTerm)
      })
    })
  
    // Debounce function to limit how often the search runs
    function debounce(func, delay) {
      let timeout
      return function () {
        const args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, args), delay)
      }
    }
  }
  
  // View Toggle (Grid/List)
  function initViewToggle() {
    const viewOptions = document.querySelectorAll(".view-option")
    const coursesContainer = document.getElementById("courses-container")
  
    if (viewOptions.length === 0 || !coursesContainer) return
  
    viewOptions.forEach((option) => {
      option.addEventListener("click", () => {
        // Remove active class from all options
        viewOptions.forEach((opt) => opt.classList.remove("active"))
  
        // Add active class to clicked option
        option.classList.add("active")
  
        const viewType = option.getAttribute("data-view")
  
        // Toggle view class
        if (viewType === "grid") {
          coursesContainer.classList.remove("list-view")
          coursesContainer.classList.add("grid-view")
        } else {
          coursesContainer.classList.remove("grid-view")
          coursesContainer.classList.add("list-view")
        }
  
        // Save preference
        localStorage.setItem("course-view", viewType)
      })
    })
  
    // Load saved preference
    const savedView = localStorage.getItem("course-view")
    if (savedView) {
      viewOptions.forEach((option) => {
        if (option.getAttribute("data-view") === savedView) {
          option.click()
        }
      })
    }
  }
  
  // Testimonial Slider
  function initTestimonialSlider() {
    const testimonialContainer = document.querySelector(".testimonials-container")
    const prevBtn = document.querySelector(".testimonial-control.prev")
    const nextBtn = document.querySelector(".testimonial-control.next")
    const dots = document.querySelectorAll(".testimonial-dots .dot")
  
    if (!testimonialContainer || !prevBtn || !nextBtn || dots.length === 0) return
  
    const testimonials = document.querySelectorAll(".testimonial-card")
    let currentIndex = 0
  
    // Set up the slider
    function setupSlider() {
      // Calculate the width of a single testimonial card
      const testimonialWidth =
        testimonials[0].offsetWidth + Number.parseInt(window.getComputedStyle(testimonials[0]).marginRight)
  
      // Set initial position
      updateSlider()
  
      // Previous button click
      prevBtn.addEventListener("click", () => {
        currentIndex = Math.max(0, currentIndex - 1)
        updateSlider()
      })
  
      // Next button click
      nextBtn.addEventListener("click", () => {
        currentIndex = Math.min(testimonials.length - 1, currentIndex + 1)
        updateSlider()
      })
  
      // Dot click
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          currentIndex = index
          updateSlider()
        })
      })
  
      // Update slider position and active dot
      function updateSlider() {
        testimonialContainer.scrollTo({
          left: currentIndex * testimonialWidth,
          behavior: "smooth",
        })
  
        // Update active dot
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
      }
  
      // Handle scroll events
      testimonialContainer.addEventListener("scroll", () => {
        const scrollPosition = testimonialContainer.scrollLeft
        currentIndex = Math.round(scrollPosition / testimonialWidth)
  
        // Update active dot
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
      })
    }
  
    // Initialize slider
    setupSlider()
  
    // Update slider on window resize
    window.addEventListener("resize", debounce(setupSlider, 200))
  
    // Debounce function
    function debounce(func, delay) {
      let timeout
      return function () {
        const args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, args), delay)
      }
    }
  
    // Auto-scroll testimonials
    let autoScrollInterval
  
    function startAutoScroll() {
      autoScrollInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length
        testimonialContainer.scrollTo({
          left:
            currentIndex *
            (testimonials[0].offsetWidth + Number.parseInt(window.getComputedStyle(testimonials[0]).marginRight)),
          behavior: "smooth",
        })
  
        // Update active dot
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
      }, 5000)
    }
  
    function stopAutoScroll() {
      clearInterval(autoScrollInterval)
    }
  
    // Start auto-scroll
    startAutoScroll()
  
    // Pause auto-scroll on hover
    testimonialContainer.addEventListener("mouseenter", stopAutoScroll)
    testimonialContainer.addEventListener("mouseleave", startAutoScroll)
  
    // Pause auto-scroll on touch
    testimonialContainer.addEventListener("touchstart", stopAutoScroll)
    testimonialContainer.addEventListener("touchend", startAutoScroll)
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
  
  // Animations
  function initAnimations() {
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
    const animatedElements = document.querySelectorAll(".animate-on-scroll")
  
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
        observer.observe(element)
      })
    }
  
    // Add animation classes to elements
    document.querySelectorAll(".course-card, .featured-course, .testimonial-card").forEach((el, index) => {
      el.classList.add("animate-on-scroll")
      el.style.animationDelay = `${index * 0.1}s`
    })
  
    // Animate hero section elements
    const heroElements = document.querySelectorAll(".hero-badge, .hero-title, .hero-description, .search-container")
  
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
  
    // Animate floating cards
    const floatingCards = document.querySelectorAll(".floating-card")
  
    floatingCards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = `opacity 0.5s ease, transform 0.5s ease`
      card.style.transitionDelay = `${(index + heroElements.length) * 0.2}s`
  
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, 100)
    })
  
    // Load more courses functionality
    const loadMoreBtn = document.querySelector(".load-more")
  
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        // Show loading spinner
        loadMoreBtn.querySelector("span").style.display = "none"
        loadMoreBtn.querySelector("i").style.display = "inline-block"
  
        // Simulate loading delay
        setTimeout(() => {
          // Create new course cards (in a real application, this would fetch from an API)
          const coursesContainer = document.getElementById("courses-container")
  
          if (coursesContainer) {
            // Clone existing cards for demo purposes
            const existingCards = document.querySelectorAll(".course-card")
            const cardsToClone = Array.from(existingCards).slice(0, 3)
  
            cardsToClone.forEach((card, index) => {
              const clone = card.cloneNode(true)
  
              // Modify clone to make it look different
              const title = clone.querySelector(".course-title")
              if (title) {
                title.textContent = `Advanced ${title.textContent}`
              }
  
              // Add to container with animation
              clone.style.opacity = "0"
              clone.style.transform = "translateY(20px)"
              coursesContainer.appendChild(clone)
  
              setTimeout(() => {
                clone.style.opacity = "1"
                clone.style.transform = "translateY(0)"
              }, 100 * index)
  
              // Reinitialize course card functionality for the clone
              const flipBtn = clone.querySelector(".flip-btn")
              const flipCloseBtn = clone.querySelector(".flip-close")
  
              if (flipBtn) {
                flipBtn.addEventListener("click", (e) => {
                  e.preventDefault()
                  clone.querySelector(".course-card-inner").style.transform = "rotateY(180deg)"
                })
              }
  
              if (flipCloseBtn) {
                flipCloseBtn.addEventListener("click", (e) => {
                  e.preventDefault()
                  clone.querySelector(".course-card-inner").style.transform = "rotateY(0)"
                })
              }
            })
          }
  
          // Hide loading spinner
          loadMoreBtn.querySelector("span").style.display = "inline-block"
          loadMoreBtn.querySelector("i").style.display = "none"
  
          // Hide load more button after a few loads (for demo)
          const loadCount = Number.parseInt(loadMoreBtn.getAttribute("data-load-count") || "0")
          loadMoreBtn.setAttribute("data-load-count", (loadCount + 1).toString())
  
          if (loadCount >= 2) {
            loadMoreBtn.style.display = "none"
          }
        }, 1500)
      })
    }
  
    // Sort functionality
    const sortSelect = document.getElementById("sort-select")
  
    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        const sortValue = sortSelect.value
        const coursesContainer = document.getElementById("courses-container")
  
        if (!coursesContainer) return
  
        const courseCards = Array.from(coursesContainer.querySelectorAll(".course-card"))
  
        // Sort cards based on selected option
        courseCards.sort((a, b) => {
          const titleA = a.querySelector(".course-title").textContent
          const titleB = b.querySelector(".course-title").textContent
          const ratingA = Number.parseFloat(a.querySelector(".rating-count").textContent)
          const ratingB = Number.parseFloat(b.querySelector(".rating-count").textContent)
          const priceA = Number.parseFloat(a.querySelector(".course-price").textContent.replace("$", ""))
          const priceB = Number.parseFloat(b.querySelector(".course-price").textContent.replace("$", ""))
  
          switch (sortValue) {
            case "name-asc":
              return titleA.localeCompare(titleB)
            case "name-desc":
              return titleB.localeCompare(titleA)
            case "price-low":
              return priceA - priceB
            case "price-high":
              return priceB - priceA
            case "popularity":
              return ratingB - ratingA
            default:
              return 0
          }
        })
  
        // Remove all cards
        courseCards.forEach((card) => {
          coursesContainer.removeChild(card)
        })
  
        // Add sorted cards back
        courseCards.forEach((card, index) => {
          card.style.opacity = "0"
          card.style.transform = "translateY(20px)"
          coursesContainer.appendChild(card)
  
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          }, 50 * index)
        })
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
  }
  
  // Add this function to fix CSS issues that might be preventing courses from showing
  function fixCourseCardStyles() {
    // Add this to the end of the DOMContentLoaded event handler
    const courseCards = document.querySelectorAll(".course-card")
    const coursesContainer = document.getElementById("courses-container")
  
    if (!coursesContainer || courseCards.length === 0) {
      console.error("Courses container or course cards not found")
      return
    }
  
    // Fix container styles
    coursesContainer.style.display = "grid"
  
    // Fix card styles
    courseCards.forEach((card) => {
      // Ensure cards are visible
      card.style.opacity = "1"
      card.style.height = "auto"
      card.style.overflow = "visible"
  
      const cardInner = card.querySelector(".course-card-inner")
      if (cardInner) {
        cardInner.style.transform = "none"
        cardInner.style.height = "auto"
        cardInner.style.position = "relative"
      }
    })
  
    console.log("Course card styles fixed, found", courseCards.length, "cards")
  }
  
  