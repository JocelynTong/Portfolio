// 初始化 Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
});

// 初始化 AOS
AOS.init({
    duration: 1000,
    once: true
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 回到顶部按钮
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// 初始化 fullPage
new fullpage('#fullpage', {
    autoScrolling: true,
    anchors: ['home', 'works', 'about'],
    menu: '#menu',
    css3: true,
    scrollingSpeed: 600,
    easingcss3: 'cubic-bezier(0.83, 0, 0.17, 1)',
    fitToSection: true,
    scrollBar: true,
    scrollOverflow: false,
    bigSectionsDestination: 'top',
    touchSensitivity: 15,
    continuousVertical: false,
    onLeave: function(origin, destination, direction) {
        if(origin.index === 1 || destination.index === 1) {
            document.body.classList.add('is-changing');
            setTimeout(function() {
                document.body.classList.remove('is-changing');
            }, 600);
        }
    },
    afterLoad: function(origin, destination, direction) {
        if(destination.index === 0) {
            document.querySelector('.navbar').classList.remove('scrolled');
        } else {
            document.querySelector('.navbar').classList.add('scrolled');
        }
    }
});

// 简化 AOS 初始化
AOS.init({
    once: true,
    disable: 'mobile'
});

// 初始化所有的 popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        container: 'body'
    })
});

// 移动端导航菜单自动关闭
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            // 获取 Bootstrap 的 collapse 实例并调用 hide 方法
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });
});

// 作品集卡片点击处理
document.querySelectorAll('.portfolio-content').forEach(card => {
    card.addEventListener('click', (e) => {
        // 如果点击的是按钮，不做处理
        if (e.target.closest('.btn-view-project')) {
            return;
        }
        // 获取当前卡片中的链接地址
        const link = card.querySelector('.btn-view-project').getAttribute('href');
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    });
}); 