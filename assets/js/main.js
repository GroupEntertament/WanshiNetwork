/* =========================================================
   海口玩石网络科技 · 官网交互
   语言切换 / 移动菜单 / 滚动淡入 / Hero 粒子特效
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 语言切换（持久化） ---------- */
  var LANG_KEY = 'wanshi-lang';
  var html = document.documentElement;

  function applyLang(lang) {
    if (lang === 'en') {
      html.classList.add('lang-en');
      html.setAttribute('lang', 'en');
    } else {
      html.classList.remove('lang-en');
      html.setAttribute('lang', 'zh-CN');
    }
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (saved) applyLang(saved);

  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(html.classList.contains('lang-en') ? 'zh' : 'en');
    });
  }

  /* ---------- 导航：滚动阴影 ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 移动端菜单 ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  /* ---------- 滚动淡入（IntersectionObserver） ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Hero 粒子特效（轻量 Canvas 星尘） ---------- */
  var canvas = document.getElementById('fx');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var COUNT = 70;
    var hero = canvas.parentElement;

    function resize() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }
    function spawn() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.35 + 0.1),
        hue: Math.random() < 0.5 ? '139,92,246' : '34,211,238',
        a: Math.random() * 0.5 + 0.15
      };
    }
    function init() {
      resize();
      particles = [];
      for (var i = 0; i < COUNT; i++) particles.push(spawn());
    }
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) particles[i] = spawn();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.hue + ',' + p.a + ')';
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    window.addEventListener('resize', resize);
    /* 尊重系统减少动效偏好 */
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    if (!reduce) { init(); tick(); }
  }

  /* ---------- 年份 ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
