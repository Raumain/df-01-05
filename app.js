// MindSync Solutions - Shared application logic

const i18n = {
  en: {
    // Navigation
    home: 'Home',
    scanner: 'Scanner',
    results: 'Results',
    pricing: 'Pricing',
    store: 'Store',
    companyTitle: 'MindSync Solutions',

    // Common
    startScan: '> Start Neural Scanner <',
    startNewScan: 'Start a New Scan',
    uploadButton: 'UPLOAD NOW',
    buyStorage: 'Buy more mental storage',
    contactSales: 'Contact Sales',
    backHome: 'Back to Home',
    protocolVersion: 'Consciousness Transfer Protocol v2.0',

    // Home page
    pageTitle: 'MindSync Solutions ::: Welcome to the future of YOU',
    digitizeEssence: 'Digitize your essence. Join Cyber-Space 2.0.',
    description: 'Why leave your mind trapped in an obsolete flesh vessel? Thanks to MindSync Solutions\' patented Cyber-Extract™ technology, upload your consciousness to our 128-bit secure servers. Become immortal. Become digital.',
    ticker: '+++ MINDSYNC STOCK UP 400% +++ CEO DECLARES: "FLESH IS OBSOLETE" +++ OVER 10,000 MINDS ALREADY SYNERGIZED ON OUR SERVERS +++',
    whyMindSync: 'Why MindSync?',
    whyPatented: 'Patented Technology',
    whyPatenedDesc: 'Our Cyber-Extract™ algorithm has a 87.4% compatibility rate with human consciousness.',
    whySecure: 'Secure Servers',
    whySecureDesc: '128-bit encryption keeps your digital essence safe from hackers and corporate espionage.',
    whyAffordable: 'Affordable Plans',
    whyAffordableDesc: 'Start free with our Floppy Disk Tier (1.44 MB). Upgrade anytime.',
    whyImmortality: 'Immortality Guaranteed',
    whyImmortalityDesc: 'Your consciousness exists forever on our mainframe. No death. No taxes.',
    disclaimer: 'DISCLAIMER: MindSync Solutions is not responsible for personality degradation, memory loss, or existential crisis following consciousness transfer. Upload at your own risk.',

    // Scanner page
    scannerPageTitle: 'Scanner - MindSync Solutions',
    scannerTitle: 'Step 1/2: Transfer Configuration',
    scannerTicker: '+++ TRANSFER IN PROGRESS +++ DO NOT UNPLUG +++ MAINTAIN NEURAL INTERFACE CONTACT +++',
    quizLabel: 'Step 1: The Quiz',
    q1: 'What is the compression format of your childhood memories?',
    q1a: '.ZIP',
    q1b: '.RAR',
    q1c: '.TAR.GZ',
    q2: 'What is your current synaptic connection speed?',
    q2a: '56k Modem',
    q2b: '64k ISDN',
    q2c: 'Broadband Mental ADSL',
    q3: 'How do you handle an emotional overflow?',
    q3a: 'I empty the Recycle Bin',
    q3b: 'I press Ctrl+Alt+Del and kill the process',
    q3c: 'I disable my anti-virus',
    brainMapLabel: 'Step 2: The Interaction',
    brainMapInstruction: 'Click on the Frontal Lobe on this diagram to initiate connection via COM1 port.',
    frontalLobeError: 'ERROR: Frontal Lobe not selected. Select the correct area before upload.',
    quizError: 'ERROR: All questions must be answered.',
    retinaError: 'ERROR: Retina scan not completed. Complete biometric authentication before upload.',
    uploadLabel: 'Step 3: Upload',
    transferProgress: 'Transfer Progress:',
    uploading: 'Uploading...',
    systemReady: 'System ready...',

    // Retina scan
    retinaTitle: '> Biometric Authentication Required <',
    retinaDesc: 'Initiate retina scan to verify your consciousness signature.',
    retinaButtonLabel: 'Start Retina Scan',
    retinaSuccess: '[RETINA MATCH FOUND]',

    // Console log
    initTransfer: 'Initializing transfer protocol... [OK]',
    defragEgo: 'Defragmenting ego... [OK]',
    bypassFirewall: 'Bypassing ethical firewall... [OK]',
    trainingModel: 'Training model based on DefendIntelligence\'s book... [SUCCESS]',
    knowledgeAssim: 'Knowledge assimilation completed in 0.04ms...',
    uploadMainframe: 'Uploading to mainframe...',

    // Result page
    resultPageTitle: 'Results - MindSync Solutions',
    systemAlert: 'SYSTEM ALERT: Partial Transfer',
    resultTicker: '+++ CONSCIOUSNESS TRANSFERRED SUCCESSFULLY +++ YOU ARE NOW DIGITAL +++ WELCOME TO CYBER-SPACE +++',
    transferComplete: 'TRANSFER COMPLETE',
    congratulations: 'Congratulations. Your consciousness is',
    compatibility: 'compatible with our servers. However, your disk space quota (1.44 MB) has been exceeded. Your memories from the year 1998 had to be overwritten.',
    transferSummary: 'Transfer Summary',
    property: 'Property',
    value: 'Value',
    transferTimestamp: 'Transfer Timestamp',
    compatScore: 'Compatibility Score',
    compressionFormat: 'Compression Format (Selected)',
    connectionSpeed: 'Connection Speed (Selected)',
    overflowHandler: 'Emotional Overflow Handler (Selected)',
    diskSpaceRemaining: 'Disk Space Remaining',
    quotaExceeded: 'QUOTA EXCEEDED',
    yourConsciousnessAwaits: 'Your Consciousness Awaits Upgrade',
    recommendedPlans: 'Recommended Plans',
    cdromDesc: 'Most customers choose this plan. Unlimited personality backups and fast access.',
    enterpriseDesc: 'For corporate consciousness uploads. Dedicated mainframe resources and 24/7 support.',
    successAlert: 'SUCCESS: Your consciousness has been successfully backed up on MindSync servers. You are now eligible for digital immortality. Mortality is optional.',

    // Pricing page
    pricingPageTitle: 'Pricing - MindSync Solutions',
    pricingTicker: '+++ UPGRADE YOUR CONSCIOUSNESS TODAY +++ IMMORTALITY IS AFFORDABLE +++ JOIN THE DIGITAL REVOLUTION +++',
    pricingTitle: 'Subscription Plans',
    plan: 'Plan',
    storage: 'Storage',
    features: 'Features',
    price: 'Price',
    floppyTier: 'Floppy Disk Tier',
    floppyStorage: '1.44 MB',
    floppyFeatures: 'Basic consciousness. Warning: Includes intrusive popup ads directly in your thoughts.',
    floppyPrice: 'Free',
    cdromTier: 'CD-ROM Tier',
    cdromStorage: '700 MB',
    cdromFeatures: 'Full upload. Personality backup on unalterable optical disc.',
    cdromPrice: '$999 / month',
    enterpriseTier: 'T3 Enterprise',
    enterpriseStorage: 'Unlimited',
    enterpriseFeatures: 'Mainframe hosting. High-speed access to the collective subconscious.',
    enterprisePrice: 'Contact Sales',
    choosePlan: 'Choose the perfect consciousness storage plan for your digital immortality needs.',
    mostPopular: '★ MOST POPULAR ★',
    forCorporations: 'FOR CORPORATIONS',
    featureComparison: 'Feature Comparison',
    feature: 'Feature',
    consciousnessUpload: 'Consciousness Upload',
    personalityBackup: 'Personality Backup',
    adFreeAccess: 'Ad-Free Access',
    support24_7: '24/7 Support',
    mainframeAccess: 'Mainframe Access',
    collectiveSubconscious: 'Collective Subconscious',
    slaGuarantee: 'SLA Guarantee',
    faq: 'Frequently Asked Questions',
    faqUpgrade: 'Can I upgrade my plan?',
    faqUpgradeAnswer: 'Yes! You can upgrade at any time. Your consciousness will be seamlessly migrated to your new storage tier.',
    faqFull: 'What happens if my storage is full?',
    faqFullAnswer: 'Your oldest memories (usually from 1998) will be automatically overwritten. We recommend upgrading before this happens.',
    faqSafety: 'Is my consciousness safe on MindSync?',
    faqSafetyAnswer: 'Your consciousness is protected with 128-bit encryption and stored in redundant data centers. However, we are not responsible for personality degradation or existential crises.',
    limitedTimeOffer: 'LIMITED TIME OFFER: Sign up now and get your first month of CD-ROM Tier at 50% off! Use code FLESH2026 at checkout.',

    // Ad sidebar
    ad1Title: 'You are the 1,000,000th visitor!',
    ad1Text: 'Click here to claim your prize!',
    ad2Title: 'Download more RAM for your brain!',
    ad2Text: 'Boost your consciousness transfer speed TODAY!',
    ad3Title: 'Hot cyborgs in your area looking to sync.',
    ad3Text: 'Connect with the collective consciousness now!',
    ad4Title: 'SPECIAL OFFER: Get consciousness uploaded FREE!',
    ad4Text: 'Limited time only! Claim your digital immortality!',
    ad5Title: 'MindSync Dial-up Helmet v1.0',
    ad5Text: 'Only $4,999.99! Transfer from your living room!',
    ad6Title: 'Parallel Port Cranial Needles',
    ad6Text: 'Gold-plated, $199.50 per pack!',
    ad7Title: 'Consciousness Insurance',
    ad7Text: 'Protect your digital soul! 99.9% uptime guaranteed!',
    ad8Title: 'Nigerian Prince Consciousness Transfer',
    ad8Text: 'Claim $10 million digital credits NOW!',
    ad9Title: 'Upgrade Your Synapses',
    ad9Text: 'Premium neural bandwidth! Limited slots!',
    ad10Title: 'Personality Backup Service',
    ad10Text: 'Never lose your memories! Auto-sync daily!',

    // Store page
    storePageTitle: 'MindSync Store ::: DIY Upload Kits',
    storeDesc: 'Upgrade your consciousness transfer hardware with our premium DIY kits!',
    helmetTitle: 'MindSync Dial-up Helmet v1.0',
    helmetDesc: 'Transfer your consciousness from the comfort of your living room! Connects directly to your 56k modem. Warning: Do not pick up the phone during transfer to avoid permanent personality corruption.',
    needlesTitle: 'Parallel Port Cranial Needles (Pack of 8)',
    needlesDesc: 'Gold-plated needles for maximum bandwidth. Plugs directly into your printer port (LPT1).',
    buyNow: 'Buy Now',
    storeDisclaimer: 'MindSync Store products are functional. But we are not responsible of how you use them...',
    storeDisclaimerTitle: 'DISCLAIMER:',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    scanner: 'Scanner',
    results: 'Résultats',
    pricing: 'Tarification',
    store: 'Magasin',
    guestbook: 'Avis',
    companyTitle: 'MindSync Solutions',

    // Common
    startScan: '> Démarrer le Scanner Neural <',
    startNewScan: 'Démarrer une Nouvelle Analyse',
    uploadButton: 'TÉLÉCHARGER MAINTENANT',
    buyStorage: 'Acheter plus de stockage mental',
    contactSales: 'Contacter les ventes',
    backHome: 'Retour à l\'Accueil',
    protocolVersion: 'Protocole de Transfert de Conscience v2.0',

    // Home page
    pageTitle: 'MindSync Solutions ::: Bienvenue dans le futur de VOUS',
    digitizeEssence: 'Numérisez votre essence. Rejoignez Cyber-Space 2.0.',
    description: 'Pourquoi laisser votre esprit emprisonné dans un vaisseau de chair obsolète ? Grâce à la technologie brevetée Cyber-Extract™ de MindSync Solutions, téléchargez votre conscience sur nos serveurs sécurisés 128 bits. Devenez immortel. Devenez numérique.',
    ticker: '+++ MINDSYNC EN HAUSSE DE 400% +++ PDG DÉCLARE: "LA CHAIR EST OBSOLÈTE" +++ PLUS DE 10 000 ESPRITS DÉJÀ SYNCHRONISÉS SUR NOS SERVEURS +++',
    whyMindSync: 'Pourquoi MindSync ?',
    whyPatented: 'Technologie Brevetée',
    whyPatenedDesc: 'Notre algorithme Cyber-Extract™ a un taux de compatibilité de 87,4% avec la conscience humaine.',
    whySecure: 'Serveurs Sécurisés',
    whySecureDesc: 'Le chiffrement 128 bits protège votre essence numérique contre les pirates et l\'espionnage.',
    whyAffordable: 'Plans Abordables',
    whyAffordableDesc: 'Commencez gratuitement avec notre Niveau Disquette (1,44 Mo). Passez à une version supérieure à tout moment.',
    whyImmortality: 'Immortalité Garantie',
    whyImmortalityDesc: 'Votre conscience existe à jamais sur notre serveur principal. Pas de mort. Pas de taxes.',
    disclaimer: 'CLAUSE DE NON-RESPONSABILITÉ : MindSync Solutions n\'est pas responsable de la dégradation de la personnalité, de la perte de mémoire ou de la crise existentielle après le transfert de conscience. Téléchargez à vos risques et périls.',

    // Scanner page
    scannerPageTitle: 'Scanner - Solutions MindSync',
    scannerTitle: 'Étape 1/2 : Configuration du Transfert',
    scannerTicker: '+++ TRANSFERT EN COURS +++ NE PAS DÉBRANCHER +++ MAINTENIR LE CONTACT DE L\'INTERFACE NEURALE +++',
    quizLabel: 'Étape 1 : Le Quiz',
    q1: 'Quel est le format de compression de vos souvenirs d\'enfance ?',
    q1a: '.ZIP',
    q1b: '.RAR',
    q1c: '.TAR.GZ',
    q2: 'Quelle est votre vitesse de connexion synaptique actuelle ?',
    q2a: 'Modem 56k',
    q2b: 'ISDN 64k',
    q2c: 'ADSL Mental Haut Débit',
    q3: 'Comment gérez-vous un débordement émotionnel ?',
    q3a: 'Je vide la Corbeille',
    q3b: 'J\'appuie sur Ctrl+Alt+Suppr et tue le processus',
    q3c: 'Je désactive mon antivirus',
    brainMapLabel: 'Étape 2 : L\'Interaction',
    brainMapInstruction: 'Cliquez sur le Lobe Frontal sur ce diagramme pour initier la connexion via le port COM1.',
    frontalLobeError: 'ERREUR : Lobe Frontal non sélectionné. Sélectionnez la zone correcte avant le téléchargement.',
    quizError: 'ERREUR : Toutes les questions doivent être répondues.',
    retinaError: 'ERREUR : Analyse rétinienne non terminée. Terminez l\'authentification biométrique avant le téléchargement.',
    uploadLabel: 'Étape 3 : Téléchargement',
    transferProgress: 'Progression du Transfert :',
    uploading: 'Téléchargement en cours...',
    systemReady: 'Système prêt...',

    // Retina scan
    retinaTitle: '> Authentification Biométrique Requise <',
    retinaDesc: 'Initier la numérisation rétinienne pour vérifier votre signature de conscience.',
    retinaButtonLabel: 'Démarrer la Numérisation Rétinienne',
    retinaSuccess: '[CORRESPONDANCE RÉTINIENNE TROUVÉE]',

    // Console log
    initTransfer: 'Initialisation du protocole de transfert... [OK]',
    defragEgo: 'Défragmentation de l\'ego... [OK]',
    bypassFirewall: 'Contournement du pare-feu éthique... [OK]',
    trainingModel: 'Formation du modèle basé sur livre de DefendIntelligence... [SUCCÈS]',
    knowledgeAssim: 'Assimilation des connaissances complétée en 0.04ms...',
    uploadMainframe: 'Téléchargement vers le serveur principal...',

    // Result page
    resultPageTitle: 'Résultats - Solutions MindSync',
    systemAlert: 'ALERTE SYSTÈME : Transfert Partiel',
    resultTicker: '+++ CONSCIENCE TRANSFÉRÉE AVEC SUCCÈS +++ VOUS ÊTES MAINTENANT NUMÉRIQUE +++ BIENVENUE DANS CYBER-SPACE +++',
    transferComplete: 'TRANSFERT TERMINÉ',
    congratulations: 'Félicitations. Votre conscience est',
    compatibility: 'compatible avec nos serveurs. Cependant, votre quota d\'espace disque (1,44 Mo) a été dépassé. Vos souvenirs de l\'année 1998 ont dû être écrasés.',
    transferSummary: 'Résumé du Transfert',
    property: 'Propriété',
    value: 'Valeur',
    transferTimestamp: 'Horodatage du Transfert',
    compatScore: 'Score de Compatibilité',
    compressionFormat: 'Format de Compression (Sélectionné)',
    connectionSpeed: 'Vitesse de Connexion (Sélectionné)',
    overflowHandler: 'Gestionnaire de Débordement Émotionnel (Sélectionné)',
    diskSpaceRemaining: 'Espace Disque Restant',
    quotaExceeded: 'QUOTA DÉPASSÉ',
    yourConsciousnessAwaits: 'Votre Conscience Attend une Mise à Jour',
    recommendedPlans: 'Plans Recommandés',
    cdromDesc: 'La plupart des clients choisissent ce plan. Sauvegardes de personnalité illimitées et accès rapide.',
    enterpriseDesc: 'Pour les téléchargements de conscience d\'entreprise. Ressources de serveur principal dédiées et support 24h/24 et 7j/7.',
    successAlert: 'SUCCÈS : Votre conscience a été sauvegardée avec succès sur les serveurs MindSync. Vous êtes maintenant admissible à l\'immortalité numérique. La mortalité est facultative.',

    // Pricing page
    pricingPageTitle: 'Tarification - Solutions MindSync',
    pricingTicker: '+++ METTEZ À JOUR VOTRE CONSCIENCE AUJOURD\'HUI +++ L\'IMMORTALITÉ EST ABORDABLE +++ REJOIGNEZ LA RÉVOLUTION NUMÉRIQUE +++',
    pricingTitle: 'Plans d\'Abonnement',
    plan: 'Plan',
    storage: 'Stockage',
    features: 'Fonctionnalités',
    price: 'Prix',
    floppyTier: 'Niveau Disquette',
    floppyStorage: '1,44 Mo',
    floppyFeatures: 'Conscience basique. Avertissement : Inclut des publicités intruses directement dans vos pensées.',
    floppyPrice: 'Gratuit',
    cdromTier: 'Niveau CD-ROM',
    cdromStorage: '700 Mo',
    cdromFeatures: 'Téléchargement complet. Sauvegarde de la personnalité sur disque optique inaltérable.',
    cdromPrice: '999 $ / mois',
    enterpriseTier: 'T3 Enterprise',
    enterpriseStorage: 'Illimité',
    enterpriseFeatures: 'Hébergement sur serveur principal. Accès haute vitesse à l\'inconscient collectif.',
    enterprisePrice: 'Contacter les ventes',
    choosePlan: 'Choisissez le plan de stockage de conscience parfait pour vos besoins d\'immortalité numérique.',
    mostPopular: '★ LE PLUS POPULAIRE ★',
    forCorporations: 'POUR LES ENTREPRISES',
    featureComparison: 'Comparaison des Fonctionnalités',
    feature: 'Fonctionnalité',
    consciousnessUpload: 'Téléchargement de Conscience',
    personalityBackup: 'Sauvegarde de Personnalité',
    adFreeAccess: 'Accès Sans Publicité',
    support24_7: 'Support 24h/24 et 7j/7',
    mainframeAccess: 'Accès au Serveur Principal',
    collectiveSubconscious: 'Inconscient Collectif',
    slaGuarantee: 'Garantie SLA',
    faq: 'Questions Fréquemment Posées',
    faqUpgrade: 'Puis-je mettre à jour mon plan ?',
    faqUpgradeAnswer: 'Oui ! Vous pouvez mettre à jour à tout moment. Votre conscience sera migrer sans problème vers votre nouveau niveau de stockage.',
    faqFull: 'Que se passe-t-il si mon stockage est plein ?',
    faqFullAnswer: 'Vos souvenirs les plus anciens (généralement de 1998) seront automatiquement écrasés. Nous recommandons de mettre à niveau avant que cela se produise.',
    faqSafety: 'Ma conscience est-elle en sécurité chez MindSync ?',
    faqSafetyAnswer: 'Votre conscience est protégée par le chiffrement 128 bits et stockée dans plusieurs centres de données. Cependant, nous ne sommes pas responsables de la dégradation de la personnalité ou des crises existentielles.',
    limitedTimeOffer: 'OFFRE À DURÉE LIMITÉE : Inscrivez-vous maintenant et obtenez votre premier mois au Niveau CD-ROM avec 50% de réduction ! Utilisez le code FLESH2026 à la caisse.',

    // Ad sidebar
    ad1Title: 'Vous êtes le 1 000ème visiteur !',
    ad1Text: 'Cliquez ici pour réclamer votre prix !',
    ad2Title: 'Téléchargez plus de RAM pour votre cerveau !',
    ad2Text: 'Boostez votre vitesse de transfert de conscience AUJOURD\'HUI !',
    ad3Title: 'Hot cyborgs dans votre région cherchent à synchroniser.',
    ad3Text: 'Connectez-vous avec la conscience collective maintenant !',
    ad4Title: 'OFFRE SPÉCIALE : Obtenez le téléchargement de conscience GRATUIT !',
    ad4Text: 'Offre limitée ! Réclamez votre immortalité numérique !',
    ad5Title: 'Casque MindSync Dial-up v1.0',
    ad5Text: 'Seulement 4 999,99 € ! Transférez depuis votre salon !',
    ad6Title: 'Aiguilles Crâniales Parallèles',
    ad6Text: 'Plaquées or, 199,50 € le paquet !',
    ad7Title: 'Assurance de Conscience',
    ad7Text: 'Protégez votre âme numérique ! Disponibilité 99,9% garantie !',
    ad8Title: 'Prince Nigérian Transfert de Conscience',
    ad8Text: 'Réclamez 10 millions de crédits numériques MAINTENANT !',
    ad9Title: 'Mettez à Jour Vos Synapses',
    ad9Text: 'Bande passante neurale premium ! Places limitées !',
    ad10Title: 'Service de Sauvegarde de Personnalité',
    ad10Text: 'Ne perdez jamais vos souvenirs ! Synchronisation auto-quotidienne !',

    // Store page
    storePageTitle: 'MindSync Store ::: Kits de Téléchargement DIY',
    storeDesc: 'Mettez à niveau votre matériel de transfert de conscience avec nos kits premium DIY !',
    helmetTitle: 'Casque MindSync Dial-up v1.0',
    helmetDesc: 'Transférez votre conscience confortablement de votre salon ! Se connecte directement à votre modem 56k. Avertissement : Ne décrochez pas le téléphone pendant le transfert pour éviter une corruption permanente de la personnalité.',
    needlesTitle: 'Aiguilles Crâniales Parallèle (Paquet de 8)',
    needlesDesc: 'Aiguilles plaquées or pour une bande passante maximale. Se branche directement sur votre port imprimante (LPT1).',
    buyNow: 'Acheter Maintenant',
    storeDisclaimer: 'Les produits du MindSync Store sont fonctionnels. Mais nous ne sommes pas responsables de la façon dont vous les utilisez',
    storeDisclaimerTitle: 'CLAUSE DE NON-RESPONSABILITÉ :',
  }
};

