export type Language = "fr" | "en";

export const translations = {
  // Navbar
  nav: {
    home: { fr: "Accueil", en: "Home" },
    services: { fr: "Services", en: "Services" },
    catalog: { fr: "Catalogue", en: "Catalog" },
    about: { fr: "À Propos", en: "About" },
    team: { fr: "Équipe", en: "Team" },
    faq: { fr: "FAQ", en: "FAQ" },
    contact: { fr: "Contact", en: "Contact" },
    quote: { fr: "Demander un devis", en: "Request a quote" },
  },

  // Hero
  hero: {
    tagline: { fr: "Réflexion · Innovation · Solutions", en: "Thinking · Innovation · Solutions" },
    titlePart1: { fr: "Votre partenaire en", en: "Your partner in" },
    titleHighlight1: { fr: "production", en: "production" },
    titleAnd: { fr: "et", en: "and" },
    titleHighlight2: { fr: "développement", en: "development" },
    subtitle: {
      fr: "Approvisionnement agro-industriel, services maritimes shipchandler et solutions logistiques sur mesure.",
      en: "Agro-industrial supply, maritime shipchandler services, and tailored logistics solutions.",
    },
    ctaServices: { fr: "Découvrir nos services", en: "Discover our services" },
    ctaContact: { fr: "Nous contacter", en: "Contact us" },
  },

  // Services
  services: {
    tagline: { fr: "Ce que nous offrons", en: "What we offer" },
    title: { fr: "Nos Services", en: "Our Services" },
    shipchandler: {
      title: { fr: "Shipchandler", en: "Shipchandler" },
      desc: {
        fr: "Approvisionnement des navires en équipements, pièces de rechange et produits alimentaires. Un service fiable et rapide pour la flotte maritime.",
        en: "Ship supply of equipment, spare parts and food products. A reliable and fast service for the maritime fleet.",
      },
    },
    agricultural: {
      title: { fr: "Service Agricole", en: "Agricultural Service" },
      desc: {
        fr: "Approvisionnement en matériels industriels pour les agro-industries. Nous accompagnons le développement agricole avec des équipements de qualité.",
        en: "Industrial equipment supply for agro-industries. We support agricultural development with quality equipment.",
      },
    },
    delivery: {
      title: { fr: "Livraison & Logistique", en: "Delivery & Logistics" },
      desc: {
        fr: "Gestion des livraisons avec suivi en temps réel. Vos commandes sont acheminées de manière sécurisée et ponctuelle.",
        en: "Delivery management with real-time tracking. Your orders are shipped securely and on time.",
      },
    },
    consulting: {
      title: { fr: "Conseil & Projets", en: "Consulting & Projects" },
      desc: {
        fr: "Conseil en gestion de projets industriels, installation de matériels agricoles et accompagnement stratégique sur mesure.",
        en: "Industrial project management consulting, agricultural equipment installation, and tailored strategic support.",
      },
    },
  },

  // Stats
  stats: {
    clients: { fr: "Clients satisfaits", en: "Satisfied clients" },
    experience: { fr: "Années d'expérience", en: "Years of experience" },
    keyServices: { fr: "Services clés", en: "Key services" },
    support: { fr: "Support disponible", en: "Support available" },
  },

  // About
  about: {
    tagline: { fr: "Qui sommes-nous", en: "Who we are" },
    title: { fr: "À Propos de D&C", en: "About D&C" },
    p1: {
      fr: "D&C est une entreprise de production et développement spécialisée dans l'approvisionnement des agro-industries en matériels industriels. Nous proposons également des services de shipchandler pour le ravitaillement des navires, ainsi que des solutions logistiques complètes.",
      en: "D&C is a production and development company specializing in supplying agro-industries with industrial equipment. We also offer shipchandler services for ship supply, as well as complete logistics solutions.",
    },
    p2: {
      fr: "Notre mission est de renforcer la chaîne d'approvisionnement de nos clients grâce à un service professionnel, fiable et adapté à leurs besoins spécifiques.",
      en: "Our mission is to strengthen our clients' supply chain through professional, reliable service tailored to their specific needs.",
    },
    whyTitle: { fr: "Pourquoi nous choisir ?", en: "Why choose us?" },
    highlights: {
      fr: [
        "Expertise dans le domaine agro-industriel",
        "Services maritimes shipchandler fiables",
        "Livraison avec suivi en temps réel",
        "Accompagnement et conseil personnalisé",
        "Réseau de partenaires étendu",
      ],
      en: [
        "Expertise in the agro-industrial sector",
        "Reliable maritime shipchandler services",
        "Delivery with real-time tracking",
        "Personalized support and consulting",
        "Extensive partner network",
      ],
    },
  },

  // Contact
  contact: {
    tagline: { fr: "Parlons de votre projet", en: "Let's talk about your project" },
    title: { fr: "Contactez-nous", en: "Contact Us" },
    intro: {
      fr: "N'hésitez pas à nous contacter pour toute demande de renseignement, devis ou partenariat. Notre équipe est à votre disposition.",
      en: "Feel free to contact us for any inquiry, quote, or partnership. Our team is at your service.",
    },
    email: { fr: "Email", en: "Email" },
    phone: { fr: "Téléphone", en: "Phone" },
    address: { fr: "Adresse", en: "Address" },
    fullName: { fr: "Nom complet", en: "Full name" },
    namePlaceholder: { fr: "Votre nom", en: "Your name" },
    message: { fr: "Message", en: "Message" },
    messagePlaceholder: { fr: "Décrivez votre besoin...", en: "Describe your needs..." },
    send: { fr: "Envoyer le message", en: "Send message" },
    sent: { fr: "✓ Message envoyé !", en: "✓ Message sent!" },
  },

  // Footer
  footer: {
    desc: {
      fr: "Entreprise de production et développement spécialisée dans l'approvisionnement agro-industriel et maritime.",
      en: "Production and development company specializing in agro-industrial and maritime supply.",
    },
    motto: { fr: "Réflexion · Innovation · Solutions", en: "Thinking · Innovation · Solutions" },
    servicesTitle: { fr: "Services", en: "Services" },
    linksTitle: { fr: "Liens", en: "Links" },
    rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
    servicesList: {
      fr: ["Shipchandler", "Service Agricole", "Livraison & Logistique", "Conseil & Projets"],
      en: ["Shipchandler", "Agricultural Service", "Delivery & Logistics", "Consulting & Projects"],
    },
    linkLabels: {
      fr: ["Accueil", "Services", "À Propos", "Notre Équipe", "Contact"],
      en: ["Home", "Services", "About", "Our Team", "Contact"],
    },
  },

  // Founder / Team section (homepage)
  founder: {
    tagline: { fr: "Mot du Fondateur", en: "Founder's Message" },
    visionTitle: { fr: "Notre Vision", en: "Our Vision" },
    founderRole: { fr: "Fondateur & Directeur Général", en: "Founder & CEO" },
    quote: {
      fr: "Chez D&C, nous croyons que la réflexion, l'innovation et les solutions concrètes sont les piliers de tout développement durable. Notre ambition est de bâtir un réseau d'approvisionnement fiable pour l'industrie africaine.",
      en: "At D&C, we believe that reflection, innovation, and concrete solutions are the pillars of sustainable development. Our ambition is to build a reliable supply network for African industry.",
    },
    teamTagline: { fr: "Notre Équipe", en: "Our Team" },
    teamTitle: { fr: "Les Piliers de D&C", en: "The Pillars of D&C" },
    achievements: {
      fr: [
        { value: "500+", label: "Clients Servis" },
        { value: "15+", label: "Années d'Expérience" },
        { value: "50+", label: "Collaborateurs" },
        { value: "98%", label: "Taux de Satisfaction" },
      ],
      en: [
        { value: "500+", label: "Clients Served" },
        { value: "15+", label: "Years of Experience" },
        { value: "50+", label: "Collaborators" },
        { value: "98%", label: "Satisfaction Rate" },
      ],
    },
    teamRoles: {
      fr: ["Directeur des Opérations", "Responsable Shipchandler", "Responsable Agricole", "Responsable Commercial"],
      en: ["Operations Director", "Shipchandler Manager", "Agricultural Manager", "Commercial Manager"],
    },
  },

  // Catalog
  catalog: {
    title: { fr: "Catalogue de Produits", en: "Product Catalog" },
    subtitle: { fr: "Découvrez notre gamme complète de produits et services", en: "Discover our complete range of products and services" },
    search: { fr: "Rechercher un produit...", en: "Search a product..." },
    all: { fr: "Tous", en: "All" },
    agricultural: { fr: "Agricole", en: "Agricultural" },
    delivery: { fr: "Livraison", en: "Delivery" },
    consulting: { fr: "Conseil", en: "Consulting" },
    outOfStock: { fr: "Rupture de stock", en: "Out of stock" },
    addToCart: { fr: "Ajouter au panier", en: "Add to cart" },
    addedToCart: { fr: "Ajouté au panier", en: "Added to cart" },
    noProducts: { fr: "Aucun produit trouvé", en: "No products found" },
  },

  // Cart
  cart: {
    title: { fr: "Panier", en: "Cart" },
    empty: { fr: "Votre panier est vide", en: "Your cart is empty" },
    total: { fr: "Total", en: "Total" },
    order: { fr: "Commander", en: "Order" },
    clear: { fr: "Vider", en: "Clear" },
  },

  // Checkout
  checkout: {
    emptyCart: { fr: "Votre panier est vide.", en: "Your cart is empty." },
    viewCatalog: { fr: "Voir le catalogue", en: "View catalog" },
    back: { fr: "Retour", en: "Back" },
    title: { fr: "Finaliser la Commande", en: "Finalize Order" },
    step1: { fr: "Étape 1 sur 2 — Informations de livraison", en: "Step 1 of 2 — Delivery information" },
    personalInfo: { fr: "Informations personnelles", en: "Personal information" },
    fullName: { fr: "Nom complet", en: "Full name" },
    email: { fr: "Email", en: "Email" },
    phone: { fr: "Téléphone", en: "Phone" },
    deliveryAddress: { fr: "Adresse de livraison", en: "Delivery address" },
    address: { fr: "Adresse", en: "Address" },
    city: { fr: "Ville", en: "City" },
    notes: { fr: "Notes (optionnel)", en: "Notes (optional)" },
    notesPlaceholder: { fr: "Instructions spéciales...", en: "Special instructions..." },
    continuePayment: { fr: "Continuer vers le paiement", en: "Continue to payment" },
    summary: { fr: "Récapitulatif", en: "Summary" },
    requiredFields: { fr: "Champs requis", en: "Required fields" },
    fillRequired: { fr: "Veuillez remplir tous les champs obligatoires.", en: "Please fill in all required fields." },
  },

  // Payment
  payment: {
    noOrder: { fr: "Aucune commande en cours.", en: "No order in progress." },
    title: { fr: "Paiement", en: "Payment" },
    step2: { fr: "Étape 2 sur 2 — Choisissez votre mode de paiement", en: "Step 2 of 2 — Choose your payment method" },
    methodTitle: { fr: "Mode de paiement", en: "Payment method" },
    mobileMoney: { fr: "Mobile Money", en: "Mobile Money" },
    mobileDesc: { fr: "Orange Money, MTN, Wave, Moov", en: "Orange Money, MTN, Wave, Moov" },
    card: { fr: "Carte Bancaire", en: "Credit Card" },
    cardDesc: { fr: "Visa, Mastercard", en: "Visa, Mastercard" },
    bank: { fr: "Virement Bancaire", en: "Bank Transfer" },
    bankDesc: { fr: "Transfert direct", en: "Direct transfer" },
    mobileDetails: { fr: "Détails Mobile Money", en: "Mobile Money Details" },
    mobilePhone: { fr: "Numéro de téléphone", en: "Phone number" },
    mobileConfirm: { fr: "Vous recevrez une demande de confirmation sur ce numéro.", en: "You will receive a confirmation request on this number." },
    cardDetails: { fr: "Détails de la carte", en: "Card Details" },
    cardNumber: { fr: "Numéro de carte", en: "Card number" },
    expiry: { fr: "Expiration", en: "Expiry" },
    bankInfo: { fr: "Informations bancaires", en: "Bank Information" },
    bankHolder: { fr: "Titulaire", en: "Account holder" },
    bankRef: { fr: "Référence", en: "Reference" },
    bankTransferNote: {
      fr: "Effectuez le virement avec la référence ci-dessus. Votre commande sera traitée après réception du paiement.",
      en: "Make the transfer with the reference above. Your order will be processed after payment is received.",
    },
    processing: { fr: "Traitement en cours...", en: "Processing..." },
    confirm: { fr: "Confirmer le paiement", en: "Confirm payment" },
    numberRequired: { fr: "Numéro requis", en: "Number required" },
    enterMobile: { fr: "Veuillez entrer votre numéro Mobile Money.", en: "Please enter your Mobile Money number." },
    confirmed: { fr: "Paiement confirmé ✅", en: "Payment confirmed ✅" },
    orderSuccess: { fr: "Votre commande a été enregistrée avec succès.", en: "Your order has been successfully registered." },
    orderConfirmed: { fr: "Commande Confirmée !", en: "Order Confirmed!" },
    thankYou: {
      fr: "Merci pour votre achat. Vous recevrez une confirmation par SMS/email sous peu.",
      en: "Thank you for your purchase. You will receive a confirmation by SMS/email shortly.",
    },
    backHome: { fr: "Retour à l'accueil", en: "Back to home" },
    summary: { fr: "Récapitulatif", en: "Summary" },
  },

  // Login
  login: {
    title: { fr: "Connexion", en: "Login" },
    subtitle: { fr: "Connectez-vous à votre compte D&C", en: "Log in to your D&C account" },
    email: { fr: "Email", en: "Email" },
    password: { fr: "Mot de passe", en: "Password" },
    remember: { fr: "Se souvenir de moi", en: "Remember me" },
    forgot: { fr: "Mot de passe oublié ?", en: "Forgot password?" },
    submit: { fr: "Se connecter", en: "Log in" },
    loading: { fr: "Connexion...", en: "Logging in..." },
    noAccount: { fr: "Pas encore de compte ?", en: "No account yet?" },
    register: { fr: "S'inscrire", en: "Sign up" },
  },

  // Register
  register: {
    title: { fr: "Créer un compte", en: "Create an account" },
    subtitle: { fr: "Inscrivez-vous pour accéder à nos services", en: "Sign up to access our services" },
    fullName: { fr: "Nom complet", en: "Full name" },
    email: { fr: "Email", en: "Email" },
    phone: { fr: "Téléphone", en: "Phone" },
    password: { fr: "Mot de passe", en: "Password" },
    confirmPassword: { fr: "Confirmer le mot de passe", en: "Confirm password" },
    submit: { fr: "S'inscrire", en: "Sign up" },
    loading: { fr: "Inscription...", en: "Signing up..." },
    hasAccount: { fr: "Déjà un compte ?", en: "Already have an account?" },
    login: { fr: "Se connecter", en: "Log in" },
  },

  // FAQ
  faq: {
    title: { fr: "Foire aux Questions", en: "Frequently Asked Questions" },
    subtitle: { fr: "Trouvez rapidement les réponses à vos questions", en: "Quickly find answers to your questions" },
    notFound: { fr: "Vous n'avez pas trouvé votre réponse ?", en: "Didn't find your answer?" },
    supportAvailable: { fr: "Notre équipe support est disponible pour vous aider", en: "Our support team is available to help you" },
    liveChat: { fr: "Chat en ligne", en: "Live Chat" },
    sendEmail: { fr: "Envoyer un email", en: "Send an email" },
    callUs: { fr: "Nous appeler", en: "Call us" },
    categories: {
      fr: [
        {
          category: "Général",
          questions: [
            { q: "Quels services propose D&C ?", a: "D&C propose des services de shipchandler (approvisionnement de navires), d'approvisionnement agricole en matériels industriels, de livraison et logistique, ainsi que du conseil en gestion de projets industriels." },
            { q: "Dans quelles zones géographiques intervenez-vous ?", a: "Nous intervenons principalement en Afrique de l'Ouest, avec une couverture étendue pour les services maritimes internationaux." },
            { q: "Comment puis-je contacter D&C ?", a: "Vous pouvez nous contacter via le formulaire de contact sur notre site, par email ou par téléphone. Nos coordonnées sont disponibles en bas de chaque page." },
          ],
        },
        {
          category: "Commandes & Livraisons",
          questions: [
            { q: "Comment passer une commande ?", a: "Parcourez notre catalogue, ajoutez les produits au panier, puis validez votre commande. Vous recevrez une confirmation par email avec un numéro de suivi." },
            { q: "Quel est le délai de livraison ?", a: "Les délais varient selon le service : 24-48h pour les livraisons locales, 3-7 jours pour les approvisionnements maritimes, et sur devis pour les projets spéciaux." },
            { q: "Puis-je suivre ma commande en temps réel ?", a: "Oui, une fois votre commande expédiée, vous recevez un lien de suivi par email et SMS pour suivre l'acheminement en temps réel." },
            { q: "Quels sont les modes de paiement acceptés ?", a: "Nous acceptons les virements bancaires, le paiement mobile (Orange Money, MTN Money) et les cartes de crédit." },
          ],
        },
        {
          category: "Shipchandler",
          questions: [
            { q: "Quels types de produits proposez-vous pour les navires ?", a: "Nous fournissons des équipements de pont, pièces de rechange, produits alimentaires, produits d'entretien, équipements de sécurité et matériel de navigation." },
            { q: "Pouvez-vous approvisionner un navire en urgence ?", a: "Oui, nous proposons un service d'approvisionnement express pour les urgences maritimes, disponible 24/7 dans les ports partenaires." },
          ],
        },
        {
          category: "Service Agricole",
          questions: [
            { q: "Quels types de matériels agricoles proposez-vous ?", a: "Nous proposons des motopompes, systèmes d'irrigation, semences, engrais, et équipements de transformation pour les agro-industries." },
            { q: "Proposez-vous un service d'installation ?", a: "Oui, notre équipe technique assure l'installation, la mise en service et la formation sur l'utilisation des équipements fournis." },
          ],
        },
      ],
      en: [
        {
          category: "General",
          questions: [
            { q: "What services does D&C offer?", a: "D&C offers shipchandler services (ship supply), agricultural supply of industrial equipment, delivery and logistics, as well as industrial project management consulting." },
            { q: "In which geographical areas do you operate?", a: "We primarily operate in West Africa, with extended coverage for international maritime services." },
            { q: "How can I contact D&C?", a: "You can contact us via the contact form on our website, by email, or by phone. Our contact details are available at the bottom of each page." },
          ],
        },
        {
          category: "Orders & Deliveries",
          questions: [
            { q: "How do I place an order?", a: "Browse our catalog, add products to your cart, then validate your order. You will receive a confirmation email with a tracking number." },
            { q: "What is the delivery time?", a: "Delivery times vary by service: 24-48h for local deliveries, 3-7 days for maritime supplies, and by quote for special projects." },
            { q: "Can I track my order in real time?", a: "Yes, once your order is shipped, you will receive a tracking link by email and SMS to follow the delivery in real time." },
            { q: "What payment methods are accepted?", a: "We accept bank transfers, mobile payment (Orange Money, MTN Money), and credit cards." },
          ],
        },
        {
          category: "Shipchandler",
          questions: [
            { q: "What types of products do you offer for ships?", a: "We supply deck equipment, spare parts, food products, maintenance products, safety equipment, and navigation equipment." },
            { q: "Can you supply a ship urgently?", a: "Yes, we offer an express supply service for maritime emergencies, available 24/7 in partner ports." },
          ],
        },
        {
          category: "Agricultural Service",
          questions: [
            { q: "What types of agricultural equipment do you offer?", a: "We offer motor pumps, irrigation systems, seeds, fertilizers, and processing equipment for agro-industries." },
            { q: "Do you offer an installation service?", a: "Yes, our technical team handles installation, commissioning, and training on the use of supplied equipment." },
          ],
        },
      ],
    },
  },

  // Team page
  teamPage: {
    tagline: { fr: "Notre Équipe & Réalisations", en: "Our Team & Achievements" },
    heroTitle: { fr: "Les Hommes Derrière D&C", en: "The People Behind D&C" },
    motto: { fr: "Réflexion · Innovation · Solutions", en: "Thinking · Innovation · Solutions" },
    achieveTagline: { fr: "Nos Réalisations", en: "Our Achievements" },
    achieveTitle: { fr: "Ce Que Nous Avons Accompli", en: "What We Have Accomplished" },
    founderTagline: { fr: "Le Fondateur", en: "The Founder" },
    visionTitle: { fr: "Vision & Leadership", en: "Vision & Leadership" },
    founderRole: { fr: "Fondateur & Directeur Général", en: "Founder & CEO" },
    teamTagline: { fr: "Notre Équipe", en: "Our Team" },
    teamTitle: { fr: "Les Piliers de D&C", en: "The Pillars of D&C" },
    photosNote: { fr: "Les photos et noms réels seront ajoutés prochainement.", en: "Real photos and names will be added soon." },
    accomplishments: {
      fr: [
        { value: "500+", title: "Clients Servis", description: "Des centaines d'entreprises nous font confiance pour leurs besoins en approvisionnement." },
        { value: "15+", title: "Années d'Expérience", description: "Plus d'une décennie de savoir-faire dans les secteurs agro-industriel et maritime." },
        { value: "50+", title: "Collaborateurs", description: "Une équipe dévouée et qualifiée au service de nos partenaires." },
        { value: "98%", title: "Taux de Satisfaction", description: "L'excellence opérationnelle au cœur de chaque mission." },
      ],
      en: [
        { value: "500+", title: "Clients Served", description: "Hundreds of businesses trust us for their supply needs." },
        { value: "15+", title: "Years of Experience", description: "Over a decade of expertise in the agro-industrial and maritime sectors." },
        { value: "50+", title: "Collaborators", description: "A dedicated and qualified team serving our partners." },
        { value: "98%", title: "Satisfaction Rate", description: "Operational excellence at the heart of every mission." },
      ],
    },
    members: {
      fr: [
        { name: "Directeur des Opérations", role: "Opérations", description: "Supervise l'ensemble des activités logistiques et d'approvisionnement." },
        { name: "Responsable Shipchandler", role: "Maritime", description: "Coordonne les ravitaillements de navires et les partenariats portuaires." },
        { name: "Responsable Agricole", role: "Agro-industrie", description: "Gère les approvisionnements en matériels et équipements agricoles." },
        { name: "Responsable Commercial", role: "Développement", description: "Développe les relations clients et les nouveaux marchés." },
        { name: "Responsable Logistique", role: "Logistique", description: "Assure le suivi et la coordination des livraisons." },
        { name: "Responsable Conseil", role: "Conseil", description: "Accompagne les clients dans leurs projets industriels et stratégiques." },
      ],
      en: [
        { name: "Operations Director", role: "Operations", description: "Oversees all logistics and supply activities." },
        { name: "Shipchandler Manager", role: "Maritime", description: "Coordinates ship supply and port partnerships." },
        { name: "Agricultural Manager", role: "Agro-industry", description: "Manages agricultural equipment and supplies." },
        { name: "Commercial Manager", role: "Development", description: "Develops client relationships and new markets." },
        { name: "Logistics Manager", role: "Logistics", description: "Ensures delivery tracking and coordination." },
        { name: "Consulting Manager", role: "Consulting", description: "Supports clients in their industrial and strategic projects." },
      ],
    },
  },

  // Subscriptions
  subscriptions: {
    badge: { fr: "Abonnements Tiers", en: "Third-Party Subscriptions" },
    title: { fr: "Plans d'Abonnement", en: "Subscription Plans" },
    subtitle: {
      fr: "Les tiers (revendeurs, agents, entreprises) doivent souscrire à un plan pour accéder à la plateforme d'achat en gros et bénéficier de tarifs préférentiels.",
      en: "Third parties (resellers, agents, companies) must subscribe to a plan to access the wholesale purchasing platform and benefit from preferential rates.",
    },
    popular: { fr: "Le plus populaire", en: "Most popular" },
    paymentTitle: { fr: "Moyens de Paiement Acceptés", en: "Accepted Payment Methods" },
    paymentSubtitle: { fr: "Payez facilement avec le moyen qui vous convient", en: "Pay easily with the method that suits you" },
    individualTitle: { fr: "Vous êtes un particulier ?", en: "Are you an individual?" },
    individualText: {
      fr: "Les particuliers peuvent acheter directement sur notre e-commerce sans abonnement. Créez simplement un compte gratuit pour commencer.",
      en: "Individuals can buy directly on our e-commerce without a subscription. Simply create a free account to get started.",
    },
    accessCatalog: { fr: "Accéder au Catalogue", en: "Access Catalog" },
    plans: {
      fr: [
        {
          name: "Starter", price: 50000, period: "/ mois",
          description: "Pour les petites entreprises et revendeurs débutants",
          features: ["Accès au catalogue complet", "Commandes en ligne", "Support par email", "Historique des commandes", "1 utilisateur"],
          cta: "Choisir Starter",
        },
        {
          name: "Business", price: 150000, period: "/ mois",
          description: "Pour les entreprises en croissance et agents maritimes",
          features: ["Tout le plan Starter", "Prix préférentiels (-10%)", "Support prioritaire", "Suivi des livraisons en temps réel", "5 utilisateurs", "Facturation mensuelle", "Accès API catalogue"],
          cta: "Choisir Business",
        },
        {
          name: "Enterprise", price: 350000, period: "/ mois",
          description: "Pour les grandes entreprises et flottes maritimes",
          features: ["Tout le plan Business", "Prix négociés sur mesure (-20%)", "Account manager dédié", "Livraison express gratuite", "Utilisateurs illimités", "Intégration ERP", "Rapports & analytics avancés", "SLA garanti 99.9%"],
          cta: "Contacter les ventes",
        },
      ],
      en: [
        {
          name: "Starter", price: 50000, period: "/ month",
          description: "For small businesses and beginner resellers",
          features: ["Full catalog access", "Online orders", "Email support", "Order history", "1 user"],
          cta: "Choose Starter",
        },
        {
          name: "Business", price: 150000, period: "/ month",
          description: "For growing businesses and maritime agents",
          features: ["Everything in Starter", "Preferential pricing (-10%)", "Priority support", "Real-time delivery tracking", "5 users", "Monthly billing", "Catalog API access"],
          cta: "Choose Business",
        },
        {
          name: "Enterprise", price: 350000, period: "/ month",
          description: "For large companies and maritime fleets",
          features: ["Everything in Business", "Custom negotiated pricing (-20%)", "Dedicated account manager", "Free express delivery", "Unlimited users", "ERP integration", "Advanced reports & analytics", "99.9% SLA guaranteed"],
          cta: "Contact sales",
        },
      ],
    },
    paymentMethods: {
      fr: [
        { name: "Mobile Money", description: "MTN MoMo, Orange Money" },
        { name: "Carte Bancaire", description: "Visa, Mastercard" },
        { name: "Virement Bancaire", description: "Transfert direct" },
      ],
      en: [
        { name: "Mobile Money", description: "MTN MoMo, Orange Money" },
        { name: "Credit Card", description: "Visa, Mastercard" },
        { name: "Bank Transfer", description: "Direct transfer" },
      ],
    },
  },

  // Shipchandler Login
  shipchandlerLogin: {
    title: { fr: "Service Shipchandler", en: "Shipchandler Service" },
    subtitle: {
      fr: "Accédez à notre catalogue d'approvisionnement maritime. Veuillez renseigner les informations de votre navire pour continuer.",
      en: "Access our maritime supply catalog. Please provide your vessel information to continue.",
    },
    vesselId: { fr: "Identification du Navire", en: "Vessel Identification" },
    vesselName: { fr: "Nom du Navire", en: "Vessel Name" },
    imoNumber: { fr: "Numéro IMO", en: "IMO Number" },
    captainName: { fr: "Nom du Capitaine", en: "Captain's Name" },
    flag: { fr: "Pavillon", en: "Flag" },
    port: { fr: "Port d'Escale", en: "Port of Call" },
    arrivalDate: { fr: "Date d'Arrivée", en: "Arrival Date" },
    vesselType: { fr: "Type de Navire", en: "Vessel Type" },
    selectType: { fr: "Sélectionner le type", en: "Select type" },
    types: {
      fr: { cargo: "Cargo", tanker: "Tanker", bulk: "Vraquier", container: "Porte-conteneurs", fishing: "Navire de pêche", passenger: "Navire passagers", other: "Autre" },
      en: { cargo: "Cargo", tanker: "Tanker", bulk: "Bulk Carrier", container: "Container Ship", fishing: "Fishing Vessel", passenger: "Passenger Ship", other: "Other" },
    },
    agentSection: { fr: "Agent Maritime (optionnel)", en: "Maritime Agent (optional)" },
    agentName: { fr: "Nom de l'Agent", en: "Agent Name" },
    agentPhone: { fr: "Téléphone Agent", en: "Agent Phone" },
    agentEmail: { fr: "Email Agent", en: "Agent Email" },
    verifying: { fr: "Vérification...", en: "Verifying..." },
    accessCatalog: { fr: "Accéder au Catalogue Shipchandler", en: "Access Shipchandler Catalog" },
  },

  // Shipchandler Catalog
  shipchandlerCatalog: {
    title: { fr: "Catalogue Shipchandler", en: "Shipchandler Catalog" },
    vessel: { fr: "Navire", en: "Vessel" },
    cart: { fr: "Panier", en: "Cart" },
    cartSummary: { fr: "Récapitulatif du Panier", en: "Cart Summary" },
    search: { fr: "Rechercher un produit shipchandler...", en: "Search shipchandler product..." },
    all: { fr: "Tous", en: "All" },
    food: { fr: "Alimentation", en: "Food" },
    parts: { fr: "Pièces de Rechange", en: "Spare Parts" },
    clothing: { fr: "Vêtements & EPI", en: "Clothing & PPE" },
    fuel: { fr: "Carburant & Lubrifiant", en: "Fuel & Lubricant" },
    medical: { fr: "Médical", en: "Medical" },
    safety: { fr: "Sécurité", en: "Safety" },
    placeOrder: { fr: "Passer la Commande", en: "Place Order" },
    clear: { fr: "Vider", en: "Clear" },
    add: { fr: "Ajouter", en: "Add" },
    addedToCart: { fr: "Ajouté au panier", en: "Added to cart" },
    noProducts: { fr: "Aucun produit trouvé", en: "No products found" },
  },

  // Admin
  admin: {
    dashboard: { fr: "Tableau de bord", en: "Dashboard" },
    products: { fr: "Produits", en: "Products" },
    orders: { fr: "Commandes", en: "Orders" },
    users: { fr: "Utilisateurs", en: "Users" },
    deliveries: { fr: "Livraisons", en: "Deliveries" },
    statistics: { fr: "Statistiques", en: "Statistics" },
    settings: { fr: "Paramètres", en: "Settings" },
    logout: { fr: "Déconnexion", en: "Logout" },
    recentOrders: { fr: "Commandes récentes", en: "Recent orders" },
    viewAll: { fr: "Voir tout", en: "View all" },
    sectionSoon: { fr: "Cette section sera bientôt disponible", en: "This section will be available soon" },
    statsLabels: {
      fr: { orders: "Commandes", products: "Produits", clients: "Clients", revenue: "Revenus" },
      en: { orders: "Orders", products: "Products", clients: "Clients", revenue: "Revenue" },
    },
    tableHeaders: {
      fr: { id: "ID", client: "Client", product: "Produit", status: "Statut", amount: "Montant" },
      en: { id: "ID", client: "Client", product: "Product", status: "Status", amount: "Amount" },
    },
    statusLabels: {
      fr: { delivered: "Livré", inTransit: "En transit", preparing: "En préparation" },
      en: { delivered: "Delivered", inTransit: "In transit", preparing: "Preparing" },
    },
  },

  // 404
  notFound: {
    title: { fr: "Page non trouvée", en: "Page not found" },
    message: { fr: "Oups ! Cette page n'existe pas", en: "Oops! Page not found" },
    backHome: { fr: "Retour à l'accueil", en: "Return to Home" },
  },
} as const;
