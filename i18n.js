/* GlobalBizz Solutions — shared NL/EN language layer.
   Dutch is the default. The English text lives in the HTML itself (so it stays the
   source of truth); this file holds the Dutch strings plus both languages for text
   the page scripts generate (enquiry flow). Choice is remembered in localStorage. */
(function(){
  var STORE_KEY = 'gb_lang';
  var DEFAULT_LANG = 'nl';
  var SUPPORTED = ['nl', 'en'];

  var T = { nl: {}, en: {} };

  /* ---------- Dutch: static page text (English stays in the HTML) ---------- */
  var nl = T.nl;

  // shared
  nl.nav_home = 'Home';
  nl.nav_about = 'Over ons';
  nl.nav_gallery = 'Galerij';
  nl.nav_contact = 'Contact';
  nl.nav_cta = 'Aanvraag indienen';
  nl.menu_toggle = 'Menu openen of sluiten';
  nl.quality = 'Kwaliteit';
  nl.sustainability = 'Duurzaamheid';
  nl.collaboration = 'Samenwerking';
  nl.footer_meta_html = '<a href="privacy.html" style="color:inherit;">Privacybeleid</a> · GlobalBizz Solutions · Nederland · KvK 94673543';
  nl.footer_meta_enq_html = 'GlobalBizz Solutions · Nederland · KvK 94673543 · <a href="privacy.html" style="color:inherit;">Privacybeleid</a>';
  nl.back_home = '← Terug naar GlobalBizz Solutions';

  // index.html — hero
  nl.hero_h1_html = '<span class="line2">VAKMANSCHAP </span>VERBINDEN MET HANDEL, WERELDWIJD';
  nl.hero_tagline_html = 'met een <span class="hl">handgemaakte</span> touch';
  nl.hero_lede = 'Twee ambachtelijke productlijnen — SoulScribe en EarthenGrace — gebouwd op kwaliteit, duurzaamheid en samenwerking, en open voor de partnerschappen die ze helpen verder te reizen.';
  nl.hero_cta_explore = 'Ontdek de collecties';
  nl.hero_cta_enquiry = 'Aanvraag indienen';
  nl.hero_badge = 'Nederland · KvK 94673543';
  nl.photo_prev = 'Vorige foto';
  nl.photo_next = 'Volgende foto';
  nl.go_to_photo = 'Ga naar foto {n}';
  for (var i = 1; i <= 5; i++) { nl['hero_alt_' + i] = 'GlobalBizz productfoto ' + i; }

  // index.html — exhibition
  nl.ex_alt_1 = 'logo';
  nl.ex_alt_2 = 'hal';
  nl.ex_alt_3 = 'dag op de beurs';
  nl.ex_eyebrow = 'Aankomende en recente beurzen';
  nl.ex_lede = 'Kom SoulScribe & EarthenGrace in het echt bekijken';
  nl.ex_dates_label = 'Data';
  nl.ex_dates_value = '30–31 aug en 1 sep 2026';
  nl.ex_add_cal = 'Toevoegen aan agenda';
  nl.ex_loc_label = 'Locatie';
  nl.ex_event_label = 'Evenement';
  nl.ex_event_link = 'Trendz / showUP-pagina';
  nl.ex_route_label = 'Route';
  nl.ex_route_link = 'Routebeschrijving';
  nl.ex_book_btn = 'Plan een afspraak met ons op de stand';

  // index.html — about
  nl.about_eyebrow = 'Wie wij zijn';
  nl.about_h2_html = 'Vakmanschap ontmoet<br>wereldwijde handel.';
  nl.about_p1 = 'Bij GlobalBizz Solutions brengen wij ambachtelijk vakmanschap en creatieve innovaties tot leven met onze twee productlijnen — SoulScribe en EarthenGrace.';
  nl.about_p2 = 'Geworteld in onze kernwaarden kwaliteit, duurzaamheid en samenwerking bouwen wij aan een platform dat diversiteit en eindeloze mogelijkheden viert.';
  nl.about_p3 = 'Wij staan altijd open voor samenwerkingen en nieuwe kansen. Laten we samen betekenisvolle verbindingen smeden en uitzonderlijke producten de wereld in brengen.';

  // index.html — collections
  nl.lines_eyebrow = 'Onze productlijnen';
  nl.lines_h2 = 'Twee collecties, één filosofie';
  nl.sc_tag = 'Leer · Notitieboeken';
  nl.sc_quote = '"Prachtig handgemaakte leren notitieboeken voor elke gedachte."';
  nl.sc_desc = 'Volnerf leren notitieboeken en dagboeken, gemaakt om mee te nemen, in te schrijven en jarenlang te bewaren. Onze leerlijn voor elke gedachte die het waard is om vast te leggen.';
  nl.view_collection = 'Bekijk de collectie';
  nl.eg_tag = 'Aardewerk · Artefacten';
  nl.eg_quote = '"Tijdloze artefacten, gemaakt met hart en vakmanschap."';
  nl.eg_desc = 'Onze aardewerklijn van artefacten — met de hand gevormd, gebakken en afgewerkt, gemaakt voor dagelijks gebruik en gebouwd om dat ruimschoots te overleven.';

  // index.html — gallery, values, contact
  nl.gal_eyebrow = 'Vers uit het atelier';
  nl.gal_h2 = 'Galerij';
  nl.gal_p = 'Ontdek wat er nieuw is — onze nieuwe gesprekken, nieuwe producten, werk in uitvoering en kijkjes achter de schermen — regelmatig bijgewerkt.';
  nl.gal_iframe_title = 'GlobalBizz Solutions fotogalerij';
  nl.vals_eyebrow = 'Waar wij voor staan';
  nl.vals_h2 = 'Diversiteit en eindeloze mogelijkheden';
  nl.val_q_p = 'Materialen en techniek staan voorop; elk stuk wordt met de hand gecontroleerd voordat het wordt verzonden.';
  nl.val_s_p = 'Kleinschalige productie en verantwoord ingekochte materialen, gemaakt om te bewaren, niet om te vervangen.';
  nl.val_c_p = 'Altijd open voor samenwerkingen en nieuwe kansen — wij bouwen mét mensen, niet om hen heen.';
  nl.contact_eyebrow = 'Neem contact op';
  nl.contact_h2 = 'Laten we betekenisvolle verbindingen smeden.';
  nl.contact_p = 'Wij staan altijd open voor nieuwe samenwerkingen en kansen — neem contact met ons op en laten we bespreken wat we samen kunnen opbouwen.';
  nl.btn_email = 'Mail ons';
  nl.btn_linkedin = 'Volg ons op LinkedIn';
  nl.btn_order = 'Producten bestellen';

  // enquiry.html — static
  nl.enq_title = 'Aanvraag indienen — GlobalBizz Solutions';
  nl.enq_intro = 'Bekijk onze notitieboekomslagen, kies de modellen waarin je geïnteresseerd bent en geef de gewenste aantallen aan.';
  nl.step1 = 'Kies producten';
  nl.step2 = 'Aantallen invoeren';
  nl.step3 = 'Jouw gegevens';
  nl.step4 = 'Controleren en verzenden';
  nl.search_ph = 'Zoeken op naam...';
  nl.loading = '⏳ Producten laden…';
  nl.load_more = 'Meer laden';
  nl.next_qty = 'Volgende: aantallen →';
  nl.btn_back = '← Terug';
  nl.next_details = 'Volgende: jouw gegevens →';
  nl.next_review = 'Volgende: controleren →';
  nl.send = 'Aanvraag verzenden';
  nl.lbl_name = 'Naam *';
  nl.lbl_email = 'E-mailadres *';
  nl.lbl_phone = 'Telefoon';
  nl.lbl_comments = 'Opmerkingen';
  nl.comments_ph = 'Is er nog iets dat wij moeten weten?';
  nl.rv_details = 'Jouw gegevens';
  nl.edit_details = 'Gegevens wijzigen';
  nl.rv_items = 'Artikelen';
  nl.edit_products = 'Producten wijzigen';
  nl.edit_quantities = 'Aantallen wijzigen';
  nl.disclaimer = 'Let op: het indienen van deze aanvraag is geen bevestiging van een bestelling. Wij beoordelen de gegevens en komen binnen 3 werkdagen bij je terug met een ordersamenvatting en eventuele vragen.';
  nl.thanks = 'Hartelijk dank!';
  nl.sent_msg = 'Je aanvraag is verzonden — wij nemen binnenkort contact met je op.';
  nl.disclaimer_done = 'Let op: deze aanvraag is geen bevestigde bestelling. Wij beoordelen de gegevens en komen binnen 3 werkdagen bij je terug met een ordersamenvatting en eventuele vragen.';
  nl.back_to_site = 'Terug naar de website';
  nl.close = 'Sluiten';

  // privacy.html
  nl.pv_title = 'Privacybeleid — GlobalBizz Solutions';
  nl.pv_h1 = 'Privacybeleid';
  nl.pv_updated = 'Laatst bijgewerkt: 5 november 2026';
  nl.pv_intro = 'GlobalBizz Solutions ("wij", "ons"), ingeschreven bij de Kamer van Koophandel (KvK 94673543), respecteert jouw privacy. Deze pagina legt uit welke persoonsgegevens wij via deze website verzamelen, waarom, en welke rechten je hebt.';
  nl.pv_li_items = 'De producten die je selecteert en per product het aantal, de maat, de papierkleur, het randtype en eventuele aanpassingswensen';
  nl.pv_li_lang = 'De taal die je op de site gebruikte (Nederlands of Engels)';
  nl.pv_enqnum = 'Wij geven elke aanvraag een referentienummer, zodat deze gekoppeld kan worden aan de gevraagde producten.';
  nl.pv_prevail = 'Dit beleid is beschikbaar in het Nederlands en het Engels. De Engelse versie is het origineel en prevaleert bij verschillen tussen beide versies.';
  nl.pv_h_collect = 'Wat wij verzamelen';
  nl.pv_collect_intro = 'Wanneer je een aanvraag indient via ons aanvraagformulier, verzamelen wij:';
  nl.pv_li_name = 'Jouw naam';
  nl.pv_li_email = 'Jouw e-mailadres';
  nl.pv_li_phone = 'Jouw telefoonnummer';
  nl.pv_li_msg = 'Opmerkingen of toelichting die je zelf toevoegt';
  nl.pv_no_tracking = 'Wij gebruiken geen trackingcookies, analysetools of advertentiepixels. De site slaat alleen je gekozen taal op in je browser, zodat die onthouden kan worden; dit wordt niet gebruikt om je te volgen. Productfoto\'s en lettertypen worden geladen via Google, en de site wordt gehost op GitHub Pages. Deze partijen kunnen daarom technische gegevens, zoals je IP-adres, ontvangen wanneer je browser die bestanden opvraagt.';
  nl.pv_h_why = 'Waarom wij deze gegevens verzamelen';
  nl.pv_why = 'Wij gebruiken deze gegevens uitsluitend om op jouw aanvraag te reageren — bijvoorbeeld om een ordersamenvatting of offerte op te stellen, een groothandelsverzoek te beantwoorden of een maatwerkbestelling te bespreken. Wij gebruiken ze niet voor marketing, tenzij je daar apart toestemming voor geeft, en wij verkopen of verhuren jouw gegevens nooit aan derden.';
  nl.pv_h_basis = 'Rechtsgrond';
  nl.pv_basis_html = 'Wij verwerken jouw gegevens op basis van jouw <strong>toestemming</strong> (gegeven bij het verzenden van het formulier), om op jouw verzoek stappen te zetten voorafgaand aan een overeenkomst, en ons <strong>gerechtvaardigd belang</strong> bij het beantwoorden van zakelijke aanvragen die aan ons worden gestuurd.';
  nl.pv_h_who = 'Wie ziet het nog meer';
  nl.pv_who1 = 'Jouw aanvraag wordt opgeslagen en per e-mail naar ons gestuurd via diensten van Google, dat optreedt als onze verwerker onder zijn eigen verwerkersvoorwaarden. Wij delen jouw gegevens met geen enkele andere derde partij, behalve waar dat nodig is om een door jou bevestigde bestelling uit te voeren.';
  nl.pv_who2 = 'Omdat de infrastructuur van Google wereldwijd opereert, kunnen jouw gegevens buiten de Europese Economische Ruimte worden verwerkt, onder de modelcontractbepalingen en waarborgen van Google.';
  nl.pv_h_keep = 'Hoe lang wij ze bewaren';
  nl.pv_keep = 'Wij bewaren aanvraaggegevens zolang als nodig is om jouw verzoek af te handelen en op te volgen, tenzij je ons vraagt ze eerder te verwijderen.';
  nl.pv_h_rights = 'Jouw rechten';
  nl.pv_rights_intro = 'Op grond van de AVG (GDPR) kun je ons vragen om:';
  nl.pv_r1 = 'je de gegevens te tonen die wij over je bewaren';
  nl.pv_r2 = 'onjuiste gegevens te corrigeren';
  nl.pv_r3 = 'jouw gegevens te verwijderen';
  nl.pv_r4 = 'het gebruik ervan te beperken of daartegen bezwaar te maken';
  nl.pv_r5 = 'jouw gegevens in een overdraagbaar formaat te ontvangen';
  nl.pv_rights_html = 'Om een van deze rechten uit te oefenen, kun je ons mailen — zie hieronder. Je kunt ook een klacht indienen bij de Nederlandse toezichthouder (<a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener">Autoriteit Persoonsgegevens</a>).';
  nl.pv_h_contact = 'Contact';
  nl.pv_country = 'Nederland';

  /* ---------- Both languages: text generated by the enquiry script ---------- */
  T.en.selected_count = '{n} selected';
  T.nl.selected_count = '{n} geselecteerd';
  T.en.load_error = 'Could not load products. Please refresh, or contact sales@globalbizz.nl.';
  T.nl.load_error = 'Producten konden niet worden geladen. Vernieuw de pagina of neem contact op met sales@globalbizz.nl.';
  T.en.showing_part = 'Showing {shown} of {total} products — scroll down and tap "Load more" to see the rest.';
  T.nl.showing_part = '{shown} van {total} producten getoond — scrol omlaag en tik op "Meer laden" om de rest te zien.';
  T.en.showing_all = 'Showing all {total} products.';
  T.nl.showing_all = 'Alle {total} producten worden getoond.';
  T.en.zoom_aria = 'View larger image of {name}';
  T.nl.zoom_aria = 'Vergroot afbeelding van {name}';
  T.en.lbl_qty = 'Qty';            T.nl.lbl_qty = 'Aantal';
  T.en.lbl_size = 'Size';          T.nl.lbl_size = 'Maat';
  T.en.lbl_paper = 'Paper color';  T.nl.lbl_paper = 'Papierkleur';
  T.en.lbl_edges = 'Edges';        T.nl.lbl_edges = 'Randen';
  T.en.remove_aria = 'Remove this variation';
  T.nl.remove_aria = 'Deze variant verwijderen';
  T.en.customize_label = "Needs customization (we'll contact you separately)";
  T.nl.customize_label = 'Aanpassing gewenst (wij nemen apart contact met je op)';
  T.en.add_variant = '+ Add another variation of this product';
  T.nl.add_variant = '+ Nog een variant van dit product toevoegen';
  T.en.val_name = 'Please enter your full name (at least 3 letters).';
  T.nl.val_name = 'Vul je volledige naam in (minimaal 3 letters).';
  T.en.val_email = 'Please enter a valid email address.';
  T.nl.val_email = 'Vul een geldig e-mailadres in.';
  T.en.review_meta = '{size} · {color} paper, {edge} edges';
  T.nl.review_meta = '{size} · {color} papier · {edge}';
  T.en.customize_flag = 'Customization requested';
  T.nl.customize_flag = 'Aanpassing gewenst';
  T.en.sending = 'Sending...';
  T.nl.sending = 'Verzenden...';
  T.en.send_error = 'Something went wrong — please try again or email sales@globalbizz.nl directly.';
  T.nl.send_error = 'Er is iets misgegaan — probeer het opnieuw of mail rechtstreeks naar sales@globalbizz.nl.';
  // Option labels (the stored/submitted value stays English so the Sheet is consistent)
  T.en.opt_Pocket = 'Pocket';   T.nl.opt_Pocket = 'Pocket';
  T.en.opt_Yellow = 'Yellow';   T.nl.opt_Yellow = 'Geel';
  T.en.opt_White = 'White';     T.nl.opt_White = 'Wit';
  T.en.opt_Deckled = 'Deckled'; T.nl.opt_Deckled = 'Ruw (deckle)';
  T.en.opt_Sharp = 'Sharp';     T.nl.opt_Sharp = 'Gesneden';

  /* ---------- engine ---------- */
  var lang = DEFAULT_LANG;
  var listeners = [];

  function readStored(){
    try {
      var l = localStorage.getItem(STORE_KEY);
      if (SUPPORTED.indexOf(l) > -1) return l;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function t(key, vars, fallback){
    var s = T[lang] && T[lang][key];
    if (s == null) s = T.en[key];
    if (s == null) return fallback != null ? fallback : key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function(m, k){ return vars[k] != null ? vars[k] : m; });
    return s;
  }

  function apply(){
    var root = document.documentElement;
    root.lang = lang;

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.__enText === undefined) el.__enText = el.textContent;
      var v = T[lang][el.getAttribute('data-i18n')];
      el.textContent = (v != null) ? v : el.__enText;
    }

    nodes = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      if (el.__enHtml === undefined) el.__enHtml = el.innerHTML;
      v = T[lang][el.getAttribute('data-i18n-html')];
      el.innerHTML = (v != null) ? v : el.__enHtml;
    }

    // data-i18n-attr="placeholder:key; aria-label:key2"
    nodes = document.querySelectorAll('[data-i18n-attr]');
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      if (!el.__enAttr) el.__enAttr = {};
      var pairs = el.getAttribute('data-i18n-attr').split(';');
      for (var j = 0; j < pairs.length; j++) {
        var p = pairs[j].split(':');
        if (p.length < 2) continue;
        var attr = p[0].trim(), key = p[1].trim();
        if (el.__enAttr[attr] === undefined) el.__enAttr[attr] = el.getAttribute(attr) || '';
        var av = T[lang][key];
        el.setAttribute(attr, (av != null) ? av : el.__enAttr[attr]);
      }
    }

    var sels = document.querySelectorAll('.lang-select');
    for (i = 0; i < sels.length; i++) sels[i].value = lang;

    root.classList.remove('i18n-pending');
  }

  function setLang(next){
    if (SUPPORTED.indexOf(next) < 0) return;
    lang = next;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    apply();
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](lang); } catch (e) {}
    }
  }

  window.GBi18n = {
    t: t,
    getLang: function(){ return lang; },
    setLang: setLang,
    onChange: function(cb){ listeners.push(cb); }
  };

  lang = readStored();
  apply();

  var selects = document.querySelectorAll('.lang-select');
  for (var s = 0; s < selects.length; s++) {
    selects[s].addEventListener('change', function(e){ setLang(e.target.value); });
  }
})();