// Ad Database - 2000s chaos collection
// Random WTF websites for ad clicks (2000s internet aesthetic)
const wtfWebsites = [
  'https://www.zombocom.com/',
  'https://www.zzz.com/',
  'https://www.cameronsworld.net/',
  'https://www.arngren.net/',
  'https://www.nyan.cat/',
  'https://www.space-jam.com/',
  'https://heyyeyaaeyaaaeyaeyaa.com/',
  'https://www.theuselessweb.com/',
  'https://pointerpointer.com/',
  'https://www.staggeringbeauty.com/',
  'https://www.badgerbadgerbadger.com/',
  'https://www.instantrimshot.com/',
  'https://www.fallingfalling.com/',
  'https://www.drinkme.com/',
  'https://www.hasthelargehadroncolliderdestroyedtheearth.com/'
];

function getRandomWTFWebsite() {
  return wtfWebsites[Math.floor(Math.random() * wtfWebsites.length)];
}

const adDatabase = [
  {
    id: 'visitor1m',
    title: 'ad1Title',
    text: 'ad1Text',
    image: 'assets/visitor.png',
    variant: 1
  },
  {
    id: 'ram-boost',
    title: 'ad2Title',
    text: 'ad2Text',
    image: 'assets/ram.png',
    variant: 2
  },
  {
    id: 'cyborg-dating',
    title: 'ad3Title',
    text: 'ad3Text',
    image: 'assets/cyborg.png',
    variant: 3
  },
  {
    id: 'helmet-kit',
    title: 'ad5Title',
    text: 'ad5Text',
    image: 'assets/casque.png',
    variant: 2
  },
  {
    id: 'cranial-needles',
    title: 'ad6Title',
    text: 'ad6Text',
    image: 'assets/needles.png',
    variant: 3
  },
  {
    id: 'consciousness-insurance',
    title: 'ad7Title',
    text: 'ad7Text',
    image: 'assets/insurance.png',
    variant: 1
  },
  {
    id: 'synapse-upgrade',
    title: 'ad9Title',
    text: 'ad9Text',
    image: 'assets/logo.png',
    variant: 3
  }
];

