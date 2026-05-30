/* ============================================================
   App — i18n switching, rendering, motion, interactions
   ============================================================ */
(function(){
  "use strict";
  var DEFAULT = "en";
  /* ===== 改品牌名只改这一处（单一可改源） ===== */
  var BRAND={main:"Through",dim:"line",sep:""};   /* 改名只改这里：{main,dim,sep}，sep 是两段之间的连接符 */
  var BRANDFULL=BRAND.main+(BRAND.dim?(BRAND.sep!=null?BRAND.sep:" ")+BRAND.dim:"");
  function applyBrand(){
    var html=BRAND.main+(BRAND.dim?'<span class="brand-dim">'+BRAND.dim+'</span>':'');
    document.querySelectorAll(".brand-name").forEach(function(n){n.innerHTML=html;});
  }

  /* minimal line icons, index-matched to caps[] */
  var ICONS = [
    '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v5c0 1.7 3.1 3 7 3 1.2 0 2.3-.1 3.3-.4"/><path d="M18 17.5l1.4 1.4M21 21l-1.6-1.6"/><circle cx="17.5" cy="16.5" r="2.2"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="5" cy="6" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="12" r="2.2"/><path d="M7.2 6.6C12 7.5 12 11 16.8 11.7M7.2 17.4C12 16.5 12 13 16.8 12.3"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 5h16v10H9l-4 4v-4H4z"/><path d="M8 9v2M11.5 8v4M15 9.5v1"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 20V4M20 20H4"/><rect x="7" y="12" width="2.6" height="5"/><rect x="12" y="8" width="2.6" height="9"/><rect x="17" y="5" width="2.6" height="12"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"/><path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6z"/><path d="M9 12l2.2 2.2L15.5 10"/></svg>'
  ];

  /* marquee 词按语言从 i18n 取（见 L.marquee） */

  function pick(lang){
    if(lang && lang.indexOf("zh")===0) return "zh";
    if(I18N[lang]) return lang;
    var s=(lang||"").slice(0,2);
    return I18N[s]?s:DEFAULT;
  }

  function el(html){var t=document.createElement("template");t.innerHTML=html.trim();return t.content.firstChild;}

  function renderCaps(L){
    var g=document.getElementById("capGrid");g.innerHTML="";
    L.caps.forEach(function(c,i){
      var n=("0"+(i+1)).slice(-2);
      g.appendChild(el(
        '<div class="cap reveal"><span class="cap-no">'+n+'</span>'+
        '<div class="cap-icon">'+ICONS[i]+'</div>'+
        '<h3>'+c.t+'</h3><p>'+c.d+'</p></div>'));
    });
  }

  function renderWorks(lang,L){
    var w=document.getElementById("workList");w.innerHTML="";
    PROJECTS.forEach(function(p,i){
      var d=p[lang]||p.en, n=("0"+(i+1)).slice(-2);
      var tags=p.stack.map(function(s){return '<span class="tag">'+s+'</span>';}).join("");
      var hls=d.hl.map(function(h){return '<li>'+h+'</li>';}).join("");
      w.appendChild(el(
        '<article class="work reveal">'+
          '<div class="work-idx">'+n+'</div>'+
          '<div class="work-main">'+
            '<span class="work-sector">'+d.sector+'</span>'+
            '<h3>'+d.title+'</h3>'+
            '<p class="work-summary">'+d.summary+'</p>'+
          '</div>'+
          '<div class="work-aside">'+
            '<div class="work-meta"><span><b>'+d.role+'</b></span><span>'+p.year+'</span></div>'+
            '<div class="work-stack">'+tags+'</div>'+
            '<ul class="work-hl">'+hls+'</ul>'+
          '</div>'+
        '</article>'));
    });
  }

  function renderApproach(L){
    var g=document.getElementById("apprGrid");g.innerHTML="";
    L.appr.forEach(function(a){
      g.appendChild(el('<div class="appr reveal"><div class="appr-k">'+a.k+'</div><h3>'+a.t+'</h3><p>'+a.d+'</p></div>'));
    });
    var ps=document.getElementById("processSteps");ps.innerHTML="";
    L.process.forEach(function(s,i){
      ps.appendChild(el('<div class="pstep reveal"><span class="pstep-no"></span><span>'+("0"+(i+1)).slice(-2)+'</span><h4>'+s.t+'</h4><p>'+s.d+'</p></div>'));
    });
  }

  function renderFeatured(lang,L){
    var f=window.FEATURED, c=document.getElementById("featured");
    if(!f||!c)return;
    var d=f[lang]||f.en;
    var tags=(d.tags||f.stack).map(function(s){return '<span class="tag">'+s+'</span>';}).join("");
    var hls=d.hl.map(function(h){return '<li>'+h+'</li>';}).join("");
    var impact=d.impact.map(function(x){return '<div class="fi"><div class="fi-n">'+x.n+'</div><div class="fi-l">'+x.l+'</div></div>';}).join("");
    var shots=f.images.map(function(im,i){
      var cap=im.cap[lang]||im.cap.en;
      return '<div class="shot" data-shot="'+i+'" tabindex="0" role="button" aria-label="'+cap+'"><div class="shot-imgwrap"><img src="'+im.src+'" alt="'+cap+'" loading="lazy"><span class="shot-expand">⤢</span></div><div class="shot-cap">'+cap+'</div></div>';
    }).join("");
    c.innerHTML='<span class="featured-flag">'+(L.flagship||"FLAGSHIP")+'</span>'+
      '<span class="work-sector">'+d.sector+'</span>'+
      '<h3 class="featured-title">'+d.title+'</h3>'+
      '<p class="featured-summary">'+d.summary+'</p>'+
      '<div class="featured-impact">'+impact+'</div>'+
      '<div class="featured-stack">'+tags+'</div>'+
      '<ul class="featured-hl">'+hls+'</ul>'+
      '<div class="featured-gallery">'+shots+'</div>'+
      '<p class="featured-redact">'+(L.redact||"")+'</p>';
    c.classList.add("reveal");
    c.querySelectorAll(".shot").forEach(function(s){
      var open=function(){openLightbox(f.images[+s.getAttribute("data-shot")],lang);};
      s.addEventListener("click",open);
      s.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
    });
  }

  var lastFocused=null;
  function openDialog(node,focusTarget){
    lastFocused=document.activeElement;
    node.hidden=false;document.body.style.overflow="hidden";
    if(focusTarget)try{focusTarget.focus();}catch(e){}
  }
  function closeDialog(node){
    node.hidden=true;document.body.style.overflow="";
    if(lastFocused&&lastFocused.focus){try{lastFocused.focus();}catch(e){}lastFocused=null;}
  }
  function openLightbox(img,lang){
    var lb=document.getElementById("lightbox");if(!lb)return;
    document.getElementById("lbImg").src=img.src;
    document.getElementById("lbCap").textContent=img.cap[lang]||img.cap.en;
    openDialog(lb,document.getElementById("lbClose"));
  }
  function renderTrust(L){
    var r=document.getElementById("trustRow");if(!r||!L.trust)return;r.innerHTML="";
    L.trust.forEach(function(t){
      r.appendChild(el('<div class="trust-item reveal"><div class="trust-k mono">'+t.k+'</div><h4>'+t.t+'</h4><p>'+t.d+'</p></div>'));
    });
  }

  function renderMarquee(L){
    var m=document.getElementById("marquee");if(!m)return;
    var words=(L.marquee&&L.marquee.length)?L.marquee:[];
    var items=words.join("</span><span>");
    m.innerHTML='<span>'+items+'</span><span>'+items+'</span>';
  }

  function applyStatic(L){
    document.querySelectorAll("[data-i18n]").forEach(function(node){
      var k=node.getAttribute("data-i18n");
      if(L[k]!=null) node.innerHTML=L[k];
    });
    var md=document.querySelector('meta[name="description"]');
    if(md&&L.meta_desc) md.setAttribute("content",L.meta_desc);
  }

  function observeReveal(){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});
    },{threshold:.12,rootMargin:"0px 0px -8% 0px"});
    document.querySelectorAll(".reveal").forEach(function(n){io.observe(n);});
  }

  function setLang(lang){
    var l=pick(lang);
    var L=I18N[l];
    document.documentElement.lang=l;
    try{localStorage.setItem("nl_lang",l);}catch(e){}
    document.querySelectorAll(".lang-btn").forEach(function(b){
      b.classList.toggle("active", b.getAttribute("data-lang")===l);
    });
    // title
    var titles={en:BRANDFULL+" — AI Automation & Custom Systems",zh:BRANDFULL+" — AI 自动化与定制系统",ja:BRANDFULL+" — AI 自動化・カスタムシステム",ko:BRANDFULL+" — AI 자동화 & 맞춤형 시스템"};
    document.title=titles[l]||titles.en;
    applyStatic(L);
    renderMarquee(L);
    renderTrust(L);
    renderCaps(L);
    renderFeatured(l,L);
    renderApproach(L);
    observeReveal();
  }

  function init(){
    applyBrand();
    // initial language: URL ?lang= > saved > browser > default
    var url=new URLSearchParams(location.search).get("lang");
    var saved;try{saved=localStorage.getItem("nl_lang");}catch(e){}
    setLang(url||saved||navigator.language||DEFAULT);

    document.querySelectorAll(".lang-btn").forEach(function(b){
      b.addEventListener("click",function(){setLang(b.getAttribute("data-lang"));});
    });

    // nav scroll state
    var nav=document.getElementById("nav");
    var onScroll=function(){nav.classList.toggle("scrolled",window.scrollY>20);};
    onScroll();window.addEventListener("scroll",onScroll,{passive:true});

    // mobile menu
    var tog=document.getElementById("navToggle");
    if(tog){tog.addEventListener("click",function(){var open=nav.classList.toggle("nav-open");tog.setAttribute("aria-expanded",open?"true":"false");});}
    document.querySelectorAll(".nav-links a").forEach(function(a){
      a.addEventListener("click",function(){nav.classList.remove("nav-open");if(tog)tog.setAttribute("aria-expanded","false");});
    });

    // wechat modal
    var qrModal=document.getElementById("qrModal");
    function curL(){return I18N[document.documentElement.lang]||I18N.en;}
    function openQR(src,label){
      var img=document.getElementById("qrImg");img.src=src;img.alt=label;
      document.getElementById("qrLabel").textContent=label;
      openDialog(qrModal,document.getElementById("qrClose"));
    }
    document.getElementById("wechatBtn").addEventListener("click",function(){openQR("assets/wechat-qr.png",curL().wechat_scan);});
    document.getElementById("telegramBtn").addEventListener("click",function(){openQR("assets/telegram-qr.png",curL().telegram_scan);});
    document.getElementById("qrClose").addEventListener("click",function(){closeDialog(qrModal);});
    qrModal.addEventListener("click",function(e){if(e.target===qrModal)closeDialog(qrModal);});
    // lightbox
    var lb=document.getElementById("lightbox");
    document.getElementById("lbClose").addEventListener("click",function(){closeDialog(lb);});
    lb.addEventListener("click",function(e){if(e.target===lb)closeDialog(lb);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"){if(!qrModal.hidden)closeDialog(qrModal);if(!lb.hidden)closeDialog(lb);}});

    var yr=(new Date()).getFullYear()||2026;
    document.getElementById("footYear").textContent="© "+yr+" "+BRANDFULL;
  }

  if(document.readyState!=="loading")init();else document.addEventListener("DOMContentLoaded",init);
})();
