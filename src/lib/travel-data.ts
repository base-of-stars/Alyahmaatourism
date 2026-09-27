import baliImage from "@/assets/bali.jpg";
import cappadociaImage from "@/assets/cappadocia.jpg";
import desertImage from "@/assets/desert-camp.jpg";
import maldivesImage from "@/assets/maldives.jpg";
import dubaiHeroImage from "@/assets/dubai-creek-hero.jpg";

export interface Destination {
  id: string;
  name: string;
  region: string;
  duration: string;
  price: string;
  note: string;
  image: string;
  description: string;
  highlights: string[];
  bestSeason: string;
  travelType: string;
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  category: "Island & Sanctuary" | "Heritage & Wonder" | "Alpine & Scenic" | "Desert & Arabian";
  duration: string;
  price: string;
  image: string;
  badge?: string;
  summary: string;
  highlights: string[];
  included: string[];
  days: { day: number; title: string; desc: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "Desert & Heritage" | "Luxury Escapes" | "Insider Guides" | "Visa & Travel Advice" | "Gastronomy & Culture";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  gallery: string[];
  highlights: string[];
  sections: {
    heading: string;
    body: string[];
    callout?: {
      title: string;
      text: string;
    };
    quote?: string;
  }[];
}

export interface VisaService {
  id: string;
  country: string;
  type: string;
  validity: string;
  processingTime: string;
  price: string;
  badge?: string;
  description: string;
  requirements: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Bookings & Payments" | "UAE & Visas" | "Custom Itineraries" | "Support & Safety";
}

/* -------------------------------------------------------------------------- */
/* DESTINATIONS                                                               */
/* -------------------------------------------------------------------------- */
export const destinations: Destination[] = [
  {
    id: "maldives",
    name: "Maldives",
    region: "Indian Ocean",
    duration: "5 nights",
    price: "From AED 4,950",
    note: "Overwater calm",
    image: maldivesImage,
    description: "A private-island sanctuary with direct lagoon access, sunset dolphin cruises, and unhurried days along crystalline atolls.",
    highlights: ["Private overwater pavilion", "House reef snorkeling & manta rays", "Sunset dhoni charter with champagne"],
    bestSeason: "November to April",
    travelType: "Honeymoon & Leisure",
  },
  {
    id: "dubai-desert",
    name: "Dubai Private Desert Reserve",
    region: "United Arab Emirates",
    duration: "Private Day / Overnight",
    price: "From AED 895",
    note: "Golden-hour magic",
    image: desertImage,
    description: "Experience the stillness of the Dubai Desert Conservation Reserve in vintage open-top vehicles, concluding with a private starlit majlis feast.",
    highlights: ["Private conservation safari", "Traditional falconry demonstration", "Gourmet barbecue under celestial skies"],
    bestSeason: "October to April",
    travelType: "Heritage & Wildlife",
  },
  {
    id: "cappadocia",
    name: "Cappadocia",
    region: "Türkiye",
    duration: "4 nights",
    price: "From AED 2,850",
    note: "A sky full of wonder",
    image: cappadociaImage,
    description: "Ancient cave suites carved into volcanic tufa, hidden subterranean churches, and iconic sunrise hot-air balloon flights above the fairy chimneys.",
    highlights: ["Sunrise balloon ascent over Göreme", "Restored stone cave suite stay", "Private guide through Derinkuyu underground city"],
    bestSeason: "April to June & September to November",
    travelType: "Adventure & Romance",
  },
  {
    id: "bali",
    name: "Bali & Nusa Islands",
    region: "Indonesia",
    duration: "7 nights",
    price: "From AED 3,750",
    note: "Culture & nature",
    image: baliImage,
    description: "Temple mornings in the emerald heart of Ubud, cascading jungle waterfalls, and sunset aperitifs perched on Uluwatu's dramatic ocean bluffs.",
    highlights: ["Private pool villa among rice terraces", "Sacred water blessing ceremony", "Uluwatu cliffside seafood dining"],
    bestSeason: "May to October",
    travelType: "Wellness & Discovery",
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps & Zermatt",
    region: "Switzerland",
    duration: "6 nights",
    price: "From AED 6,450",
    note: "Pristine alpine luxury",
    image: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "First-class Glacier Express panoramic rail journeys traversing snow-capped passes, historic mountain chalets, and Matterhorn vistas.",
    highlights: ["Glacier Express Excellence Class seats", "Zermatt car-free village stay", "Private alpine chocolate & fondue tasting"],
    bestSeason: "Year-Round (Winter Ski or Summer Alpine Blooms)",
    travelType: "Scenic Rail & Alpine",
  },
  {
    id: "georgia-caucasus",
    name: "Kazbegi & Tbilisi",
    region: "Georgia",
    duration: "5 nights",
    price: "From AED 2,450",
    note: "High mountain retreat",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "A quick 3.5-hour direct flight from Dubai into the mist-crowned Caucasus range, ancient hilltop monasteries, and rich culinary traditions.",
    highlights: ["Gergeti Trinity Church at dawn", "Rooms Hotel Kazbegi panoramic terrace", "Historic Old Tbilisi sulfur bath district"],
    bestSeason: "May to October & Ski Season Dec-Mar",
    travelType: "Mountain & Gastronomy",
  },
  {
    id: "amalfi-coast",
    name: "Amalfi Coast & Capri",
    region: "Italy",
    duration: "6 nights",
    price: "From AED 7,200",
    note: "Mediterranean glamour",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Cliffside lemon groves, private Riva boat cruises into Capri's Blue Grotto, and timeless sunset terraces overlooking the Tyrrhenian Sea.",
    highlights: ["Private Riva charter around Capri", "Positano cliffside terrace suite", "Tasting limoncello in Ravello private gardens"],
    bestSeason: "May to September",
    travelType: "Coastal Romance",
  },
  {
    id: "kyoto-tokyo",
    name: "Kyoto & Tokyo Harmony",
    region: "Japan",
    duration: "8 nights",
    price: "From AED 8,900",
    note: "Tradition & innovation",
    image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "From tranquil bamboo groves and private tea masters in Kyoto to bullet-train transitions into Tokyo's cutting-edge Michelin culinary circuit.",
    highlights: ["Private Kyoto Zen master tea ceremony", "Shinkansen bullet train green-car passes", "Exclusive Tsukiji culinary tour & omakase"],
    bestSeason: "March to May (Sakura) & Oct to Nov (Autumn)",
    travelType: "Culture & Culinary",
  },
];

/* -------------------------------------------------------------------------- */
/* PACKAGES                                                                   */
/* -------------------------------------------------------------------------- */
export const packages: TourPackage[] = [
  {
    id: "royal-arabian-odyssey",
    title: "The Royal Arabian Odyssey",
    destination: "Dubai & Abu Dhabi, UAE",
    category: "Desert & Arabian",
    duration: "6 Days / 5 Nights",
    price: "AED 5,850",
    badge: "Bestseller",
    image: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "The quintessential United Arab Emirates journey combining Dubai's architectural marvels, heritage souks, and private desert sanctuaries with Abu Dhabi's grand cultural icons.",
    highlights: [
      "Private Mercedes-Benz V-Class chauffeur throughout",
      "VIP Fast-Track arrival at Dubai International Airport",
      "Private conservation desert safari with luxury majlis dining",
      "Louvre Abu Dhabi & Sheikh Zayed Grand Mosque with senior art docent",
      "Dubai Marina sunset yacht cruise with gourmet canapés",
    ],
    included: [
      "5 nights in hand-selected 5-star luxury suites (Downtown Dubai & Saadiyat Island)",
      "Daily gourmet breakfasts and three signature dinners",
      "All private airport and inter-emirate chauffeur transfers",
      "All VIP museum and landmark admissions with priority access",
      "Dedicated 24/7 Al Yahmaa concierge on WhatsApp",
    ],
    days: [
      { day: 1, title: "VIP Dubai Welcome & Downtown Check-in", desc: "Fast-track Marhaba meet-and-assist, private transfer to luxury Downtown suite, evening leisure with views of Burj Khalifa fountains." },
      { day: 2, title: "Old Dubai Heritage & Creek Abra Cruise", desc: "Private docent tour of Al Fahidi Historic Quarter, textile and spice souks, traditional wooden abra across Dubai Creek, and Emirati lunch." },
      { day: 3, title: "Desert Conservation Sanctuary & Starlit Majlis", desc: "Afternoon drive into pristine Dubai Desert Conservation Reserve, wildlife spotting, falconry, dune aperitifs, and four-course firelight dinner." },
      { day: 4, title: "Abu Dhabi Cultural Renaissance", desc: "Scenic highway chauffeur to Abu Dhabi. Private visit to Sheikh Zayed Grand Mosque, followed by private tour of Louvre Abu Dhabi." },
      { day: 5, title: "Private Yacht Charter & Dubai Marina", desc: "Morning at leisure. Late afternoon private 52-foot yacht charter sailing past Bluewaters, Palm Jumeirah, and Burj Al Arab at sunset." },
      { day: 6, title: "Bespoke Shopping & Departure", desc: "Curated personal shopping concierge or relaxing morning spa treatment prior to private VIP airport chauffeur transfer." },
    ],
  },
  {
    id: "maldivian-overwater-euphoria",
    title: "Maldivian Overwater Euphoria",
    destination: "North Malé & Baa Atoll, Maldives",
    category: "Island & Sanctuary",
    duration: "5 Days / 4 Nights",
    price: "AED 9,200",
    badge: "Ultra Luxury",
    image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "Pure barefoot elegance on an exclusive private island with overwater villa living, infinity plunge pools, and bespoke ocean excursions.",
    highlights: [
      "Scenic seaplane transfers directly from Malé",
      "Sunrise overwater yoga and coral reef safari",
      "Private sandbank champagne picnic with personal chef",
      "Underwater cellar sommelier tasting session",
      "Complimentary marine biologist reef restoration dive",
    ],
    included: [
      "4 nights in a 180 sqm Sunset Overwater Pool Villa",
      "Full Board luxury dining across five resort restaurants",
      "Round-trip seaplane transfer flights",
      "60-minute couples Balinese spa massage",
      "Complimentary non-motorized water sports & snorkeling equipment",
    ],
    days: [
      { day: 1, title: "Seaplane Arrival Over Azure Atolls", desc: "Scenic 35-minute seaplane flight, private island drumming welcome, check-in to your overwater pool sanctuary." },
      { day: 2, title: "House Reef Discovery & Manta Rays", desc: "Guided snorkeling expedition with in-house marine biologist to encounter green sea turtles and harmless reef sharks." },
      { day: 3, title: "Castaway Sandbank Luncheon", desc: "Private speedboat journey to an isolated powder-sand spit for an intimate chef-prepared seafood barbecue." },
      { day: 4, title: "Holistic Wellness & Sunset Cruise", desc: "Morning overwater spa treatment followed by an evening traditional dhoni cruise chasing pods of spinner dolphins." },
      { day: 5, title: "Lagoon Breakfast & Farewell", desc: "Floating lagoon champagne breakfast served directly in your villa pool prior to your return seaplane flight." },
    ],
  },
  {
    id: "anatolian-dreamscape",
    title: "Anatolian Dreamscape: Istanbul & Cappadocia",
    destination: "Türkiye",
    category: "Heritage & Wonder",
    duration: "7 Days / 6 Nights",
    price: "AED 5,450",
    badge: "Curator's Pick",
    image: "https://images.pexels.com/photos/27244365/pexels-photo-27244365.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "A dual-center journey capturing the imperial majesty of the Bosphorus strait and the surreal, subterranean wonders of the Cappadocian plateau.",
    highlights: [
      "Private sunrise hot-air balloon flight over the valleys of Göreme",
      "Authentic cave master suite carved into historic volcanic stone",
      "Private sunset yacht charter along Istanbul's Bosphorus",
      "Exclusive after-hours access to Hagia Sophia and Topkapi Palace",
      "Traditional pottery masterclass in the village of Avanos",
    ],
    included: [
      "3 nights in an Istanbul Bosphorus luxury palace hotel + 3 nights in a Cappadocia cave suite",
      "Domestic Turkish Airlines flights (Istanbul - Nevşehir roundtrip)",
      "Daily artisan breakfasts and three regional tasting dinners",
      "All private expert historian guides and admissions",
      "Hot air balloon expedition with flight certificate & celebration",
    ],
    days: [
      { day: 1, title: "Arrival on the Bosphorus", desc: "VIP airport pickup, check-in to waterfront palace hotel, evening stroll along the Sultanahmet historic district." },
      { day: 2, title: "Byzantine & Ottoman Imperial Splendors", desc: "Private guided exploration of Hagia Sophia, Blue Mosque, and the labyrinthine corridors of the Grand Bazaar." },
      { day: 3, title: "Bosphorus Cruise & Flight to Cappadocia", desc: "Private yacht excursion cruising between Europe and Asia; afternoon flight to Nevşehir and check-in to your cave suite." },
      { day: 4, title: "Dawn Hot Air Ballooning & Valley Treks", desc: "Early morning balloon ascent watching dozens of spheres take flight at dawn. Afternoon walk through Pasabag monks valley." },
      { day: 5, title: "Subterranean Cities & Sunset Wine Tasting", desc: "Descend into Derinkuyu underground city with your historian, followed by boutique Anatolian wine tasting on a panoramic terrace." },
      { day: 6, title: "Artisan Villages of Kizilirmak", desc: "Visit red-river pottery studios in Avanos and rock-hewn frescoes at Göreme Open Air Museum." },
      { day: 7, title: "Scenic Departure", desc: "Savor Turkish breakfast with local honeycomb before private transfer for your return connection." },
    ],
  },
  {
    id: "swiss-grand-alpine-splendor",
    title: "Swiss Grand Alpine Splendor",
    destination: "Zurich, Interlaken & Zermatt",
    category: "Alpine & Scenic",
    duration: "7 Days / 6 Nights",
    price: "AED 8,650",
    badge: "Scenic Rail",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "A seamless journey across Switzerland’s most iconic summits using first-class panoramic rail, stay in legendary alpine grand hotels, and wake up to the Matterhorn.",
    highlights: [
      "First-Class Swiss Travel Pass with seat reservations on Glacier Express",
      "Gornergrat cogwheel train ascent facing 29 four-thousand-meter peaks",
      "Private boat cruise on Lake Brienz with turquoise glacier waters",
      "Traditional Swiss artisanal chocolate masterclass in Lucerne",
      "White-glove luggage door-to-door station forwarding service",
    ],
    included: [
      "6 nights in 5-star Swiss grand hotels with mountain or lake vistas",
      "Full first-class Swiss rail passes and scenic mountain rail passes",
      "Gourmet alpine dining reservations and museum entries",
      "24/7 dedicated Swiss travel assistance from Al Yahmaa",
    ],
    days: [
      { day: 1, title: "Welcome to Zurich & Historic Altstadt", desc: "Private chauffeur from Zurich Airport, check-in along Lake Zurich, evening walking tour of the guild houses." },
      { day: 2, title: "Lucerne, Chapel Bridge & Mount Pilatus", desc: "Scenic train to Lucerne, steamer boat on Lake Lucerne, and the world's steepest cogwheel railway to Pilatus." },
      { day: 3, title: "Interlaken & Lauterbrunnen Valley of 72 Waterfalls", desc: "Journey into the Bernese Oberland; marvel at Staubbach and Trümmelbach falls roaring inside mountain rock." },
      { day: 4, title: "Glacier Express to Zermatt", desc: "Board the panoramic rail car through high alpine passes, bridges, and mountain tunnels into car-free Zermatt." },
      { day: 5, title: "Gornergrat & Iconic Matterhorn Dawn", desc: "Ascend to 3,089 meters for breathtaking 360-degree vistas of the Matterhorn reflected in alpine tarns." },
      { day: 6, title: "Glacier Paradise & Alpine Relaxation", desc: "Cable car up to Europe's highest viewing platform, followed by afternoon fireside spa relaxation." },
      { day: 7, title: "Farewell Alpine Switzerland", desc: "First-class rail return to Geneva or Zurich International Airport for your flight back to Dubai." },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* BLOG POSTS                                                                 */
/* -------------------------------------------------------------------------- */
export const blogPosts: BlogPost[] = [
  {
    slug: "dubai-desert-safari-luxury-guide",
    title: "The Connoisseur’s Guide to Dubai’s Desert Reserves: Beyond the Standard Dune Drive",
    subtitle: "A thoughtful exploration of the pristine Dubai Desert Conservation Reserve, private conservation expeditions, and starlit dining.",
    excerpt: "Why the true magic of the Arabian desert begins where the commercial convoys end—in conservation reserves where silence, indigenous wildlife, and authentic hospitality reign.",
    category: "Desert & Heritage",
    readTime: "7 min read",
    publishedAt: "March 15, 2026",
    author: {
      name: "Tariq Al-Mansoor",
      role: "Lead Heritage Specialist & Senior Guide",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    coverImage: "https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1200",
      desertImage,
    ],
    highlights: [
      "The Dubai Desert Conservation Reserve (DDCR) protects over 225 square kilometers of delicate biosphere.",
      "Vintage open-top Land Rovers provide gentle wildlife tracking without disturbing natural sand dunes.",
      "Authentic Bedouin falconry requires patience, respect, and deep understanding of desert ecology.",
      "Private desert majlis dinners feature traditional cooking over acacia and ghaf wood coals.",
    ],
    sections: [
      {
        heading: "The Contrast Between Mass Tourism and Conservation Stillness",
        body: [
          "Every evening, hundreds of passenger four-wheel drives depart the highways of Dubai, headed toward mass desert camps filled with quad bikes and loud music. For the discerning traveler, this creates an erroneous impression of what the Arabian desert represents.",
          "Real desert stillness is acoustic and absolute. The sands hold thousands of years of Bedouin migratory wisdom, delicate tracks of the Arabian oryx, and an extraordinary tapestry of flora that blossoms under winter morning mists.",
          "At Al Yahmaa Tourism, our desert philosophy focuses strictly on low-impact, high-touch conservation reserves. Within these protected territories, vehicle speeds are regulated, wildlife corridors remain unbroken, and guests experience the sands as a contemplative sanctuary.",
        ],
        callout: {
          title: "Concierge Pro-Tip",
          text: "Book your desert journey between October and April, arriving around 3:30 PM. This captures the golden illumination when red dunes transition through copper, crimson, and deep indigo as temperatures gently cool.",
        },
      },
      {
        heading: "Tracking the Arabian Oryx in Vintage 1950s Land Rovers",
        body: [
          "There is an unmistakable elegance to boarding an impeccably restored 1950s Series 1 Land Rover. Unlike closed air-conditioned SUVs that disconnect you from the desert breeze, an open vehicle allows you to smell the wild desert thyme (za'atar) and feel the cooling air shifts across dune troughs.",
          "Our conservation guides are trained naturalists. As you traverse gentle ridgelines, you will encounter the iconic Arabian oryx—once extinct in the wild and successfully reintroduced through royal UAE conservation breeding programs. Their alabaster coats reflect the desert heat while their long, spear-like horns frame the horizon.",
        ],
        quote: "The desert does not demand attention through noise; it captures you through its profound, unhurried quiet.",
      },
      {
        heading: "A Private Starlit Majlis: Culinary Art Under the Constellations",
        body: [
          "As twilight envelops the dunes, you are guided through a flame-lit dune path to a private, low-slung majlis cushioned with rich handwoven kilims. Far from city glow, the night sky unfurls with remarkable clarity—revealing Orion, the Pleiades, and the luminous sweep of the Milky Way.",
          "Dinner is prepared fresh by your dedicated camp chef: slow-roasted spiced lamb shank tender enough to yield to a spoon, charred tiger prawns infused with Persian lime, crisp fattoush with pomegranates from local farms, and warm luqaimat date fritters dusted with toasted sesame.",
          "Accompanied by freshly ground Arabic coffee brewed with whole cardamom pods, this is not an attraction; it is the enduring spirit of Arabian hospitality.",
        ],
      },
    ],
  },
  {
    slug: "maldives-resort-selection-water-villa",
    title: "Overwater Sanctuary or Beach Enclave? How to Select Your Ultimate Maldives Haven",
    subtitle: "House reefs vs. tranquil lagoons, seaplane transfers vs. luxury speedboats, and why villa orientation dictates your stay.",
    excerpt: "With over 160 luxury resorts across 26 coral atolls, navigating the Maldives requires insider knowledge. Here is how our luxury advisors match your desires with the ideal island.",
    category: "Luxury Escapes",
    readTime: "6 min read",
    publishedAt: "March 10, 2026",
    author: {
      name: "Leila Van Der Berg",
      role: "Director of Private Escapes",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    coverImage: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1200",
      maldivesImage,
    ],
    highlights: [
      "Sunset-facing villas stay cooler during midday and provide private front-row evening viewing.",
      "Islands with drop-off house reefs allow snorkeling directly from your private sun deck.",
      "Seaplane transfers operate only during daylight hours (prior to 4:30 PM).",
      "A dual-villa stay (2 nights beach villa + 3 nights overwater) offers the best of both worlds.",
    ],
    sections: [
      {
        heading: "The Overwater Dilemma: Lagoon vs. Drop-Off Reef",
        body: [
          "The signature image of the Maldives is the wooden boardwalk reaching into turquoise water, lined with thatched-roof overwater pavilions. However, not all overwater villas offer the same marine experience.",
          "If your priority is gentle wading, paddling, and that surreal endless milky-turquoise horizon, you want a resort situated inside a sprawling lagoon. The water is calm as a swimming pool, shielded by outer barriers.",
          "Conversely, if you want to slip into your flippers and immediately float above vibrant table corals, reef sharks, and schools of blue tang, you need an island where the house reef is accessible within twenty meters of your villa steps.",
        ],
        callout: {
          title: "Traveler Insight",
          text: "For couples traveling for more than four nights, we frequently suggest our signature 'Split Itinerary': begin amidst the lush jungle canopy and powder-soft sand of a Beach Villa, then migrate to an Overwater Villa for an elevated finish.",
        },
      },
      {
        heading: "Seaplane Thrill vs. Speedboat Convenience",
        body: [
          "Resorts situated in North and South Malé Atolls are reached via 25 to 50-minute luxury speedboat transfers directly from Velana International Airport. This means zero waiting for seaplane flight windows, seamless 24/7 transfers, and ease for late-night international flights from Dubai.",
          "Atolls further afield—such as Baa, Raa, or Noonu—require a twin-otter seaplane flight. The 35-minute aerial journey over circular atoll rings is one of aviation's great spectacles. However, seaplanes can only operate under daylight visual flight rules.",
        ],
        quote: "A destination is not just where you sleep; it is the sensory transition from your everyday pace into total weightlessness.",
      },
    ],
  },
  {
    slug: "cappadocia-fairy-chimneys-cave-suites",
    title: "Sunrise Over Göreme: The Art of Experiencing Cappadocia's Fairy Chimneys",
    subtitle: "Restored Byzantine cave suites, balloon navigation protocols, and culinary surprises in central Anatolia.",
    excerpt: "Cappadocia’s surreal volcanic landscape looks like an illustrated dreamscape. Discover how to plan hot-air balloon flights, private valley walks, and underground exploration.",
    category: "Insider Guides",
    readTime: "8 min read",
    publishedAt: "February 28, 2026",
    author: {
      name: "Murat Özdemir",
      role: "Türkiye Concierge Specialist",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    coverImage: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/27244365/pexels-photo-27244365.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cappadociaImage,
    ],
    highlights: [
      "Hot air balloons fly on weather-contingent aviation clearance; always book at least a 3-night stay.",
      "Cave suites naturally regulate temperature, staying delightfully cool in summer and cozy in winter.",
      "The Red Valley at sunset offers dramatic terracotta hues without the crowded viewpoints.",
      "Underground cities like Kaymakli extend over eight levels deep into volcanic rock.",
    ],
    sections: [
      {
        heading: "Understanding the Balloon Flight Dynamics",
        body: [
          "Watching one hundred and fifty vibrant hot-air balloons inflate in the morning mist while the call to prayer echoes across pigeon valley is pure poetry. But ballooning is strictly governed by the Turkish Civil Aviation Authority.",
          "If wind speeds exceed 11 knots at ground level, all flights are grounded for safety. For this reason, Al Yahmaa advisors never book short two-night trips to Cappadocia. We schedule your balloon flight for the first morning, preserving two subsequent mornings as backups.",
        ],
        callout: {
          title: "Photography Tip",
          text: "The best panoramic shots of the balloon flotilla are not just from inside the basket—they are from the rooftop terraces of authentic cave hotels in Uçhisar, looking down across Love Valley at 6:15 AM.",
        },
      },
      {
        heading: "Living Inside Ancient Stone: The Cave Suite Experience",
        body: [
          "Cappadocia's cave hotels are architectural feats. Master stone carvers have transformed 1,000-year-old Byzantine monastery cells and troglodyte dwellings into world-class boutique sanctuaries.",
          "Volcanic tuff rock has natural thermal insulation properties. In winter, underfloor heating and hand-carved stone fireplaces create an intimate alpine atmosphere; in summer, the stone remains naturally crisp and refreshing.",
        ],
      },
    ],
  },
  {
    slug: "bali-luxury-itinerary-ubud-uluwatu",
    title: "Between Sacred Ravines and Clifftop Sunsets: The Ideal Bali Dual-Center Escape",
    subtitle: "Balancing Ubud's spiritual jungle serenity with the azure swells and private beach clubs of the Bukit Peninsula.",
    excerpt: "How to craft a Balinese journey that honors the island's authentic soul, avoids traffic bottlenecks, and immerses you in private pool villa luxury.",
    category: "Luxury Escapes",
    readTime: "9 min read",
    publishedAt: "February 18, 2026",
    author: {
      name: "Tariq Al-Mansoor",
      role: "Lead Heritage Specialist & Senior Guide",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    coverImage: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1200",
      baliImage,
    ],
    highlights: [
      "Spend the first four nights in Ubud’s Ayung River valley surrounded by tropical rainforest.",
      "Participate in a private Melukat purification ritual led by a Balinese high priest.",
      "Transfer southward to Uluwatu for 3 nights atop 100-meter limestone cliffs.",
      "Dine on jimbaran-style grilled tiger prawns with authentic sambal matah.",
    ],
    sections: [
      {
        heading: "The Rhythm of the Jungle: Ubud Unplugged",
        body: [
          "Waking up to the gentle roar of the Ayung River and the chattering song of kingfishers sets a cadence that no standard resort can match. Ubud remains the spiritual heartbeat of Bali.",
          "Rather than standing in long queues at tourist-heavy swing parks, our travelers explore secluded terraced paddies at dawn in Jatiluwih (a UNESCO cultural landscape) before meeting local woodcarvers and gamelan masters in quiet family compounds.",
        ],
      },
      {
        heading: "Uluwatu: Drama, Surf, and Clifftop Panoramas",
        body: [
          "In the southern Bukit Peninsula, the topography changes dramatically. Here, vertical limestone bluffs plummet into turquoise Indian Ocean breaks. Private villas feature cantilevered glass pools that seem suspended in mid-air.",
          "Evenings in Uluwatu center on the sunset Kecak fire dance at Uluwatu Temple, followed by candlelit seafood dinners right on the sand.",
        ],
      },
    ],
  },
  {
    slug: "uae-tourist-visa-entry-rules-guide",
    title: "UAE Tourist Visas, Multi-Entry Permits & GCC Travel In 2026: The Complete Traveler's Guide",
    subtitle: "A clear, actionable breakdown of 30-day, 60-day tourist visas, GCC resident permits, and VIP express clearance.",
    excerpt: "Navigating immigration requirements should be seamless. Here is the verified guide to entry permits, required documents, and renewal procedures for visiting Dubai and the UAE.",
    category: "Visa & Travel Advice",
    readTime: "5 min read",
    publishedAt: "January 24, 2026",
    author: {
      name: "Salma Al-Ketbi",
      role: "Senior Immigration & Visa Services Lead",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    coverImage: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    highlights: [
      "Standard 30-day single entry visas can be extended inside the country without airport exit.",
      "60-day tourist visas offer optimal flexibility for extended family visits and leisure exploration.",
      "GCC residents with eligible professional titles qualify for streamlined e-visas.",
      "Passport validity must strictly exceed 6 months from the intended date of UAE arrival.",
    ],
    sections: [
      {
        heading: "Single Entry vs. Multiple Entry: Which Do You Need?",
        body: [
          "If your itinerary involves flying into Dubai, taking a side excursion to Oman (Musandam or Salalah), and returning to Dubai for your international departure, you require a Multiple-Entry Tourist Visa.",
          "Single-entry visas expire the moment you pass through passport control exiting the UAE, regardless of remaining validity days. Al Yahmaa verifies your overall regional flight path before submitting documentation to ensure no border complications.",
        ],
        callout: {
          title: "Crucial Rule",
          text: "Never let a tourist visa expire. UAE immigration maintains an automated fine system for overstays. Our team issues proactive alerts 5 days prior to expiry and handles seamless extensions or status adjustments.",
        },
      },
      {
        heading: "The Al Yahmaa White-Glove Visa Processing Guarantee",
        body: [
          "As a DTCM-licensed tourism establishment in Dubai, Al Yahmaa Tourism has direct electronic submission integration with the General Directorate of Residency and Foreigners Affairs (GDRFA) and the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).",
          "Standard applications are approved within 24 to 48 working hours, with 4-hour VIP express clearances available for urgent business travelers and sudden family gatherings.",
        ],
      },
    ],
  },
  {
    slug: "dubai-culinary-scene-michelin-to-creek",
    title: "From Creek-Side Spice Souks to DIFC Starlit Tables: Dubai’s Dual Culinary Soul",
    subtitle: "How Dubai transformed from an abra-crossing spice port into one of the world's most dynamic gastronomic capitals.",
    excerpt: "Navigating the rich dichotomy of Dubai dining: from saffron-laced chai and morning halwa in Old Deira to avant-garde two-star Michelin omakase.",
    category: "Gastronomy & Culture",
    readTime: "7 min read",
    publishedAt: "January 14, 2026",
    author: {
      name: "Tariq Al-Mansoor",
      role: "Lead Heritage Specialist & Senior Guide",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    coverImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    highlights: [
      "The Dubai Michelin Guide now recognizes over 90 world-class restaurants.",
      "Old Deira remains the culinary home of authentic slow-simmered lamb machboos.",
      "DIFC (Dubai International Financial Centre) is the vibrant epicenter for contemporary fine dining.",
      "Traditional gahwa (Arabic coffee) etiquette is a cherished symbol of hospitality.",
    ],
    sections: [
      {
        heading: "The Morning Awakening: Deira and Al Fahidi",
        body: [
          "Before the modern skyscrapers arose, Dubai's commercial heartbeat pulsed along Dubai Creek. Merchants traded frankincense from Oman, saffron from Persia, and cardamoms from the Malabar coast.",
          "Our bespoke culinary walk begins in the quiet dawn alleyways of Al Fahidi. Here, you enjoy hot regag bread crisped over open round plates, filled with cheese and local honey, accompanied by steaming karak tea.",
        ],
      },
      {
        heading: "Evening Sophistication: DIFC and Palm Jumeirah",
        body: [
          "By night, Dubai transforms into an electric culinary metropolis. World-renowned chefs bring technical mastery to DIFC, Jumeirah, and Palm Jumeirah.",
          "Whether you seek an intimate 12-seat Japanese omakase counter or wood-fired Mediterranean seafood paired with skyline views, our concierge secures preferred table reservations at the city's most coveted destinations.",
        ],
      },
    ],
  },
  {
    slug: "swiss-alps-scenic-rail-first-class",
    title: "Glacier Express to the Matterhorn: Traversing Alpine Peaks with White-Glove Precision",
    subtitle: "Panoramic carriages, luggage-forwarding logistics, and staying in legendary Belle Époque chalets.",
    excerpt: "Why the world’s slowest express train remains one of humanity's greatest travel experiences—and how to curate your journey through Swiss cantons effortlessly.",
    category: "Luxury Escapes",
    readTime: "8 min read",
    publishedAt: "December 20, 2025",
    author: {
      name: "Leila Van Der Berg",
      role: "Director of Private Escapes",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    coverImage: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    highlights: [
      "Glacier Express Excellence Class features guaranteed window seating and a 5-course regional meal.",
      "The Landwasser Viaduct curve is the quintessential railway photo opportunity.",
      "Zermatt is completely combustion-engine car-free, preserving pristine mountain air.",
      "Swiss luggage door-to-door services allow travelers to ride trains unencumbered.",
    ],
    sections: [
      {
        heading: "The Art of Slow Alpine Transit",
        body: [
          "Covering 291 bridges, 91 tunnels, and ascending over the 2,033-meter Oberalp Pass, the Glacier Express takes nearly eight hours to connect St. Moritz with Zermatt. It is called the slowest express train in the world, and every minute is a celebration of engineering and natural drama.",
          "In Excellence Class, you are welcomed with vintage champagne, dedicated concierge service, and panoramic glass ceilings that bring vertical granite cliffs right into your peripheral vision.",
        ],
      },
    ],
  },
  {
    slug: "georgia-kazbegi-high-caucasus-retreat",
    title: "Clouds, Glaciers & Monasteries: A 5-Day High-Altitude Retreat in Georgia",
    subtitle: "Just 3.5 hours from Dubai lies the majestic Great Caucasus, ancient stone watchtowers, and centuries-old qvevri wine culture.",
    excerpt: "For UAE residents seeking dramatic mountain scenery, fresh alpine air, and soulful hospitality, Georgia offers an effortless, high-reward escape.",
    category: "Insider Guides",
    readTime: "6 min read",
    publishedAt: "December 05, 2025",
    author: {
      name: "Murat Özdemir",
      role: "Türkiye & Caucasus Specialist",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    coverImage: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    highlights: [
      "Direct flights from DXB to TBS take only 3 hours and 30 minutes.",
      "GCC residents receive visa-free entry upon arrival in Georgia.",
      "Stepantsminda (Kazbegi) features dramatic vistas of Mount Kazbek (5,054 meters).",
      "Gergeti Trinity Church stands solitary at 2,170 meters against glacier peaks.",
    ],
    sections: [
      {
        heading: "The Ascent Along the Georgian Military Highway",
        body: [
          "Leaving the bohemian balconies and leafy boulevards of Tbilisi, the Georgian Military Highway winds north through the Aragvi river basin. Passing the 17th-century fortress of Ananuri, the road climbs steadily over Jvari Pass at 2,379 meters.",
          "As the mountain valleys widen, the snow-capped volcanic cone of Mount Kazbek looms into view, standing guard above the alpine hamlet of Stepantsminda.",
        ],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* VISA SERVICES                                                              */
/* -------------------------------------------------------------------------- */
export const visaServices: VisaService[] = [
  {
    id: "uae-30-day",
    country: "United Arab Emirates",
    type: "30-Day Tourist Visa (Single Entry)",
    validity: "Valid for 60 days to enter; 30 days stay from entry date",
    processingTime: "24 – 48 Hours",
    price: "AED 380",
    badge: "Most Popular",
    description: "Ideal for short vacations, family visits, business expos, and shopping festivals in Dubai and across the UAE.",
    requirements: [
      "Clear passport copy (colored scan, minimum 6 months validity)",
      "Passport-sized photograph with white background",
      "Confirmed round-trip airline ticket details (optional upon inquiry)",
      "Guarantor details or hotel booking confirmation",
    ],
  },
  {
    id: "uae-60-day",
    country: "United Arab Emirates",
    type: "60-Day Tourist Visa (Single Entry)",
    validity: "Valid for 60 days to enter; 60 days stay from entry date",
    processingTime: "24 – 48 Hours",
    price: "AED 650",
    badge: "Extended Stay",
    description: "Perfect for parents, extended family, retirees, and travelers seeking an immersive, unhurried season in the UAE.",
    requirements: [
      "Clear passport copy (minimum 6 months validity)",
      "Recent passport-style photograph",
      "Return flight reservation",
      "Proof of accommodation / host resident Emirates ID if applicable",
    ],
  },
  {
    id: "uae-express",
    country: "United Arab Emirates",
    type: "VIP Express Tourist Visa (4-Hour Clearance)",
    validity: "Valid for 30 or 60 days stay",
    processingTime: "4 – 6 Hours",
    price: "AED 750",
    badge: "Urgent Priority",
    description: "Emergency fast-track clearance for sudden business meetings, spontaneous weekend getaways, and urgent transit requirements.",
    requirements: [
      "High-resolution passport bio page scan",
      "Digital passport photograph",
      "Direct priority WhatsApp verification with our immigration officer",
    ],
  },
  {
    id: "schengen-assistance",
    country: "Schengen Area (Europe)",
    type: "Schengen Visa Concierge & Dossier Preparation",
    validity: "Up to 90 days stay within 180-day window",
    processingTime: "Appointment slot + 10-15 working days",
    price: "From AED 450",
    description: "Full white-glove dossier preparation, appointment securing at VFS/BLS/TLS, confirmed flight/hotel itineraries, and travel insurance.",
    requirements: [
      "UAE Residence Visa (minimum 3 months validity)",
      "Original passport (min 2 blank pages, 6 months validity)",
      "3 to 6 months stamped bank statements demonstrating financial solvency",
      "No Objection Certificate (NOC) from UAE employer or company trade license",
    ],
  },
  {
    id: "uk-visa",
    country: "United Kingdom",
    type: "UK Standard Visitor Visa Consultation",
    validity: "6 months, 2 years, 5 years, or 10 years multiple entry",
    processingTime: "3 to 4 weeks (Priority available)",
    price: "From AED 550",
    description: "Comprehensive review of financial eligibility, online application completion, document indexing, and biometric appointment scheduling.",
    requirements: [
      "Valid passport and UAE residence visa",
      "Employment NOC / salary certificate / proof of business ownership",
      "Personal bank statements showing regular income and sufficient funds",
      "Proof of accommodation and travel itinerary in the UK",
    ],
  },
  {
    id: "saudi-evisa",
    country: "Kingdom of Saudi Arabia",
    type: "Saudi Tourist & Umrah e-Visa",
    validity: "1 Year Multiple Entry (90 days total stay)",
    processingTime: "12 – 24 Hours",
    price: "AED 580",
    badge: "Instant e-Visa",
    description: "Instant electronic authorization for GCC residents and eligible passport holders for tourism, Umrah, and Riyadh Season events.",
    requirements: [
      "Valid GCC residency copy (minimum 3 months validity remaining)",
      "Passport scan with at least 6 months validity",
      "Eligible profession listed on residency card",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* FAQS                                                                       */
/* -------------------------------------------------------------------------- */
export const faqs: FAQItem[] = [
  {
    category: "Bookings & Payments",
    question: "What currencies and payment methods do you accept?",
    answer: "We accept payments in UAE Dirhams (AED), US Dollars (USD), Euros (EUR), and British Pounds (GBP). You can pay via major credit/debit cards (Visa, MasterCard, American Express), direct local UAE bank transfer, international SWIFT wire, or in person at our Deira Dubai office.",
  },
  {
    category: "Bookings & Payments",
    question: "How do deposits and milestone payments work for tailor-made packages?",
    answer: "For customized holiday packages, a standard deposit of 30% to 50% is required to secure luxury villa holds, private flight charters, and scheduled guides. The remaining balance is payable 21 days prior to your departure. For urgent bookings within 14 days, full payment is handled at confirmation.",
  },
  {
    category: "Custom Itineraries",
    question: "Can I customize the hotels, flight classes, and pacing of any package?",
    answer: "Absolutely. Every package featured on our website serves as a refined inspiration point. Our Dubai-based travel designers will adjust the length of stay, substitute boutique cave suites or overwater villas, arrange private helicopter transfers, and cater to special dietary or celebratory requests.",
  },
  {
    category: "Custom Itineraries",
    question: "How far in advance should we plan our holiday?",
    answer: "For peak periods such as New Year in Dubai, Cappadocia balloon season (spring/autumn), or the Maldives festive winter season, we recommend beginning your consultation 3 to 6 months in advance to secure prime villa inventory and preferred flight times.",
  },
  {
    category: "UAE & Visas",
    question: "What is the difference between a 30-day and 60-day UAE tourist visa?",
    answer: "Both visas grant a 60-day window from issuance to enter the UAE. Once you clear UAE immigration, the 30-day visa allows a maximum continuous stay of 30 days, while the 60-day visa permits up to 60 days. Both can be officially extended from inside the country without requiring you to leave.",
  },
  {
    category: "UAE & Visas",
    question: "Can Al Yahmaa assist GCC residents with UAE visas?",
    answer: "Yes. GCC residents holding valid residence permits in Saudi Arabia, Qatar, Kuwait, Bahrain, or Oman with approved professional occupations can have their UAE e-visas processed seamlessly within 24 hours.",
  },
  {
    category: "Support & Safety",
    question: "What support do I receive while traveling abroad?",
    answer: "You receive a direct private WhatsApp connection with your personal Al Yahmaa travel concierge. Whether you need a sudden table change in Istanbul, a rescheduling of an alpine train in Switzerland, or local assistance, our Dubai team is awake and responsive 24 hours a day, 7 days a week.",
  },
  {
    category: "Support & Safety",
    question: "What is your cancellation and rescheduling policy?",
    answer: "We understand that plans can change. We negotiate flexible terms with our partner boutique hotels, private airlines, and transport fleets. In the event of unforeseen medical emergencies or visa delays, we actively work to reschedule your dates with minimal or zero supplier penalty fees wherever possible.",
  },
];