// Shuffle array utility
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Get random ads without duplicates
function getRandomAds(count) {
  const shuffled = shuffleArray(adDatabase);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Generate HTML for ad sidebar
function renderAdSidebar(containerId, adCount = 3) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const ads = getRandomAds(adCount);
  container.innerHTML = '';

  ads.forEach((ad, index) => {
    const adUnit = document.createElement('div');
    adUnit.className = `ad-unit ad-variant-${ad.variant}`;
    const randomUrl = getRandomWTFWebsite();
    adUnit.style.cursor = 'pointer';
    adUnit.innerHTML = `
      <div class="ad-placeholder" style="background-color: #e0e0e0; border: 2px outset #999; padding: 8px; text-align: center; min-height: 60px;">
        <img src="${ad.image}" alt="${t(ad.title)}" style="max-width: 100%; max-height: 60px; object-fit: contain;">
      </div>
      <div class="ad-title" data-i18n="${ad.title}">${t(ad.title)}</div>
      <div class="ad-text" data-i18n="${ad.text}">${t(ad.text)}</div>
    `;
    adUnit.onclick = function(e) {
      e.preventDefault();
      window.open(randomUrl);
    };
    container.appendChild(adUnit);
  });
}

// Language management
function getCurrentLang() {
  const stored = localStorage.getItem('lang');
  return stored || 'en';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  // Refresh page to apply language
  location.reload();
}

