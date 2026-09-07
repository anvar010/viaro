import type { FAMapKey } from "./Fa";
import type { TestiMapKey } from "./Tetimonials";

type ExtraSection = {
  h3: string;
  h2?: string;
  quote?: React.ReactNode;
  desc?: React.ReactNode;
  image?: { src: string; alt: string };
  items?: { label: string; desc: React.ReactNode }[];
  list?: string[];
  portList?: { port: string; terminals: string; note: string }[];
  cta?: string;
  content?: string[];
};

type AirportRegion = {
  region: string;
  airports: string[];
  description: React.ReactNode;
  image?: string;
  url?: string;
};

type ServiceItem = {
  id: string;
  FA: FAMapKey;
  Testi: TestiMapKey;
  hero: {
    image: { src: string; alt: string };
    h1: string;
    h2: string;
    description: string;
    cta: { book: string; phone: string };
  };
  trustBar: string[];
  bodyContent: {
    h2: string;
    h3: string;
    content: React.ReactNode[];
    airports: AirportRegion[];
  };
  extraContent?: ExtraSection[];
  pricing: {
    h2: string;
    vehicles: {
      type: string;
      price: number;
      passengers: number;
      models: string[];
      extras: string[];
    }[];
    cta: string;
  };
};

export const serviceEn: ServiceItem[] = [
  // 1. AIRPORT TRANSFERS
  {
    id: "airport-transfers",
    FA: "ServiceAirportFa",
    Testi: "servicesAirportTestimonials",
    hero: {
      image: {
        src: "/images/ImagenAirport.png",
        alt: "Professional Viaro chauffeur waiting at airport baggage claim to assist a client.",
      },
      h1: "Reliable Luxury Airport Car Service",
      h2: "Private Black Car Transfers Across the US, Canada, and Costa Rica",
      description:
        "Skip the taxi lines and avoid the chaos of ride-share apps. At Viaro, we track your flight in real time. If you land early, we are already there. If your flight gets delayed, we wait for you. Your driver meets you at baggage claim, helps with your luggage, and gets you to your destination safely.",
      cta: { book: "Book Your Airport Transfer Now", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Live Flight Tracking",
      "Flat Rates",
      "14 Years of Experience",
      "24/7 Booking",
    ],
    bodyContent: {
      h2: "Serving the World's Busiest Travel Hubs",
      h3: "Premium Transportation Where You Need It Most",
      content: [
        "We provide consistent, world-class luxury transportation solutions at major airports across North America. Whether you are travelling to an important business meeting, we are ready. Our luxury sedans, SUVs, and Sprinter vans are available. ",
        "We understand that flying can be tiring. That is why our chauffeurs offer professional meet-and-greet services inside the terminal. We wait at baggage claim with a personalized sign, ready to assist with your heavy bags.",
        "Unlike ride-share apps that use hidden peak-hour multipliers or cancel during busy times, Viaro guarantees your ride. We offer transparent pricing with no surprising surge multipliers. Your exact quote is calculated based on vehicle type, travel distance, and time of day.",
        "We track every commercial and private flight in real time, so if your flight is delayed, we already know. Your chauffeur adjusts automatically, so you don’t need to communicate. From the moment you step off the plane, you can relax in a quiet, climate-controlled luxury vehicle.",
      ],
      airports: [
        {
          region: "New York",
          airports: ["JFK", "LGA"],
          description:
            "Navigate busy city traffic with ease to Manhattan or Wall Street.",
          image: "/images/ImagenNewYork2.png",
        },
        {
          region: "Los Angeles",
          airports: ["LAX", "VNY"],
          description: "Arrive in Hollywood or Beverly Hills in total comfort.",
          image: "/images/ImagenLosAngeles2.png",
        },
        {
          region: "Chicago",
          airports: ["ORD", "MDW"],
          description:
            "Dependable rides from O'Hare to the downtown Loop, regardless of weather.",
          image: "/images/ImagenChicago2.png",
        },
        {
          region: "Atlanta",
          airports: ["ATL"],
          description:
            "Skip the massive crowds at the world's busiest travel hub.",
          image: "/images/ImagenAtlanta2.png",
        },
        {
          region: "Miami & Seattle",
          airports: ["MIA - SEA", "SEA"],
          description:
            "Perfect for direct airport-to-cruise terminal transfers.",
          image: "/images/ImagenMiami2.png",
        },
        {
          region: "International Hubs",
          airports: ["YVR", "SJO", "LIR"],
          description:
            "Seamless service at major international travel gateways in Canada and Costa Rica.",
          image: "/images/ImagenSeatle2.png",
        },
      ],
    },
    pricing: {
      h2: "Airport Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 129,
          passengers: 3,
          models: ["Cadillac", "Lincoln", "BMW"],
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Gratuity to driver, not the company",
          ],
        },
        {
          type: "SUV",
          price: 169,
          passengers: 6,
          models: ["Cadillac Escalade", "Mercedes", "Volvo"],
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
        },
        {
          type: "Sprinter",
          price: 279,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Up to 13 passengers",
            "Event and meeting transportation",
            "Ideal for corporate groups",
          ],
        },
      ],
      cta: "Check Airport Availability & Rates →",
    },
  },

  // 2. CORPORATE TRANSPORTATION
  {
    id: "corporate-transportation",
    FA: "ServiceCorporateFa",
    Testi: "servicesCorporateTestimonials",
    hero: {
      image: {
        src: "/images/ImagenCorporate.png",
        alt: "Business executive arriving at a corporate meeting in a premium Viaro luxury SUV.",
      },
      h1: "Corporate Transportation & Executive Car Service",
      h2: "Reliable Black Car Travel for Business Leaders Across North America",
      description:
        "Business moves fast. Your transportation must keep up.When you travel for work, you cannot afford to wait in taxi lines or deal with cancelled rideshare apps. A delayed car can derail a million-dollar meeting. That is why leading companies—from tech giants in Seattle to financial firms on Wall Street—trust Viaro for executive ground transportation.We provide the quiet, reliable space your team needs to prepare for the day ahead. Centralized billing. Flight tracking. FBO tarmac pickup. Available 24/7 across the United States, Canada, and Costa Rica.",
      cta: { book: "Open a Corporate Account Today", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Total Discretion",
      "Centralized Billing",
      "Flight Tracking",
      "24/7 Support",
    ],
    bodyContent: {
      h2: "Why Leading Companies Choose Viaro",
      h3: "Industries That Rely on Viaro",
      content: [
        "If you manage travel for a large company, you know ground transportation is usually the weakest link. Flight tracking is precise. Hotels confirm instantly. But ground transport? That is where things fall apart.",
        "That is why companies across every industry—from technology and finance to healthcare and manufacturing—trust Viaro as their corporate transportation partner.",
        "Top companies from tech giants like Microsoft in Redmond, to financial firms on Wall Street—trust our",
      ],
      airports: [
        {
          region: "Technology",
          airports: ["SEA", "BFI"],
          description: (
            <>
              Seattle-area tech companies rely on Viaro for daily executive
              transport between{" "}
              <a
                href="https://www.microsoft.com/en-us/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                Microsoft Redmond Campus
              </a>
              ,{" "}
              <a
                href="https://www.aboutamazon.com/news/workplace/amazon-spheres-seattle-inside-tour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                Amazon South Lake Union HQ
              </a>
              , and Sea-Tac Airport. When executives fly into Boeing Field
              (BFI), we meet them tarmac-side.
            </>
          ),
          image: "/images/Technology.png",
        },
        {
          region: "Finance",
          airports: ["TEB", "JFK", "LGA"],
          description:
            "Investment banks and private equity firms in New York use Viaro for client meetings and investor roadshows. We coordinate multi-city logistics — Teterboro to Manhattan to JFK — so partners focus on deals, not directions.",
          image: "/images/Finance.png",
        },
        {
          region: "Healthcare",
          airports: ["ORD", "DTW"],
          description:
            "Medical device companies and pharma executives trust Viaro for conference transport and hospital site visits. We provide HIPAA-conscious discretion for sensitive travel.",
          image: "/images/Healthcare.png",
        },
        {
          region: "Manufacturing",
          airports: ["DTW", "ORD", "IAH"],
          description:
            "For plant tours and supplier meetings in cities like Detroit (DTW), Chicago (ORD), and Houston (IAH), Viaro provides reliable SUVs and Sprinter vans for executive teams.",
          image: "/images/Manufacturing.png",
        },
        {
          region: "West Coast",
          airports: ["LAX", "VNY", "SFO"],
          description:
            "Studio lots in Burbank, Beverly Hills boardrooms, and Silicon Valley campuses — served by experienced local chauffeurs who know every freeway, shortcut, and VIP entrance.",
          image: "/images/WestCoast.png",
        },
        {
          region: "International",
          airports: ["YVR", "SJO", "LIR"],
          description:
            "Cross-border corporate travel in Canada and Costa Rica handled seamlessly. From Vancouver's financial district to San José's business hubs and Guanacaste's resort corridors.",
          image: "/images/International.png",
        },
      ],
    },
    extraContent: [
      {
        h3: "Corporate Travel Hacks That Save Time",
        items: [
          {
            label: "The Commercial Lane Advantage",
            desc: "At massive airports like LAX, JFK, and ORD, rideshare apps force executives to walk half a mile to public pickup lots. Viaro chauffeurs use restricted commercial vehicle lanes. We meet your team at baggage claim and walk them straight to a waiting car — no crowds, no confusion.",
          },
          {
            label: "The FBO Tarmac Pickup",
            desc: "If your executives fly private into FBO hubs like Boeing Field (BFI), Teterboro (TEB), or Van Nuys (VNY), they should never wait in a lobby. Where security allows, our cars pull right up to the jet on the tarmac. Your CEO steps off the plane and into the car.",
          },
          {
            label: "The Multi-City Roadshow",
            desc: (
              <>
                Planning an investor roadshow across three cities in two days?
                One Viaro account handles complex logistics{" "}
                <a
                  href={`/en/service-areas`}
                  className="border-b border-white/60 hover:border-primary hover:text-primary transition"
                >
                  across 50+ cities
                </a>{" "}
                — New York to Boston to Chicago, seamlessly.
              </>
            ),
          },
        ],
      },
      {
        h3: "Built for Travel Policy Compliance",
        desc: (
          <>
            Viaro aligns with the strict travel policies of organizations like
            the{" "}
            <a
              href="https://www.gbta.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white/60 hover:border-primary hover:text-primary transition"
            >
              Global Business Travel Association (GBTA)
            </a>
            . We provide:
          </>
        ),
        list: [
          "Detailed digital receipts for every trip",
          "Centralized monthly invoicing for finance departments",
          "Expense code tagging for cost center allocation",
          "24/7 booking for executive assistants and travel managers",
          "Dedicated account manager for enterprise clients",
        ],
        cta: "Get a Custom Corporate Quote →",
      },
    ],
    pricing: {
      h2: "Corporate Car Service Rates",
      vehicles: [
        {
          type: "Executive Sedan",
          price: 129,
          passengers: 3,
          models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],
          extras: [
            "Quiet cabin & Wi-Fi",
            "Professional chauffeur",
            "Centralized billing",
          ],
        },
        {
          type: "Executive\nSUV",
          price: 159,
          passengers: 6,
          models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"],
          extras: [
            "Up to 6 passengers + luggage",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
        },
        {
          type: "Executive Sprinter",
          price: 299,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Up to 13 passengers",
            "Conference setup available",
            "Ideal for roadshows & teams",
          ],
        },
      ],
      cta: "Get a Custom Corporate Quote →",
    },
  },

  // 3. FBO & AIRLINE CREW TRANSFERS
  {
    id: "fbo-crew-transportation",
    FA: "ServiceAirlineFa",
    Testi: "servicesAirlineTestimonials",
    hero: {
      image: {
        src: "/images/ImagenAirline.png",
        alt: "Black luxury car parked on the tarmac beside a private jet at an FBO terminal.",
      },
      h1: "FBO Ground Transportation & Airline Crew Transfers",
      h2: "Tarmac-Side Pickup for Private Aviation | Crew Shuttles at 25+ Airports",
      description:
        "You fly private to save travel time. Your ground transportation should respect that.Viaro provides tarmac-side FBO pickup for private jet travelers and reliable crew shuttles for airline flight departments. We track your tail number—not just the schedule. When your wheels touch down, your car is already in position.Transparent pricing. No surprising rates. Available 24/7 across the United States, Canada, and Costa Rica. ",
      cta: { book: "Request Your Instant Quote Now", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Live Flight & Tail Tracking",
      "Tarmac-Side Pickup",
      "Transparent Rates",
      "Full Discretion",
    ],
    bodyContent: {
      h2: "VIP FBO Transfers: Where Every Second Counts",
      h3: "The Standard for Private Aviation Ground Transportation",
      content: [
        "It makes no sense to spend $20,000+ on a charter flight and then wait 20 minutes for a driver who cannot find the FBO entrance. The executives, entrepreneurs, and public figures who fly private expect ground transportation that matches the aircraft experience.",
        "We do not park in the lobby as if it were a commercial airline lot and text you to come outside. We obtain the security clearances required to meet you tarmac-side—right beside your aircraft. We track your specific tail number through FlightAware, not a general airline schedule. When your wheels touch down, your luxury sedan is already in position on the ramp.",
        "You step off the jet and directly into your car. Door to door. Zero wasted time.",
        "These are the major Fixed-Base Operators (FBOs) for private flights and business aviation we serve in North America:",
      ],
      airports: [
        {
          region: "Teterboro (TEB)",
          airports: ["TEB"],
          description:
            "Manhattan's gateway. We coordinate with Signature, Atlantic, and Meridian for seamless ramp access.",
          image: "/images/Teterboro.png",
        },
        {
          region: "Van Nuys (VNY)",
          airports: ["VNY"],
          description:
            "LA's busiest GA airport. Direct service to Beverly Hills, Malibu, and studio lots.",
          image: "/images/VanNuys.png",
        },
        {
          region: "Boeing Field (BFI)",
          airports: ["BFI"],
          description:
            "Pacific Northwest private aviation hub. 10 minutes to downtown Seattle.",
          image: "/images/BoeingField.png",
        },
        {
          region: "DuPage (DPA)",
          airports: ["DPA"],
          description:
            "Avoid O'Hare commercial chaos. Seamless transfers to downtown Chicago.",
          image: "/images/DuePage.png",
        },
        {
          region: "Opa-locka (OPF)",
          airports: ["OPF"],
          description:
            "South Florida's premier executive airport. Direct service to Miami Beach and cruise terminals.",
          image: "/images/OpaLocka.png",
        },
       {
  region: "Centennial (APA)",
  airports: ["APA"],
  description:
    "Colorado's busiest GA airport. SUVs equipped for mountain resort transfers.",
  image: "/images/Centannial.png",
},
],
},
extraContent: [
  {
    h3: "The Pilot's Perspective: Crew Transportation That Works",
    h2: "Written by a Pilot Who Has Been There",
    quote: (
      <>
        <p className="mb-3">
          “After twenty years and thousands of flight hours in private air travel, I can tell you this. The hardest part of any trip is not the approach into busy Class B airspace.”
        </p>

        <p className="mb-3">
          Getting an exhausted crew to the hotel without a disaster.
        </p>

        <p className="mb-3">
          Most ground transport services treat crew pickups like an afterthought. Others send us to public rideshare zones or lose track of our arrival time. Others make us stand in the cold at 2 AM waiting for a van that may or may not arrive.
        </p>

        <p className="mb-3">
          <span className=" text-brand">Viaro</span> does it differently. They understand crew rest regulations and why getting us to bed fast actually matters for flight safety.”
        </p>

       <p className="mt-3">
          The difference is simple:{" "}
          <span className=" text-brand">Viaro</span> tracks your flight
          status in real time. By the time we finish post-flight checks and walk
          out, a clean Sprinter van is already waiting. No wandering the garage.
          Just a smooth ride to a warm bed.
        </p>
      </>
    ),
    image: {
      src: "/images/ImagenFBO3.png",
      alt: "Airline crew boarding a private Viaro Sprinter van for a quick and comfortable hotel transfer.",
    },
  },

      {
        h3: "Insider Hacks at Major Airports",
        items: [
          {
            label: "JFK (New York)",
            desc: "Skip the Terminal 4 rideshare zoo. Viaro picks up at the commercial vehicle area — faster exit, drivers who know Belt Parkway shortcuts to Jamaica hotels.",
          },
          {
            label: "LAX (Los Angeles)",
            desc: "The LAX-it lot is a nightmare during shift changes. Viaro coordinates direct pickup at the terminal — saves at least 30 minutes.",
          },
          {
            label: "ORD (Chicago)",
            desc: "Winter layovers here test everyone. Viaro positions vehicles in the heated garage. When you clear customs at Terminal 5, they are already waiting.",
          },
          {
            label: "ATL (Atlanta)",
            desc: "The world's busiest airport means the world's worst ground chaos. Viaro uses the domestic north/south split strategically — they know your concourse before you do.",
          },
          {
            label: "SEA (Seattle)",
            desc: "Third floor, purple elevator. That is the crew's secret. Viaro knows it. Your driver waits there while others circle the arrivals curb.",
          },
          {
            label: "YVR (Vancouver)",
            desc: "For transborder crews, Viaro handles timing around customs delays. They track your flight and adjust — you never call to say 'we just landed.'",
          },
        ],
      },
      {
        h3: "Discretion Is Standard",
        list: [
          "We do not discuss who we drive. We do not post photos. We do not confirm or deny bookings.",
          "Every Viaro chauffeur signs a confidentiality agreement.",
          "Staff sweep and detail vehicles before each trip.",
          "We coordinate directly with security teams when required.",
          "This is not a premium add-on — it is how we operate for every FBO client.",
        ],
      },
    ],
    pricing: {
      h2: "FBO & Crew Transfer Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 129,
          passengers: 3,
          models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],
          extras: [
            "Tarmac-side pickup",
            "Tail number tracking",
            "Full confidentiality",
          ],
        },
        {
          type: "SUV",
          price: 159,
          passengers: 6,
          models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"],
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Security clearance coordination",
          ],
        },
        {
          type: "Sprinter",
          price: 299,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Full crew transport",
            "Conference setup available",
            "Ideal for flight departments",
          ],
        },
      ],
      cta: "Reserve Your Private FBO Transfer →",
    },
  },

  // 4. CRUISE PORT TRANSFERS
  {
    id: "cruise-port-transfers",
    FA: "ServiceCruiseFa",
    Testi: "servicesCruiseTestimonials",
    hero: {
      image: {
        src: "/images/ImagenCruise.png",
        alt: "Family arriving at cruise port terminal in private Viaro SUV with professional chauffeur loading vacation luggage.",
      },
      h1: "Seamless Cruise Port Transfers Car Service",
      h2: "Private Black Car Service at 15+ Cruise Ports in the US & Canada",
      description:
        "You just spent a week relaxing on the ocean. The last thing you need is the stress of dragging heavy bags through a crowded terminal.Skip the long taxi lines. Avoid the crowded shuttle buses that wait until every seat fills before leaving.With Viaro, your private chauffeur meets you right at the pier exit. We handle your bags and get you straight to the airport or hotel—in a clean, quiet, climate-controlled vehicle.Price transparency guaranteed. We track your ship and your flight, so you never wait.",
      cta: {
        book: "Book Your Private Cruise Transfer Now",
        phone: "(206) 672-8281",
      },
    },
    trustBar: [
      "Ship Tracking",
      "Live Flight Tracking",
      "Guaranteed Transparency",
      "24/7 Dispatch",
    ],
    bodyContent: {
      h2: "The Frequent Cruiser's Guide to Port Transfers",
      h3: "Port-by-Port Hacks That Save Time",
      content: [
        "After dozens of cruises on every major line—from Alaska sailings to Caribbean getaways, we can tell you the worst part of any cruise vacation is not the ship. It is the chaos at the port when you get off.",
        "Most travelers do not know the hidden traps until it is too late. Here are the two biggest mistakes",
       
      ],
      airports: [
  {
    region: "Seattle, WA",
    airports: ["Pier 66 & 91", "Pier 91"],
    description:
      "Alaska cruise hub. Viaro knows Elliott Avenue shortcuts to Sea-Tac in 25–35 minutes.",
    image: "/images/SeattleCruise.png",
    url: "https://www.portseattle.org/places/smith-cove-cruise-terminal-pier-91",
  },
  {
    region: "Miami, FL",
    airports: ["PortMiami"],
    description:
      "World's busiest cruise port. We time your pickup to avoid peak MacArthur Causeway traffic.",
    image: "/images/PortMiami.png",
    url: "https://www.miamidade.gov/portmiami/cruise-terminals.page",
  },
  {
    region: "Fort Lauderdale, FL",
    airports: ["Port Everglades"],
    description:
      "Multiple piers — Viaro coordinates the exact terminal with your cruise line.",
    image: "/images/PortEverglades.png",
    url: "https://www.porteverglades.net/cruising/",
  },
  {
    region: "Vancouver, BC",
    airports: ["Canada Place"],
    description:
      "Viaro handles the complex timing around US-Canada customs for a stress-free departure.",
    image: "/images/CanadaPlace.png",
    url: "https://www.canadaplace.ca/",
  },
  {
    region: "New Orleans, LA",
    airports: ["Erato Street Terminal"],
    description:
      "Transfers to MSY airport or French Quarter hotels, navigating narrow downtown streets.",
    image: "/images/EratoStreet.png",
    url: "https://portnola.com/cruise",
  },
  {
    region: "Galveston, TX",
    airports: ["Port of Galveston"],
    description:
      "50-mile drive to IAH or HOU airports, timed to avoid I-45 traffic.",
    image: "/images/Galveston.png",
    url: "https://www.portofgalveston.com/cruise",
  },
]
    },
    extraContent: [
      {
        h3: 'Insider Tips to Avoid the Cruise "Terminal Scramble"',
        items: [
         {
  label: "The Rideshare Hike",
  desc: (
    <>
      At massive ports like Seattle Pier 91{" "}
      <a
        href="https://www.portseattle.org/places/smith-cove-cruise-terminal-pier-91"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
      >
        Smith Cove Cruise Terminal
      </a>{" "}
      or PortMiami{" "}
      <a
        href="https://www.miamidade.gov/portmiami/cruise-terminals.page"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
      >
        Cruise Terminals
      </a>
      , Uber and Lyft cannot reach the main terminal curb. You must drag your
      heavy bags up to half a mile to reach the rideshare pickup lot. With
      four suitcases and tired kids, that walk feels like a marathon.
    </>
  ),
},
{
  label: "The Shuttle Shuffle",
  desc: (
    <>
      Cruise line buses look convenient, but they wait until every seat is
      full before leaving. On a busy turnaround day, you could sit there for
      30–45 minutes while the bus fills up.
    </>
  ),
},
{
  label: "The Viaro Difference",
  desc: (
    <>
      Viaro eliminates both problems. Our drivers pull up as close as port
      security allows—usually right at the terminal curb. You walk off the
      ship and into a luxury private car{" "}
      <a
        href="/en/fleet"
        className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
      >
        FLEET
      </a>{" "}
      in minutes.
    </>
  ),
}
        ],
      },
      {
        h3: "The Port Valet Layover Trick",
        list: [
          "If you have a late flight after your cruise, use the free Port Valet service at some ports to send your bags directly to your airline.",
          "Then have Viaro take you on a quick city tour before your flight.",
          "In Seattle: stop at Pike Place Market or the Space Needle before heading to Sea-Tac.",
          "In Miami: grab lunch in Wynwood or South Beach.",
          "Viaro's hourly charter service makes these post-cruise adventures easy.",
        ],
        cta: "Check Cruise Port Availability & Rates →",
      },
      {
        h3: "Cruise Ports We Serve",
        portList: [
          {
            port: "Seattle, WA",
            terminals: "Pier 66 (Bell Street), Pier 91 (Smith Cove)",
            note: "Alaska cruise hub",
          },
          {
            port: "Vancouver, BC",
            terminals: "Canada Place",
            note: "Alaska & Pacific cruises",
          },
          {
            port: "Miami, FL",
            terminals: "PortMiami",
            note: "World's busiest cruise port",
          },
          {
            port: "Fort Lauderdale, FL",
            terminals: "Port Everglades",
            note: "Caribbean cruise hub",
          },
          {
            port: "Tampa, FL",
            terminals: "Port Tampa Bay",
            note: "Gulf of Mexico cruises",
          },
          {
            port: "Port Canaveral, FL",
            terminals: "Disney Cruise Line, Carnival",
            note: "Orlando area",
          },
          {
            port: "Galveston, TX",
            terminals: "Port of Galveston",
            note: "Houston area cruises",
          },
          {
            port: "Los Angeles, CA",
            terminals: "Port of Los Angeles (San Pedro)",
            note: "Mexico & Hawaii",
          },
          {
            port: "San Diego, CA",
            terminals: "B Street Pier",
            note: "Baja & Pacific cruises",
          },
          {
            port: "San Francisco, CA",
            terminals: "Pier 27",
            note: "Alaska & coastal cruises",
          },
        ],
      },
    ],
    pricing: {
      h2: "Cruise Transfer Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 129,
          passengers: 3,
          models: ["Cadillac", "Lincoln", "BMW"],
          extras: [
            "Professional chauffeur",
            "Ship & flight tracking",
            "Curbside pier pickup",
          ],
        },
        {
          type: "SUV",
          price: 159,
          passengers: 6,
          models: ["Cadillac Escalade", "Mercedes", "Volvo"],
          extras: [
            "Extra luggage space",
            "Perfect for families",
            "Ship & flight tracking",
          ],
        },
        {
          type: "Sprinter",
          price: 299,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Up to 13 passengers",
            "Group cruise transfers",
            "Ample luggage capacity",
          ],
        },
      ],
      cta: "Check Cruise Port Availability & Rates →",
    },
  },

  // 5. HOURLY CHAUFFEUR SERVICE
  {
    id: "hourly-chauffeur-hire",
    FA: "ServiceHourlyFa",
    Testi: "servicesHourlyTestimonials",
    hero: {
      image: {
        src: "/images/ImagenHourly.png",
        alt: "Professional Viaro chauffeur opening door for VIP client during private hourly car service at luxury shopping destination.",
      },
      h1: "Hourly Chauffeur Service & Private VIP Car Hire",
      h2: "Your Personal Driver for the Day — Safe, Discreet & Always Waiting",
      description:
        "Sometimes you need more than just a quick ride. You need a driver who stays with you.With Viaro's hourly chauffeur service, the car is yours. You control the pace of the day. Your driver waits while you shop, dine, or meet. No rushing. No searching for parking. No waiting alone on a dark street for a rideshare app.Whether you need a designated driver for a night out, safe transport for elderly parents, discreet VIP travel, or a full-day shopping companion—we are here for you. Serving 40+ cities across the United States, Canada, and Costa Rica.",
      cta: { book: "Book Your Hourly Chauffeur Now", phone: "(206) 672-8281" },
    },
    trustBar: [
      "VIP Discretion",
      "Safe Family Travel",
      "Wait & Return",
      "Flexible Routing",
    ],
    bodyContent: {
      h2: "Who Uses Hourly Chauffeur Service?",
      h3: "The Smart Choice for Safe Travel and Total Convenience",
     content: [
  "When you book our hourly VIP service, the car is yours. Your chauffeur follows your exact schedule, waits while you handle business, and keeps the car ready at a moment's notice.",
  "Our chauffeurs respect your privacy and provide a quiet, secure environment.",
  <>
    This flexible service is perfect for a wide range of needs across our{" "}
    <a href="/en/service-areas/" className="text-primary underline">
      service areas
    </a>.
  </>,
],
      airports: [
        {
          region: "VIP & Celebrity Discretion",
          airports: ["LAX", "JFK", "All cities"],
          description:
            "For high-profile clients—executives, entertainers, public figures—privacy is everything. Viaro chauffeurs are trained in discretion. We sign confidentiality agreements when requested. No questions. No photos. Just quiet, professional service. Our drivers know how to avoid paparazzi hotspots in cities like Los Angeles and New York, and can coordinate with security teams for seamless arrivals.",
          image: "/images/VIP.png",
        },
        {
          region: "Safe Travel for Women",
          airports: ["All cities"],
          description:
            "You should never have to wait alone on a dark street for a rideshare app. With Viaro's hourly service, your chauffeur is always waiting right outside the door—whether you're leaving a restaurant, a friend's home, or a late-night event. Our professionally screened drivers provide a secure environment, especially for solo women travelers who want peace of mind.",
          image: "/images/SafeWomen.png",
        },
        {
          region: "Elderly Errands & Medical",
          airports: ["All cities"],
          description:
            "Parents and grandparents deserve patient, caring transportation. Viaro chauffeurs assist with door-to-door service, help with mobility, and wait during medical appointments. Whether it's a weekly doctor visit, pharmacy run, or a day of errands, we treat your loved ones with the respect they deserve.",
          image: "/images/Galveston.png",
        },
        {
          region: "Family & Youth Safety",
          airports: ["All cities"],
          description:
            "Parents trust Viaro for safe transportation of children and teenagers. Need your teen picked up from soccer practice? Driving your family between activities all day? We provide child safety seats (infant, convertible, booster) upon request and treat younger passengers with extra care. Our drivers are background-checked and professionally trained.",
          image: "/images/Family.png",
        },
        {
  region: "Shopping Trips & Errands",
  airports: ["BH", "CHI", "SEA", "MIA"],
  description: (
    <>
      Need a car for a full day of shopping? Your chauffeur drops you at the
      entrance, keeps the car nearby, and stores your bags safely in the trunk
      while you visit the next store. Popular shopping destinations we serve
      include{" "}
      <a
        href="https://www.rodeodrive-bh.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
      >
        Rodeo Drive
      </a>{" "}
      in Beverly Hills,{" "}
      <a
        href="https://www.themagnificentmile.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
      >
        The Magnificent Mile
      </a>{" "}
      in Chicago, and high-end boutiques in downtown Seattle, Miami, and
      Vancouver.
    </>
  ),
  image: "/images/Galveston.png",
},
        {
          region: "Designated Driver & Night Out",
          airports: ["All cities"],
          description:
            "Enjoy your evening without worrying about getting home safely. Viaro serves as your designated driver for dinners, parties, concerts, and nights out. We pick you up, wait while you enjoy the event, and drive you home—no surge pricing, no hunting for a ride at 2 AM.",
          image: "/images/Galveston.png",
        },
        {
          region: "Wine Tours & Special Occasions",
          airports: ["SFO", "SEA", "PDX"],
          description:
            "Napa Valley, Woodinville Wine Country near Seattle, and Willamette Valley in Oregon. Drive between wineries without worrying about the road.",
          image: "/images/Galveston.png",
        },
        {
  region: "Hotel & Airport Connections",
  airports: ["All cities"],
  description: (
    <>
      Arriving for business with a packed schedule? Book hourly service from{" "}
      <a
        href="/airport-car-service/"
        className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
      >
        airport arrival
      </a>{" "}
      to your hotel, then keep the car for meetings, site visits, or dinners.
      Your luggage stays secure in the vehicle while you work. Popular hotel
      connections include{" "}
      <a
        href="https://www.edgewaterhotel.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
      >
        The Edgewater Hotel
      </a>{" "}
      and{" "}
      <a
        href="https://www.fairmont.com/seattle/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
      >
        Fairmont Olympic Seattle
      </a>
      .
    </>
  ),
  image: "/images/Galveston.png",
},
        {
          region: "Weddings & Special Events",
          airports: ["All cities"],
          description:
            "Viaro provides hourly service for weddings, anniversaries, birthdays, bar-mitzvahs or quinceañeras, and milestone celebrations. We transport the wedding party between venues, provide getaway cars for the couple, and ensure guests arrive on time. Our drivers understand the importance of your special day and deliver flawless service.Whatever your day requires, Viaro helps you succeed with comfort, safety, and style.",
          image: "/images/Galveston.png",
        },
      ],
    },

    pricing: {
      h2: "Hourly Chauffeur Rates",
      vehicles: [
        {
          type: "Executive Sedan",
          price: 119,
          passengers: 3,
          models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],
          extras: [
            "3-hour minimum",
            "Driver waits at every stop",
            "VIP privacy standard",
          ],
        },
        {
          type: "Executive SUV",
          price: 149,
          passengers: 6,
          models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"],
          extras: [
            "3-hour minimum",
            "Extra space for shopping bags",
            "Perfect for families",
          ],
        },
        {
          type: "Executive Sprinter",
          price: 199,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "3-hour minimum",
            "Up to 13 passengers",
            "Ideal for group outings & events",
          ],
        },
      ],
      cta: "Get Your Hourly Quote →",
    },
  },
];
export const serviceEs: ServiceItem[] = [
  // 1. TRASLADOS AL AEROPUERTO
  {
    id: "airport-transfers",
    FA: "ServiceAirportFa",
    Testi: "servicesAirportTestimonials",
    hero: {
      image: {
        src: "/images/ImagenAirport.png",
        alt: "Chofer profesional de Viaro esperando al cliente en la sala de equipajes del aeropuerto.",
      },
      h1: "Servicio de Auto de Lujo al Aeropuerto",
      h2: "Traslados Privados en Auto Negro por EE. UU., Canadá y Costa Rica",
      description:
        "Olvídate de las filas de taxis y el caos de las apps de transporte. En Viaro, rastreamos tu vuelo en tiempo real. Si aterrizas antes, ya estamos ahí. Si tu vuelo se retrasa, te esperamos. Tu conductor te recibe en la sala de equipajes, te ayuda con el equipaje y te lleva a tu destino con seguridad.",
      cta: { book: "Reserva Tu Traslado al Aeropuerto", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Rastreo de Vuelos en Vivo",
      "Tarifas Fijas",
      "14 Años de Experiencia",
      "Reservas 24/7",
    ],
    bodyContent: {
      h2: "Cubrimos los Aeropuertos Más Importantes del Mundo",
      h3: "Transporte Premium Donde Más lo Necesitas",
      content: [
        "Ofrecemos soluciones de transporte de lujo consistentes y de clase mundial en los principales aeropuertos de América del Norte. Ya sea que viajes a una reunión de negocios importante, estamos listos. Nuestros sedanes de lujo, SUV y vans Sprinter están disponibles.",
        "Sabemos que volar puede ser agotador. Por eso nuestros choferes ofrecen servicios profesionales de bienvenida dentro de la terminal. Te esperamos en la sala de equipajes con un letrero personalizado, listos para ayudarte con tus maletas.",
        "A diferencia de las apps de transporte que aplican multiplicadores ocultos en horas pico o se cancelan en momentos de alta demanda, Viaro garantiza tu servicio. Ofrecemos precios transparentes sin sorpresas. Tu cotización exacta se calcula según el tipo de vehículo, la distancia y la hora del día.",
        "Rastreamos cada vuelo comercial y privado en tiempo real. Si tu vuelo se retrasa, ya lo sabemos. Tu chofer se ajusta automáticamente, sin necesidad de que nos contactes. Desde el momento en que bajas del avión, puedes relajarte en un vehículo de lujo silencioso y climatizado.",
      ],
      airports: [
        {
          region: "Nueva York",
          airports: ["JFK", "LGA"],
          description:
            "Navega el tráfico de la ciudad fácilmente hacia Manhattan o Wall Street.",
          image: "/images/ImagenNewYork2.png",
        },
        {
          region: "Los Ángeles",
          airports: ["LAX", "VNY"],
          description: "Llega a Hollywood o Beverly Hills con total comodidad.",
          image: "/images/ImagenLosAngeles2.png",
        },
        {
          region: "Chicago",
          airports: ["ORD", "MDW"],
          description:
            "Traslados confiables desde O'Hare hasta el centro, sin importar el clima.",
          image: "/images/ImagenChicago2.png",
        },
        {
          region: "Atlanta",
          airports: ["ATL"],
          description:
            "Evita las enormes multitudes del aeropuerto más transitado del mundo.",
          image: "/images/ImagenAtlanta2.png",
        },
        {
          region: "Miami y Seattle",
          airports: ["MIA - SEA", "SEA"],
          description:
            "Ideal para traslados directos del aeropuerto al terminal de cruceros.",
          image: "/images/ImagenMiami2.png",
        },
        {
          region: "Destinos Internacionales",
          airports: ["YVR", "SJO", "LIR"],
          description:
            "Servicio impecable en los principales aeropuertos internacionales de Canadá y Costa Rica.",
          image: "/images/ImagenSeatle2.png",
        },
      ],
    },
    pricing: {
      h2: "Tarifas del Servicio al Aeropuerto",
      vehicles: [
        {
          type: "Sedán",
          price: 129,
          passengers: 3,
          models: ["Cadillac", "Lincoln", "BMW"],
          extras: [
            "Chofer profesional",
            "Rastreo de vuelo incluido",
            "Propina al conductor, no a la empresa",
          ],
        },
        {
          type: "SUV",
          price: 169,
          passengers: 6,
          models: ["Cadillac Escalade", "Mercedes", "Volvo"],
          extras: [
            "Espacio extra para equipaje",
            "Chofer asignado previamente",
            "Rastreo de vuelo incluido",
          ],
        },
        {
          type: "Sprinter",
          price: 279,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Hasta 13 pasajeros",
            "Transporte para eventos y reuniones",
            "Ideal para grupos corporativos",
          ],
        },
      ],
      cta: "Consultar Disponibilidad y Tarifas →",
    },
  },

  // 2. TRANSPORTE CORPORATIVO
  {
    id: "corporate-transportation",
    FA: "ServiceCorporateFa",
    Testi: "servicesCorporateTestimonials",
    hero: {
      image: {
        src: "/images/ImagenCorporate.png",
        alt: "Ejecutivo de negocios llegando a una reunión corporativa en un lujoso SUV de Viaro.",
      },
      h1: "Transporte Corporativo y Servicio de Auto Ejecutivo",
      h2: "Transporte Confiable en Auto Negro para Líderes Empresariales en América del Norte",
      description:
        "Los negocios se mueven rápido. Tu transporte debe seguir el ritmo. Cuando viajas por trabajo, no puedes perder tiempo en filas de taxis ni lidiar con apps canceladas. Un auto retrasado puede arruinar una reunión millonaria. Por eso las empresas líderes — desde gigantes tecnológicos en Seattle hasta firmas financieras en Wall Street — confían en Viaro para el transporte terrestre ejecutivo. Ofrecemos el espacio silencioso y confiable que tu equipo necesita para prepararse. Facturación centralizada. Rastreo de vuelos. Recogida en pista FBO. Disponible 24/7 en EE. UU., Canadá y Costa Rica.",
      cta: { book: "Abre una Cuenta Corporativa Hoy", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Total Discreción",
      "Facturación Centralizada",
      "Rastreo de Vuelos",
      "Soporte 24/7",
    ],
    bodyContent: {
      h2: "Por Qué las Empresas Líderes Eligen Viaro",
      h3: "Industrias que Confían en Viaro",
      content: [
        "Si gestionas los viajes de una empresa grande, sabes que el transporte terrestre suele ser el eslabón más débil. El rastreo de vuelos es preciso. Los hoteles confirman al instante. ¿Pero el transporte terrestre? Ahí es donde todo falla.",
        "Por eso empresas de todas las industrias — desde tecnología y finanzas hasta salud y manufactura — confían en Viaro como su socio de transporte corporativo.",
        "Las mejores empresas, desde gigantes tecnológicos como Microsoft en Redmond hasta firmas financieras en Wall Street, confían en nuestro servicio.",
      ],
      airports: [
        {
          region: "Tecnología",
          airports: ["SEA", "BFI"],
          description: (
            <>
              Las empresas tecnológicas del área de Seattle confían en Viaro
              para el transporte ejecutivo diario entre el{" "}
              <a
                href="https://www.microsoft.com/en-us/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                Campus de Microsoft en Redmond
              </a>
              ,{" "}
              <a
                href="https://www.aboutamazon.com/news/workplace/amazon-spheres-seattle-inside-tour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                la sede de Amazon en South Lake Union
              </a>{" "}
              y el Aeropuerto Sea-Tac. Cuando los ejecutivos llegan a Boeing
              Field (BFI), los recibimos directamente en la pista.
            </>
          ),
          image: "/images/Technology.png",
        },
        {
          region: "Finanzas",
          airports: ["TEB", "JFK", "LGA"],
          description:
            "Bancos de inversión y firmas de capital privado en Nueva York usan Viaro para reuniones con clientes y roadshows. Coordinamos la logística entre ciudades — de Teterboro a Manhattan y JFK — para que los socios se concentren en los negocios.",
          image: "/images/Finance.png",
        },
        {
          region: "Salud",
          airports: ["ORD", "DTW"],
          description:
            "Empresas de dispositivos médicos y ejecutivos farmacéuticos confían en Viaro para el transporte en congresos y visitas hospitalarias. Ofrecemos discreción consciente con HIPAA para viajes sensibles.",
          image: "/images/Healthcare.png",
        },
        {
          region: "Manufactura",
          airports: ["DTW", "ORD", "IAH"],
          description:
            "Para visitas a plantas y reuniones con proveedores en ciudades como Detroit (DTW), Chicago (ORD) y Houston (IAH), Viaro ofrece SUV y vans Sprinter confiables para equipos ejecutivos.",
          image: "/images/Manufacturing.png",
        },
        {
          region: "Costa Oeste",
          airports: ["LAX", "VNY", "SFO"],
          description:
            "Estudios en Burbank, salas de juntas en Beverly Hills y campus de Silicon Valley — atendidos por choferes locales experimentados que conocen cada autopista, atajo y entrada VIP.",
          image: "/images/WestCoast.png",
        },
        {
          region: "Internacional",
          airports: ["YVR", "SJO", "LIR"],
          description:
            "Viajes corporativos transfronterizos en Canadá y Costa Rica sin complicaciones. Desde el distrito financiero de Vancouver hasta los centros de negocios de San José y los corredores de resorts de Guanacaste.",
          image: "/images/International.png",
        },
      ],
    },
    extraContent: [
      {
        h3: "Trucos de Viaje Corporativo que Ahorran Tiempo",
        items: [
          {
            label: "La Ventaja del Carril Comercial",
            desc: "En aeropuertos masivos como LAX, JFK y ORD, las apps obligan a los ejecutivos a caminar medio kilómetro hasta las zonas de recogida pública. Los choferes de Viaro usan los carriles comerciales restringidos. Recibimos a tu equipo en la sala de equipajes y los acompañamos directamente al auto — sin multitudes ni confusión.",
          },
          {
            label: "La Recogida en Pista FBO",
            desc: "Si tus ejecutivos llegan en vuelo privado a hubs FBO como Boeing Field (BFI), Teterboro (TEB) o Van Nuys (VNY), no deberían esperar en una sala. Donde la seguridad lo permite, nuestros autos se acercan directamente al avión en la pista. Tu CEO baja del avión y entra al auto.",
          },
          {
            label: "El Roadshow Multiudad",
            desc: (
              <>
                ¿Planeas un roadshow de inversores en tres ciudades en dos días?
                Una cuenta de Viaro gestiona la logística compleja{" "}
                <a
                  href={`/es/service-areas`}
                  className="border-b border-white/60 hover:border-primary hover:text-primary transition"
                >
                  en más de 50 ciudades
                </a>{" "}
                — de Nueva York a Boston y Chicago, sin interrupciones.
              </>
            ),
          },
        ],
      },
      {
        h3: "Diseñado para el Cumplimiento de Políticas de Viaje",
        desc: (
          <>
            Viaro se alinea con las estrictas políticas de viaje de
            organizaciones como la{" "}
            <a
              href="https://www.gbta.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white/60 hover:border-primary hover:text-primary transition"
            >
              Global Business Travel Association (GBTA)
            </a>
            . Ofrecemos:
          </>
        ),
        list: [
          "Recibos digitales detallados por cada viaje",
          "Facturación mensual centralizada para departamentos de finanzas",
          "Etiquetado por código de gasto para asignación de centros de costo",
          "Reservas 24/7 para asistentes ejecutivos y gestores de viaje",
          "Gestor de cuenta dedicado para clientes empresariales",
        ],
        cta: "Obtener Cotización Corporativa Personalizada →",
      },
    ],
    pricing: {
      h2: "Tarifas del Servicio Corporativo",
      vehicles: [
        {
          type: "Sedán Ejecutivo",
          price: 129,
          passengers: 3,
          models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],
          extras: [
            "Cabina silenciosa y Wi-Fi",
            "Chofer profesional",
            "Facturación centralizada",
          ],
        },
        {
          type: "SUV Ejecutivo",
          price: 159,
          passengers: 6,
          models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"],
          extras: [
            "Hasta 6 pasajeros y equipaje",
            "Chofer asignado previamente",
            "Rastreo de vuelo incluido",
          ],
        },
        {
          type: "Sprinter Ejecutivo",
          price: 299,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Hasta 13 pasajeros",
            "Configuración para conferencias disponible",
            "Ideal para roadshows y equipos",
          ],
        },
      ],
      cta: "Obtener Cotización Corporativa Personalizada →",
    },
  },

  // 3. TRASLADOS FBO Y TRIPULACIÓN
  {
    id: "fbo-crew-transportation",
    FA: "ServiceAirlineFa",
    Testi: "servicesAirlineTestimonials",
    hero: {
      image: {
        src: "/images/ImagenAirline.png",
        alt: "Auto negro de lujo estacionado en la pista junto a un jet privado en un terminal FBO.",
      },
      h1: "Transporte FBO y Traslados de Tripulación Aérea",
      h2: "Recogida en Pista para Aviación Privada | Shuttles de Tripulación en 25+ Aeropuertos",
      description:
        "Viajas en privado para ahorrar tiempo. Tu transporte terrestre debe respetarlo. Viaro ofrece recogida FBO en pista para viajeros en jet privado y shuttles confiables para tripulaciones aéreas. Rastreamos tu número de cola — no solo el horario. Cuando tus ruedas tocan tierra, tu auto ya está en posición. Precios transparentes. Sin tarifas sorpresa. Disponible 24/7 en EE. UU., Canadá y Costa Rica.",
      cta: { book: "Solicita Tu Cotización Instantánea", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Rastreo de Vuelo y Cola en Vivo",
      "Recogida en Pista",
      "Tarifas Transparentes",
      "Total Discreción",
    ],
    bodyContent: {
      h2: "Traslados VIP FBO: Donde Cada Segundo Cuenta",
      h3: "El Estándar en Transporte Terrestre para Aviación Privada",
      content: [
        "No tiene sentido gastar $20,000+ en un vuelo chárter y luego esperar 20 minutos a un conductor que no encuentra la entrada del FBO. Los ejecutivos, empresarios y figuras públicas que vuelan en privado esperan un transporte terrestre a la altura de la experiencia en el avión.",
        "No estacionamos en el lobby como si fuera una terminal comercial y te enviamos un mensaje para que salgas. Obtenemos los permisos de seguridad necesarios para recibirte en la pista — junto a tu aeronave. Rastreamos tu número de cola específico a través de FlightAware, no el horario general de la aerolínea. Cuando tus ruedas tocan tierra, tu sedán de lujo ya está en posición en la rampa.",
        "Bajas del jet directamente a tu auto. De puerta a puerta. Cero tiempo perdido.",
        "Estos son los principales Operadores de Base Fija (FBOs) para vuelos privados y aviación empresarial que atendemos en América del Norte:",
      ],
      airports: [
        {
          region: "Teterboro (TEB)",
          airports: ["TEB"],
          description:
            "La puerta de entrada a Manhattan. Coordinamos con Signature, Atlantic y Meridian para acceso fluido a la rampa.",
          image: "/images/Teterboro.png",
        },
        {
          region: "Van Nuys (VNY)",
          airports: ["VNY"],
          description:
            "El aeropuerto de aviación general más transitado de LA. Servicio directo a Beverly Hills, Malibú y estudios de cine.",
          image: "/images/VanNuys.png",
        },
        {
          region: "Boeing Field (BFI)",
          airports: ["BFI"],
          description:
            "Hub de aviación privada del Pacífico Noroeste. A 10 minutos del centro de Seattle.",
          image: "/images/BoeingField.png",
        },
        {
          region: "DuPage (DPA)",
          airports: ["DPA"],
          description:
            "Evita el caos comercial de O'Hare. Traslados directos al centro de Chicago.",
          image: "/images/DuePage.png",
        },
        {
          region: "Opa-locka (OPF)",
          airports: ["OPF"],
          description:
            "El principal aeropuerto ejecutivo del sur de Florida. Servicio directo a Miami Beach y terminales de cruceros.",
          image: "/images/OpaLocka.png",
        },
        {
          region: "Centennial (APA)",
          airports: ["APA"],
          description:
            "El aeropuerto de aviación general más transitado de Colorado. SUV equipados para traslados a resorts de montaña.",
          image: "/images/Centannial.png",
        },
      ],
    },
    extraContent: [
      {
        h3: "La Perspectiva del Piloto: Transporte de Tripulación que Funciona",
        h2: "Escrito por un Piloto que lo Ha Vivido",
        quote: (
          <>
            <p className="mb-3">
              "Después de veinte años y miles de horas de vuelo en aviación privada, puedo decirte esto. La parte más difícil de cualquier viaje no es la aproximación al espacio aéreo clase B."
            </p>

            <p className="mb-3">
              Es llevar a una tripulación agotada al hotel sin que nada salga mal.
            </p>

            <p className="mb-3">
              La mayoría de los servicios de transporte tratan los traslados de tripulación como algo secundario. Otros nos mandan a zonas de transporte público o pierden el rastro de nuestra hora de llegada. Otros nos hacen esperar en el frío a las 2 AM a una van que puede o no aparecer.
            </p>

            <p className="mb-3">
              <span className="text-brand">Viaro</span> lo hace diferente. Entienden las regulaciones de descanso de tripulación y por qué llevarnos a la cama rápido realmente importa para la seguridad del vuelo."
            </p>

            <p className="mt-3">
              La diferencia es simple:{" "}
              <span className="text-brand">Viaro</span> rastrea el estado de
              tu vuelo en tiempo real. Para cuando terminamos los chequeos
              posteriores al vuelo y salimos, una van Sprinter limpia ya está
              esperando. Sin caminar por el estacionamiento. Solo un viaje
              tranquilo hacia una cama cálida.
            </p>
          </>
        ),
        image: {
          src: "/images/ImagenAirline.png",
          alt: "Tripulación aérea abordando una van Sprinter privada de Viaro para un traslado rápido y cómodo al hotel.",
        },
      },
      {
        h3: "Trucos en los Principales Aeropuertos",
        items: [
          {
            label: "JFK (Nueva York)",
            desc: "Evita el caos del área de transporte del Terminal 4. Viaro recoge en el área de vehículos comerciales — salida más rápida y conductores que conocen los atajos del Belt Parkway hacia los hoteles de Jamaica.",
          },
          {
            label: "LAX (Los Ángeles)",
            desc: "El lote LAX-it es una pesadilla durante los cambios de turno. Viaro coordina la recogida directa en la terminal — ahorra al menos 30 minutos.",
          },
          {
            label: "ORD (Chicago)",
            desc: "Las escalas de invierno aquí ponen a prueba a todos. Viaro posiciona los vehículos en el estacionamiento climatizado. Cuando sales de la aduana en la Terminal 5, ya están esperando.",
          },
          {
            label: "ATL (Atlanta)",
            desc: "El aeropuerto más transitado del mundo significa el peor caos terrestre. Viaro usa estratégicamente la división norte/sur doméstica — conocen tu terminal antes que tú.",
          },
          {
            label: "SEA (Seattle)",
            desc: "Tercer piso, ascensor morado. Ese es el secreto de la tripulación. Viaro lo sabe. Tu conductor espera ahí mientras otros circulan por la acera de llegadas.",
          },
          {
            label: "YVR (Vancouver)",
            desc: "Para tripulaciones transfronterizas, Viaro gestiona el tiempo considerando los retrasos en aduana. Rastrean tu vuelo y se ajustan — nunca tienes que llamar para decir 'acabamos de aterrizar'.",
          },
        ],
      },
      {
        h3: "La Discreción es Estándar",
        list: [
          "No comentamos a quién transportamos. No publicamos fotos. No confirmamos ni desmentimos reservas.",
          "Cada chofer de Viaro firma un acuerdo de confidencialidad.",
          "El personal revisa y detalla los vehículos antes de cada viaje.",
          "Coordinamos directamente con equipos de seguridad cuando se requiere.",
          "Esto no es un servicio premium adicional — así operamos con todos los clientes FBO.",
        ],
      },
    ],
    pricing: {
      h2: "Tarifas de Traslados FBO y Tripulación",
      vehicles: [
        {
          type: "Sedán",
          price: 129,
          passengers: 3,
          models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],
          extras: [
            "Recogida en pista",
            "Rastreo de número de cola",
            "Confidencialidad total",
          ],
        },
        {
          type: "SUV",
          price: 159,
          passengers: 6,
          models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"],
          extras: [
            "Espacio extra para equipaje",
            "Chofer asignado previamente",
            "Coordinación de permisos de seguridad",
          ],
        },
        {
          type: "Sprinter",
          price: 299,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Transporte completo de tripulación",
            "Configuración para conferencias disponible",
            "Ideal para departamentos de vuelo",
          ],
        },
      ],
      cta: "Reserva Tu Traslado FBO Privado →",
    },
  },

  // 4. TRASLADOS A PUERTOS DE CRUCEROS
  {
    id: "cruise-port-transfers",
    FA: "ServiceCruiseFa",
    Testi: "servicesCruiseTestimonials",
    hero: {
      image: {
        src: "/images/ImagenCruise.png",
        alt: "Familia llegando a la terminal de cruceros en un SUV privado de Viaro con chofer profesional cargando el equipaje.",
      },
      h1: "Traslados a Puertos de Cruceros sin Complicaciones",
      h2: "Servicio Privado en Auto Negro en 15+ Puertos de EE. UU. y Canadá",
      description:
        "Acabas de pasar una semana relajándote en el océano. Lo último que necesitas es el estrés de arrastrar maletas pesadas por una terminal llena de gente. Olvídate de las largas filas de taxis. Evita los autobuses lanzadera abarrotados que esperan a que se llenen antes de salir. Con Viaro, tu chofer privado te espera justo a la salida del muelle. Nos encargamos de tu equipaje y te llevamos directamente al aeropuerto o al hotel — en un vehículo limpio, silencioso y climatizado. Transparencia de precios garantizada. Rastreamos tu barco y tu vuelo para que nunca tengas que esperar.",
      cta: {
        book: "Reserva Tu Traslado de Crucero Privado",
        phone: "(206) 672-8281",
      },
    },
    trustBar: [
      "Rastreo de Barcos",
      "Rastreo de Vuelos en Vivo",
      "Transparencia Garantizada",
      "Despacho 24/7",
    ],
    bodyContent: {
      h2: "La Guía del Crucerista Frecuente para Traslados en Puerto",
      h3: "Trucos por Puerto que Ahorran Tiempo",
      content: [
        "Después de docenas de cruceros en todas las líneas principales — desde viajes a Alaska hasta escapadas al Caribe — podemos decirte que la peor parte de cualquier vacación en crucero no es el barco. Es el caos en el puerto cuando desembarcas.",
        "La mayoría de los viajeros no conoce las trampas ocultas hasta que es demasiado tarde. Estos son los dos errores más grandes.",
      ],
      airports: [
        {
          region: "Seattle, WA",
          airports: ["Pier 66 y 91", "Pier 91"],
          description:
            "Hub de cruceros a Alaska. Viaro conoce los atajos por Elliott Avenue hacia Sea-Tac en 25–35 minutos.",
          image: "/images/SeattleCruise.png",
          url: "https://www.portseattle.org/places/smith-cove-cruise-terminal-pier-91",
        },
        {
          region: "Miami, FL",
          airports: ["PortMiami"],
          description:
            "El puerto de cruceros más transitado del mundo. Coordinamos la recogida para evitar el tráfico pico en MacArthur Causeway.",
          image: "/images/PortMiami.png",
          url: "https://www.miamidade.gov/portmiami/cruise-terminals.page",
        },
        {
          region: "Fort Lauderdale, FL",
          airports: ["Port Everglades"],
          description:
            "Múltiples muelles — Viaro coordina la terminal exacta con tu línea de cruceros.",
          image: "/images/PortEverglades.png",
          url: "https://www.porteverglades.net/cruising/",
        },
        {
          region: "Vancouver, BC",
          airports: ["Canada Place"],
          description:
            "Viaro gestiona el complejo timing en torno a la aduana EE. UU.–Canadá para una salida sin estrés.",
          image: "/images/CanadaPlace.png",
          url: "https://www.canadaplace.ca/",
        },
        {
          region: "Nueva Orleans, LA",
          airports: ["Terminal Erato Street"],
          description:
            "Traslados al aeropuerto MSY u hoteles del Barrio Francés, navegando las estrechas calles del centro.",
          image: "/images/EratoStreet.png",
          url: "https://portnola.com/cruise",
        },
        {
          region: "Galveston, TX",
          airports: ["Puerto de Galveston"],
          description:
            "Viaje de 50 millas a los aeropuertos IAH o HOU, calculado para evitar el tráfico de la I-45.",
          image: "/images/Galveston.png",
          url: "https://www.portofgalveston.com/cruise",
        },
      ],
    },
    extraContent: [
      {
        h3: 'Consejos para Evitar el "Caos del Terminal" en Cruceros',
        items: [
          {
            label: "La Caminata del Transporte Compartido",
            desc: (
              <>
                En puertos masivos como el{" "}
                <a
                  href="https://www.portseattle.org/places/smith-cove-cruise-terminal-pier-91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
                >
                  Terminal de Cruceros Smith Cove en el Pier 91 de Seattle
                </a>{" "}
                o el{" "}
                <a
                  href="https://www.miamidade.gov/portmiami/cruise-terminals.page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
                >
                  PortMiami
                </a>
                , Uber y Lyft no pueden llegar al bordillo principal de la
                terminal. Debes arrastrar tu equipaje pesado hasta medio
                kilómetro para llegar a la zona de recogida. Con cuatro maletas
                y niños cansados, esa caminata se siente como un maratón.
              </>
            ),
          },
          {
            label: "El Baile de los Autobuses",
            desc: (
              <>
                Los autobuses de las líneas de cruceros parecen convenientes,
                pero esperan a que todos los asientos estén ocupados antes de
                salir. En un día de alta rotación, puedes quedarte ahí 30–45
                minutos mientras se llena.
              </>
            ),
          },
          {
            label: "La Diferencia de Viaro",
            desc: (
              <>
                Viaro elimina ambos problemas. Nuestros conductores se acercan
                lo más posible al muelle — generalmente justo en el bordillo del
                terminal. Bajas del barco y entras a un auto privado de lujo{" "}
                <a
                  href="/es/fleet"
                  className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
                >
                  de nuestra flota
                </a>{" "}
                en minutos.
              </>
            ),
          },
        ],
      },
      {
        h3: "El Truco de la Escala con Port Valet",
        list: [
          "Si tienes un vuelo tardío después de tu crucero, usa el servicio gratuito Port Valet disponible en algunos puertos para enviar tu equipaje directamente a tu aerolínea.",
          "Luego deja que Viaro te lleve a un recorrido rápido por la ciudad antes de tu vuelo.",
          "En Seattle: para en Pike Place Market o el Space Needle antes de ir a Sea-Tac.",
          "En Miami: almuerza en Wynwood o South Beach.",
          "El servicio de renta por horas de Viaro hace que estas aventuras post-crucero sean muy fáciles.",
        ],
        cta: "Consultar Disponibilidad y Tarifas en Puertos →",
      },
      {
        h3: "Puertos de Cruceros que Atendemos",
        portList: [
          {
            port: "Seattle, WA",
            terminals: "Pier 66 (Bell Street), Pier 91 (Smith Cove)",
            note: "Hub de cruceros a Alaska",
          },
          {
            port: "Vancouver, BC",
            terminals: "Canada Place",
            note: "Cruceros a Alaska y el Pacífico",
          },
          {
            port: "Miami, FL",
            terminals: "PortMiami",
            note: "Puerto de cruceros más transitado del mundo",
          },
          {
            port: "Fort Lauderdale, FL",
            terminals: "Port Everglades",
            note: "Hub de cruceros al Caribe",
          },
          {
            port: "Tampa, FL",
            terminals: "Port Tampa Bay",
            note: "Cruceros por el Golfo de México",
          },
          {
            port: "Port Canaveral, FL",
            terminals: "Disney Cruise Line, Carnival",
            note: "Área de Orlando",
          },
          {
            port: "Galveston, TX",
            terminals: "Puerto de Galveston",
            note: "Cruceros del área de Houston",
          },
          {
            port: "Los Ángeles, CA",
            terminals: "Puerto de Los Ángeles (San Pedro)",
            note: "México y Hawái",
          },
          {
            port: "San Diego, CA",
            terminals: "B Street Pier",
            note: "Cruceros por Baja y el Pacífico",
          },
          {
            port: "San Francisco, CA",
            terminals: "Pier 27",
            note: "Cruceros a Alaska y la costa",
          },
        ],
      },
    ],
    pricing: {
      h2: "Tarifas de Traslados a Cruceros",
      vehicles: [
        {
          type: "Sedán",
          price: 129,
          passengers: 3,
          models: ["Cadillac", "Lincoln", "BMW"],
          extras: [
            "Chofer profesional",
            "Rastreo de barco y vuelo",
            "Recogida en el muelle",
          ],
        },
        {
          type: "SUV",
          price: 159,
          passengers: 6,
          models: ["Cadillac Escalade", "Mercedes", "Volvo"],
          extras: [
            "Espacio extra para equipaje",
            "Perfecto para familias",
            "Rastreo de barco y vuelo",
          ],
        },
        {
          type: "Sprinter",
          price: 299,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Hasta 13 pasajeros",
            "Traslados grupales en crucero",
            "Amplia capacidad de equipaje",
          ],
        },
      ],
      cta: "Consultar Disponibilidad y Tarifas en Puertos →",
    },
  },

  // 5. SERVICIO DE CHOFER POR HORAS
  {
    id: "hourly-chauffeur-hire",
    FA: "ServiceHourlyFa",
    Testi: "servicesHourlyTestimonials",
    hero: {
      image: {
        src: "/images/ImagenHourly.png",
        alt: "Chofer profesional de Viaro abriendo la puerta a un cliente VIP durante el servicio privado de auto por horas en un destino de compras de lujo.",
      },
      h1: "Servicio de Chofer por Horas y Alquiler Privado VIP",
      h2: "Tu Conductor Personal por el Día — Seguro, Discreto y Siempre Disponible",
      description:
        "A veces necesitas más que un simple viaje. Necesitas un conductor que se quede contigo. Con el servicio de chofer por horas de Viaro, el auto es tuyo. Tú controlas el ritmo del día. Tu conductor espera mientras haces compras, cenas o te reúnes. Sin prisas. Sin buscar estacionamiento. Sin esperar solo en una calle oscura a una app de transporte. Ya sea que necesites un conductor designado para una noche de salida, transporte seguro para tus padres mayores, viaje VIP discreto o un acompañante de compras para el día — aquí estamos. Con servicio en más de 40 ciudades en EE. UU., Canadá y Costa Rica.",
      cta: { book: "Reserva Tu Chofer por Horas Ahora", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Discreción VIP",
      "Viaje Familiar Seguro",
      "Espera y Regreso",
      "Rutas Flexibles",
    ],
    bodyContent: {
      h2: "¿Quién Usa el Servicio de Chofer por Horas?",
      h3: "La Elección Inteligente para Viajes Seguros y Máxima Comodidad",
      content: [
        "Cuando reservas nuestro servicio VIP por horas, el auto es tuyo. Tu chofer sigue tu agenda exacta, espera mientras atiendes negocios y mantiene el auto listo en todo momento.",
        "Nuestros choferes respetan tu privacidad y te brindan un entorno silencioso y seguro.",
        <>
          Este servicio flexible es perfecto para una amplia variedad de
          necesidades en nuestras{" "}
          <a href="/es/service-areas/" className="text-primary underline">
            áreas de servicio
          </a>
          .
        </>,
      ],
      airports: [
        {
          region: "Discreción VIP y para Celebridades",
          airports: ["LAX", "JFK", "Todas las ciudades"],
          description:
            "Para clientes de alto perfil — ejecutivos, artistas, figuras públicas — la privacidad lo es todo. Los choferes de Viaro están entrenados en discreción. Firmamos acuerdos de confidencialidad cuando se solicita. Sin preguntas. Sin fotos. Solo un servicio profesional y silencioso. Nuestros conductores saben cómo evitar los puntos de paparazzi en ciudades como Los Ángeles y Nueva York, y pueden coordinarse con equipos de seguridad para llegadas impecables.",
          image: "/images/VIP.png",
        },
        {
          region: "Viaje Seguro para Mujeres",
          airports: ["Todas las ciudades"],
          description:
            "Nunca deberías tener que esperar sola en una calle oscura a una app de transporte. Con el servicio por horas de Viaro, tu chofer siempre está esperando justo afuera de la puerta — ya sea que salgas de un restaurante, la casa de una amiga o un evento nocturno. Nuestros conductores verificados profesionalmente brindan un entorno seguro, especialmente para mujeres que viajan solas y quieren tranquilidad.",
          image: "/images/SafeWomen.png",
        },
        {
          region: "Diligencias para Adultos Mayores y Citas Médicas",
          airports: ["Todas las ciudades"],
          description:
            "Padres y abuelos merecen un transporte paciente y atento. Los choferes de Viaro ofrecen servicio de puerta a puerta, ayudan con la movilidad y esperan durante citas médicas. Ya sea una visita semanal al médico, ir a la farmacia o un día de diligencias, tratamos a tus seres queridos con el respeto que se merecen.",
          image: "/images/Galveston.png",
        },
        {
          region: "Seguridad Familiar y para Jóvenes",
          airports: ["Todas las ciudades"],
          description:
            "Los padres confían en Viaro para el transporte seguro de niños y adolescentes. ¿Necesitas que recojan a tu hijo del entrenamiento de fútbol? ¿Llevas a tu familia entre actividades todo el día? Proporcionamos sillas de seguridad infantil (para bebés, convertibles y de refuerzo) bajo petición y tratamos a los pasajeros más jóvenes con especial cuidado. Nuestros conductores tienen antecedentes verificados y formación profesional.",
          image: "/images/Family.png",
        },
        {
          region: "Compras y Diligencias",
          airports: ["BH", "CHI", "SEA", "MIA"],
          description: (
            <>
              ¿Necesitas un auto para un día completo de compras? Tu chofer te
              deja en la entrada, mantiene el auto cerca y guarda tus bolsas de
              forma segura en el maletero mientras visitas la siguiente tienda.
              Destinos de compras populares que atendemos:{" "}
              <a
                href="https://www.rodeodrive-bh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                Rodeo Drive
              </a>{" "}
              en Beverly Hills,{" "}
              <a
                href="https://www.themagnificentmile.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                The Magnificent Mile
              </a>{" "}
              en Chicago y boutiques de lujo en el centro de Seattle, Miami y
              Vancouver.
            </>
          ),
          image: "/images/Galveston.png",
        },
        {
          region: "Conductor Designado y Noche de Salida",
          airports: ["Todas las ciudades"],
          description:
            "Disfruta tu noche sin preocuparte por llegar a casa con seguridad. Viaro actúa como tu conductor designado para cenas, fiestas, conciertos y salidas nocturnas. Te recogemos, esperamos mientras disfrutas el evento y te llevamos a casa — sin tarifas sorpresa ni buscar transporte a las 2 AM.",
          image: "/images/Galveston.png",
        },
        {
          region: "Tours de Vinos y Ocasiones Especiales",
          airports: ["SFO", "SEA", "PDX"],
          description:
            "Napa Valley, el wine country de Woodinville cerca de Seattle y el Valle de Willamette en Oregón. Recorre las bodegas sin preocuparte por el camino.",
          image: "/images/Galveston.png",
        },
        {
          region: "Conexiones Hotel y Aeropuerto",
          airports: ["Todas las ciudades"],
          description: (
            <>
              ¿Llegas por negocios con una agenda apretada? Reserva el servicio
              por horas desde la{" "}
              <a
                href="/airport-car-service/"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                llegada al aeropuerto
              </a>{" "}
              hasta tu hotel y luego quédate con el auto para reuniones, visitas
              o cenas. Tu equipaje se queda seguro en el vehículo mientras
              trabajas. Conexiones hoteleras populares:{" "}
              <a
                href="https://www.edgewaterhotel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                The Edgewater Hotel
              </a>{" "}
              y el{" "}
              <a
                href="https://www.fairmont.com/seattle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
              >
                Fairmont Olympic Seattle
              </a>
              .
            </>
          ),
          image: "/images/Galveston.png",
        },
        {
          region: "Bodas y Eventos Especiales",
          airports: ["Todas las ciudades"],
          description:
            "Viaro ofrece servicio por horas para bodas, aniversarios, cumpleaños, bar-mitzvahs, quinceañeras y celebraciones importantes. Transportamos a los integrantes del cortejo entre venues, proveemos el auto de salida para la pareja y nos aseguramos de que los invitados lleguen a tiempo. Nuestros conductores entienden la importancia de tu día especial y ofrecen un servicio impecable. Sea lo que sea que tu día requiera, Viaro te ayuda a lograrlo con comodidad, seguridad y estilo.",
          image: "/images/Galveston.png",
        },
      ],
    },
    pricing: {
      h2: "Tarifas del Servicio de Chofer por Horas",
      vehicles: [
        {
          type: "Sedán Ejecutivo",
          price: 119,
          passengers: 3,
          models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],
          extras: [
            "Mínimo 3 horas",
            "El conductor espera en cada parada",
            "Privacidad VIP estándar",
          ],
        },
        {
          type: "SUV Ejecutivo",
          price: 149,
          passengers: 6,
          models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"],
          extras: [
            "Mínimo 3 horas",
            "Espacio extra para bolsas de compras",
            "Perfecto para familias",
          ],
        },
        {
          type: "Sprinter Ejecutivo",
          price: 199,
          passengers: 13,
          models: ["Mercedes Sprinter"],
          extras: [
            "Mínimo 3 horas",
            "Hasta 13 pasajeros",
            "Ideal para salidas grupales y eventos",
          ],
        },
      ],
      cta: "Obtener Tu Cotización por Horas →",
    },
  },
];
