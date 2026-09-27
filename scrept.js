
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.innerHTML = mobileMenu.classList.contains('hidden')
        ? '<i class="fa-solid fa-bars"></i>'
        : '<i class="fa-solid fa-xmark"></i>';
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });

    //  حالت تاریک / روشن 
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = document.getElementById('themeIcon');

    function updateThemeIcon() {
      const dark = document.documentElement.classList.contains('dark');
      themeIcon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    updateThemeIcon();

    themeBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');

      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }

      updateThemeIcon();
    });

    //  انیمیشن تایپ 
    const typingElement = document.getElementById('typing');
    const words = [
      'توسعه‌دهنده وب',
      'دانشجوی علوم کامپیوتر',
      'علاقه‌مند به برنامه‌نویسی',
      'طراح رابط کاربری'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
      const word = words[wordIndex];

      typingElement.textContent = deleting
        ? word.substring(0, charIndex--)
        : word.substring(0, charIndex++);

      let speed = deleting ? 60 : 100;

      if (!deleting && charIndex > word.length) {
        deleting = true;
        speed = 1300;
      }

      if (deleting && charIndex < 0) {
        deleting = false;
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();

    //پروژه های من
    const projects = [
      { title: ' سایت شخصی', text: '  یک سایت شخصی است که با زبان HTML,CSS  جور شده است', image: 'Imegas/p1.png' },
      { title: ' دیتابیس باشگاه جیم', text: ' یک دیتابیس مدیریتی باشگاه جیم است که با زبان برنامه نویسی Java ,MySql  ساخته شده  ', image: 'Imegas/p2.png' },
      { title: 'دیتابیس موتر فروشی', text: ' یک دیتابیس مدیریتی موترفروشی است که با زبان برنامه نویسی Java ,MySql  ساخته شده ', image: 'Imegas/p3.png' },
      { title: ' دیتابیس کتابخانه', text: 'یک دیتابیس مدیریتی کتابخانه است که با زبان برنامه نویسی Java ,MySql  ساخته شده است. ', image: 'Imegas/p4.png' },
      { title: ' سایت شخصی', text: 'سایت سخصی است که با زبان های HTML,CSS,JS  ساخته شده کاملا ریسبانسیب', image: 'Imegas/p5.png' },
      { title: ' مدیدیت سفر', text: 'سایت است مه می توانیم سفر های خود را به صورت درست مدیریت کرد وبا زبان های HTML,CSS,JS  ساخته شده است ', image: 'Imegas/p6.png' },
      { title: 'سایت قهوه خانه ', text: 'سایت برای یک قهوه خانه است که با زبان های  HTML,CSS,JS  ساخته  شده است', image: 'Imegas/p7.png' },
      { title: ' سایت شخصی', text: 'سایت سخصی است که با زبان های HTML,CSS,JS  ساخته شده کاملا ریسبانسیب ', image: 'Imegas/p8.png' },
      { title: 'لوگن پیچ', text: ' یک لوکن پیچ بسیار عالی است که با HTML,CSS,JS   جور شده است', image: 'Imegas/p9.png' },
      { title: ' ماشین حساب', text: 'یک ماشین بسیار عالی است که با HTML,CSS,JS   جور شده است  ', image: 'Imegas/p10.png' },
      { title: ' صفحه لوگن', text: 'HTML,CSS', image: 'Imegas/p11.png' },
      { title: ' داشبورد', text: 'پروژه نهایی', image: 'Imegas/p12.jpeg' }
    ];

    const projectsGrid = document.getElementById('projectsGrid');

    projectsGrid.innerHTML = projects.map((project, index) => `
      <article class="reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950">
        <div class="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img src="${project.image}"
               alt="${project.title}"
               class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
               onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">
          <div class="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white">
            <div class="text-center">
              <i class="fa-solid ${project.icon} text-5xl"></i>
              <p class="mt-3 font-bold">عکس پروژه را اضافه کنید</p>
            </div>
          </div>
          <div class="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            ${String(index + 1).padStart(2, '0')}
          </div>
        </div>

        <div class="p-6">
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-xl font-black">${project.title}</h3>
            <span class="text-indigo-600"><i class="fa-solid ${project.icon}"></i></span>
          </div>
          <p class="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">${project.text}</p>
          <button class="mt-5 font-bold text-indigo-600 transition hover:text-indigo-800">
            مشاهده پروژه <i class="fa-solid fa-arrow-left mr-1"></i>
          </button>
        </div>
      </article>
    `).join('');

    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    document.querySelectorAll('#projectsGrid .reveal').forEach(el => observer.observe(el));

    
    const particles = document.getElementById('particles');

    for (let i = 0; i < 28; i++) {
      const dot = document.createElement('span');
      const size = Math.floor(Math.random() * 5) + 3;

      dot.className = 'absolute rounded-full bg-indigo-500/20';
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      dot.style.right = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';

      particles.appendChild(dot);

      dot.animate(
        [
          { transform: 'translate(0, 0)', opacity: 0.15 },
          { transform: `translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px)`, opacity: 0.7 },
          { transform: 'translate(0, 0)', opacity: 0.15 }
        ],
        {
          duration: 3500 + Math.random() * 4500,
          iterations: Infinity,
          direction: 'alternate',
          easing: 'ease-in-out'
        }
      );
    }

    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