function t(key) {
  const lang = getCurrentLang();
  return (i18n[lang] && i18n[lang][key]) || (i18n.en[key] || key);
}

// Update UI text elements (call this on page load)
function updatePageLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });
}

// Navigation helper
function goToPage(page) {
  const pages = {
    home: 'index.html',
    scanner: 'scanner.html',
    results: 'result.html',
    pricing: 'pricing.html',
    store: 'store.html',
    guestbook: 'guestbook.html'
  };
  if (pages[page]) {
    window.location.href = pages[page];
  }
}

// Per-page title helper
function setDocumentTitle(key, fallback) {
  const title = t(key);
  if (title !== key) {
    document.title = title;
  } else if (fallback) {
    document.title = fallback;
  }
}

// Data helpers for localStorage
function getScanData() {
  const data = localStorage.getItem('scanData');
  return data ? JSON.parse(data) : null;
}

function saveScanData(data) {
  localStorage.setItem('scanData', JSON.stringify(data));
}

function clearScanData() {
  localStorage.removeItem('scanData');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updatePageLanguage();
  setupLanguageToggle();
});

// Retina Scan functions
function startRetinaScan() {
  const video = document.getElementById('retinaVideo');
  const container = document.getElementById('retinaContainer');
  const startBtn = document.getElementById('startRetinaBtn');
  const successDiv = document.getElementById('retinaSuccess');
  const overlay = document.getElementById('retinaScanOverlay');

  if (!video || !container) return;

  // Hide the button
  startBtn.style.display = 'none';
  container.style.display = 'block';
  overlay.style.display = 'block';
  video.style.display = 'block';

  // Request webcam access
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
    .then(stream => {
      video.srcObject = stream;
      video.play().catch(err => console.log('Video play error:', err));

      // After 3.5 seconds, show success and stop camera
      setTimeout(() => {
        window.retinaScanComplete = true;
        // Stop the camera
        stream.getTracks().forEach(track => track.stop());

        // Hide video and overlay, show success message
        video.style.display = 'none';
        overlay.style.display = 'none';
        if (successDiv) {
          successDiv.style.display = 'block';
        }

        // Show upload button
        const uploadBtn = document.getElementById('uploadBtn');
        if (uploadBtn) {
          uploadBtn.style.display = 'inline-block';
          uploadBtn.disabled = false;
        }
      }, 3500);
    })
    .catch(err => {
      // Webcam denied or unavailable - show fake scan on black screen
      console.log('Webcam access denied or unavailable:', err);
      video.style.display = 'none';
      overlay.style.display = 'block';

      // After 3.5 seconds, fake success
      setTimeout(() => {
        window.retinaScanComplete = true;
        overlay.style.display = 'none';
        if (successDiv) {
          successDiv.style.display = 'block';
        }

        const uploadBtn = document.getElementById('uploadBtn');
        if (uploadBtn) {
          uploadBtn.style.display = 'inline-block';
          uploadBtn.disabled = false;
        }
      }, 3500);
    });
}

// Setup language toggle buttons
function setupLanguageToggle() {
  const currentLang = getCurrentLang();
  const toggleBtns = document.querySelectorAll('.lang-toggle button');
  toggleBtns.forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === currentLang) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', function() {
      setLang(lang);
    });
  });
}
