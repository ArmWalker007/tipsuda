document.addEventListener('DOMContentLoaded', () => {
  // 1. Loader Screen Timer
  const loader = document.getElementById('loader-screen');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1200); // Give enough time for Star Rail loading warp feel
  });
  
  // Fallback in case load event takes too long
  setTimeout(() => {
    if (!loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
    }
  }, 3000);

  // 2. Custom Cursor
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (cursorDot && cursorOutline && window.innerWidth > 1024) {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    // Smooth cursor outline delay
    const animateCursor = () => {
      let distX = mouseX - outlineX;
      let distY = mouseY - outlineY;
      
      outlineX += distX * 0.15;
      outlineY += distY * 0.15;
      
      cursorOutline.style.left = outlineX + 'px';
      cursorOutline.style.top = outlineY + 'px';
      
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hover effect on links, buttons and interactive elements
    const hoverables = document.querySelectorAll('a, button, .interactive-card, .gallery-card, input, textarea, label');
    hoverables.forEach(item => {
      item.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
      });
      item.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
    });
  }

  // 3. Canvas Starfield Background
  const canvas = document.getElementById('galaxy-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    let nebulae = [];
    let shootingStars = [];
    const starCount = 180;
    const nebulaCount = 6;
    const shootingStarCount = 2;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initNebulae();
      initShootingStars();
    };
    
    class Star {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.8 + 0.2;
        this.alpha = Math.random();
        this.twinkleSpeed = Math.random() * 0.015 + 0.005;
        this.speedX = (Math.random() - 0.5) * 0.1;
        this.speedY = (Math.random() - 0.5) * 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Twinkle
        this.alpha += this.twinkleSpeed;
        if (this.alpha > 1 || this.alpha < 0.2) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }
        
        // Boundary Check
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#fff';
        
        // Color hue variance (mostly white, some pale purple or light yellow)
        const rand = Math.random();
        if (rand > 0.85) {
          ctx.fillStyle = '#ffe5a3'; // golden star
        } else if (rand > 0.7) {
          ctx.fillStyle = '#dbb9ff'; // purple star
        }
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class CosmicNebula {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 250 + 150; // Larger nebulae
        this.dx = (Math.random() - 0.5) * 0.04;
        this.dy = (Math.random() - 0.5) * 0.04;
        
        // Richer cosmic colors (lavender, fuchsia, deep space indigo, cyan)
        const colors = [
          'rgba(168, 85, 247, 0.05)', // Purple
          'rgba(217, 70, 239, 0.04)', // Fuchsia
          'rgba(6, 182, 212, 0.04)',  // Cyan
          'rgba(99, 102, 241, 0.04)'  // Indigo
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.dx;
        this.y += this.dy;
        
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) this.dx = -this.dx;
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) this.dy = -this.dy;
      }
      
      draw() {
        ctx.save();
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.4; // Start in top portion
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 4 + 2;
        this.angle = Math.PI / 6 + Math.random() * (Math.PI / 12); // Diagonal drop down-right
        this.alpha = 1;
        this.opacitySpeed = Math.random() * 0.015 + 0.005;
      }
      
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= this.opacitySpeed;
        
        if (this.alpha <= 0 || this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }
      
      draw() {
        if (this.alpha <= 0) return;
        
        ctx.save();
        const startX = this.x;
        const startY = this.y;
        const endX = this.x - Math.cos(this.angle) * this.length;
        const endY = this.y - Math.sin(this.angle) * this.length;
        
        const grad = ctx.createLinearGradient(startX, startY, endX, endY);
        grad.addColorStop(0, `rgba(255, 216, 117, ${this.alpha})`); // Golden shooting head
        grad.addColorStop(0.5, `rgba(217, 70, 239, ${this.alpha * 0.6})`); // Purple middle
        grad.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
      }
    }
    
    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };
    
    const initNebulae = () => {
      nebulae = [];
      for (let i = 0; i < nebulaCount; i++) {
        nebulae.push(new CosmicNebula());
      }
    };

    const initShootingStars = () => {
      shootingStars = [];
      for (let i = 0; i < shootingStarCount; i++) {
        shootingStars.push(new ShootingStar());
      }
    };
    
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nebulae.forEach(nebula => {
        nebula.update();
        nebula.draw();
      });
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      shootingStars.forEach(sStar => {
        sStar.update();
        sStar.draw();
      });
      
      requestAnimationFrame(loop);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    loop();
  }

  // 4. Dark & Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    if (themeIcon) {
      themeIcon.className = 'fa-solid fa-moon';
    }
  } else {
    document.documentElement.classList.remove('light');
    if (themeIcon) {
      themeIcon.className = 'fa-solid fa-sun';
    }
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
      const isLight = document.documentElement.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      
      if (themeIcon) {
        themeIcon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      }
      
      // Update chart fonts and colors if toggle occurs
      updateChartTheme();
    });
  }

  // 5. Typing Subtext Effect
  const words = ["Creative Design Student", "Dream • Create • Inspire"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeTextElement = document.getElementById('type-text');

  const typeEffect = () => {
    if (!typeTextElement) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typeTextElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeTextElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typingSpeed = isDeleting ? 40 : 80;
    
    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Pause before starting new word
    }
    
    setTimeout(typeEffect, typingSpeed);
  };
  
  if (typeTextElement) {
    typeEffect();
  }

  // 6. Navigation Link Active Tracking on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const handleScroll = () => {
    const scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Floating Navbar Glassmorphism scroll style
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('py-3', 'shadow-2xl');
        navbar.classList.remove('py-5');
      } else {
        navbar.classList.remove('py-3', 'shadow-2xl');
        navbar.classList.add('py-5');
      }
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // 7. Interactive Skills SVG Progress Circles (Observer)
  const skillsSection = document.getElementById('skills');
  const skillCircles = document.querySelectorAll('.skill-ring-circle');
  
  const animateSkills = () => {
    skillCircles.forEach(circle => {
      const percent = parseInt(circle.getAttribute('data-percent'));
      // Formula: Dashoffset = Total Length - (Percent / 100 * Total Length)
      // SVG circle radius is 45, perimeter is 2 * PI * 45 = 282.7 (approx 283)
      const offset = 283 - (percent / 100 * 283);
      circle.style.strokeDashoffset = offset;
    });
  };

  if (skillsSection && skillCircles.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    observer.observe(skillsSection);
  }

  // 8. Academic Performance Chart (Chart.js)
  const chartCanvas = document.getElementById('academic-chart');
  let academicChart = null;

  const getChartColors = () => {
    const isLight = document.documentElement.classList.contains('light');
    return {
      gridColor: isLight ? 'rgba(124, 58, 237, 0.15)' : 'rgba(255, 255, 255, 0.1)',
      angleLinesColor: isLight ? 'rgba(124, 58, 237, 0.2)' : 'rgba(255, 216, 117, 0.25)',
      pointLabelColor: isLight ? '#170b30' : '#d0c4ff',
      textColor: isLight ? '#564a73' : '#bfa5e6',
      fillColor: isLight ? 'rgba(124, 58, 237, 0.25)' : 'rgba(168, 85, 247, 0.2)',
      strokeColor: isLight ? 'rgba(124, 58, 237, 0.8)' : 'rgba(217, 70, 239, 0.85)',
      pointBorderColor: isLight ? '#ffd875' : '#ffd875',
      pointBackgroundColor: isLight ? '#7c3aed' : '#a855f7'
    };
  };

  const initAcademicChart = () => {
    if (!chartCanvas) return;
    
    const colors = getChartColors();
    
    const data = {
      labels: [
        'Graphic Design', 
        'Digital Art & Media', 
        'Theory of Creative Art', 
        'Design Presentation', 
        'Creative Idea Generation', 
        'Photography Skill'
      ],
      datasets: [{
        label: 'Creative Performance (GPA Mapping)',
        data: [3.80, 3.75, 3.60, 3.50, 3.85, 3.40], // Mapped Design Area Scores based on GPA ratios
        backgroundColor: colors.fillColor,
        borderColor: colors.strokeColor,
        borderWidth: 2,
        pointBackgroundColor: colors.pointBackgroundColor,
        pointBorderColor: colors.pointBorderColor,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors.strokeColor,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    };

    const config = {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(9, 5, 20, 0.85)',
            titleColor: '#ffd875',
            bodyColor: '#f3ebff',
            borderColor: 'rgba(168, 85, 247, 0.4)',
            borderWidth: 1,
            titleFont: {
              family: 'Orbitron',
              size: 13
            },
            bodyFont: {
              family: 'Outfit',
              size: 13
            },
            callbacks: {
              label: function(context) {
                return ` Performance Index: ${context.formattedValue} / 4.00`;
              }
            }
          }
        },
        scales: {
          r: {
            angleLines: {
              color: colors.angleLinesColor
            },
            grid: {
              color: colors.gridColor
            },
            pointLabels: {
              color: colors.pointLabelColor,
              font: {
                family: 'Outfit, Kanit',
                size: 11,
                weight: '500'
              }
            },
            ticks: {
              color: colors.textColor,
              backdropColor: 'transparent',
              font: {
                family: 'Orbitron',
                size: 10
              },
              stepSize: 1.0,
              min: 0,
              max: 4.0
            }
          }
        }
      }
    };

    academicChart = new Chart(chartCanvas, config);
  };

  const updateChartTheme = () => {
    if (!academicChart) return;
    const colors = getChartColors();
    
    academicChart.options.scales.r.angleLines.color = colors.angleLinesColor;
    academicChart.options.scales.r.grid.color = colors.gridColor;
    academicChart.options.scales.r.pointLabels.color = colors.pointLabelColor;
    academicChart.options.scales.r.ticks.color = colors.textColor;
    
    academicChart.data.datasets[0].backgroundColor = colors.fillColor;
    academicChart.data.datasets[0].borderColor = colors.strokeColor;
    academicChart.data.datasets[0].pointBackgroundColor = colors.pointBackgroundColor;
    academicChart.data.datasets[0].pointBorderColor = colors.pointBorderColor;
    
    academicChart.update();
  };

  // Switch between radar skill stat web and semester GPAs
  const viewRadarBtn = document.getElementById('view-radar-btn');
  const viewGpaBtn = document.getElementById('view-gpa-btn');
  const radarContainer = document.getElementById('radar-chart-container');
  const gpaContainer = document.getElementById('gpa-bars-container');

  if (viewRadarBtn && viewGpaBtn && radarContainer && gpaContainer) {
    viewRadarBtn.addEventListener('click', () => {
      radarContainer.classList.remove('hidden');
      gpaContainer.classList.add('hidden');
      viewRadarBtn.className = 'btn-neon text-xs px-4 py-2';
      viewGpaBtn.className = 'btn-gold text-xs px-4 py-2 opacity-50 hover:opacity-100';
    });

    viewGpaBtn.addEventListener('click', () => {
      radarContainer.classList.add('hidden');
      gpaContainer.classList.remove('hidden');
      viewGpaBtn.className = 'btn-gold text-xs px-4 py-2';
      viewRadarBtn.className = 'btn-neon text-xs px-4 py-2 opacity-50 hover:opacity-100';
      
      // Animate Bar indicators inside GPA container
      setTimeout(() => {
        const barWidths = document.querySelectorAll('.gpa-bar-fill');
        barWidths.forEach(bar => {
          const val = bar.getAttribute('data-value');
          // Map grade 0-4.00 to percentage 0-100%
          const pct = (parseFloat(val) / 4.00) * 100;
          bar.style.width = pct + '%';
        });
      }, 100);
    });
  }

  // Initialize the chart
  initAcademicChart();

  // 9. Gallery Filtering Logic
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active buttons styling
        filterBtns.forEach(b => {
          b.classList.remove('active', 'border-opacity-100', 'text-yellow-400');
          b.classList.add('opacity-60');
        });
        btn.classList.add('active', 'text-yellow-400');
        btn.classList.remove('opacity-60');
        
        const filterValue = btn.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
          if (filterValue === 'all') {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
          } else {
            const categories = item.getAttribute('data-category').split(' ');
            if (categories.includes(filterValue)) {
              item.style.display = 'block';
              setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.8)';
              setTimeout(() => { item.style.display = 'none'; }, 300);
            }
          }
        });
      });
    });
  }

  // 10. AOS Animation trigger setup
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
  }
});
