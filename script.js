(function(){
  "use strict";

  /* =========================================================
     Translations
     ========================================================= */
  var translations = {
    fr: {
      page_title: "Ets GCS — General Commerce & Services | Nouakchott, Mauritanie",
      skip_link: "Aller au contenu",
      brand_sub: "General Commerce & Services",
      nav_apropos: "À propos",
      nav_domaines: "Domaines",
      nav_atouts: "Atouts",
      nav_engagements: "Engagements",
      nav_contact: "Contact",
      nav_open: "Ouvrir le menu",
      nav_close: "Fermer le menu",

      hero_eyebrow: "Nouakchott · Mauritanie",
      hero_title: "Fournitures, énergie et innovation éducative — un seul partenaire.",
      hero_lead: "Ets GCS accompagne institutions publiques, entreprises privées, ONG et projets de développement avec des solutions fiables, adaptées au contexte local et livrées dans les délais.",
      hero_btn_devis: "Demander un devis",
      hero_btn_domaines: "Voir les domaines d’activités",

      doc_label: "Fiche établissement",
      doc_dt_raison: "Raison sociale",
      doc_dt_domaine: "Domaine",
      doc_dd_domaine: "Commerce général & solutions techniques intégrées",
      doc_dt_zone: "Zone d’intervention",
      doc_dd_zone: "Nouakchott — Mauritanie",
      doc_dt_clients: "Clients types",
      doc_dd_clients: "Institutions publiques · Entreprises · ONG · Projets de développement",

      apropos_eyebrow: "À propos",
      apropos_title: "Un établissement multiservices, une approche orientée résultats.",
      apropos_lead: "Ets GCS (General Commerce & Services) est un établissement multiservices spécialisé dans la fourniture de biens, d’équipements, de solutions techniques intégrées et de services adaptés aux besoins des institutions publiques, des entreprises privées, des ONG et des projets de développement. Grâce à une approche professionnelle, flexible et orientée vers la satisfaction du client, Ets GCS s’engage à fournir des solutions fiables répondant aux standards techniques, aux exigences des marchés et aux besoins spécifiques de chaque partenaire.",

      vision_tag: "Vision",
      vision_text: "Devenir un acteur de référence en Mauritanie dans les domaines de la fourniture, des solutions techniques, de l’innovation éducative et des services multisectoriels, en proposant des solutions fiables, durables et compétitives.",
      mission_tag: "Mission",
      mission_1: "Fournir des produits et services de qualité répondant aux besoins des clients",
      mission_2: "Contribuer au développement de l’éducation, de la technologie et des infrastructures",
      mission_3: "Respecter les délais et les engagements contractuels",
      mission_4: "Garantir la satisfaction et la fidélisation des partenaires",
      mission_5: "Promouvoir l’innovation auprès des jeunes générations",

      domaines_eyebrow: "Domaines d’activités",
      domaines_title: "Cinq domaines, une seule porte d’entrée.",

      dom1_title: "Fournitures & Équipements",
      dom1_1: "Matériel de bureau",
      dom1_2: "Consommables informatiques",
      dom1_3: "Équipements informatiques et accessoires",
      dom1_4: "Mobilier de bureau et aménagements",
      dom1_5: "Matériel électrique et solaire",
      dom1_6: "Équipements scolaires et pédagogiques",

      dom2_title: "Sécurité & Produits d’entretien",
      dom2_1: "Équipements de Protection Individuelle (EPI)",
      dom2_2: "Produits d’hygiène et d’entretien",
      dom2_3: "Matériel de nettoyage professionnel",
      dom2_4: "Équipements de sécurité et de prévention",

      dom3_title: "Solutions Énergétiques",
      dom3_1: "Fourniture et installation de systèmes solaires",
      dom3_2: "Éclairage solaire",
      dom3_3: "Solutions de stockage d’énergie",
      dom3_4: "Équipements électriques et électrotechniques",

      dom4_title: "Robotique Éducative & Innovation",
      dom4_1: "Kits de robotique éducative",
      dom4_2: "Robots programmables pour l’enseignement",
      dom4_3: "Programmes STEM",
      dom4_4: "Formation des enseignants",
      dom4_5: "Accompagnement pédagogique des établissements",
      dom4_6: "Ateliers de programmation et d’innovation",
      dom4_7: "Équipements compatibles micro:bit",

      dom5_title: "Services Divers",
      dom5_1: "Approvisionnement et logistique",
      dom5_2: "Fournitures diverses selon les besoins du client",
      dom5_3: "Assistance technique et support",
      dom5_4: "Gestion et suivi de projets",

      atouts_eyebrow: "Nos atouts",
      atouts_title: "Pourquoi travailler avec Ets GCS.",
      atout_1: "Expérience multisectorielle",
      atout_2: "Réactivité et flexibilité",
      atout_3: "Réseau de fournisseurs fiables à l’échelle internationale",
      atout_4: "Respect des normes techniques et de qualité",
      atout_5: "Capacité d’adaptation aux projets publics et privés",
      atout_6: "Expertise dans les solutions éducatives et technologiques",
      atout_7: "Accompagnement personnalisé des clients",

      engagements_eyebrow: "Nos engagements",
      engagements_title: "Ce que nous garantissons à chaque partenaire.",
      art_1: "Assurer la qualité des prestations et des produits fournis.",
      art_2: "Respecter les délais d’exécution.",
      art_3: "Offrir des solutions adaptées au contexte local.",
      art_4: "Maintenir une relation de confiance avec ses partenaires.",
      art_5: "Favoriser l’innovation et le transfert de compétences.",
      art_6: "Garantir un service après-vente efficace et réactif.",

      contact_eyebrow: "Contact",
      contact_title: "Parlons de votre projet.",
      contact_lead: "Une question, un appel d’offres, une demande de devis ? Notre équipe répond rapidement.",
      coord_tel: "Téléphone",
      coord_email: "E-mail",
      coord_adresse: "Adresse",
      coord_adresse_val: "Nouakchott — Mauritanie",

      form_nom: "Nom complet",
      form_email: "E-mail",
      form_tel: "Téléphone",
      form_optional: "(optionnel)",
      form_message: "Message",
      form_submit: "Envoyer la demande",
      err_nom: "Merci d’indiquer votre nom.",
      err_email_required: "Merci d’indiquer votre e-mail.",
      err_email_invalid: "Format d’e-mail invalide.",
      err_message: "Merci de décrire votre demande.",
      status_error: "Merci de corriger les champs indiqués.",
      status_success: "Merci, {nom}. Votre logiciel de messagerie va s’ouvrir pour finaliser l’envoi à etsgcs@gmail.com.",
      mail_subject: "Demande via le site — {nom}",
      mail_body_nom: "Nom",
      mail_body_email: "E-mail",
      mail_body_tel: "Téléphone",
      mail_body_message: "Message",

      footer_tagline: "Fourniture · Énergie · Éducation · Services",
      footer_rights: "Ets GCS. Tous droits réservés."
    },

    ar: {
      page_title: "إتس جي سي إس — General Commerce & Services | نواكشوط، موريتانيا",
      skip_link: "الانتقال إلى المحتوى",
      brand_sub: "التجارة العامة والخدمات",
      nav_apropos: "من نحن",
      nav_domaines: "مجالات النشاط",
      nav_atouts: "نقاط القوة",
      nav_engagements: "التزاماتنا",
      nav_contact: "اتصل بنا",
      nav_open: "فتح القائمة",
      nav_close: "إغلاق القائمة",

      hero_eyebrow: "نواكشوط · موريتانيا",
      hero_title: "التوريدات، الطاقة والابتكار التعليمي — شريك واحد لكل احتياجاتكم.",
      hero_lead: "ترافق مؤسسة Ets GCS الإدارات العمومية والمؤسسات الخاصة والمنظمات غير الحكومية ومشاريع التنمية بحلول موثوقة، ملائمة للسياق المحلي، وتُسلَّم في الآجال المحددة.",
      hero_btn_devis: "اطلب عرض سعر",
      hero_btn_domaines: "اكتشف مجالات نشاطنا",

      doc_label: "بطاقة المؤسسة",
      doc_dt_raison: "الاسم التجاري",
      doc_dt_domaine: "المجال",
      doc_dd_domaine: "التجارة العامة وحلول تقنية متكاملة",
      doc_dt_zone: "منطقة التدخل",
      doc_dd_zone: "نواكشوط — موريتانيا",
      doc_dt_clients: "نوعية العملاء",
      doc_dd_clients: "مؤسسات عمومية · شركات خاصة · منظمات غير حكومية · مشاريع تنموية",

      apropos_eyebrow: "من نحن",
      apropos_title: "مؤسسة متعددة الخدمات، بمقاربة تركز على النتائج.",
      apropos_lead: "إتس جي سي إس (General Commerce & Services) مؤسسة متعددة الخدمات متخصصة في توريد السلع والمعدات وتقديم حلول تقنية متكاملة وخدمات ملائمة لاحتياجات الإدارات العمومية والمؤسسات الخاصة والمنظمات غير الحكومية ومشاريع التنمية. وبفضل مقاربة مهنية، مرنة وموجهة نحو رضا العميل، تلتزم Ets GCS بتقديم حلول موثوقة تستجيب للمعايير التقنية ومتطلبات الأسواق والاحتياجات الخاصة بكل شريك.",

      vision_tag: "الرؤية",
      vision_text: "أن تصبح فاعلاً مرجعياً في موريتانيا في مجالات التوريد والحلول التقنية والابتكار التعليمي والخدمات متعددة القطاعات، من خلال تقديم حلول موثوقة ومستدامة وتنافسية.",
      mission_tag: "المهمة",
      mission_1: "توفير منتجات وخدمات ذات جودة تلبي احتياجات العملاء",
      mission_2: "المساهمة في تطوير قطاعات التعليم والتكنولوجيا والبنى التحتية",
      mission_3: "احترام الآجال والالتزامات التعاقدية",
      mission_4: "ضمان رضا الشركاء واستمرارية العلاقة معهم",
      mission_5: "تشجيع الابتكار لدى الأجيال الشابة",

      domaines_eyebrow: "مجالات النشاط",
      domaines_title: "خمسة مجالات، وباب واحد للدخول.",

      dom1_title: "التوريدات والمعدات",
      dom1_1: "لوازم مكتبية",
      dom1_2: "مستلزمات معلوماتية استهلاكية",
      dom1_3: "معدات معلوماتية وملحقاتها",
      dom1_4: "أثاث مكتبي وتجهيزات",
      dom1_5: "معدات كهربائية وشمسية",
      dom1_6: "معدات مدرسية وتربوية",

      dom2_title: "الأمن ومواد الصيانة",
      dom2_1: "معدات الحماية الفردية",
      dom2_2: "مواد النظافة والصيانة",
      dom2_3: "معدات تنظيف احترافية",
      dom2_4: "معدات الأمن والوقاية",

      dom3_title: "الحلول الطاقية",
      dom3_1: "توريد وتركيب أنظمة الطاقة الشمسية",
      dom3_2: "الإنارة الشمسية",
      dom3_3: "حلول تخزين الطاقة",
      dom3_4: "معدات كهربائية وكهروتقنية",

      dom4_title: "الروبوتات التعليمية والابتكار",
      dom4_1: "عُدد الروبوتات التعليمية",
      dom4_2: "روبوتات قابلة للبرمجة لأغراض التعليم",
      dom4_3: "برامج STEM (العلوم والتكنولوجيا والهندسة والرياضيات)",
      dom4_4: "تكوين المعلمين",
      dom4_5: "مرافقة بيداغوجية للمؤسسات التعليمية",
      dom4_6: "ورشات في البرمجة والابتكار",
      dom4_7: "معدات متوافقة مع منصة micro:bit",

      dom5_title: "خدمات متنوعة",
      dom5_1: "التموين واللوجستيك",
      dom5_2: "توريدات متنوعة حسب احتياجات العميل",
      dom5_3: "المساعدة التقنية والدعم",
      dom5_4: "إدارة ومتابعة المشاريع",

      atouts_eyebrow: "نقاط قوتنا",
      atouts_title: "لماذا تختارون العمل مع Ets GCS.",
      atout_1: "خبرة في قطاعات متعددة",
      atout_2: "سرعة الاستجابة والمرونة",
      atout_3: "شبكة موردين موثوقين على الصعيد الدولي",
      atout_4: "احترام المعايير التقنية والجودة",
      atout_5: "القدرة على التكيف مع المشاريع العمومية والخاصة",
      atout_6: "خبرة في الحلول التعليمية والتكنولوجية",
      atout_7: "مرافقة شخصية للعملاء",

      engagements_eyebrow: "التزاماتنا",
      engagements_title: "ما نضمنه لكل شريك.",
      art_1: "ضمان جودة الخدمات والمنتجات الموردة.",
      art_2: "احترام آجال التنفيذ.",
      art_3: "تقديم حلول ملائمة للسياق المحلي.",
      art_4: "الحفاظ على علاقة ثقة مع الشركاء.",
      art_5: "تشجيع الابتكار ونقل الخبرات.",
      art_6: "ضمان خدمة ما بعد البيع فعالة وسريعة الاستجابة.",

      contact_eyebrow: "اتصل بنا",
      contact_title: "لنتحدث عن مشروعكم.",
      contact_lead: "لديكم سؤال، أو استشارة، أو طلب عرض سعر؟ فريقنا يرد عليكم بسرعة.",
      coord_tel: "الهاتف",
      coord_email: "البريد الإلكتروني",
      coord_adresse: "العنوان",
      coord_adresse_val: "نواكشوط — موريتانيا",

      form_nom: "الاسم الكامل",
      form_email: "البريد الإلكتروني",
      form_tel: "الهاتف",
      form_optional: "(اختياري)",
      form_message: "الرسالة",
      form_submit: "إرسال الطلب",
      err_nom: "يرجى إدخال اسمكم.",
      err_email_required: "يرجى إدخال بريدكم الإلكتروني.",
      err_email_invalid: "صيغة البريد الإلكتروني غير صحيحة.",
      err_message: "يرجى وصف طلبكم.",
      status_error: "يرجى تصحيح الحقول المشار إليها.",
      status_success: "شكراً {nom}. سيُفتح برنامج البريد الإلكتروني لإتمام الإرسال إلى etsgcs@gmail.com.",
      mail_subject: "طلب عبر الموقع — {nom}",
      mail_body_nom: "الاسم",
      mail_body_email: "البريد الإلكتروني",
      mail_body_tel: "الهاتف",
      mail_body_message: "الرسالة",

      footer_tagline: "التوريد · الطاقة · التعليم · الخدمات",
      footer_rights: "Ets GCS. جميع الحقوق محفوظة."
    }
  };

  var STORAGE_KEY = "etsgcs-lang";
  var currentLang = "fr";

  function applyLanguage(lang){
    if(!translations[lang]) lang = "fr";
    currentLang = lang;

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(translations[lang][key] !== undefined){
        el.textContent = translations[lang][key];
      }
    });

    var titleEl = document.getElementById("pageTitle");
    if(titleEl){ titleEl.textContent = translations[lang].page_title; document.title = translations[lang].page_title; }

    var langLabel = document.getElementById("langToggleLabel");
    if(langLabel){ langLabel.textContent = lang === "ar" ? "Français" : "العربية"; }

    var langBtn = document.getElementById("langToggle");
    if(langBtn){ langBtn.setAttribute("aria-label", lang === "ar" ? "Changer de langue vers le français" : "تغيير اللغة إلى العربية"); }

    var navToggle = document.getElementById("navToggle");
    if(navToggle){
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-label", translations[lang][isOpen ? "nav_close" : "nav_open"]);
    }

    try{ window.localStorage.setItem(STORAGE_KEY, lang); }catch(e){ /* storage unavailable */ }

    // Clear any inline field errors and status message on language switch
    ["nom","email","message"].forEach(function(id){
      var el = document.getElementById("err-" + id);
      if(el){ el.textContent = ""; }
    });
    var statusEl = document.getElementById("formStatus");
    if(statusEl){ statusEl.textContent = ""; statusEl.className = "form-status"; }
  }

  function initLanguage(){
    var saved = null;
    try{ saved = window.localStorage.getItem(STORAGE_KEY); }catch(e){ /* storage unavailable */ }
    var browserLang = (navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "fr";
    applyLanguage(saved || browserLang);
  }

  var langToggleBtn = document.getElementById("langToggle");
  if(langToggleBtn){
    langToggleBtn.addEventListener("click", function(){
      applyLanguage(currentLang === "ar" ? "fr" : "ar");
    });
  }

  initLanguage();

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if(navToggle && primaryNav){
    navToggle.addEventListener("click", function(){
      var isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", translations[currentLang][isOpen ? "nav_close" : "nav_open"]);
    });

    primaryNav.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", function(){
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", translations[currentLang].nav_open);
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if("IntersectionObserver" in window && revealEls.length){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(function(el){ observer.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("is-visible"); });
  }

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById("contactForm");
  var statusEl = document.getElementById("formStatus");

  function t(key){ return translations[currentLang][key] || translations.fr[key] || ""; }

  function setError(fieldId, message){
    var errEl = document.getElementById("err-" + fieldId);
    if(errEl){ errEl.textContent = message || ""; }
  }

  function isValidEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();

      var nom = document.getElementById("nom");
      var email = document.getElementById("email");
      var message = document.getElementById("message");

      var valid = true;

      if(!nom.value.trim()){
        setError("nom", t("err_nom"));
        valid = false;
      } else {
        setError("nom", "");
      }

      if(!email.value.trim()){
        setError("email", t("err_email_required"));
        valid = false;
      } else if(!isValidEmail(email.value.trim())){
        setError("email", t("err_email_invalid"));
        valid = false;
      } else {
        setError("email", "");
      }

      if(!message.value.trim()){
        setError("message", t("err_message"));
        valid = false;
      } else {
        setError("message", "");
      }

      if(!valid){
        if(statusEl){
          statusEl.textContent = t("status_error");
          statusEl.className = "form-status error";
        }
        return;
      }

      /* No backend is connected: prepare a mailto fallback so the
         message reaches Ets GCS, and confirm to the visitor. */
      var subject = encodeURIComponent(t("mail_subject").replace("{nom}", nom.value.trim()));
      var body = encodeURIComponent(
        t("mail_body_nom") + " : " + nom.value.trim() +
        "\n" + t("mail_body_email") + " : " + email.value.trim() +
        "\n" + t("mail_body_tel") + " : " + (document.getElementById("telephone").value.trim() || "—") +
        "\n\n" + t("mail_body_message") + " :\n" + message.value.trim()
      );

      if(statusEl){
        statusEl.textContent = t("status_success").replace("{nom}", nom.value.trim());
        statusEl.className = "form-status success";
      }

      window.location.href = "mailto:etsgcs@gmail.com?subject=" + subject + "&body=" + body;
      form.reset();
    });
  }

})();
