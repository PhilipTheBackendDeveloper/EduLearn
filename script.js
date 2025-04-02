// Course data
const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer",
      image: "images/development.jpeg",
      category: "development",
      price: "$89.99",
      rating: 4.8,
      students: 15420,
      duration: "20 hours",
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      description: "Master the principles of UI/UX design and create stunning user interfaces",
      image: "images/course-design.jpeg",
      category: "design",
      price: "$79.99",
      rating: 4.7,
      students: 8320,
      duration: "15 hours",
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      description: "Learn how to create and implement effective digital marketing strategies",
      image: "images/course-marketing.jpeg",
      category: "marketing",
      price: "$69.99",
      rating: 4.6,
      students: 6540,
      duration: "12 hours",
    },
    {
      id: 4,
      title: "Business Analytics & Intelligence",
      description: "Learn data analysis techniques to make better business decisions",
      image: "images/course-business.jpeg",
      category: "business",
      price: "$99.99",
      rating: 4.9,
      students: 7890,
      duration: "18 hours",
    },
    {
      id: 5,
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile apps with Flutter and Dart",
      image: "images/course-mobile.jpeg",
      category: "development",
      price: "$84.99",
      rating: 4.7,
      students: 5230,
      duration: "16 hours",
    },
    {
      id: 6,
      title: "Graphic Design for Beginners",
      description: "Learn the fundamentals of graphic design and create stunning visuals",
      image: "images/course-graphic.jpeg",
      category: "design",
      price: "$59.99",
      rating: 4.5,
      students: 9120,
      duration: "10 hours",
    },
  ]
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "EduLearn completely transformed my career. The courses are well-structured and the instructors are top-notch. I went from knowing nothing about web development to landing a job as a front-end developer in just 6 months!",
      name: "Sarah Johnson",
      role: "Front-end Developer",
      image: "images/testimonial-1.jpeg",
    },
    {
      id: 2,
      text: "The UI/UX Design Masterclass exceeded all my expectations. The practical projects helped me build an impressive portfolio that got me multiple job offers. I can't recommend EduLearn enough!",
      name: "Michael Chen",
      role: "UI/UX Designer",
      image: "images/testimonial-2.jpeg",
    },
    {
      id: 3,
      text: "As someone who was looking to switch careers, EduLearn provided me with the perfect roadmap. The business analytics course was comprehensive and gave me the skills I needed to make a successful transition.",
      name: "Emily Rodriguez",
      role: "Data Analyst",
      image: "images/testimonial-3.jpeg",
    },
  ]
  
  // DOM Elements
  const courseGrid = document.querySelector(".course-grid")
  const categoryButtons = document.querySelectorAll(".category")
  const testimonialContainer = document.querySelector(".testimonial-container")
  const prevTestimonialBtn = document.getElementById("prev-testimonial")
  const nextTestimonialBtn = document.getElementById("next-testimonial")
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")
  const header = document.querySelector("header")
  const contactForm = document.getElementById("contactForm")
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initPreloader()
    initCustomCursor()
    initNavigation()
    initDarkMode()
    initCounters()
    initCourseCarousel()
    initFeaturedTabs()
    initTestimonials()
    initBackToTop()
    initAnimations()
    initNewsletterForm()
  })
  
  // Preloader
  function initPreloader() {
    const preloader = document.getElementById("preloader")
    if (!preloader) return
  
    window.addEventListener("load", () => {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
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
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
  
      // Follower with slight delay for smooth effect
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px"
        cursorFollower.style.top = e.clientY + "px"
      }, 100)
    })
  
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .btn, input, .card, .tab-btn")
  
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
  
  // Navigation
  function initNavigation() {
    const header = document.querySelector("header")
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
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
        navMenu.classList.toggle("active")
        menuToggle.classList.toggle("active")
  
        // Toggle icon
        const icon = menuToggle.querySelector("i")
        if (icon.classList.contains("fa-bars")) {
          icon.classList.remove("fa-bars")
          icon.classList.add("fa-times")
        } else {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      })
  
      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          menuToggle.classList.remove("active")
  
          const icon = menuToggle.querySelector("i")
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      })
  
      // Close menu when clicking on a link
      const navLinks = navMenu.querySelectorAll("a")
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active")
            menuToggle.classList.remove("active")
  
            const icon = menuToggle.querySelector("i")
            icon.classList.remove("fa-times")
            icon.classList.add("fa-bars")
          }
        })
      })
    }
  }
  
  // Dark Mode Toggle
  function initDarkMode() {
    const themeSwitch = document.querySelector(".theme-switch")
  
    if (!themeSwitch) return
  
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
    const savedTheme = localStorage.getItem("theme")
  
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
  
  // Animated Counters
  function initCounters() {
    const counters = document.querySelectorAll(".counter")
  
    if (counters.length === 0) return
  
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const target = Number.parseInt(counter.getAttribute("data-target"))
            const duration = 2000 // 2 seconds
            const step = target / (duration / 30) // Update every 30ms
  
            let current = 0
            const timer = setInterval(() => {
              current += step
              counter.textContent = Math.floor(current)
  
              if (current >= target) {
                counter.textContent = target
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
  
  // Course Carousel
  function initCourseCarousel() {
    const carouselTrack = document.querySelector(".carousel-track")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
  
    if (!carouselTrack || !prevBtn || !nextBtn) return
  
    // Course data
    const courses = [
      {
        id: 1,
        title: "Complete Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and more",
        image: "images/development.jpeg",
        category: "development",
        tag: "tag-development",
        tagName: "Development",
        instructor: {
          name: "Doris Smith",
          image: "images/testimonial-1.jpeg",
        },
        rating: 4.8,
        ratingCount: 2450,
        students: 15420,
        duration: "20 hours",
        price: "$89.99",
      },
      {
        id: 2,
        title: "UI/UX Design Masterclass",
        description: "Master the principles of UI/UX design and create stunning interfaces",
        image: "images/course-design.jpeg",
        category: "design",
        tag: "tag-design",
        tagName: "Design",
        instructor: {
          name: "Henry Johnson",
          image: "images/testimonial-2.jpeg",
        },
        rating: 4.7,
        ratingCount: 1830,
        students: 8320,
        duration: "15 hours",
        price: "$79.99",
      },
      {
        id: 3,
        title: "Digital Marketing Strategy",
        description: "Learn how to create and implement effective marketing strategies",
        image: "images/course-marketing.jpeg",
        category: "marketing",
        tag: "tag-marketing",
        tagName: "Marketing",
        instructor: {
          name: "Daniel Chen",
          image: "images/testimonial-3.jpeg",
        },
        rating: 4.6,
        ratingCount: 1240,
        students: 6540,
        duration: "12 hours",
        price: "$69.99",
      },
      {
        id: 4,
        title: "Data Science & Machine Learning",
        description: "Master data analysis, visualization, and machine learning algorithms",
        image: "images/course-data.jpeg",
        category: "data-science",
        tag: "tag-data-science",
        tagName: "Data Science",
        instructor: {
          name: "Emily Rodriguez",
          image: "images/testimonial-1.jpeg",
        },
        rating: 4.9,
        ratingCount: 2120,
        students: 7890,
        duration: "18 hours",
        price: "$99.99",
      },
      {
        id: 5,
        title: "Business Analytics & Intelligence",
        description: "Learn data analysis techniques to make better business decisions",
        image: "images/course-business.jpeg",
        category: "business",
        tag: "tag-business",
        tagName: "Business",
        instructor: {
          name: "David Wilson",
          image: "images/testimonial-2.jpeg",
        },
        rating: 4.7,
        ratingCount: 1560,
        students: 5230,
        duration: "16 hours",
        price: "$84.99",
      },
      {
        id: 6,
        title: "Mobile App Development with Flutter",
        description: "Build cross-platform mobile apps with Flutter and Dart",
        image: "images/course-mobile.jpeg",
        category: "development",
        tag: "tag-development",
        tagName: "Development",
        instructor: {
          name: "Jessica Lee",
          image: "images/testimonial-3.jpg",
        },
        rating: 4.8,
        ratingCount: 1890,
        students: 6120,
        duration: "22 hours",
        price: "$94.99",
      },
    ]
  
    // Generate course cards
    courses.forEach((course) => {
      const courseCard = document.createElement("div")
      courseCard.className = "course-card"
  
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
  
      courseCard.innerHTML = `
              <div class="course-image">
                  <img src="${imageUrl}" alt="${course.title}">
                  <div class="course-tag ${course.tag}">${course.tagName}</div>
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
                  <div class="course-rating">
                      <div class="rating-stars">${ratingStars}</div>
                      <div class="rating-count">(${course.ratingCount.toLocaleString()})</div>
                  </div>
                  <div class="course-info">
                      <span><i class="fas fa-users"></i> ${course.students.toLocaleString()} Students</span>
                      <span><i class="fas fa-clock"></i> ${course.duration}</span>
                      <span class="course-price">${course.price}</span>
                  </div>
              </div>
          `
  
      carouselTrack.appendChild(courseCard)
    })
  
    // Carousel functionality
    let position = 0
    const cardWidth = document.querySelector(".course-card").offsetWidth + 20 // card width + margin
    const visibleCards = Math.floor(carouselTrack.offsetWidth / cardWidth)
    const maxPosition = (courses.length - visibleCards) * cardWidth
  
    // Update carousel position
    function updateCarouselPosition() {
      carouselTrack.style.transform = `translateX(-${position}px)`
    }
  
    // Next button click
    nextBtn.addEventListener("click", () => {
      position = Math.min(position + cardWidth, maxPosition)
      updateCarouselPosition()
    })
  
    // Previous button click
    prevBtn.addEventListener("click", () => {
      position = Math.max(position - cardWidth, 0)
      updateCarouselPosition()
    })
  
    // Responsive carousel
    window.addEventListener("resize", () => {
      const newVisibleCards = Math.floor(carouselTrack.offsetWidth / cardWidth)
      const newMaxPosition = (courses.length - newVisibleCards) * cardWidth
  
      // Adjust position if needed
      position = Math.min(position, newMaxPosition)
      updateCarouselPosition()
    })
  }
  
  // Featured Tabs
  function initFeaturedTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")
  
    if (tabButtons.length === 0 || tabPanes.length === 0) return
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and panes
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabPanes.forEach((pane) => pane.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        // Show corresponding tab pane
        const tabId = button.getAttribute("data-tab")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }
  
  // Testimonials
  function initTestimonials() {
    const testimonialContainer = document.querySelector(".testimonial-cards")
    const paginationContainer = document.querySelector(".testimonial-pagination")
  
    if (!testimonialContainer || !paginationContainer) return
  
    // Testimonial data
    const testimonials = [
      {
        id: 1,
        text: "EduLearn completely transformed my career. The courses are well-structured and the instructors are top-notch. I went from knowing nothing about web development to landing a job as a front-end developer in just 6 months!",
        name: "Sarah Johnson",
        role: "Front-end Developer",
        image: "images/testimonial-1.jpeg",
      },
      {
        id: 2,
        text: "The UI/UX Design Masterclass exceeded all my expectations. The practical projects helped me build an impressive portfolio that got me multiple job offers. I can't recommend EduLearn enough!",
        name: "Michael Chen",
        role: "UI/UX Designer",
        image: "images/testimonial-2.jpeg",
      },
      {
        id: 3,
        text: "As someone who was looking to switch careers, EduLearn provided me with the perfect roadmap. The business analytics course was comprehensive and gave me the skills I needed to make a successful transition.",
        name: "Emily Rodriguez",
        role: "Data Analyst",
        image: "images/testimonial-3.jpeg",
      },
      {
        id: 4,
        text: "The flexibility of learning at my own pace while working full-time was exactly what I needed. The mobile app development course was hands-on and practical, and the instructor support was exceptional.",
        name: "Janet Wilson",
        role: "Mobile Developer",
        image: "images/testimonial-1.jpeg",
      },
    ]
  
    // Generate testimonial cards
    testimonials.forEach((testimonial, index) => {
      // Create placeholder image URL if image doesn't exist
      const imageUrl = testimonial.image || `/placeholder.svg?height=60&width=60`
  
      const testimonialCard = document.createElement("div")
      testimonialCard.className = "testimonial-card"
      testimonialCard.setAttribute("data-index", index)
  
      testimonialCard.innerHTML = `
              <p class="testimonial-text">${testimonial.text}</p>
              <div class="testimonial-author">
                  <div class="author-image">
                      <img src="${imageUrl}" alt="${testimonial.name}">
                  </div>
                  <div class="author-info">
                      <h4>${testimonial.name}</h4>
                      <p>${testimonial.role}</p>
                  </div>
              </div>
          `
  
      testimonialContainer.appendChild(testimonialCard)
  
      // Create pagination dot
      const paginationDot = document.createElement("div")
      paginationDot.className = "pagination-dot"
      if (index === 0) paginationDot.classList.add("active")
      paginationDot.setAttribute("data-index", index)
  
      paginationDot.addEventListener("click", () => {
        // Scroll to the corresponding testimonial
        const card = testimonialContainer.querySelector(`.testimonial-card[data-index="${index}"]`)
        testimonialContainer.scrollTo({
          left: card.offsetLeft - testimonialContainer.offsetLeft,
          behavior: "smooth",
        })
  
        // Update active dot
        document.querySelectorAll(".pagination-dot").forEach((dot) => {
          dot.classList.remove("active")
        })
        paginationDot.classList.add("active")
      })
  
      paginationContainer.appendChild(paginationDot)
    })
  
    // Update pagination dots on scroll
    testimonialContainer.addEventListener("scroll", () => {
      const scrollPosition = testimonialContainer.scrollLeft
      const cardWidth = testimonialContainer.querySelector(".testimonial-card").offsetWidth
      const currentIndex = Math.round(scrollPosition / cardWidth)
  
      document.querySelectorAll(".pagination-dot").forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
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
  
  // Animations
  function initAnimations() {
    // Animated heading with typing effect
    const animatedHeading = document.querySelector(".animated-heading")
  
    if (animatedHeading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animatedHeading.classList.add("animate__animated", "animate__fadeInUp")
            observer.unobserve(animatedHeading)
          }
        })
      })
  
      observer.observe(animatedHeading)
    }
  
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll(
      ".step, .feature-box, .course-card, .category-card, .testimonial-card, .blog-card, .stat-counter",
    )
  
    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp")
            elementObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
  
    animatedElements.forEach((element) => {
      elementObserver.observe(element)
    })
  }
  
  // Newsletter Form
  function initNewsletterForm() {
    const newsletterForm = document.querySelector(".newsletter-form")
  
    if (!newsletterForm) return
  
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const emailInput = newsletterForm.querySelector('input[type="email"]')
      const email = emailInput.value.trim()
  
      if (!email) {
        showNotification("Please enter your email address", "error")
        return
      }
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        showNotification("Please enter a valid email address", "error")
        return
      }
  
      // Simulate form submission
      newsletterForm.classList.add("submitting")
  
      setTimeout(() => {
        newsletterForm.classList.remove("submitting")
        emailInput.value = ""
        showNotification("Thank you for subscribing to our newsletter!", "success")
      }, 1500)
    })
  }
  
  // Notification System
  function showNotification(message, type = "success") {
    // Create notification element if it doesn't exist
    let notification = document.querySelector(".notification")
  
    if (!notification) {
      notification = document.createElement("div")
      notification.className = "notification"
      document.body.appendChild(notification)
    }
  
    // Set notification content and type
    notification.textContent = message
    notification.className = `notification ${type}`
  
    // Show notification
    notification.classList.add("show")
  
    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show")
    }, 3000)
  }
  
  // Additional JavaScript for animations.js
  document.addEventListener("DOMContentLoaded", () => {
    // Create animations.js content
    const animationsScript = document.createElement("script")
    animationsScript.textContent = `
          // Parallax effect for hero section
          const heroSection = document.querySelector('.hero');
          const heroShapes = document.querySelectorAll('.hero-shapes .shape');
          
          if (heroSection && heroShapes.length > 0) {
              window.addEventListener('mousemove', (e) => {
                  const x = e.clientX / window.innerWidth;
                  const y = e.clientY / window.innerHeight;
                  
                  heroShapes.forEach((shape, index) => {
                      const speed = (index + 1) * 2;
                      const xOffset = (x - 0.5) * speed;
                      const yOffset = (y - 0.5) * speed;
                      
                      shape.style.transform = \`translate(\${xOffset}px, \${yOffset}px)\`;
                  });
              });
          }
          
          // Smooth scroll for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                  e.preventDefault();
                  
                  const targetId = this.getAttribute('href');
                  if (targetId === '#') return;
                  
                  const targetElement = document.querySelector(targetId);
                  if (!targetElement) return;
                  
                  const headerOffset = 80;
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                  });
              });
          });
          
          // Text animation for gradient text
          const gradientTexts = document.querySelectorAll('.gradient-text');
          
          gradientTexts.forEach(text => {
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          text.style.backgroundSize = '200% 200%';
                          text.style.animation = 'gradientAnimation 3s ease infinite';
                          observer.unobserve(text);
                      }
                  });
              });
              
              observer.observe(text);
          });
          
          // Add keyframe animation for gradient text
          const style = document.createElement('style');
          style.textContent = \`
              @keyframes gradientAnimation {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
              }
          \`;
          document.head.appendChild(style);
      `
  
    // Append to document
    document.body.appendChild(animationsScript)
  })
  
  // Display courses based on category
  function displayCourses(category) {
    courseGrid.innerHTML = ""
  
    const filteredCourses = category === "all" ? courses : courses.filter((course) => course.category === category)
  
    filteredCourses.forEach((course) => {
      const courseCard = document.createElement("div")
      courseCard.classList.add("course-card")
  
      // Create placeholder image URL
      const imageUrl = course.image || `/placeholder.svg?height=200&width=300`
  
      // Set tag class based on category
      const tagClass = `tag-${course.category}`
  
      courseCard.innerHTML = `
              <div class="course-image">
                  <img src="${imageUrl}" alt="${course.title}">
              </div>
              <div class="course-content">
                  <span class="course-tag ${tagClass}">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</span>
                  <h3>${course.title}</h3>
                  <p>${course.description}</p>
                  <div class="course-info">
                      <span><i class="fas fa-star"></i>${course.rating}</span>
                      <span><i class="fas fa-users"></i>${course.students.toLocaleString()}</span>
                      <span><i class="fas fa-clock"></i>${course.duration}</span>
                  </div>
                  <div class="course-info">
                      <span class="course-price">${course.price}</span>
                      <a href="#" class="btn btn-primary btn-sm">Enroll Now</a>
                  </div>
              </div>
          `
  
      courseGrid.appendChild(courseCard)
    })
  }
  
  // Category filter functionality
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryButtons.forEach((btn) => btn.classList.remove("active"))
  
      // Add active class to clicked button
      button.classList.add("active")
  
      // Get category and display courses
      const category = button.getAttribute("data-category")
      displayCourses(category)
    })
  })
  
  // Display testimonials
  function displayTestimonials() {
    testimonialContainer.innerHTML = ""
  
    testimonials.forEach((testimonial, index) => {
      const testimonialSlide = document.createElement("div")
      testimonialSlide.classList.add("testimonial-slide")
      testimonialSlide.setAttribute("data-index", index)
  
      // Create placeholder image URL
      const imageUrl = testimonial.image || `/placeholder.svg?height=60&width=60`
  
      testimonialSlide.innerHTML = `
              <div class="testimonial-card">
                  <div class="testimonial-text">
                      ${testimonial.text}
                  </div>
                  <div class="testimonial-author">
                      <div class="author-image">
                          <img src="${imageUrl}" alt="${testimonial.name}">
                      </div>
                      <div class="author-info">
                          <h4>${testimonial.name}</h4>
                          <p>${testimonial.role}</p>
                      </div>
                  </div>
              </div>
          `
  
      testimonialContainer.appendChild(testimonialSlide)
    })
  }
  
  // Set active testimonial
  function setActiveTestimonial(index) {
    // Remove active class from all testimonials
    document.querySelectorAll(".testimonial-slide").forEach((slide) => {
      slide.classList.remove("active")
    })
  
    // Add active class to current testimonial
    const activeSlide = document.querySelector(`.testimonial-slide[data-index="${index}"]`)
    if (activeSlide) {
      activeSlide.classList.add("active")
    }
  }
  
  // Testimonial slider functionality
  let currentTestimonial = 0
  
  // Previous testimonial button
  prevTestimonialBtn.addEventListener("click", () => {
    currentTestimonial--
    if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1
    }
    setActiveTestimonial(currentTestimonial)
  })
  
  // Next testimonial button
  nextTestimonialBtn.addEventListener("click", () => {
    currentTestimonial++
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0
    }
    setActiveTestimonial(currentTestimonial)
  })
  
  // Auto slide testimonials
  setInterval(() => {
    currentTestimonial++
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0
    }
    setActiveTestimonial(currentTestimonial)
  }, 5000)
  
  // Handle contact form submission
  function handleContactFormSubmit(e) {
    e.preventDefault()
  
    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
  
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`)
  
    // Reset form
    contactForm.reset()
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })
  
  