export default function Home() { return null }

export async function getServerSideProps({ res, query }) {
  const lang = ['en','es','fr'].includes(query.lang) ? query.lang : 'en'

  const T = {
    en: {
      htmlLang:'en', title:'Casa Brasil Terrace | Rooftop Apartment in Puerto Vallarta',
      meta:'Boutique rooftop apartment with private terrace in Puerto Vallarta. Walk to the beach, market and downtown.',
      tagline:'Authentic rooftop living in Puerto Vallarta', cta:'Check availability',
      badge:'Private terrace · beach + market within walking distance · authentic neighborhood',
      heroDesc:'A boutique rooftop apartment with a private terrace in Puerto Vallarta. Walk to the beach, the municipal market and downtown.',
      heroFeatures:['Private terrace ~27 m²','Outdoor shower','BBQ grill','2 A/C units'],
      heroSub:'Calle Brasil 1434 Altos · Puerto Vallarta', heroLink:'See location & distances',
      nav:['Terrace','Apartment','Location','Experience','Contact'],
      navIds:['#terrace','#apartment','#location','#experience','#contact'],
      h1:['Walkable lifestyle','Local ecosystem','Host next door'],
      h1d:['Beach, municipal market and downtown — all walkable.','Seafood stand downstairs, popular bar across the street, buses to beach towns nearby.','Check-in, check-out and local support whenever you need it.'],
      tLabel:'The Terrace', tTitle:'Your Private Rooftop Terrace',
      tDesc:'The highlight of the apartment: a spacious private rooftop terrace, perfect for morning coffee, working remotely, sunbathing or enjoying warm Vallarta evenings.',
      tFeatures:['Private terrace ~7.7 m × 3.6 m (~27 m²)','Outdoor shower (perfect after the beach)','BBQ grill for evening cookouts','Excellent ventilation and tropical atmosphere'],
      tTags:['Sun terrace','Outdoor shower','BBQ'], tImgAlt:'Private rooftop terrace',
      aLabel:'The Apartment', aTitle:'The Apartment',
      aDesc:'Large open living room and kitchen with high ceilings and excellent natural airflow. Two A/C units for year-round comfort.',
      aFeatures:['1 bedroom (functional and cool)','Large open living/kitchen space','2 A/C units + natural ventilation (often not needed)'],
      aNearby:'Everything within reach', aNearbyDesc:'Designed for long stays without a car.',
      aDist:[['🌊 Beach','3 blocks'],['🍍 Municipal market','5–10 min walk'],['🏙 Downtown PV','~10 min walk'],['🚌 Buses to Riviera Nayarit','~30 m'],['🏟 Unidad Deportiva Municipal','~50 m'],['🧺 Laundry service','~50 m']],
      aNote:'No in-unit washer, but laundry service is steps away.',
      eLabel:'Local Experience', eTitle:'A Real Vallarta Neighborhood',
      eDesc:"Casa Brasil Terrace is inside a multigenerational family property in a traditional Puerto Vallarta neighborhood — not a resort, not a tourist bubble.",
      eFeatures:['Excellent seafood stand downstairs','Popular bar La Mesa del Coco across the street','50 m from the municipal sports complex','Local host living next door'],
      eDayTitle:'A typical day at Casa Brasil',
      eDay:[['Morning','☕ Coffee on the terrace · 🍍 walk to the market for fresh fruit and fish'],['Afternoon','🌊 Beach 3 blocks away · 🚿 outdoor shower to rinse off · 🦐 Seafood downstairs'],['Evening','🍹 Drinks across the street · 🔥 BBQ on your terrace']],
      eBonusTitle:'Bonus Rooftop Sun Deck',
      eBonusDesc:'Guests who integrate well with the relaxed atmosphere may occasionally enjoy access to a neighboring rooftop sun deck. Offered as a courtesy, subject to availability.',
      lLabel:'Location', lTitle:'Walkable Location',
      lDesc:'Calle Brasil 1434 Altos, Puerto Vallarta. Steps from beach, downtown and the municipal market.',
      lMaps:'Open in Google Maps',
      lCards:[['Municipal market','5–10 min walk: fresh produce, butcher, fish market, local goods.'],['Regional transport','~30 m: buses to Punta de Mita, Bucerías, La Cruz. Sayulita connection depending on route.'],['No car needed','Beach, market, downtown, bar and laundry — all walkable.']],
      lsTitle:'Perfect for Long Stays',
      lsDesc:"Casa Brasil Terrace is ideal for international travelers and digital nomads looking to live Puerto Vallarta like a local. The private terrace, nearby market and proximity to the beach make it perfect for weekly or monthly stays. Ask about long-stay rates.",
      lsCta:'Inquire about long stay',
      cLabel:'Contact', cTitle:'Contact',
      cDesc:'Write to us for availability, nightly/weekly/monthly rates and questions about the neighborhood.',
      waBtn:'Contact via WhatsApp',
      idealTitle:'Perfect for', idealDesc:"International travelers, digital nomads and people who want to experience real Puerto Vallarta: rooftop, walkability and authentic neighborhood life.",
      fTitle:'Check availability',
      fName:'Name', fEmail:'Email', fCheckin:'Check-in', fCheckout:'Check-out',
      fMsg:'Message', fMsgPh:"E.g. Looking for a monthly stay, what's the price?",
      fSubmit:'Send message', fNote:'',
    },
    es: {
      htmlLang:'es', title:'Casa Brasil Terrace | Rooftop Apartment in Puerto Vallarta',
      meta:'Apartamento boutique con terraza privada en Puerto Vallarta. Playa, mercado y centro caminando.',
      tagline:'Authentic rooftop living in Puerto Vallarta', cta:'Consultar disponibilidad',
      badge:'Terraza privada · playa + mercado municipal caminando · barrio auténtico',
      heroDesc:'Apartamento boutique de 1 recámara con terraza privada para vivir Puerto Vallarta como local: playa, mercado municipal y centro caminando.',
      heroFeatures:['Terraza ~27 m²','Regadera exterior','BBQ grill','2 A/C'],
      heroSub:'Calle Brasil 1434 Altos · Puerto Vallarta', heroLink:'Ver ubicación y distancias',
      nav:['Terraza','Departamento','Ubicación','Experiencia','Contacto'],
      navIds:['#terrace','#apartment','#location','#experience','#contact'],
      h1:['Walkable lifestyle','Ecosistema local','Host a una puerta'],
      h1d:['Playa, mercado municipal y centro caminando.','Mariscos abajo, bar popular cruzando la calle y camiones a pueblos de playa a metros.','Check-in, check-out y soporte local cuando lo necesitas.'],
      tLabel:'La Terraza', tTitle:'Tu terraza privada',
      tDesc:'La joya del depa: una terraza privada amplia, perfecta para café en la mañana, trabajar con laptop, tomar sol o disfrutar las tardes cálidas de Vallarta.',
      tFeatures:['Terraza privada aprox. 7.7 m × 3.6 m (~27 m²)','Regadera exterior (ideal post-playa)','BBQ grill para parrilladas','Excelente ventilación y ambiente tropical'],
      tTags:['Sun terrace','Regadera exterior','BBQ'], tImgAlt:'Terraza privada',
      aLabel:'El Departamento', aTitle:'El departamento',
      aDesc:'Sala/comedor/cocina en un solo espacio amplio, con techo alto y muy buen airflow. Dos aires acondicionados para mayor confort.',
      aFeatures:['1 recámara (funcional y fresca)','Espacio abierto sala/comedor/cocina','2 A/C + ventilación natural (muchos días no hacen falta)'],
      aNearby:'Lo que necesitas, cerca', aNearbyDesc:'Perfecto para estancias largas sin depender de coche.',
      aDist:[['🌊 Playa','3 cuadras'],['🍍 Mercado municipal','5–10 min caminando'],['🏙 Centro','~10 min caminando'],['🚌 Camiones a Riviera Nayarit','~30 m'],['🏟 Unidad Deportiva Municipal','~50 m'],['🧺 Lavandería','~50 m']],
      aNote:'El depa no tiene lavadora, pero hay lavandería a la vuelta.',
      eLabel:'Experiencia Local', eTitle:'Un barrio de verdad',
      eDesc:'Casa Brasil Terrace está dentro de una propiedad familiar multigeneracional en un barrio tradicional de Puerto Vallarta — no es un resort ni una burbuja turística.',
      eFeatures:['Puesto de mariscos familiar al pie de la escalera','Bar popular La Mesa del Coco cruzando la calle','A 50 m de la unidad deportiva municipal','Host local vive a una puerta'],
      eDayTitle:'Un día típico en Casa Brasil',
      eDay:[['Mañana','☕ Café en la terraza · 🍍 caminata al mercado por fruta y pescado fresco'],['Tarde','🌊 Playa a 3 cuadras · 🚿 regadera exterior para enjuagarte · 🦐 Mariscos abajo'],['Noche','🍹 Una bebida enfrente · 🔥 BBQ en tu terraza']],
      eBonusTitle:'Asoleadero adicional (bonus)',
      eBonusDesc:'En ocasiones puede habilitarse acceso a un asoleadero adicional en el rooftop vecino. Se ofrece bajo solicitud y disponibilidad.',
      lLabel:'Ubicación', lTitle:'Ubicación caminable',
      lDesc:'Calle Brasil 1434 Altos, Puerto Vallarta. Cerca de playa, centro y mercado municipal.',
      lMaps:'Abrir en Google Maps',
      lCards:[['Mercado municipal','5–10 minutos caminando: fruta, carnicería, pescadería fresca y productos locales.'],['Transporte regional','~30 m: camiones a Punta de Mita, Bucerías, La Cruz. Conexión a Sayulita según ruta.'],['Sin coche, sin estrés','Comida, mercado, playa, bar y lavandería — todo caminando.']],
      lsTitle:'Ideal para estancias largas',
      lsDesc:'Casa Brasil Terrace es perfecto para viajeros internacionales y nómadas digitales que buscan vivir Puerto Vallarta como local. Pregunta por tarifas especiales.',
      lsCta:'Consultar estancia larga',
      cLabel:'Contacto', cTitle:'Contacto',
      cDesc:'Escríbenos para disponibilidad, precios por noche/semana/mes y dudas sobre el barrio.',
      waBtn:'Consultar por WhatsApp',
      idealTitle:'Ideal para', idealDesc:'Viajeros internacionales, nómadas digitales y personas que quieren vivir Puerto Vallarta como local.',
      fTitle:'Consultar disponibilidad',
      fName:'Nombre', fEmail:'Email', fCheckin:'Check-in', fCheckout:'Check-out',
      fMsg:'Mensaje', fMsgPh:'Ej: Busco estancia mensual, ¿precio y condiciones?',
      fSubmit:'Enviar mensaje', fNote:'',
    },
    fr: {
      htmlLang:'fr', title:'Casa Brasil Terrace | Rooftop Apartment in Puerto Vallarta',
      meta:'Appartement boutique avec terrasse privée à Puerto Vallarta. Plage, marché municipal et centre-ville à pied.',
      tagline:'Authentic rooftop living in Puerto Vallarta', cta:'Vérifier les disponibilités',
      badge:'Terrasse privée · plage + marché à pied · quartier authentique',
      heroDesc:'Appartement rooftop boutique avec terrasse privée à Puerto Vallarta. Plage, marché municipal et centre-ville accessibles à pied.',
      heroFeatures:['Terrasse ~27 m²','Douche extérieure','Barbecue','2 climatiseurs'],
      heroSub:'Calle Brasil 1434 Altos · Puerto Vallarta', heroLink:'Voir localisation et distances',
      nav:['Terrasse','Appartement','Localisation','Expérience','Contact'],
      navIds:['#terrace','#apartment','#location','#experience','#contact'],
      h1:['Style walkable','Écosystème local','Hôte à côté'],
      h1d:['Plage, marché et centre-ville accessibles à pied.','Stand de fruits de mer en bas, bar populaire en face, bus vers les plages à deux pas.','Check-in, check-out et assistance locale quand vous en avez besoin.'],
      tLabel:'La Terrasse', tTitle:'Votre terrasse privée sur le toit',
      tDesc:"Le point fort de l'appartement : une grande terrasse privée sur le toit, parfaite pour le café du matin, le télétravail, le bronzage ou les soirées chaudes de Vallarta.",
      tFeatures:['Terrasse privée ~7.7 m × 3.6 m (~27 m²)','Douche extérieure (idéale après la plage)','Barbecue pour les soirées en plein air','Excellente ventilation et ambiance tropicale'],
      tTags:['Terrasse ensoleillée','Douche extérieure','BBQ'], tImgAlt:'Terrasse privée sur le toit',
      aLabel:"L'Appartement", aTitle:"L'appartement",
      aDesc:'Grand espace ouvert salon/cuisine avec hauts plafonds et excellente ventilation naturelle. Deux climatiseurs pour un confort optimal.',
      aFeatures:['1 chambre (fonctionnelle et fraîche)','Grand espace ouvert salon/cuisine','2 climatiseurs + ventilation naturelle'],
      aNearby:'Tout à portée de main', aNearbyDesc:'Idéal pour des séjours prolongés sans voiture.',
      aDist:[['🌊 Plage','3 blocs'],['🍍 Marché municipal','5–10 min à pied'],['🏙 Centre-ville','~10 min à pied'],['🚌 Bus vers Riviera Nayarit','~30 m'],['🏟 Complexe sportif municipal','~50 m'],['🧺 Laverie','~50 m']],
      aNote:"Pas de machine à laver, mais une laverie est à deux pas.",
      eLabel:'Expérience Locale', eTitle:'Un vrai quartier de Vallarta',
      eDesc:"Casa Brasil Terrace est intégré dans une propriété familiale multigénérationnelle dans un quartier traditionnel de Puerto Vallarta — ni resort, ni bulle touristique.",
      eFeatures:["Stand de fruits de mer en bas de l'escalier","Bar populaire La Mesa del Coco en face","Complexe sportif municipal à 50 m","Hôte local vivant à côté"],
      eDayTitle:'Une journée type à Casa Brasil',
      eDay:[['Matin','☕ Café sur la terrasse · 🍍 balade au marché pour fruits frais et poisson'],['Après-midi','🌊 Plage à 3 blocs · 🚿 douche extérieure pour se rincer · 🦐 Fruits de mer en bas'],['Soir','🍹 Verre en face · 🔥 BBQ sur votre terrasse']],
      eBonusTitle:'Terrasse solaire bonus',
      eBonusDesc:"Les hôtes bien intégrés peuvent parfois accéder à une terrasse solaire voisine. Offerte à titre gracieux, selon disponibilité.",
      lLabel:'Localisation', lTitle:'Emplacement idéal',
      lDesc:'Calle Brasil 1434 Altos, Puerto Vallarta. À deux pas de la plage, du centre-ville et du marché municipal.',
      lMaps:'Ouvrir dans Google Maps',
      lCards:[['Marché municipal','5–10 min à pied : fruits, boucherie, poissonnerie et produits locaux.'],['Transport régional','~30 m : bus vers Punta de Mita, Bucerías, La Cruz. Connexion Sayulita selon itinéraire.'],['Sans voiture, sans stress','Nourriture, marché, plage, bar et laverie — tout à pied.']],
      lsTitle:'Idéal pour les longs séjours',
      lsDesc:"Casa Brasil Terrace est parfait pour les voyageurs internationaux et nomades digitaux. Renseignez-vous sur les tarifs longue durée.",
      lsCta:'Renseignements séjour long',
      cLabel:'Contact', cTitle:'Contact',
      cDesc:'Écrivez-nous pour la disponibilité, les tarifs nuit/semaine/mois et toute question sur le quartier.',
      waBtn:'Contacter via WhatsApp',
      idealTitle:'Parfait pour', idealDesc:"Voyageurs internationaux, nomades digitaux et personnes souhaitant vivre Puerto Vallarta comme un local.",
      fTitle:'Vérifier les disponibilités',
      fName:'Nom', fEmail:'Email', fCheckin:'Arrivée', fCheckout:'Départ',
      fMsg:'Message', fMsgPh:"Ex : Je cherche un séjour mensuel, quel est le tarif ?",
      fSubmit:'Envoyer le message', fNote:'',
    },
  }

  const waMsg = {
    en:'Hello%20I%27m%20interested%20in%20Casa%20Brasil%20Terrace.%20Could%20you%20share%20availability%20and%20pricing%3F',
    es:'Hola%20me%20interesa%20Casa%20Brasil%20Terrace.%20%C2%BFPodr%C3%ADas%20compartirme%20disponibilidad%20y%20precio%3F',
    fr:'Bonjour%20je%20suis%20int%C3%A9ress%C3%A9%20par%20Casa%20Brasil%20Terrace.%20Pouvez-vous%20me%20donner%20les%20disponibilit%C3%A9s%20et%20tarifs%20%3F',
  }

  const d = T[lang]
  const wa = `https://wa.me/523223068482?text=${waMsg[lang]}`
  const maps = 'https://www.google.com/maps/search/?api=1&query=Calle%20Brasil%201434%20Puerto%20Vallarta'
  const lb = (l, label) => `<a href="?lang=${l}" style="padding:.25rem .55rem;border-radius:.375rem;font-size:.75rem;font-weight:600;letter-spacing:.05em;text-decoration:none;${lang===l?'background:#059669;color:white;':'color:#6b7280;'}">${label}</a>`

  const html = `<!doctype html>
<html lang="${d.htmlLang}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="description" content="${d.meta}"/>
<title>${d.title}</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<style>
.glass{backdrop-filter:blur(10px);background:rgba(255,255,255,.78)}
.shadow-soft{box-shadow:0 12px 35px rgba(0,0,0,.10)}
.ring-soft{box-shadow:0 0 0 6px rgba(16,185,129,.12)}
.imgfade:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.10) 55%,rgba(0,0,0,.65) 100%)}
</style>
</head>
<body class="bg-zinc-50 text-zinc-900">

<header class="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/70 backdrop-blur">
<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 gap-3 flex-wrap">
  <div class="flex items-center gap-2">
    <span class="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-600 text-white font-semibold">CB</span>
    <div class="leading-tight"><div class="font-semibold">Casa Brasil Terrace</div><div class="text-xs text-zinc-500">${d.tagline}</div></div>
  </div>
  <nav class="hidden md:flex items-center gap-5 text-sm text-zinc-600">
    ${d.nav.map((n,i)=>`<a class="hover:text-zinc-900" href="${d.navIds[i]}">${n}</a>`).join('')}
  </nav>
  <div class="flex items-center gap-2 flex-wrap">
    <div style="display:flex;gap:.25rem">${lb('en','EN')}${lb('es','ES')}${lb('fr','FR')}</div>
    <a class="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700" href="#contact">${d.cta}</a>
  </div>
</div>
</header>

<section class="relative">
<div class="relative h-[74vh] min-h-[520px] w-full overflow-hidden">
  <div class="imgfade absolute inset-0"></div>
  <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2400&q=80" alt="${d.tImgAlt}" class="h-full w-full object-cover"/>
  <div class="absolute inset-0 mx-auto flex max-w-6xl items-end px-4 pb-10">
    <div class="glass shadow-soft w-full rounded-3xl p-5 md:p-7">
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">${d.badge}</p>
          <h1 class="text-3xl font-semibold tracking-tight md:text-5xl">Casa Brasil Terrace</h1>
          <p class="mt-3 text-zinc-700 md:text-lg">${d.heroDesc}</p>
          <div class="mt-4 flex flex-wrap gap-2 text-sm">${d.heroFeatures.map(f=>`<span class="rounded-full bg-white px-3 py-1 border border-zinc-200">${f}</span>`).join('')}</div>
        </div>
        <div class="flex flex-col gap-2 md:items-end">
          <a class="inline-flex w-full md:w-auto items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700" href="#contact">${d.cta}</a>
          <a class="inline-flex w-full md:w-auto items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 border border-zinc-200 hover:bg-zinc-50" href="#location">${d.heroLink}</a>
          <p class="text-xs text-zinc-500 md:text-right">${d.heroSub}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-10">
<div class="grid gap-4 md:grid-cols-3">
  ${d.h1.map((h,i)=>`<div class="rounded-3xl bg-white p-6 shadow-soft border border-zinc-200/60"><div class="text-sm font-semibold">${h}</div><p class="mt-2 text-sm text-zinc-600">${d.h1d[i]}</p></div>`).join('')}
</div>
</section>

<section id="terrace" class="bg-white border-y border-zinc-200/60">
<div class="mx-auto max-w-6xl px-4 py-14">
  <div class="grid gap-10 md:grid-cols-2 md:items-center">
    <div>
      <p class="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">${d.tLabel}</p>
      <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">${d.tTitle}</h2>
      <p class="mt-3 text-zinc-600">${d.tDesc}</p>
      <ul class="mt-5 space-y-2 text-sm text-zinc-700">${d.tFeatures.map(f=>`<li>• ${f}</li>`).join('')}</ul>
      <div class="mt-6 flex flex-wrap gap-2">${d.tTags.map(t=>`<span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">${t}</span>`).join('')}</div>
    </div>
    <div class="rounded-3xl overflow-hidden shadow-soft ring-soft">
      <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=80" alt="${d.tImgAlt}" class="h-[360px] w-full object-cover md:h-[420px]"/>
    </div>
  </div>
</div>
</section>

<section id="apartment" class="mx-auto max-w-6xl px-4 py-14">
<div class="grid gap-10 md:grid-cols-2 md:items-start">
  <div class="rounded-3xl bg-white p-6 shadow-soft border border-zinc-200/60">
    <p class="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">${d.aLabel}</p>
    <h3 class="text-xl font-semibold">${d.aTitle}</h3>
    <p class="mt-3 text-sm text-zinc-600">${d.aDesc}</p>
    <div class="mt-5 grid gap-3 text-sm">${d.aFeatures.map(f=>`<div class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600 flex-shrink-0"></span><p>${f}</p></div>`).join('')}</div>
  </div>
  <div class="rounded-3xl bg-white p-6 shadow-soft border border-zinc-200/60">
    <h3 class="text-xl font-semibold">${d.aNearby}</h3>
    <p class="mt-3 text-sm text-zinc-600">${d.aNearbyDesc}</p>
    <div class="mt-5 grid gap-3 text-sm text-zinc-700">
      ${d.aDist.map(([p,dist],i)=>`<div class="flex justify-between gap-4${i<d.aDist.length-1?' border-b border-zinc-100 pb-2':''}"><span>${p}</span><span class="font-semibold">${dist}</span></div>`).join('')}
    </div>
    <p class="mt-4 text-xs text-zinc-500">${d.aNote}</p>
  </div>
</div>
</section>

<section id="experience" class="bg-white border-y border-zinc-200/60">
<div class="mx-auto max-w-6xl px-4 py-14">
  <div class="grid gap-10 md:grid-cols-2 md:items-center">
    <div>
      <p class="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">${d.eLabel}</p>
      <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">${d.eTitle}</h2>
      <p class="mt-3 text-zinc-600">${d.eDesc}</p>
      <ul class="mt-5 space-y-2 text-sm text-zinc-700">${d.eFeatures.map(f=>`<li>• ${f}</li>`).join('')}</ul>
    </div>
    <div class="rounded-3xl bg-zinc-50 p-6 border border-zinc-200/60 shadow-soft">
      <h3 class="text-lg font-semibold">${d.eDayTitle}</h3>
      <div class="mt-4 space-y-3 text-sm text-zinc-700">
        ${d.eDay.map(([time,desc])=>`<div class="flex gap-3"><div class="w-24 text-zinc-500 flex-shrink-0">${time}</div><div>${desc}</div></div>`).join('')}
      </div>
      <div class="mt-6 rounded-2xl bg-white p-4 border border-zinc-200/60">
        <p class="text-xs font-semibold text-zinc-700 mb-1">${d.eBonusTitle}</p>
        <p class="text-xs text-zinc-500">${d.eBonusDesc}</p>
      </div>
    </div>
  </div>
</div>
</section>

<section id="location" class="mx-auto max-w-6xl px-4 py-14">
<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
  <div>
    <p class="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">${d.lLabel}</p>
    <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">${d.lTitle}</h2>
    <p class="mt-3 text-zinc-600 max-w-2xl">${d.lDesc}</p>
  </div>
  <a class="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 border border-zinc-200 hover:bg-zinc-50" target="_blank" rel="noopener" href="${maps}">${d.lMaps}</a>
</div>
<div class="mt-8 grid gap-4 md:grid-cols-3">
  ${d.lCards.map(([title,desc])=>`<div class="rounded-3xl bg-white p-6 shadow-soft border border-zinc-200/60"><div class="text-sm font-semibold">${title}</div><p class="mt-2 text-sm text-zinc-600">${desc}</p></div>`).join('')}
</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-10">
<div class="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 shadow-soft">
  <h3 class="text-xl font-semibold text-emerald-900">${d.lsTitle}</h3>
  <p class="mt-3 text-sm text-zinc-700 max-w-2xl">${d.lsDesc}</p>
  <a class="mt-5 inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700" href="#contact">${d.lsCta}</a>
</div>
</section>

<section id="contact" class="bg-white border-t border-zinc-200/60">
<div class="mx-auto max-w-6xl px-4 py-14">
  <div class="grid gap-10 md:grid-cols-2 md:items-start">
    <div>
      <p class="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">${d.cLabel}</p>
      <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">${d.cTitle}</h2>
      <p class="mt-3 text-zinc-600">${d.cDesc}</p>
      <a class="mt-6 inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700" target="_blank" rel="noopener" href="${wa}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        ${d.waBtn}
      </a>
      <div class="mt-6 rounded-3xl bg-zinc-50 p-6 border border-zinc-200/60">
        <div class="text-sm font-semibold">${d.idealTitle}</div>
        <p class="mt-2 text-sm text-zinc-600">${d.idealDesc}</p>
      </div>
    </div>
    <form class="rounded-3xl bg-zinc-50 p-6 border border-zinc-200/60 shadow-soft" onsubmit="return handleSubmit(event)">
      <h3 class="text-lg font-semibold">${d.fTitle}</h3>
      <div class="mt-4 grid gap-3">
        <label class="text-sm">${d.fName}<input required class="mt-1 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" name="name"/></label>
        <label class="text-sm">${d.fEmail}<input required type="email" class="mt-1 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" name="email"/></label>
        <div class="grid gap-3 md:grid-cols-2">
          <label class="text-sm">${d.fCheckin}<input type="date" class="mt-1 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" name="checkin"/></label>
          <label class="text-sm">${d.fCheckout}<input type="date" class="mt-1 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" name="checkout"/></label>
        </div>
        <label class="text-sm">${d.fMsg}<textarea class="mt-1 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" name="message" rows="4" placeholder="${d.fMsgPh}"></textarea></label>
        <button class="mt-2 inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800">${d.fSubmit}</button>
        ${d.fNote ? `<p class="text-xs text-zinc-500">${d.fNote}</p>` : ""}
      </div>
    </form>
  </div>
</div>
<footer class="border-t border-zinc-200/60 bg-white">
  <div class="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
    <div>© <span id="yr"></span> Casa Brasil Terrace</div>
    <div class="text-xs">${d.tagline}</div>
  </div>
</footer>
</section>

<script>
document.getElementById("yr").textContent=new Date().getFullYear();
async function handleSubmit(e){
  e.preventDefault();
  const form=e.target;
  const btn=form.querySelector("button[type=submit]");
  const data=new FormData(form);
  const name=data.get("name")||"";
  const email=data.get("email")||"";
  const checkin=data.get("checkin")||"";
  const checkout=data.get("checkout")||"";
  const message=data.get("message")||"";
  btn.disabled=true;
  btn.textContent="Sending...";
  try {
    const res=await fetch("https://email-service-two-hazel.vercel.app/api/send",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        to:"info@expatadvisormx.com",
        subject:"[Casa Brasil] Inquiry from "+name,
        message:"New inquiry from brasil.castlesolutions.mx\n\nName: "+name+"\nEmail: "+email+"\nCheck-in: "+checkin+"\nCheck-out: "+checkout+"\n\nMessage:\n"+message,
        from:email,
        name:name,
        sendFrom:"expatadvisormx.com"
      })
    });
    const result=await res.json();
    if(result.success){
      form.innerHTML='<p style="color:#059669;font-weight:600;padding:1rem 0">✓ Message sent! We\'ll get back to you shortly.</p>';
    } else {
      throw new Error(result.error||"Failed");
    }
  } catch(err){
    btn.disabled=false;
    btn.textContent="Send message";
    alert("Could not send. Please contact us via WhatsApp.");
  }
  return false;
}
<\/script>
</body>
</html>`

  res.setHeader('Content-Type','text/html; charset=utf-8')
  res.end(html)
  return { props:{} }
}
