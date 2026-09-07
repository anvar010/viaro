import React, { ReactNode } from "react";
import type { FAMapKey } from "./Fa";
import type { TestiMapKey } from "./Tetimonials";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
  >
    {children}
  </a>
);

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

type LocationSection = {
  h3: string;
  content?: (string | ReactNode)[];
  quote?: string;
  image?: { src: string; alt: string; caption?: string };
  items?: { label: string; time?: string; desc: string }[];
  list?: string[];
  portList?: { port: string; terminals: string; note: string }[];
  cta?: string;
};

type LocationItem = {
  id: string;
  FA: FAMapKey;
  Testi: TestiMapKey;
  hero: {
    image: { src: string; alt: string; caption: string };
    h1: string;
    h2: string;
    description: string;
    cta: { book: string; phone: string };
  };
  trustBar: string[];
  trustBarTitle: string;
  bodyContent: {
    h2: string;
    h3: string;
    content: (string | ReactNode)[];
    image?: { src: string; alt: string; caption: string };
    /* destinations: {
      name: string;
      time: string;
      description: string;
      image?: string;
    }[]; */
  };
  extraContent?: LocationSection[];
  whereSection?: {
  h3?:string;
  h2: string;
  image: { src: string; alt: string; caption: string };
  items?: { label: string; time: string; desc: string }[];
  content: (string | ReactNode)[];
  cta: string;
};
  pricing: {
    h2: string;
    vehicles: {
      type: string;
      price: number;
      passengers: number;
      bags: number;
      extras: string[];
      badge?: string;
    }[];
    note: string;
    cta: string;
  };
};

export const locationEn: LocationItem[] = [
 {
  id: "seattle-seatac-airport",
  FA: "LocationsSeaTacFa",
  Testi: "locationTestimonials",

  hero: {
    image: {
      src: "/images/SeaTacLocation.png",
      alt: "Viaro black car service SUV at Seattle-Tacoma International Airport with Mount Rainier visible in the distance.",
      caption:
        "Seattle-Tacoma International Airport: The Pacific Northwest's gateway. Viaro provides professional car service to all Puget Sound destinations.",
    },
    h1: "Seattle-Tacoma Airport Car Service (SEA)",
    h2: "SeaTac • Cruise Ports • Boeing Field • Vancouver BC, Gig Harbor, Bellevue, Tacoma & All Puget Sound",
    description:
      "Seattle is home. This is where Viaro started—and where we set the standard. For over 11 years, Viaro has served the Pacific Northwest from our headquarters in Tukwila, just minutes from SeaTac Airport. We know every terminal, every cruise pier, every back road through Bellevue traffic. When Amazon executives need airport transfers, when Alaska cruise passengers need seamless port pickups, when Microsoft teams need ground transportation to Vancouver—they call us. Transparent pricing with rates locked at booking. No rideshare surges when cruise ships dock or tech conferences flood the city. Professional chauffeurs who have driven these routes thousands of times. This is our home turf—and it shows.",
    cta: { book: "Book SEA-TAC Car Service", phone: "(206) 672-8281" },
  },

  trustBarTitle: "Trusted by Puget Sound Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "Flight Tracking",
    "Seattle HQ 11 Years",
  ],

  bodyContent: {
    h2: "About Seattle Airports & Ports: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless Pickups",
    image: {
      src: "/images/SeaTacTerminal.png",
      alt: "Inside Seattle-Tacoma International Airport Central Terminal with passengers heading to baggage claim.",
      caption:
        "SEA-TAC's Central Terminal handles over 51 million passengers yearly, making fast ground transportation essential.",
    },
    content: [
      <>
        <A href="https://www.portseattle.org/sea-tac">
          Seattle-Tacoma International Airport (SEA)
        </A>{" "}
        is the eighth busiest airport in the United States. Over 51 million
        passengers pass through each year, making it the main gateway to the
        Pacific Northwest. The airport sits 14 miles south of downtown Seattle,
        just off Interstate 5 near the cities of SeaTac and Tukwila.
      </>,
      "SEA has one main terminal with four large open spaces, known as concourses —or courtyards—, so it is easier to navigate than large hubs like LAX or JFK. Concourse A is home to Alaska Airlines, the airport's largest carrier. Concourses B, C, and D serve Delta, United, American, Southwest, and international flights.",
      <>
        Before your flight, you might grab coffee at one of the many Starbucks
        spots in the terminal. It fits Seattle, the coffee chain's hometown. For
        a sit-down meal,{" "}
        <A href="https://florarestaurantgroup.com/restaurant/floret-seatac/">
          Floret by Café Flora
        </A>{" "}
        offers Pacific Northwest cuisine near the C gates.{" "}
        <A href="https://bambuza.com/seatac">Bambuza Vietnam Kitchen</A> serves
        pho and banh mi in the Central Terminal.
      </>,
      "Seattle traffic ranks among the worst in America. During afternoon rush (3–7 PM), what should be a 20-minute drive to downtown can take over an hour on I-5. But don't worry, our drivers know other routes. They take I-405 through Renton when gridlock slows I-5. They use SR-99 for West Seattle. They use surface streets through Georgetown when accidents block the freeway.",
      <>
        We monitor real-time traffic from{" "}
        <A href="https://wsdot.wa.gov/travel/real-time/traffic">WSDOT</A> and
        adjust routes during your trip. If the 520 bridge backs up, we take
        I-90. If there is an accident near{" "}
        <A href="https://www.seahawks.com">
          Lumen Field (home of the Seattle Seahawks)
        </A>
        , we know before you hit the merge. This local knowledge saves 20–30
        minutes on busy days.
      </>,
      "After you collect your bags at the Central Terminal baggage claim, you have two choices: You can fight the crowds at curbside pickup or take the local shortcut. Smart travelers head to the third-floor parking garage and exit by the purple elevator markers. Your Viaro chauffeur waits right there —no crowds, no confusion, no waiting in Seattle rain; only seamless transfers.",
    ],
  },

  extraContent: [
    {
      h3: "Seattle-Tacoma International Airport (SEA)",
      image: {
        src: "/images/SeaTacArrival.png",
        alt: "Viaro chauffeur at SeaTac Airport loading luggage into luxury black car at terminal arrivals.",
        caption:
          "Our headquarters are 8 minutes from SeaTac. We know this airport better than anyone.",
      },
      content: [
        "SeaTac is the 8th busiest airport in the United States—a major hub for Alaska Airlines and Delta, with 50+ million passengers annually. One central terminal, four concourses, and the infamous I-5/I-405 merge that can turn a 20-minute drive into an hour.",
        "Insider tip: International arrivals clear customs on the south end of the terminal—allow 45-90 minutes after landing. Viaro tracks your flight in real-time and adjusts pickup automatically. We meet you at the 3rd floor arrivals drive (commercial vehicles)—not the rideshare lot in the garage.",
        <>
          Popular destinations from SEA:{" "}
          <A href="https://visitseattle.org/">Downtown Seattle</A>, Bellevue,
          Redmond (Microsoft), Amazon HQ, Tacoma, cruise terminals, and the
          Eastside tech corridor.
        </>,
      ],
      cta: "Book SeaTac Transfer →",
    },
    {
      h3: "Cruise Terminal: Pier 66 (Bell Street)",
      image: {
        src: "/images/Pier66Terminal.png",
        alt: "Viaro black Sprinter Van at Seattle cruise terminal Pier 66 with cruise ship visible and Elliott Bay in background.",
        caption:
          "Seamless transfers between SeaTac and Seattle's cruise terminals—the gateway to Alaska.",
      },
      content: [
        "Pier 66 sits on the Downtown Seattle waterfront, steps from Pike Place Market. Norwegian Cruise Line and Oceania Cruises operate from here. The location is convenient for pre-cruise sightseeing, but street parking is limited and drop-off lanes can be chaotic on embarkation days.",
        "Insider tip: Viaro drops you at the terminal entrance, handles luggage with porters, and avoids the parking garage maze. If you are arriving from SeaTac, we time pickups to avoid the morning rush through Downtown.",
        <>
          See our dedicated{" "}
          <a
            href="/en/black-car-service/cruise-port-transfers"
            className="underline text-white/70 hover:text-white transition-colors"
          >
            cruise port transfer service
          </a>{" "}
          for full details on Alaska cruise transportation.
        </>,
      ],
      cta: "Book your Cruise Terminal Transfer →",
    },
    {
      h3: "Cruise Terminal: Pier 91 (Smith Cove)",
      image: {
        src: "/images/Pier91Terminal.png",
        alt: "Luxury black car sedan with Seattle skyline with Space Needle, Bellevue downtown skyline, cruise ships at Pier 91.",
        caption:
          "From SeaTac to cruise ships, Viaro connects you to Puget Sound, helping you reach every destination.",
      },
      content: [
        <>
          Pier 91 is Seattle's primary cruise facility—located in the Interbay
          neighborhood, about 10 minutes north of Downtown.{" "}
          <A href="https://www.princess.com/">Princess Cruises</A>,{" "}
          <A href="https://www.hollandamerica.com/">Holland America</A>,{" "}
          <A href="https://www.royalcaribbean.com/">Royal Caribbean</A>, and{" "}
          <A href="https://www.celebritycruises.com/">Celebrity Cruises</A> all
          use this terminal.
        </>,
        "Insider tip: Pier 91 has dedicated drop-off lanes and better traffic flow than Pier 66. We coordinate arrival times with ship embarkation schedules—no waiting in line for hours. For disembarkation, we track ship arrival and meet you as you clear the terminal.",
        <>
          See our dedicated{" "}
        <a
            href="/en/black-car-service/cruise-port-transfers"
            className="underline text-white/70 hover:text-white transition-colors"
          >
            cruise port transfer service
          </a>{" "}
          for full details on Alaska cruise transportation.
        </>,
      ],
      cta: "Book SEA-TAC to Cruise Terminal →",
    },
    {
      h3: "Boeing Field (BFI) — Private Aviation",
      image: {
        src: "/images/BoeingField.png",
        alt: "Viaro luxury black car at Boeing Field King County International Airport for private aviation transfers.",
        caption:
          "Tarmac pickup for private aviation at Seattle's premier executive airport.",
      },
      content: [
        "Boeing Field (King County International Airport) is Seattle's private aviation hub—just 5 miles from Downtown, with no commercial airline traffic to contend with. Tech executives, sports team owners, and high-net-worth travelers use BFI to skip SeaTac entirely.",
        <>
          Insider tip: Viaro coordinates directly with FBO operations including{" "}
          <A href="https://www.signatureflight.com/">Signature Flight Support</A>
          ,{" "}
          <A href="https://www.claylacy.com/">Clay Lacy Aviation</A>, and{" "}
          <A href="https://www.galvinflying.com/">Galvin Flying</A>. Where
          security allows, we meet you at the jet stairs. Step off the plane and
          into the back seat.
        </>,
        "Popular destinations from BFI: Downtown Seattle (10 min), Bellevue/Eastside (20 min), Medina, Mercer Island, and quick access to I-5 and I-90.",
      ],
      cta: "Book Boeing Field Transfer →",
    },
    {
      h3: "Seattle to Vancouver BC — Cross-Border Service",
      image: {
        src: "/images/SeattleVancouver.png",
        alt: "Viaro luxury black car providing Seattle to Vancouver BC cross-border transportation service.",
        caption:
          "Seamless ground transportation between Seattle and Vancouver—no flight connections, no border hassles.",
      },
      content: [
        "Vancouver BC is just 140 miles north of Seattle—close enough for a day trip, but crossing the border adds complexity. Viaro provides seamless cross-border ground transportation for executives, film crews, and travelers who prefer avoiding the SeaTac-YVR flight shuffle.",
        "Insider tip: The Peace Arch and Pacific Highway crossings have different wait times—we monitor both in real-time and route accordingly. NEXUS lane access available for expedited crossings when passengers are enrolled. We handle the logistics; you handle your meetings.",
        "Popular routes: Seattle to Downtown Vancouver, SeaTac to Vancouver International Airport (YVR), Seattle to Whistler, and corporate shuttles between tech offices in both cities.",
      ],
      cta: "Book Vancouver Transfer →",
    },
  ],

  whereSection: {
    h2: "Where Seattle Moves with Viaro",
    h3:"Our drivers know every route from SEA to destinations across the Puget Sound region:",
    image: {
      src: "/images/SeattleDestinations.png",
      alt: "Viaro luxury black car outside Amazon Spheres in Downtown Seattle.",
      caption:
        "From Amazon HQ to Microsoft campus, Pike Place to Bellevue—Viaro moves Seattle's tech leaders.",
    },
     items: [
    {
      label: "Downtown Seattle",
      time: "20 min",
      desc: "Pike Place Market, Amazon HQ, convention center, waterfront hotels",
    },
    {
      label: "Bellevue",
      time: "25 min",
      desc: "Microsoft campus, T-Mobile HQ, Bellevue Square, tech corridor",
    },
    {
      label: "Gig Harbor",
      time: "45 min",
      desc: "Peninsula transportation, waterfront restaurants, and residential communities",
    },
    {
      label: "Redmond",
      time: "35 min",
      desc: "Microsoft main campus, Nintendo of America, tech offices",
    },
    {
      label: "Tacoma",
      time: "30 min",
      desc: "Port of Tacoma, downtown Tacoma, Joint Base Lewis-McChord",
    },
    {
      label: "Cruise Terminals",
      time: "25 min",
      desc: "Pier 66, Pier 91 (Smith Cove) for Alaska cruise departures",
    },
  ],
    content: [
      <>
        Tech Campuses:{" "}
        <A href="https://www.aboutamazon.com/">Amazon HQ</A> (South Lake Union),{" "}
        <A href="https://www.microsoft.com/">Microsoft</A> (Redmond), Meta
        (Fremont), Google (Kirkland/Fremont), T-Mobile HQ (Bellevue), Expedia,
        Zillow, and the Eastside startup corridor.
      </>,
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/seattle/">Four Seasons Seattle</A>,{" "}
        <A href="https://www.fairmont.com/seattle/">Fairmont Olympic</A>,{" "}
        <A href="https://www.edgewaterhotel.com/">The Edgewater</A>, Thompson
        Seattle, W Seattle.
      </>,
      <>
        Conventions &amp; Events:{" "}
        <A href="https://www.wscc.com/">Washington State Convention Center</A>,{" "}
        <A href="https://climatepledgearena.com/">Climate Pledge Arena</A>{" "}
        (Kraken, concerts),{" "}
        <A href="https://www.mlb.com/mariners/ballpark">T-Mobile Park</A>{" "}
        (Mariners), Lumen Field (Seahawks, Sounders).
      </>,
      <>
        Culture &amp; Dining:{" "}
        <A href="https://www.pikeplacemarket.org/">Pike Place Market</A>, Space
        Needle, Museum of Pop Culture, Canlis, and the Capitol Hill dining scene.
      </>,
      "Eastside: Bellevue, Kirkland, Redmond, Mercer Island, Medina—home to some of the highest concentrations of tech wealth in the country.",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        for executive roadshows and team shuttles.
      </>,
    ],
    cta: "Explore Seattle Services →",
  },

  pricing: {
    h2: "SEA-TAC Airport Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 129,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Flight tracking included",
          "Purple elevator pickup",
        ],
      },
      {
        type: "SUV",
        price: 159,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra luggage space",
          "Pre-assigned chauffeur",
          "Flight tracking included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Meet & Greet",
        price: 25,
        passengers: 0,
        bags: 0,
        extras: [
          "Driver inside terminal",
          "Name sign at baggage claim",
          "Add-on to any vehicle",
        ],
      },
    ],
    note: "Rates shown are for trips up to 18 miles. Hourly service: $85/hour (sedan) or $115/hour (SUV). Book 30 days ahead and save up to 12%. Your rate locks at booking and never increases.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
  // ══════════════════════════════════════════════════════════════════
  // NEW YORK CITY
  // ══════════════════════════════════════════════════════════════════
  {
    id: "new-york",
    FA: "locationNewYorkFA",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/NewYorkLocation.png",
        alt: "Viaro black car service in New York City with Manhattan skyline and luxury sedan approaching Midtown.",
        caption:
          "From Wall Street to Teterboro, JFK to Newark—Viaro delivers seamless executive transportation across the New York metro area.",
      },
      h1: "New York City Black Car Service",
      h2: "JFK • LaGuardia • Newark • Teterboro • Westchester — Transparent Rates, No Surge, 24/7",
      description:
        "New York does not wait. Neither should you. In a city where every minute counts, Viaro delivers executive black car service that keeps pace with the fastest city on earth. Whether you are landing at JFK after a red-eye, stepping off a private jet at Teterboro, catching a flight out of Newark, or rushing through LaGuardia—we are already there, waiting curbside or on the tarmac. Transparent pricing. Real-time flight tracking. Professional chauffeurs who know every bridge, tunnel, and shortcut across all five boroughs and into New Jersey.",
      cta: { book: "Book Your NYC Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by New York's Business Leaders",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "5 Airports",
      "24/7 Live Support",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "The Professional's Guide to Seamless Pickups",
      image: {
        src: "/images/JFKArrival.png",
        alt: "Viaro chauffeur loading luggage into luxury black car at JFK Airport Terminal 4 arrivals.",
        caption:
          "We know every terminal, every traffic pattern, and every shortcut across New York and New Jersey.",
      },
      content: [
        "Flying into New York means navigating one of the most complex airport systems in the world. Five major airports. Dozens of terminals. Legendary traffic. Here is how Viaro helps you beat the chaos at each one.",
      ],
    },
    extraContent: [
      {
        h3: "JFK International Airport (JFK)",
        image: {
          src: "/images/JFKTerminal.png",
          alt: "Viaro chauffeur meeting passengers at LaGuardia Airport Terminal B commercial vehicle lane.",
          caption:
            "JFK's terminals spread across 5 miles of roads — your Viaro chauffeur meets you curbside, no confusion.",
        },
        content: [
          "JFK handles 60 million passengers a year across six terminals. The trick? Know which terminal your airline uses. Viaro tracks your flight in real-time, so we are waiting at the correct terminal before you even clear customs.",
          "Insider tip: International arrivals at Terminal 1 and Terminal 4 can take 45-90 minutes to clear customs. We monitor your landing time and adjust pickup accordingly—no standing at arrivals wondering where your driver is.",
          <>
            Popular destinations from JFK:{" "}
            <A href="https://www.nyse.com/">Wall Street</A>,{" "}
            <A href="https://www.theplazany.com/">Midtown Manhattan hotels</A>,{" "}
            <A href="https://www.discoverlongisland.com/the-hamptons/">
              The Hamptons
            </A>
            .
          </>,
        ],
      },
      {
        h3: "LaGuardia Airport (LGA)",
        image: {
          src: "/images/LGATerminal.png",
          alt: "Viaro chauffeur meeting passengers at LaGuardia Airport Terminal B commercial vehicle lane.",
          caption:
            "LaGuardia's new Terminal B — beautiful airport, confusing rideshare pickup. Viaro meets you at the commercial vehicle lane.",
        },
        content: [
          "LaGuardia is the closest airport to Manhattan—just 8 miles from Midtown. But do not let the distance fool you. The Grand Central Parkway and BQE can turn a 20-minute ride into an hour during rush hour.",
          "Insider tip: The new Terminal B is connected by a pedestrian bridge to the parking garage—but rideshare pickup is a maze. Viaro chauffeurs meet you at the commercial vehicle lane on the arrivals level. No walking to a distant lot.",
          <>
            Popular destinations from LGA:{" "}
            <A href="https://www.timessquarenyc.org/">Times Square</A>,{" "}
            <A href="https://www.msg.com/">Madison Square Garden</A>,{" "}
            <A href="https://javitscenter.com/">Javits Convention Center</A>.
          </>,
        ],
      },
      {
        h3: "Newark Liberty International Airport (EWR)",
        image: {
          src: "/images/EWRTerminal.png",
          alt: "Viaro black car at Newark Liberty International Airport Terminal C arrivals.",
          caption:
            "Newark Terminal C — United's hub. Viaro tracks your terminal and waits at the right curb.",
        },
        content: [
          "Newark is the United Airlines hub and often the best option for travelers heading to New Jersey, Lower Manhattan, or anywhere along the PATH train corridor. It is also frequently less crowded than JFK—and sometimes cheaper to fly into.",
          "Insider tip: Terminal C is United's domain—massive but well-organized. Terminals A and B serve everyone else. The AirTrain connects all terminals, but if you land in Terminal A and your car is waiting at Terminal C, that is a 15-minute detour. Viaro tracks your terminal and meets you at the correct arrivals curb.",
          <>
            Popular destinations from EWR: Jersey City, Hoboken, Lower Manhattan
            (via Holland Tunnel),{" "}
            <A href="https://www.prucenter.com/">Prudential Center</A>,
            Princeton, and Philadelphia connections.
          </>,
        ],
      },
      {
        h3: "Teterboro Airport (TEB) — Private Aviation",
        image: {
          src: "/images/TEBTarmac.png",
          alt: "Viaro luxury black SUV waiting on the tarmac at Teterboro Airport FBO for private jet arrival.",
          caption:
            "Teterboro — where Wall Street flies. We meet you at the jet stairs. Total time on the ground: under 2 minutes.",
        },
        content: [
          "Teterboro is where Wall Street flies. This FBO-only airport in New Jersey handles more private jet traffic than almost anywhere in the country. If you are landing here, you expect a car waiting on the tarmac—not in a parking lot.",
          <>
            Insider tip: Viaro coordinates directly with FBO operations at{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            and{" "}
            <A href="https://www.atlanticaviation.com/">Atlantic Aviation</A>.{" "}
            Where security allows, we meet you at the jet stairs. Total time on
            the ground: under 2 minutes.
          </>,
          "Popular destinations from TEB: Financial District, Midtown, Greenwich CT, and helicopter connections to the Hamptons.",
        ],
      },
      {
        h3: "Westchester County Airport (HPN)",
        image: {
          src: "/images/HPNAirport.png",
          alt: "Viaro black car at Westchester County Airport serving corporate executives and Connecticut Gold Coast travelers.",
          caption:
            "Westchester County Airport — skip JFK chaos. Straight shot to Manhattan via I-95 or Hutchinson River Parkway.",
        },
        content: [
          "HPN serves Westchester's corporate executives and Connecticut's Gold Coast. It handles both commercial flights (JetBlue, American, United) and private aviation. Smaller crowds. Faster security. And a straight shot down I-95 or the Hutchinson River Parkway to Manhattan.",
          <>
            Insider tip: If you live in Westchester, Greenwich, or Stamford—skip
            the chaos of JFK and LaGuardia. HPN is your home airport. Viaro
            provides transfers to{" "}
            <A href="https://www.ibm.com/">IBM headquarters</A>,{" "}
            <A href="https://www.pepsico.com/">PepsiCo</A>, and the hedge fund
            corridor in Stamford.
          </>,
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],

    whereSection: {
      h2: "Where New Yorkers Go with Viaro",
      image: {
        src: "/images/NewYorkHotels.png",
        alt: "Viaro luxury black car outside iconic Manhattan hotel providing executive transportation service.",
        caption:
          "From five-star hotels to Fortune 500 headquarters, Viaro moves New York's most demanding travelers.",
      },
      content: [
        <>
          Manhattan Hotels: <A href="https://www.theplazany.com/">The Plaza</A>,{" "}
          <A href="https://www.marriott.com/hotels/travel/nycxr-the-st-regis-new-york/">
            The St. Regis
          </A>
          , <A href="https://www.fourseasons.com/newyork/">Four Seasons</A>,{" "}
          <A href="https://www.peninsula.com/en/new-york">The Peninsula</A>.
        </>,
        "Business Districts: Wall Street/Financial District, Midtown (Park Avenue corridor), Hudson Yards, World Trade Center, Jersey City waterfront.",
        <>
          Events &amp; Entertainment:{" "}
          <A href="https://www.msg.com/">Madison Square Garden</A>,{" "}
          <A href="https://www.lincolncenter.org/">Lincoln Center</A>,{" "}
          <A href="https://www.broadway.com/">Broadway theaters</A>, Yankee
          Stadium, MetLife Stadium.
        </>,
        "Beyond Manhattan: The Hamptons, Greenwich CT, Princeton NJ, Atlantic City, and cross-Hudson connections to Hoboken and Jersey City.",
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          and{" "}
          <a
            href={`/en/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white hover:text-primary transition-colors"
          >
            hourly chauffeur options
          </a>
        </>,
      ],
      cta: "Explore NYC Services →",
    },

    pricing: {
      h2: "NYC Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & corporate travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Contact us for Hamptons, Connecticut, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // LOS ANGELES
  // ══════════════════════════════════════════════════════════════════
  {
    id: "los-angeles-lax",
    FA: "LocationsLAFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/LosAngeles.png",
        alt: "Viaro black car service in Los Angeles with Downtown LA skyline and luxury sedan on palm-lined boulevard.",
        caption:
          "From Hollywood to the beaches, LAX to Van Nuys—Viaro delivers seamless executive transportation across Greater Los Angeles.",
      },
      h1: "Los Angeles Black Car Service",
      h2: "LAX • Van Nuys • Burbank • Long Beach • Orange County — Flat Rates, No Surge, 24/7",
      description:
        "In LA, you are either stuck in traffic—or you have a driver who knows how to beat it. Los Angeles is 500 square miles of freeways, canyons, and coastline. Getting from LAX to Beverly Hills can take 25 minutes or 2 hours depending on the time of day. That is why executives, entertainment professionals, and discerning travelers trust Viaro to navigate the sprawl. Whether you are landing at LAX after an international flight, stepping off a private jet at Van Nuys, or catching a Southwest flight out of Burbank—we are already there. Transparent rates. Professional chauffeurs who know every shortcut from the Valley to the beach.",
      cta: { book: "Book Your LA Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by LA's Entertainment & Business Elite",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "6 Airports",
      "24/7 Live Support",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "Insider Hacks to Skip the Terminal Traffic",
      image: {
        src: "/images/LAXArrival.png",
        alt: "Viaro chauffeur at LAX Airport loading luggage into luxury black car with iconic LAX pylons in background.",
        caption:
          "We know every terminal, every back road, and every traffic pattern across Greater Los Angeles.",
      },
      content: [
        "Greater Los Angeles has more airports than any metro area in the country. Knowing which one to use—and how to get in and out efficiently—is the difference between a smooth trip and a nightmare. Here is how Viaro helps you navigate each one.",
      ],
    },

    extraContent: [
      {
        h3: "Los Angeles International Airport (LAX)",
        image: {
          src: "/images/LAXTerminal.png",
          alt: "Viaro black car at Los Angeles International Airport arrivals level serving Beverly Hills, Santa Monica and Downtown LA.",
          caption:
            "LAX arrivals — skip the rideshare chaos. Viaro meets you curbside at the correct terminal, every time.",
        },
        content: [
          "LAX is the fifth-busiest airport in the world—88 million passengers a year across 9 terminals. The horseshoe-shaped layout is legendary for gridlock, especially during rush hour. But there are tricks.",
          "Insider tip: Skip the LAX-it lot chaos. Viaro chauffeurs meet you at the designated pickup zones on the arrivals level—not the rideshare lot across the airport. We track your flight, so we arrive exactly when you clear baggage claim.",
          <>
            Popular destinations from LAX:{" "}
            <A href="https://www.beverlyhills.org/">Beverly Hills</A>,{" "}
            <A href="https://www.santamonica.com/">Santa Monica</A>, Downtown
            LA, <A href="https://www.hollywoodchamber.net/">Hollywood</A>,
            Malibu, and Westside tech offices.
          </>,
        ],
      },
      {
        h3: "Van Nuys Airport (VNY) — Private Aviation",
        image: {
          src: "/images/VNYTarmac.png",
          alt: "Viaro black SUV meeting private jet at Van Nuys Airport FBO tarmac with Hollywood Hills in background.",
          caption:
            "Van Nuys — the world's busiest general aviation airport. We meet you at the jet stairs.",
        },
        content: [
          "Van Nuys is the busiest general aviation airport in the world. This is where Hollywood flies—studio executives, A-list talent, and tech billionaires land here daily. If you are arriving by private jet, VNY is your gateway to LA.",
          <>
            Insider tip: Viaro coordinates directly with FBOs, including{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>
            ,{" "}
            <A href="https://www.castlecookeaviation.com/">
              Castle & Cooke Aviation
            </A>
            , and <A href="https://www.jetaviation.com/">Jet Aviation</A>. Where
            security allows, we meet you at the jet stairs. Step off the plane
            and into the back seat.
          </>,
          "Popular destinations from VNY: Beverly Hills, Bel Air, Malibu, Warner Bros. Studios, Universal Studios, Netflix/Amazon/Apple studios in Hollywood.",
        ],
      },
      {
        h3: "Hollywood Burbank Airport (BUR)",
        image: {
          src: "/images/BURTerminal.png",
          alt: "Viaro black car waiting curbside at Hollywood Burbank Airport terminal entrance.",
          caption:
            "Burbank — walk straight out the gate to your Viaro car. No shuttles, no remote lots.",
        },
        content: [
          "Burbank is LA's best-kept secret. Smaller crowds, faster security, and you can walk from the gate to your car in under 5 minutes. If you are heading to the Valley, Pasadena, or Downtown LA, skip LAX and fly into Burbank.",
          "Insider tip: The terminal is tiny—just walk outside and your Viaro car is waiting at the curb. No shuttles, no remote lots. Southwest, JetBlue, American, United, and Delta all fly here.",
          <>
            Popular destinations from BUR:{" "}
            <A href="https://www.wbstudiotour.com/">Warner Bros. Studios</A>,{" "}
            <A href="https://www.universalstudioshollywood.com/">
              Universal Studios
            </A>
            , Disney Studios, Pasadena/Rose Bowl, Glendale.
          </>,
        ],
      },
      {
        h3: "Long Beach Airport (LGB)",
        image: {
          src: "/images/LGBTerminal.png",
          alt: "Viaro black car at Long Beach Airport boutique terminal with palm trees and clear California skies.",
          caption:
            "Long Beach — boutique airport, zero LAX traffic. Closest to the Port of Long Beach cruise terminal.",
        },
        content: [
          "Long Beach is a boutique airport with a loyal following. JetBlue dominates here, with affordable flights and a relaxed, almost resort-like atmosphere. It is also the closest airport to the Port of Long Beach cruise terminal.",
          "Insider tip: If you are cruising from Long Beach, fly into LGB and skip the LAX traffic entirely. We provide seamless cruise port transfers right to the ship.",
          <>
            Popular destinations from LGB:{" "}
            <A href="https://www.queenmary.com/">Queen Mary</A>, Aquarium of the
            Pacific, Downtown Long Beach, Orange County beaches, Disneyland.
          </>,
        ],
      },
      {
        h3: "John Wayne Airport / Orange County (SNA)",
        image: {
          src: "/images/SNATerminal.png",
          alt: "Viaro black car at John Wayne Airport Orange County lower arrivals curb serving Newport Beach and Disneyland travelers.",
          caption:
            "John Wayne Airport — 15 minutes to Disneyland, 10 minutes to Newport Beach. Calmer than LAX.",
        },
        content: [
          <>
            John Wayne Airport (also known as SNA or JWA) serves Orange County's
            affluent beach communities—{" "}
            <A href="https://www.visitnewportbeach.com/">Newport Beach</A>,{" "}
            <A href="https://www.visitlagunabeach.com/">Laguna Beach</A>,
            Irvine, and the{" "}
            <A href="https://disneyland.disney.go.com/">Disneyland Resort</A>.{" "}
            For travelers heading south of LA, this airport saves 30–60 minutes
            compared to LAX.
          </>,
          "Insider tip: SNA has strict noise rules—smaller and calmer for passengers. Viaro meets you right at the curb on the lower arrivals level.",
          <>
            Popular destinations from SNA:{" "}
            <A href="https://disneyland.disney.go.com/">Disneyland</A>,{" "}
            <A href="https://www.visitnewportbeach.com/">Newport Beach</A>,{" "}
            <A href="https://www.visitlagunabeach.com/">Laguna Beach</A>, Irvine
            tech campuses, Anaheim Convention Center.
          </>,
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],

    whereSection: {
      h2: "Where LA Moves with Viaro",
      image: {
        src: "/images/LAHotels.png",
        alt: "Viaro luxury black car outside iconic Beverly Hills hotel providing executive transportation.",
        caption:
          "From studio lots to beachfront hotels, Viaro moves LA's most demanding travelers.",
      },
      content: [
        <>
          Luxury Hotels:{" "}
          <A href="https://www.fourseasons.com/beverlywilshire/">
            Beverly Wilshire
          </A>
          ,{" "}
          <A href="https://www.peninsula.com/en/beverly-hills">
            The Peninsula Beverly Hills
          </A>
          , <A href="https://www.chateaumarmont.com/">Chateau Marmont</A>, Hotel
          Bel-Air, Shutters on the Beach.
        </>,
        "Entertainment & Studios: Warner Bros., Universal, Paramount, Sony Pictures, Netflix HQ, Amazon Studios, Apple TV+.",
        <>
          Sports &amp; Events:{" "}
          <A href="https://www.sofistadium.com/">SoFi Stadium</A>,{" "}
          <A href="https://www.cryptoarena.com/">Crypto.com Arena</A>, Dodger
          Stadium, Rose Bowl,{" "}
          <A href="https://www.lacclink.com/">LA Convention Center</A>.
        </>,
        <>
          Shopping &amp; Lifestyle:{" "}
          <A href="https://www.rodeodrive-bh.com/">Rodeo Drive</A>, The Grove,
          Century City, South Coast Plaza, Fashion Island.
        </>,
        "Beach Communities: Malibu, Santa Monica, Venice, Manhattan Beach, Newport Beach, Laguna Beach.",
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          and{" "}
          <a
            href={`/en/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white hover:text-primary transition-colors"
          >
            hourly chauffeur options
          </a>
        </>,
      ],
      cta: "Explore LA Services →",
    },

    pricing: {
      h2: "Los Angeles Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & corporate travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Contact us for Malibu, Orange County, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // CHICAGO
  // ══════════════════════════════════════════════════════════════════

  {
    id: "chicago",
    FA: "LocationsChicagocoFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/Chicago.png",
        alt: "Viaro black car service in Chicago with Downtown skyline and luxury sedan on Michigan Avenue.",
        caption:
          "From the Magnificent Mile to O'Hare, the Loop to the suburbs—Viaro delivers seamless executive transportation across Chicagoland.",
      },
      h1: "Chicago Black Car Service",
      h2: "O'Hare • Midway • DuPage FBO — Transparent Pricing, Locked Rates, 24/7",
      description:
        "Chicago does not slow down for weather, traffic, or excuses. Neither do we. The Windy City is a place where handshake deals are still made over deep-dish pizza and business moves at the speed of the L train. Whether you are landing at O'Hare after a cross-country red-eye, flying into Midway for a quick turnaround, or stepping off a Gulfstream at DuPage—Viaro is already waiting. Transparent pricing with rates locked at booking. No rideshare surges when it snows. Real-time flight tracking. Professional chauffeurs who know the Kennedy, the Dan Ryan, and every shortcut through the Loop.",
      cta: { book: "Book Your Chicago Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by Chicago's Executives & Deal-Makers",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "3 Airports",
      "Locked Rates — No Surges",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "Your Fast-Track Guide to Bypassing Airport Gridlock",
      image: {
        src: "/images/OHareArrival.png",
        alt: "Viaro chauffeur at O'Hare Airport loading luggage into luxury black car at terminal arrivals.",
        caption:
          "We know every terminal, every traffic pattern, and every weather workaround across Chicagoland.",
      },
      content: [
        "Chicago's airport system serves over 100 million passengers a year. O'Hare alone has four terminals and the infamous I-90/I-94 merge. Knowing which terminal, which route, and which backup plan to use separates professionals from amateurs. Here is how Viaro helps you beat the chaos.",
      ],
    },

    extraContent: [
      {
        h3: "O'Hare International Airport (ORD)",
        image: {
          src: "/images/ORDTerminal.png",
          alt: "Viaro black car at O'Hare International Airport Terminal arrivals serving Downtown Chicago and suburbs.",
          caption:
            "O'Hare Terminal 5 — international arrivals can take 90 minutes through customs. Viaro is already tracking your landing.",
        },
        content: [
          "O'Hare is the sixth-busiest airport in the world—a United and American Airlines fortress with four terminals and a reputation for delays. But delays do not mean you wait. Viaro tracks every flight in real-time, so we know when you land before you do.",
          "Insider tip: International arrivals land at Terminal 5, which is separate from the main terminal complex. Customs can take 30–90 minutes. Viaro monitors your landing time and adjusts pickup—no standing outside in a Chicago January wondering where your ride is.",
          <>
            Popular destinations from ORD:{" "}
            <A href="https://www.choosechicago.com/">The Loop</A>,{" "}
            <A href="https://www.themagnificentmile.com/">Magnificent Mile</A>,{" "}
            <A href="https://www.mccormickplace.com/">McCormick Place</A>, River
            North, Evanston, and the western suburbs.
          </>,
        ],
      },
      {
        h3: "Chicago Midway International Airport (MDW)",
        image: {
          src: "/images/MDWTerminal.png",
          alt: "Viaro black car at Chicago Midway Airport commercial vehicle lane on the arrivals level.",
          caption:
            "Midway — closer to downtown than O'Hare, faster security. Viaro meets you at the commercial vehicle lane.",
        },
        content: [
          "Midway is Chicago's Southwest Airlines hub—smaller, faster, and often overlooked by visitors. But locals know: Midway is closer to Downtown (11 miles vs. O'Hare's 17), and the Orange Line gets you to the Loop in 25 minutes.",
          "Insider tip: Midway's single terminal means less walking—but the rideshare pickup area is across a pedestrian bridge in the parking garage. Viaro meets you at the commercial vehicle lane on the arrivals level. Step outside, step into your car.",
          "Popular destinations from MDW: Downtown Loop, South Side (White Sox, University of Chicago), Hyde Park, Pilsen, and quick access to I-55 south.",
        ],
      },
      {
        h3: "DuPage Airport (DPA) — Private Aviation",
        image: {
          src: "/images/DPATarmac.png",
          alt: "Viaro luxury SUV on the tarmac at DuPage Airport FBO waiting for private jet arrival west of Chicago.",
          caption:
            "DuPage FBO — Chicagoland's premier private aviation gateway. Total time on ground: seconds, not minutes.",
        },
        content: [
          "DuPage is Chicagoland's premier private aviation gateway. Located 25 miles west of the Loop in West Chicago, DPA serves corporate executives, Fortune 500 flight departments, and private jet travelers who want to skip O'Hare entirely.",
          <>
            Insider tip: Viaro coordinates directly with FBO operations
            including{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            and{" "}
            <A href="https://www.atlanticaviation.com/">Atlantic Aviation</A>.{" "}
            Where security allows, we meet you at the jet stairs. You step off
            the plane and into the back seat—total time on the ground measured
            in seconds, not minutes.
          </>,
          "Popular destinations from DPA: Downtown Chicago, Naperville corporate campuses, Oak Brook (McDonald's HQ corridor), Schaumburg, and connections to the I-88 tech corridor.",
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],
    whereSection: {
      h2: "Where Chicago Moves with Viaro",
      image: {
        src: "/images/ChicagoHotels.png",
        alt: "Viaro luxury black car outside iconic Chicago hotel on Michigan Avenue providing executive transportation.",
        caption:
          "From the Magnificent Mile to corporate campuses, Viaro moves Chicago's most demanding travelers.",
      },
      content: [
        <>
          Luxury Hotels:{" "}
          <A href="https://www.peninsula.com/en/chicago">
            The Peninsula Chicago
          </A>
          ,{" "}
          <A href="https://www.langhamhotels.com/en/the-langham/chicago/">
            The Langham
          </A>
          , <A href="https://www.fourseasons.com/chicago/">Four Seasons</A>,{" "}
          <A href="https://www.ritzcarlton.com/en/hotels/chicago">
            The Ritz-Carlton
          </A>
          , Waldorf Astoria, Park Hyatt.
        </>,
        <>
          Business Districts: The Loop, River North, West Loop, Fulton Market,
          Merchandise Mart, Willis Tower,{" "}
          <A href="https://www.boeing.com/">Boeing Global HQ</A>, and suburban
          campuses in Schaumburg, Oak Brook, and Naperville.
        </>,
        <>
          Conventions &amp; Events:{" "}
          <A href="https://www.mccormickplace.com/">McCormick Place</A> (largest
          convention center in North America), Navy Pier,{" "}
          <A href="https://www.unitedcenter.com/">United Center</A>, Soldier
          Field, Wrigley Field.
        </>,
        <>
          Shopping &amp; Culture:{" "}
          <A href="https://www.themagnificentmile.com/">Magnificent Mile</A>,
          Oak Street,{" "}
          <A href="https://www.artic.edu/">Art Institute of Chicago</A>,
          Millennium Park, Chicago Theatre district.
        </>,
        <>
          Universities &amp; Medical:{" "}
          <A href="https://www.northwestern.edu/">Northwestern University</A>,
          University of Chicago, Rush Medical Center, Northwestern Memorial
          Hospital.
        </>,
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          and{" "}
          <a
            href={`/en/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white hover:text-primary transition-colors"
          >
            hourly chauffeur options
          </a>
        </>,
      ],
      cta: "Explore Chicago Services →",
    },

    pricing: {
      h2: "Chicago Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & corporate travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Not even in a Chicago blizzard. Contact us for suburban and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // SAN FRANCISCO BAY AREA
  // ══════════════════════════════════════════════════════════════════
  {
    id: "san-francisco",
    FA: "LocationsSanFranciscoFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/SanFrancisco.png",
        alt: "Viaro black car service in San Francisco with Golden Gate Bridge and Downtown skyline featuring Salesforce Tower.",
        caption:
          "From SFO to Napa Valley, Silicon Valley to the city—Viaro delivers seamless executive transportation across the Bay Area.",
      },
      h1: "San Francisco Bay Area Black Car Service",
      h2: "SFO • San Jose • Oakland — Transparent Pricing, Locked Rates, 24/7",
      description:
        "The Bay Area runs on innovation. Your transportation should too. San Francisco is 50 square miles of hills, fog, and billion-dollar ideas. The peninsula stretches from SFO to Silicon Valley. The East Bay sprawls from Oakland to Fremont. And somewhere in between, you have a flight to catch, a meeting to make, or a vineyard to visit. Viaro navigates it all. Whether you are landing at SFO after a cross-Pacific red-eye, flying into San Jose for a VC pitch, or catching a Southwest flight out of Oakland—we are already waiting. Transparent pricing with rates locked at booking. No rideshare surges when Dreamforce clogs the city. Professional chauffeurs who know the 101, the 280, and every shortcut through SOMA.",
      cta: { book: "Book Your Bay Area Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by Silicon Valley's Leaders",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "3 Airports",
      "24/7 Live Support",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "Navigating North America's Busiest Airports",
      image: {
        src: "/images/SFOArrival.png",
        alt: "Viaro chauffeur at SFO Airport loading luggage into luxury black car at International Terminal.",
        caption:
          "We know every terminal, every freeway merge, and every rush-hour workaround across the Bay Area.",
      },
      content: [
        "The Bay Area has three major airports, each serving different parts of the region. Knowing which one to use—and how to navigate the legendary traffic between them—separates locals from visitors. Here is how Viaro helps you move seamlessly.",
      ],
    },
    extraContent: [
      {
        h3: "San Francisco International Airport (SFO)",
        image: {
          src: "/images/SFOTerminal.png",
          alt: "Viaro black car at San Francisco International Airport arrivals serving Downtown SF and Silicon Valley.",
          caption:
            "SFO International Terminal — Viaro tracks your flight through fog delays and meets you at the upper level pickup zone.",
        },
        content: [
          "SFO is the Bay Area's primary airport—a United Airlines hub with international flights to Asia, Europe, and everywhere in between. Four terminals, including the architecturally stunning International Terminal G. But SFO also has a reputation: fog delays are real, and the 101 North can be brutal.",
          "Insider tip: International arrivals can take 45–90 minutes to clear customs. Viaro tracks your flight in real-time and adjusts pickup accordingly. We meet you at the designated pickup zones on the departures level (upper level)—not the rideshare lot across the airport.",
          <>
            Popular destinations from SFO:{" "}
            <A href="https://www.sftravel.com/">Downtown San Francisco</A>,
            Silicon Valley (Palo Alto, Mountain View, Menlo Park),{" "}
            <A href="https://www.visitnapavalley.com/">Napa Valley</A>, and
            Peninsula corporate campuses.
          </>,
        ],
      },
      {
        h3: "San Jose International Airport (SJC)",
        image: {
          src: "/images/SJCTerminal.png",
          alt: "Viaro black car at San Jose International Airport arrivals serving Silicon Valley tech campuses.",
          caption:
            "San Jose Airport — 10 minutes to Google, 15 minutes to Apple Park. The smart choice for Silicon Valley.",
        },
        content: [
          "San Jose is Silicon Valley's home airport—smaller than SFO, easier to navigate, and right in the heart of the tech corridor. If you are heading to Apple, Google, or any company south of Palo Alto, SJC saves you an hour compared to SFO.",
          "Insider tip: SJC has two terminals connected by a short walk. Southwest dominates Terminal B; everyone else is in Terminal A. The airport is compact—you can be curbside in 10 minutes after landing. Viaro meets you at the commercial vehicle lane on the arrivals level. No rideshare maze.",
          <>
            Popular destinations from SJC:{" "}
            <A href="https://www.apple.com/">Apple Park</A>,{" "}
            <A href="https://about.google/">Google</A>,{" "}
            <A href="https://about.meta.com/">Meta</A>, Stanford University,
            Santa Cruz, and Monterey.
          </>,
        ],
      },
      {
        h3: "Oakland International Airport (OAK)",
        image: {
          src: "/images/OAKTerminal.png",
          alt: "Viaro black car at Oakland International Airport arrivals serving Berkeley, Walnut Creek and East Bay destinations.",
          caption:
            "Oakland Airport — no fog, faster security, and Viaro knows when to take the San Mateo Bridge instead of the Bay Bridge.",
        },
        content: [
          "Oakland is the East Bay's airport—a Southwest Airlines stronghold with quick access to Berkeley, Walnut Creek, and the entire East Bay corridor. It is often less crowded than SFO, with faster security lines and no fog delays.",
          "Insider tip: If you are heading to San Francisco from Oakland, the Bay Bridge can be unpredictable. Morning rush westbound, evening rush eastbound. Viaro chauffeurs know when to take 880 to the San Mateo Bridge instead—or when BART is actually faster. We give you options.",
          <>
            Popular destinations from OAK:{" "}
            <A href="https://www.berkeley.edu/">UC Berkeley</A>, Downtown
            Oakland, Walnut Creek, Pleasanton/Dublin tech parks, and connections
            to San Francisco via Bay Bridge.
          </>,
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],
    whereSection: {
      h2: "Where the Bay Area Moves with Viaro",
      image: {
        src: "/images/SFHotels.png",
        alt: "Viaro luxury black car at Napa Valley vineyard or outside San Francisco luxury hotel.",
        caption:
          "From Salesforce Tower to Sonoma vineyards, Viaro moves the Bay Area's most discerning travelers.",
      },
      content: [
        <>
          Wine Country:{" "}
          <A href="https://www.visitnapavalley.com/">Napa Valley</A>,{" "}
          <A href="https://www.sonomacounty.com/">Sonoma</A>, Healdsburg,
          Yountville, St. Helena. Our hourly chauffeur service is perfect for
          full-day wine tours.
        </>,
        <>
          Luxury Hotels:{" "}
          <A href="https://www.fairmont.com/san-francisco/">
            Fairmont San Francisco
          </A>
          ,{" "}
          <A href="https://www.marriott.com/hotels/travel/sfoxr-the-st-regis-san-francisco/">
            The St. Regis
          </A>
          , <A href="https://www.fourseasons.com/sanfrancisco/">Four Seasons</A>
          , Ritz-Carlton, Palace Hotel.
        </>,
        <>
          Tech Campuses: Apple Park (Cupertino), Googleplex (Mountain View),
          Meta HQ (Menlo Park),{" "}
          <A href="https://www.salesforce.com/">Salesforce Tower</A> (SF),
          Netflix (Los Gatos), Adobe, NVIDIA, LinkedIn, and Sand Hill Road VC
          offices.
        </>,
        <>
          Conventions &amp; Events:{" "}
          <A href="https://www.moscone.com/">Moscone Center</A> (Dreamforce,
          Apple WWDC, Google I/O),{" "}
          <A href="https://www.chasecenter.com/">Chase Center</A>, Oracle Park,
          Levi's Stadium.
        </>,
        <>
          Universities:{" "}
          <A href="https://www.stanford.edu/">Stanford University</A>, UC
          Berkeley, UCSF, Santa Clara University.
        </>,
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          and for executive roadshows and investor meetings.
        </>,
      ],
      cta: "Explore Bay Area Services →",
    },

    pricing: {
      h2: "San Francisco Bay Area Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & corporate travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Not even during Dreamforce. Contact us for Napa, Sonoma, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },
    // ══════════════════════════════════════════════════════════════════
  // Miami
  // ══════════════════════════════════════════════════════════════════
  {
  id: "miami",
  FA: "locationMiamiFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/MiamiLocation.png",
      alt: "Viaro black car service in Miami with Brickell skyline and luxury sedan approaching Miami International Airport.",
      caption:
        "From MIA to the beaches, Brickell to Opa-locka—Viaro delivers seamless executive transportation across South Florida.",
    },
    h1: "Miami Black Car Service",
    h2: "MIA · FLL · PBI · OPF — Fixed Fares, No Surcharges, 24/7",
    description:
      "Miami on your schedule. Whether you are landing at Miami International Airport after a long flight, stepping off a private jet at Opa-locka, catching a connection out of Fort Lauderdale, or heading to a meeting in Brickell—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Art Basel or when cruise ships fill the port. Professional chauffeurs who know every route from the airport to South Beach, Coral Gables, and the Keys.",
    cta: { book: "Book Your Miami Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Miami's Business Leaders & VIP Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "4 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Miami Airport Pickups",
    image: {
      src: "/images/MIAArrival.png",
      alt: "Viaro chauffeur at Miami International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every traffic pattern, and every shortcut across South Florida.",
    },
    content: [
      "Miami means navigating 4 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Miami International Airport (MIA)",
      image: {
        src: "/images/MIATerminal.png",
        alt: "Viaro black car at Miami International Airport arrivals serving Brickell, South Beach and Coral Gables.",
        caption:
          "MIA's horseshoe terminal handles 50M+ passengers a year — your Viaro chauffeur meets you at the correct concourse, no confusion.",
      },
      content: [
        "MIA handles over 50 million passengers a year through a single horseshoe-shaped terminal with three concourses—D, E, and F. International arrivals at Concourse E face the longest customs queues, often 45–75 minutes during peak hours.",
        "Insider tip: Viaro tracks your inbound flight in real time. If your flight is delayed or customs is backed up, your driver adjusts automatically—no standing at arrivals wondering where your car is.",
        <>
          Popular destinations from MIA:{" "}
          <A href="https://www.brickell.com/">Brickell</A>, Coral Gables, South
          Beach,{" "}
          <A href="https://www.keybiscayne.fl.gov/">Key Biscayne</A>, Coconut
          Grove, Fisher Island.
        </>,
      ],
    },
    {
      h3: "Fort Lauderdale-Hollywood International Airport (FLL)",
      image: {
        src: "/images/FLLTerminal.png",
        alt: "Viaro black car at Fort Lauderdale-Hollywood International Airport Terminal 4 arrivals serving South Florida.",
        caption:
          "FLL's Terminal 1 and Terminal 4 are on opposite ends of the building — Viaro tracks your terminal and positions your driver at the correct curb.",
      },
      content: [
        "FLL is the value airport of South Florida—often less congested and less expensive to fly into than MIA. Four terminals spread across a compact footprint, with US-1 and I-595 traffic that can get brutal in the afternoon.",
        "Insider tip: Terminal 1 and Terminal 4 have completely different pickup zones on opposite ends of the terminal. Viaro tracks your terminal and positions your driver at the correct arrivals curb—no walking the full length of the building.",
        <>
          Popular destinations from FLL: Fort Lauderdale Beach,{" "}
          <A href="https://www.lasolasboulevard.com/">Las Olas</A>, Boca Raton,{" "}
          <A href="https://www.aventura.com/">Aventura</A>, Wynwood, Palm Beach.
        </>,
      ],
    },
    {
      h3: "Palm Beach International Airport (PBI)",
      image: {
        src: "/images/PBITerminal.png",
        alt: "Viaro black car at Palm Beach International Airport arrivals serving Palm Beach Island, Wellington and Boca Raton.",
        caption:
          "PBI — one terminal, short lines, fast baggage claim. Viaro meets you at the ground transportation area, not looping the terminal endlessly.",
      },
      content: [
        "PBI serves the affluent corridor between Palm Beach, Wellington, and Jupiter. One terminal, short security lines, and a baggage claim that actually moves. The drive south to Miami on I-95 is its own daily negotiation.",
        "Insider tip: PBI has no commercial vehicle staging lot—rideshares loop the terminal endlessly. Viaro drivers wait at the designated ground transportation area on the arrivals level. For Palm Beach Island destinations, we route over Southern Boulevard to avoid downtown congestion.",
        <>
          Popular destinations from PBI:{" "}
          <A href="https://www.palmbeach.com/">Palm Beach Island</A>, Worth
          Avenue, Wellington, Boca Raton, Delray Beach, Jupiter.
        </>,
      ],
    },
    {
      h3: "Opa-locka Executive Airport (OPF) — Private Aviation",
      image: {
        src: "/images/OPFTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Opa-locka Executive Airport FBO for private jet arrival near Miami.",
        caption:
          "Opa-locka FBO — Miami's private aviation hub. From wheels down to rolling toward Brickell: under 4 minutes.",
      },
      content: [
        "OPF is Miami's private aviation hub—closer to the city than any commercial airport, with FBO operations at Signature Flight Support and Sheltair Aviation that move with discretion and speed.",
        <>
          Insider tip: Viaro coordinates directly with FBO ground ops at{" "}
          <A href="https://www.signatureflight.com/">Signature Flight Support</A>{" "}
          and Sheltair Aviation at Opa-locka. Where permitted, we meet you at
          the foot of the aircraft stairs. From wheels down to rolling toward
          Brickell: under 4 minutes.
        </>,
        "Popular destinations from OPF: Brickell Financial District, Miami Beach, Coconut Grove, Coral Gables, Bayside Marina.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Miami Moves with Viaro",
    image: {
      src: "/images/MiamiHotels.png",
      alt: "Viaro luxury black car outside iconic Miami hotel providing executive transportation service.",
      caption:
        "From five-star hotels to Fortune 500 addresses, Viaro moves Miami's most demanding travelers.",
    },
    items: [
      {
        label: "Brickell / Downtown",
        time: "15 min",
        desc: "Financial district, Worldcenter, corporate headquarters, luxury condos",
      },
      {
        label: "South Beach",
        time: "25 min",
        desc: "Ocean Drive, Collins Avenue, 1 Hotel, Faena, The Setai",
      },
      {
        label: "Coral Gables",
        time: "20 min",
        desc: "Miracle Mile, University of Miami, luxury residential",
      },
      {
        label: "Fort Lauderdale",
        time: "35 min",
        desc: "Las Olas, Fort Lauderdale Beach, Port Everglades cruise terminal",
      },
      {
        label: "Palm Beach",
        time: "75 min",
        desc: "Worth Avenue, Palm Beach Island, Breakers Hotel",
      },
      {
        label: "Port of Miami",
        time: "20 min",
        desc: "Cruise terminals, PortMiami, connecting to Caribbean departures",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/miami/">Four Seasons Miami</A>,{" "}
        <A href="https://www.mandarinoriental.com/miami">
          Mandarin Oriental Miami
        </A>
        ,{" "}
        <A href="https://www.1hotels.com/south-beach">1 Hotel South Beach</A>,{" "}
        <A href="https://www.faena.com/miami-beach">Faena Hotel Miami Beach</A>,
        The Setai,{" "}
        <A href="https://www.acqualinaresort.com/">Acqualina Resort</A>.
      </>,
      <>
        Business Districts: Brickell Financial District, Downtown Miami /{" "}
        <A href="https://www.miamiworldcenter.com/">Worldcenter</A>, Coconut
        Grove, Coral Gables, Wynwood / Design District, Doral corporate parks.
      </>,
      <>
        Events &amp; Entertainment:{" "}
        <A href="https://www.kaseya.com/center">Kaseya Center</A> (Heat),{" "}
        <A href="https://www.hardrockstadium.com/">Hard Rock Stadium</A>,{" "}
        <A href="https://www.arshtcenter.org/">Adrienne Arsht Center</A>, Miami
        Beach Convention Center,{" "}
        <A href="https://www.artbasel.com/miami-beach">Art Basel</A> venues,
        Port of Miami.
      </>,
      "Beyond Miami: Palm Beach Island, Florida Keys, Naples &amp; Marco Island, Fort Lauderdale Beach, Boca Raton &amp; Delray, Orlando &amp; Tampa (long-haul).",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Miami Services →",
  },
 
  pricing: {
    h2: "Miami Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},{
  id: "miami",
  FA: "locationMiamiFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/MiamiLocation.png",
      alt: "Viaro black car service in Miami with Brickell skyline and luxury sedan approaching Miami International Airport.",
      caption:
        "From MIA to the beaches, Brickell to Opa-locka—Viaro delivers seamless executive transportation across South Florida.",
    },
    h1: "Miami Black Car Service",
    h2: "MIA · FLL · PBI · OPF — Fixed Fares, No Surcharges, 24/7",
    description:
      "Miami on your schedule. Whether you are landing at Miami International Airport after a long flight, stepping off a private jet at Opa-locka, catching a connection out of Fort Lauderdale, or heading to a meeting in Brickell—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Art Basel or when cruise ships fill the port. Professional chauffeurs who know every route from the airport to South Beach, Coral Gables, and the Keys.",
    cta: { book: "Book Your Miami Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Miami's Business Leaders & VIP Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "4 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Miami Airport Pickups",
    image: {
      src: "/images/MIAArrival.png",
      alt: "Viaro chauffeur at Miami International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every traffic pattern, and every shortcut across South Florida.",
    },
    content: [
      "Miami means navigating 4 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Miami International Airport (MIA)",
      image: {
        src: "/images/MIATerminal.png",
        alt: "Viaro black car at Miami International Airport arrivals serving Brickell, South Beach and Coral Gables.",
        caption:
          "MIA's horseshoe terminal handles 50M+ passengers a year — your Viaro chauffeur meets you at the correct concourse, no confusion.",
      },
      content: [
        "MIA handles over 50 million passengers a year through a single horseshoe-shaped terminal with three concourses—D, E, and F. International arrivals at Concourse E face the longest customs queues, often 45–75 minutes during peak hours.",
        "Insider tip: Viaro tracks your inbound flight in real time. If your flight is delayed or customs is backed up, your driver adjusts automatically—no standing at arrivals wondering where your car is.",
        <>
          Popular destinations from MIA:{" "}
          <A href="https://www.brickell.com/">Brickell</A>, Coral Gables, South
          Beach,{" "}
          <A href="https://www.keybiscayne.fl.gov/">Key Biscayne</A>, Coconut
          Grove, Fisher Island.
        </>,
      ],
    },
    {
      h3: "Fort Lauderdale-Hollywood International Airport (FLL)",
      image: {
        src: "/images/FLLTerminal.png",
        alt: "Viaro black car at Fort Lauderdale-Hollywood International Airport Terminal 4 arrivals serving South Florida.",
        caption:
          "FLL's Terminal 1 and Terminal 4 are on opposite ends of the building — Viaro tracks your terminal and positions your driver at the correct curb.",
      },
      content: [
        "FLL is the value airport of South Florida—often less congested and less expensive to fly into than MIA. Four terminals spread across a compact footprint, with US-1 and I-595 traffic that can get brutal in the afternoon.",
        "Insider tip: Terminal 1 and Terminal 4 have completely different pickup zones on opposite ends of the terminal. Viaro tracks your terminal and positions your driver at the correct arrivals curb—no walking the full length of the building.",
        <>
          Popular destinations from FLL: Fort Lauderdale Beach,{" "}
          <A href="https://www.lasolasboulevard.com/">Las Olas</A>, Boca Raton,{" "}
          <A href="https://www.aventura.com/">Aventura</A>, Wynwood, Palm Beach.
        </>,
      ],
    },
    {
      h3: "Palm Beach International Airport (PBI)",
      image: {
        src: "/images/PBITerminal.png",
        alt: "Viaro black car at Palm Beach International Airport arrivals serving Palm Beach Island, Wellington and Boca Raton.",
        caption:
          "PBI — one terminal, short lines, fast baggage claim. Viaro meets you at the ground transportation area, not looping the terminal endlessly.",
      },
      content: [
        "PBI serves the affluent corridor between Palm Beach, Wellington, and Jupiter. One terminal, short security lines, and a baggage claim that actually moves. The drive south to Miami on I-95 is its own daily negotiation.",
        "Insider tip: PBI has no commercial vehicle staging lot—rideshares loop the terminal endlessly. Viaro drivers wait at the designated ground transportation area on the arrivals level. For Palm Beach Island destinations, we route over Southern Boulevard to avoid downtown congestion.",
        <>
          Popular destinations from PBI:{" "}
          <A href="https://www.palmbeach.com/">Palm Beach Island</A>, Worth
          Avenue, Wellington, Boca Raton, Delray Beach, Jupiter.
        </>,
      ],
    },
    {
      h3: "Opa-locka Executive Airport (OPF) — Private Aviation",
      image: {
        src: "/images/OPFTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Opa-locka Executive Airport FBO for private jet arrival near Miami.",
        caption:
          "Opa-locka FBO — Miami's private aviation hub. From wheels down to rolling toward Brickell: under 4 minutes.",
      },
      content: [
        "OPF is Miami's private aviation hub—closer to the city than any commercial airport, with FBO operations at Signature Flight Support and Sheltair Aviation that move with discretion and speed.",
        <>
          Insider tip: Viaro coordinates directly with FBO ground ops at{" "}
          <A href="https://www.signatureflight.com/">Signature Flight Support</A>{" "}
          and Sheltair Aviation at Opa-locka. Where permitted, we meet you at
          the foot of the aircraft stairs. From wheels down to rolling toward
          Brickell: under 4 minutes.
        </>,
        "Popular destinations from OPF: Brickell Financial District, Miami Beach, Coconut Grove, Coral Gables, Bayside Marina.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Miami Moves with Viaro",
    image: {
      src: "/images/MiamiHotels.png",
      alt: "Viaro luxury black car outside iconic Miami hotel providing executive transportation service.",
      caption:
        "From five-star hotels to Fortune 500 addresses, Viaro moves Miami's most demanding travelers.",
    },
    items: [
      {
        label: "Brickell / Downtown",
        time: "15 min",
        desc: "Financial district, Worldcenter, corporate headquarters, luxury condos",
      },
      {
        label: "South Beach",
        time: "25 min",
        desc: "Ocean Drive, Collins Avenue, 1 Hotel, Faena, The Setai",
      },
      {
        label: "Coral Gables",
        time: "20 min",
        desc: "Miracle Mile, University of Miami, luxury residential",
      },
      {
        label: "Fort Lauderdale",
        time: "35 min",
        desc: "Las Olas, Fort Lauderdale Beach, Port Everglades cruise terminal",
      },
      {
        label: "Palm Beach",
        time: "75 min",
        desc: "Worth Avenue, Palm Beach Island, Breakers Hotel",
      },
      {
        label: "Port of Miami",
        time: "20 min",
        desc: "Cruise terminals, PortMiami, connecting to Caribbean departures",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/miami/">Four Seasons Miami</A>,{" "}
        <A href="https://www.mandarinoriental.com/miami">
          Mandarin Oriental Miami
        </A>
        ,{" "}
        <A href="https://www.1hotels.com/south-beach">1 Hotel South Beach</A>,{" "}
        <A href="https://www.faena.com/miami-beach">Faena Hotel Miami Beach</A>,
        The Setai,{" "}
        <A href="https://www.acqualinaresort.com/">Acqualina Resort</A>.
      </>,
      <>
        Business Districts: Brickell Financial District, Downtown Miami /{" "}
        <A href="https://www.miamiworldcenter.com/">Worldcenter</A>, Coconut
        Grove, Coral Gables, Wynwood / Design District, Doral corporate parks.
      </>,
      <>
        Events &amp; Entertainment:{" "}
        <A href="https://www.kaseya.com/center">Kaseya Center</A> (Heat),{" "}
        <A href="https://www.hardrockstadium.com/">Hard Rock Stadium</A>,{" "}
        <A href="https://www.arshtcenter.org/">Adrienne Arsht Center</A>, Miami
        Beach Convention Center,{" "}
        <A href="https://www.artbasel.com/miami-beach">Art Basel</A> venues,
        Port of Miami.
      </>,
      "Beyond Miami: Palm Beach Island, Florida Keys, Naples &amp; Marco Island, Fort Lauderdale Beach, Boca Raton &amp; Delray, Orlando &amp; Tampa (long-haul).",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Miami Services →",
  },
 
  pricing: {
    h2: "Miami Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
  // ══════════════════════════════════════════════════════════════════
  // Las Vegas
  // ══════════════════════════════════════════════════════════════════

  {
    id: "las-vegas",
    FA: "locationLasVegasFA",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/LasVegasLocation.png",
        alt: "Viaro black car service in Las Vegas with the Strip skyline featuring Bellagio fountains and luxury sedan.",
        caption:
          "From the Strip to private jets, conventions to VIP nightlife—Viaro delivers seamless 24/7 executive transportation in Las Vegas.",
      },
      h1: "Las Vegas Black Car Service",
      h2: "Harry Reid • Henderson FBO • North Las Vegas — Transparent Pricing, Locked Rates, 24/7",
      description:
        "Vegas never sleeps. Neither do we. Las Vegas is a city that runs on precision timing—shows start on the dot, reservations do not wait, and high-rollers expect perfection. Whether you are landing at Harry Reid after a cross-country flight, stepping off a G650 at Henderson Executive, or heading from CES to a dinner meeting at Wynn—Viaro is already waiting. Transparent pricing with rates locked at booking. No rideshare surges when 180,000 people flood the city for CES. Professional chauffeurs who know the back entrances to every major resort.",
      cta: { book: "Book Your Vegas Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by Vegas VIPs & Convention Leaders",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "3 Airports",
      "24/7 Live Support",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "Mastering the Logistics of Top FBOs and Commercial Hubs",
      image: {
        src: "/images/HarryReidArrival.png",
        alt: "Viaro chauffeur at Harry Reid International Airport loading luggage into luxury black car.",
        caption:
          "We know every terminal, every resort back entrance, and every shortcut on the Strip.",
      },
      content: [
        "Las Vegas has three airports serving different needs. Harry Reid handles the masses. Henderson and North Las Vegas serve private aviation. Knowing which one—and how to navigate the Strip traffic—separates VIP service from amateur hour. Here is how Viaro helps you move seamlessly.",
      ],
    },

    extraContent: [
      {
        h3: "Harry Reid International Airport (LAS)",
        image: {
          src: "/images/LASTerminal.png",
          alt: "Viaro chauffeur at Harry Reid International Airport loading luggage into luxury black car.",
          caption:
            "Harry Reid's terminals serve 50M+ passengers a year — your Viaro chauffeur meets you at the commercial vehicle lane, no confusion.",
        },
        content: [
          "Harry Reid (formerly McCarran) is the 7th busiest airport in North America—50+ million passengers a year, with massive spikes during CES, SEMA, and major fight weekends. Two terminals, dozens of gates, and the famous slot machines greeting you at arrivals.",
          "Insider tip: Terminal 1 serves most domestic flights; Terminal 3 handles international and some domestic carriers. The rideshare pickup is in a parking garage—hot in summer, crowded always. Viaro meets you at the commercial vehicle lane on Level 1 of each terminal. Step outside, step into air conditioning.",
          <>
            Popular destinations from LAS:{" "}
            <A href="https://bellagio.mgmresorts.com/">Bellagio</A>,{" "}
            <A href="https://www.wynnlasvegas.com/">Wynn Las Vegas</A>,{" "}
            <A href="https://www.vegasmeansbusiness.com/">
              Las Vegas Convention Center
            </A>
            , Downtown/Fremont Street, and Red Rock Canyon.
          </>,
        ],
      },
      {
        h3: "Henderson Executive Airport (HND) — Private Aviation",
        image: {
          src: "/images/HNDAirport.png",
          alt: "Viaro luxury black SUV waiting on the tarmac at Henderson Executive Airport FBO for private jet arrival.",
          caption:
            "Henderson Executive — where high-rollers land. We meet you at the jet stairs. Total time on the ground: seconds.",
        },
        content: [
          "Henderson Executive is Vegas's premier private aviation gateway—just 12 miles from the Strip, with quick access to the upscale Henderson and Summerlin communities. This is where high-rollers, entertainers, and corporate executives land when they want discretion and speed.",
          <>
            Insider tip: Viaro coordinates directly with FBO operations
            including{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            and Henderson Executive FBO. Where security allows, we meet you at
            the jet stairs. Step off the plane and into the back seat—total time
            on the ground measured in seconds.
          </>,
          "Popular destinations from HND: Strip resorts (15 min), Henderson luxury communities, Lake Las Vegas, and connections to Summerlin.",
        ],
      },
      {
        h3: "North Las Vegas Airport (VGT) — Private Aviation",
        image: {
          src: "/images/VGTAirport.png",
          alt: "Viaro black car at North Las Vegas Airport serving general aviation and private jet passengers.",
          caption:
            "North Las Vegas Airport — closest to the Speedway. Direct tarmac pickup for NASCAR weekends and racing events.",
        },
        content: [
          "North Las Vegas Airport serves general aviation and private jets on the north side of the valley. Less congested than Henderson, VGT offers quick access to Downtown Las Vegas, the Speedway, and the growing communities in the northwest.",
          <>
            Insider tip: VGT is the closest airport to{" "}
            <A href="https://www.lvms.com/">Las Vegas Motor Speedway</A>—just 10
            minutes away. Perfect for NASCAR weekends and major racing events.
            We provide tarmac pickup and direct transfers to the track.
          </>,
          "Popular destinations from VGT: Las Vegas Motor Speedway, Downtown Las Vegas, Fremont Street, and north valley corporate parks.",
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],

    whereSection: {
      h2: "Where Vegas Moves with Viaro",
      image: {
        src: "/images/LasVegasHotels.png",
        alt: "Viaro luxury black car at iconic Las Vegas Strip resort providing VIP transportation.",
        caption:
          "From convention halls to VIP nightclub entrances, Viaro moves Vegas's most demanding travelers.",
      },
      content: [
        <>
          Luxury Resorts:{" "}
          <A href="https://bellagio.mgmresorts.com/">Bellagio</A>,{" "}
          <A href="https://www.wynnlasvegas.com/">Wynn Las Vegas</A>,{" "}
          <A href="https://www.venetianlasvegas.com/">The Venetian</A>,{" "}
          <A href="https://www.caesars.com/caesars-palace">Caesars Palace</A>,
          ARIA, Cosmopolitan, Four Seasons, Encore.
        </>,
        <>
          Conventions &amp; Business:{" "}
          <A href="https://www.vegasmeansbusiness.com/">
            Las Vegas Convention Center
          </A>{" "}
          (CES, SEMA, NAB), Mandalay Bay Convention Center, Sands Expo, World
          Market Center.
        </>,
        <>
          Entertainment &amp; Sports:{" "}
          <A href="https://www.t-mobilearena.com/">T-Mobile Arena</A> (Golden
          Knights, UFC),{" "}
          <A href="https://www.allegiantstadium.com/">Allegiant Stadium</A>{" "}
          (Raiders, Super Bowl), MGM Grand Garden Arena, Sphere.
        </>,
        "Nightlife & Dining: XS Nightclub, Omnia, Hakkasan, Tao, celebrity chef restaurants throughout the Strip. Our chauffeurs know the VIP entrances.",
        <>
          Day Trips:{" "}
          <A href="https://www.redrockcanyonlv.org/"> Red Rock Canyon</A>,{" "}
          Hoover Dam, Grand Canyon West, Valley of Fire. Our{" "}
          <a
            href="en/black-car-services/hourly-chauffeur-service/"
            className="underline text-white hover:text-primary transition-colors"
          >
            hourly chauffeur service
          </a>{" "}
          is perfect for desert excursions.
        </>,
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          for convention groups and executive roadshows.{" "}
        </>,
      ],
      cta: "Explore Vegas Services →",
    },

    pricing: {
      h2: "Las Vegas Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 85,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 125,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 275,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & convention travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Contact us for Henderson, Summerlin, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },
  // ─────────────────────────────────────────────────────────────────────────────
// Dallas
// ─────────────────────────────────────────────────────────────────────────────
  {
  id: "dallas",
  FA: "locationDallasFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/DallasLocation.png",
      alt: "Viaro black car service in Dallas with Downtown skyline and luxury sedan approaching Dallas/Fort Worth International Airport.",
      caption:
        "From DFW to Love Field, Downtown Dallas to the Metroplex—Viaro delivers seamless executive transportation across North Texas.",
    },
    h1: "Dallas Black Car Service",
    h2: "DFW · DAL · AFW — Fixed Fares, No Surcharges, 24/7",
    description:
      "Dallas on your schedule. Whether you are landing at Dallas/Fort Worth International Airport after a long flight, stepping off a private jet at Alliance, or catching a Southwest flight out of Love Field—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Cowboys games or when conventions pack the city. Professional chauffeurs who know every route from DFW's five terminals to Downtown Dallas, Uptown, Legacy Business Park, and beyond.",
    cta: { book: "Book Your Dallas Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Dallas's Business Leaders & Executives",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "3 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Dallas Airport Pickups",
    image: {
      src: "/images/DFWArrival.png",
      alt: "Viaro chauffeur at Dallas/Fort Worth International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every traffic pattern, and every shortcut across the Dallas Metroplex.",
    },
    content: [
      "Dallas means navigating 3 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Dallas/Fort Worth International Airport (DFW)",
      image: {
        src: "/images/DFWTerminal.png",
        alt: "Viaro black car at Dallas/Fort Worth International Airport Terminal D arrivals serving Downtown Dallas and the Metroplex.",
        caption:
          "DFW spans 27 square miles across five terminals — your Viaro chauffeur meets you at the correct arrivals level, no confusion.",
      },
      content: [
        "DFW is one of the largest airports in the world—five terminals (A through E) spread across 27 square miles. The Skylink train connects terminals, but navigating the International Parkway ring road in a car requires knowing your terminal before you arrive.",
        "Insider tip: International arrivals land in Terminal D. Domestic terminals vary by airline—American uses A, B, C, and D; all others are in E. Viaro tracks your terminal and meets you curbside at the correct arrivals level.",
        <>
          Popular destinations from DFW:{" "}
          <A href="https://www.visitdallas.com/">Downtown Dallas</A>, Uptown,{" "}
          <A href="https://www.legacywest.com/">Legacy Business Park</A>, Las
          Colinas, Arlington, Fort Worth.
        </>,
      ],
    },
    {
      h3: "Dallas Love Field Airport (DAL)",
      image: {
        src: "/images/DALTerminal.png",
        alt: "Viaro black car at Dallas Love Field Airport arrivals serving Downtown Dallas, Uptown and the Park Cities.",
        caption:
          "Love Field — 6 miles from Downtown Dallas. Viaro times your pickup precisely so your driver is at the curb the moment you exit.",
      },
      content: [
        "Love Field is the Southwest Airlines stronghold—compact, fast, and only 6 miles from downtown Dallas. No international flights, minimal crowds, and a baggage claim that moves faster than DFW on its best day.",
        "Insider tip: Love Field's pickup area is notoriously tight. Viaro drivers know to time arrival precisely—circling is not an option here. Your driver will be at the correct curb when you exit baggage claim.",
        <>
          Popular destinations from DAL:{" "}
          <A href="https://www.visitdallas.com/">Downtown Dallas</A>, Uptown /
          Knox-Henderson,{" "}
          <A href="https://www.smu.edu/">SMU</A>, Park Cities, Highland Park,
          Mockingbird Station.
        </>,
      ],
    },
    {
      h3: "Fort Worth Alliance Airport (AFW) — Private Aviation",
      image: {
        src: "/images/AFWTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Fort Worth Alliance Airport FBO for private jet arrival in North Texas.",
        caption:
          "Alliance Airport — North Texas's premier private aviation hub. Closer to Frisco and Plano than DFW, saving you 30–45 minutes.",
      },
      content: [
        "Fort Worth Alliance (AFW) is North Texas's primary private aviation facility, serving the industrial and corporate corridor north of Fort Worth. Closer to Frisco, McKinney, and Southlake than DFW.",
        <>
          Insider tip: Viaro coordinates with FBO operations at Alliance. For
          corporate passengers heading to the Frisco or Plano tech corridor, AFW
          often saves 30–45 minutes over DFW. Where security allows, we meet you
          at the jet stairs—step off the plane and into the back seat.
        </>,
        <>
          Popular destinations from AFW:{" "}
          <A href="https://www.friscotexas.gov/">Frisco</A>, Plano, McKinney,
          Southlake, Fort Worth,{" "}
          <A href="https://www.alliancetexas.com/">
            AllianceTexas business corridor
          </A>
          .
        </>,
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Dallas Moves with Viaro",
    image: {
      src: "/images/DallasHotels.png",
      alt: "Viaro luxury black car outside iconic Dallas hotel providing executive transportation service.",
      caption:
        "From Uptown hotels to Fortune 500 headquarters, Viaro moves Dallas's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Dallas",
        time: "25 min",
        desc: "CBD, Dallas Convention Center, arts district, Reunion Tower",
      },
      {
        label: "Uptown / Turtle Creek",
        time: "20 min",
        desc: "The Crescent, Knox-Henderson, restaurants, luxury residential",
      },
      {
        label: "Legacy Business Park",
        time: "30 min",
        desc: "Toyota HQ, FedEx Office, Liberty Mutual, corporate campuses",
      },
      {
        label: "Las Colinas",
        time: "15 min",
        desc: "Four Seasons resort, corporate offices, Irving entertainment",
      },
      {
        label: "Fort Worth",
        time: "35 min",
        desc: "Sundance Square, cultural district, TCU, Stockyards",
      },
      {
        label: "Frisco / Plano",
        time: "40 min",
        desc: "Cowboys HQ, Toyota Stadium, tech corridor, Legacy West",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.crescentcourt.com/">The Crescent Court</A>,{" "}
        <A href="https://www.rosewoodhotels.com/en/mansion-on-turtle-creek-dallas">
          Rosewood Mansion on Turtle Creek
        </A>
        ,{" "}
        <A href="https://www.hotelzaza.com/dallas/">Hotel ZaZa Dallas</A>,{" "}
        <A href="https://www.fourseasons.com/lascolinas/">
          Four Seasons Las Colinas
        </A>
        ,{" "}
        <A href="https://www.omnihotels.com/hotels/dallas">Omni Dallas Hotel</A>
        .
      </>,
      <>
        Business Districts: Downtown Dallas CBD, Uptown / Turtle Creek,{" "}
        <A href="https://www.legacywest.com/">Legacy Business Park</A> (Plano),
        Las Colinas, Deep Ellum, Fort Worth Sundance Square.
      </>,
      <>
        Events &amp; Venues:{" "}
        <A href="https://www.attstadium.com/">AT&T Stadium</A> (Cowboys),{" "}
        <A href="https://www.americanairlinescenter.com/">
          American Airlines Center
        </A>{" "}
        (Mavs/Stars),{" "}
        <A href="https://www.globelifefield.com/">Globe Life Field</A> (Rangers),
        Cotton Bowl,{" "}
        <A href="https://www.dallasconventioncenter.com/">
          Dallas Convention Center
        </A>
        .
      </>,
      "Beyond Dallas: Fort Worth, Frisco / Plano tech corridor, Austin (long-haul), San Antonio (long-haul).",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Dallas Services →",
  },
 
  pricing: {
    h2: "Dallas Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
{
  id: "washington-dc",
  FA: "locationWashingtonFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/WashingtonLocation.png",
      alt: "Viaro black car service in Washington DC with Capitol Building and luxury sedan approaching Dulles International Airport.",
      caption:
        "From IAD to Reagan National, Georgetown to the Pentagon—Viaro delivers seamless executive transportation across the Washington metro area.",
    },
    h1: "Washington DC Black Car Service",
    h2: "IAD · DCA · JYO — Fixed Fares, No Surcharges, 24/7",
    description:
      "Washington on your schedule. Whether you are landing at Dulles International Airport after a long flight, stepping off a private jet at Leesburg Executive, or catching a shuttle out of Reagan National—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during inaugurations, state visits, or when lobbyists flood K Street. Professional chauffeurs who know every route from Dulles to Capitol Hill, Georgetown to the Pentagon, and the entire Northern Virginia corridor.",
    cta: { book: "Book Your DC Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Washington's Executives, Diplomats & Power Brokers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "3 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Washington Airport Pickups",
    image: {
      src: "/images/IADArrival.png",
      alt: "Viaro chauffeur at Dulles International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every traffic pattern, and every shortcut across the Washington metro area.",
    },
    content: [
      "Washington means navigating 3 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Dulles International Airport (IAD)",
      image: {
        src: "/images/IADTerminal.png",
        alt: "Viaro black car at Dulles International Airport arrivals serving Downtown DC, Georgetown and Northern Virginia.",
        caption:
          "Dulles handles the bulk of DC's international traffic — Viaro monitors your flight and customs wait in real time, adjusting pickup automatically.",
      },
      content: [
        "Dulles handles the bulk of international traffic into DC—United's hub and the primary gateway for transatlantic and transpacific routes. The terminal is famously far from the gates, connected by an automated rail system that replaced the old mobile lounges.",
        "Insider tip: Customs at IAD can run 60–90 minutes on international arrivals. Viaro monitors your flight and adjusts in real time. Do not call the car when you land—we already know you are there.",
        <>
          Popular destinations from IAD:{" "}
          <A href="https://washington.org/">Downtown DC</A>, Georgetown, McLean,{" "}
          <A href="https://www.tysonscorner.com/">Tysons Corner</A>, Reston,
          Arlington, Bethesda.
        </>,
      ],
    },
    {
      h3: "Ronald Reagan Washington National Airport (DCA)",
      image: {
        src: "/images/DCATerminal.png",
        alt: "Viaro black car at Ronald Reagan Washington National Airport Terminal B/C arrivals serving Capitol Hill and Downtown DC.",
        caption:
          "Reagan National — 4 miles from Downtown DC. Viaro meets you at the correct terminal door, no wandering the arrivals loop.",
      },
      content: [
        "DCA is the airport of choice for Capitol Hill, K Street, and the Pentagon corridor. Short security lines, direct Metro access, and only 4 miles from downtown. Domestic routes only, with slot controls that limit flights.",
        "Insider tip: Reagan National has three terminals (A, B, C) that open onto different curbside zones. Terminal B/C handles most major airlines via a shared concourse. Viaro meets you at the correct arrivals door—no wandering the terminal loop.",
        <>
          Popular destinations from DCA:{" "}
          <A href="https://www.visitcapitolhill.com/">Capitol Hill</A>, K
          Street, Georgetown,{" "}
          <A href="https://www.pentagonrowshops.com/">Pentagon City</A>, Crystal
          City, Rosslyn, Alexandria.
        </>,
      ],
    },
    {
      h3: "Leesburg Executive Airport (JYO) — Private Aviation",
      image: {
        src: "/images/JYOTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Leesburg Executive Airport FBO for private jet arrival in Northern Virginia.",
        caption:
          "Leesburg Executive — private aviation for Northern Virginia, without Dulles commercial congestion. Direct tarmac pickup for the Loudoun County corridor.",
      },
      content: [
        "Leesburg Executive is the private aviation option for Northern Virginia—closer to the Loudoun County tech corridor and Great Falls than Dulles, with none of the commercial congestion.",
        <>
          Insider tip: Viaro coordinates with Leesburg FBO operations for tarmac
          arrivals. Where security allows, we meet you at the jet stairs—ideal
          for passengers heading to Loudoun County, Middleburg, or the
          equestrian estates of Northern Virginia.
        </>,
        "Popular destinations from JYO: Loudoun County tech corridor, Middleburg, Great Falls, McLean, Tysons, Northern Virginia.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Washington Moves with Viaro",
    image: {
      src: "/images/WashingtonHotels.png",
      alt: "Viaro luxury black car outside iconic Washington DC hotel providing executive transportation service.",
      caption:
        "From Embassy Row to Fortune 500 headquarters, Viaro moves Washington's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown DC",
        time: "35 min",
        desc: "White House, K Street, World Bank, IMF, convention center",
      },
      {
        label: "Capitol Hill",
        time: "40 min",
        desc: "Senate, House offices, Supreme Court, Library of Congress",
      },
      {
        label: "Georgetown",
        time: "30 min",
        desc: "Four Seasons, Georgetown University, M Street, luxury residential",
      },
      {
        label: "Tysons Corner",
        time: "15 min",
        desc: "Corporate campuses, Tysons Galleria, Northern Virginia business district",
      },
      {
        label: "Pentagon / Crystal City",
        time: "25 min",
        desc: "Department of Defense, Amazon HQ2, Reagan National corridor",
      },
      {
        label: "Bethesda / NIH",
        time: "45 min",
        desc: "National Institutes of Health, Walter Reed, biotech corridor",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/washington/">
          Four Seasons Georgetown
        </A>
        ,{" "}
        <A href="https://www.hayadams.com/">The Hay-Adams</A>,{" "}
        <A href="https://www.rosewoodhotels.com/en/washington-dc">
          Rosewood Washington DC
        </A>
        ,{" "}
        <A href="https://www.thewatergatehotel.com/">Watergate Hotel</A>,{" "}
        <A href="https://www.mandarinoriental.com/washington-dc">
          Mandarin Oriental Washington
        </A>
        .
      </>,
      <>
        Business &amp; Government:{" "}
        <A href="https://washington.org/visit-dc/k-street">
          K Street / lobbying corridor
        </A>
        , Capitol Hill, Pentagon / Crystal City, Tysons Corner business
        district, Bethesda / NIH corridor,{" "}
        <A href="https://www.worldbank.org/">World Bank</A> /{" "}
        <A href="https://www.imf.org/">IMF</A>.
      </>,
      <>
        Events &amp; Culture:{" "}
        <A href="https://www.kennedy-center.org/">Kennedy Center</A>,{" "}
        <A href="https://www.capitalonearena.com/">Capital One Arena</A>,{" "}
        <A href="https://www.mlb.com/nationals/ballpark">Nationals Park</A>,
        FedEx Field,{" "}
        <A href="https://www.wewashingtondc.com/">
          Walter E. Washington Convention Center
        </A>
        .
      </>,
      "Beyond DC: Baltimore, Annapolis, Richmond VA, Philadelphia (long-haul).",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore DC Services →",
  },
 
  pricing: {
    h2: "Washington DC Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
 // ════════════════════
// ATLANTA 
// ══════════════════════════════════════════════════════════════════
{
  id: "atlanta",
  FA: "locationAtlantaFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/AtlantaLocation.png",
      alt: "Viaro black car service in Atlanta with Downtown skyline and luxury sedan approaching Hartsfield-Jackson Atlanta International Airport.",
      caption:
        "From ATL to Buckhead, Midtown to the Perimeter—Viaro delivers seamless executive transportation across Greater Atlanta.",
    },
    h1: "Atlanta Black Car Service",
    h2: "ATL · PDK — Fixed Fares, No Surcharges, 24/7",
    description:
      "Atlanta on your schedule. Whether you are landing at Hartsfield-Jackson Atlanta International Airport after a long flight, stepping off a private jet at DeKalb-Peachtree, or heading to a meeting in Buckhead—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during SEC Championship weekends or when conventions fill the Georgia World Congress Center. Professional chauffeurs who know every route from the world's busiest airport to Buckhead, Midtown, the Perimeter, and beyond.",
    cta: { book: "Book Your Atlanta Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Atlanta's Business Leaders & Corporate Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Atlanta Airport Pickups",
    image: {
      src: "/images/ATLArrival.png",
      alt: "Viaro chauffeur at Hartsfield-Jackson Atlanta International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every traffic pattern, and every shortcut across Greater Atlanta.",
    },
    content: [
      "Atlanta means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Hartsfield-Jackson Atlanta International Airport (ATL)",
      image: {
        src: "/images/ATLTerminal.png",
        alt: "Viaro black car at Hartsfield-Jackson Atlanta International Airport arrivals serving Buckhead, Midtown and Downtown Atlanta.",
        caption:
          "The world's busiest airport by passenger count — Viaro tracks your terminal assignment and positions at the right curb, every time.",
      },
      content: [
        "ATL is the world's busiest airport by passenger count—two domestic terminals (North and South), a massive international terminal, and a Plane Train that connects them across five concourses. Getting out is a science.",
        "Insider tip: The domestic terminals are on opposite sides of Baggage Claim Level. If you exit South Terminal and your driver is at North Terminal, that is a 10-minute walk. Viaro tracks your terminal assignment and positions at the right curb.",
        <>
          Popular destinations from ATL:{" "}
          <A href="https://www.buckhead.com/">Buckhead</A>, Midtown,{" "}
          <A href="https://www.atlantadowntown.com/">Downtown Atlanta</A>,
          Perimeter Center, Hartsfield corridor, Decatur.
        </>,
      ],
    },
    {
      h3: "DeKalb-Peachtree Airport (PDK) — Private Aviation",
      image: {
        src: "/images/PDKTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at DeKalb-Peachtree Airport FBO for private jet arrival near Atlanta.",
        caption:
          "PDK — Atlanta's premier private aviation facility. Closer to Buckhead than ATL, with none of the commercial congestion.",
      },
      content: [
        "PDK is Atlanta's premier private aviation facility—12 miles northeast of downtown, away from the ATL congestion entirely. Closer to Buckhead and the Perimeter than any commercial option.",
        <>
          Insider tip: Viaro coordinates with FBO operations at PDK. Where
          security allows, we meet you at the jet stairs. For private arrivals
          heading to Buckhead or the Perimeter business district, PDK
          consistently beats ATL on total ground-to-destination time.
        </>,
        "Popular destinations from PDK: Buckhead, Perimeter Center, Dunwoody, Sandy Springs, Roswell, Alpharetta.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Atlanta Moves with Viaro",
    image: {
      src: "/images/AtlantaHotels.png",
      alt: "Viaro luxury black car outside iconic Atlanta hotel providing executive transportation service.",
      caption:
        "From Buckhead hotels to Fortune 500 headquarters, Viaro moves Atlanta's most demanding travelers.",
    },
    items: [
      {
        label: "Buckhead",
        time: "25 min",
        desc: "Financial corridor, luxury hotels, Lenox Square, Phipps Plaza",
      },
      {
        label: "Midtown Atlanta",
        time: "20 min",
        desc: "Tech Square, Georgia Tech, Piedmont Park, arts district",
      },
      {
        label: "Downtown Atlanta",
        time: "15 min",
        desc: "Georgia World Congress Center, Peachtree Center, CNN Center",
      },
      {
        label: "Perimeter Center",
        time: "30 min",
        desc: "Dunwoody corporate campuses, Sandy Springs, Perimeter Mall",
      },
      {
        label: "Alpharetta",
        time: "45 min",
        desc: "Avalon tech corridor, corporate parks, North Fulton business district",
      },
      {
        label: "Mercedes-Benz Stadium",
        time: "15 min",
        desc: "Falcons, Atlanta United, SEC Championship, major events",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/atlanta/">
          Four Seasons Atlanta
        </A>
        ,{" "}
        <A href="https://www.waldorfastoria.com/en/hotels/atlanta-buckhead">
          Waldorf Astoria Atlanta Buckhead
        </A>
        ,{" "}
        <A href="https://www.ihg.com/intercontinental/hotels/us/en/atlanta/atlhb/hoteldetail">
          InterContinental Buckhead
        </A>
        ,{" "}
        <A href="https://www.loewshotels.com/atlanta-hotel">
          Loews Atlanta Hotel
        </A>
        ,{" "}
        <A href="https://www.marriott.com/hotels/travel/atlsl-the-st-regis-atlanta/">
          The St. Regis Atlanta
        </A>
        .
      </>,
      <>
        Business Districts: Buckhead business corridor, Midtown Atlanta /{" "}
        <A href="https://techsquareatl.com/">Tech Square</A>, Peachtree Center
        / Downtown, Perimeter Center / Dunwoody, Alpharetta / Avalon tech
        corridor.
      </>,
      <>
        Events &amp; Venues:{" "}
        <A href="https://www.statefarmarena.com/">State Farm Arena</A> (Hawks),{" "}
        <A href="https://www.truistpark.com/">Truist Park</A> (Braves),{" "}
        <A href="https://mercedesbenzstadium.com/">Mercedes-Benz Stadium</A>{" "}
        (Falcons/United),{" "}
        <A href="https://www.gwcc.com/">Georgia World Congress Center</A>, Cobb
        Galleria.
      </>,
      "Beyond Atlanta: Savannah (long-haul), Athens, Chattanooga TN, Birmingham AL.",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Atlanta Services →",
  },
 
  pricing: {
    h2: "Atlanta Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// HOUSTON — English
// ══════════════════════════════════════════════════════════════════
{
  id: "houston",
  FA: "locationHoustonFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/HoustonLocation.png",
      alt: "Viaro black car service in Houston with Downtown skyline and luxury sedan approaching George Bush Intercontinental Airport.",
      caption:
        "From IAH to Hobby, the Galleria to the Energy Corridor—Viaro delivers seamless executive transportation across Greater Houston.",
    },
    h1: "Houston Black Car Service",
    h2: "IAH · HOU · SGR — Fixed Fares, No Surcharges, 24/7",
    description:
      "Houston on your schedule. Whether you are landing at George Bush Intercontinental Airport after a long flight, stepping off a private jet at Sugar Land Regional, or catching a Southwest flight out of Hobby—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the Houston Livestock Show & Rodeo or when energy conferences pack the George R. Brown. Professional chauffeurs who know every route from IAH's five terminals to Downtown, the Galleria, the Energy Corridor, and The Woodlands.",
    cta: { book: "Book Your Houston Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Houston's Energy Executives & Corporate Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "3 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Houston Airport Pickups",
    image: {
      src: "/images/IAHArrival.png",
      alt: "Viaro chauffeur at George Bush Intercontinental Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every traffic pattern, and every shortcut across Greater Houston.",
    },
    content: [
      "Houston means navigating 3 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "George Bush Intercontinental Airport (IAH)",
      image: {
        src: "/images/IAHTerminal.png",
        alt: "Viaro black car at George Bush Intercontinental Airport Terminal E arrivals serving Downtown Houston and the Galleria.",
        caption:
          "IAH spans five terminals across a massive footprint — Viaro tracks your terminal and positions your driver at the exact arrivals exit for your concourse.",
      },
      content: [
        "IAH is United's second-largest hub—five terminals (A through E) spread across a massive footprint 23 miles north of downtown. Terminal E handles all international arrivals, with customs lines that can stretch 60–90 minutes on peak transatlantic flights.",
        "Insider tip: The inter-terminal train (IAH Skyway) only connects terminals B, C, D, and E. Terminal A requires a shuttle bus. Viaro tracks your terminal and positions your driver at the exact arrivals exit for your concourse.",
        <>
          Popular destinations from IAH:{" "}
          <A href="https://www.visithoustontexas.com/">Downtown Houston</A>,{" "}
          <A href="https://www.galleriahouston.com/">Galleria</A>, The
          Woodlands,{" "}
          <A href="https://www.energycorridor.org/">Energy Corridor</A>,
          Greenway Plaza, Sugar Land.
        </>,
      ],
    },
    {
      h3: "William P. Hobby Airport (HOU)",
      image: {
        src: "/images/HOUTerminal.png",
        alt: "Viaro black car at William P. Hobby Airport arrivals serving Downtown Houston, Midtown and the Medical Center.",
        caption:
          "Hobby Airport — 7 miles from Downtown Houston. Compact, fast, and almost always the quicker option for the Medical Center and Midtown.",
      },
      content: [
        "Hobby is Houston's close-in airport—only 7 miles from downtown and significantly less congested than IAH. Southwest's Houston hub, with some international routes to Mexico and the Caribbean.",
        "Insider tip: Hobby has a single terminal with two concourses. The pickup area is compact but organized. For Midtown, Downtown, or the Medical Center, Hobby is almost always the faster airport.",
        <>
          Popular destinations from HOU:{" "}
          <A href="https://www.visithoustontexas.com/">Downtown Houston</A>,
          Midtown,{" "}
          <A href="https://www.tmc.edu/">Medical Center</A>, Museum District,
          Pearland, Clear Lake.
        </>,
      ],
    },
    {
      h3: "Sugar Land Regional Airport (SGR) — Private Aviation",
      image: {
        src: "/images/SGRTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Sugar Land Regional Airport FBO for private jet arrival southwest of Houston.",
        caption:
          "Sugar Land Regional — private aviation for Houston's affluent southwest suburbs, without the 23-mile drive to IAH.",
      },
      content: [
        "SGR serves the affluent southwest suburbs of Houston—Sugar Land, Missouri City, and the Fort Bend County business corridor. Private aviation without the 23-mile drive to IAH.",
        <>
          Insider tip: Viaro coordinates with FBO operations at Sugar Land
          Regional. Where security allows, we meet you at the jet stairs. Ideal
          for private passengers heading to the Energy Corridor, Fort Bend
          County, or downtown Houston via Hwy 59.
        </>,
        "Popular destinations from SGR: Sugar Land, Missouri City, Energy Corridor, Stafford, Fort Bend County, downtown Houston.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Houston Moves with Viaro",
    image: {
      src: "/images/HoustonHotels.png",
      alt: "Viaro luxury black car outside iconic Houston hotel providing executive transportation service.",
      caption:
        "From energy company headquarters to five-star hotels, Viaro moves Houston's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Houston",
        time: "25 min",
        desc: "CBD, George R. Brown Convention Center, theater district, Minute Maid Park",
      },
      {
        label: "Galleria / Uptown",
        time: "30 min",
        desc: "Luxury retail, The Post Oak Hotel, corporate offices, hotel corridor",
      },
      {
        label: "Energy Corridor",
        time: "35 min",
        desc: "Shell, BP, ConocoPhillips, ExxonMobil campuses, west Houston offices",
      },
      {
        label: "The Woodlands",
        time: "15 min",
        desc: "ExxonMobil campus, corporate parks, Woodlands Mall, luxury residential",
      },
      {
        label: "Medical Center",
        time: "30 min",
        desc: "Texas Medical Center, MD Anderson, Houston Methodist, Rice University",
      },
      {
        label: "Sugar Land",
        time: "35 min",
        desc: "Fort Bend County, Imperial Market, Smart Financial Centre",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/houston/">
          Four Seasons Houston
        </A>
        ,{" "}
        <A href="https://www.thepostoak.com/">The Post Oak Hotel</A>,{" "}
        <A href="https://www.granducahouston.com/">Hotel Granduca Houston</A>,{" "}
        <A href="https://www.marriott.com/hotels/travel/houmc-marriott-marquis-houston/">
          Marriott Marquis Houston
        </A>
        ,{" "}
        <A href="https://www.houstonian.com/">Houstonian Hotel</A>.
      </>,
      <>
        Business Districts: Downtown Houston CBD,{" "}
        <A href="https://www.galleriahouston.com/">Galleria / Uptown</A>,{" "}
        <A href="https://www.energycorridor.org/">Energy Corridor</A>, Greenway
        Plaza, The Woodlands business district, Westchase.
      </>,
      <>
        Events &amp; Venues:{" "}
        <A href="https://www.mlb.com/astros/ballpark">Minute Maid Park</A>{" "}
        (Astros),{" "}
        <A href="https://www.nrgpark.com/">NRG Stadium</A> (Texans),{" "}
        <A href="https://www.toyotacenter.com/">Toyota Center</A> (Rockets),{" "}
        <A href="https://www.georgebrown.com/">
          George R. Brown Convention Center
        </A>
        , Houston Livestock Show &amp; Rodeo.
      </>,
      "Beyond Houston: Galveston Island, The Woodlands, Sugar Land, Austin (long-haul), San Antonio (long-haul).",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Houston Services →",
  },
 
  pricing: {
    h2: "Houston Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},// ══════════════════════════════════════════════════════════════════
// DENVER — English
// ══════════════════════════════════════════════════════════════════
{
  id: "denver",
  FA: "locationDenverFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/DenverLocation.png",
      alt: "Viaro black car service in Denver with Downtown skyline and Rocky Mountains in the background, luxury sedan approaching Denver International Airport.",
      caption:
        "From DEN to the mountains, LoDo to the Denver Tech Center—Viaro delivers seamless executive transportation across Greater Denver and the Rockies.",
    },
    h1: "Denver Black Car Service",
    h2: "DEN · APA · BJC — Fixed Fares, No Surcharges, 24/7",
    description:
      "Denver on your schedule. Whether you are landing at Denver International Airport after a long flight, stepping off a private jet at Centennial or Rocky Mountain Metro, or heading up I-70 to Vail—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during ski season or when the Colorado Convention Center fills for a major conference. Professional chauffeurs who know every route from DEN's concourses to Downtown, the Tech Center, Boulder, and the mountain resorts.",
    cta: { book: "Book Your Denver Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Denver's Tech Leaders, Executives & Mountain Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "3 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Denver Airport Pickups",
    image: {
      src: "/images/DENArrival.png",
      alt: "Viaro chauffeur at Denver International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every I-70 condition, and every mountain route across Colorado.",
    },
    content: [
      "Denver means navigating 3 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Denver International Airport (DEN)",
      image: {
        src: "/images/DENTerminal.png",
        alt: "Viaro black car at Denver International Airport Jeppesen Terminal arrivals serving Downtown Denver, Boulder and the Denver Tech Center.",
        caption:
          "DEN sits 25 miles from downtown — Viaro monitors weather, flight status, and I-70 conditions in real time so your pickup is timed perfectly.",
      },
      content: [
        "DEN is 25 miles from downtown—one of the most remote major airports in the country relative to its city center. The tent-shaped Jeppesen Terminal connects to six concourses via an underground train. Expect 45–60 minutes from gate to car in normal traffic, longer during Denver's frequent snowstorms.",
        "Insider tip: DEN's snow delays are serious—blizzard conditions can close the airport entirely. Viaro monitors weather and flight status in real time. For mountain-bound passengers, we know every I-70 condition between Denver and the Continental Divide.",
        <>
          Popular destinations from DEN:{" "}
          <A href="https://www.denver.org/">Downtown Denver</A>, LoDo, Cherry
          Creek,{" "}
          <A href="https://www.denvertechcenter.com/">Denver Tech Center</A>,{" "}
          <A href="https://www.bouldercolorado.gov/">Boulder</A>, Aurora.
        </>,
      ],
    },
    {
      h3: "Centennial Airport (APA) — Private Aviation",
      image: {
        src: "/images/APATarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Centennial Airport FBO for private jet arrival south of Denver.",
        caption:
          "Centennial Airport — Denver's primary private aviation hub, right next to the Tech Center. Saves significant time for DTC-bound passengers.",
      },
      content: [
        "Centennial is Denver's primary private aviation hub—south of the city near the Denver Tech Center, avoiding the 25-mile DEN haul entirely for DTC or south Denver passengers.",
        <>
          Insider tip: For passengers heading to the Denver Tech Center,
          Greenwood Village, or Castle Rock, APA saves significant time over
          DEN. Viaro coordinates with FBO operations for tarmac arrivals. Where
          security allows, we meet you at the jet stairs.
        </>,
        "Popular destinations from APA: Denver Tech Center, Greenwood Village, Lone Tree, Castle Rock, Parker, Inverness.",
      ],
    },
    {
      h3: "Rocky Mountain Metropolitan Airport (BJC) — Private Aviation",
      image: {
        src: "/images/BJCTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Rocky Mountain Metropolitan Airport FBO for private jet arrival north of Denver.",
        caption:
          "Rocky Mountain Metro — the logical private aviation entry for the Boulder corridor and north Denver suburbs.",
      },
      content: [
        "Rocky Mountain Metro serves Broomfield, Westminster, and the northern Denver tech corridor—ideal for passengers heading to Boulder, Lafayette, or Louisville.",
        <>
          Insider tip: BJC is the logical private aviation entry for the Boulder
          corridor and north Denver suburbs. Viaro coordinates with FBO
          operations at Rocky Mountain Metro. Where security allows, we meet you
          at the jet stairs for a seamless transition directly to your
          destination.
        </>,
        "Popular destinations from BJC: Broomfield, Westminster, Boulder, Louisville, Lafayette, Northglenn.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Denver Moves with Viaro",
    image: {
      src: "/images/DenverHotels.png",
      alt: "Viaro luxury black car outside iconic Denver hotel with Rocky Mountains visible providing executive transportation.",
      caption:
        "From the Tech Center to Vail Village, Viaro moves Denver's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Denver / LoDo",
        time: "45 min",
        desc: "16th Street Mall, Union Station, Coors Field, Ball Arena",
      },
      {
        label: "Denver Tech Center",
        time: "55 min",
        desc: "Corporate campuses, Greenwood Village, Inverness, Lone Tree",
      },
      {
        label: "Cherry Creek",
        time: "50 min",
        desc: "Cherry Creek Shopping Center, luxury hotels, upscale dining",
      },
      {
        label: "Boulder",
        time: "60 min",
        desc: "University of Colorado, Pearl Street Mall, tech startups, biotech",
      },
      {
        label: "Vail / Beaver Creek",
        time: "2.5 hrs",
        desc: "World-class skiing, Vail Village, luxury mountain resorts",
      },
      {
        label: "Breckenridge / Keystone",
        time: "1.5 hrs",
        desc: "Summit County ski resorts, mountain towns, I-70 corridor",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/denver/">Four Seasons Denver</A>,{" "}
        <A href="https://www.brownpalace.com/">The Brown Palace Hotel</A>,{" "}
        <A href="https://www.hotelteatrodenver.com/">Hotel Teatro</A>,{" "}
        <A href="https://www.halcyonhotelcherrycreek.com/">
          Halcyon Hotel Cherry Creek
        </A>
        ,{" "}
        <A href="https://www.marriott.com/hotels/travel/dencc-jw-marriott-denver-cherry-creek/">
          JW Marriott Denver Cherry Creek
        </A>
        .
      </>,
      <>
        Business Districts: Downtown Denver / LoDo,{" "}
        <A href="https://www.denvertechcenter.com/">Denver Tech Center</A>,
        Cherry Creek,{" "}
        <A href="https://www.rinodenver.com/">RiNo / River North</A>, Boulder
        tech corridor, Broomfield / Interlocken.
      </>,
      <>
        Events &amp; Venues:{" "}
        <A href="https://www.ballarena.com/">Ball Arena</A> (Nuggets/Avalanche),{" "}
        <A href="https://www.empowerfieldatmilehigh.com/">
          Empower Field at Mile High
        </A>{" "}
        (Broncos),{" "}
        <A href="https://www.mlb.com/rockies/ballpark">Coors Field</A> (Rockies),{" "}
        <A href="https://www.coloradoconvention.com/">
          Colorado Convention Center
        </A>
        ,{" "}
        <A href="https://www.redrocksonline.com/">Red Rocks Amphitheatre</A>.
      </>,
      <>
        Mountain Connections:{" "}
        <A href="https://www.vail.com/">Vail / Beaver Creek</A> (2.5 hrs),{" "}
        <A href="https://www.aspensnowmass.com/">Aspen</A> (3.5 hrs),
        Breckenridge, Steamboat Springs, Keystone / Arapahoe Basin. Our hourly
        chauffeur service is ideal for full ski days and mountain excursions.
      </>,
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Denver Services →",
  },
 
  pricing: {
    h2: "Denver Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for mountain resort transfers, long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// BOSTON — English
// ══════════════════════════════════════════════════════════════════
{
  id: "boston",
  FA: "locationBostonFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/BostonLocation.png",
      alt: "Viaro black car service in Boston with Downtown skyline and luxury sedan approaching Boston Logan International Airport.",
      caption:
        "From Logan to Hanscom, the Seaport to Cambridge—Viaro delivers seamless executive transportation across Greater Boston.",
    },
    h1: "Boston Black Car Service",
    h2: "BOS · BED — Fixed Fares, No Surcharges, 24/7",
    description:
      "Boston on your schedule. Whether you are landing at Boston Logan International Airport after a long flight, stepping off a private jet at Hanscom Field, or heading to a meeting in Kendall Square—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the Boston Marathon, Red Sox playoff runs, or when biotech conferences pack the Seaport. Professional chauffeurs who know every tunnel, every Back Bay shortcut, and the fastest way through Cambridge traffic.",
    cta: { book: "Book Your Boston Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Boston's Biotech, Finance & Academic Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Boston Airport Pickups",
    image: {
      src: "/images/BOSArrival.png",
      alt: "Viaro chauffeur at Boston Logan International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every tunnel condition, and every shortcut across Greater Boston.",
    },
    content: [
      "Boston means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Boston Logan International Airport (BOS)",
      image: {
        src: "/images/BOSTerminal.png",
        alt: "Viaro black car at Boston Logan International Airport Terminal E arrivals serving Downtown Boston, Seaport and Cambridge.",
        caption:
          "Logan sits just 3 miles from Downtown — but the tunnels can turn that into 45 minutes. Viaro monitors real-time tunnel conditions and times your pickup accordingly.",
      },
      content: [
        "Logan sits on a peninsula in Boston Harbor—only 3 miles from downtown as the crow flies, but the Sumner and Callahan tunnels can turn that into a 45-minute ordeal during rush hour. Terminals A, B, C, and E, with E handling all international flights.",
        "Insider tip: The tunnel backup is Boston's defining transportation problem. Viaro monitors real-time tunnel conditions and times your pickup accordingly. For Seaport or South Boston destinations, the Ted Williams Tunnel is often faster than Callahan. Your driver knows the difference.",
        <>
          Popular destinations from BOS:{" "}
          <A href="https://www.bostonusa.com/">Downtown Boston</A>,{" "}
          <A href="https://www.seaportboston.com/">Seaport District</A>, Back
          Bay, <A href="https://www.cambridge-usa.org/">Cambridge</A>, Brookline,
          Newton, Wellesley.
        </>,
      ],
    },
    {
      h3: "Laurence G. Hanscom Field (BED) — Private Aviation",
      image: {
        src: "/images/BEDTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Laurence G. Hanscom Field FBO for private jet arrival northwest of Boston.",
        caption:
          "Hanscom Field — the private aviation hub for Greater Boston, bypassing all tunnel and harbor congestion entirely.",
      },
      content: [
        "Hanscom is the private aviation hub for Greater Boston—22 miles northwest of the city in Bedford, avoiding all tunnel and harbor congestion entirely. Favored by technology investors, biotech executives, and the Route 128 corridor.",
        <>
          Insider tip: For Waltham, Lexington, Concord, or the Route 128 tech
          belt, Hanscom is vastly superior to Logan in total ground time. Viaro
          coordinates with FBO operations at Hanscom for tarmac arrivals. Where
          security allows, we meet you at the jet stairs.
        </>,
        <>
          Popular destinations from BED: Waltham, Lexington, Concord,
          Burlington, Woburn,{" "}
          <A href="https://www.route128.com/">Route 128 tech corridor</A>,
          Cambridge (via Route 2A).
        </>,
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Boston Moves with Viaro",
    image: {
      src: "/images/BostonHotels.png",
      alt: "Viaro luxury black car outside iconic Boston hotel providing executive transportation service.",
      caption:
        "From Beacon Hill to Kendall Square, Viaro moves Boston's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Financial District",
        time: "20 min",
        desc: "State Street, Federal Reserve, Post Office Square, luxury hotels",
      },
      {
        label: "Seaport / Innovation District",
        time: "15 min",
        desc: "Boston Convention Center, biotech campuses, Vertex, General Catalyst",
      },
      {
        label: "Back Bay",
        time: "25 min",
        desc: "Copley Square, Newbury Street, Prudential Center, Four Seasons",
      },
      {
        label: "Cambridge / Kendall Square",
        time: "30 min",
        desc: "MIT, Harvard, biotech corridor, Google Cambridge, Broad Institute",
      },
      {
        label: "Route 128 Corridor",
        time: "35 min",
        desc: "Waltham, Burlington, Woburn — biotech and tech campuses",
      },
      {
        label: "Wellesley / Newton",
        time: "40 min",
        desc: "Wellesley College, Newton-Wellesley Hospital, affluent suburbs",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/boston/">Four Seasons Boston</A>,{" "}
        <A href="https://www.mandarinoriental.com/boston">
          Mandarin Oriental Boston
        </A>
        ,{" "}
        <A href="https://www.thenewburyboston.com/">The Newbury Boston</A>,{" "}
        <A href="https://www.bostonharborhotel.com/">Boston Harbor Hotel</A>,{" "}
        <A href="https://www.libertyhotel.com/">The Liberty Hotel</A>.
      </>,
      <>
        Business Districts: Financial District,{" "}
        <A href="https://www.seaportboston.com/">Seaport / Innovation District</A>
        , Back Bay / Copley,{" "}
        <A href="https://kendallsquare.org/">Cambridge / Kendall Square</A>,
        Route 128 tech corridor, Waltham biotech.
      </>,
      <>
        Events &amp; Culture:{" "}
        <A href="https://www.tdgarden.com/">TD Garden</A> (Celtics/Bruins),{" "}
        <A href="https://www.mlb.com/red-sox/ballpark">Fenway Park</A>,{" "}
        <A href="https://www.signatureboston.com/bcec">
          Boston Convention &amp; Exhibition Center
        </A>
        ,{" "}
        <A href="https://www.harvard.edu/">Harvard</A> /{" "}
        <A href="https://www.mit.edu/">MIT</A> campuses,{" "}
        <A href="https://www.massgeneral.org/">Massachusetts General Hospital</A>
        .
      </>,
      "Beyond Boston: Providence RI, Worcester, New Hampshire (long-haul), Cape Cod (seasonal).",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Boston Services →",
  },
 
  pricing: {
    h2: "Boston Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// ASPEN / VAIL — English
// ══════════════════════════════════════════════════════════════════
{
  id: "aspen-vail",
  FA: "locationAspenVailFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/AspenVailLocation.png",
      alt: "Viaro black car service in Aspen with snow-covered Rocky Mountains and luxury SUV approaching Aspen/Pitkin County Airport.",
      caption:
        "From ASE to Vail Village, Snowmass to Beaver Creek—Viaro delivers seamless luxury transportation across Colorado's premier mountain destinations.",
    },
    h1: "Aspen & Vail Black Car Service",
    h2: "ASE · EGE — Fixed Fares, No Surcharges, 24/7",
    description:
      "Aspen and Vail on your schedule. Whether you are landing at Aspen/Pitkin County Airport after a diverted flight, stepping off a private jet at Eagle County, or making your way from Denver up I-70—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during peak ski season or when private jets stack up at ASE. Professional chauffeurs with the right vehicles for mountain conditions, who know every road between the Roaring Fork Valley and the Vail corridor.",
    cta: { book: "Book Your Mountain Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Aspen & Vail's Most Discerning Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Aspen & Vail Airport Pickups",
    image: {
      src: "/images/ASEArrival.png",
      alt: "Viaro chauffeur at Aspen/Pitkin County Airport loading luggage into luxury black SUV at terminal arrivals with Aspen Mountain in the background.",
      caption:
        "We know every mountain approach, every diversion protocol, and every road condition across the Roaring Fork Valley and Vail corridor.",
    },
    content: [
      "Aspen and Vail mean navigating 2 distinct airports—each with its own logic and pickup choreography in some of the most challenging mountain terrain in North America. Knowing which one to use—and how to handle the unpredictable—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Aspen/Pitkin County Airport (ASE)",
      image: {
        src: "/images/ASETerminal.png",
        alt: "Viaro luxury black SUV at Aspen/Pitkin County Airport arrivals serving Aspen core, Snowmass Village and Aspen Highlands.",
        caption:
          "ASE — one of the most challenging commercial airports in North America. When flights divert, Viaro is already coordinating your ground transfer.",
      },
      content: [
        "ASE is one of the most challenging commercial airports in North America—a single runway surrounded by mountains, with approaches that require specially certified pilots and weather minimums that cancel flights without warning. It serves both commercial (United, American) and private aircraft.",
        "Insider tip: ASE cancellations are common, especially in winter. When flights divert to GJT (Grand Junction) or DEN, Viaro coordinates the ground transfer—we are already tracking your aircraft, not just your flight number.",
        <>
          Popular destinations from ASE:{" "}
          <A href="https://www.aspen.com/">Aspen core</A>, Aspen Highlands,{" "}
          <A href="https://www.snowmassvillage.com/">Snowmass Village</A>,
          Basalt, Carbondale.
        </>,
      ],
    },
    {
      h3: "Eagle County Regional Airport (EGE)",
      image: {
        src: "/images/EGETerminal.png",
        alt: "Viaro luxury black SUV at Eagle County Regional Airport arrivals serving Vail Village, Beaver Creek and Edwards.",
        caption:
          "EGE — 35 miles from Vail via I-70. Viaro monitors the mountain pass conditions in real time and arrives with the right vehicle for the road.",
      },
      content: [
        "EGE serves the Vail Valley—the preferred commercial entry for Vail, Beaver Creek, and Edwards. Seasonal direct flights from major hubs make it the most convenient option for ski season travelers.",
        "Insider tip: EGE is 35 miles from Vail via I-70. Viaro monitors road and weather conditions on that stretch—it is a mountain pass corridor and conditions can change in minutes. Your driver will have the right vehicle for conditions.",
        <>
          Popular destinations from EGE:{" "}
          <A href="https://www.vail.com/">Vail Village</A>,{" "}
          <A href="https://www.beavercreek.com/">Beaver Creek Resort</A>,
          Edwards, Avon, Minturn,{" "}
          <A href="https://www.visitglenwood.com/">Glenwood Springs</A>.
        </>,
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Aspen & Vail Move with Viaro",
    image: {
      src: "/images/AspenVailHotels.png",
      alt: "Viaro luxury black SUV outside The Little Nell in Aspen or Four Seasons Vail providing premium mountain transportation.",
      caption:
        "From ski-in/ski-out resorts to private mountain estates, Viaro moves Aspen and Vail's most discerning guests.",
    },
    items: [
      {
        label: "Aspen Core",
        time: "5 min",
        desc: "Little Nell, Hotel Jerome, Aspen Mountain gondola, downtown boutiques",
      },
      {
        label: "Snowmass Village",
        time: "20 min",
        desc: "Snowmass Base Village, The Westin Snowmass, ski-in/ski-out estates",
      },
      {
        label: "Vail Village",
        time: "35 min from EGE",
        desc: "Four Seasons Vail, Vail Mountain Lodge, ski-in/ski-out chalets",
      },
      {
        label: "Beaver Creek",
        time: "45 min from EGE",
        desc: "Park Hyatt Beaver Creek, Bachelor Gulch, private mountain estates",
      },
      {
        label: "Basalt / Carbondale",
        time: "20 min",
        desc: "Mid-valley communities, Roaring Fork corridor, Willits Town Center",
      },
      {
        label: "Glenwood Springs",
        time: "45 min",
        desc: "Glenwood Hot Springs, Hotel Colorado, I-70 corridor connections",
      },
    ],
    content: [
      <>
        Aspen Destinations: Aspen core / Little Nell, Aspen Highlands,{" "}
        <A href="https://www.snowmassvillage.com/">Snowmass Village</A>,{" "}
        <A href="https://www.thelittlenell.com/">The Little Nell</A>, Ute Avenue
        estates.
      </>,
      <>
        Vail Valley:{" "}
        <A href="https://www.vail.com/">Vail Village</A>,{" "}
        <A href="https://www.beavercreek.com/">Beaver Creek Resort</A>, Bachelor
        Gulch, Edwards / Riverwalk, Avon.
      </>,
      <>
        Luxury Properties:{" "}
        <A href="https://www.thelittlenell.com/">The Little Nell</A>,{" "}
        <A href="https://www.aspenmeadows.com/">Aspen Meadows Resort</A>,{" "}
        <A href="https://www.hoteljerome.aubergeresorts.com/">Hotel Jerome</A>,{" "}
        <A href="https://www.fourseasons.com/vail/">Four Seasons Vail</A>,{" "}
        <A href="https://www.parkhyattbeavercreek.com/">
          Park Hyatt Beaver Creek
        </A>
        .
      </>,
      "Regional: Basalt, Carbondale, Glenwood Springs, Rifle (for private aircraft diversions and DEN-bound transfers).",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>{" "}
        — ideal for full ski days, wine tours through the Roaring Fork Valley,
        and multi-resort excursions.
      </>,
    ],
    cta: "Explore Aspen & Vail Services →",
  },
 
  pricing: {
    h2: "Aspen & Vail Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for ski gear",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for diversion transfers (GJT/DEN), long-haul, full-day chauffeur, and custom mountain route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// PHOENIX — English
// ══════════════════════════════════════════════════════════════════
{
  id: "phoenix",
  FA: "locationPhoenixFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/PhoenixLocation.png",
      alt: "Viaro black car service in Phoenix with Downtown skyline and luxury sedan approaching Phoenix Sky Harbor International Airport.",
      caption:
        "From Sky Harbor to Scottsdale, Paradise Valley to Sedona—Viaro delivers seamless executive transportation across Greater Phoenix and the Sonoran Desert.",
    },
    h1: "Phoenix Black Car Service",
    h2: "PHX · SDL — Fixed Fares, No Surcharges, 24/7",
    description:
      "Phoenix on your schedule. Whether you are landing at Phoenix Sky Harbor International Airport after a long flight, stepping off a private jet at Scottsdale Airport, or heading to a resort in Paradise Valley—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the Waste Management Phoenix Open or when the Super Bowl comes to State Farm Stadium. Professional chauffeurs who know every route from Sky Harbor's three terminals to Downtown, Scottsdale, the resort corridor, and beyond.",
    cta: { book: "Book Your Phoenix Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Phoenix's Resort Guests, Executives & Golf Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Phoenix Airport Pickups",
    image: {
      src: "/images/PHXArrival.png",
      alt: "Viaro chauffeur at Phoenix Sky Harbor International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every resort route, and every shortcut across the Valley of the Sun.",
    },
    content: [
      "Phoenix means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Phoenix Sky Harbor International Airport (PHX)",
      image: {
        src: "/images/PHXTerminal.png",
        alt: "Viaro black car at Phoenix Sky Harbor International Airport Terminal 4 arrivals serving Downtown Phoenix, Scottsdale and Tempe.",
        caption:
          "Sky Harbor's three terminals are connected by the PHX Sky Train — Viaro tracks your terminal and meets you at the correct arrivals exit, no confusion.",
      },
      content: [
        "Sky Harbor is Arizona's primary commercial airport—three terminals (2, 3, and 4) connected by the PHX Sky Train, just 3 miles from downtown Phoenix. One of the most efficiently designed airports in the American Southwest.",
        "Insider tip: Terminal 4 handles American Airlines and is by far the busiest. Terminal 3 handles Southwest and is the fastest in and out. Viaro tracks your terminal and meets you at the correct arrivals exit—no PHX Sky Train confusion.",
        <>
          Popular destinations from PHX:{" "}
          <A href="https://www.visitphoenix.com/">Downtown Phoenix</A>,{" "}
          <A href="https://www.experiencescottsdale.com/">Scottsdale</A>, Tempe,
          Chandler, Glendale, Mesa.
        </>,
      ],
    },
    {
      h3: "Scottsdale Airport (SDL) — Private Aviation",
      image: {
        src: "/images/SDLTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Scottsdale Airport FBO for private jet arrival serving north Scottsdale and Paradise Valley.",
        caption:
          "Scottsdale Airport — the private aviation hub for the luxury resort corridor. 20 minutes closer to the Four Seasons and Sanctuary than PHX.",
      },
      content: [
        "Scottsdale Airport is the private aviation hub for the luxury resort corridor—north Scottsdale, Paradise Valley, and the golf communities surrounding them. Closer to the Four Seasons, Sanctuary, and Boulders than PHX by 20 minutes.",
        <>
          Insider tip: Viaro coordinates with FBO operations at Scottsdale
          Airport. Where security allows, we meet you at the jet stairs. For
          Paradise Valley, north Scottsdale, or Carefree destinations, SDL saves
          significant time and offers a more discreet arrival experience.
        </>,
        "Popular destinations from SDL: Scottsdale Old Town, Paradise Valley, north Scottsdale resorts, Carefree, Cave Creek, Fountain Hills.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Phoenix Moves with Viaro",
    image: {
      src: "/images/PhoenixHotels.png",
      alt: "Viaro luxury black car outside iconic Scottsdale resort providing executive transportation service in the desert.",
      caption:
        "From world-class golf resorts to Fortune 500 headquarters, Viaro moves Phoenix's most discerning travelers.",
    },
    items: [
      {
        label: "Downtown Phoenix",
        time: "10 min",
        desc: "CBD, Chase Field, Footprint Center, Phoenix Convention Center",
      },
      {
        label: "Scottsdale Old Town",
        time: "20 min",
        desc: "Restaurants, galleries, nightlife, boutique hotels, Fashion Square",
      },
      {
        label: "Paradise Valley",
        time: "25 min",
        desc: "The Phoenician, Sanctuary Camelback Mountain, Royal Palms, luxury estates",
      },
      {
        label: "North Scottsdale",
        time: "35 min",
        desc: "Four Seasons, The Boulders, TPC Scottsdale, Gainey Ranch",
      },
      {
        label: "Tempe / Chandler",
        time: "20 min",
        desc: "ASU, tech parks, Intel campus, Chandler corporate corridor",
      },
      {
        label: "Sedona",
        time: "2 hrs",
        desc: "Red rock country, luxury spa resorts, Enchantment Resort, L'Auberge",
      },
    ],
    content: [
      <>
        Hotels &amp; Resorts:{" "}
        <A href="https://www.fourseasons.com/scottsdale/">
          Four Seasons Resort Scottsdale
        </A>
        ,{" "}
        <A href="https://www.thephoenician.com/">The Phoenician</A>,{" "}
        <A href="https://www.sanctuaryoncamelback.com/">
          Sanctuary Camelback Mountain
        </A>
        ,{" "}
        <A href="https://www.theboulders.com/">The Boulders Resort</A>,{" "}
        <A href="https://www.royalpalmshotel.com/">Royal Palms Resort</A>.
      </>,
      <>
        Business Districts: Downtown Phoenix CBD, Scottsdale Financial District,
        Tempe / ASU corridor,{" "}
        <A href="https://www.chandleraz.gov/">Chandler tech park</A>, Gilbert /
        Mesa business parks.
      </>,
      <>
        Events &amp; Venues:{" "}
        <A href="https://www.mlb.com/dbacks/ballpark">Chase Field</A>{" "}
        (Diamondbacks),{" "}
        <A href="https://www.footprintcenter.com/">Footprint Center</A> (Suns),{" "}
        <A href="https://www.statefarmstadium.com/">State Farm Stadium</A>{" "}
        (Cardinals),{" "}
        <A href="https://www.phoenixconventioncenter.com/">
          Phoenix Convention Center
        </A>
        .
      </>,
      <>
        Beyond Phoenix:{" "}
        <A href="https://visitsedona.com/">Sedona</A> (2 hrs), Flagstaff (2
        hrs), Tucson (2 hrs), Prescott (1.5 hrs). Our hourly chauffeur service
        is ideal for full-day desert excursions and golf rounds.
      </>,
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Phoenix Services →",
  },
 
  pricing: {
    h2: "Phoenix Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Sedona, Flagstaff, Tucson, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// AUSTIN — English
// ══════════════════════════════════════════════════════════════════
{
  id: "austin",
  FA: "locationAustinFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/AustinLocation.png",
      alt: "Viaro black car service in Austin with Downtown skyline and luxury sedan approaching Austin-Bergstrom International Airport.",
      caption:
        "From AUS to South Congress, The Domain to the Hill Country—Viaro delivers seamless executive transportation across Greater Austin.",
    },
    h1: "Austin Black Car Service",
    h2: "AUS — Fixed Fares, No Surcharges, 24/7",
    description:
      "Austin on your schedule. Whether you are landing at Austin-Bergstrom International Airport after a long flight or heading to a meeting at The Domain—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during SXSW, Formula 1 race week at Circuit of the Americas, or Austin City Limits. Professional chauffeurs who know every route from AUS to Downtown, East Austin, the tech corridor, and the Texas Hill Country.",
    cta: { book: "Book Your Austin Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Austin's Tech Leaders, Creatives & Corporate Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Austin-Bergstrom International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless AUS Pickups",
    image: {
      src: "/images/AUSArrival.png",
      alt: "Viaro chauffeur at Austin-Bergstrom International Airport loading luggage into luxury black car at Barbara Jordan Terminal arrivals.",
      caption:
        "We know every terminal exit, every event traffic pattern, and every shortcut across Greater Austin.",
    },
    content: [
      "AUS has grown faster than any other major airport in the US over the past decade—a single main terminal (Barbara Jordan) with a recently opened South Terminal for low-cost carriers. Only 8 miles from downtown, but SH-71 and Ben White Blvd can create real delays during South by Southwest and Formula 1 race weeks.",
      "Insider tip: SXSW and the F1 Grand Prix at Circuit of the Americas are two of the worst ground-traffic events in the country. If you are traveling during those periods, book a Viaro SUV or Sprinter with buffer time built in. We monitor race and event traffic in real time.",
      <>
        Popular destinations from AUS:{" "}
        <A href="https://www.austintexas.org/">Downtown Austin</A>, South
        Congress, East Austin,{" "}
        <A href="https://www.thedomainaustin.com/">The Domain</A>, Round Rock,
        Cedar Park.
      </>,
    ],
  },
 
  whereSection: {
    h2: "Where Austin Moves with Viaro",
    image: {
      src: "/images/AustinHotels.png",
      alt: "Viaro luxury black car outside iconic Austin hotel providing executive transportation service on 6th Street.",
      caption:
        "From tech campuses to live music venues, Viaro moves Austin's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Austin",
        time: "15 min",
        desc: "6th Street, Congress Avenue, State Capitol, Rainey Street",
      },
      {
        label: "South Congress",
        time: "20 min",
        desc: "Hotel San José, boutiques, restaurants, Barton Springs",
      },
      {
        label: "The Domain",
        time: "25 min",
        desc: "Apple, Google, Meta, Indeed campuses, Domain NORTHSIDE",
      },
      {
        label: "East Austin",
        time: "20 min",
        desc: "Tech offices, Tesla, Samsung, creative studios, hotel corridor",
      },
      {
        label: "Round Rock / Cedar Park",
        time: "35 min",
        desc: "Dell campus, corporate parks, north Austin tech corridor",
      },
      {
        label: "Hill Country",
        time: "1 hr",
        desc: "Fredericksburg, Wimberley, Dripping Springs wine trail",
      },
    ],
    content: [
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/austin/">Four Seasons Austin</A>,{" "}
        <A href="https://www.driskillhotel.com/">The Driskill</A>,{" "}
        <A href="https://www.properhotel.com/austin/">Austin Proper Hotel</A>,{" "}
        <A href="https://www.marriott.com/hotels/travel/ausxw-w-austin/">
          W Austin
        </A>
        ,{" "}
        <A href="https://www.hotelvanzandt.com/">Hotel Van Zandt</A>.
      </>,
      <>
        Business &amp; Tech: Downtown Austin CBD,{" "}
        <A href="https://www.thedomainaustin.com/">The Domain / tech corridor</A>
        , East Austin offices, Round Rock / Dell campus, Cedar Park, Georgetown.
      </>,
      <>
        Events &amp; Culture:{" "}
        <A href="https://moodycenteratx.com/">Moody Center</A>,{" "}
        <A href="https://www.circuitoftheamericas.com/">
          Circuit of the Americas
        </A>{" "}
        (F1),{" "}
        <A href="https://www.aclfestival.com/">Austin City Limits</A> venues,
        SXSW venues,{" "}
        <A href="https://www.thelongcenter.org/">
          Long Center for the Performing Arts
        </A>
        .
      </>,
      <>
        Beyond Austin:{" "}
        <A href="https://www.visitsanantonio.com/">San Antonio</A> (1.5 hrs),
        Houston (3 hrs), Dallas (3 hrs),{" "}
        <A href="https://www.visitfredericksburgtx.com/">Fredericksburg</A> /
        Hill Country. Our hourly chauffeur service is perfect for Hill Country
        wine trail tours.
      </>,
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Austin Services →",
  },
 
  pricing: {
    h2: "Austin Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during SXSW or F1. Contact us for long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// ORLANDO — English
// ══════════════════════════════════════════════════════════════════
{
  id: "orlando",
  FA: "locationOrlandoFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/OrlandoLocation.png",
      alt: "Viaro black car service in Orlando with Downtown skyline and luxury sedan approaching Orlando International Airport.",
      caption:
        "From MCO to Walt Disney World, the Convention Center to Winter Park—Viaro delivers seamless executive transportation across Greater Orlando.",
    },
    h1: "Orlando Black Car Service",
    h2: "MCO · SFB · ORL — Fixed Fares, No Surcharges, 24/7",
    description:
      "Orlando on your schedule. Whether you are landing at Orlando International Airport after a long flight, stepping off a private jet at Orlando Executive, or arriving at Sanford from a regional charter—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during theme park peak season or when major conventions fill the Orange County Convention Center. Professional chauffeurs who know every route from MCO's terminals to Walt Disney World, Universal, Lake Nona, and Downtown Orlando.",
    cta: { book: "Book Your Orlando Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Orlando's Convention Groups, Resort Guests & Business Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "3 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Orlando Airport Pickups",
    image: {
      src: "/images/MCOArrival.png",
      alt: "Viaro chauffeur at Orlando International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal, every I-4 traffic pattern, and every shortcut across Greater Orlando.",
    },
    content: [
      "Orlando means navigating 3 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Orlando International Airport (MCO)",
      image: {
        src: "/images/MCOTerminal.png",
        alt: "Viaro black car at Orlando International Airport Terminal B arrivals serving Walt Disney World, Convention Center and Downtown Orlando.",
        caption:
          "MCO's four terminals are served by an automated people mover — Viaro tracks your terminal and meets you at the correct ground transportation exit.",
      },
      content: [
        "MCO is one of the busiest airports in the US—four terminals (A, B, C, and the new Terminal C) served by an automated people mover and an internal train system. The airport sits at the center of the tourist and convention corridor on SR-528.",
        "Insider tip: The new Terminal C opened in 2022 and handles Brightline rail connections. Terminals A and B are accessed via the main terminal and require the people mover. Viaro tracks your terminal and meets you at the correct ground transportation exit.",
        <>
          Popular destinations from MCO:{" "}
          <A href="https://disneyworld.disney.go.com/">
            Walt Disney World Resort
          </A>
          , International Drive,{" "}
          <A href="https://www.occc.net/">Convention Center</A>, Downtown
          Orlando,{" "}
          <A href="https://www.lakenona.com/">Lake Nona</A>.
        </>,
      ],
    },
    {
      h3: "Orlando Sanford International Airport (SFB)",
      image: {
        src: "/images/SFBTerminal.png",
        alt: "Viaro black car at Orlando Sanford International Airport arrivals serving Walt Disney World, Universal Orlando and I-Drive.",
        caption:
          "Sanford is 35 miles north of MCO — Viaro provides fixed-rate transfers to all theme park and convention destinations, no surprises.",
      },
      content: [
        "Sanford is the low-cost alternative to MCO—35 miles north, primarily serving Allegiant and charter flights from regional US cities. Less congested, faster through baggage, but further from the theme parks.",
        "Insider tip: SFB passengers heading to Walt Disney World or the Convention Center face a 45–60 minute drive on I-4. Viaro provides fixed-rate transfers to all theme park and convention destinations.",
        <>
          Popular destinations from SFB:{" "}
          <A href="https://disneyworld.disney.go.com/">Walt Disney World</A>,{" "}
          <A href="https://www.universalorlando.com/">Universal Orlando</A>,
          I-Drive, Daytona Beach (north), New Smyrna Beach.
        </>,
      ],
    },
    {
      h3: "Orlando Executive Airport (ORL) — Private Aviation",
      image: {
        src: "/images/ORLTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Orlando Executive Airport FBO for private jet arrival near Downtown Orlando.",
        caption:
          "Orlando Executive — the private aviation hub for Downtown Orlando and Winter Park, significantly closer than MCO to the business district.",
      },
      content: [
        "Orlando Executive is the private aviation hub for downtown Orlando, Maitland, and Winter Park—significantly closer to the business district than MCO.",
        <>
          Insider tip: Viaro coordinates with FBO operations at ORL. Where
          security allows, we meet you at the jet stairs. For business travelers
          heading to downtown Orlando, Maitland, or the I-4 corridor north of
          the theme parks, ORL is the faster option.
        </>,
        "Popular destinations from ORL: Downtown Orlando, Winter Park, Maitland, Lake Mary, College Park, Thornton Park.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Orlando Moves with Viaro",
    image: {
      src: "/images/OrlandoHotels.png",
      alt: "Viaro luxury black car outside iconic Orlando resort hotel providing executive transportation service.",
      caption:
        "From theme park resorts to convention halls, Viaro moves Orlando's most demanding travelers.",
    },
    items: [
      {
        label: "Walt Disney World",
        time: "25 min",
        desc: "Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom, Disney Springs",
      },
      {
        label: "Universal Orlando",
        time: "20 min",
        desc: "Universal Studios, Islands of Adventure, Epic Universe, CityWalk",
      },
      {
        label: "Convention Center",
        time: "20 min",
        desc: "Orange County Convention Center, I-Drive, Rosen Shingle Creek",
      },
      {
        label: "Downtown Orlando",
        time: "25 min",
        desc: "CBD, Dr. Phillips Center, Amway Center, Thornton Park",
      },
      {
        label: "Lake Nona",
        time: "20 min",
        desc: "Medical City, UCF Health, KPMG training facility, Laureate Park",
      },
      {
        label: "Winter Park",
        time: "30 min",
        desc: "Park Avenue, Rollins College, boutique hotels, upscale dining",
      },
    ],
    content: [
      <>
        Hotels &amp; Resorts:{" "}
        <A href="https://www.fourseasons.com/orlando/">
          Four Seasons Orlando
        </A>
        ,{" "}
        <A href="https://www.hyatt.com/en-US/hotel/florida/hyatt-regency-grand-cypress/mcogc">
          Hyatt Regency Grand Cypress
        </A>
        ,{" "}
        <A href="https://www.rosenshinglecreek.com/">Rosen Shingle Creek</A>,
        Walt Disney World Resort hotels, Universal Orlando hotels.
      </>,
      <>
        Business &amp; Conventions:{" "}
        <A href="https://www.occc.net/">Orange County Convention Center</A>,{" "}
        <A href="https://www.lakenona.com/">Lake Nona Medical City</A>, Downtown
        Orlando CBD, Maitland Center, Lake Mary / Heathrow business parks.
      </>,
      <>
        Theme Parks &amp; Entertainment:{" "}
        <A href="https://disneyworld.disney.go.com/">Walt Disney World</A> (all
        4 parks),{" "}
        <A href="https://www.universalorlando.com/">
          Universal Studios / Islands of Adventure
        </A>
        ,{" "}
        <A href="https://seaworld.com/orlando/">SeaWorld Orlando</A>,{" "}
        <A href="https://iconparkorlando.com/">ICON Park / I-Drive</A>, Millenia
        Mall.
      </>,
      "Beyond Orlando: Tampa (1.5 hrs), Miami (4 hrs), Jacksonville (2.5 hrs), Daytona Beach (1 hr).",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        and{" "}
        <a
          href="/en/black-car-service/hourly-chauffeur-hire"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          hourly chauffeur options
        </a>
        .
      </>,
    ],
    cta: "Explore Orlando Services →",
  },
 
  pricing: {
    h2: "Orlando Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for theme park group transfers, long-haul, full-day chauffeur, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// TORONTO — English
// ══════════════════════════════════════════════════════════════════
{
  id: "toronto",
  FA: "locationTorontoFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/TorontoLocation.png",
      alt: "Viaro black car service in Toronto with Downtown skyline and luxury sedan approaching Toronto Pearson International Airport.",
      caption:
        "From Pearson to Bay Street, Billy Bishop to Yorkville—Viaro delivers seamless executive transportation across Greater Toronto.",
    },
    h1: "Toronto Black Car Service",
    h2: "YYZ · YTZ — Fixed Fares, No Surcharges, 24/7",
    description:
      "Toronto on your schedule. Whether you are landing at Toronto Pearson International Airport after a long flight, stepping off a Porter Airlines flight at Billy Bishop, or heading to a meeting on Bay Street—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during TIFF, Leafs playoff runs, or when major conventions fill the Metro Toronto Convention Centre. Professional chauffeurs who know every route from Pearson's terminals to Downtown, Yorkville, Mississauga, and beyond.",
    cta: { book: "Book Your Toronto Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Toronto's Finance, Tech & Entertainment Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Toronto Airport Pickups",
    image: {
      src: "/images/YYZArrival.png",
      alt: "Viaro chauffeur at Toronto Pearson International Airport loading luggage into luxury black car at Terminal 1 arrivals.",
      caption:
        "We know every terminal, every 401 traffic pattern, and every shortcut across the Greater Toronto Area.",
    },
    content: [
      "Toronto means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Toronto Pearson International Airport (YYZ)",
      image: {
        src: "/images/YYZTerminal.png",
        alt: "Viaro black car at Toronto Pearson International Airport Terminal 1 arrivals serving Downtown Toronto, Yorkville and the Financial District.",
        caption:
          "Pearson Terminal 1 handles Air Canada and most international arrivals — Viaro monitors CBSA customs wait times and adjusts pickup accordingly.",
      },
      content: [
        "Pearson is Canada's busiest airport—Terminals 1 and 3, connected by the LINK train. Terminal 1 handles Air Canada and most international arrivals. Terminal 3 handles US carriers and some charter operations. The 427 and Hwy 401 between the airport and downtown are reliably congested.",
        "Insider tip: International arrivals at Terminal 1 face CBSA customs that regularly runs 30–60 minutes. Viaro monitors your flight and adjusts pickup timing accordingly—your driver does not start the clock when you land, they start it when you clear.",
        "Popular destinations from YYZ: Downtown Toronto, Yorkville, Financial District, North York, Mississauga, Vaughan.",
      ],
    },
    {
      h3: "Billy Bishop Toronto City Airport (YTZ)",
      image: {
        src: "/images/YTZTerminal.png",
        alt: "Viaro black car at Billy Bishop Toronto City Airport pedestrian tunnel exit serving Downtown Toronto and King West.",
        caption:
          "Billy Bishop — tiny terminal, fast process, 5 minutes from downtown. Viaro times your pickup precisely at the Bathurst and Lake Shore exit.",
      },
      content: [
        "Billy Bishop sits on the Toronto Islands, connected to the mainland by a pedestrian tunnel. Porter Airlines operates most routes here—the terminal is tiny, the process is fast, and downtown is a 5-minute ride away.",
        "Insider tip: YTZ passengers exit through the tunnel to the mainland pickup area at Bathurst and Lake Shore. Viaro times pickup precisely—the tight access road means your driver cannot wait. We will be there exactly when you arrive.",
        "Popular destinations from YTZ: Downtown Toronto, King West, The Entertainment District, Distillery District, Harbourfront.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Toronto Moves with Viaro",
    image: {
      src: "/images/TorontoHotels.png",
      alt: "Viaro luxury black car outside iconic Toronto hotel on Bay Street providing executive transportation service.",
      caption:
        "From Bay Street towers to TIFF red carpets, Viaro moves Toronto's most demanding travelers.",
    },
    items: [
      {
        label: "Bay Street Financial District",
        time: "25 min",
        desc: "TD Centre, Royal Bank Plaza, CIBC Square, Bay Adelaide Centre",
      },
      {
        label: "Yorkville",
        time: "30 min",
        desc: "Four Seasons, The Hazelton, Bloor Street luxury retail, Mink Mile",
      },
      {
        label: "King West / Entertainment District",
        time: "25 min",
        desc: "Tech offices, Scotiabank Arena, TIFF Bell Lightbox, Rogers Centre",
      },
      {
        label: "North York",
        time: "35 min",
        desc: "Yonge and Sheppard corridor, corporate offices, Fairview Mall",
      },
      {
        label: "Mississauga",
        time: "15 min",
        desc: "City Centre, Square One, corporate campuses, Sheridan College",
      },
      {
        label: "Niagara Falls",
        time: "1.5 hrs",
        desc: "Niagara Falls, Niagara-on-the-Lake wineries, casino hotels",
      },
    ],
    content: [
      "Luxury Hotels: Four Seasons Toronto, The Hazelton Hotel, Hotel X Toronto, Shangri-La Toronto, The Ritz-Carlton Toronto.",
      "Business Districts: Bay Street Financial District, Yorkville / Bloor-Yonge, King West tech corridor, North York / Yonge and Sheppard, Mississauga City Centre, Vaughan / Richmond Hill.",
      "Events & Culture: Scotiabank Arena (Leafs/Raptors), Rogers Centre (Blue Jays), Metro Toronto Convention Centre, TIFF Bell Lightbox, Roy Thomson Hall.",
      "Beyond Toronto: Niagara Falls (1.5 hrs), Hamilton, Kitchener-Waterloo, Barrie. Our hourly chauffeur service is perfect for Niagara-on-the-Lake wine tours.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Toronto Services →",
  },
 
  pricing: {
    h2: "Toronto Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Niagara, Hamilton, Kitchener-Waterloo, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// NASHVILLE — English
// ══════════════════════════════════════════════════════════════════
{
  id: "nashville",
  FA: "locationNashvilleFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/NashvilleLocation.png",
      alt: "Viaro black car service in Nashville with Downtown skyline and luxury sedan approaching Nashville International Airport.",
      caption:
        "From BNA to Broadway, Music Row to Brentwood—Viaro delivers seamless executive transportation across Greater Nashville.",
    },
    h1: "Nashville Black Car Service",
    h2: "BNA · JWN — Fixed Fares, No Surcharges, 24/7",
    description:
      "Nashville on your schedule. Whether you are landing at Nashville International Airport after a long flight, stepping off a private jet at John C. Tune Airport, or heading to a meeting in The Gulch—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during CMA Fest, NFL Draft weekends, or when bachelorette parties and conventions flood Broadway. Professional chauffeurs who know every route from BNA's new Concourse D to Downtown, 12South, Franklin, and the western suburbs.",
    cta: { book: "Book Your Nashville Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Nashville's Music, Business & Healthcare Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Nashville Airport Pickups",
    image: {
      src: "/images/BNAArrival.png",
      alt: "Viaro chauffeur at Nashville International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every concourse exit, every I-40 pattern, and every shortcut across Greater Nashville.",
    },
    content: [
      "Nashville means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Nashville International Airport (BNA)",
      image: {
        src: "/images/BNATerminal.png",
        alt: "Viaro black car at Nashville International Airport Concourse D arrivals serving Downtown Nashville, The Gulch and Brentwood.",
        caption:
          "BNA's new Concourse D opened in 2023 with a redesigned ground level — Viaro tracks your gate and positions at the correct exit, avoiding the layout confusion.",
      },
      content: [
        "BNA has undergone a major expansion—the new Terminal Concourse D opened in 2023, adding gates and a completely redesigned ground level. The airport is 8 miles from downtown but I-40 and Donelson Pike can be slow during morning and evening rush.",
        "Insider tip: The new Concourse D has separate ground transportation than the older A/B/C concourses. Viaro tracks your gate and concourse and positions at the correct exit—the layout has caught many travelers off guard.",
        "Popular destinations from BNA: Downtown Nashville, The Gulch, 12South, East Nashville, Brentwood, Franklin.",
      ],
    },
    {
      h3: "John C. Tune Airport (JWN) — Private Aviation",
      image: {
        src: "/images/JWNTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at John C. Tune Airport FBO for private jet arrival on the west side of Nashville.",
        caption:
          "Tune Airport — Nashville's private aviation hub, closer to Belle Meade and the western suburbs than BNA. Direct tarmac pickup for discerning arrivals.",
      },
      content: [
        "Tune Airport is Nashville's primary private aviation facility—on the west side of the city, closer to Belle Meade and the affluent western suburbs than BNA.",
        "Insider tip: For private passengers heading to Belle Meade, Brentwood, or the western Nashville suburbs, JWN saves meaningful time over BNA. Viaro coordinates with FBO operations for tarmac arrivals. Where security allows, we meet you at the jet stairs.",
        "Popular destinations from JWN: Belle Meade, Brentwood, Franklin, Hendersonville, Gallatin, western Nashville.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Nashville Moves with Viaro",
    image: {
      src: "/images/NashvilleHotels.png",
      alt: "Viaro luxury black car outside iconic Nashville hotel providing executive transportation service on Broadway.",
      caption:
        "From the Ryman to the boardroom, Viaro moves Nashville's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Broadway",
        time: "15 min",
        desc: "Honky Tonk Highway, Bridgestone Arena, Ryman Auditorium, Convention Center",
      },
      {
        label: "The Gulch",
        time: "15 min",
        desc: "1 Hotel Nashville, tech offices, boutique restaurants, luxury condos",
      },
      {
        label: "12South / Midtown",
        time: "20 min",
        desc: "Vanderbilt University, Music Row, Belle Meade, upscale dining",
      },
      {
        label: "East Nashville",
        time: "20 min",
        desc: "Five Points, Shelby Park, creative studios, boutique hotels",
      },
      {
        label: "Brentwood / Franklin",
        time: "30 min",
        desc: "Cool Springs, corporate campuses, luxury residential, Factory at Franklin",
      },
      {
        label: "Belle Meade",
        time: "25 min",
        desc: "Estates corridor, Belle Meade Country Club, private residences",
      },
    ],
    content: [
      "Luxury Hotels: Four Seasons Nashville, The Joseph Nashville, 1 Hotel Nashville, Noelle Nashville, Hermitage Hotel.",
      "Business & Music Row: Downtown Nashville CBD, Music Row, The Gulch, Midtown / Vanderbilt corridor, Cool Springs / Brentwood, Franklin.",
      "Entertainment: Bridgestone Arena (Predators), Nissan Stadium (Titans), Ryman Auditorium, Nashville Convention Center, Broadway / Honky Tonk Highway.",
      "Beyond Nashville: Franklin & Brentwood, Murfreesboro, Chattanooga (2 hrs), Memphis (3.5 hrs). Our hourly chauffeur service is ideal for full-day music industry meetings and venue tours.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Nashville Services →",
  },
 
  pricing: {
    h2: "Nashville Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during CMA Fest. Contact us for Franklin, Murfreesboro, long-haul, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// PALM SPRINGS — English
// ══════════════════════════════════════════════════════════════════
{
  id: "palm-springs",
  FA: "locationPalmSpringsFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/PalmSpringsLocation.png",
      alt: "Viaro black car service in Palm Springs with San Jacinto Mountains backdrop and luxury sedan approaching Palm Springs International Airport.",
      caption:
        "From PSP to the festival grounds, Palm Desert to Indian Wells—Viaro delivers seamless luxury transportation across the Coachella Valley.",
    },
    h1: "Palm Springs Black Car Service",
    h2: "PSP · TRM — Fixed Fares, No Surcharges, 24/7",
    description:
      "Palm Springs on your schedule. Whether you are landing at Palm Springs International Airport after a long flight, stepping off a private jet at Jacqueline Cochran Regional, or heading to a resort in La Quinta—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Coachella weekend, Stagecoach, or the BNP Paribas Open at Indian Wells. Professional chauffeurs who know every route from PSP to Palm Desert, Rancho Mirage, the festival grounds, and the entire Coachella Valley.",
    cta: { book: "Book Your Palm Springs Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Palm Springs Resort Guests, Festival-Goers & Private Aviation Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Palm Springs Airport Pickups",
    image: {
      src: "/images/PSPArrival.png",
      alt: "Viaro chauffeur at Palm Springs International Airport loading luggage into luxury black car at terminal arrivals with mountain views.",
      caption:
        "We know every exit, every festival traffic pattern, and every route across the Coachella Valley.",
    },
    content: [
      "Palm Springs means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Palm Springs International Airport (PSP)",
      image: {
        src: "/images/PSPTerminal.png",
        alt: "Viaro black car at Palm Springs International Airport arrivals serving Palm Springs downtown, Palm Desert and Rancho Mirage.",
        caption:
          "PSP — a single terminal, 2 miles from downtown. No fog, no weather delays. Viaro times arrival precisely so your driver is at the curb when you exit.",
      },
      content: [
        "PSP is a small, pleasant airport—a single terminal with direct service to a dozen major hubs. The desert setting means no fog delays, minimal weather issues, and a baggage claim that moves quickly. Just 2 miles from downtown Palm Springs.",
        "Insider tip: PSP's curbside pickup area is compact. Viaro drivers time arrival precisely—no circling a desert parking lot. When you exit baggage claim, your driver is already at the curb.",
        "Popular destinations from PSP: Palm Springs downtown, Palm Desert, Rancho Mirage, La Quinta, Indian Wells, Cathedral City.",
      ],
    },
    {
      h3: "Jacqueline Cochran Regional Airport (TRM) — Private Aviation",
      image: {
        src: "/images/TRMTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Jacqueline Cochran Regional Airport FBO for private jet arrival serving Coachella and Indian Wells.",
        caption:
          "Cochran Regional — the preferred arrival for celebrities and festival-goers. Viaro coordinates festival traffic and times your transfer to the grounds.",
      },
      content: [
        "Cochran Regional serves the Coachella Valley's private aviation market—the preferred arrival point for celebrities, executives, and festival-goers who want to avoid the commercial terminal entirely.",
        "Insider tip: During the Coachella Festival, Stagecoach, and major tennis events at Indian Wells, Cochran Regional handles significant private jet overflow. Viaro coordinates with FBO operations and times festival traffic accordingly. Where security allows, we meet you at the jet stairs.",
        "Popular destinations from TRM: Coachella / Indio (festival grounds), La Quinta, Indian Wells, Thermal, Desert Hot Springs.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Palm Springs Moves with Viaro",
    image: {
      src: "/images/PalmSpringsHotels.png",
      alt: "Viaro luxury black car outside iconic Palm Springs resort hotel with mountain backdrop providing executive transportation.",
      caption:
        "From poolside villas to festival VIP entrances, Viaro moves Palm Springs' most discerning guests.",
    },
    items: [
      {
        label: "Palm Springs Downtown",
        time: "5 min",
        desc: "Parker Palm Springs, Ace Hotel, Palm Canyon Drive, art galleries",
      },
      {
        label: "Palm Desert",
        time: "20 min",
        desc: "El Paseo shopping, JW Marriott, corporate offices, McCallum Theatre",
      },
      {
        label: "Rancho Mirage",
        time: "15 min",
        desc: "The Ritz-Carlton Rancho Mirage, Agua Caliente Casino, luxury residential",
      },
      {
        label: "La Quinta / Indian Wells",
        time: "25 min",
        desc: "La Quinta Resort, Indian Wells Tennis Garden, BNP Paribas Open",
      },
      {
        label: "Coachella / Indio",
        time: "30 min",
        desc: "Empire Polo Club, festival grounds, Stagecoach, Coachella Valley Music Festival",
      },
      {
        label: "Joshua Tree",
        time: "1 hr",
        desc: "Joshua Tree National Park, 29 Palms, desert hiking, stargazing retreats",
      },
    ],
    content: [
      "Hotels & Resorts: Parker Palm Springs, Ace Hotel & Swim Club, Colony Palms Hotel, La Quinta Resort & Club, Miramonte Indian Wells Resort.",
      "Leisure & Events: Indian Wells Tennis Garden, Coachella / Empire Polo Club, Palm Springs Art Museum, Living Desert Zoo, Agua Caliente Casino.",
      "Communities: Palm Desert, Rancho Mirage, La Quinta, Indian Wells, Cathedral City, Desert Hot Springs.",
      "Beyond the Valley: Joshua Tree National Park (1 hr), Los Angeles (2.5 hrs), San Diego (2.5 hrs). Our hourly chauffeur service is ideal for full-day desert excursions and vineyard tours in Temecula.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Palm Springs Services →",
  },
 
  pricing: {
    h2: "Palm Springs Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & festival travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during Coachella. Contact us for Los Angeles, San Diego, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// CHARLOTTE — English
// ══════════════════════════════════════════════════════════════════
{
  id: "charlotte",
  FA: "locationCharlotteFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/CharlotteLocation.png",
      alt: "Viaro black car service in Charlotte with Uptown skyline and luxury sedan approaching Charlotte Douglas International Airport.",
      caption:
        "From CLT to Bank of America Corporate Center, South End to Ballantyne—Viaro delivers seamless executive transportation across Greater Charlotte.",
    },
    h1: "Charlotte Black Car Service",
    h2: "CLT — Fixed Fares, No Surcharges, 24/7",
    description:
      "Charlotte on your schedule. Whether you are landing at Charlotte Douglas International Airport after a long flight or heading to a meeting at Ballantyne Corporate Park—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during NASCAR race weekends at Charlotte Motor Speedway or when banking conferences fill the Convention Center. Professional chauffeurs who know every route from CLT's five concourses to Uptown, South End, South Park, and the entire Queen City metro.",
    cta: { book: "Book Your Charlotte Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Charlotte's Banking, Energy & Corporate Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Charlotte Douglas International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless CLT Pickups",
    image: {
      src: "/images/CLTArrival.png",
      alt: "Viaro chauffeur at Charlotte Douglas International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every concourse exit, every banking-hour traffic pattern, and every shortcut across Greater Charlotte.",
    },
    content: [
      "CLT is American Airlines' second-largest hub—five concourses (A, B, C, D, E) in a linear terminal connected by a walkway rather than a train. One of the most operationally efficient large airports in the US, only 7 miles from downtown.",
      "Insider tip: CLT's ground transportation area is well-organized but the access road gets congested during banking-hour peaks. Viaro drivers time arrival to the minute—your driver will be at the arrivals curb when you exit baggage claim.",
      "Popular destinations from CLT: Uptown Charlotte, South End, Ballantyne, South Park, University area, Concord.",
    ],
  },
 
  whereSection: {
    h2: "Where Charlotte Moves with Viaro",
    image: {
      src: "/images/CharlotteHotels.png",
      alt: "Viaro luxury black car outside iconic Charlotte hotel providing executive transportation service in Uptown.",
      caption:
        "From Bank of America towers to NASCAR's Hall of Fame, Viaro moves Charlotte's most demanding travelers.",
    },
    items: [
      {
        label: "Uptown Charlotte",
        time: "15 min",
        desc: "Bank of America Corporate Center, Spectrum Center, Convention Center, luxury hotels",
      },
      {
        label: "South End",
        time: "20 min",
        desc: "Railyard, tech offices, boutique hotels, craft brewery corridor",
      },
      {
        label: "South Park",
        time: "20 min",
        desc: "SouthPark Mall, corporate offices, luxury residential, Piedmont Row",
      },
      {
        label: "Ballantyne",
        time: "30 min",
        desc: "Ballantyne Corporate Park, The Ballantyne Hotel, MetLife, LPL Financial",
      },
      {
        label: "University Research Park",
        time: "25 min",
        desc: "UNC Charlotte, tech campuses, IBM, Duke Energy corridor",
      },
      {
        label: "Concord / Motor Speedway",
        time: "25 min",
        desc: "Charlotte Motor Speedway, NASCAR Hall of Fame, Concord Mills",
      },
    ],
    content: [
      "Luxury Hotels: The Ritz-Carlton Charlotte, Kimpton Tryon Park Hotel, Le Méridien Charlotte, Omni Charlotte Hotel, JW Marriott Charlotte.",
      "Business Districts: Uptown Charlotte / Bank of America Corporate Center, South End / Railyard, Ballantyne Corporate Park, University Research Park, South Park.",
      "Events & Venues: Bank of America Stadium (Panthers), Spectrum Center (Hornets), NASCAR Hall of Fame, Charlotte Convention Center, PNC Music Pavilion.",
      "Beyond Charlotte: Raleigh-Durham (2.5 hrs), Asheville (2 hrs), Columbia SC (1.5 hrs), Charlotte Motor Speedway. Our hourly chauffeur service is ideal for corporate roadshows across the Carolinas.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Charlotte Services →",
  },
 
  pricing: {
    h2: "Charlotte Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during NASCAR race weekends. Contact us for Asheville, Raleigh-Durham, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// SAN DIEGO — English
// ══════════════════════════════════════════════════════════════════
{
  id: "san-diego",
  FA: "locationSanDiegoFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/SanDiegoLocation.png",
      alt: "Viaro black car service in San Diego with Downtown skyline and Coronado Bridge, luxury sedan approaching San Diego International Airport.",
      caption:
        "From SAN to La Jolla, Coronado to Rancho Santa Fe—Viaro delivers seamless executive transportation across Greater San Diego.",
    },
    h1: "San Diego Black Car Service",
    h2: "SAN · CRQ · MYF — Fixed Fares, No Surcharges, 24/7",
    description:
      "San Diego on your schedule. Whether you are landing at San Diego International Airport after a long flight, stepping off a private jet at Palomar or Montgomery-Gibbs, or heading to a meeting in the Torrey Pines biotech corridor—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Comic-Con, the Del Mar racing season, or when defense and biotech conferences fill the Convention Center. Professional chauffeurs who know every route from SAN's terminals to Downtown, La Jolla, Coronado, and the entire North County coast.",
    cta: { book: "Book Your San Diego Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by San Diego's Biotech, Defense & Hospitality Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "3 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to San Diego Airport Pickups",
    image: {
      src: "/images/SANArrival.png",
      alt: "Viaro chauffeur at San Diego International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal exit, every marine layer delay pattern, and every shortcut across Greater San Diego.",
    },
    content: [
      "San Diego means navigating 3 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "San Diego International Airport (SAN)",
      image: {
        src: "/images/SANTerminal.png",
        alt: "Viaro black car at San Diego International Airport Terminal 2 arrivals serving Downtown San Diego, La Jolla and Coronado.",
        caption:
          "SAN — one of the only single-runway major airports in the US, 3 miles from downtown. Viaro monitors marine layer conditions and times Harbor Drive entry precisely.",
      },
      content: [
        "SAN is famously compact—one of the only single-runway major airports in the US, just 3 miles from downtown. Two terminals (1 and 2) share the same building. Landings come in over Mission Hills and require visual precision that delays operations in morning marine layer.",
        "Insider tip: Marine layer (morning fog) is San Diego's most common delay cause—typically burns off by 10 AM. Viaro monitors conditions in real time. The Harbor Drive access is one-way and gets congested; your driver times entry precisely.",
        "Popular destinations from SAN: Downtown San Diego, Gaslamp, Mission Valley, La Jolla, Del Mar, Coronado.",
      ],
    },
    {
      h3: "McClellan-Palomar Airport (CRQ) — Private Aviation",
      image: {
        src: "/images/CRQTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at McClellan-Palomar Airport FBO for private jet arrival serving North County San Diego.",
        caption:
          "Palomar Airport — avoids downtown congestion entirely for North County passengers. Viaro coordinates tarmac arrivals for Rancho Santa Fe, Del Mar and Carlsbad.",
      },
      content: [
        "Palomar serves North County San Diego—Carlsbad, Encinitas, Rancho Santa Fe, and the Carmel Valley tech corridor. Avoids downtown congestion entirely for passengers heading to coastal North County.",
        "Insider tip: For passengers bound for Rancho Santa Fe, Del Mar, Carmel Valley, or Carlsbad, Palomar is significantly faster than SAN in total ground time. Viaro coordinates with FBO operations for tarmac arrivals. Where security allows, we meet you at the jet stairs.",
        "Popular destinations from CRQ: Carlsbad, Encinitas, Rancho Santa Fe, Del Mar, Carmel Valley, Oceanside.",
      ],
    },
    {
      h3: "Montgomery-Gibbs Executive Airport (MYF) — Private Aviation",
      image: {
        src: "/images/MYFTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Montgomery-Gibbs Executive Airport FBO for private jet arrival in central San Diego.",
        caption:
          "Montgomery-Gibbs — the private aviation hub for central San Diego, bypassing SAN congestion for Mission Valley and Kearny Mesa destinations.",
      },
      content: [
        "Montgomery-Gibbs is the private aviation hub for central San Diego—Mission Hills, Kearny Mesa, and the Mission Valley tech corridor.",
        "Insider tip: Viaro coordinates with FBO operations at Montgomery-Gibbs. Where security allows, we meet you at the jet stairs. For Mission Valley, Kearny Mesa, and central San Diego corporate destinations, MYF avoids SAN congestion entirely.",
        "Popular destinations from MYF: Mission Valley, Kearny Mesa, Clairemont, Serra Mesa, La Mesa.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where San Diego Moves with Viaro",
    image: {
      src: "/images/SanDiegoHotels.png",
      alt: "Viaro luxury black car outside iconic San Diego resort hotel with Pacific Ocean views providing executive transportation.",
      caption:
        "From Petco Park to Torrey Pines, Hotel del Coronado to the biotech corridor, Viaro moves San Diego's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Gaslamp",
        time: "10 min",
        desc: "Petco Park, Convention Center, Gaslamp Quarter, Pendry San Diego",
      },
      {
        label: "La Jolla / Torrey Pines",
        time: "25 min",
        desc: "Biotech corridor, Scripps Research, UCSD, Lodge at Torrey Pines",
      },
      {
        label: "Coronado",
        time: "20 min",
        desc: "Hotel del Coronado, Naval Air Station, Silver Strand, beach resorts",
      },
      {
        label: "Rancho Santa Fe",
        time: "35 min",
        desc: "Luxury estates, Fairmont Grand Del Mar, private equestrian communities",
      },
      {
        label: "Carlsbad / Encinitas",
        time: "40 min",
        desc: "Legoland, Omni La Costa, tech parks, North County beach communities",
      },
      {
        label: "Temecula",
        time: "1 hr",
        desc: "Wine country, vineyard estates, Pechanga Resort, Old Town Temecula",
      },
    ],
    content: [
      "Hotels & Resorts: Hotel del Coronado, The Lodge at Torrey Pines, Pendry San Diego, Rancho Bernardo Inn, Fairmont Grand Del Mar.",
      "Business Districts: Downtown San Diego / Gaslamp, Mission Valley corporate corridor, Carmel Valley / Sorrento Valley tech, La Jolla / Torrey Pines biotech, Carlsbad / Palomar tech park.",
      "Events & Culture: Petco Park (Padres), Snapdragon Stadium (Aztecs/FC), San Diego Convention Center, Del Mar Racetrack (seasonal), Comic-Con venues.",
      "Beyond San Diego: Tijuana / Baja California (border transfer), Los Angeles (2.5 hrs), Palm Springs (2.5 hrs), Temecula wine country (1 hr). Our hourly chauffeur service is perfect for Temecula wine tours and Baja day trips.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore San Diego Services →",
  },
 
  pricing: {
    h2: "San Diego Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Tijuana border transfers, Temecula, Los Angeles, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// NAPLES / FORT MYERS — English
// ══════════════════════════════════════════════════════════════════
{
  id: "naples",
  FA: "locationNaplesFortMyersFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/NaplesFortMyersLocation.png",
      alt: "Viaro black car service in Naples with Gulf Coast waterfront and luxury sedan approaching Southwest Florida International Airport.",
      caption:
        "From RSW to Fifth Avenue South, Port Royal to Marco Island—Viaro delivers seamless luxury transportation across Southwest Florida.",
    },
    h1: "Naples & Fort Myers Black Car Service",
    h2: "RSW · APF — Fixed Fares, No Surcharges, 24/7",
    description:
      "Naples and Fort Myers on your schedule. Whether you are landing at Southwest Florida International Airport after a long flight, stepping off a private jet at Naples Municipal, or arriving for season at your Port Royal estate—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the January through April peak season or when the I-75 Saturday morning rush brings snowbirds south. Professional chauffeurs who know every route from RSW to Naples, Marco Island, Sanibel, and the entire Southwest Florida coast.",
    cta: { book: "Book Your Southwest Florida Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Naples' Most Discerning Residents, Resort Guests & Winter Visitors",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Naples & Fort Myers Airport Pickups",
    image: {
      src: "/images/RSWArrival.png",
      alt: "Viaro chauffeur at Southwest Florida International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every seasonal traffic pattern, every Daniels Parkway bottleneck, and every route across Southwest Florida.",
    },
    content: [
      "Naples and Fort Myers mean navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless arrival from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Southwest Florida International Airport (RSW)",
      image: {
        src: "/images/RSWTerminal.png",
        alt: "Viaro black car at Southwest Florida International Airport arrivals serving Naples, Marco Island and Bonita Springs.",
        caption:
          "RSW serves both Fort Myers and Naples from a central location — Viaro times pickup to avoid the Daniels Parkway bottleneck during peak season.",
      },
      content: [
        "RSW serves both Fort Myers and Naples from a central location between the two cities. A single terminal with two concourses handles the seasonal surge of winter residents and golfers. Traffic on I-75 southbound on Saturday mornings during season is formidable.",
        "Insider tip: RSW is one of the most seasonal airports in the country—peak January through April, then quiet. During season, the rental car lot and rideshares back up quickly. Viaro drivers time pickup to avoid the Daniels Parkway bottleneck.",
        "Popular destinations from RSW: Naples, Marco Island, Bonita Springs, Estero, Cape Coral, Fort Myers Beach.",
      ],
    },
    {
      h3: "Naples Municipal Airport (APF) — Private Aviation",
      image: {
        src: "/images/APFTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Naples Municipal Airport FBO for private jet arrival serving Port Royal and Fifth Avenue South.",
        caption:
          "Naples Municipal — the private aviation gateway to one of the wealthiest zip codes in Florida. 10 minutes from Port Royal and Fifth Avenue South.",
      },
      content: [
        "Naples Municipal is the private aviation gateway to one of the wealthiest zip codes in Florida. A compact FBO operation with direct access to Fifth Avenue South and Port Royal.",
        "Insider tip: Viaro coordinates with FBO operations at Naples Municipal. Where security allows, we meet you at the jet stairs. For Port Royal, Aqualane Shores, or Fifth Avenue South destinations, APF is the only logical choice—you are 10 minutes from your destination on arrival.",
        "Popular destinations from APF: Naples / Fifth Avenue South, Port Royal, Aqualane Shores, Pelican Bay, Marco Island.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Naples & Fort Myers Move with Viaro",
    image: {
      src: "/images/NaplesFortMyersHotels.png",
      alt: "Viaro luxury black car outside iconic Naples resort hotel on the Gulf Coast providing executive transportation service.",
      caption:
        "From Port Royal estates to Marco Island resorts, Viaro moves Southwest Florida's most discerning guests.",
    },
    items: [
      {
        label: "Old Naples / Fifth Avenue",
        time: "30 min",
        desc: "Fifth Avenue South, Third Street South, Inn on Fifth, luxury boutiques",
      },
      {
        label: "Port Royal / Aqualane Shores",
        time: "35 min",
        desc: "Waterfront estates, private docks, Naples' most exclusive residential",
      },
      {
        label: "Pelican Bay",
        time: "30 min",
        desc: "Ritz-Carlton Naples, LaPlaya Resort, private beach clubs, luxury condos",
      },
      {
        label: "Marco Island",
        time: "45 min",
        desc: "Marco Island Marriott, JW Marriott, beach resorts, Rookery Bay",
      },
      {
        label: "Bonita Springs / Estero",
        time: "15 min",
        desc: "Hyatt Regency Coconut Point, Coconut Point Mall, Miromar Outlets",
      },
      {
        label: "Sanibel & Captiva",
        time: "45 min",
        desc: "Sanibel Island resorts, South Seas Island Resort, shelling beaches",
      },
    ],
    content: [
      "Hotels & Resorts: Ritz-Carlton Naples (two properties), Inn on Fifth, LaPlaya Beach & Golf Resort, Marco Island Marriott, Hyatt Regency Coconut Point.",
      "Communities: Naples / Old Naples, Marco Island, Bonita Springs, Estero, Cape Coral, Sanibel & Captiva Islands.",
      "Golf & Leisure: Tiburón Golf Club, Mediterra Country Club, Grey Oaks, Pelican Bay, Quail West. Our hourly chauffeur service is ideal for golf days and full-day island excursions.",
      "Beyond Naples: Miami (2 hrs), Fort Lauderdale (2.5 hrs), Tampa (2 hrs), Sarasota (1.5 hrs).",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Naples & Fort Myers Services →",
  },
 
  pricing: {
    h2: "Naples & Fort Myers Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even at peak season. Contact us for Miami, Tampa, Sarasota, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// TAMPA — English
// ══════════════════════════════════════════════════════════════════
{
  id: "tampa",
  FA: "locationTampaFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/TampaLocation.png",
      alt: "Viaro black car service in Tampa with Downtown skyline and Hillsborough Bay, luxury sedan approaching Tampa International Airport.",
      caption:
        "From TPA to Water Street, St. Pete to Clearwater Beach—Viaro delivers seamless executive transportation across the Tampa Bay area.",
    },
    h1: "Tampa Black Car Service",
    h2: "TPA · PIE — Fixed Fares, No Surcharges, 24/7",
    description:
      "Tampa on your schedule. Whether you are landing at Tampa International Airport after a long flight, arriving at St. Pete-Clearwater from a regional flight, or heading to a meeting in the Westshore Business District—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Super Bowl weekends, Gasparilla, or when conventions pack the Tampa Convention Center. Professional chauffeurs who know every route from TPA to Downtown, Hyde Park, St. Petersburg, Clearwater Beach, and the entire Tampa Bay region.",
    cta: { book: "Book Your Tampa Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Tampa Bay's Business Leaders, Resort Guests & Corporate Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Tampa Airport Pickups",
    image: {
      src: "/images/TPAArrival.png",
      alt: "Viaro chauffeur at Tampa International Airport loading luggage into luxury black car at Ground Transportation Level 1.",
      caption:
        "We know every Skyperson exit, every Howard Frankland traffic pattern, and every shortcut across the Tampa Bay area.",
    },
    content: [
      "Tampa means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Tampa International Airport (TPA)",
      image: {
        src: "/images/TPATerminal.png",
        alt: "Viaro black car at Tampa International Airport Ground Transportation Level 1 serving Downtown Tampa, Hyde Park and St. Petersburg.",
        caption:
          "TPA's hub-and-spoke Skyperson design brings all arrivals to a single main terminal — Viaro meets you at the correct Ground Transportation exit on Level 1.",
      },
      content: [
        "TPA is consistently rated one of the best airports in the US—a hub-and-spoke design with four airside buildings connected to the main terminal by Skyperson automated trains. Efficient, clean, and only 5 miles from downtown.",
        "Insider tip: Tampa's unique Skyperson train design means all arrivals converge at a single main terminal. Viaro drivers meet you at the correct Ground Transportation exit on Level 1—no guessing which side of the terminal.",
        "Popular destinations from TPA: Downtown Tampa, Channelside, Hyde Park, St. Petersburg, Clearwater, Brandon.",
      ],
    },
    {
      h3: "St. Pete-Clearwater International Airport (PIE)",
      image: {
        src: "/images/PIETerminal.png",
        alt: "Viaro black car at St. Pete-Clearwater International Airport arrivals serving St. Petersburg, Clearwater Beach and Dunedin.",
        caption:
          "PIE avoids the Howard Frankland Bridge crossing entirely for Pinellas County passengers — Viaro provides fixed-rate transfers to all Gulf Coast destinations.",
      },
      content: [
        "PIE serves the Pinellas County market—closer to St. Pete, Clearwater Beach, and the Gulf Coast communities than TPA. Primarily serves low-cost carriers with direct routes from northern US cities.",
        "Insider tip: For Clearwater Beach, Dunedin, or St. Pete beach corridor passengers, PIE avoids the Howard Frankland Bridge crossing entirely. Viaro provides fixed-rate transfers to all Pinellas destinations.",
        "Popular destinations from PIE: St. Petersburg, Clearwater Beach, Dunedin, Tarpon Springs, Indian Rocks Beach, Palm Harbor.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Tampa Moves with Viaro",
    image: {
      src: "/images/TampaHotels.png",
      alt: "Viaro luxury black car outside iconic Tampa hotel providing executive transportation service on the waterfront.",
      caption:
        "From Amalie Arena to Clearwater Beach, Water Street to St. Pete's waterfront, Viaro moves Tampa Bay's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Tampa / Water Street",
        time: "10 min",
        desc: "Water Street Tampa, Amalie Arena, Tampa Convention Center, Channelside",
      },
      {
        label: "Hyde Park / South Tampa",
        time: "15 min",
        desc: "Hyde Park Village, Bayshore Boulevard, luxury residential, boutique dining",
      },
      {
        label: "Westshore Business District",
        time: "5 min",
        desc: "Corporate campuses, Westshore Plaza, International Plaza, Embassy Row",
      },
      {
        label: "St. Petersburg",
        time: "30 min",
        desc: "Downtown St. Pete, The Vinoy, Dali Museum, St. Pete Pier, Beach Drive",
      },
      {
        label: "Clearwater Beach",
        time: "35 min",
        desc: "Wyndham Grand Clearwater, Sandpearl Resort, Pier 60, Gulf Coast beaches",
      },
      {
        label: "Sarasota",
        time: "1 hr",
        desc: "Downtown Sarasota, Siesta Key, Longboat Key, Ringling Museum",
      },
    ],
    content: [
      "Hotels: The Birchwood, Epicurean Hotel Tampa, The Vinoy Renaissance St. Petersburg, Wyndham Grand Clearwater Beach, Grand Hyatt Tampa Bay.",
      "Business Districts: Downtown Tampa CBD, Westshore Business District, Channelside / Water Street Tampa, St. Petersburg downtown, Clearwater / Countryside.",
      "Events & Venues: Amalie Arena (Lightning), Tropicana Field (Rays), Raymond James Stadium (Buccaneers), Tampa Convention Center, Mahaffey Theater St. Pete.",
      "Beyond Tampa: Sarasota (1 hr), Orlando (1.5 hrs), Naples (2 hrs), Fort Myers (1.5 hrs). Our hourly chauffeur service is ideal for day trips to Sarasota or full-day Gulf Coast excursions.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Tampa Services →",
  },
 
  pricing: {
    h2: "Tampa Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during Gasparilla or the Super Bowl. Contact us for Sarasota, Orlando, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// PHILADELPHIA — English
// ══════════════════════════════════════════════════════════════════
{
  id: "philadelphia",
  FA: "locationPhiladelphiaFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/PhiladelphiaLocation.png",
      alt: "Viaro black car service in Philadelphia with Center City skyline and luxury sedan approaching Philadelphia International Airport.",
      caption:
        "From PHL to Rittenhouse Square, Old City to the Main Line—Viaro delivers seamless executive transportation across Greater Philadelphia.",
    },
    h1: "Philadelphia Black Car Service",
    h2: "PHL · PNE — Fixed Fares, No Surcharges, 24/7",
    description:
      "Philadelphia on your schedule. Whether you are landing at Philadelphia International Airport after a long flight, stepping off a private jet at Northeast Philadelphia Airport, or heading to a meeting at University City—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Eagles playoff runs, the Penn Relays, or when pharma conferences fill the Convention Center. Professional chauffeurs who know every route from PHL's seven terminals to Center City, Rittenhouse, the Main Line, and beyond.",
    cta: { book: "Book Your Philadelphia Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Philadelphia's Pharma, Finance & Academic Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Philadelphia Airport Pickups",
    image: {
      src: "/images/PHLArrival.png",
      alt: "Viaro chauffeur at Philadelphia International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every concourse exit, every I-95 backup pattern, and every shortcut across Greater Philadelphia.",
    },
    content: [
      "Philadelphia means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Philadelphia International Airport (PHL)",
      image: {
        src: "/images/PHLTerminal.png",
        alt: "Viaro black car at Philadelphia International Airport Terminal F arrivals serving Center City, Rittenhouse Square and University City.",
        caption:
          "PHL's seven terminals form a semicircle — Viaro tracks your concourse and routes around I-95 backups to every Center City destination.",
      },
      content: [
        "PHL has seven terminals (A East, A West, B, C, D, E, F) arranged in a semicircle connected by a walkway. American Airlines dominates. The airport is 7 miles from Center City but I-95 and Broad Street can be unpredictable.",
        "Insider tip: PHL's terminal arrangement means F gates (international) are the furthest walk from ground transportation. Viaro tracks your concourse and times accordingly. For Society Hill, Rittenhouse, or University City destinations, your driver knows every route around the I-95 backup.",
        "Popular destinations from PHL: Center City, Old City, Rittenhouse Square, University City, Main Line suburbs, Camden NJ.",
      ],
    },
    {
      h3: "Northeast Philadelphia Airport (PNE) — Private Aviation",
      image: {
        src: "/images/PNETarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Northeast Philadelphia Airport FBO for private jet arrival serving Bucks County and north Philadelphia suburbs.",
        caption:
          "Northeast Philly Airport — avoids I-95 entirely for Bucks County passengers. Viaro coordinates tarmac arrivals for Doylestown, New Hope and Horsham.",
      },
      content: [
        "Northeast Philadelphia Airport handles private and charter aviation on the north side of the city—closer to Bucks County, Doylestown, and New Hope than PHL.",
        "Insider tip: For passengers heading to Bucks County or north Philadelphia suburbs, PNE avoids I-95 entirely. Viaro coordinates with FBO operations for tarmac arrivals. Where security allows, we meet you at the jet stairs.",
        "Popular destinations from PNE: Bucks County, Doylestown, New Hope, Horsham, Willow Grove, northeast Philadelphia.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Philadelphia Moves with Viaro",
    image: {
      src: "/images/PhiladelphiaHotels.png",
      alt: "Viaro luxury black car outside iconic Philadelphia hotel on Rittenhouse Square providing executive transportation service.",
      caption:
        "From the Liberty Bell to the Main Line, Viaro moves Philadelphia's most demanding travelers.",
    },
    items: [
      {
        label: "Center City / Market Street",
        time: "20 min",
        desc: "Comcast Center, City Hall, Pennsylvania Convention Center, luxury hotels",
      },
      {
        label: "Rittenhouse Square",
        time: "20 min",
        desc: "The Rittenhouse Hotel, Four Seasons, Walnut Street dining, luxury residential",
      },
      {
        label: "Old City / Society Hill",
        time: "25 min",
        desc: "Independence Hall, historic district, boutique hotels, Penn's Landing",
      },
      {
        label: "University City",
        time: "15 min",
        desc: "University of Pennsylvania, Drexel, Penn Medicine, biotech corridor",
      },
      {
        label: "Main Line",
        time: "30 min",
        desc: "Bryn Mawr, Wayne, Villanova, King of Prussia, corporate campuses",
      },
      {
        label: "King of Prussia",
        time: "35 min",
        desc: "KOP Mall, corporate parks, GSK, Vanguard, Upper Merion",
      },
    ],
    content: [
      "Luxury Hotels: Four Seasons Philadelphia, The Rittenhouse Hotel, Loews Philadelphia Hotel, The Logan Philadelphia, Kimpton Monaco Philadelphia.",
      "Business Districts: Center City / Market Street, Rittenhouse Square, University City / Penn/Drexel, Navy Yard, King of Prussia, Main Line suburbs.",
      "Events & Culture: Wells Fargo Center (76ers/Flyers), Citizens Bank Park (Phillies), Lincoln Financial Field (Eagles), Pennsylvania Convention Center, The Met Philadelphia.",
      "Beyond Philadelphia: Princeton NJ (1 hr), Atlantic City (1 hr), Wilmington DE (30 min), New York City (2 hrs). Our hourly chauffeur service is ideal for Princeton roadshows and Atlantic City corporate events.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Philadelphia Services →",
  },
 
  pricing: {
    h2: "Philadelphia Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during Eagles season. Contact us for Princeton, Atlantic City, New York City, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// VANCOUVER — English
// ══════════════════════════════════════════════════════════════════
{
  id: "vancouver",
  FA: "locationVancouverFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/VancouverLocation.png",
      alt: "Viaro black car service in Vancouver with Downtown skyline, mountains and Burrard Inlet, luxury sedan approaching Vancouver International Airport.",
      caption:
        "From YVR to Coal Harbour, Yaletown to West Vancouver—Viaro delivers seamless executive transportation across Greater Vancouver.",
    },
    h1: "Vancouver Black Car Service",
    h2: "YVR — Fixed Fares, No Surcharges, 24/7",
    description:
      "Vancouver on your schedule. Whether you are landing at Vancouver International Airport after a transpacific flight, connecting from a US pre-clearance flight, or heading to a meeting in the Burrard corridor—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the Vancouver International Film Festival, Canucks playoff runs, or when tech conferences fill the Convention Centre. Professional chauffeurs who know every route from YVR to Downtown, Coal Harbour, North Van, Richmond, and all the way to Whistler.",
    cta: { book: "Book Your Vancouver Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Vancouver's Tech, Film & Business Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Vancouver International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless YVR Pickups",
    image: {
      src: "/images/YVRArrival.png",
      alt: "Viaro chauffeur at Vancouver International Airport loading luggage into luxury black car at International Terminal arrivals.",
      caption:
        "We know every CBSA customs pattern, every departures-level bottleneck, and every route across Greater Vancouver.",
    },
    content: [
      "YVR is Canada's second-busiest airport—a single main terminal (Domestic and International levels) with a US Transborder terminal for pre-clearance US flights. The Canada Line SkyTrain connects YVR to downtown in 26 minutes, but for luggage and groups, black car service is the practical choice.",
      "Insider tip: International customs at YVR runs 20–45 minutes for most arrivals. Viaro monitors your flight and adjusts pickup timing. The departures level roadway is chronically congested; your driver uses the arrivals level to avoid it.",
      "Popular destinations from YVR: Downtown Vancouver, Coal Harbour, Yaletown, Gastown, West Vancouver, North Vancouver, Richmond.",
    ],
  },
 
  whereSection: {
    h2: "Where Vancouver Moves with Viaro",
    image: {
      src: "/images/VancouverHotels.png",
      alt: "Viaro luxury black car outside iconic Vancouver hotel on the waterfront with mountains in the background providing executive transportation.",
      caption:
        "From the Fairmont Pacific Rim to Whistler Village, Viaro moves Vancouver's most discerning travelers.",
    },
    items: [
      {
        label: "Downtown / Burrard Corridor",
        time: "25 min",
        desc: "Financial district, Convention Centre, luxury hotels, Robson Street",
      },
      {
        label: "Coal Harbour / Waterfront",
        time: "25 min",
        desc: "Fairmont Pacific Rim, Rosewood Hotel Georgia, Pan Pacific, Canada Place",
      },
      {
        label: "Yaletown / False Creek",
        time: "30 min",
        desc: "Tech offices, boutique hotels, BC Place, Science World",
      },
      {
        label: "West Vancouver / North Shore",
        time: "40 min",
        desc: "Capilano, Park Royal, executive residential, Cypress Mountain",
      },
      {
        label: "Burnaby / Surrey",
        time: "30 min",
        desc: "SFU, Metrotown, tech corridor, corporate parks",
      },
      {
        label: "Whistler",
        time: "2 hrs",
        desc: "Whistler Blackcomb, Four Seasons Whistler, Fairmont Chateau Whistler",
      },
    ],
    content: [
      "Luxury Hotels: Four Seasons Vancouver, Rosewood Hotel Georgia, Fairmont Pacific Rim, The Sutton Place Hotel, Shangri-La Vancouver.",
      "Business Districts: Downtown Vancouver / Burrard corridor, Coal Harbour / Waterfront, Yaletown / False Creek, Burnaby / Metrotown, Surrey tech corridor, Richmond.",
      "Events & Culture: Rogers Arena (Canucks/Concerts), BC Place (Whitecaps/Lions), Vancouver Convention Centre, Granville Island, Vancouver International Film Festival venues.",
      "Beyond Vancouver: Whistler (2 hrs), Victoria BC (ferry connection), Seattle WA (3 hrs), Kelowna (4 hrs). Our hourly chauffeur service is perfect for Sea-to-Sky Highway excursions and full-day Whistler ski trips.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Vancouver Services →",
  },
 
  pricing: {
    h2: "Vancouver Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Whistler, Victoria, Seattle, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// MINNEAPOLIS — English
// ══════════════════════════════════════════════════════════════════
{
  id: "minneapolis",
  FA: "locationMinneapolisFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/MinneapolisLocation.png",
      alt: "Viaro black car service in Minneapolis with Downtown skyline and luxury sedan approaching Minneapolis-Saint Paul International Airport.",
      caption:
        "From MSP to the IDS Center, Uptown to Eden Prairie—Viaro delivers seamless executive transportation across the Twin Cities metro.",
    },
    h1: "Minneapolis Black Car Service",
    h2: "MSP · FCM — Fixed Fares, No Surcharges, 24/7",
    description:
      "Minneapolis on your schedule. Whether you are landing at Minneapolis-Saint Paul International Airport after a long flight, stepping off a private jet at Flying Cloud, or heading to a meeting along the I-494 corridor—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Vikings playoff runs, the Super Bowl at US Bank Stadium, or when a blizzard hits and surge pricing skyrockets. Professional chauffeurs who know every route from MSP's two terminals to Downtown, St. Paul, Edina, Eden Prairie, and the entire Twin Cities metro.",
    cta: { book: "Book Your Minneapolis Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Minneapolis's Corporate, Healthcare & Retail Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Minneapolis Airport Pickups",
    image: {
      src: "/images/MSPArrival.png",
      alt: "Viaro chauffeur at Minneapolis-Saint Paul International Airport loading luggage into luxury black car at Terminal 1 arrivals.",
      caption:
        "We know every terminal exit, every winter weather workaround, and every shortcut across the Twin Cities.",
    },
    content: [
      "Minneapolis means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Minneapolis-Saint Paul International Airport (MSP)",
      image: {
        src: "/images/MSPTerminal.png",
        alt: "Viaro black car at Minneapolis-Saint Paul International Airport Terminal 1 arrivals serving Downtown Minneapolis, St. Paul and Edina.",
        caption:
          "MSP's Terminal 1 and Terminal 2 are on opposite sides of the airport — Viaro tracks your terminal and positions as close to the door as possible in Minnesota winter.",
      },
      content: [
        "MSP is Delta's second hub—Terminal 1 (Lindbergh) handles Delta and most carriers; Terminal 2 (Humphrey) handles Southwest and charter. The two terminals are connected by a light rail that also runs to downtown Minneapolis.",
        "Insider tip: Terminal 2 has a separate ground transportation area completely across the airport from Terminal 1. Viaro tracks your terminal assignment and positions at the correct arrivals exit. In Minnesota winter, your driver will be as close to the door as possible.",
        "Popular destinations from MSP: Downtown Minneapolis, Uptown, St. Paul, Edina, Eden Prairie, Bloomington, Plymouth.",
      ],
    },
    {
      h3: "Flying Cloud Airport (FCM) — Private Aviation",
      image: {
        src: "/images/FCMTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Flying Cloud Airport FBO for private jet arrival serving Eden Prairie and the I-494 corridor.",
        caption:
          "Flying Cloud Airport — private aviation for the southwest Minneapolis suburbs, right on the I-494 corporate corridor.",
      },
      content: [
        "Flying Cloud serves the southwest Minneapolis suburbs—Eden Prairie, Minnetonka, and the corporate corridor along I-494. Private aviation without driving to MSP.",
        "Insider tip: Viaro coordinates with FBO operations at Flying Cloud. Where security allows, we meet you at the jet stairs. For corporate passengers heading to the I-494 corridor or Eden Prairie tech companies, FCM is meaningfully faster than MSP.",
        "Popular destinations from FCM: Eden Prairie, Minnetonka, Chaska, Chanhassen, Shakopee, I-494 corporate corridor.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Minneapolis Moves with Viaro",
    image: {
      src: "/images/MinneapolisHotels.png",
      alt: "Viaro luxury black car outside iconic Minneapolis hotel providing executive transportation service Downtown.",
      caption:
        "From the IDS Center to US Bank Stadium, Viaro moves the Twin Cities' most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Minneapolis",
        time: "20 min",
        desc: "IDS Center, Target Field, Target Center, Minneapolis Convention Center",
      },
      {
        label: "Uptown / Lyndale",
        time: "25 min",
        desc: "Boutique hotels, creative offices, Lake Calhoun, Lyn-Lake corridor",
      },
      {
        label: "St. Paul",
        time: "30 min",
        desc: "Xcel Energy Center, State Capitol, Union Depot, downtown St. Paul",
      },
      {
        label: "Edina / Bloomington",
        time: "15 min",
        desc: "Mall of America, Southdale Center, corporate offices, luxury residential",
      },
      {
        label: "Eden Prairie / I-494",
        time: "20 min",
        desc: "UnitedHealth Group, Boston Scientific, General Mills, corporate corridor",
      },
      {
        label: "Plymouth / Minnetonka",
        time: "25 min",
        desc: "Cargill HQ, Xcel Energy, suburban corporate campuses, luxury residential",
      },
    ],
    content: [
      "Luxury Hotels: Four Seasons Minneapolis, The Marquette Hotel, Loews Minneapolis Hotel, Graduate Minneapolis, W Minneapolis.",
      "Business: Downtown Minneapolis / IDS Center, Uptown / Lyndale, St. Paul downtown, I-494 corporate corridor, Eden Prairie tech campus, Plymouth.",
      "Events: Target Center (Timberwolves/Lynx), Target Field (Twins), US Bank Stadium (Vikings), Xcel Energy Center (Wild, St. Paul), Minneapolis Convention Center.",
      "Beyond Minneapolis: St. Paul, Duluth (2.5 hrs), Rochester MN (1.5 hrs), Mall of America / Bloomington. Our hourly chauffeur service is ideal for corporate roadshows across the Twin Cities metro.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Minneapolis Services →",
  },
 
  pricing: {
    h2: "Minneapolis Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even in a Minnesota blizzard. Contact us for Rochester, Duluth, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// HONOLULU — English
// ══════════════════════════════════════════════════════════════════
{
  id: "honolulu",
  FA: "locationHonoluluFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/HonoluluLocation.png",
      alt: "Viaro black car service in Honolulu with Diamond Head crater and Waikiki beachfront skyline, luxury sedan approaching Daniel K. Inouye International Airport.",
      caption:
        "From HNL to Waikiki, Ko Olina to the North Shore—Viaro delivers seamless luxury transportation across Oahu.",
    },
    h1: "Honolulu Black Car Service",
    h2: "HNL — Fixed Fares, No Surcharges, 24/7",
    description:
      "Honolulu on your schedule. Whether you are landing at Daniel K. Inouye International Airport after a transpacific flight, arriving from the mainland for a resort stay, or heading to a meeting at the Hawaii Convention Center—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during peak season, major conventions, or when Pearl Harbor commemorations bring visitors from across the world. Professional chauffeurs who know every route from HNL to Waikiki, Kahala, Ko Olina, and around the entire island of Oahu.",
    cta: { book: "Book Your Honolulu Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Honolulu's Resort Guests, Executives & Island Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Daniel K. Inouye International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless HNL Pickups",
    image: {
      src: "/images/HNLArrival.png",
      alt: "Viaro chauffeur at Daniel K. Inouye International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal exit, every H-1 traffic pattern, and every route around Oahu.",
    },
    content: [
      "HNL is Hawaii's main hub—multiple terminals for mainland US, interisland, and international flights spread across a large footprint. The airport is 6 miles from Waikiki but H-1 traffic during peak periods can double that in travel time.",
      "Insider tip: International arrivals and interisland connections are on opposite ends of the terminal complex. Viaro tracks your flight and concourse and positions at the correct ground transportation exit. The H-1 to Waikiki has a consistent rush-hour pattern—your driver plans for it.",
      "Popular destinations from HNL: Waikiki, Honolulu downtown, Kahala, Hawaii Kai, Ko Olina, North Shore.",
    ],
  },
 
  whereSection: {
    h2: "Where Honolulu Moves with Viaro",
    image: {
      src: "/images/HonoluluHotels.png",
      alt: "Viaro luxury black car outside iconic Waikiki resort hotel with Diamond Head and Pacific Ocean backdrop providing executive transportation.",
      caption:
        "From the Royal Hawaiian to Ko Olina's Four Seasons, Viaro moves Oahu's most discerning guests.",
    },
    items: [
      {
        label: "Waikiki",
        time: "20 min",
        desc: "Halekulani, Royal Hawaiian, Moana Surfrider, Kalakaua Avenue",
      },
      {
        label: "Downtown Honolulu",
        time: "15 min",
        desc: "Hawaii Convention Center, Aloha Tower, financial district, Chinatown",
      },
      {
        label: "Kahala / Diamond Head",
        time: "25 min",
        desc: "The Kahala Hotel & Resort, Diamond Head State Monument, luxury residential",
      },
      {
        label: "Hawaii Kai",
        time: "35 min",
        desc: "Marina communities, Hanauma Bay, east Honolulu luxury residential",
      },
      {
        label: "Ko Olina",
        time: "40 min",
        desc: "Four Seasons Ko Olina, Aulani Disney Resort, lagoon communities",
      },
      {
        label: "North Shore",
        time: "1 hr",
        desc: "Haleiwa town, Turtle Bay Resort, Sunset Beach, surf competitions",
      },
    ],
    content: [
      "Hotels: Halekulani Hotel, Four Seasons Resort Oahu at Ko Olina, The Kahala Hotel & Resort, Moana Surfrider, Royal Hawaiian.",
      "Districts & Communities: Waikiki, Downtown Honolulu, Kahala / Diamond Head, Hawaii Kai, Ko Olina Resort, North Shore (Haleiwa).",
      "Activities & Venues: Pearl Harbor / USS Arizona Memorial, Diamond Head State Monument, Hawaii Convention Center, Aloha Stadium, Manoa Valley.",
      "Beyond Honolulu: Ko Olina (40 min), North Shore (1 hr), Kailua / Kaneohe (30 min). Our hourly chauffeur service is ideal for full-day island tours and multi-stop excursions around Oahu.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Honolulu Services →",
  },
 
  pricing: {
    h2: "Honolulu Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Ko Olina, North Shore, full-day island tours, and custom route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// DETROIT — English
// ══════════════════════════════════════════════════════════════════
{
  id: "detroit",
  FA: "locationDetroitFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/DetroitLocation.png",
      alt: "Viaro black car service in Detroit with Downtown skyline and Detroit River, luxury sedan approaching Detroit Metropolitan Airport.",
      caption:
        "From DTW to Campus Martius, Bloomfield Hills to Ann Arbor—Viaro delivers seamless executive transportation across Greater Detroit.",
    },
    h1: "Detroit Black Car Service",
    h2: "DTW · PTK — Fixed Fares, No Surcharges, 24/7",
    description:
      "Detroit on your schedule. Whether you are landing at Detroit Metropolitan Airport after a long flight, stepping off a private jet at Oakland County International, or heading to a meeting at Ford HQ in Dearborn—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the North American International Auto Show, Lions or Red Wings playoff runs, or when automotive supplier conferences fill TCF Center. Professional chauffeurs who know every route from DTW's McNamara Terminal to Downtown, Midtown, the automotive corridor, and Ann Arbor.",
    cta: { book: "Book Your Detroit Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Detroit's Automotive, Tech & Healthcare Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Detroit Airport Pickups",
    image: {
      src: "/images/DTWArrival.png",
      alt: "Viaro chauffeur at Detroit Metropolitan Airport loading luggage into luxury black car at McNamara Terminal arrivals.",
      caption:
        "We know every gate assignment, every I-94 pattern, and every shortcut across Greater Detroit.",
    },
    content: [
      "Detroit means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Detroit Metropolitan Airport (DTW)",
      image: {
        src: "/images/DTWTerminal.png",
        alt: "Viaro black car at Detroit Metropolitan Airport McNamara Terminal arrivals serving Downtown Detroit, Troy and Ann Arbor.",
        caption:
          "McNamara Terminal is one of the longest in the world — Viaro tracks your gate assignment so your driver is timed to the minute.",
      },
      content: [
        "DTW is Delta's largest hub—two terminals (McNamara and North) connected by the MTC People Mover. McNamara handles Delta and most major carriers; North handles most other airlines. The airport is 20 miles from downtown Detroit via I-94.",
        "Insider tip: The McNamara Terminal is one of the longest in the world—gates at one end are a genuine 20-minute walk from ground transportation. Viaro tracks your gate assignment and times accordingly.",
        "Popular destinations from DTW: Downtown Detroit, Midtown, Troy, Bloomfield Hills, Ann Arbor, Dearborn, Auburn Hills.",
      ],
    },
    {
      h3: "Oakland County International Airport (PTK) — Private Aviation",
      image: {
        src: "/images/PTKTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Oakland County International Airport FBO for private jet arrival serving Bloomfield Hills and Auburn Hills.",
        caption:
          "Oakland County International — private aviation for the affluent north metro, avoiding the 20-mile DTW drive for Bloomfield Hills and Birmingham passengers.",
      },
      content: [
        "Oakland County International serves the affluent north metro—Pontiac, Auburn Hills, Bloomfield Hills, and the Oakland County corridor.",
        "Insider tip: For private passengers heading to Bloomfield Hills, Birmingham, or the Oakland County corporate corridor, PTK avoids the 20-mile DTW drive. Viaro coordinates with FBO operations for tarmac arrivals. Where security allows, we meet you at the jet stairs.",
        "Popular destinations from PTK: Bloomfield Hills, Birmingham, Auburn Hills, Pontiac, Clarkston, Waterford.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Detroit Moves with Viaro",
    image: {
      src: "/images/DetroitHotels.png",
      alt: "Viaro luxury black car outside iconic Detroit hotel providing executive transportation service in Downtown.",
      caption:
        "From the Renaissance Center to Ford HQ, Viaro moves Detroit's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Detroit / Campus Martius",
        time: "25 min",
        desc: "GM Renaissance Center, Little Caesars Arena, TCF Center, luxury hotels",
      },
      {
        label: "Midtown / Wayne State",
        time: "25 min",
        desc: "Wayne State University, Detroit Medical Center, Henry Ford Health, arts district",
      },
      {
        label: "Dearborn / Ford HQ",
        time: "15 min",
        desc: "Ford Motor Company headquarters, Henry Ford Museum, Dearborn corporate corridor",
      },
      {
        label: "Troy / Big Beaver",
        time: "30 min",
        desc: "Stellantis, FCA corridor, Somerset Collection, Troy corporate campuses",
      },
      {
        label: "Bloomfield Hills / Birmingham",
        time: "35 min",
        desc: "Townsend Hotel, Cranbrook, luxury residential, upscale dining corridor",
      },
      {
        label: "Ann Arbor",
        time: "45 min",
        desc: "University of Michigan, Michigan Medicine, tech startups, Graduate Ann Arbor",
      },
    ],
    content: [
      "Luxury Hotels: Shinola Hotel Detroit, The Detroit Foundation Hotel, Westin Book Cadillac, Graduate Ann Arbor, Townsend Hotel Birmingham.",
      "Business Districts: Downtown Detroit CBD / Campus Martius, Midtown / Wayne State, Troy / Big Beaver corridor, Dearborn / Ford HQ, Auburn Hills / FCA corridor, Ann Arbor tech.",
      "Events: Little Caesars Arena (Red Wings/Pistons), Comerica Park (Tigers), Ford Field (Lions), TCF Center / Cobo Center, Michigan Stadium Ann Arbor.",
      "Beyond Detroit: Ann Arbor (45 min), Windsor ON (cross-border), Flint (1 hr), Lansing (1.5 hrs). Our hourly chauffeur service is ideal for automotive supplier roadshows across the Detroit metro.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Detroit Services →",
  },
 
  pricing: {
    h2: "Detroit Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during the Auto Show. Contact us for Ann Arbor, Windsor, Lansing, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// SALT LAKE CITY — English
// ══════════════════════════════════════════════════════════════════
{
  id: "salt-lake-city",
  FA: "locationSaltLakeCityFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/SaltLakeCityLocation.png",
      alt: "Viaro black car service in Salt Lake City with Wasatch Mountains backdrop and luxury sedan approaching Salt Lake City International Airport.",
      caption:
        "From SLC to Temple Square, Park City to Deer Valley—Viaro delivers seamless executive transportation across the Wasatch Front and Utah's premier ski resorts.",
    },
    h1: "Salt Lake City Black Car Service",
    h2: "SLC — Fixed Fares, No Surcharges, 24/7",
    description:
      "Salt Lake City on your schedule. Whether you are landing at Salt Lake City International Airport after a long flight, heading to a meeting in Silicon Slopes, or racing up I-80 for a powder day at Deer Valley—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during ski season, the Sundance Film Festival, or when tech conferences fill the Salt Palace. Professional chauffeurs who know every condition on the roads to Park City, Little Cottonwood Canyon, and all five major Wasatch ski resorts.",
    cta: { book: "Book Your Salt Lake City Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Salt Lake City's Tech, Business & Ski Resort Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Salt Lake City International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless SLC Pickups",
    image: {
      src: "/images/SLCArrival.png",
      alt: "Viaro chauffeur at Salt Lake City International Airport loading luggage into luxury black car at new terminal arrivals with Wasatch peaks visible.",
      caption:
        "We know every resort road condition, every Silicon Slopes shortcut, and every route across the Wasatch Front.",
    },
    content: [
      "SLC recently opened a brand-new terminal—the Gateway project replaced the old terminals with a single modern facility in 2024. Delta's Western hub. Only 5 miles from downtown, with direct I-80 access to the Wasatch ski resorts.",
      "Insider tip: SLC is the gateway to the Greatest Snow on Earth. For ski season travelers, your driver knows every condition on I-80 to Park City and Little Cottonwood Canyon—the same road that can close in a whiteout. We monitor UDOT road conditions in real time.",
      "Popular destinations from SLC: Downtown Salt Lake City, Sugar House, Murray, Sandy, Draper, Park City (45 min), Deer Valley.",
    ],
  },
 
  whereSection: {
    h2: "Where Salt Lake City Moves with Viaro",
    image: {
      src: "/images/SaltLakeCityHotels.png",
      alt: "Viaro luxury black car outside iconic Park City ski resort with Wasatch Mountains providing executive transportation.",
      caption:
        "From Silicon Slopes boardrooms to Deer Valley ski-in/ski-out lodges, Viaro moves Utah's most discerning travelers.",
    },
    items: [
      {
        label: "Downtown SLC",
        time: "10 min",
        desc: "Temple Square, Grand America Hotel, Salt Palace Convention Center, Gateway",
      },
      {
        label: "Silicon Slopes / Lehi",
        time: "30 min",
        desc: "Adobe, Qualtrics, Domo, Overstock, I-15 tech corridor",
      },
      {
        label: "Park City",
        time: "45 min",
        desc: "Main Street, Park City Mountain, Waldorf Astoria, Sundance Film Festival",
      },
      {
        label: "Deer Valley",
        time: "50 min",
        desc: "Stein Eriksen Lodge, Montage Deer Valley, St. Regis, ski-in/ski-out luxury",
      },
      {
        label: "Alta / Snowbird",
        time: "40 min",
        desc: "Little Cottonwood Canyon, Cliff Lodge, Alta ski area, world-class powder",
      },
      {
        label: "Brighton / Solitude",
        time: "45 min",
        desc: "Big Cottonwood Canyon, family resorts, backcountry access",
      },
    ],
    content: [
      "Hotels: Grand America Hotel, Stein Eriksen Lodge (Park City), Montage Deer Valley, St. Regis Deer Valley, Waldorf Astoria Park City.",
      "Business: Downtown SLC CBD, South Jordan / Bangerter corridor, Lehi / Silicon Slopes tech park, Draper tech campus, Provo (1 hr).",
      "Ski Resorts: Park City Mountain (45 min), Deer Valley (50 min), Alta (45 min via Little Cottonwood), Snowbird (40 min), Brighton / Solitude (45 min). Our hourly chauffeur service is perfect for multi-resort ski days and Sundance Film Festival shuttles.",
      "Beyond SLC: Provo (45 min), Ogden (45 min), Moab (4 hrs—scenic). Contact us for full-day excursions to Arches and Zion National Parks.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Salt Lake City Services →",
  },
 
  pricing: {
    h2: "Salt Lake City Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for ski gear",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & ski resort travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even on a powder day. Contact us for Park City, Deer Valley, resort transfers, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
 // ══════════════════════════════════════════════════════════════════
// JACKSON HOLE — English
// ══════════════════════════════════════════════════════════════════
{
  id: "jackson-hole",
  FA: "locationJacksonHoleFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/JacksonHoleLocation.png",
      alt: "Viaro black car service in Jackson Hole with Grand Teton peaks and luxury SUV approaching Jackson Hole Airport inside Grand Teton National Park.",
      caption:
        "From JAC to Teton Village, Jackson town square to Yellowstone—Viaro delivers seamless luxury transportation across one of America's most spectacular destinations.",
    },
    h1: "Jackson Hole Black Car Service",
    h2: "JAC — Fixed Fares, No Surcharges, 24/7",
    description:
      "Jackson Hole on your schedule. Whether you are landing at Jackson Hole Airport after a direct flight from a major hub, arriving for ski season at JHMR, or heading to a private ranch in the Snake River corridor—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during peak ski weekends, the Jackson Hole Wildlife Film Festival, or when mountain weather delays flights and demand spikes. Professional chauffeurs with the right vehicles for winter road conditions who know every route from JAC to Teton Village, Wilson, Moose, and beyond.",
    cta: { book: "Book Your Jackson Hole Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Jackson Hole's Most Discerning Resort Guests & Private Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Jackson Hole Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless JAC Pickups",
    image: {
      src: "/images/JACArrival.png",
      alt: "Viaro chauffeur at Jackson Hole Airport loading luggage into luxury black SUV at terminal arrivals with Grand Teton peaks visible.",
      caption:
        "We know every mountain weather pattern, every resort road condition, and every route across Jackson Hole and the Tetons.",
    },
    content: [
      "JAC is the only commercial airport inside a national park—Grand Teton National Park surrounds the runway on three sides. Direct service from major hubs during ski season. Cancellations from mountain weather are common; Viaro monitors conditions proactively.",
      "Insider tip: JAC has a single small terminal with no room for vehicle staging. Viaro times pickup precisely—your driver parks and waits, not circles. In deep winter, your car will be warm and ready at the curb when you exit.",
      "Popular destinations from JAC: Jackson town square, Teton Village / Ski Resort, Wilson, Moose, Snake River corridor.",
    ],
  },
 
  whereSection: {
    h2: "Where Jackson Hole Moves with Viaro",
    image: {
      src: "/images/JacksonHoleHotels.png",
      alt: "Viaro luxury black SUV outside Four Seasons Resort Jackson Hole with Grand Teton peaks providing executive mountain transportation.",
      caption:
        "From Teton Village ski-in/ski-out lodges to private Snake River ranches, Viaro moves Jackson Hole's most discerning guests.",
    },
    items: [
      {
        label: "Teton Village",
        time: "20 min",
        desc: "Four Seasons, Hotel Terra, Jackson Hole Mountain Resort base, ski-in/ski-out",
      },
      {
        label: "Jackson Town Square",
        time: "10 min",
        desc: "Rusty Parrot Lodge, downtown restaurants, galleries, antler arch square",
      },
      {
        label: "Amangani / East Gros Ventre",
        time: "15 min",
        desc: "Amangani resort, Shooting Star, luxury ridge estates, canyon views",
      },
      {
        label: "Wilson / Snake River",
        time: "15 min",
        desc: "Snake River corridor, private ranches, fishing access, Stagecoach Bar",
      },
      {
        label: "Moose / Grand Teton NP",
        time: "20 min",
        desc: "Grand Teton National Park entrance, Murie Ranch, Laurance Rockefeller Preserve",
      },
      {
        label: "Yellowstone",
        time: "1.5 hrs",
        desc: "South Entrance, Old Faithful, Grand Prismatic Spring, wildlife tours",
      },
    ],
    content: [
      "Hotels & Lodges: Four Seasons Resort Jackson Hole, Amangani, Shooting Star, Hotel Terra Jackson Hole, Rusty Parrot Lodge.",
      "Resort Areas: Teton Village (ski resort base), Jackson town square, Wilson / Snake River, Moose / Grand Teton NP, Gros Ventre Junction.",
      "Activities: Jackson Hole Mountain Resort, Grand Teton National Park, Yellowstone National Park (1.5 hrs north), Snake River float trips, National Elk Refuge.",
      "Surrounding Area: Alpine WY, Driggs ID (Grand Targhee), Victor ID, Star Valley. Our hourly chauffeur service is ideal for full-day Yellowstone excursions and multi-resort ski days including Grand Targhee.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Jackson Hole Services →",
  },
 
  pricing: {
    h2: "Jackson Hole Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for ski gear",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & resort travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during peak powder season. Contact us for Yellowstone, Grand Targhee, Star Valley, and full-day excursion quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// RALEIGH-DURHAM — English
// ══════════════════════════════════════════════════════════════════
{
  id: "raleigh-durham",
  FA: "locationRaleighDurhamFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/RaleighDurhamLocation.png",
      alt: "Viaro black car service in Raleigh-Durham with Downtown Raleigh skyline and luxury sedan approaching Raleigh-Durham International Airport.",
      caption:
        "From RDU to Research Triangle Park, Downtown Raleigh to Chapel Hill—Viaro delivers seamless executive transportation across the Research Triangle.",
    },
    h1: "Raleigh-Durham Black Car Service",
    h2: "RDU — Fixed Fares, No Surcharges, 24/7",
    description:
      "Raleigh-Durham on your schedule. Whether you are landing at Raleigh-Durham International Airport after a long flight or heading to a meeting at Research Triangle Park—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Duke vs. Carolina basketball weekends, the NC State Fair, or when pharma and tech conferences fill the Raleigh Convention Center. Professional chauffeurs who know every route from RDU's two terminals to Downtown Raleigh, Durham, Chapel Hill, RTP, and the entire Triangle metro.",
    cta: { book: "Book Your Raleigh-Durham Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by the Triangle's Pharma, Tech & University Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Raleigh-Durham International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless RDU Pickups",
    image: {
      src: "/images/RDUArrival.png",
      alt: "Viaro chauffeur at Raleigh-Durham International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every terminal exit, every RTP connector shortcut, and every route across the Research Triangle.",
    },
    content: [
      "RDU serves the Research Triangle—two terminals (1 and 2) connected by a walkway, 14 miles from both downtown Raleigh and downtown Durham. American and Southwest dominate. The airport sits on the boundary of Wake and Durham counties, equidistant from both cities.",
      "Insider tip: Terminal 1 and Terminal 2 have separate ground transportation pickup zones. Viaro tracks your terminal and meets you at the correct exit. For Research Triangle Park (RTP), your driver takes the airport connector directly to Davis Drive—no extra highway time.",
      "Popular destinations from RDU: Downtown Raleigh, Durham, Chapel Hill, Research Triangle Park, Cary, Apex.",
    ],
  },
 
  whereSection: {
    h2: "Where Raleigh-Durham Moves with Viaro",
    image: {
      src: "/images/RaleighDurhamHotels.png",
      alt: "Viaro luxury black car outside iconic Raleigh-Durham hotel providing executive transportation service.",
      caption:
        "From Research Triangle Park boardrooms to Duke University Medical Center, Viaro moves the Triangle's most demanding travelers.",
    },
    items: [
      {
        label: "Research Triangle Park",
        time: "10 min",
        desc: "IBM, Cisco, GSK, Biogen, EPA campus, Davis Drive corridor",
      },
      {
        label: "Downtown Raleigh",
        time: "20 min",
        desc: "PNC Arena, Raleigh Convention Center, Fayetteville Street, luxury hotels",
      },
      {
        label: "Durham / American Tobacco",
        time: "20 min",
        desc: "American Tobacco Campus, Duke University, Durham Bulls, 21c Museum Hotel",
      },
      {
        label: "Chapel Hill / UNC",
        time: "25 min",
        desc: "University of North Carolina, UNC Health, Dean Dome, Franklin Street",
      },
      {
        label: "Cary / Morrisville",
        time: "15 min",
        desc: "SAS Institute HQ, Morrisville tech parks, Cary corporate corridor",
      },
      {
        label: "Umstead / North Raleigh",
        time: "15 min",
        desc: "Umstead Hotel and Spa, North Hills, Crabtree Valley, luxury residential",
      },
    ],
    content: [
      "Luxury Hotels: Umstead Hotel and Spa, 21c Museum Hotel Durham, Durham Hotel, The Cardinal Hotel Raleigh, Graduate Chapel Hill.",
      "Business & Research: Research Triangle Park (RTP), Downtown Raleigh CBD, Durham / American Tobacco Campus, Chapel Hill / UNC corridor, Cary / Morrisville tech, Apex.",
      "Events & Culture: PNC Arena (Hurricanes/NC State), Durham Performing Arts Center, Duke University / Duke Health, North Carolina State Fair (seasonal), Raleigh Convention Center.",
      "Beyond RDU: Charlotte (2.5 hrs), Wilmington (2.5 hrs), Chapel Hill / Carrboro, Greensboro (1 hr). Our hourly chauffeur service is ideal for corporate roadshows across the Triangle.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Raleigh-Durham Services →",
  },
 
  pricing: {
    h2: "Raleigh-Durham Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during Duke-Carolina weekend. Contact us for Charlotte, Wilmington, Greensboro, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// NEW ORLEANS — English
// ══════════════════════════════════════════════════════════════════
{
  id: "new-orleans",
  FA: "locationNewOrleansFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/NewOrleansLocation.png",
      alt: "Viaro black car service in New Orleans with French Quarter and Mississippi River, luxury sedan approaching Louis Armstrong New Orleans International Airport.",
      caption:
        "From MSY to the French Quarter, Garden District to the Convention Center—Viaro delivers seamless executive transportation across the Crescent City.",
    },
    h1: "New Orleans Black Car Service",
    h2: "MSY · NEW — Fixed Fares, No Surcharges, 24/7",
    description:
      "New Orleans on your schedule. Whether you are landing at Louis Armstrong New Orleans International Airport after a long flight, stepping off a private jet at Lakefront Airport, or heading to a meeting in the CBD—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Mardi Gras, Jazz Fest, the Sugar Bowl, or when the Ernest N. Morial Convention Center fills for a major conference. Professional chauffeurs who know every route from MSY to the French Quarter, Garden District, Uptown, and every neighborhood in between.",
    cta: { book: "Book Your New Orleans Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by New Orleans's Convention Groups, Festival Travelers & Business Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to New Orleans Airport Pickups",
    image: {
      src: "/images/MSYArrival.png",
      alt: "Viaro chauffeur at Louis Armstrong New Orleans International Airport loading luggage into luxury black car at new terminal arrivals.",
      caption:
        "We know every festival traffic pattern, every I-10 workaround, and every route across the Crescent City.",
    },
    content: [
      "New Orleans means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Louis Armstrong New Orleans International Airport (MSY)",
      image: {
        src: "/images/MSYTerminal.png",
        alt: "Viaro black car at Louis Armstrong New Orleans International Airport new terminal arrivals serving the French Quarter, Garden District and CBD.",
        caption:
          "MSY's 2019 terminal is modern and efficient — but Mardi Gras and Jazz Fest create some of the most extreme airport congestion in the country. Viaro pre-positions during festival periods.",
      },
      content: [
        "MSY opened a brand new terminal in 2019—modern, efficient, and connected to the city via the Airport-Downtown Connector transit line. The airport is 13 miles from the French Quarter but I-10 through Metairie can be slow during peak hours.",
        "Insider tip: Mardi Gras, Jazz Fest, and the Sugar Bowl create some of the most extreme airport congestion in the country. Viaro monitors event calendars and pre-positions vehicles. Book early during festival periods.",
        "Popular destinations from MSY: French Quarter, Garden District, Central Business District, Uptown, Mid-City, Metairie.",
      ],
    },
    {
      h3: "New Orleans Lakefront Airport (NEW) — Private Aviation",
      image: {
        src: "/images/NEWTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at New Orleans Lakefront Airport FBO for private jet arrival serving the French Quarter and CBD.",
        caption:
          "Lakefront Airport — on Lake Pontchartrain, 20–30 minutes closer to the French Quarter than MSY. The logical private aviation choice for central New Orleans.",
      },
      content: [
        "Lakefront is the private aviation option for central New Orleans—on Lake Pontchartrain, much closer to the French Quarter and CBD than MSY.",
        "Insider tip: Viaro coordinates with FBO operations at Lakefront. Where security allows, we meet you at the jet stairs. For private passengers heading to the French Quarter, CBD, or Garden District, Lakefront saves 20–30 minutes over MSY.",
        "Popular destinations from NEW: French Quarter, CBD / Warehouse District, Marigny, Bywater, Gentilly, Lakeview.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where New Orleans Moves with Viaro",
    image: {
      src: "/images/NewOrleansHotels.png",
      alt: "Viaro luxury black car outside iconic New Orleans hotel on the French Quarter providing executive transportation service.",
      caption:
        "From Bourbon Street to the Superdome, Windsor Court to the Convention Center, Viaro moves New Orleans's most demanding travelers.",
    },
    items: [
      {
        label: "French Quarter",
        time: "25 min",
        desc: "Hotel Monteleone, Audubon Cottages, Bourbon Street, Jackson Square",
      },
      {
        label: "Garden District",
        time: "30 min",
        desc: "Magazine Street, Commander's Palace, historic mansions, St. Charles streetcar",
      },
      {
        label: "CBD / Warehouse Arts District",
        time: "25 min",
        desc: "Windsor Court, Roosevelt Hotel, Convention Center, Smoothie King Center",
      },
      {
        label: "Uptown / Magazine Street",
        time: "35 min",
        desc: "Tulane University, Loyola, Audubon Park, upscale dining corridor",
      },
      {
        label: "Marigny / Bywater",
        time: "30 min",
        desc: "Frenchmen Street music venues, boutique hotels, creative district",
      },
      {
        label: "Metairie",
        time: "15 min",
        desc: "Corporate offices, suburban hotels, Lake Pontchartrain corridor",
      },
    ],
    content: [
      "Luxury Hotels: Windsor Court Hotel, Hotel Monteleone, Ritz-Carlton New Orleans, Roosevelt New Orleans, Audubon Cottages.",
      "Districts: French Quarter, Garden District, Central Business District / Warehouse Arts, Magazine Street / Uptown, Marigny / Bywater, Metairie.",
      "Events: Caesars Superdome (Saints), Smoothie King Center (Pelicans), Ernest N. Morial Convention Center, Jazz & Heritage Festival grounds, Mardi Gras routes.",
      "Beyond New Orleans: Baton Rouge (1.5 hrs), Gulf Coast (2 hrs), Lafayette (2 hrs), Mississippi Gulf Coast (1.5 hrs). Our hourly chauffeur service is ideal for plantation tours along River Road and full-day bayou excursions.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore New Orleans Services →",
  },
 
  pricing: {
    h2: "New Orleans Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during Mardi Gras. Contact us for Baton Rouge, Lafayette, Gulf Coast, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// CINCINNATI — English
// ══════════════════════════════════════════════════════════════════
{
  id: "cincinnati",
  FA: "locationCincinnatiFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/CincinnatiLocation.png",
      alt: "Viaro black car service in Cincinnati with Downtown skyline and Ohio River, luxury sedan approaching Cincinnati/Northern Kentucky International Airport.",
      caption:
        "From CVG to Over-the-Rhine, Blue Ash to Northern Kentucky—Viaro delivers seamless executive transportation across the Greater Cincinnati tri-state area.",
    },
    h1: "Cincinnati Black Car Service",
    h2: "CVG — Fixed Fares, No Surcharges, 24/7",
    description:
      "Cincinnati on your schedule. Whether you are landing at Cincinnati/Northern Kentucky International Airport after a long flight or heading to a meeting in Blue Ash—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Bengals playoff runs, the Cincinnati Music Festival, or when corporate conferences fill the Duke Energy Convention Center. Professional chauffeurs who know every route from CVG across the Ohio River bridge to Downtown, Hyde Park, Mason, and all of Greater Cincinnati.",
    cta: { book: "Book Your Cincinnati Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Cincinnati's Corporate, Healthcare & Consumer Brands Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Cincinnati/Northern Kentucky International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless CVG Pickups",
    image: {
      src: "/images/CVGArrival.png",
      alt: "Viaro chauffeur at Cincinnati/Northern Kentucky International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every Ohio River bridge pattern, every Blue Ash shortcut, and every route across the Greater Cincinnati tri-state area.",
    },
    content: [
      "CVG is technically in Northern Kentucky—12 miles south of downtown Cincinnati. Amazon's primary air hub has driven significant expansion. A compact, efficient airport that punches above its weight for connections.",
      "Insider tip: CVG's location in Kentucky means you cross the Ohio River on I-71/75 to reach downtown Cincinnati. The bridge creates a reliable congestion point during rush hour. Viaro plans the timing accordingly—your driver knows the off-peak windows and alternate routes through Covington.",
      "Popular destinations from CVG: Downtown Cincinnati, Over-the-Rhine, Hyde Park, Blue Ash, Mason, Northern Kentucky.",
    ],
  },
 
  whereSection: {
    h2: "Where Cincinnati Moves with Viaro",
    image: {
      src: "/images/CincinnatiHotels.png",
      alt: "Viaro luxury black car outside iconic Cincinnati hotel providing executive transportation service Downtown.",
      caption:
        "From Paycor Stadium to P&G headquarters, Viaro moves Cincinnati's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Cincinnati",
        time: "20 min",
        desc: "Paycor Stadium, Great American Ball Park, Duke Energy Convention Center, Fountain Square",
      },
      {
        label: "Over-the-Rhine",
        time: "20 min",
        desc: "21c Museum Hotel, Music Hall, Findlay Market, brewery corridor",
      },
      {
        label: "Hyde Park / Mt. Lookout",
        time: "25 min",
        desc: "Hyde Park Square, luxury residential, boutique dining, Eden Park",
      },
      {
        label: "Blue Ash",
        time: "25 min",
        desc: "P&G, Kroger, Luxottica, Blue Ash corporate corridor",
      },
      {
        label: "Mason / Deerfield Township",
        time: "35 min",
        desc: "Great Wolf Lodge, Kings Island, corporate campuses, luxury residential",
      },
      {
        label: "Northern Kentucky / Covington",
        time: "10 min",
        desc: "Hotel Covington, Newport on the Levee, Florence corporate parks",
      },
    ],
    content: [
      "Luxury Hotels: The Cincinnati Club, 21c Museum Hotel Cincinnati, Hilton Cincinnati Netherland Plaza, Hotel Covington, The Summit Hotel.",
      "Business: Downtown Cincinnati CBD, Blue Ash corporate corridor, Mason / Deerfield Township, Over-the-Rhine / Pendleton, Northern Kentucky / Florence.",
      "Events: Paycor Stadium (Bengals), Great American Ball Park (Reds), Heritage Bank Center (Cyclones), Duke Energy Convention Center, Cincinnati Art Museum.",
      "Beyond Cincinnati: Dayton (1 hr), Columbus (1.5 hrs), Lexington KY (1.5 hrs), Louisville KY (1.5 hrs). Our hourly chauffeur service is ideal for corporate roadshows across the Ohio Valley.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Cincinnati Services →",
  },
 
  pricing: {
    h2: "Cincinnati Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Columbus, Dayton, Louisville, Lexington, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// PORTLAND — English
// ══════════════════════════════════════════════════════════════════
{
  id: "portland",
  FA: "locationPortlandFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/PortlandLocation.png",
      alt: "Viaro black car service in Portland with Downtown skyline and Mount Hood backdrop, luxury sedan approaching Portland International Airport.",
      caption:
        "From PDX to the Pearl District, Silicon Forest to the Columbia River Gorge—Viaro delivers seamless executive transportation across Greater Portland.",
    },
    h1: "Portland Black Car Service",
    h2: "PDX · HIO — Fixed Fares, No Surcharges, 24/7",
    description:
      "Portland on your schedule. Whether you are landing at Portland International Airport after a long flight, stepping off a private jet at Hillsboro Airport, or heading to a meeting at Intel Ronler Acres or Nike World Campus—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the Rose Festival, Trail Blazers playoff runs, or when tech conferences fill the Oregon Convention Center. Professional chauffeurs who know every route from PDX's terminals to Downtown, the Pearl District, the Silicon Forest, and beyond.",
    cta: { book: "Book Your Portland Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Portland's Tech, Creative & Corporate Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Portland Airport Pickups",
    image: {
      src: "/images/PDXArrival.png",
      alt: "Viaro chauffeur at Portland International Airport loading luggage into luxury black car at lower arrivals level.",
      caption:
        "We know every concourse exit, every I-84 workaround, and every route across Greater Portland.",
    },
    content: [
      "Portland means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Portland International Airport (PDX)",
      image: {
        src: "/images/PDXTerminal.png",
        alt: "Viaro black car at Portland International Airport lower arrivals level serving Downtown Portland, Pearl District and Beaverton.",
        caption:
          "PDX consistently wins best airport polls — Viaro tracks your concourse and positions at the correct exit on the lower arrivals level, including the new Concourse E.",
      },
      content: [
        "PDX consistently wins best airport in the US polls—efficient, clean, great food. It sits 12 miles northeast of downtown, connected by MAX light rail. But Powell Blvd and I-84 westbound during morning rush are reliably slow.",
        "Insider tip: PDX's new terminal expansion (Concourse E) opened in 2024. Viaro tracks your concourse and positions at the correct exit on the lower arrivals level. For Beaverton, Hillsboro, or the Silicon Forest, your driver takes US-26 west—not I-84.",
        "Popular destinations from PDX: Downtown Portland, Pearl District, NW Portland, Beaverton, Hillsboro, Lake Oswego.",
      ],
    },
    {
      h3: "Portland-Hillsboro Airport (HIO) — Private Aviation",
      image: {
        src: "/images/HIORamp.png",
        alt: "Viaro luxury black SUV waiting on the ramp at Portland-Hillsboro Airport FBO for private jet arrival serving Intel and Nike campuses.",
        caption:
          "Hillsboro Airport — directly adjacent to Intel Ronler Acres and Nike World Campus. Private aviation for the Silicon Forest without driving through the city.",
      },
      content: [
        "Hillsboro Airport serves the Silicon Forest—Intel, Nike, and the tech corridor west of Portland. Private aviation without driving through the city.",
        "Insider tip: Viaro coordinates with FBO operations at Hillsboro Airport. Where security allows, we meet you at the jet stairs. For Intel Ronler Acres, Nike World Campus, or Washington County corporate destinations, HIO is directly adjacent.",
        "Popular destinations from HIO: Hillsboro, Beaverton, Nike World Campus, Intel Ronler Acres, Forest Grove, Aloha.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Portland Moves with Viaro",
    image: {
      src: "/images/PortlandHotels.png",
      alt: "Viaro luxury black car outside iconic Portland hotel in the Pearl District providing executive transportation service.",
      caption:
        "From the Pearl District to Nike World Campus, Moda Center to the Columbia Gorge, Viaro moves Portland's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Pearl District",
        time: "20 min",
        desc: "The Nines, Sentinel Hotel, Pioneer Courthouse Square, Powell's Books",
      },
      {
        label: "NW Portland / Nob Hill",
        time: "25 min",
        desc: "23rd Avenue, boutique hotels, upscale dining, Forest Park trailheads",
      },
      {
        label: "Beaverton / Washington Square",
        time: "35 min",
        desc: "Washington Square Mall, corporate offices, Oregon Health & Science University",
      },
      {
        label: "Hillsboro / Silicon Forest",
        time: "40 min",
        desc: "Intel Ronler Acres, Nike World Campus, Tektronix, SolarWorld corridor",
      },
      {
        label: "Lake Oswego",
        time: "30 min",
        desc: "Luxury residential, boutique hotels, George Rogers Park, executive corridor",
      },
      {
        label: "Mt. Hood / Columbia Gorge",
        time: "1 hr",
        desc: "Timberline Lodge, Multnomah Falls, Hood River, Gorge scenic route",
      },
    ],
    content: [
      "Luxury Hotels: Sentinel Hotel, The Nines Portland, Provenance Hotels, Hotel Lucia, Kimpton RiverPlace Hotel.",
      "Business: Downtown Portland CBD / Pearl District, Lloyd District, Beaverton / Washington Square corridor, Hillsboro / Silicon Forest, Lake Oswego.",
      "Events & Culture: Moda Center (Trail Blazers), Providence Park (Timbers/Thorns), Oregon Convention Center, Pioneer Courthouse Square, Powell's City of Books.",
      "Beyond Portland: Salem (1 hr), Eugene (2 hrs), Mt. Hood (1 hr), Columbia River Gorge, Seattle (3 hrs). Our hourly chauffeur service is ideal for Columbia Gorge excursions and full-day Mt. Hood trips.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Portland Services →",
  },
 
  pricing: {
    h2: "Portland Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Mt. Hood, Columbia Gorge, Salem, Seattle, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// SAN JOSÉ / LIBERIA, COSTA RICA — English
// ══════════════════════════════════════════════════════════════════
{
  id: "costa-rica",
  FA: "locationCostaRicaFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/CostaRicaLocation.png",
      alt: "Viaro black car service in Costa Rica with Pacific Ocean coastline and luxury SUV approaching Juan Santamaría International Airport in San José.",
      caption:
        "From SJO to Arenal, LIR to the Papagayo Peninsula—Viaro delivers seamless executive transportation across Costa Rica's most spectacular destinations.",
    },
    h1: "Costa Rica Black Car Service",
    h2: "SJO · LIR — Fixed Fares, No Surcharges, 24/7",
    description:
      "San José and Liberia on your schedule. Whether you are landing at Juan Santamaría International after a flight from the US, arriving at Liberia Airport for a Guanacaste resort stay, or transferring between Costa Rica's two coasts—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during peak holiday season or when private jet arrivals stack up at LIR. Professional licensed drivers who know every route from the Central Valley to the Pacific coast, Arenal to the Papagayo Peninsula.",
    cta: { book: "Book Your Costa Rica Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Costa Rica's Resort Guests, Eco-Travelers & Business Visitors",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Costa Rica Airport Pickups",
    image: {
      src: "/images/SJOArrival.png",
      alt: "Viaro chauffeur at Juan Santamaría International Airport loading luggage into luxury black SUV at arrivals.",
      caption:
        "We know every coastal route, every mountain transfer, and every road condition across Costa Rica.",
    },
    content: [
      "San José and Liberia mean navigating 2 distinct airports—each serving a completely different part of Costa Rica. Choosing the right one—and knowing how to move efficiently from arrival to resort—is the difference between a seamless vacation and hours of unnecessary driving. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "Juan Santamaría International Airport (SJO)",
      image: {
        src: "/images/SJOTerminal.png",
        alt: "Viaro black SUV at Juan Santamaría International Airport arrivals serving San José, Escazú, Manuel Antonio and Arenal.",
        caption:
          "SJO — Costa Rica's primary gateway. Viaro coordinates licensed drivers who know every route from the Central Valley to both Pacific and Caribbean coasts.",
      },
      content: [
        "SJO is Costa Rica's primary international gateway—located in Alajuela, 16 km northwest of San José. All major US carriers serve SJO, and it is the entry point for the Central Valley, Arenal, and Pacific Coast destinations.",
        "Insider tip: Customs at SJO moves relatively quickly but luggage claim can be slow on busy arrival banks. Viaro coordinates with licensed drivers who know every route from the Central Valley to the Pacific and Caribbean coasts.",
        "Popular destinations from SJO: San José, Escazú, Santa Ana, Manuel Antonio (3.5 hrs), Arenal (3 hrs), La Fortuna.",
      ],
    },
    {
      h3: "Daniel Oduber Quirós International Airport (LIR)",
      image: {
        src: "/images/LIRTerminal.png",
        alt: "Viaro luxury black SUV at Liberia Airport arrivals serving Papagayo Peninsula, Tamarindo and Playa Conchal.",
        caption:
          "LIR — the gateway to Guanacaste. Most resorts are 30–90 minutes from the airport. Viaro coordinates ground transportation throughout the region.",
      },
      content: [
        "Liberia Airport is the gateway to Guanacaste—Costa Rica's Pacific dry forest coast, home to Tamarindo, Flamingo, Conchal, and the Papagayo Peninsula. Direct seasonal service from the US makes it the preferred entry for most beach and luxury resort guests.",
        "Insider tip: LIR is the right airport for Guanacaste destinations—the drive from SJO to Tamarindo is 5+ hours. From LIR, most resorts are 30–90 minutes. Viaro coordinates ground transportation throughout the Guanacaste region.",
        "Popular destinations from LIR: Papagayo Peninsula, Tamarindo, Flamingo, Conchal, Nosara, Sámara, Mal País corridor.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where Costa Rica Moves with Viaro",
    image: {
      src: "/images/CostaRicaHotels.png",
      alt: "Viaro luxury black SUV outside Four Seasons Papagayo or Nayara resort providing executive transportation in Costa Rica.",
      caption:
        "From the Papagayo Peninsula to the Arenal volcano, Viaro moves Costa Rica's most discerning guests.",
    },
    items: [
      {
        label: "Papagayo Peninsula",
        time: "30 min from LIR",
        desc: "Four Seasons Papagayo, Andaz Costa Rica, private marina communities",
      },
      {
        label: "Tamarindo / Flamingo",
        time: "1 hr from LIR",
        desc: "Playa Flamingo, Reserva Conchal, surf beaches, boutique hotels",
      },
      {
        label: "Nosara / Sámara",
        time: "2 hrs from LIR",
        desc: "Nosara surf community, Sámara beach, Mal País, yoga retreat corridor",
      },
      {
        label: "Manuel Antonio",
        time: "3.5 hrs from SJO",
        desc: "Arenas del Mar, Gaia Hotel, national park, Pacific central coast",
      },
      {
        label: "Arenal / La Fortuna",
        time: "3 hrs from SJO",
        desc: "Nayara Tented Camp, Arenal Volcano, hot springs, adventure activities",
      },
      {
        label: "Monteverde",
        time: "3 hrs from SJO",
        desc: "Cloud forest, Monteverde Lodge, hanging bridges, nature reserves",
      },
    ],
    content: [
      "Pacific North (from LIR): Papagayo / Four Seasons Peninsula, Playa Flamingo, Tamarindo, Playa Conchal / Reserva Conchal, Playa Grande.",
      "Pacific Central (from SJO): Manuel Antonio / Quepos, Jacó / Los Sueños, Uvita / Whale's Tail, Dominical.",
      "Interior / North (from SJO): Arenal Volcano / La Fortuna, Monteverde Cloud Forest, San José / Escazú, Cartago / Turrialba.",
      "Luxury Properties: Four Seasons Papagayo, Andaz Costa Rica, COMO Shambhala Estate, Nayara Tented Camp, Arenas del Mar.",
      "See our full corporate transportation services and hourly chauffeur options for full-day excursions and multi-destination tours.",
    ],
    cta: "Explore Costa Rica Services →",
  },
 
  pricing: {
    h2: "Costa Rica Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & resort travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Manuel Antonio, Arenal, Monteverde, inter-coastal transfers, and custom multi-day route quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// SACRAMENTO — English
// ══════════════════════════════════════════════════════════════════
{
  id: "sacramento",
  FA: "locationSacramentoFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/SacramentoLocation.png",
      alt: "Viaro black car service in Sacramento with State Capitol building and luxury sedan approaching Sacramento International Airport.",
      caption:
        "From SMF to the State Capitol, Napa Valley to Lake Tahoe—Viaro delivers seamless executive transportation across Greater Sacramento and Northern California.",
    },
    h1: "Sacramento Black Car Service",
    h2: "SMF — Fixed Fares, No Surcharges, 24/7",
    description:
      "Sacramento on your schedule. Whether you are landing at Sacramento International Airport after a long flight, heading to a meeting at the Capitol, or making your way to Napa or Tahoe—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the State Fair, Kings playoff runs, or when government and agriculture conferences fill the Sacramento Convention Center. Professional chauffeurs who know every route from SMF to Downtown, Roseville, the Oracle campus in Folsom, and the mountain and wine country corridors.",
    cta: { book: "Book Your Sacramento Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Sacramento's Government, Tech & Agriculture Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Sacramento International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless SMF Pickups",
    image: {
      src: "/images/SMFArrival.png",
      alt: "Viaro chauffeur at Sacramento International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every I-5 shortcut, every Tahoe road condition, and every route across Greater Sacramento and Northern California.",
    },
    content: [
      "SMF is a clean, efficiently run airport—two terminals (A and B) with a shared connector. Located 10 miles northwest of downtown Sacramento, directly on I-5. Also serves as the gateway to Tahoe, Napa/Sonoma, and the Sierra Nevada.",
      "Insider tip: SMF's proximity to I-5 makes it one of the easier airports to navigate in California. Viaro meets you at the ground transportation area on the arrivals level and knows every route: downtown Sacramento, Roseville/Folsom, or the Tahoe/Napa corridors.",
      "Popular destinations from SMF: Downtown Sacramento, Midtown, Elk Grove, Roseville, Folsom, South Lake Tahoe (2 hrs), Napa (1.5 hrs).",
    ],
  },
 
  whereSection: {
    h2: "Where Sacramento Moves with Viaro",
    image: {
      src: "/images/SacramentoHotels.png",
      alt: "Viaro luxury black car outside iconic Sacramento hotel near the State Capitol providing executive transportation service.",
      caption:
        "From the State Capitol to Oracle's Folsom campus, Napa vineyards to Tahoe resorts, Viaro moves Sacramento's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Sacramento / Capitol Mall",
        time: "20 min",
        desc: "California State Capitol, Citizen Hotel, Golden 1 Center, Convention Center",
      },
      {
        label: "Midtown / R Street",
        time: "25 min",
        desc: "The Sawyer Hotel, Kimpton Sawyer, R Street Corridor, farm-to-fork dining",
      },
      {
        label: "Roseville / Rocklin",
        time: "30 min",
        desc: "HP campus, tech corridor, Galleria at Roseville, corporate parks",
      },
      {
        label: "Folsom / Oracle",
        time: "35 min",
        desc: "Oracle campus, Intel Folsom, Empire Ranch, Folsom Premium Outlets",
      },
      {
        label: "Napa Valley",
        time: "1.5 hrs",
        desc: "Napa wine country, Yountville, St. Helena, vineyard estate tours",
      },
      {
        label: "Lake Tahoe",
        time: "2 hrs",
        desc: "South Lake Tahoe, Heavenly, North Shore, Truckee, skiing and summer recreation",
      },
    ],
    content: [
      "Luxury Hotels: Citizen Hotel Sacramento, The Sawyer Sacramento, Hyatt Regency Sacramento, Kimpton Sawyer Hotel.",
      "Business: Downtown Sacramento / Capitol Mall, Midtown / R Street, Roseville / Rocklin tech corridor, Folsom / Oracle campus, Davis / UC Davis.",
      "Events: Golden 1 Center (Kings), Sutter Health Park (River Cats), Sacramento Convention Center, Cal Expo / State Fair grounds.",
      "Wine & Mountain Connections: Napa Valley (1.5 hrs), Sonoma (2 hrs), South Lake Tahoe (2 hrs), North Lake Tahoe / Truckee (2 hrs). Our hourly chauffeur service is perfect for full-day Napa wine tours and Lake Tahoe excursions.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Sacramento Services →",
  },
 
  pricing: {
    h2: "Sacramento Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Napa, Sonoma, Lake Tahoe, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// ST. LOUIS — English
// ══════════════════════════════════════════════════════════════════
{
  id: "st-louis",
  FA: "locationStLouisFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/StLouisLocation.png",
      alt: "Viaro black car service in St. Louis with Gateway Arch and Downtown skyline, luxury sedan approaching St. Louis Lambert International Airport.",
      caption:
        "From STL to the Gateway Arch, Clayton to Chesterfield—Viaro delivers seamless executive transportation across the Greater St. Louis metro.",
    },
    h1: "St. Louis Black Car Service",
    h2: "STL · SUS — Fixed Fares, No Surcharges, 24/7",
    description:
      "St. Louis on your schedule. Whether you are landing at St. Louis Lambert International Airport after a long flight, stepping off a private jet at Spirit of St. Louis Airport, or heading to a meeting in Clayton—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Cardinals World Series runs, the US Open at Bellerive, or when corporate conferences fill America's Center. Professional chauffeurs who know every route from STL to Downtown, Clayton, Chesterfield Valley, and both sides of the Mississippi.",
    cta: { book: "Book Your St. Louis Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by St. Louis's Corporate, Healthcare & Biotech Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "2 Airports",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Airport-by-Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to St. Louis Airport Pickups",
    image: {
      src: "/images/STLArrival.png",
      alt: "Viaro chauffeur at St. Louis Lambert International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every I-70 pattern, every Clayton shortcut, and every route across the Greater St. Louis metro.",
    },
    content: [
      "St. Louis means navigating 2 distinct airports—each with its own logic and pickup choreography. Knowing which one to use—and how to get in and out efficiently—separates a seamless trip from a stressful one. Here is how Viaro helps you navigate each one.",
    ],
  },
 
  extraContent: [
    {
      h3: "St. Louis Lambert International Airport (STL)",
      image: {
        src: "/images/STLTerminal.png",
        alt: "Viaro black car at St. Louis Lambert International Airport terminal arrivals serving Downtown St. Louis, Clayton and Chesterfield.",
        caption:
          "STL's lower roadway departures level avoids the peak arrivals chaos — Viaro meets you there for a faster, calmer exit from the airport.",
      },
      content: [
        "STL is a mid-sized hub with two main terminals (1 and 2) and a relatively uncongested airport environment. Located 15 miles northwest of downtown via I-70.",
        "Insider tip: STL's ground transportation area is well-organized. Viaro meets you at the departures level lower roadway—less chaotic than the arrivals upper level during peak periods.",
        "Popular destinations from STL: Downtown St. Louis, Clayton, Chesterfield, St. Charles, Ladue, Webster Groves.",
      ],
    },
    {
      h3: "Spirit of St. Louis Airport (SUS) — Private Aviation",
      image: {
        src: "/images/SUSTarmac.png",
        alt: "Viaro luxury black SUV waiting on the tarmac at Spirit of St. Louis Airport FBO for private jet arrival serving Chesterfield and west St. Louis County.",
        caption:
          "Spirit of St. Louis Airport — private aviation for the affluent western suburbs, bypassing the I-270/70 interchange entirely.",
      },
      content: [
        "Spirit of St. Louis serves the affluent western suburbs—Chesterfield, Wildwood, and the St. Louis County corporate corridor.",
        "Insider tip: Viaro coordinates with FBO operations at Spirit of St. Louis. Where security allows, we meet you at the jet stairs. For Chesterfield Valley and west county corporate destinations, SUS avoids the I-270 / 70 interchange entirely.",
        "Popular destinations from SUS: Chesterfield, Wildwood, Ballwin, Town & Country, Creve Coeur, west St. Louis County.",
      ],
      cta: "Book Your Airport Transfer →",
    },
  ],
 
  whereSection: {
    h2: "Where St. Louis Moves with Viaro",
    image: {
      src: "/images/StLouisHotels.png",
      alt: "Viaro luxury black car outside iconic St. Louis hotel providing executive transportation service near the Gateway Arch.",
      caption:
        "From Busch Stadium to the Cortex Innovation District, Viaro moves St. Louis's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Gateway Arch",
        time: "20 min",
        desc: "Gateway Arch, Busch Stadium, Enterprise Center, America's Center, luxury hotels",
      },
      {
        label: "Clayton CBD",
        time: "25 min",
        desc: "St. Louis County seat, law firms, financial services, Ritz-Carlton, Centene Plaza",
      },
      {
        label: "Midtown / Cortex",
        time: "25 min",
        desc: "Cortex Innovation District, Washington University Medical, BJC Healthcare",
      },
      {
        label: "Chesterfield Valley",
        time: "30 min",
        desc: "Corporate corridor, Chesterfield Mall, Mastercard, Express Scripts HQ",
      },
      {
        label: "Ladue / Town & Country",
        time: "30 min",
        desc: "Luxury residential, private school corridor, Country Club Plaza",
      },
      {
        label: "St. Charles",
        time: "25 min",
        desc: "Historic Main Street, corporate parks, Missouri River corridor",
      },
    ],
    content: [
      "Luxury Hotels: The Ritz-Carlton St. Louis, Four Seasons St. Louis, Moonrise Hotel, 1 Hotel St. Louis, Cheshire Hotel.",
      "Business: Downtown St. Louis / Arch grounds, Clayton CBD, Chesterfield Valley corporate, Creve Coeur tech corridor, Maryville / I-270 N corridor.",
      "Events: Busch Stadium (Cardinals), Enterprise Center (Blues), Dome at America's Center, America's Center Convention Complex, St. Louis Zoo / Forest Park.",
      "Beyond St. Louis: Kansas City (3.5 hrs), Springfield MO (3 hrs), Memphis (4 hrs), Chicago (5 hrs). Our hourly chauffeur service is ideal for corporate roadshows and cross-state Missouri transfers.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore St. Louis Services →",
  },
 
  pricing: {
    h2: "St. Louis Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Kansas City, Memphis, Chicago, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// COLUMBUS — English
// ══════════════════════════════════════════════════════════════════
{
  id: "columbus",
  FA: "locationColumbusFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/ColumbusLocation.png",
      alt: "Viaro black car service in Columbus with Downtown skyline and luxury sedan approaching John Glenn Columbus International Airport.",
      caption:
        "From CMH to the Short North, Dublin to New Albany—Viaro delivers seamless executive transportation across Greater Columbus.",
    },
    h1: "Columbus Black Car Service",
    h2: "CMH — Fixed Fares, No Surcharges, 24/7",
    description:
      "Columbus on your schedule. Whether you are landing at John Glenn Columbus International Airport after a long flight or heading to a meeting at the Intel campus in New Albany—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Ohio State game weekends, the Arnold Sports Festival, or when tech and retail conferences fill the Greater Columbus Convention Center. Professional chauffeurs who know every route from CMH to Downtown, the Short North, Dublin, Polaris, and the rapidly growing New Albany tech corridor.",
    cta: { book: "Book Your Columbus Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Columbus's Tech, Retail & University Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "John Glenn Columbus International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless CMH Pickups",
    image: {
      src: "/images/CMHArrival.png",
      alt: "Viaro chauffeur at John Glenn Columbus International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every 270 shortcut, every Intel campus route, and every destination across Greater Columbus.",
    },
    content: [
      "CMH is a compact, efficient airport—one terminal, 10 miles east of downtown via I-670. Ohio State University and the Short North are easy destinations from here. No connecting train, but the drive is straightforward.",
      "Insider tip: CMH has straightforward ground transportation. Viaro meets you at the arrivals curb. For Easton, Polaris, or Dublin tech corridor destinations, your driver takes 270 North—significantly faster than I-670 at peak.",
      "Popular destinations from CMH: Downtown Columbus, Short North, German Village, Easton, Polaris, Dublin, Westerville.",
    ],
  },
 
  whereSection: {
    h2: "Where Columbus Moves with Viaro",
    image: {
      src: "/images/ColumbusHotels.png",
      alt: "Viaro luxury black car outside iconic Columbus hotel providing executive transportation service Downtown.",
      caption:
        "From Ohio Stadium to the Intel campus, The Joseph to Easton Town Center, Viaro moves Columbus's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown Columbus",
        time: "15 min",
        desc: "Nationwide Arena, Convention Center, Huntington Park, The Joseph, Scioto Mile",
      },
      {
        label: "Short North / OSU",
        time: "20 min",
        desc: "Short North Arts District, Ohio State University, Ohio Stadium, High Street corridor",
      },
      {
        label: "German Village",
        time: "20 min",
        desc: "Historic brick streets, boutique dining, South Side residential, Schmidt's",
      },
      {
        label: "Easton / New Albany",
        time: "20 min",
        desc: "Easton Town Center, Amazon, Abercrombie & Fitch HQ, Intel campus",
      },
      {
        label: "Dublin / Tuttle Crossing",
        time: "30 min",
        desc: "Wendy's HQ, Cardinal Health, Dublin tech corridor, Scioto River communities",
      },
      {
        label: "Polaris",
        time: "25 min",
        desc: "Polaris corporate park, Polaris Fashion Place, Nationwide Children's north campus",
      },
    ],
    content: [
      "Luxury Hotels: The Joseph Columbus, Hilton Columbus Downtown, Graduate Columbus, Le Méridien Columbus, Canopy by Hilton Columbus Short North.",
      "Business: Downtown Columbus CBD, Short North / University District, Easton Town Center corridor, Dublin / Tuttle Crossing tech, Polaris corporate park, New Albany / Intel campus.",
      "Events: Nationwide Arena (Blue Jackets), Huntington Park (Clippers), Ohio Stadium / The Shoe (Buckeyes), Greater Columbus Convention Center, Schottenstein Center.",
      "Beyond Columbus: Cincinnati (1.5 hrs), Cleveland (2.5 hrs), Dayton (1 hr), Pittsburgh (2.5 hrs). Our hourly chauffeur service is ideal for corporate roadshows across Ohio.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Columbus Services →",
  },
 
  pricing: {
    h2: "Columbus Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even on Ohio State game day. Contact us for Cincinnati, Cleveland, Pittsburgh, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
 // ══════════════════════════════════════════════════════════════════
// INDIANAPOLIS — English
// ══════════════════════════════════════════════════════════════════
{
  id: "indianapolis",
  FA: "locationIndianapolisFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/IndianapolisLocation.png",
      alt: "Viaro black car service in Indianapolis with Downtown skyline and luxury sedan approaching Indianapolis International Airport.",
      caption:
        "From IND to Monument Circle, Carmel to the Speedway—Viaro delivers seamless executive transportation across Greater Indianapolis.",
    },
    h1: "Indianapolis Black Car Service",
    h2: "IND — Fixed Fares, No Surcharges, 24/7",
    description:
      "Indianapolis on your schedule. Whether you are landing at Indianapolis International Airport after a long flight or heading to a meeting in Carmel or the Fishers tech corridor—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during the Indianapolis 500, the Big Ten Championship, or when the Indiana Convention Center fills for Gen Con or a major corporate conference. Professional chauffeurs who know every route from IND to Downtown, Carmel, Fishers, and across the entire Indiana crossroads.",
    cta: { book: "Book Your Indianapolis Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Indianapolis's Life Sciences, Tech & Corporate Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Indianapolis International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless IND Pickups",
    image: {
      src: "/images/INDArrival.png",
      alt: "Viaro chauffeur at Indianapolis International Airport loading luggage into luxury black car at Midfield Terminal arrivals.",
      caption:
        "We know every I-465 shortcut, every Speedway weekend pattern, and every route across Greater Indianapolis.",
    },
    content: [
      "IND has one of the most efficient terminal designs in the US—the Midfield Terminal opened in 2008 with a single landside and airside connected by a train. Just 7 miles southwest of downtown on I-70.",
      "Insider tip: IND's organized ground transportation area makes pickups predictable. Viaro meets you at the correct ground level exit. For Carmel, Fishers, or the north Indianapolis tech corridor, your driver takes I-465 north—faster than surface streets.",
      "Popular destinations from IND: Downtown Indianapolis, Carmel, Fishers, Noblesville, Zionsville, Broad Ripple.",
    ],
  },
 
  whereSection: {
    h2: "Where Indianapolis Moves with Viaro",
    image: {
      src: "/images/IndianapolisHotels.png",
      alt: "Viaro luxury black car outside iconic Indianapolis hotel near Monument Circle providing executive transportation service.",
      caption:
        "From Lucas Oil Stadium to the Indianapolis Motor Speedway, Viaro moves Indianapolis's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Monument Circle",
        time: "15 min",
        desc: "Conrad Indianapolis, Lucas Oil Stadium, Gainbridge Fieldhouse, Convention Center",
      },
      {
        label: "Broad Ripple / Midtown",
        time: "20 min",
        desc: "Broad Ripple Village, boutique hotels, Monon Trail, upscale dining",
      },
      {
        label: "Carmel / Keystone",
        time: "30 min",
        desc: "Carmel Arts & Design District, Keystone Crossing, corporate offices, luxury residential",
      },
      {
        label: "Fishers",
        time: "30 min",
        desc: "Fishers tech corridor, Launch Fishers, DeveloperTown, Geist Reservoir",
      },
      {
        label: "Indianapolis Motor Speedway",
        time: "15 min",
        desc: "Indy 500, Brickyard 400, IMS grounds, Speedway community",
      },
      {
        label: "Zionsville",
        time: "30 min",
        desc: "Luxury residential, Zionsville Village, executive corridor, private estates",
      },
    ],
    content: [
      "Luxury Hotels: Conrad Indianapolis, The Alexander Hotel, Bottleworks Hotel, JW Marriott Indianapolis, Omni Severin Hotel.",
      "Business: Downtown Indianapolis CBD / Monument Circle, Carmel / Keystone Crossing, Fishers tech corridor, Castleton corporate parks, Purdue Research Park.",
      "Events: Gainbridge Fieldhouse (Pacers), Lucas Oil Stadium (Colts), Indianapolis Motor Speedway, Indiana Convention Center, Bankers Life Fieldhouse.",
      "Beyond Indianapolis: Bloomington (1 hr), Lafayette / Purdue (1 hr), Cincinnati (2 hrs), Chicago (3 hrs). Our hourly chauffeur service is ideal for Indianapolis 500 race weekends and corporate roadshows across Indiana.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Indianapolis Services →",
  },
 
  pricing: {
    h2: "Indianapolis Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during the Indianapolis 500. Contact us for Bloomington, Purdue, Chicago, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// CHARLESTON — English
// ══════════════════════════════════════════════════════════════════
{
  id: "charleston",
  FA: "locationCharlestonFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/CharlestonLocation.png",
      alt: "Viaro black car service in Charleston with historic church steeples and harbor, luxury sedan approaching Charleston International Airport.",
      caption:
        "From CHS to the historic Peninsula, Kiawah Island to Sullivan's Island—Viaro delivers seamless luxury transportation across the Lowcountry.",
    },
    h1: "Charleston Black Car Service",
    h2: "CHS — Fixed Fares, No Surcharges, 24/7",
    description:
      "Charleston on your schedule. Whether you are landing at Charleston International Airport after a long flight, arriving for a Kiawah Island resort stay, or heading to a wedding on Sullivan's Island—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Spoleto Festival USA, the RBC Heritage at Harbour Town, or peak wedding season on the Peninsula. Professional chauffeurs who know every route from CHS to the historic Downtown, the islands, and the entire Lowcountry.",
    cta: { book: "Book Your Charleston Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Charleston's Resort Guests, Wedding Travelers & Lowcountry Visitors",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Charleston International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless CHS Pickups",
    image: {
      src: "/images/CHSArrival.png",
      alt: "Viaro chauffeur at Charleston International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every I-26 workaround, every island bridge timing, and every route across the Lowcountry.",
    },
    content: [
      "CHS is a compact, pleasant airport—13 miles northwest of the historic downtown peninsula. One terminal, short lines, and a baggage claim that consistently impresses travelers used to larger airports.",
      "Insider tip: CHS sees significant demand during Spoleto Festival USA and wedding season. Viaro monitors event calendars and adjusts availability accordingly. The I-26 to downtown can back up; your driver knows the secondary routes through North Charleston.",
      "Popular destinations from CHS: Downtown Charleston / Peninsula, Sullivan's Island, Isle of Palms, Kiawah Island, Mount Pleasant, Folly Beach.",
    ],
  },
 
  whereSection: {
    h2: "Where Charleston Moves with Viaro",
    image: {
      src: "/images/CharlestonHotels.png",
      alt: "Viaro luxury black car outside iconic Charleston hotel on the historic Peninsula providing executive transportation service.",
      caption:
        "From Rainbow Row to Kiawah Island's ocean fairways, Viaro moves Charleston's most discerning guests.",
    },
    items: [
      {
        label: "Downtown Charleston Peninsula",
        time: "20 min",
        desc: "The Dewberry, Belmond Charleston Place, King Street, Rainbow Row, Battery Park",
      },
      {
        label: "Mount Pleasant",
        time: "25 min",
        desc: "Patriot's Point, Towne Centre, luxury residential, Shem Creek waterfront",
      },
      {
        label: "Sullivan's Island",
        time: "30 min",
        desc: "Beach community, Fort Moultrie, Sullivan's Island lighthouse, private estates",
      },
      {
        label: "Isle of Palms",
        time: "35 min",
        desc: "Wild Dunes Resort, beach rentals, oceanfront communities",
      },
      {
        label: "Kiawah Island",
        time: "45 min",
        desc: "Kiawah Island Golf Resort, The Sanctuary, Ocean Course, private beach communities",
      },
      {
        label: "Folly Beach",
        time: "30 min",
        desc: "Folly Beach Pier, surf community, beach cottages, James Island corridor",
      },
    ],
    content: [
      "Luxury Hotels: The Dewberry Charleston, Zero George Street, Belmond Charleston Place, The Restoration Hotel, Kiawah Island Golf Resort.",
      "Districts & Islands: Downtown Charleston Peninsula, Mount Pleasant, Sullivan's Island, Isle of Palms, Kiawah Island, Folly Beach.",
      "Events & Culture: TD Arena (Cougars), North Charleston Coliseum, Spoleto Festival USA venues, Charleston Music Hall, South Carolina Aquarium.",
      "Beyond Charleston: Hilton Head Island (2 hrs), Savannah GA (2 hrs), Columbia SC (2 hrs), Myrtle Beach (2 hrs). Our hourly chauffeur service is perfect for plantation tours, wine tours through the Lowcountry, and full-day island excursions.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Charleston Services →",
  },
 
  pricing: {
    h2: "Charleston Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during Spoleto or peak wedding season. Contact us for Hilton Head, Savannah, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// CLEVELAND — English
// ══════════════════════════════════════════════════════════════════
{
  id: "cleveland",
  FA: "locationClevelandFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/ClevelandLocation.png",
      alt: "Viaro black car service in Cleveland with Downtown skyline and Lake Erie, luxury sedan approaching Cleveland Hopkins International Airport.",
      caption:
        "From CLE to Public Square, University Circle to Beachwood—Viaro delivers seamless executive transportation across Greater Cleveland.",
    },
    h1: "Cleveland Black Car Service",
    h2: "CLE — Fixed Fares, No Surcharges, 24/7",
    description:
      "Cleveland on your schedule. Whether you are landing at Cleveland Hopkins International Airport after a long flight or heading to a meeting at the Cleveland Clinic or a corporate campus in Beachwood—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Cavaliers playoff runs, the NFL Draft at the Mall, or when medical and healthcare conferences fill the Huntington Convention Center. Professional chauffeurs who know every route from CLE to Downtown, University Circle, the eastern suburbs, and across Northeast Ohio.",
    cta: { book: "Book Your Cleveland Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Cleveland's Healthcare, Corporate & Cultural Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Cleveland Hopkins International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless CLE Pickups",
    image: {
      src: "/images/CLEArrival.png",
      alt: "Viaro chauffeur at Cleveland Hopkins International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every I-480 shortcut, every Cleveland Clinic route, and every destination across Northeast Ohio.",
    },
    content: [
      "CLE is 10 miles southwest of downtown—the RTA Red Line connects directly to Public Square, but for luggage and group travel, black car service is the practical choice. The airport is compact and efficient.",
      "Insider tip: CLE's ground transportation is on the lower level with straightforward access. Viaro meets you at the correct arrivals curb. For Beachwood, Mayfield Heights, or the eastern suburbs, your driver takes I-480 east rather than I-90.",
      "Popular destinations from CLE: Downtown Cleveland, University Circle, Beachwood, Shaker Heights, Mayfield Heights, Westlake.",
    ],
  },
 
  whereSection: {
    h2: "Where Cleveland Moves with Viaro",
    image: {
      src: "/images/ClevelandHotels.png",
      alt: "Viaro luxury black car outside iconic Cleveland hotel providing executive transportation service near the Rock & Roll Hall of Fame.",
      caption:
        "From the Cleveland Clinic to the Rock & Roll Hall of Fame, Viaro moves Cleveland's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Public Square",
        time: "15 min",
        desc: "Rocket Mortgage FieldHouse, Progressive Field, Convention Center, Rock Hall",
      },
      {
        label: "University Circle",
        time: "20 min",
        desc: "Cleveland Clinic main campus, University Hospitals, Case Western Reserve, Cleveland Museum of Art",
      },
      {
        label: "Shaker Heights",
        time: "20 min",
        desc: "Historic luxury residential, Shaker Square, Van Aken District",
      },
      {
        label: "Beachwood",
        time: "25 min",
        desc: "Beachwood Place Mall, corporate offices, KeyBank corridor, luxury residential",
      },
      {
        label: "Mayfield Heights / I-271",
        time: "25 min",
        desc: "I-271 corporate corridor, healthcare offices, Landerwood Plaza",
      },
      {
        label: "Westlake / Rocky River",
        time: "20 min",
        desc: "Crocker Park, west side corporate parks, lakefront communities",
      },
    ],
    content: [
      "Luxury Hotels: Four Seasons Cleveland, The Westin Cleveland Downtown, Metropolitan at The 9, Kimpton Schofield Hotel, Hilton Cleveland Downtown.",
      "Business: Downtown Cleveland CBD / Public Square, University Circle / UH / Cleveland Clinic, Beachwood corporate corridor, Mayfield Heights / I-271 N, Westlake tech.",
      "Events: Rocket Mortgage FieldHouse (Cavaliers), Progressive Field (Guardians), FirstEnergy Stadium (Browns), Huntington Convention Center of Cleveland, Rock & Roll Hall of Fame.",
      "Beyond Cleveland: Akron (45 min), Columbus (2.5 hrs), Pittsburgh (2 hrs), Erie PA (1.5 hrs). Our hourly chauffeur service is ideal for Cleveland Clinic patient family transfers and corporate roadshows across Northeast Ohio.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Cleveland Services →",
  },
 
  pricing: {
    h2: "Cleveland Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Contact us for Akron, Pittsburgh, Columbus, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// PITTSBURGH — English
// ══════════════════════════════════════════════════════════════════
{
  id: "pittsburgh",
  FA: "locationPittsburghFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/PittsburghLocation.png",
      alt: "Viaro black car service in Pittsburgh with Golden Triangle skyline and three rivers, luxury sedan approaching Pittsburgh International Airport.",
      caption:
        "From PIT to the Golden Triangle, Oakland to Sewickley—Viaro delivers seamless executive transportation across Greater Pittsburgh.",
    },
    h1: "Pittsburgh Black Car Service",
    h2: "PIT — Fixed Fares, No Surcharges, 24/7",
    description:
      "Pittsburgh on your schedule. Whether you are landing at Pittsburgh International Airport after a long flight or heading to a meeting at UPMC, CMU, or a corporate campus in Wexford—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Steelers playoff runs, the Pittsburgh Marathon, or when tech and healthcare conferences fill the David L. Lawrence Convention Center. Professional chauffeurs who know every tunnel, every bridge, and every route from PIT to the Golden Triangle, Oakland, and across Southwest Pennsylvania.",
    cta: { book: "Book Your Pittsburgh Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Pittsburgh's Tech, Healthcare & Academic Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Pittsburgh International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless PIT Pickups",
    image: {
      src: "/images/PITArrival.png",
      alt: "Viaro chauffeur at Pittsburgh International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every tunnel timing, every Parkway West pattern, and every route across Greater Pittsburgh.",
    },
    content: [
      "PIT is a large, well-designed airport 16 miles west of downtown—the airside terminal connects to the landside via an automated people mover. Less congested than most major airports of its size, with efficient operations.",
      "Insider tip: The Parkway West (I-376) from PIT to downtown has a consistent construction and tunnel backup pattern. Viaro monitors conditions and plans the timing. For Oakland, Shadyside, or the East End, your driver knows the Fort Pitt Tunnel timing.",
      "Popular destinations from PIT: Downtown Pittsburgh, Oakland, Shadyside, South Side, Sewickley, Wexford, South Hills.",
    ],
  },
 
  whereSection: {
    h2: "Where Pittsburgh Moves with Viaro",
    image: {
      src: "/images/PittsburghHotels.png",
      alt: "Viaro luxury black car outside iconic Pittsburgh hotel in the Golden Triangle providing executive transportation service.",
      caption:
        "From the Golden Triangle to Carnegie Mellon, Acrisure Stadium to Sewickley, Viaro moves Pittsburgh's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Golden Triangle",
        time: "25 min",
        desc: "PPG Paints Arena, PNC Park, Convention Center, Fairmont, Market Square",
      },
      {
        label: "Oakland / University",
        time: "30 min",
        desc: "UPMC, University of Pittsburgh, Carnegie Mellon, Carnegie Museums, Pitt Medical",
      },
      {
        label: "Shadyside / East Liberty",
        time: "30 min",
        desc: "Walnut Street, boutique hotels, Google Pittsburgh, Bakery Square",
      },
      {
        label: "South Side / Mt. Washington",
        time: "30 min",
        desc: "Acrisure Stadium, South Side Works, Grandview overlook, Station Square",
      },
      {
        label: "Sewickley",
        time: "20 min",
        desc: "Historic village, luxury residential, Sewickley Heights Country Club, private estates",
      },
      {
        label: "Wexford / Cranberry",
        time: "20 min",
        desc: "Cranberry tech corridor, corporate campuses, healthcare offices, north Pittsburgh suburbs",
      },
    ],
    content: [
      "Luxury Hotels: Fairmont Pittsburgh, The Kimpton Hotel Monaco Pittsburgh, Ace Hotel Pittsburgh, Marriott Pittsburgh City Center, The Oaklander Hotel.",
      "Business: Downtown Pittsburgh / Golden Triangle, Oakland / CMU / Pitt / UPMC, Strip District / Penn Avenue, Wexford / Cranberry tech corridor, Pittsburgh Technology Center.",
      "Events: PPG Paints Arena (Penguins), PNC Park (Pirates), Acrisure Stadium (Steelers), David L. Lawrence Convention Center, Carnegie Museums (Oakland).",
      "Beyond Pittsburgh: Morgantown WV (1.5 hrs), Wheeling WV (1 hr), Cleveland (2 hrs), Philadelphia (5 hrs). Our hourly chauffeur service is ideal for corporate roadshows across Southwest Pennsylvania and West Virginia.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Pittsburgh Services →",
  },
 
  pricing: {
    h2: "Pittsburgh Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even on Steelers game day. Contact us for Morgantown, Cleveland, Philadelphia, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// SAN ANTONIO — English
// ══════════════════════════════════════════════════════════════════
{
  id: "san-antonio",
  FA: "locationSanAntonioFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/SanAntonioLocation.png",
      alt: "Viaro black car service in San Antonio with River Walk and historic missions, luxury sedan approaching San Antonio International Airport.",
      caption:
        "From SAT to the River Walk, Pearl District to Hill Country—Viaro delivers seamless executive transportation across Greater San Antonio.",
    },
    h1: "San Antonio Black Car Service",
    h2: "SAT — Fixed Fares, No Surcharges, 24/7",
    description:
      "San Antonio on your schedule. Whether you are landing at San Antonio International Airport after a long flight or heading to a meeting at the Medical Center or a resort in the Hill Country—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Fiesta San Antonio, NBA playoffs at the AT&T Center, or when military and government conferences fill the Henry B. González Convention Center. Professional chauffeurs who know every route from SAT to Downtown, the Pearl District, Stone Oak, and all the way to the Hill Country.",
    cta: { book: "Book Your San Antonio Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by San Antonio's Military, Healthcare & Tourism Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "San Antonio International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless SAT Pickups",
    image: {
      src: "/images/SATArrival.png",
      alt: "Viaro chauffeur at San Antonio International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every Loop 410 shortcut, every Hill Country route, and every destination across Greater San Antonio.",
    },
    content: [
      "SAT is a mid-sized, uncongested airport—two terminals (A and B) sharing a single building, 8 miles north of downtown. Compact, efficient, and rarely backed up.",
      "Insider tip: SAT's ground transportation is compact. Viaro meets you at the correct arrivals exit. For the Medical Center, UTSA, or the Loop 1604 tech corridor, your driver takes Loop 410 or 1604 rather than surface streets.",
      "Popular destinations from SAT: Downtown / River Walk, Medical Center, Pearl District, Alamo Heights, Stone Oak, New Braunfels.",
    ],
  },
 
  whereSection: {
    h2: "Where San Antonio Moves with Viaro",
    image: {
      src: "/images/SanAntonioHotels.png",
      alt: "Viaro luxury black car outside iconic San Antonio hotel on the River Walk providing executive transportation service.",
      caption:
        "From the River Walk to the Hill Country, AT&T Center to La Cantera Resort, Viaro moves San Antonio's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / River Walk",
        time: "15 min",
        desc: "Hotel Emma, Mokara Hotel, AT&T Center, Alamodome, Convention Center",
      },
      {
        label: "Pearl District",
        time: "15 min",
        desc: "Hotel Emma at Pearl, Pearl Brewery, farm-to-table dining, boutique shops",
      },
      {
        label: "Medical Center / UT Health",
        time: "20 min",
        desc: "UT Health San Antonio, Methodist Hospital, South Texas Medical Center",
      },
      {
        label: "Stone Oak / Loop 1604",
        time: "25 min",
        desc: "Corporate parks, Stone Oak medical offices, luxury residential north corridor",
      },
      {
        label: "La Cantera / The Rim",
        time: "25 min",
        desc: "La Cantera Resort, The Rim Shopping Center, USAA campus, Valero Energy",
      },
      {
        label: "Hill Country / Fredericksburg",
        time: "1.5 hrs",
        desc: "Wine trail, Fredericksburg boutiques, Kerrville, Bandera cowboy capital",
      },
    ],
    content: [
      "Luxury Hotels: Hotel Emma at Pearl, JW Marriott San Antonio Hill Country, Mokara Hotel & Spa, La Cantera Resort, St. Anthony Hotel.",
      "Business: Downtown / River Walk corridor, Medical Center / UT Health SA, Pearl District, UTSA / Loop 1604, Stone Oak corporate parks.",
      "Events: AT&T Center (Spurs), Alamodome, Henry B. González Convention Center, The Majestic Theatre, San Antonio Botanical Garden.",
      "Beyond San Antonio: Austin (1.5 hrs), New Braunfels / Gruene (45 min), Fredericksburg / Hill Country (1.5 hrs), Corpus Christi (2.5 hrs). Our hourly chauffeur service is perfect for Hill Country wine trails and New Braunfels river excursions.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore San Antonio Services →",
  },
 
  pricing: {
    h2: "San Antonio Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during Fiesta. Contact us for Austin, Fredericksburg, Corpus Christi, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// MILWAUKEE — English
// ══════════════════════════════════════════════════════════════════
{
  id: "milwaukee",
  FA: "locationMilwaukeeFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/MilwaukeeLocation.png",
      alt: "Viaro black car service in Milwaukee with Downtown skyline and Lake Michigan, luxury sedan approaching Milwaukee Mitchell International Airport.",
      caption:
        "From MKE to the Third Ward, Brookfield to Lake Geneva—Viaro delivers seamless executive transportation across Greater Milwaukee and the Milwaukee-Chicago corridor.",
    },
    h1: "Milwaukee Black Car Service",
    h2: "MKE — Fixed Fares, No Surcharges, 24/7",
    description:
      "Milwaukee on your schedule. Whether you are landing at Milwaukee Mitchell International Airport after a long flight, using MKE as a smarter alternative to O'Hare for the western suburbs, or heading to a meeting at Northwestern Mutual or Johnson Controls—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during Summerfest, the Bucks playoffs, or when manufacturing and healthcare conferences fill the Baird Center. Professional chauffeurs who know every route from MKE to Downtown, Brookfield, Waukesha, Racine, and all the way to Chicago.",
    cta: { book: "Book Your Milwaukee Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Milwaukee's Manufacturing, Corporate & Cultural Leaders",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Milwaukee Mitchell International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless MKE Pickups",
    image: {
      src: "/images/MKEArrival.png",
      alt: "Viaro chauffeur at Milwaukee Mitchell International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every I-894 shortcut, every Milwaukee-Chicago corridor route, and every destination across Greater Milwaukee.",
    },
    content: [
      "MKE is a compact, well-run airport—7 miles south of downtown via I-894. Southwest Airlines' Milwaukee hub, with direct service to major hubs across the US. An alternative entry point for Chicago's western suburbs.",
      "Insider tip: MKE is a genuine alternative to O'Hare or Midway for Waukesha County and Lake County Illinois passengers. Viaro serves the full Milwaukee-to-Chicago corridor with fixed-rate transfers.",
      "Popular destinations from MKE: Downtown Milwaukee, Third Ward, Brookfield, Waukesha, Wauwatosa, Racine.",
    ],
  },
 
  whereSection: {
    h2: "Where Milwaukee Moves with Viaro",
    image: {
      src: "/images/MilwaukeeHotels.png",
      alt: "Viaro luxury black car outside iconic Milwaukee hotel providing executive transportation service near the Fiserv Forum.",
      caption:
        "From Fiserv Forum to Summerfest grounds, Northwestern Mutual to Lake Geneva, Viaro moves Milwaukee's most demanding travelers.",
    },
    items: [
      {
        label: "Downtown / Third Ward",
        time: "15 min",
        desc: "The Pfister, Fiserv Forum, Summerfest grounds, Milwaukee Art Museum, Riverwalk",
      },
      {
        label: "Wauwatosa / Brookfield",
        time: "20 min",
        desc: "Brookfield Square, Milwaukee Tool campus, corporate offices, luxury residential",
      },
      {
        label: "Waukesha / I-94 Corridor",
        time: "25 min",
        desc: "Waukesha corporate parks, GE Healthcare, I-94 business corridor",
      },
      {
        label: "Racine",
        time: "30 min",
        desc: "Johnson Controls HQ, SC Johnson, Case IH, Racine waterfront",
      },
      {
        label: "Lake Geneva",
        time: "1 hr",
        desc: "Grand Geneva Resort, Abbey Resort, lakefront estates, year-round recreation",
      },
      {
        label: "Chicago Suburbs",
        time: "1 hr",
        desc: "Waukegan, Lake Forest, Libertyville, Lake County Illinois corporate corridor",
      },
    ],
    content: [
      "Luxury Hotels: The Pfister Hotel, Kimpton Journeyman Hotel, Saint Kate—The Arts Hotel, Iron Horse Hotel, Ambassador Hotel.",
      "Business: Downtown Milwaukee CBD / Third Ward, Milwaukee Tool / Brookfield, Northwestern Mutual HQ, Waukesha / I-94 corridor, Racine / Johnson Controls.",
      "Events: Fiserv Forum (Bucks), American Family Field (Brewers), Summerfest grounds, Baird Center / Frontier Airlines Center, Milwaukee Art Museum.",
      "Beyond Milwaukee: Racine / Kenosha (30–45 min), Lake Geneva (1 hr), Chicago (1.5 hrs), Madison (1.5 hrs). Our hourly chauffeur service is ideal for Lake Geneva resort excursions and Milwaukee-to-Chicago corporate transfers.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Milwaukee Services →",
  },
 
  pricing: {
    h2: "Milwaukee Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during Summerfest. Contact us for Chicago, Madison, Lake Geneva, and corridor transfer quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
// ══════════════════════════════════════════════════════════════════
// SAVANNAH — English
// ══════════════════════════════════════════════════════════════════
{
  id: "savannah",
  FA: "locationSavannahFA",
  Testi: "locationTestimonials",
 
  hero: {
    image: {
      src: "/images/SavannahLocation.png",
      alt: "Viaro black car service in Savannah with historic squares and moss-draped oaks, luxury sedan approaching Savannah/Hilton Head International Airport.",
      caption:
        "From SAV to the historic squares, Hilton Head to Palmetto Bluffs—Viaro delivers seamless luxury transportation across the Georgia and South Carolina Lowcountry.",
    },
    h1: "Savannah & Hilton Head Black Car Service",
    h2: "SAV — Fixed Fares, No Surcharges, 24/7",
    description:
      "Savannah and Hilton Head on your schedule. Whether you are landing at Savannah/Hilton Head International Airport after a long flight, heading to a historic inn on the Downtown squares, or making your way to Sea Pines or Palmetto Bluffs—Viaro is already there, curbside and ready. Transparent pricing with rates locked at booking. No rideshare surges during St. Patrick's Day, the RBC Heritage at Harbour Town, or peak wedding season in one of America's most romantic cities. Professional chauffeurs who know every route from SAV to the historic squares, Hilton Head, Bluffton, and the entire Georgia Lowcountry.",
    cta: { book: "Book Your Savannah Black Car", phone: "(206) 672-8281" },
  },
 
  trustBarTitle: "Trusted by Savannah's Resort Guests, Wedding Travelers & Lowcountry Visitors",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "1 Airport",
    "24/7 Live Support",
  ],
 
  bodyContent: {
    h2: "Savannah/Hilton Head International Airport: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless SAV Pickups",
    image: {
      src: "/images/SAVArrival.png",
      alt: "Viaro chauffeur at Savannah/Hilton Head International Airport loading luggage into luxury black car at terminal arrivals.",
      caption:
        "We know every bridge timing, every US-278 pattern, and every route across the Georgia and South Carolina Lowcountry.",
    },
    content: [
      "SAV serves both Savannah and the Hilton Head Island corridor—8 miles northwest of downtown Savannah via I-16. A compact, well-run airport with direct service from major hubs.",
      "Insider tip: SAV is the correct airport for both downtown Savannah and Hilton Head Island (45 minutes via US-278). Viaro serves both markets. For Bluffton, Sea Pines, or Palmetto Bluffs, your driver takes 278 east after the bridge.",
      "Popular destinations from SAV: Historic Downtown Savannah, Savannah suburbs, Hilton Head Island, Bluffton, Palmetto Bluffs.",
    ],
  },
 
  whereSection: {
    h2: "Where Savannah & Hilton Head Move with Viaro",
    image: {
      src: "/images/SavannahHotels.png",
      alt: "Viaro luxury black car outside iconic Savannah historic inn on a moss-draped square providing executive transportation service.",
      caption:
        "From Savannah's cobblestone squares to Hilton Head's ocean fairways, Viaro moves the Lowcountry's most discerning guests.",
    },
    items: [
      {
        label: "Historic Downtown Savannah",
        time: "15 min",
        desc: "The Brice, Perry Lane Hotel, The Gastonian, Forsyth Park, City Market",
      },
      {
        label: "Savannah Suburbs / Ardsley Park",
        time: "20 min",
        desc: "Ardsley Park, Midtown Savannah, residential neighborhoods, Garden City",
      },
      {
        label: "Hilton Head Island",
        time: "45 min",
        desc: "Sea Pines Resort, Harbour Town, South Beach, luxury rental communities",
      },
      {
        label: "Bluffton",
        time: "40 min",
        desc: "Old Town Bluffton, Palmetto Bluffs, corporate offices, May River corridor",
      },
      {
        label: "Palmetto Bluffs / Montage",
        time: "45 min",
        desc: "Montage Palmetto Bluffs, Wilson Village, May River golf, private estates",
      },
      {
        label: "Beaufort / Port Royal",
        time: "1 hr",
        desc: "Historic Beaufort SC, MCAS Beaufort, Port Royal Sound, antebellum estates",
      },
    ],
    content: [
      "Hotels: The Brice Savannah, Perry Lane Hotel, The Gastonian, Montage Palmetto Bluffs, The Sea Pines Resort Hilton Head.",
      "Districts: Historic Downtown Savannah / squares, Ardsley Park, Savannah suburbs, Hilton Head Island, Bluffton, Daufuskie Island (ferry connection).",
      "Events & Culture: Savannah Civic Center, Trustees Theater, SCAD Museum of Art, St. Patrick's Day Festival (March), Savannah College of Art and Design.",
      "Beyond Savannah: Charleston SC (2 hrs), Jacksonville FL (2 hrs), Beaufort SC (1 hr), Atlanta (4 hrs). Our hourly chauffeur service is ideal for plantation tours, wine excursions through Bluffton, and full-day Lowcountry explorations.",
      "See our full corporate transportation services and hourly chauffeur options.",
    ],
    cta: "Explore Savannah & Hilton Head Services →",
  },
 
  pricing: {
    h2: "Savannah & Hilton Head Black Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 149,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Real-time flight tracking",
          "Fixed rate — no increases",
          "Meet & greet included",
        ],
      },
      {
        type: "SUV",
        price: 189,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra space for luggage",
          "Pre-assigned driver",
          "Flight tracking included",
          "Meet & greet included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Executive Sprinter",
        price: 299,
        passengers: 13,
        bags: 10,
        extras: [
          "Group & corporate travel",
          "Captain's seats",
          "USB charging throughout",
          "Flight tracking included",
        ],
      },
    ],
    note: "Fixed rates at the time of booking. No surge pricing — ever. Not even during St. Patrick's Day. Contact us for Charleston, Jacksonville, Beaufort, and long-distance quotes.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
];


// ─────────────────────────────────────────────────────────────────────────────
// SPANISH
// ─────────────────────────────────────────────────────────────────────────────
export const locationEs: LocationItem[] = [
  // ══════════════════════════════════════════════════════════════════
  // SEATTLE-TACOMA
  // ══════════════════════════════════════════════════════════════════
  {
    id: "seattle-seatac-airport",
    FA: "LocationsSeaTacFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/SeaTacLocation.png",
        alt: "SUV de servicio de auto de lujo Viaro en el Aeropuerto Internacional de Seattle-Tacoma con el Monte Rainier visible al fondo.",
        caption:
          "Aeropuerto Internacional de Seattle-Tacoma: La puerta de entrada al Noroeste del Pacífico. Viaro ofrece servicio profesional de auto hacia todos los destinos del Puget Sound.",
      },
      h1: "Servicio de Auto en el Aeropuerto de Seattle-Tacoma (SEA)",
      h2: "SeaTac • Puertos de Cruceros • Boeing Field • Vancouver BC, Gig Harbor, Bellevue, Tacoma y todo el Puget Sound",
      description:
        "Seattle es nuestro hogar. Aquí comenzó Viaro—y aquí establecemos el estándar. Por más de 11 años, Viaro ha servido al Noroeste del Pacífico desde nuestra sede en Tukwila, a solo minutos del Aeropuerto de SeaTac. Conocemos cada terminal, cada muelle de cruceros, cada ruta alterna en el tráfico de Bellevue. Cuando los ejecutivos de Amazon necesitan traslados al aeropuerto, cuando los pasajeros de cruceros de Alaska necesitan recogidas sin contratiempos, cuando los equipos de Microsoft necesitan transporte terrestre a Vancouver—nos llaman a nosotros. Precios transparentes con tarifas fijas al reservar. Sin alzas de precio cuando los cruceros atracan o las conferencias tecnológicas saturan la ciudad. Choferes profesionales que han recorrido estas rutas miles de veces. Este es nuestro territorio—y se nota.",
      cta: { book: "Reservar Servicio de Auto SEA-TAC", phone: "(206) 672-8281" },
    },

    trustBarTitle: "La confianza de los viajeros del Puget Sound",
    trustBar: [
      "60,000+ Viajes",
      "99.8% Puntualidad",
      "Seguimiento de Vuelos",
      "Sede en Seattle 11 Años",
    ],

    bodyContent: {
      h2: "Sobre los Aeropuertos y Puertos de Seattle: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: {
        src: "/images/SeaTacTerminal.png",
        alt: "Interior de la Terminal Central del Aeropuerto de Seattle-Tacoma con pasajeros dirigiéndose a la recogida de equipaje.",
        caption:
          "La Terminal Central de SEA-TAC atiende a más de 51 millones de pasajeros al año, haciendo esencial el transporte terrestre rápido.",
      },
      content: [
        <>
          <A href="https://www.portseattle.org/sea-tac">
            El Aeropuerto Internacional de Seattle-Tacoma (SEA)
          </A>{" "}
          es el octavo aeropuerto más concurrido de los Estados Unidos. Más de 51
          millones de pasajeros lo transitan cada año, convirtiéndolo en la
          principal puerta de entrada al Noroeste del Pacífico. El aeropuerto
          está ubicado a 14 millas al sur del centro de Seattle, junto a la
          Interestatal 5, cerca de las ciudades de SeaTac y Tukwila.
        </>,
        "SEA tiene una terminal principal con cuatro grandes espacios abiertos, conocidos como concursos o patios, lo que lo hace más fácil de navegar que grandes hubs como LAX o JFK. El Concurso A alberga a Alaska Airlines, el mayor operador del aeropuerto. Los Concursos B, C y D sirven a Delta, United, American, Southwest y vuelos internacionales.",
        <>
          Antes de su vuelo, puede tomar un café en uno de los muchos locales de
          Starbucks en la terminal. Es perfecto para Seattle, ciudad natal de la
          cadena. Para una comida completa,{" "}
          <A href="https://florarestaurantgroup.com/restaurant/floret-seatac/">
            Floret by Café Flora
          </A>{" "}
          ofrece cocina del Noroeste del Pacífico cerca de las puertas C.{" "}
          <A href="https://bambuza.com/seatac">Bambuza Vietnam Kitchen</A> sirve
          pho y banh mi en la Terminal Central.
        </>,
        "El tráfico de Seattle es uno de los peores de América. Durante la hora pico vespertina (3–7 PM), lo que debería ser un trayecto de 20 minutos al centro puede tardar más de una hora en la I-5. Pero no se preocupe, nuestros conductores conocen otras rutas. Toman la I-405 por Renton cuando la I-5 está saturada. Usan la SR-99 para West Seattle. Utilizan calles secundarias por Georgetown cuando un accidente bloquea la autopista.",
        <>
          Monitoreamos el tráfico en tiempo real desde{" "}
          <A href="https://wsdot.wa.gov/travel/real-time/traffic">WSDOT</A> y
          ajustamos las rutas durante su viaje. Si el puente 520 se satura,
          tomamos la I-90. Si hay un accidente cerca del{" "}
          <A href="https://www.seahawks.com">
            Lumen Field (sede de los Seattle Seahawks)
          </A>
          , lo sabemos antes de llegar al empalme. Este conocimiento local ahorra
          entre 20 y 30 minutos en días concurridos.
        </>,
        "Después de recoger su equipaje en la recogida de equipajes de la Terminal Central, tiene dos opciones: pelear con la multitud en la acera de recogida o usar el atajo local. Los viajeros inteligentes se dirigen al tercer piso del estacionamiento y salen junto a los marcadores de ascensor morado. Su chofer de Viaro espera justo ahí—sin multitudes, sin confusión, sin esperar bajo la lluvia de Seattle; solo traslados impecables.",
      ],
    },

    extraContent: [
      {
        h3: "Aeropuerto Internacional de Seattle-Tacoma (SEA)",
        image: {
          src: "/images/SeaTacArrival.png",
          alt: "Chofer de Viaro en el Aeropuerto de SeaTac cargando equipaje en un auto de lujo negro en la zona de llegadas de la terminal.",
          caption:
            "Nuestra sede está a 8 minutos de SeaTac. Conocemos este aeropuerto mejor que nadie.",
        },
        content: [
          "SeaTac es el 8° aeropuerto más concurrido de los Estados Unidos—un hub principal de Alaska Airlines y Delta, con más de 50 millones de pasajeros anuales. Una terminal central, cuatro concursos y el famoso empalme de I-5/I-405 que puede convertir un viaje de 20 minutos en una hora.",
          "Consejo experto: Los pasajeros internacionales pasan aduana en el extremo sur de la terminal—cuente entre 45 y 90 minutos después de aterrizar. Viaro rastrea su vuelo en tiempo real y ajusta la recogida automáticamente. Lo esperamos en el nivel de llegadas del tercer piso (vehículos comerciales)—no en el estacionamiento de rideshares.",
          <>
            Destinos populares desde SEA:{" "}
            <A href="https://visitseattle.org/">Centro de Seattle</A>, Bellevue,
            Redmond (Microsoft), Amazon HQ, Tacoma, terminales de cruceros y el
            corredor tecnológico del Eastside.
          </>,
        ],
        cta: "Reservar Traslado SeaTac →",
      },
      {
        h3: "Terminal de Cruceros: Muelle 66 (Bell Street)",
        image: {
          src: "/images/Pier66Terminal.png",
          alt: "Van Sprinter negra de Viaro en la terminal de cruceros Muelle 66 de Seattle con un crucero visible y la Bahía Elliott al fondo.",
          caption:
            "Traslados impecables entre SeaTac y las terminales de cruceros de Seattle—la puerta de entrada a Alaska.",
        },
        content: [
          "El Muelle 66 está en el malecón del centro de Seattle, a pasos del Mercado Pike Place. Norwegian Cruise Line y Oceania Cruises operan desde aquí. La ubicación es conveniente para recorrer la ciudad antes del crucero, pero el estacionamiento en la calle es limitado y las zonas de descenso pueden ser caóticas los días de embarque.",
          "Consejo experto: Viaro lo deja en la entrada de la terminal, coordina el equipaje con los maleteros y evita el laberinto del estacionamiento. Si llega desde SeaTac, programamos las recogidas para evitar la congestión matutina en el centro.",
          <>
            Consulte nuestro servicio dedicado de{" "}
            <a
              href="/es/servicio-auto-lujo/traslados-puerto-cruceros"
              className="underline text-white/70 hover:text-white transition-colors"
            >
              traslados a puertos de cruceros
            </a>{" "}
            para más detalles sobre transporte para cruceros de Alaska.
          </>,
        ],
        cta: "Reservar Traslado a Terminal de Cruceros →",
      },
      {
        h3: "Terminal de Cruceros: Muelle 91 (Smith Cove)",
        image: {
          src: "/images/Pier91Terminal.png",
          alt: "Sedán de lujo negro con el skyline de Seattle con la Space Needle, el skyline del centro de Bellevue y cruceros en el Muelle 91.",
          caption:
            "Desde SeaTac hasta los cruceros, Viaro lo conecta con el Puget Sound, ayudándole a llegar a cada destino.",
        },
        content: [
          <>
            El Muelle 91 es la principal instalación de cruceros de Seattle—ubicada
            en el barrio Interbay, a unos 10 minutos al norte del centro.{" "}
            <A href="https://www.princess.com/">Princess Cruises</A>,{" "}
            <A href="https://www.hollandamerica.com/">Holland America</A>,{" "}
            <A href="https://www.royalcaribbean.com/">Royal Caribbean</A> y{" "}
            <A href="https://www.celebritycruises.com/">Celebrity Cruises</A>{" "}
            utilizan esta terminal.
          </>,
          "Consejo experto: El Muelle 91 tiene carriles de descenso dedicados y mejor flujo de tráfico que el Muelle 66. Coordinamos los tiempos de llegada con los horarios de embarque del barco—sin esperar horas en la fila. Para el desembarque, rastreamos la llegada del barco y lo esperamos en cuanto salga de la terminal.",
          <>
            Consulte nuestro servicio dedicado de{" "}
            <a
              href="/es/servicio-auto-lujo/traslados-puerto-cruceros"
              className="underline text-white/70 hover:text-white transition-colors"
            >
              traslados a puertos de cruceros
            </a>{" "}
            para más detalles sobre transporte para cruceros de Alaska.
          </>,
        ],
        cta: "Reservar Traslado SEA-TAC a Terminal de Cruceros →",
      },
      {
        h3: "Boeing Field (BFI) — Aviación Privada",
        image: {
          src: "/images/BoeingField.png",
          alt: "Auto de lujo negro de Viaro en Boeing Field King County International Airport para traslados de aviación privada.",
          caption:
            "Recogida en pista para aviación privada en el principal aeropuerto ejecutivo de Seattle.",
        },
        content: [
          "Boeing Field (Aeropuerto Internacional del Condado de King) es el hub de aviación privada de Seattle—a solo 5 millas del centro, sin el tráfico aéreo comercial. Ejecutivos de tecnología, dueños de equipos deportivos y viajeros de alto poder adquisitivo usan BFI para evitar SeaTac por completo.",
          <>
            Consejo experto: Viaro coordina directamente con las operaciones FBO
            incluyendo{" "}
            <A href="https://www.signatureflight.com/">Signature Flight Support</A>
            ,{" "}
            <A href="https://www.claylacy.com/">Clay Lacy Aviation</A> y{" "}
            <A href="https://www.galvinflying.com/">Galvin Flying</A>. Donde la
            seguridad lo permite, lo esperamos al pie de la escalerilla. Baje del
            avión y entre directamente al asiento trasero.
          </>,
          "Destinos populares desde BFI: Centro de Seattle (10 min), Bellevue/Eastside (20 min), Medina, Mercer Island y acceso rápido a la I-5 e I-90.",
        ],
        cta: "Reservar Traslado Boeing Field →",
      },
      {
        h3: "Seattle a Vancouver BC — Servicio Transfronterizo",
        image: {
          src: "/images/SeattleVancouver.png",
          alt: "Auto de lujo negro de Viaro ofreciendo transporte transfronterizo de Seattle a Vancouver BC.",
          caption:
            "Transporte terrestre impecable entre Seattle y Vancouver—sin conexiones de vuelo, sin complicaciones en la frontera.",
        },
        content: [
          "Vancouver BC está a solo 140 millas al norte de Seattle—cerca para un viaje de un día, pero cruzar la frontera añade complejidad. Viaro ofrece transporte terrestre transfronterizo para ejecutivos, equipos de producción cinematográfica y viajeros que prefieren evitar el vaivén de vuelos SeaTac-YVR.",
          "Consejo experto: Los cruces de Peace Arch y Pacific Highway tienen tiempos de espera diferentes—monitoreamos ambos en tiempo real y elegimos la ruta según las condiciones. Acceso al carril NEXUS disponible para cruces expeditos cuando los pasajeros están inscritos. Nosotros manejamos la logística; usted maneja sus reuniones.",
          "Rutas populares: Seattle al centro de Vancouver, SeaTac al Aeropuerto Internacional de Vancouver (YVR), Seattle a Whistler y traslados corporativos entre oficinas tecnológicas en ambas ciudades.",
        ],
        cta: "Reservar Traslado a Vancouver →",
      },
    ],

    whereSection: {
      h2: "A Dónde Se Mueve Seattle con Viaro",
      h3: "Nuestros conductores conocen cada ruta desde SEA hasta destinos en toda la región del Puget Sound:",
      image: {
        src: "/images/SeattleDestinations.png",
        alt: "Auto de lujo negro de Viaro frente a las Amazon Spheres en el centro de Seattle.",
        caption:
          "Desde la sede de Amazon hasta el campus de Microsoft, desde Pike Place hasta Bellevue—Viaro transporta a los líderes tecnológicos de Seattle.",
      },
      items: [
        {
          label: "Centro de Seattle",
          time: "20 min",
          desc: "Mercado Pike Place, sede de Amazon, centro de convenciones, hoteles del malecón",
        },
        {
          label: "Bellevue",
          time: "25 min",
          desc: "Campus de Microsoft, sede de T-Mobile, Bellevue Square, corredor tecnológico",
        },
        {
          label: "Gig Harbor",
          time: "45 min",
          desc: "Transporte a la Península, restaurantes del malecón y comunidades residenciales",
        },
        {
          label: "Redmond",
          time: "35 min",
          desc: "Campus principal de Microsoft, Nintendo of America, oficinas tecnológicas",
        },
        {
          label: "Tacoma",
          time: "30 min",
          desc: "Puerto de Tacoma, centro de Tacoma, Base Conjunta Lewis-McChord",
        },
        {
          label: "Terminales de Cruceros",
          time: "25 min",
          desc: "Muelle 66, Muelle 91 (Smith Cove) para salidas de cruceros a Alaska",
        },
      ],
      content: [
        <>
          Campus Tecnológicos:{" "}
          <A href="https://www.aboutamazon.com/">Sede de Amazon</A> (South Lake
          Union),{" "}
          <A href="https://www.microsoft.com/">Microsoft</A> (Redmond), Meta
          (Fremont), Google (Kirkland/Fremont), Sede de T-Mobile (Bellevue),
          Expedia, Zillow y el corredor de startups del Eastside.
        </>,
        <>
          Hoteles de Lujo:{" "}
          <A href="https://www.fourseasons.com/seattle/">Four Seasons Seattle</A>,{" "}
          <A href="https://www.fairmont.com/seattle/">Fairmont Olympic</A>,{" "}
          <A href="https://www.edgewaterhotel.com/">The Edgewater</A>, Thompson
          Seattle, W Seattle.
        </>,
        <>
          Convenciones y Eventos:{" "}
          <A href="https://www.wscc.com/">Washington State Convention Center</A>,{" "}
          <A href="https://climatepledgearena.com/">Climate Pledge Arena</A>{" "}
          (Kraken, conciertos),{" "}
          <A href="https://www.mlb.com/mariners/ballpark">T-Mobile Park</A>{" "}
          (Mariners), Lumen Field (Seahawks, Sounders).
        </>,
        <>
          Cultura y Gastronomía:{" "}
          <A href="https://www.pikeplacemarket.org/">Mercado Pike Place</A>,
          Space Needle, Museo de Cultura Popular, Canlis y la escena gastronómica
          de Capitol Hill.
        </>,
        "Eastside: Bellevue, Kirkland, Redmond, Mercer Island, Medina—hogar de una de las mayores concentraciones de riqueza tecnológica del país.",
        <>
          Vea nuestros completos{" "}
          <a
            href="/es/servicio-auto-lujo/transporte-corporativo"
            className="underline text-white/70 hover:text-white transition-colors"
          >
            servicios de transporte corporativo
          </a>{" "}
          para roadshows ejecutivos y traslados de equipos.
        </>,
      ],
      cta: "Explorar Servicios en Seattle →",
    },

    pricing: {
      h2: "Tarifas del Servicio de Auto en el Aeropuerto SEA-TAC",
      vehicles: [
        {
          type: "Sedán",
          price: 129,
          passengers: 3,
          bags: 2,
          extras: [
            "Chofer profesional",
            "Seguimiento de vuelo incluido",
            "Recogida en ascensor morado",
          ],
        },
        {
          type: "SUV",
          price: 159,
          passengers: 6,
          bags: 5,
          extras: [
            "Espacio extra para equipaje",
            "Chofer pre-asignado",
            "Seguimiento de vuelo incluido",
          ],
          badge: "Más Popular",
        },
        {
          type: "Meet & Greet",
          price: 25,
          passengers: 0,
          bags: 0,
          extras: [
            "Conductor dentro de la terminal",
            "Letrero con su nombre en la recogida de equipajes",
            "Complemento para cualquier vehículo",
          ],
        },
      ],
      note: "Las tarifas mostradas corresponden a viajes de hasta 18 millas. Servicio por hora: $85/hora (sedán) o $115/hora (SUV). Reserve con 30 días de anticipación y ahorre hasta un 12%. Su tarifa queda fija al reservar y nunca aumenta.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════════════════════════════════════════════════════════════
  // NEW YORK CITY
  // ══════════════════════════════════════════════════════════════════
  {
    id: "new-york",
    FA: "locationNewYorkFA",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/NewYorkLocation.png",
        alt: "Servicio de auto de lujo Viaro en Nueva York con el skyline de Manhattan y sedán de lujo aproximándose a Midtown.",
        caption:
          "Desde Wall Street hasta Teterboro, JFK hasta Newark—Viaro ofrece transporte ejecutivo impecable en toda el área metropolitana de Nueva York.",
      },
      h1: "Servicio de Auto de Lujo en Nueva York",
      h2: "JFK • LaGuardia • Newark • Teterboro • Westchester — Tarifas Transparentes, Sin Alzas, 24/7",
      description:
        "Nueva York no espera. Usted tampoco debería. En una ciudad donde cada minuto cuenta, Viaro ofrece servicio de auto negro ejecutivo que mantiene el ritmo de la ciudad más rápida del mundo. Ya sea que aterrice en JFK después de un vuelo nocturno, baje de un jet privado en Teterboro, tome un vuelo desde Newark o pase por LaGuardia—ya estamos ahí, esperando en la acera o en la pista. Precios transparentes. Seguimiento de vuelos en tiempo real. Choferes profesionales que conocen cada puente, túnel y atajo a través de los cinco condados y hacia Nueva Jersey.",
      cta: { book: "Reservar Su Auto Negro en NYC", phone: "(206) 672-8281" },
    },

    trustBarTitle: "La confianza de los líderes empresariales de Nueva York",
    trustBar: [
      "60,000+ Viajes",
      "99.8% Puntualidad",
      "5 Aeropuertos",
      "Soporte en Vivo 24/7",
    ],

    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: {
        src: "/images/JFKArrival.png",
        alt: "Chofer de Viaro cargando equipaje en auto de lujo negro en el Terminal 4 del Aeropuerto JFK.",
        caption:
          "Conocemos cada terminal, cada patrón de tráfico y cada atajo en Nueva York y Nueva Jersey.",
      },
      content: [
        "Volar a Nueva York implica navegar uno de los sistemas aeroportuarios más complejos del mundo. Cinco aeropuertos principales. Decenas de terminales. Tráfico legendario. Así es como Viaro le ayuda a superar el caos en cada uno.",
      ],
    },

    extraContent: [
      {
        h3: "Aeropuerto Internacional JFK (JFK)",
        image: {
          src: "/images/JFKTerminal.png",
          alt: "Chofer de Viaro recibiendo pasajeros en la zona de vehículos comerciales del Terminal B del Aeropuerto LaGuardia.",
          caption:
            "Las terminales del JFK se distribuyen en 5 millas de carreteras — su chofer de Viaro lo espera en la acera correcta, sin confusión.",
        },
        content: [
          "JFK atiende a 60 millones de pasajeros al año en seis terminales. El truco: saber qué terminal usa su aerolínea. Viaro rastrea su vuelo en tiempo real, por lo que estamos esperando en la terminal correcta antes de que usted siquiera pase aduana.",
          "Consejo experto: Las llegadas internacionales en los Terminales 1 y 4 pueden tardar entre 45 y 90 minutos para pasar aduana. Monitoreamos su hora de aterrizaje y ajustamos la recogida—sin quedarse en llegadas preguntándose dónde está su conductor.",
          <>
            Destinos populares desde JFK:{" "}
            <A href="https://www.nyse.com/">Wall Street</A>,{" "}
            <A href="https://www.theplazany.com/">hoteles de Midtown Manhattan</A>,{" "}
            <A href="https://www.discoverlongisland.com/the-hamptons/">
              Los Hamptons
            </A>
            .
          </>,
        ],
      },
      {
        h3: "Aeropuerto LaGuardia (LGA)",
        image: {
          src: "/images/LGATerminal.png",
          alt: "Chofer de Viaro recibiendo pasajeros en la zona de vehículos comerciales del Terminal B del Aeropuerto LaGuardia.",
          caption:
            "El nuevo Terminal B de LaGuardia — hermoso aeropuerto, recogida de rideshare confusa. Viaro lo espera en el carril de vehículos comerciales.",
        },
        content: [
          "LaGuardia es el aeropuerto más cercano a Manhattan—solo 8 millas desde Midtown. Pero no se deje engañar por la distancia. La Grand Central Parkway y la BQE pueden convertir un viaje de 20 minutos en una hora durante la hora pico.",
          "Consejo experto: El nuevo Terminal B está conectado por un puente peatonal al estacionamiento—pero la recogida de rideshare es un laberinto. Los choferes de Viaro lo esperan en el carril de vehículos comerciales en el nivel de llegadas. No tiene que caminar hasta un estacionamiento lejano.",
          <>
            Destinos populares desde LGA:{" "}
            <A href="https://www.timessquarenyc.org/">Times Square</A>,{" "}
            <A href="https://www.msg.com/">Madison Square Garden</A>,{" "}
            <A href="https://javitscenter.com/">Centro de Convenciones Javits</A>.
          </>,
        ],
      },
      {
        h3: "Aeropuerto Internacional Newark Liberty (EWR)",
        image: {
          src: "/images/EWRTerminal.png",
          alt: "Auto de lujo negro de Viaro en el Terminal C del Aeropuerto Internacional Newark Liberty.",
          caption:
            "Terminal C de Newark — hub de United. Viaro rastrea su terminal y espera en la acera correcta.",
        },
        content: [
          "Newark es el hub de United Airlines y suele ser la mejor opción para quienes viajan a Nueva Jersey, el Bajo Manhattan o cualquier punto del corredor del tren PATH. También suele estar menos concurrido que JFK—y a veces resulta más económico para volar.",
          "Consejo experto: El Terminal C es dominio de United—enorme pero bien organizado. Los Terminales A y B sirven al resto. El AirTrain conecta todas las terminales, pero si llega al Terminal A y su auto espera en el Terminal C, eso significa un desvío de 15 minutos. Viaro rastrea su terminal y lo espera en la acera de llegadas correcta.",
          <>
            Destinos populares desde EWR: Jersey City, Hoboken, Bajo Manhattan
            (vía Holland Tunnel),{" "}
            <A href="https://www.prucenter.com/">Prudential Center</A>,
            Princeton y conexiones a Filadelfia.
          </>,
        ],
      },
      {
        h3: "Aeropuerto Teterboro (TEB) — Aviación Privada",
        image: {
          src: "/images/TEBTarmac.png",
          alt: "SUV de lujo negro de Viaro esperando en la pista del FBO del Aeropuerto de Teterboro para la llegada de un jet privado.",
          caption:
            "Teterboro — donde vuela Wall Street. Lo esperamos al pie de la escalerilla. Tiempo total en tierra: menos de 2 minutos.",
        },
        content: [
          "Teterboro es donde vuela Wall Street. Este aeropuerto exclusivo para FBO en Nueva Jersey maneja más tráfico de jets privados que casi cualquier otro lugar del país. Si aterriza aquí, espera un auto esperando en la pista—no en un estacionamiento.",
          <>
            Consejo experto: Viaro coordina directamente con las operaciones FBO
            en{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            y{" "}
            <A href="https://www.atlanticaviation.com/">Atlantic Aviation</A>.{" "}
            Donde la seguridad lo permite, lo esperamos al pie de la escalerilla.
            Tiempo total en tierra: menos de 2 minutos.
          </>,
          "Destinos populares desde TEB: Distrito Financiero, Midtown, Greenwich CT y conexiones en helicóptero a los Hamptons.",
        ],
      },
      {
        h3: "Aeropuerto del Condado de Westchester (HPN)",
        image: {
          src: "/images/HPNAirport.png",
          alt: "Auto de lujo negro de Viaro en el Aeropuerto del Condado de Westchester para ejecutivos corporativos y viajeros de la Costa Dorada de Connecticut.",
          caption:
            "Aeropuerto del Condado de Westchester — evite el caos del JFK. Directo a Manhattan por la I-95 o la Hutchinson River Parkway.",
        },
        content: [
          "HPN sirve a los ejecutivos corporativos de Westchester y la Costa Dorada de Connecticut. Maneja vuelos comerciales (JetBlue, American, United) y aviación privada. Menos aglomeración. Seguridad más rápida. Y acceso directo por la I-95 o la Hutchinson River Parkway hasta Manhattan.",
          <>
            Consejo experto: Si vive en Westchester, Greenwich o Stamford—evite
            el caos del JFK y LaGuardia. HPN es su aeropuerto local. Viaro ofrece
            traslados a la{" "}
            <A href="https://www.ibm.com/">sede de IBM</A>,{" "}
            <A href="https://www.pepsico.com/">PepsiCo</A> y el corredor de fondos
            de cobertura en Stamford.
          </>,
        ],
        cta: "Reservar Su Traslado al Aeropuerto →",
      },
    ],

    whereSection: {
      h2: "A Dónde Se Mueve Nueva York con Viaro",
      image: {
        src: "/images/NewYorkHotels.png",
        alt: "Auto de lujo negro de Viaro frente a un icónico hotel de Manhattan ofreciendo servicio de transporte ejecutivo.",
        caption:
          "Desde hoteles de cinco estrellas hasta sedes de Fortune 500, Viaro transporta a los viajeros más exigentes de Nueva York.",
      },
      content: [
        <>
          Hoteles de Manhattan:{" "}
          <A href="https://www.theplazany.com/">The Plaza</A>,{" "}
          <A href="https://www.marriott.com/hotels/travel/nycxr-the-st-regis-new-york/">
            The St. Regis
          </A>
          ,{" "}
          <A href="https://www.fourseasons.com/newyork/">Four Seasons</A>,{" "}
          <A href="https://www.peninsula.com/en/new-york">The Peninsula</A>.
        </>,
        "Distritos de Negocios: Wall Street/Distrito Financiero, Midtown (corredor de Park Avenue), Hudson Yards, World Trade Center, malecón de Jersey City.",
        <>
          Eventos y Entretenimiento:{" "}
          <A href="https://www.msg.com/">Madison Square Garden</A>,{" "}
          <A href="https://www.lincolncenter.org/">Lincoln Center</A>,{" "}
          <A href="https://www.broadway.com/">Teatros de Broadway</A>, Yankee
          Stadium, MetLife Stadium.
        </>,
        "Más allá de Manhattan: Los Hamptons, Greenwich CT, Princeton NJ, Atlantic City y conexiones al otro lado del Hudson hacia Hoboken y Jersey City.",
        <>
          Vea nuestros completos{" "}
          <a
            href="/es/servicio-auto-lujo/transporte-corporativo"
            className="underline text-white hover:text-primary transition-colors"
          >
            servicios de transporte corporativo
          </a>{" "}
          y{" "}
          <a
            href="/es/servicio-auto-lujo/chofer-por-hora"
            className="underline text-white hover:text-primary transition-colors"
          >
            opciones de chofer por hora
          </a>
        </>,
      ],
      cta: "Explorar Servicios en NYC →",
    },

    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en NYC",
      vehicles: [
        {
          type: "Sedán",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Chofer profesional",
            "Seguimiento de vuelo incluido",
            "Tarifa plana — sin alzas",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Espacio extra para equipaje",
            "Chofer pre-asignado",
            "Seguimiento de vuelo incluido",
          ],
          badge: "Más Popular",
        },
        {
          type: "Van Sprinter",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Viaje grupal y corporativo",
            "Asientos capitán con vista al frente",
            "Carga USB",
          ],
        },
      ],
      note: "Tarifas planas fijas al reservar. Sin alzas de precio — nunca. Contáctenos para cotizaciones a los Hamptons, Connecticut y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════════════════════════════════════════════════════════════
  // LOS ÁNGELES
  // ══════════════════════════════════════════════════════════════════
  {
    id: "los-angeles",
    FA: "LocationsLAFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/LosAngeles.png",
        alt: "Servicio de auto de lujo Viaro en Los Ángeles con el skyline del centro y un sedán de lujo en un bulevar bordeado de palmeras.",
        caption:
          "Desde Hollywood hasta las playas, LAX hasta Van Nuys—Viaro ofrece transporte ejecutivo impecable en todo el Gran Los Ángeles.",
      },
      h1: "Servicio de Auto de Lujo en Los Ángeles",
      h2: "LAX • Van Nuys • Burbank • Long Beach • Orange County — Tarifas Planas, Sin Alzas, 24/7",
      description:
        "En LA, o estás atrapado en el tráfico—o tienes un conductor que sabe cómo evitarlo. Los Ángeles son 500 millas cuadradas de autopistas, cañones y costas. Ir de LAX a Beverly Hills puede tomar 25 minutos o 2 horas dependiendo de la hora. Por eso ejecutivos, profesionales del entretenimiento y viajeros exigentes confían en Viaro para navegar la metrópolis. Ya sea que aterrice en LAX después de un vuelo internacional, baje de un jet privado en Van Nuys o tome un vuelo de Southwest desde Burbank—ya estamos ahí. Tarifas transparentes. Choferes profesionales que conocen cada atajo desde el Valle hasta la playa.",
      cta: { book: "Reservar Su Auto Negro en LA", phone: "(206) 672-8281" },
    },

    trustBarTitle: "La confianza de la élite del entretenimiento y los negocios de LA",
    trustBar: [
      "60,000+ Viajes",
      "99.8% Puntualidad",
      "6 Aeropuertos",
      "Soporte en Vivo 24/7",
    ],

    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "Trucos para Evitar el Tráfico de las Terminales",
      image: {
        src: "/images/LAXArrival.png",
        alt: "Chofer de Viaro en el Aeropuerto LAX cargando equipaje en auto de lujo negro con los icónicos pilones de LAX al fondo.",
        caption:
          "Conocemos cada terminal, cada ruta alterna y cada patrón de tráfico en todo el Gran Los Ángeles.",
      },
      content: [
        "El Gran Los Ángeles tiene más aeropuertos que cualquier otra área metropolitana del país. Saber cuál usar—y cómo entrar y salir de manera eficiente—marca la diferencia entre un viaje fluido y una pesadilla. Así es como Viaro le ayuda a navegar cada uno.",
      ],
    },

    extraContent: [
      {
        h3: "Aeropuerto Internacional de Los Ángeles (LAX)",
        image: {
          src: "/images/LAXTerminal.png",
          alt: "Auto de lujo negro de Viaro en el nivel de llegadas del Aeropuerto Internacional de Los Ángeles para Beverly Hills, Santa Mónica y el centro de LA.",
          caption:
            "Llegadas en LAX — evite el caos del rideshare. Viaro lo espera en la zona de recogida de su terminal correcta, siempre.",
        },
        content: [
          "LAX es el quinto aeropuerto más concurrido del mundo—88 millones de pasajeros al año en 9 terminales. El diseño en herradura es famoso por sus embotellamientos, especialmente en hora pico. Pero hay trucos.",
          "Consejo experto: Evite el caos del estacionamiento LAX-it. Los choferes de Viaro lo esperan en las zonas de recogida designadas en el nivel de llegadas—no en el estacionamiento de rideshares al otro lado del aeropuerto. Rastreamos su vuelo para llegar exactamente cuando usted recoge su equipaje.",
          <>
            Destinos populares desde LAX:{" "}
            <A href="https://www.beverlyhills.org/">Beverly Hills</A>,{" "}
            <A href="https://www.santamonica.com/">Santa Mónica</A>, Centro de LA,{" "}
            <A href="https://www.hollywoodchamber.net/">Hollywood</A>, Malibú y
            oficinas tecnológicas del Westside.
          </>,
        ],
      },
      {
        h3: "Aeropuerto de Van Nuys (VNY) — Aviación Privada",
        image: {
          src: "/images/VNYTarmac.png",
          alt: "SUV negro de Viaro recibiendo jet privado en la pista del FBO del Aeropuerto de Van Nuys con las Hollywood Hills al fondo.",
          caption:
            "Van Nuys — el aeropuerto de aviación general más concurrido del mundo. Lo esperamos al pie de la escalerilla.",
        },
        content: [
          "Van Nuys es el aeropuerto de aviación general más concurrido del mundo. Aquí vuela Hollywood—ejecutivos de estudios, talentos de primer nivel y billonarios tecnológicos aterrizan aquí a diario. Si llega en jet privado, VNY es su puerta de entrada a LA.",
          <>
            Consejo experto: Viaro coordina directamente con FBOs, incluyendo{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>
            ,{" "}
            <A href="https://www.castlecookeaviation.com/">
              Castle & Cooke Aviation
            </A>{" "}
            y <A href="https://www.jetaviation.com/">Jet Aviation</A>. Donde la
            seguridad lo permite, lo esperamos al pie de la escalerilla. Baje del
            avión y entre directamente al asiento trasero.
          </>,
          "Destinos populares desde VNY: Beverly Hills, Bel Air, Malibú, Warner Bros. Studios, Universal Studios, estudios de Netflix/Amazon/Apple en Hollywood.",
        ],
      },
      {
        h3: "Aeropuerto Hollywood Burbank (BUR)",
        image: {
          src: "/images/BURTerminal.png",
          alt: "Auto de lujo negro de Viaro esperando en la entrada de la terminal del Aeropuerto Hollywood Burbank.",
          caption:
            "Burbank — salga directamente de la puerta a su auto de Viaro. Sin trasbordos, sin estacionamientos remotos.",
        },
        content: [
          "Burbank es el secreto mejor guardado de LA. Menos aglomeración, seguridad más rápida y puede ir de la puerta a su auto en menos de 5 minutos. Si se dirige al Valle, Pasadena o el centro de LA, evite el LAX y vuele a Burbank.",
          "Consejo experto: La terminal es pequeña—simplemente salga y su auto de Viaro ya está en la acera. Sin trasbordos, sin estacionamientos remotos. Southwest, JetBlue, American, United y Delta operan aquí.",
          <>
            Destinos populares desde BUR:{" "}
            <A href="https://www.wbstudiotour.com/">Warner Bros. Studios</A>,{" "}
            <A href="https://www.universalstudioshollywood.com/">
              Universal Studios
            </A>
            , Disney Studios, Pasadena/Rose Bowl, Glendale.
          </>,
        ],
      },
      {
        h3: "Aeropuerto de Long Beach (LGB)",
        image: {
          src: "/images/LGBTerminal.png",
          alt: "Auto de lujo negro de Viaro en la boutique terminal del Aeropuerto de Long Beach con palmeras y cielos despejados de California.",
          caption:
            "Long Beach — aeropuerto boutique, sin el tráfico de LAX. El más cercano a la terminal de cruceros del Puerto de Long Beach.",
        },
        content: [
          "Long Beach es un aeropuerto boutique con fieles seguidores. JetBlue domina aquí, con vuelos asequibles y una atmósfera relajada, casi vacacional. También es el aeropuerto más cercano a la terminal de cruceros del Puerto de Long Beach.",
          "Consejo experto: Si va a tomar un crucero desde Long Beach, vuele a LGB y evite el tráfico de LAX por completo. Ofrecemos traslados impecables directamente al barco.",
          <>
            Destinos populares desde LGB:{" "}
            <A href="https://www.queenmary.com/">Queen Mary</A>, Acuario del
            Pacífico, Centro de Long Beach, playas de Orange County, Disneyland.
          </>,
        ],
      },
      {
        h3: "Aeropuerto John Wayne / Orange County (SNA)",
        image: {
          src: "/images/SNATerminal.png",
          alt: "Auto de lujo negro de Viaro en el nivel inferior de llegadas del Aeropuerto John Wayne Orange County para viajeros a Newport Beach y Disneyland.",
          caption:
            "Aeropuerto John Wayne — 15 minutos a Disneyland, 10 minutos a Newport Beach. Más tranquilo que LAX.",
        },
        content: [
          <>
            El Aeropuerto John Wayne (también conocido como SNA o JWA) sirve a
            las comunidades costeras adineradas de Orange County—{" "}
            <A href="https://www.visitnewportbeach.com/">Newport Beach</A>,{" "}
            <A href="https://www.visitlagunabeach.com/">Laguna Beach</A>, Irvine
            y el{" "}
            <A href="https://disneyland.disney.go.com/">Complejo Disneyland</A>.{" "}
            Para viajeros que se dirigen al sur de LA, este aeropuerto ahorra
            entre 30 y 60 minutos en comparación con el LAX.
          </>,
          "Consejo experto: SNA tiene reglas estrictas de ruido—más pequeño y más tranquilo para los pasajeros. Viaro lo espera directamente en la acera del nivel inferior de llegadas.",
          <>
            Destinos populares desde SNA:{" "}
            <A href="https://disneyland.disney.go.com/">Disneyland</A>,{" "}
            <A href="https://www.visitnewportbeach.com/">Newport Beach</A>,{" "}
            <A href="https://www.visitlagunabeach.com/">Laguna Beach</A>, campus
            tecnológicos de Irvine, Centro de Convenciones de Anaheim.
          </>,
        ],
        cta: "Reservar Su Traslado al Aeropuerto →",
      },
    ],

    whereSection: {
      h2: "A Dónde Se Mueve LA con Viaro",
      image: {
        src: "/images/LAHotels.png",
        alt: "Auto de lujo negro de Viaro frente a un icónico hotel de Beverly Hills ofreciendo transporte ejecutivo.",
        caption:
          "Desde estudios cinematográficos hasta hoteles frente al mar, Viaro transporta a los viajeros más exigentes de LA.",
      },
      content: [
        <>
          Hoteles de Lujo:{" "}
          <A href="https://www.fourseasons.com/beverlywilshire/">
            Beverly Wilshire
          </A>
          ,{" "}
          <A href="https://www.peninsula.com/en/beverly-hills">
            The Peninsula Beverly Hills
          </A>
          ,{" "}
          <A href="https://www.chateaumarmont.com/">Chateau Marmont</A>, Hotel
          Bel-Air, Shutters on the Beach.
        </>,
        "Entretenimiento y Estudios: Warner Bros., Universal, Paramount, Sony Pictures, Sede de Netflix, Amazon Studios, Apple TV+.",
        <>
          Deportes y Eventos:{" "}
          <A href="https://www.sofistadium.com/">SoFi Stadium</A>,{" "}
          <A href="https://www.cryptoarena.com/">Crypto.com Arena</A>, Dodger
          Stadium, Rose Bowl,{" "}
          <A href="https://www.lacclink.com/">Centro de Convenciones de LA</A>.
        </>,
        <>
          Compras y Estilo de Vida:{" "}
          <A href="https://www.rodeodrive-bh.com/">Rodeo Drive</A>, The Grove,
          Century City, South Coast Plaza, Fashion Island.
        </>,
        "Comunidades Costeras: Malibú, Santa Mónica, Venice, Manhattan Beach, Newport Beach, Laguna Beach.",
        <>
          Vea nuestros completos{" "}
          <a
            href="/es/servicio-auto-lujo/transporte-corporativo"
            className="underline text-white hover:text-primary transition-colors"
          >
            servicios de transporte corporativo
          </a>{" "}
          y{" "}
          <a
            href="/es/servicio-auto-lujo/chofer-por-hora"
            className="underline text-white hover:text-primary transition-colors"
          >
            opciones de chofer por hora
          </a>
        </>,
      ],
      cta: "Explorar Servicios en LA →",
    },

    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Los Ángeles",
      vehicles: [
        {
          type: "Sedán",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Chofer profesional",
            "Seguimiento de vuelo incluido",
            "Tarifa plana — sin alzas",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Espacio extra para equipaje",
            "Chofer pre-asignado",
            "Seguimiento de vuelo incluido",
          ],
          badge: "Más Popular",
        },
        {
          type: "Van Sprinter",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Viaje grupal y corporativo",
            "Asientos capitán con vista al frente",
            "Carga USB",
          ],
        },
      ],
      note: "Tarifas planas fijas al reservar. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Malibú, Orange County y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════════════════════════════════════════════════════════════
  // CHICAGO
  // ══════════════════════════════════════════════════════════════════
  {
    id: "chicago",
    FA: "LocationsChicagocoFa",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/Chicago.png", alt: "Servicio de auto de lujo Viaro en Chicago con el skyline del centro y un sedán de lujo en la Avenida Michigan.", caption: "Desde la Magnificent Mile hasta O'Hare, el Loop hasta los suburbios—Viaro ofrece transporte ejecutivo impecable en todo Chicago." },
      h1: "Servicio de Auto de Lujo en Chicago",
      h2: "O'Hare • Midway • FBO DuPage — Precios Transparentes, Tarifas Fijas, 24/7",
      description: "Chicago no se detiene por el clima, el tráfico ni las excusas. Nosotros tampoco. Ya sea que aterrice en O'Hare después de un vuelo nocturno transcontinental, vuele a Midway para una escala rápida o baje de un Gulfstream en DuPage—Viaro ya está esperando. Precios transparentes con tarifas fijas al reservar. Sin alzas cuando nieva. Seguimiento de vuelos en tiempo real. Choferes profesionales que conocen la Kennedy, la Dan Ryan y cada atajo por el Loop.",
      cta: { book: "Reservar Su Auto Negro en Chicago", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de ejecutivos y negociadores de Chicago",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "3 Aeropuertos", "Tarifas Fijas — Sin Alzas"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "Su Guía Rápida para Evitar el Tráfico en los Aeropuertos",
      image: { src: "/images/OHareArrival.png", alt: "Chofer de Viaro en el Aeropuerto O'Hare cargando equipaje en auto de lujo negro.", caption: "Conocemos cada terminal, cada patrón de tráfico y cada alternativa climática en todo Chicago." },
      content: ["El sistema aeroportuario de Chicago atiende a más de 100 millones de pasajeros al año. Solo O'Hare tiene cuatro terminales y el famoso empalme de la I-90/I-94. Saber qué terminal usar, qué ruta tomar y qué plan de contingencia aplicar distingue a los profesionales de los amateurs. Así es como Viaro le ayuda a superar el caos."],
    },
    extraContent: [
      {
        h3: "Aeropuerto Internacional O'Hare (ORD)",
        image: { src: "/images/ORDTerminal.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto Internacional O'Hare.", caption: "Terminal 5 de O'Hare — las llegadas internacionales pueden tardar 90 minutos en aduana. Viaro ya está rastreando su aterrizaje." },
        content: ["O'Hare es el sexto aeropuerto más concurrido del mundo—una fortaleza de United y American Airlines con cuatro terminales y reputación de retrasos. Pero los retrasos no significan que usted espere. Viaro rastrea cada vuelo en tiempo real.", "Consejo experto: Los vuelos internacionales llegan al Terminal 5, separado del complejo principal. Aduana puede tardar entre 30 y 90 minutos. Viaro monitorea su hora de aterrizaje y ajusta la recogida—sin quedarse afuera en un enero de Chicago.", <>Destinos populares desde ORD: <A href="https://www.choosechicago.com/">El Loop</A>, <A href="https://www.themagnificentmile.com/">Magnificent Mile</A>, <A href="https://www.mccormickplace.com/">McCormick Place</A>, River North, Evanston y los suburbios del oeste.</>],
      },
      {
        h3: "Aeropuerto Internacional Midway de Chicago (MDW)",
        image: { src: "/images/MDWTerminal.png", alt: "Auto de lujo negro de Viaro en el nivel de llegadas del Aeropuerto Midway.", caption: "Midway — más cerca del centro que O'Hare, seguridad más rápida. Viaro lo espera en el carril de vehículos comerciales." },
        content: ["Midway es el hub de Southwest en Chicago—más pequeño, más rápido y muchas veces ignorado por los visitantes. Pero los locales lo saben: Midway está más cerca del centro (11 millas vs. 17 de O'Hare).", "Consejo experto: La terminal única de Midway significa menos caminata—pero el área de recogida de rideshares está al otro lado de un puente peatonal en el estacionamiento. Viaro lo espera en el carril de vehículos comerciales en el nivel de llegadas.", "Destinos populares desde MDW: Centro de Chicago, South Side (White Sox, Universidad de Chicago), Hyde Park, Pilsen y acceso rápido a la I-55 sur."],
      },
      {
        h3: "Aeropuerto DuPage (DPA) — Aviación Privada",
        image: { src: "/images/DPATarmac.png", alt: "SUV de lujo negro de Viaro en la pista del FBO del Aeropuerto DuPage.", caption: "FBO de DuPage — la puerta de aviación privada premium de Chicago. Tiempo total en tierra: segundos, no minutos." },
        content: ["DuPage es la puerta de aviación privada premium de Chicago—ubicado a 25 millas al oeste del Loop en West Chicago, sirve a ejecutivos corporativos y viajeros en jet privado.", <>Consejo experto: Viaro coordina directamente con las operaciones FBO incluyendo <A href="https://www.signatureflight.com/">Signature Flight Support</A> y <A href="https://www.atlanticaviation.com/">Atlantic Aviation</A>. Donde la seguridad lo permite, lo esperamos al pie de la escalerilla.</>, "Destinos populares desde DPA: Centro de Chicago, campus corporativos de Naperville, Oak Brook, Schaumburg y el corredor tecnológico de la I-88."],
        cta: "Reservar Su Traslado al Aeropuerto →",
      },
    ],
    whereSection: {
      h2: "A Dónde Se Mueve Chicago con Viaro",
      image: { src: "/images/ChicagoHotels.png", alt: "Auto de lujo negro de Viaro frente a un icónico hotel de Chicago en la Avenida Michigan.", caption: "Desde la Magnificent Mile hasta los campus corporativos, Viaro transporta a los viajeros más exigentes de Chicago." },
      content: [
        <>Hoteles de Lujo: <A href="https://www.peninsula.com/en/chicago">The Peninsula Chicago</A>, <A href="https://www.langhamhotels.com/en/the-langham/chicago/">The Langham</A>, <A href="https://www.fourseasons.com/chicago/">Four Seasons</A>, <A href="https://www.ritzcarlton.com/en/hotels/chicago">The Ritz-Carlton</A>, Waldorf Astoria, Park Hyatt.</>,
        <>Distritos de Negocios: El Loop, River North, West Loop, Fulton Market, Willis Tower, <A href="https://www.boeing.com/">Sede Global de Boeing</A> y campus en Schaumburg, Oak Brook y Naperville.</>,
        <>Convenciones y Eventos: <A href="https://www.mccormickplace.com/">McCormick Place</A>, Navy Pier, <A href="https://www.unitedcenter.com/">United Center</A>, Soldier Field, Wrigley Field.</>,
        <>Universidades y Medicina: <A href="https://www.northwestern.edu/">Northwestern University</A>, Universidad de Chicago, Rush Medical Center, Northwestern Memorial Hospital.</>,
        <>Vea nuestros completos <a href="/es/servicio-auto-lujo/transporte-corporativo" className="underline text-white hover:text-primary transition-colors">servicios de transporte corporativo</a> y <a href="/es/servicio-auto-lujo/chofer-por-hora" className="underline text-white hover:text-primary transition-colors">opciones de chofer por hora</a></>
      ],
      cta: "Explorar Servicios en Chicago →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Chicago",
      vehicles: [
        { type: "Sedán", price: 95, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo incluido", "Tarifa plana — sin alzas"] },
        { type: "SUV", price: 135, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Chofer pre-asignado", "Seguimiento de vuelo incluido"], badge: "Más Popular" },
        { type: "Van Sprinter", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán con vista al frente", "Carga USB"] },
      ],
      note: "Tarifas planas fijas al reservar. Sin alzas de precio — nunca. Ni siquiera en una tormenta de nieve en Chicago. Contáctenos para cotizaciones suburbanas y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ SAN FRANCISCO ══════════
  {
    id: "san-francisco",
    FA: "LocationsSanFranciscoFa",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/SanFrancisco.png", alt: "Servicio de auto de lujo Viaro en San Francisco con el Puente Golden Gate y el skyline del centro con la Torre Salesforce.", caption: "Desde SFO hasta Napa Valley, Silicon Valley hasta la ciudad—Viaro ofrece transporte ejecutivo impecable en toda el Área de la Bahía." },
      h1: "Servicio de Auto de Lujo en el Área de la Bahía de San Francisco",
      h2: "SFO • San José • Oakland — Precios Transparentes, Tarifas Fijas, 24/7",
      description: "El Área de la Bahía funciona con innovación. Su transporte también debería. Ya sea que aterrice en SFO después de un vuelo transpacífico nocturno, vuele a San José para una presentación ante inversores o tome un vuelo de Southwest desde Oakland—ya estamos esperando. Precios transparentes con tarifas fijas al reservar. Sin alzas cuando Dreamforce satura la ciudad. Choferes profesionales que conocen la 101, la 280 y cada atajo por SOMA.",
      cta: { book: "Reservar Su Auto Negro en el Área de la Bahía", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes de Silicon Valley",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "3 Aeropuertos", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "Navegando los Aeropuertos más Transitados de Norteamérica",
      image: { src: "/images/SFOArrival.png", alt: "Chofer de Viaro en el Aeropuerto SFO cargando equipaje en auto de lujo negro.", caption: "Conocemos cada terminal, cada empalme de autopista y cada alternativa de hora pico en el Área de la Bahía." },
      content: ["El Área de la Bahía tiene tres aeropuertos principales, cada uno sirviendo diferentes partes de la región. Saber cuál usar—y cómo navegar el tráfico legendario entre ellos—distingue a los locales de los visitantes. Así es como Viaro le ayuda a moverse sin contratiempos."],
    },
    extraContent: [
      { h3: "Aeropuerto Internacional de San Francisco (SFO)", image: { src: "/images/SFOTerminal.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto Internacional de San Francisco.", caption: "Terminal Internacional de SFO — Viaro rastrea su vuelo a través de los retrasos por niebla y lo espera en la zona de recogida del nivel superior." }, content: ["SFO es el aeropuerto principal del Área de la Bahía—hub de United con vuelos internacionales a Asia, Europa y todo el mundo. Cuatro terminales, incluyendo la impresionante Terminal Internacional G. Pero SFO también tiene reputación: los retrasos por niebla son reales y la 101 Norte puede ser brutal.", "Consejo experto: Las llegadas internacionales pueden tardar entre 45 y 90 minutos para pasar aduana. Viaro rastrea su vuelo en tiempo real y ajusta la recogida. Lo esperamos en las zonas de recogida designadas en el nivel de salidas (nivel superior).", <>Destinos populares desde SFO: <A href="https://www.sftravel.com/">Centro de San Francisco</A>, Silicon Valley (Palo Alto, Mountain View, Menlo Park), <A href="https://www.visitnapavalley.com/">Napa Valley</A> y campus corporativos de la Península.</>] },
      { h3: "Aeropuerto Internacional de San José (SJC)", image: { src: "/images/SJCTerminal.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto Internacional de San José para los campus tecnológicos de Silicon Valley.", caption: "Aeropuerto de San José — 10 minutos a Google, 15 minutos a Apple Park. La opción inteligente para Silicon Valley." }, content: ["San José es el aeropuerto local de Silicon Valley—más pequeño que SFO, más fácil de navegar y en el corazón del corredor tecnológico. Si se dirige a Apple, Google o cualquier empresa al sur de Palo Alto, SJC le ahorra una hora en comparación con SFO.", "Consejo experto: SJC tiene dos terminales conectadas por un breve recorrido a pie. Southwest domina el Terminal B; todos los demás están en el Terminal A. Viaro lo espera en el carril de vehículos comerciales en el nivel de llegadas.", <>Destinos populares desde SJC: <A href="https://www.apple.com/">Apple Park</A>, <A href="https://about.google/">Google</A>, <A href="https://about.meta.com/">Meta</A>, Universidad de Stanford, Santa Cruz y Monterey.</>] },
      { h3: "Aeropuerto Internacional de Oakland (OAK)", image: { src: "/images/OAKTerminal.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto Internacional de Oakland para destinos en Berkeley, Walnut Creek y el East Bay.", caption: "Aeropuerto de Oakland — sin niebla, seguridad más rápida y Viaro sabe cuándo tomar el Puente de San Mateo en lugar del Bay Bridge." }, content: ["Oakland es el aeropuerto del East Bay—bastión de Southwest Airlines con acceso rápido a Berkeley, Walnut Creek y todo el corredor del East Bay. Suele estar menos concurrido que SFO.", "Consejo experto: Si se dirige a San Francisco desde Oakland, el Bay Bridge puede ser impredecible. Los choferes de Viaro saben cuándo tomar la 880 al Puente de San Mateo en su lugar—o cuándo el BART es realmente más rápido.", <>Destinos populares desde OAK: <A href="https://www.berkeley.edu/">UC Berkeley</A>, Centro de Oakland, Walnut Creek, parques tecnológicos de Pleasanton/Dublin y conexiones a San Francisco.</>], cta: "Reservar Su Traslado al Aeropuerto →" },
    ],
    whereSection: {
      h2: "A Dónde Se Mueve el Área de la Bahía con Viaro",
      image: { src: "/images/SFHotels.png", alt: "Auto de lujo negro de Viaro en un viñedo de Napa Valley o frente a un hotel de lujo de San Francisco.", caption: "Desde la Torre Salesforce hasta los viñedos de Sonoma, Viaro transporta a los viajeros más exigentes del Área de la Bahía." },
      content: [
        <>Región Vinícola: <A href="https://www.visitnapavalley.com/">Napa Valley</A>, <A href="https://www.sonomacounty.com/">Sonoma</A>, Healdsburg, Yountville, St. Helena. Nuestro servicio de chofer por hora es perfecto para tours completos de viñedos.</>,
        <>Hoteles de Lujo: <A href="https://www.fairmont.com/san-francisco/">Fairmont San Francisco</A>, <A href="https://www.marriott.com/hotels/travel/sfoxr-the-st-regis-san-francisco/">The St. Regis</A>, <A href="https://www.fourseasons.com/sanfrancisco/">Four Seasons</A>, Ritz-Carlton, Palace Hotel.</>,
        <>Campus Tecnológicos: Apple Park (Cupertino), Googleplex (Mountain View), Meta HQ (Menlo Park), <A href="https://www.salesforce.com/">Torre Salesforce</A> (SF), Netflix (Los Gatos), Adobe, NVIDIA, LinkedIn y oficinas de capital de riesgo en Sand Hill Road.</>,
        <>Convenciones y Eventos: <A href="https://www.moscone.com/">Centro Moscone</A> (Dreamforce, Apple WWDC, Google I/O), <A href="https://www.chasecenter.com/">Chase Center</A>, Oracle Park, Levi's Stadium.</>,
        <>Universidades: <A href="https://www.stanford.edu/">Universidad de Stanford</A>, UC Berkeley, UCSF, Universidad de Santa Clara.</>,
        <>Vea nuestros completos <a href="/es/servicio-auto-lujo/transporte-corporativo" className="underline text-white hover:text-primary transition-colors">servicios de transporte corporativo</a> para roadshows ejecutivos y reuniones con inversores.</>
      ],
      cta: "Explorar Servicios en el Área de la Bahía →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en el Área de la Bahía de San Francisco",
      vehicles: [
        { type: "Sedán", price: 95, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo incluido", "Tarifa plana — sin alzas"] },
        { type: "SUV", price: 135, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Chofer pre-asignado", "Seguimiento de vuelo incluido"], badge: "Más Popular" },
        { type: "Van Sprinter", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán con vista al frente", "Carga USB"] },
      ],
      note: "Tarifas planas fijas al reservar. Sin alzas de precio — nunca. Ni siquiera durante Dreamforce. Contáctenos para cotizaciones a Napa, Sonoma y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ MIAMI ══════════
  {
    id: "miami",
    FA: "locationMiamiFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/MiamiLocation.png", alt: "Servicio de auto de lujo Viaro en Miami con el skyline de Brickell y un sedán de lujo acercándose al Aeropuerto Internacional de Miami.", caption: "Desde MIA hasta las playas, Brickell hasta Opa-locka—Viaro ofrece transporte ejecutivo impecable en todo el sur de Florida." },
      h1: "Servicio de Auto de Lujo en Miami",
      h2: "MIA · FLL · PBI · OPF — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Miami en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Miami después de un largo vuelo, baje de un jet privado en Opa-locka, tome una conexión desde Fort Lauderdale o se dirija a una reunión en Brickell—Viaro ya está ahí, en la acera y listo. Precios transparentes con tarifas fijas al reservar. Sin alzas durante el Art Basel o cuando los cruceros llenan el puerto. Choferes profesionales que conocen cada ruta desde el aeropuerto hasta South Beach, Coral Gables y los Keys.",
      cta: { book: "Reservar Su Auto Negro en Miami", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes empresariales y viajeros VIP de Miami",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "4 Aeropuertos", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Recogidas en los Aeropuertos de Miami",
      image: { src: "/images/MIAArrival.png", alt: "Chofer de Viaro en el Aeropuerto Internacional de Miami cargando equipaje en auto de lujo negro.", caption: "Conocemos cada terminal, cada patrón de tráfico y cada atajo en todo el sur de Florida." },
      content: ["Miami significa navegar 4 aeropuertos distintos—cada uno con su propia lógica y coreografía de recogida. Así es como Viaro le ayuda a navegar cada uno."],
    },
    extraContent: [
      { h3: "Aeropuerto Internacional de Miami (MIA)", image: { src: "/images/MIATerminal.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto Internacional de Miami.", caption: "La terminal en herradura del MIA atiende a más de 50 millones de pasajeros al año — su chofer de Viaro lo espera en el concurso correcto, sin confusión." }, content: ["MIA atiende a más de 50 millones de pasajeros al año en una sola terminal en herradura con tres concursos—D, E y F. Las llegadas internacionales al Concurso E enfrentan las filas más largas de aduana, con frecuencia de 45 a 75 minutos en horas pico.", "Consejo experto: Viaro rastrea su vuelo entrante en tiempo real. Si su vuelo se retrasa o la aduana está saturada, su conductor se ajusta automáticamente.", <>Destinos populares desde MIA: <A href="https://www.brickell.com/">Brickell</A>, Coral Gables, South Beach, <A href="https://www.keybiscayne.fl.gov/">Key Biscayne</A>, Coconut Grove, Fisher Island.</>] },
      { h3: "Aeropuerto Internacional Fort Lauderdale-Hollywood (FLL)", image: { src: "/images/FLLTerminal.png", alt: "Auto de lujo negro de Viaro en el Terminal 4 del Aeropuerto Internacional Fort Lauderdale-Hollywood.", caption: "El Terminal 1 y Terminal 4 del FLL están en extremos opuestos del edificio — Viaro rastrea su terminal y posiciona su conductor en la acera correcta." }, content: ["FLL es el aeropuerto de valor del sur de Florida—con frecuencia menos congestionado y más económico para volar que el MIA.", "Consejo experto: El Terminal 1 y el Terminal 4 tienen zonas de recogida completamente diferentes en extremos opuestos. Viaro rastrea su terminal y posiciona su conductor en la acera de llegadas correcta.", <>Destinos populares desde FLL: Fort Lauderdale Beach, <A href="https://www.lasolasboulevard.com/">Las Olas</A>, Boca Raton, <A href="https://www.aventura.com/">Aventura</A>, Wynwood, Palm Beach.</>] },
      { h3: "Aeropuerto Internacional de Palm Beach (PBI)", image: { src: "/images/PBITerminal.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto Internacional de Palm Beach.", caption: "PBI — una terminal, filas cortas, recogida de equipaje rápida. Viaro lo espera en el área de transporte terrestre." }, content: ["PBI sirve al corredor adinerado entre Palm Beach, Wellington y Jupiter. Una terminal, filas de seguridad cortas y una recogida de equipajes que realmente avanza.", "Consejo experto: PBI no tiene estacionamiento para vehículos comerciales—los rideshares circulan la terminal sin cesar. Los conductores de Viaro esperan en el área de transporte terrestre designada en el nivel de llegadas.", <>Destinos populares desde PBI: <A href="https://www.palmbeach.com/">Palm Beach Island</A>, Worth Avenue, Wellington, Boca Raton, Delray Beach, Jupiter.</>] },
      { h3: "Aeropuerto Ejecutivo Opa-locka (OPF) — Aviación Privada", image: { src: "/images/OPFTarmac.png", alt: "SUV de lujo negro de Viaro esperando en la pista del FBO del Aeropuerto Ejecutivo Opa-locka.", caption: "FBO de Opa-locka — el hub de aviación privada de Miami. Desde el aterrizaje hasta circular hacia Brickell: menos de 4 minutos." }, content: ["OPF es el hub de aviación privada de Miami—más cerca de la ciudad que cualquier aeropuerto comercial.", <>Consejo experto: Viaro coordina directamente con las operaciones del FBO en <A href="https://www.signatureflight.com/">Signature Flight Support</A> y Sheltair Aviation en Opa-locka. Donde se permite, lo esperamos al pie de la escalerilla del avión.</>, "Destinos populares desde OPF: Distrito Financiero de Brickell, Miami Beach, Coconut Grove, Coral Gables, Marina Bayside."], cta: "Reservar Su Traslado al Aeropuerto →" },
    ],
    whereSection: {
      h2: "A Dónde Se Mueve Miami con Viaro",
      image: { src: "/images/MiamiHotels.png", alt: "Auto de lujo negro de Viaro frente a un icónico hotel de Miami.", caption: "Desde hoteles de cinco estrellas hasta direcciones de Fortune 500, Viaro transporta a los viajeros más exigentes de Miami." },
      items: [
        { label: "Brickell / Centro", time: "15 min", desc: "Distrito financiero, Worldcenter, sedes corporativas, condominios de lujo" },
        { label: "South Beach", time: "25 min", desc: "Ocean Drive, Collins Avenue, 1 Hotel, Faena, The Setai" },
        { label: "Coral Gables", time: "20 min", desc: "Miracle Mile, Universidad de Miami, residencial de lujo" },
        { label: "Fort Lauderdale", time: "35 min", desc: "Las Olas, Fort Lauderdale Beach, terminal de cruceros Port Everglades" },
        { label: "Palm Beach", time: "75 min", desc: "Worth Avenue, Palm Beach Island, Breakers Hotel" },
        { label: "Puerto de Miami", time: "20 min", desc: "Terminales de cruceros, PortMiami, conexiones al Caribe" },
      ],
      content: [
        <>Hoteles de Lujo: <A href="https://www.fourseasons.com/miami/">Four Seasons Miami</A>, <A href="https://www.mandarinoriental.com/miami">Mandarin Oriental Miami</A>, <A href="https://www.1hotels.com/south-beach">1 Hotel South Beach</A>, <A href="https://www.faena.com/miami-beach">Faena Hotel Miami Beach</A>, The Setai, <A href="https://www.acqualinaresort.com/">Acqualina Resort</A>.</>,
        <>Distritos de Negocios: Distrito Financiero de Brickell, Centro de Miami / <A href="https://www.miamiworldcenter.com/">Worldcenter</A>, Coconut Grove, Coral Gables, Wynwood / Distrito del Diseño, parques corporativos de Doral.</>,
        <>Eventos y Entretenimiento: <A href="https://www.kaseya.com/center">Kaseya Center</A> (Heat), <A href="https://www.hardrockstadium.com/">Hard Rock Stadium</A>, <A href="https://www.arshtcenter.org/">Adrienne Arsht Center</A>, Centro de Convenciones de Miami Beach, sedes del <A href="https://www.artbasel.com/miami-beach">Art Basel</A>, Puerto de Miami.</>,
        "Más allá de Miami: Palm Beach Island, Florida Keys, Nápoles y Marco Island, Fort Lauderdale Beach, Boca Raton y Delray, Orlando y Tampa (larga distancia).",
        <>Vea nuestros completos <a href="/es/servicio-auto-lujo/transporte-corporativo" className="underline text-white/70 hover:text-white transition-colors">servicios de transporte corporativo</a> y <a href="/es/servicio-auto-lujo/chofer-por-hora" className="underline text-white/70 hover:text-white transition-colors">opciones de chofer por hora</a>.</>,
      ],
      cta: "Explorar Servicios en Miami →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Miami",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ LAS VEGAS ══════════
  {
    id: "las-vegas",
    FA: "locationLasVegasFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/LasVegasLocation.png", alt: "Servicio de auto de lujo Viaro en Las Vegas con el Strip al fondo.", caption: "Desde el Strip hasta los jets privados, convenciones hasta el entretenimiento VIP—Viaro ofrece transporte ejecutivo 24/7 en Las Vegas." },
      h1: "Servicio de Auto de Lujo en Las Vegas",
      h2: "Harry Reid • FBO Henderson • North Las Vegas — Precios Transparentes, Tarifas Fijas, 24/7",
      description: "Vegas nunca duerme. Nosotros tampoco. Las Vegas funciona con precisión cronométrica—los espectáculos empiezan en punto, las reservaciones no esperan y los jugadores de alto nivel exigen perfección. Ya sea que aterrice en Harry Reid después de un vuelo transcontinental, baje de un G650 en Henderson Executive o se dirija de CES a una cena de negocios en Wynn—Viaro ya está esperando. Precios transparentes con tarifas fijas al reservar. Sin alzas cuando 180,000 personas inundan la ciudad por CES. Choferes profesionales que conocen las entradas traseras de cada gran resort.",
      cta: { book: "Reservar Su Auto Negro en Vegas", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los VIPs de Vegas y líderes de convenciones",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "3 Aeropuertos", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "Dominando la Logística de los Principales FBOs y Hubs Comerciales",
      image: { src: "/images/HarryReidArrival.png", alt: "Chofer de Viaro en el Aeropuerto Internacional Harry Reid.", caption: "Conocemos cada terminal, cada entrada trasera de resort y cada atajo en el Strip." },
      content: ["Las Vegas tiene tres aeropuertos que sirven diferentes necesidades. Harry Reid maneja las masas. Henderson y North Las Vegas sirven a la aviación privada. Así es como Viaro le ayuda a moverse sin contratiempos."],
    },
    extraContent: [
      { h3: "Aeropuerto Internacional Harry Reid (LAS)", image: { src: "/images/LASTerminal.png", alt: "Chofer de Viaro en el Aeropuerto Internacional Harry Reid.", caption: "Las terminales de Harry Reid atienden a más de 50 millones de pasajeros al año — su chofer de Viaro lo espera en el carril de vehículos comerciales." }, content: ["Harry Reid (antes McCarran) es el 7° aeropuerto más concurrido de Norteamérica—más de 50 millones de pasajeros al año, con aumentos masivos durante CES, SEMA y los grandes fines de semana de boxeo.", "Consejo experto: El Terminal 1 sirve la mayoría de los vuelos domésticos; el Terminal 3 maneja internacionales y algunos domésticos. La zona de rideshares está en un estacionamiento—caliente en verano, siempre concurrida. Viaro lo espera en el carril de vehículos comerciales en el Nivel 1 de cada terminal.", <>Destinos populares desde LAS: <A href="https://bellagio.mgmresorts.com/">Bellagio</A>, <A href="https://www.wynnlasvegas.com/">Wynn Las Vegas</A>, <A href="https://www.vegasmeansbusiness.com/">Centro de Convenciones de Las Vegas</A>, Downtown/Fremont Street y Red Rock Canyon.</>] },
      { h3: "Aeropuerto Ejecutivo Henderson (HND) — Aviación Privada", image: { src: "/images/HNDAirport.png", alt: "SUV de lujo negro de Viaro esperando en la pista del FBO del Aeropuerto Ejecutivo Henderson.", caption: "Henderson Executive — donde aterrizan los grandes jugadores. Lo esperamos al pie de la escalerilla." }, content: ["Henderson Executive es la puerta de aviación privada premium de Vegas—a solo 12 millas del Strip, con acceso rápido a las comunidades exclusivas de Henderson y Summerlin.", <>Consejo experto: Viaro coordina directamente con las operaciones FBO incluyendo <A href="https://www.signatureflight.com/">Signature Flight Support</A> y FBO de Henderson Executive. Donde la seguridad lo permite, lo esperamos al pie de la escalerilla.</>, "Destinos populares desde HND: Resorts del Strip (15 min), comunidades de lujo de Henderson, Lake Las Vegas y conexiones a Summerlin."] },
      { h3: "Aeropuerto North Las Vegas (VGT) — Aviación Privada", image: { src: "/images/VGTAirport.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto North Las Vegas.", caption: "Aeropuerto North Las Vegas — el más cercano al Speedway. Recogida directa en pista para los fines de semana de NASCAR." }, content: ["El Aeropuerto North Las Vegas sirve a la aviación general y jets privados en el lado norte del valle. Menos congestionado que Henderson.", <>Consejo experto: VGT es el aeropuerto más cercano al <A href="https://www.lvms.com/">Las Vegas Motor Speedway</A>—a solo 10 minutos. Perfecto para los fines de semana de NASCAR. Ofrecemos recogida en pista y traslados directos al circuito.</>, "Destinos populares desde VGT: Las Vegas Motor Speedway, Downtown Las Vegas, Fremont Street y parques corporativos del norte del valle."], cta: "Reservar Su Traslado al Aeropuerto →" },
    ],
    whereSection: {
      h2: "A Dónde Se Mueve Vegas con Viaro",
      image: { src: "/images/LasVegasHotels.png", alt: "Auto de lujo negro de Viaro en un icónico resort del Strip de Las Vegas.", caption: "Desde salones de convenciones hasta entradas VIP de nightclubs, Viaro transporta a los viajeros más exigentes de Vegas." },
      content: [
        <>Resorts de Lujo: <A href="https://bellagio.mgmresorts.com/">Bellagio</A>, <A href="https://www.wynnlasvegas.com/">Wynn Las Vegas</A>, <A href="https://www.venetianlasvegas.com/">The Venetian</A>, <A href="https://www.caesars.com/caesars-palace">Caesars Palace</A>, ARIA, Cosmopolitan, Four Seasons, Encore.</>,
        <>Convenciones y Negocios: <A href="https://www.vegasmeansbusiness.com/">Las Vegas Convention Center</A> (CES, SEMA, NAB), Centro de Convenciones Mandalay Bay, Sands Expo, World Market Center.</>,
        <>Entretenimiento y Deportes: <A href="https://www.t-mobilearena.com/">T-Mobile Arena</A> (Golden Knights, UFC), <A href="https://www.allegiantstadium.com/">Allegiant Stadium</A> (Raiders, Super Bowl), MGM Grand Garden Arena, Sphere.</>,
        "Vida Nocturna y Gastronomía: XS Nightclub, Omnia, Hakkasan, Tao, restaurantes de chefs celebridades en todo el Strip. Nuestros choferes conocen las entradas VIP.",
        <>Excursiones de un Día: <A href="https://www.redrockcanyonlv.org/">Red Rock Canyon</A>, Presa Hoover, Gran Cañón West, Valley of Fire. Nuestro <a href="/es/servicio-auto-lujo/chofer-por-hora" className="underline text-white hover:text-primary transition-colors">servicio de chofer por hora</a> es perfecto para excursiones al desierto.</>,
        <>Vea nuestros completos <a href="/es/servicio-auto-lujo/transporte-corporativo" className="underline text-white hover:text-primary transition-colors">servicios de transporte corporativo</a> para grupos de convenciones y roadshows ejecutivos.</>
      ],
      cta: "Explorar Servicios en Vegas →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Las Vegas",
      vehicles: [
        { type: "Sedán", price: 85, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo incluido", "Tarifa plana — sin alzas"] },
        { type: "SUV", price: 125, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Chofer pre-asignado", "Seguimiento de vuelo incluido"], badge: "Más Popular" },
        { type: "Van Sprinter", price: 275, passengers: 13, bags: 10, extras: ["Viaje grupal y de convención", "Asientos capitán con vista al frente", "Carga USB"] },
      ],
      note: "Tarifas planas fijas al reservar. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Henderson, Summerlin y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ DALLAS ══════════
  {
    id: "dallas",
    FA: "locationDallasFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/DallasLocation.png", alt: "Servicio de auto de lujo Viaro en Dallas con el skyline del centro y sedán de lujo aproximándose al Aeropuerto Internacional Dallas/Fort Worth.", caption: "Desde DFW hasta Love Field, el centro de Dallas hasta la Metróplex—Viaro ofrece transporte ejecutivo impecable en todo el norte de Texas." },
      h1: "Servicio de Auto de Lujo en Dallas",
      h2: "DFW · DAL · AFW — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Dallas en su horario. Ya sea que aterrice en el Aeropuerto Internacional Dallas/Fort Worth después de un largo vuelo, baje de un jet privado en Alliance o tome un vuelo de Southwest desde Love Field—Viaro ya está ahí, en la acera y listo. Precios transparentes con tarifas fijas al reservar. Sin alzas durante los juegos de los Cowboys o cuando las convenciones llenan la ciudad. Choferes profesionales que conocen cada ruta desde las cinco terminales del DFW hasta el centro de Dallas, Uptown, Legacy Business Park y más allá.",
      cta: { book: "Reservar Su Auto Negro en Dallas", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes empresariales y ejecutivos de Dallas",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "3 Aeropuertos", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Recogidas en los Aeropuertos de Dallas",
      image: { src: "/images/DFWArrival.png", alt: "Chofer de Viaro en el Aeropuerto Internacional Dallas/Fort Worth cargando equipaje.", caption: "Conocemos cada terminal, cada patrón de tráfico y cada atajo en toda la Metróplex de Dallas." },
      content: ["Dallas significa navegar 3 aeropuertos distintos—cada uno con su propia lógica. Así es como Viaro le ayuda a navegar cada uno."],
    },
    extraContent: [
      { h3: "Aeropuerto Internacional Dallas/Fort Worth (DFW)", image: { src: "/images/DFWTerminal.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto Internacional Dallas/Fort Worth Terminal D.", caption: "El DFW abarca 27 millas cuadradas en cinco terminales — su chofer de Viaro lo espera en el nivel de llegadas correcto." }, content: ["DFW es uno de los aeropuertos más grandes del mundo—cinco terminales (A hasta E) distribuidas en 27 millas cuadradas. El tren Skylink conecta las terminales, pero navegar la carretera International Parkway en auto requiere saber su terminal de antemano.", "Consejo experto: Los vuelos internacionales aterrizan en el Terminal D. Las terminales domésticas varían según la aerolínea—American usa A, B, C y D; todas las demás están en E. Viaro rastrea su terminal y lo espera en la acera de llegadas correcta.", <>Destinos populares desde DFW: <A href="https://www.visitdallas.com/">Centro de Dallas</A>, Uptown, <A href="https://www.legacywest.com/">Legacy Business Park</A>, Las Colinas, Arlington, Fort Worth.</>] },
      { h3: "Aeropuerto Dallas Love Field (DAL)", image: { src: "/images/DALTerminal.png", alt: "Auto de lujo negro de Viaro en el Aeropuerto Dallas Love Field.", caption: "Love Field — a 6 millas del centro de Dallas. Viaro programa la recogida con precisión para que su conductor esté en la acera cuando usted salga." }, content: ["Love Field es el bastión de Southwest en Dallas—compacto, rápido y a solo 6 millas del centro. Sin vuelos internacionales, poca concurrencia y una recogida de equipaje que avanza más rápido que el DFW.", "Consejo experto: El área de recogida de Love Field es notoriamente pequeña. Los conductores de Viaro saben programar la llegada con precisión—circular no es una opción aquí.", <>Destinos populares desde DAL: <A href="https://www.visitdallas.com/">Centro de Dallas</A>, Uptown / Knox-Henderson, <A href="https://www.smu.edu/">SMU</A>, Park Cities, Highland Park, Mockingbird Station.</>] },
      { h3: "Aeropuerto Fort Worth Alliance (AFW) — Aviación Privada", image: { src: "/images/AFWTarmac.png", alt: "SUV de lujo negro de Viaro esperando en la pista del FBO del Aeropuerto Fort Worth Alliance.", caption: "Alliance Airport — el principal hub de aviación privada del norte de Texas. Más cercano a Frisco y Plano que DFW, ahorrando 30-45 minutos." }, content: ["Fort Worth Alliance (AFW) es la principal instalación de aviación privada del norte de Texas, sirviendo el corredor industrial y corporativo al norte de Fort Worth. Más cercano a Frisco, McKinney y Southlake que el DFW.", <>Consejo experto: Viaro coordina con las operaciones FBO en Alliance. Para pasajeros corporativos que se dirigen al corredor tecnológico de Frisco o Plano, AFW frecuentemente ahorra entre 30 y 45 minutos sobre el DFW.</>, <>Destinos populares desde AFW: <A href="https://www.friscotexas.gov/">Frisco</A>, Plano, McKinney, Southlake, Fort Worth, <A href="https://www.alliancetexas.com/">corredor empresarial AllianceTexas</A>.</>], cta: "Reservar Su Traslado al Aeropuerto →" },
    ],
    whereSection: {
      h2: "A Dónde Se Mueve Dallas con Viaro",
      image: { src: "/images/DallasHotels.png", alt: "Auto de lujo negro de Viaro frente a un icónico hotel de Dallas.", caption: "Desde hoteles de Uptown hasta sedes de Fortune 500, Viaro transporta a los viajeros más exigentes de Dallas." },
      items: [
        { label: "Centro de Dallas", time: "25 min", desc: "CBD, Centro de Convenciones de Dallas, distrito de las artes, Reunion Tower" },
        { label: "Uptown / Turtle Creek", time: "20 min", desc: "The Crescent, Knox-Henderson, restaurantes, residencial de lujo" },
        { label: "Legacy Business Park", time: "30 min", desc: "Sede de Toyota, FedEx Office, Liberty Mutual, campus corporativos" },
        { label: "Las Colinas", time: "15 min", desc: "Resort Four Seasons, oficinas corporativas, entretenimiento en Irving" },
        { label: "Fort Worth", time: "35 min", desc: "Sundance Square, distrito cultural, TCU, Stockyards" },
        { label: "Frisco / Plano", time: "40 min", desc: "Sede de los Cowboys, Toyota Stadium, corredor tecnológico, Legacy West" },
      ],
      content: [
        <>Hoteles de Lujo: <A href="https://www.crescentcourt.com/">The Crescent Court</A>, <A href="https://www.rosewoodhotels.com/en/mansion-on-turtle-creek-dallas">Rosewood Mansion on Turtle Creek</A>, <A href="https://www.hotelzaza.com/dallas/">Hotel ZaZa Dallas</A>, <A href="https://www.fourseasons.com/lascolinas/">Four Seasons Las Colinas</A>, <A href="https://www.omnihotels.com/hotels/dallas">Omni Dallas Hotel</A>.</>,
        <>Eventos y Sedes: <A href="https://www.attstadium.com/">AT&T Stadium</A> (Cowboys), <A href="https://www.americanairlinescenter.com/">American Airlines Center</A> (Mavs/Stars), <A href="https://www.globelifefield.com/">Globe Life Field</A> (Rangers), Cotton Bowl, <A href="https://www.dallasconventioncenter.com/">Dallas Convention Center</A>.</>,
        "Más allá de Dallas: Fort Worth, corredor tecnológico de Frisco/Plano, Austin (larga distancia), San Antonio (larga distancia).",
        <>Vea nuestros completos <a href="/es/servicio-auto-lujo/transporte-corporativo" className="underline text-white/70 hover:text-white transition-colors">servicios de transporte corporativo</a> y <a href="/es/servicio-auto-lujo/chofer-por-hora" className="underline text-white/70 hover:text-white transition-colors">opciones de chofer por hora</a>.</>
      ],
      cta: "Explorar Servicios en Dallas →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Dallas",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ SERVICIO DE AUTO DE LUJO EN WASHINGTON DC ══════════
  {
    id: "washington-dc",
    FA: "locationWashingtonFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/WashingtonDcLocation.png", alt: "Servicio de Auto de Lujo en Washington DC — servicio de auto de lujo Viaro.", caption: "Servicio de Auto de Lujo en Washington DC." },
      h1: "Servicio de Auto de Lujo en Washington DC",
      h2: "IAD · DCA · JYO — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Washington en su horario. Ya sea que aterrice en el Aeropuerto Internacional Dulles después de un largo vuelo, baje de un jet privado en Leesburg Executive o tome un shuttle desde Reagan National—Viaro ya está ahí, en la acera y listo. Precios transparentes con tarifas fijas al reservar. Sin alzas durante inauguraciones, visitas de estado o cuando los cabilderos inundan K Street. Choferes profesionales que conocen cada ruta desde Dulles hasta el Capitolio, Georgetown hasta el Pentágono y todo el corredor del norte de Virginia.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de ejecutivos, diplomáticos y líderes de poder de Washington",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Washington DC — llegadas.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Washington significa navegar 3 aeropuertos distintos—cada uno con su propia lógica. Así es como Viaro le ayuda a navegar cada uno."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Washington DC — hoteles.", caption: "Desde el Hay-Adams hasta el Congreso, Viaro mueve a los viajeros más exigentes de Washington." },
      items: [
        { label: "Centro de DC", time: "35 min", desc: "Casa Blanca, K Street, Banco Mundial, FMI, centro de convenciones" },
        { label: "Capitol Hill", time: "40 min", desc: "Senado, Cámara de Representantes, Corte Suprema, Biblioteca del Congreso" },
        { label: "Georgetown", time: "30 min", desc: "Four Seasons, Universidad de Georgetown, M Street, residencial de lujo" },
        { label: "Tysons Corner", time: "15 min", desc: "Campus corporativos, Tysons Galleria, distrito empresarial del norte de Virginia" },
        { label: "Pentágono / Crystal City", time: "25 min", desc: "Departamento de Defensa, Amazon HQ2, corredor Reagan National" },
        { label: "Bethesda / NIH", time: "45 min", desc: "Institutos Nacionales de Salud, Walter Reed, corredor de biotecnología" },
      ],
      content: [
        "Vea nuestros completos servicios de transporte corporativo y opciones de chofer por hora.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Washington DC",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ SERVICIO DE AUTO DE LUJO EN ATLANTA ══════════
  {
    id: "atlanta",
    FA: "locationAtlantaFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/AtlantaLocation.png", alt: "Servicio de Auto de Lujo en Atlanta — servicio de auto de lujo Viaro.", caption: "Servicio de Auto de Lujo en Atlanta." },
      h1: "Servicio de Auto de Lujo en Atlanta",
      h2: "ATL · PDK — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Atlanta en su horario. Ya sea que aterrice en el Aeropuerto Internacional Hartsfield-Jackson después de un largo vuelo, baje de un jet privado en DeKalb-Peachtree o se dirija a una reunión en Buckhead—Viaro ya está ahí, en la acera y listo. Precios transparentes con tarifas fijas al reservar. Sin alzas durante los fines de semana del Campeonato de la SEC o cuando las convenciones llenan el Centro de Congresos Mundial de Georgia. Choferes profesionales que conocen cada ruta desde el aeropuerto más concurrido del mundo hasta Buckhead, Midtown, el Perimeter y más allá.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes empresariales y viajeros corporativos de Atlanta",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Atlanta — llegadas.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Atlanta significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Atlanta — hoteles.", caption: "Desde el Four Seasons hasta el Mercedes-Benz Stadium, Viaro mueve a los viajeros más exigentes de Atlanta." },
      items: [
        { label: "Buckhead", time: "25 min", desc: "Corredor financiero, hoteles de lujo, Lenox Square, Phipps Plaza" },
        { label: "Midtown Atlanta", time: "20 min", desc: "Tech Square, Georgia Tech, Piedmont Park, distrito de las artes" },
        { label: "Centro de Atlanta", time: "15 min", desc: "Centro de Congresos Mundial de Georgia, Peachtree Center, CNN Center" },
        { label: "Perimeter Center", time: "30 min", desc: "Campus corporativos de Dunwoody, Sandy Springs, Perimeter Mall" },
        { label: "Alpharetta", time: "45 min", desc: "Corredor tecnológico Avalon, parques corporativos, distrito empresarial del norte de Fulton" },
        { label: "Mercedes-Benz Stadium", time: "15 min", desc: "Falcons, Atlanta United, Campeonato de la SEC, grandes eventos" },
      ],
      content: [
        "Vea nuestros completos servicios de transporte corporativo y opciones de chofer por hora.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Atlanta",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ SERVICIO DE AUTO DE LUJO EN HOUSTON ══════════
  {
    id: "houston",
    FA: "locationHoustonFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/HoustonLocation.png", alt: "Servicio de Auto de Lujo en Houston — servicio de auto de lujo Viaro.", caption: "Servicio de Auto de Lujo en Houston." },
      h1: "Servicio de Auto de Lujo en Houston",
      h2: "IAH · HOU · SGR — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Houston en su horario. Ya sea que aterrice en el Aeropuerto Internacional George Bush después de un largo vuelo, baje de un jet privado en Sugar Land Regional o tome un vuelo de Southwest desde Hobby—Viaro ya está ahí. Precios transparentes con tarifas fijas al reservar. Sin alzas durante el Houston Livestock Show & Rodeo o cuando las conferencias de energía llenan el George R. Brown. Choferes profesionales que conocen cada ruta desde las cinco terminales del IAH hasta el centro, la Galleria, el Energy Corridor y The Woodlands.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los ejecutivos del sector energético y viajeros corporativos de Houston",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Houston — llegadas.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Houston significa navegar 3 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Houston — hoteles.", caption: "Desde sedes de compañías energéticas hasta hoteles de cinco estrellas, Viaro mueve a los viajeros más exigentes de Houston." },
      items: [
        { label: "Centro de Houston", time: "25 min", desc: "CBD, Centro de Convenciones George R. Brown, distrito teatral, Minute Maid Park" },
        { label: "Galleria / Uptown", time: "30 min", desc: "Comercio de lujo, The Post Oak Hotel, oficinas corporativas, corredor hotelero" },
        { label: "Energy Corridor", time: "35 min", desc: "Shell, BP, ConocoPhillips, campus de ExxonMobil, oficinas del oeste de Houston" },
        { label: "The Woodlands", time: "15 min", desc: "Campus de ExxonMobil, parques corporativos, Woodlands Mall, residencial de lujo" },
        { label: "Medical Center", time: "30 min", desc: "Texas Medical Center, MD Anderson, Houston Methodist, Rice University" },
        { label: "Sugar Land", time: "35 min", desc: "Fort Bend County, Imperial Market, Smart Financial Centre" },
      ],
      content: [
        "Vea nuestros completos servicios de transporte corporativo y opciones de chofer por hora.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Houston",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ SERVICIO DE AUTO DE LUJO EN DENVER ══════════
  {
    id: "denver",
    FA: "locationDenverFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/DenverLocation.png", alt: "Servicio de Auto de Lujo en Denver — servicio de auto de lujo Viaro.", caption: "Servicio de Auto de Lujo en Denver." },
      h1: "Servicio de Auto de Lujo en Denver",
      h2: "DEN · APA · BJC — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Denver en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Denver después de un largo vuelo, baje de un jet privado en Centennial o Rocky Mountain Metro, o se dirija por la I-70 hacia Vail—Viaro ya está ahí. Precios transparentes con tarifas fijas al reservar. Sin alzas durante la temporada de esquí o cuando el Centro de Convenciones de Colorado se llena. Choferes profesionales que conocen cada ruta desde los concursos del DEN hasta el centro, el Tech Center, Boulder y los resorts de montaña.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes tecnológicos, ejecutivos y viajeros de montaña de Denver",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Denver — llegadas.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Denver significa navegar 3 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Denver — hoteles.", caption: "Desde el Tech Center hasta Vail Village, Viaro mueve a los viajeros más exigentes de Denver." },
      items: [
        { label: "Centro de Denver / LoDo", time: "45 min", desc: "16th Street Mall, Union Station, Coors Field, Ball Arena" },
        { label: "Denver Tech Center", time: "55 min", desc: "Campus corporativos, Greenwood Village, Inverness, Lone Tree" },
        { label: "Cherry Creek", time: "50 min", desc: "Cherry Creek Shopping Center, hoteles de lujo, gastronomía exclusiva" },
        { label: "Boulder", time: "60 min", desc: "Universidad de Colorado, Pearl Street Mall, startups tecnológicas, biotecnología" },
        { label: "Vail / Beaver Creek", time: "2.5 hrs", desc: "Esquí de clase mundial, Vail Village, resorts de montaña de lujo" },
        { label: "Breckenridge / Keystone", time: "1.5 hrs", desc: "Resorts de esquí del Summit County, pueblos de montaña, corredor de la I-70" },
      ],
      content: [
        "Vea nuestros completos servicios de transporte corporativo y opciones de chofer por hora.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Denver",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para traslados a resorts de montaña, larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  // ══════════ SERVICIO DE AUTO DE LUJO EN BOSTON ══════════
  {
    id: "boston",
    FA: "locationBostonFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/BostonLocation.png", alt: "Servicio de Auto de Lujo en Boston — servicio de auto de lujo Viaro.", caption: "Servicio de Auto de Lujo en Boston." },
      h1: "Servicio de Auto de Lujo en Boston",
      h2: "BOS · BED — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Boston en su horario. Ya sea que aterrice en el Aeropuerto Internacional Logan de Boston después de un largo vuelo, baje de un jet privado en Hanscom Field o se dirija a una reunión en Kendall Square—Viaro ya está ahí. Precios transparentes con tarifas fijas al reservar. Sin alzas durante el Maratón de Boston, las temporadas de playoffs de los Red Sox o cuando las conferencias de biotecnología llenan el Seaport. Choferes profesionales que conocen cada túnel, cada atajo por Back Bay y la ruta más rápida por el tráfico de Cambridge.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes de biotecnología, finanzas y academia de Boston",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Boston — llegadas.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Boston significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Boston — hoteles.", caption: "Desde Beacon Hill hasta Kendall Square, Viaro mueve a los viajeros más exigentes de Boston." },
      items: [
        { label: "Centro / Distrito Financiero", time: "20 min", desc: "State Street, Reserva Federal, Post Office Square, hoteles de lujo" },
        { label: "Seaport / Distrito de Innovación", time: "15 min", desc: "Boston Convention Center, campus de biotecnología, Vertex, General Catalyst" },
        { label: "Back Bay", time: "25 min", desc: "Copley Square, Newbury Street, Prudential Center, Four Seasons" },
        { label: "Cambridge / Kendall Square", time: "30 min", desc: "MIT, Harvard, corredor de biotecnología, Google Cambridge, Broad Institute" },
        { label: "Corredor Ruta 128", time: "35 min", desc: "Waltham, Burlington, Woburn — campus de biotecnología y tecnología" },
        { label: "Wellesley / Newton", time: "40 min", desc: "Wellesley College, Newton-Wellesley Hospital, suburbios de lujo" },
      ],
      content: [
        "Vea nuestros completos servicios de transporte corporativo y opciones de chofer por hora.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Boston",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },

// Generated 5 cities
  {
    id: "aspen-vail",
    FA: "locationAspenVailFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/AspenvailLocation.png", alt: "Servicio de Auto de Lujo en Aspen y Vail.", caption: "Servicio de Auto de Lujo en Aspen y Vail." },
      h1: "Servicio de Auto de Lujo en Aspen y Vail",
      h2: "ASE · EGE — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Aspen y Vail en su horario. Ya sea que aterrice en el Aeropuerto de Aspen/Pitkin County, baje de un jet privado en Eagle County o viaje desde Denver por la I-70—Viaro ya está ahí. Sin alzas durante la temporada alta de esquí. Choferes con vehículos aptos para condiciones de montaña que conocen cada carretera entre el Valle de Roaring Fork y el corredor de Vail.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los viajeros más exigentes de Aspen y Vail",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Aspen y Vail.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Aspen y Vail significan navegar 2 aeropuertos distintos en uno de los terrenos de montaña más desafiantes de Norteamérica."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Aspen y Vail.", caption: "Desde el ski-in/ski-out de The Little Nell hasta el Park Hyatt Beaver Creek, Viaro mueve a los huéspedes más exigentes de Aspen y Vail." },
      items: [
        { label: "Centro de Aspen", time: "5 min", desc: "The Little Nell, Hotel Jerome, góndola de Aspen Mountain, boutiques del centro" },
        { label: "Snowmass Village", time: "20 min", desc: "Snowmass Base Village, The Westin Snowmass, chalets de esquí" },
        { label: "Vail Village", time: "35 min desde EGE", desc: "Four Seasons Vail, Vail Mountain Lodge, chalets de esquí" },
        { label: "Beaver Creek", time: "45 min desde EGE", desc: "Park Hyatt Beaver Creek, Bachelor Gulch, fincas privadas de montaña" },
        { label: "Basalt / Carbondale", time: "20 min", desc: "Comunidades del valle medio, corredor de Roaring Fork" },
        { label: "Glenwood Springs", time: "45 min", desc: "Aguas termales de Glenwood, Hotel Colorado, conexiones de la I-70" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Aspen y Vail",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para traslados por desvíos (GJT/DEN), larga distancia, chofer por día completo y rutas personalizadas de montaña.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "phoenix-phx",
    FA: "locationPhoenixFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/PhoenixphxLocation.png", alt: "Servicio de Auto de Lujo en Phoenix.", caption: "Servicio de Auto de Lujo en Phoenix." },
      h1: "Servicio de Auto de Lujo en Phoenix",
      h2: "PHX · SDL — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Phoenix en su horario. Ya sea que aterrice en el Aeropuerto Internacional Sky Harbor de Phoenix, baje de un jet privado en el Aeropuerto de Scottsdale o se dirija a un resort en Paradise Valley—Viaro ya está ahí. Sin alzas durante el Waste Management Phoenix Open o cuando el Super Bowl llega al State Farm Stadium. Choferes que conocen cada ruta desde las tres terminales de Sky Harbor hasta el centro, Scottsdale, el corredor de resorts y más allá.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los huéspedes de resorts, ejecutivos y golfistas de Phoenix",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Phoenix.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Phoenix significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Phoenix.", caption: "Desde world-class golf resorts hasta sedes de Fortune 500, Viaro mueve a los viajeros más exigentes de Phoenix." },
      items: [
        { label: "Centro de Phoenix", time: "10 min", desc: "CBD, Chase Field, Footprint Center, Centro de Convenciones de Phoenix" },
        { label: "Scottsdale Old Town", time: "20 min", desc: "Restaurantes, galerías, vida nocturna, hoteles boutique, Fashion Square" },
        { label: "Paradise Valley", time: "25 min", desc: "The Phoenician, Sanctuary Camelback Mountain, Royal Palms, fincas de lujo" },
        { label: "North Scottsdale", time: "35 min", desc: "Four Seasons, The Boulders, TPC Scottsdale, Gainey Ranch" },
        { label: "Tempe / Chandler", time: "20 min", desc: "ASU, parques tecnológicos, campus de Intel, corredor corporativo de Chandler" },
        { label: "Sedona", time: "2 hrs", desc: "País de rocas rojas, spas de lujo, Enchantment Resort, L'Auberge" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Phoenix",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Sedona, Flagstaff, Tucson y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "austin",
    FA: "locationAustinFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/AustinLocation.png", alt: "Servicio de Auto de Lujo en Austin.", caption: "Servicio de Auto de Lujo en Austin." },
      h1: "Servicio de Auto de Lujo en Austin",
      h2: "AUS — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Austin en su horario. Ya sea que aterrice en el Aeropuerto Internacional Austin-Bergstrom o se dirija a una reunión en The Domain—Viaro ya está ahí. Sin alzas durante SXSW, la semana del Grand Prix de Fórmula 1 en el Circuit of the Americas o Austin City Limits. Choferes que conocen cada ruta desde el AUS hasta el centro, East Austin, el corredor tecnológico y el Texas Hill Country.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes tecnológicos, creativos y viajeros corporativos de Austin",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Austin.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El AUS ha crecido más rápido que cualquier otro aeropuerto importante de EE.UU. en la última década—una terminal principal (Barbara Jordan) y una Terminal Sur recientemente abierta. A solo 8 millas del centro."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Austin.", caption: "Desde campus tecnológicos hasta sedes de música en vivo, Viaro mueve a los viajeros más exigentes de Austin." },
      items: [
        { label: "Centro de Austin", time: "15 min", desc: "6th Street, Congress Avenue, Capitolio del Estado, Rainey Street" },
        { label: "South Congress", time: "20 min", desc: "Hotel San José, boutiques, restaurantes, Barton Springs" },
        { label: "The Domain", time: "25 min", desc: "Campus de Apple, Google, Meta, Indeed, Domain NORTHSIDE" },
        { label: "East Austin", time: "20 min", desc: "Oficinas tecnológicas, Tesla, Samsung, estudios creativos" },
        { label: "Round Rock / Cedar Park", time: "35 min", desc: "Campus de Dell, parques corporativos, corredor tecnológico del norte de Austin" },
        { label: "Hill Country", time: "1 hr", desc: "Fredericksburg, Wimberley, ruta vinícola de Dripping Springs" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Austin",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante SXSW o F1. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "orlando-mco",
    FA: "locationOrlandoFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/OrlandomcoLocation.png", alt: "Servicio de Auto de Lujo en Orlando.", caption: "Servicio de Auto de Lujo en Orlando." },
      h1: "Servicio de Auto de Lujo en Orlando",
      h2: "MCO · SFB · ORL — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Orlando en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Orlando, baje de un jet privado en Orlando Executive o llegue a Sanford desde un vuelo regional—Viaro ya está ahí. Sin alzas durante la temporada alta de los parques temáticos o cuando grandes convenciones llenan el Centro de Convenciones del Condado de Orange. Choferes que conocen cada ruta desde las terminales del MCO hasta Walt Disney World, Universal, Lake Nona y el centro de Orlando.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los grupos de convenciones, huéspedes de resorts y viajeros de negocios de Orlando",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Orlando.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Orlando significa navegar 3 aeropuertos distintos—cada uno con su propia lógica. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Orlando.", caption: "Desde resorts de parques temáticos hasta salas de convenciones, Viaro mueve a los viajeros más exigentes de Orlando." },
      items: [
        { label: "Walt Disney World", time: "25 min", desc: "Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom, Disney Springs" },
        { label: "Universal Orlando", time: "20 min", desc: "Universal Studios, Islands of Adventure, Epic Universe, CityWalk" },
        { label: "Centro de Convenciones", time: "20 min", desc: "Orange County Convention Center, I-Drive, Rosen Shingle Creek" },
        { label: "Centro de Orlando", time: "25 min", desc: "CBD, Dr. Phillips Center, Amway Center, Thornton Park" },
        { label: "Lake Nona", time: "20 min", desc: "Medical City, UCF Health, instalación de entrenamiento de KPMG, Laureate Park" },
        { label: "Winter Park", time: "30 min", desc: "Park Avenue, Rollins College, hoteles boutique, gastronomía exclusiva" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Orlando",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para traslados grupales a parques temáticos, larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "toronto-yyz",
    FA: "locationTorontoFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/TorontoyyzLocation.png", alt: "Servicio de Auto de Lujo en Toronto.", caption: "Servicio de Auto de Lujo en Toronto." },
      h1: "Servicio de Auto de Lujo en Toronto",
      h2: "YYZ · YTZ — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Toronto en su horario. Ya sea que aterrice en el Aeropuerto Internacional Pearson de Toronto, tome un vuelo de Porter en Billy Bishop o se dirija a una reunión en Bay Street—Viaro ya está ahí. Sin alzas durante el TIFF, las series de playoffs de los Leafs o cuando grandes convenciones llenan el Metro Toronto Convention Centre. Choferes que conocen cada ruta desde las terminales de Pearson hasta el centro, Yorkville, Mississauga y más allá.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes de finanzas, tecnología y entretenimiento de Toronto",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Toronto.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Toronto significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Toronto.", caption: "Desde las torres de Bay Street hasta las alfombras rojas del TIFF, Viaro mueve a los viajeros más exigentes de Toronto." },
      items: [
        { label: "Distrito Financiero de Bay Street", time: "25 min", desc: "TD Centre, Royal Bank Plaza, CIBC Square, Bay Adelaide Centre" },
        { label: "Yorkville", time: "30 min", desc: "Four Seasons, The Hazelton, comercio de lujo en Bloor Street, Mink Mile" },
        { label: "King West / Distrito del Entretenimiento", time: "25 min", desc: "Oficinas tecnológicas, Scotiabank Arena, TIFF Bell Lightbox, Rogers Centre" },
        { label: "North York", time: "35 min", desc: "Corredor de Yonge y Sheppard, oficinas corporativas, Fairview Mall" },
        { label: "Mississauga", time: "15 min", desc: "City Centre, Square One, campus corporativos, Sheridan College" },
        { label: "Cataratas del Niágara", time: "1.5 hrs", desc: "Cataratas del Niágara, viñedos de Niagara-on-the-Lake, hoteles casino" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Toronto",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a las Cataratas del Niágara, Hamilton, Kitchener-Waterloo y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
// Generated 5 cities
  {
    id: "nashville-bna",
    FA: "locationNashvilleFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/NashvilleLocation.png", alt: "Servicio de Auto de Lujo en Nashville.", caption: "Servicio de Auto de Lujo en Nashville." },
      h1: "Servicio de Auto de Lujo en Nashville",
      h2: "BNA · JWN — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Nashville en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Nashville, baje de un jet privado en el Aeropuerto John C. Tune o se dirija a una reunión en The Gulch—Viaro ya está ahí. Sin alzas durante el CMA Fest, los fines de semana del Draft de la NFL o cuando las despedidas de solteras y convenciones inundan Broadway. Choferes que conocen cada ruta desde el nuevo Concurso D del BNA hasta el centro, 12South, Franklin y los suburbios del oeste.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes de la música, los negocios y la salud de Nashville",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Nashville.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Nashville significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Nashville.", caption: "Desde el Ryman hasta la sala de juntas, Viaro mueve a los viajeros más exigentes de Nashville." },
      items: [
        { label: "Centro / Broadway", time: "15 min", desc: "Honky Tonk Highway, Bridgestone Arena, Ryman Auditorium, Centro de Convenciones" },
        { label: "The Gulch", time: "15 min", desc: "1 Hotel Nashville, oficinas tecnológicas, restaurantes boutique, condominios de lujo" },
        { label: "12South / Midtown", time: "20 min", desc: "Universidad de Vanderbilt, Music Row, Belle Meade, gastronomía exclusiva" },
        { label: "East Nashville", time: "20 min", desc: "Five Points, Shelby Park, estudios creativos, hoteles boutique" },
        { label: "Brentwood / Franklin", time: "30 min", desc: "Cool Springs, campus corporativos, residencial de lujo, Factory at Franklin" },
        { label: "Belle Meade", time: "25 min", desc: "Corredor de fincas, Belle Meade Country Club, residencias privadas" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Nashville",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante el CMA Fest. Contáctenos para cotizaciones a Franklin, Murfreesboro, larga distancia y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "palm-springs-psp",
    FA: "locationPalmSpringsFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/PalmLocation.png", alt: "Servicio de Auto de Lujo en Palm Springs.", caption: "Servicio de Auto de Lujo en Palm Springs." },
      h1: "Servicio de Auto de Lujo en Palm Springs",
      h2: "PSP · TRM — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Palm Springs en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Palm Springs, baje de un jet privado en el Aeropuerto Regional Jacqueline Cochran o se dirija a un resort en La Quinta—Viaro ya está ahí. Sin alzas durante el fin de semana de Coachella, Stagecoach o el BNP Paribas Open en Indian Wells. Choferes que conocen cada ruta desde el PSP hasta Palm Desert, Rancho Mirage, los predios del festival y todo el Valle de Coachella.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los huéspedes de resorts de Palm Springs, asistentes a festivales y viajeros de aviación privada",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Palm Springs.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Palm Springs significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Palm Springs.", caption: "Desde villas junto a la piscina hasta entradas VIP al festival, Viaro mueve a los huéspedes más exigentes de Palm Springs." },
      items: [
        { label: "Centro de Palm Springs", time: "5 min", desc: "Parker Palm Springs, Ace Hotel, Palm Canyon Drive, galerías de arte" },
        { label: "Palm Desert", time: "20 min", desc: "Compras en El Paseo, JW Marriott, oficinas corporativas, McCallum Theatre" },
        { label: "Rancho Mirage", time: "15 min", desc: "The Ritz-Carlton Rancho Mirage, Agua Caliente Casino, residencial de lujo" },
        { label: "La Quinta / Indian Wells", time: "25 min", desc: "La Quinta Resort, Indian Wells Tennis Garden, BNP Paribas Open" },
        { label: "Coachella / Indio", time: "30 min", desc: "Empire Polo Club, predios del festival, Stagecoach, Festival de Música del Valle de Coachella" },
        { label: "Joshua Tree", time: "1 hr", desc: "Parque Nacional Joshua Tree, 29 Palms, senderismo en el desierto, retiros de observación de estrellas" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Palm Springs",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante Coachella. Contáctenos para cotizaciones a Los Ángeles, San Diego y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "charlotte-clt",
    FA: "locationCharlotteFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/CharlotteLocation.png", alt: "Servicio de Auto de Lujo en Charlotte.", caption: "Servicio de Auto de Lujo en Charlotte." },
      h1: "Servicio de Auto de Lujo en Charlotte",
      h2: "CLT — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Charlotte en su horario. Ya sea que aterrice en el Aeropuerto Internacional Douglas de Charlotte o se dirija a una reunión en Ballantyne Corporate Park—Viaro ya está ahí. Sin alzas durante los fines de semana de NASCAR en el Charlotte Motor Speedway o cuando las conferencias bancarias llenan el Centro de Convenciones. Choferes que conocen cada ruta desde los cinco concursos del CLT hasta Uptown, South End, South Park y toda la metrópolis.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes bancarios, energéticos y corporativos de Charlotte",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Charlotte.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["CLT es el segundo hub más grande de American Airlines—cinco concursos (A, B, C, D, E) en una terminal lineal conectada por pasarela, a solo 7 millas del centro."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Charlotte.", caption: "Desde las torres de Bank of America hasta el NASCAR Hall of Fame, Viaro mueve a los viajeros más exigentes de Charlotte." },
      items: [
        { label: "Uptown Charlotte", time: "15 min", desc: "Bank of America Corporate Center, Spectrum Center, Centro de Convenciones, hoteles de lujo" },
        { label: "South End", time: "20 min", desc: "Railyard, oficinas tecnológicas, hoteles boutique, corredor de cervecerías artesanales" },
        { label: "South Park", time: "20 min", desc: "SouthPark Mall, oficinas corporativas, residencial de lujo, Piedmont Row" },
        { label: "Ballantyne", time: "30 min", desc: "Ballantyne Corporate Park, The Ballantyne Hotel, MetLife, LPL Financial" },
        { label: "University Research Park", time: "25 min", desc: "UNC Charlotte, campus tecnológicos, IBM, corredor de Duke Energy" },
        { label: "Concord / Motor Speedway", time: "25 min", desc: "Charlotte Motor Speedway, NASCAR Hall of Fame, Concord Mills" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Charlotte",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante los fines de semana de NASCAR. Contáctenos para cotizaciones a Asheville, Raleigh-Durham y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "san-diego",
    FA: "locationSanDiegoFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/SanLocation.png", alt: "Servicio de Auto de Lujo en San Diego.", caption: "Servicio de Auto de Lujo en San Diego." },
      h1: "Servicio de Auto de Lujo en San Diego",
      h2: "SAN · CRQ · MYF — Tarifas Fijas, Sin Recargos, 24/7",
      description: "San Diego en su horario. Ya sea que aterrice en el Aeropuerto Internacional de San Diego, baje de un jet privado en Palomar o Montgomery-Gibbs, o se dirija a una reunión en el corredor de biotecnología de Torrey Pines—Viaro ya está ahí. Sin alzas durante la Comic-Con, la temporada de carreras de Del Mar o cuando las conferencias de defensa y biotecnología llenan el Centro de Convenciones. Choferes que conocen cada ruta desde las terminales del SAN hasta el centro, La Jolla, Coronado y toda la Costa Norte.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes de biotecnología, defensa y hotelería de San Diego",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en San Diego.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["San Diego significa navegar 3 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en San Diego.", caption: "Desde el Hotel del Coronado hasta el corredor de biotecnología de Torrey Pines, Viaro mueve a los viajeros más exigentes de San Diego." },
      items: [
        { label: "Centro / Gaslamp", time: "10 min", desc: "Petco Park, Centro de Convenciones, Gaslamp Quarter, Pendry San Diego" },
        { label: "La Jolla / Torrey Pines", time: "25 min", desc: "Corredor de biotecnología, Scripps Research, UCSD, Lodge at Torrey Pines" },
        { label: "Coronado", time: "20 min", desc: "Hotel del Coronado, Naval Air Station, Silver Strand, resorts de playa" },
        { label: "Rancho Santa Fe", time: "35 min", desc: "Fincas de lujo, Fairmont Grand Del Mar, comunidades ecuestres privadas" },
        { label: "Carlsbad / Encinitas", time: "40 min", desc: "Legoland, Omni La Costa, parques tecnológicos, comunidades costeras del norte" },
        { label: "Temecula", time: "1 hr", desc: "Región vinícola, fincas de viñedos, Pechanga Resort, Old Town Temecula" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en San Diego",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para traslados fronterizos a Tijuana, Temecula, Los Ángeles y cotizaciones de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "naples-rsw",
    FA: "locationNaplesFortMyersFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/NaplesLocation.png", alt: "Servicio de Auto de Lujo en Nápoles y Fort Myers.", caption: "Servicio de Auto de Lujo en Nápoles y Fort Myers." },
      h1: "Servicio de Auto de Lujo en Nápoles y Fort Myers",
      h2: "RSW · APF — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Nápoles y Fort Myers en su horario. Ya sea que aterrice en el Aeropuerto Internacional del Suroeste de Florida después de un largo vuelo, baje de un jet privado en el Aeropuerto Municipal de Nápoles o llegue para la temporada en su propiedad de Port Royal—Viaro ya está ahí. Sin alzas durante la temporada alta de enero a abril. Choferes que conocen cada ruta desde el RSW hasta Nápoles, Marco Island, Sanibel y toda la costa del Suroeste de Florida.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los residentes más exigentes de Nápoles, huéspedes de resorts y visitantes de invierno",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Nápoles y Fort Myers.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Nápoles y Fort Myers significan navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Nápoles y Fort Myers.", caption: "Desde fincas en Port Royal hasta resorts en Marco Island, Viaro mueve a los huéspedes más exigentes del Suroeste de Florida." },
      items: [
        { label: "Old Naples / Fifth Avenue", time: "30 min", desc: "Fifth Avenue South, Third Street South, Inn on Fifth, boutiques de lujo" },
        { label: "Port Royal / Aqualane Shores", time: "35 min", desc: "Fincas frente al agua, muelles privados, residencial más exclusivo de Nápoles" },
        { label: "Pelican Bay", time: "30 min", desc: "Ritz-Carlton Nápoles, LaPlaya Resort, clubes de playa privados, condominios de lujo" },
        { label: "Marco Island", time: "45 min", desc: "Marco Island Marriott, JW Marriott, resorts de playa, Rookery Bay" },
        { label: "Bonita Springs / Estero", time: "15 min", desc: "Hyatt Regency Coconut Point, Coconut Point Mall, Miromar Outlets" },
        { label: "Sanibel y Captiva", time: "45 min", desc: "Resorts de Sanibel Island, South Seas Island Resort, playas de conchas" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Nápoles y Fort Myers",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera en temporada alta. Contáctenos para cotizaciones a Miami, Tampa, Sarasota y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "tampa-tpa",
    FA: "locationTampaFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/TampaLocation.png", alt: "Servicio de Auto de Lujo en Tampa.", caption: "Servicio de Auto de Lujo en Tampa." },
      h1: "Servicio de Auto de Lujo en Tampa",
      h2: "TPA · PIE — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Tampa en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Tampa, llegue a St. Pete-Clearwater desde un vuelo regional o se dirija a una reunión en el Distrito de Negocios Westshore—Viaro ya está ahí. Sin alzas durante los fines de semana del Super Bowl, el Gasparilla o cuando las convenciones llenan el Centro de Convenciones de Tampa. Choferes que conocen cada ruta desde el TPA hasta el centro, Hyde Park, St. Petersburg, Clearwater Beach y toda el Área de la Bahía de Tampa.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes empresariales, huéspedes de resorts y viajeros corporativos del Área de la Bahía de Tampa",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Tampa.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Tampa significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Tampa.", caption: "Desde el Amalie Arena hasta las playas de Clearwater, Viaro mueve a los viajeros más exigentes del Área de la Bahía de Tampa." },
      items: [
        { label: "Centro de Tampa / Water Street", time: "10 min", desc: "Water Street Tampa, Amalie Arena, Centro de Convenciones de Tampa, Channelside" },
        { label: "Hyde Park / South Tampa", time: "15 min", desc: "Hyde Park Village, Bayshore Boulevard, residencial de lujo, gastronomía boutique" },
        { label: "Distrito de Negocios Westshore", time: "5 min", desc: "Campus corporativos, Westshore Plaza, International Plaza, Embassy Row" },
        { label: "St. Petersburg", time: "30 min", desc: "Centro de St. Pete, The Vinoy, Museo Dalí, St. Pete Pier, Beach Drive" },
        { label: "Clearwater Beach", time: "35 min", desc: "Wyndham Grand Clearwater, Sandpearl Resort, Pier 60, playas del Golfo" },
        { label: "Sarasota", time: "1 hr", desc: "Centro de Sarasota, Siesta Key, Longboat Key, Museo Ringling" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Tampa",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante el Gasparilla o el Super Bowl. Contáctenos para cotizaciones a Sarasota, Orlando y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "philadelphia-phl",
    FA: "locationPhiladelphiaFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/PhiladelphiaLocation.png", alt: "Servicio de Auto de Lujo en Filadelfia.", caption: "Servicio de Auto de Lujo en Filadelfia." },
      h1: "Servicio de Auto de Lujo en Filadelfia",
      h2: "PHL · PNE — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Filadelfia en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Filadelfia, baje de un jet privado en el Aeropuerto del Noreste de Filadelfia o se dirija a una reunión en University City—Viaro ya está ahí. Sin alzas durante las series de playoffs de los Eagles, los Penn Relays o cuando las conferencias farmacéuticas llenan el Centro de Convenciones. Choferes que conocen cada ruta desde las siete terminales del PHL hasta el Centro de la Ciudad, Rittenhouse, el Main Line y más allá.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes farmacéuticos, financieros y académicos de Filadelfia",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Filadelfia.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Filadelfia significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Filadelfia.", caption: "Desde el Liberty Bell hasta el Main Line, Viaro mueve a los viajeros más exigentes de Filadelfia." },
      items: [
        { label: "Centro de la Ciudad / Market Street", time: "20 min", desc: "Comcast Center, Ayuntamiento, Pennsylvania Convention Center, hoteles de lujo" },
        { label: "Rittenhouse Square", time: "20 min", desc: "The Rittenhouse Hotel, Four Seasons, gastronomía en Walnut Street, residencial de lujo" },
        { label: "Old City / Society Hill", time: "25 min", desc: "Independence Hall, distrito histórico, hoteles boutique, Penn's Landing" },
        { label: "University City", time: "15 min", desc: "Universidad de Pennsylvania, Drexel, Penn Medicine, corredor de biotecnología" },
        { label: "Main Line", time: "30 min", desc: "Bryn Mawr, Wayne, Villanova, King of Prussia, campus corporativos" },
        { label: "King of Prussia", time: "35 min", desc: "KOP Mall, parques corporativos, GSK, Vanguard, Upper Merion" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Filadelfia",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante la temporada de los Eagles. Contáctenos para cotizaciones a Princeton, Atlantic City, Nueva York y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "vancouver-yvr",
    FA: "locationVancouverFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/VancouverLocation.png", alt: "Servicio de Auto de Lujo en Vancouver.", caption: "Servicio de Auto de Lujo en Vancouver." },
      h1: "Servicio de Auto de Lujo en Vancouver",
      h2: "YVR — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Vancouver en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Vancouver después de un vuelo transpacífico, conecte desde un vuelo con pre-despacho de EE.UU. o se dirija a una reunión en el corredor de Burrard—Viaro ya está ahí. Sin alzas durante el Festival Internacional de Cine de Vancouver, las series de playoffs de los Canucks o cuando las conferencias tecnológicas llenan el Convention Centre. Choferes que conocen cada ruta desde el YVR hasta el centro, Coal Harbour, North Van, Richmond y Whistler.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes tecnológicos, cinematográficos y empresariales de Vancouver",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Vancouver.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El YVR es el segundo aeropuerto más concurrido de Canadá—una terminal principal con niveles doméstico e internacional, y una terminal US Transborder para vuelos con pre-despacho a EE.UU."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Vancouver.", caption: "Desde el Fairmont Pacific Rim hasta Whistler Village, Viaro mueve a los viajeros más exigentes de Vancouver." },
      items: [
        { label: "Centro / Corredor de Burrard", time: "25 min", desc: "Distrito financiero, Convention Centre, hoteles de lujo, Robson Street" },
        { label: "Coal Harbour / Malecón", time: "25 min", desc: "Fairmont Pacific Rim, Rosewood Hotel Georgia, Pan Pacific, Canada Place" },
        { label: "Yaletown / False Creek", time: "30 min", desc: "Oficinas tecnológicas, hoteles boutique, BC Place, Science World" },
        { label: "West Vancouver / North Shore", time: "40 min", desc: "Capilano, Park Royal, residencial ejecutivo, Cypress Mountain" },
        { label: "Burnaby / Surrey", time: "30 min", desc: "SFU, Metrotown, corredor tecnológico, parques corporativos" },
        { label: "Whistler", time: "2 hrs", desc: "Whistler Blackcomb, Four Seasons Whistler, Fairmont Chateau Whistler" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Vancouver",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Whistler, Victoria, Seattle y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "minneapolis-msp",
    FA: "locationMinneapolisFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/MinneapolisLocation.png", alt: "Servicio de Auto de Lujo en Mineápolis.", caption: "Servicio de Auto de Lujo en Mineápolis." },
      h1: "Servicio de Auto de Lujo en Mineápolis",
      h2: "MSP · FCM — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Mineápolis en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Minneapolis-Saint Paul, baje de un jet privado en Flying Cloud o se dirija a una reunión a lo largo del corredor I-494—Viaro ya está ahí. Sin alzas durante los playoffs de los Vikings, el Super Bowl en el US Bank Stadium o cuando una tormenta de nieve azota y los precios de los rideshares se disparan. Choferes que conocen cada ruta desde las dos terminales del MSP hasta el centro, St. Paul, Edina, Eden Prairie y toda el Área Metropolitana de las Ciudades Gemelas.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes corporativos, de salud y del comercio minorista de Mineápolis",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Mineápolis.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Mineápolis significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Mineápolis.", caption: "Desde el IDS Center hasta el US Bank Stadium, Viaro mueve a los viajeros más exigentes de las Ciudades Gemelas." },
      items: [
        { label: "Centro de Mineápolis", time: "20 min", desc: "IDS Center, Target Field, Target Center, Centro de Convenciones de Mineápolis" },
        { label: "Uptown / Lyndale", time: "25 min", desc: "Hoteles boutique, oficinas creativas, Lake Calhoun, corredor Lyn-Lake" },
        { label: "St. Paul", time: "30 min", desc: "Xcel Energy Center, Capitolio del Estado, Union Depot, centro de St. Paul" },
        { label: "Edina / Bloomington", time: "15 min", desc: "Mall of America, Southdale Center, oficinas corporativas, residencial de lujo" },
        { label: "Eden Prairie / I-494", time: "20 min", desc: "UnitedHealth Group, Boston Scientific, General Mills, corredor corporativo" },
        { label: "Plymouth / Minnetonka", time: "25 min", desc: "Sede de Cargill, Xcel Energy, campus corporativos suburbanos, residencial de lujo" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Mineápolis",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera en una tormenta de nieve de Minnesota. Contáctenos para cotizaciones a Rochester, Duluth y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "honolulu",
    FA: "locationHonoluluFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/HonoluluLocation.png", alt: "Servicio de Auto de Lujo en Honolulú.", caption: "Servicio de Auto de Lujo en Honolulú." },
      h1: "Servicio de Auto de Lujo en Honolulú",
      h2: "HNL — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Honolulú en su horario. Ya sea que aterrice en el Aeropuerto Internacional Daniel K. Inouye después de un vuelo transpacífico, llegue desde el continente para una estadía en un resort o se dirija a una reunión en el Hawaii Convention Center—Viaro ya está ahí. Sin alzas durante la temporada alta, grandes convenciones o cuando las conmemoraciones de Pearl Harbor traen visitantes de todo el mundo. Choferes que conocen cada ruta desde el HNL hasta Waikiki, Kahala, Ko Olina y toda la isla de Oahu.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los huéspedes de resorts, ejecutivos y viajeros insulares de Honolulú",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Honolulú.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El HNL es el hub principal de Hawái—múltiples terminales para vuelos desde el continente de EE.UU., inter-islas e internacionales. El aeropuerto está a 6 millas de Waikiki."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Honolulú.", caption: "Desde el Royal Hawaiian hasta el Four Seasons Ko Olina, Viaro mueve a los huéspedes más exigentes de Oahu." },
      items: [
        { label: "Waikiki", time: "20 min", desc: "Halekulani, Royal Hawaiian, Moana Surfrider, Kalakaua Avenue" },
        { label: "Centro de Honolulú", time: "15 min", desc: "Hawaii Convention Center, Aloha Tower, distrito financiero, Chinatown" },
        { label: "Kahala / Diamond Head", time: "25 min", desc: "The Kahala Hotel & Resort, Diamond Head State Monument, residencial de lujo" },
        { label: "Hawaii Kai", time: "35 min", desc: "Comunidades de marina, Hanauma Bay, residencial de lujo del este de Honolulú" },
        { label: "Ko Olina", time: "40 min", desc: "Four Seasons Ko Olina, Aulani Disney Resort, comunidades de laguna" },
        { label: "North Shore", time: "1 hr", desc: "Pueblo de Haleiwa, Turtle Bay Resort, Sunset Beach, competencias de surf" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Honolulú",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Ko Olina, North Shore, tours completos por la isla y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "detroit-dtw",
    FA: "locationDetroitFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/DetroitLocation.png", alt: "Servicio de Auto de Lujo en Detroit.", caption: "Servicio de Auto de Lujo en Detroit." },
      h1: "Servicio de Auto de Lujo en Detroit",
      h2: "DTW · PTK — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Detroit en su horario. Ya sea que aterrice en el Aeropuerto Metropolitano de Detroit, baje de un jet privado en el Aeropuerto Internacional del Condado de Oakland o se dirija a una reunión en la sede de Ford en Dearborn—Viaro ya está ahí. Sin alzas durante el Auto Show Internacional de Norteamérica o cuando las conferencias de proveedores automotrices llenan el TCF Center. Choferes que conocen cada ruta desde la Terminal McNamara del DTW hasta el centro, Midtown, el corredor automotriz y Ann Arbor.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes automotrices, tecnológicos y de salud de Detroit",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Detroit.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Detroit significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Detroit.", caption: "Desde el Renaissance Center hasta la sede de Ford, Viaro mueve a los viajeros más exigentes de Detroit." },
      items: [
        { label: "Centro de Detroit / Campus Martius", time: "25 min", desc: "GM Renaissance Center, Little Caesars Arena, TCF Center, hoteles de lujo" },
        { label: "Midtown / Wayne State", time: "25 min", desc: "Wayne State University, Detroit Medical Center, Henry Ford Health, distrito de las artes" },
        { label: "Dearborn / Sede de Ford", time: "15 min", desc: "Sede de Ford Motor Company, Henry Ford Museum, corredor corporativo de Dearborn" },
        { label: "Troy / Big Beaver", time: "30 min", desc: "Stellantis, corredor FCA, Somerset Collection, campus corporativos de Troy" },
        { label: "Bloomfield Hills / Birmingham", time: "35 min", desc: "Townsend Hotel, Cranbrook, residencial de lujo, corredor gastronómico exclusivo" },
        { label: "Ann Arbor", time: "45 min", desc: "Universidad de Michigan, Michigan Medicine, startups tecnológicas, Graduate Ann Arbor" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Detroit",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante el Auto Show. Contáctenos para cotizaciones a Ann Arbor, Windsor, Lansing y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "salt-lake-city",
    FA: "locationSaltLakeCityFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/SaltLocation.png", alt: "Servicio de Auto de Lujo en Salt Lake City.", caption: "Servicio de Auto de Lujo en Salt Lake City." },
      h1: "Servicio de Auto de Lujo en Salt Lake City",
      h2: "SLC — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Salt Lake City en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Salt Lake City, se dirija a una reunión en Silicon Slopes o vaya rápidamente por la I-80 para un día de nieve en Deer Valley—Viaro ya está ahí. Sin alzas durante la temporada de esquí, el Festival de Cine de Sundance o cuando las conferencias tecnológicas llenan el Salt Palace. Choferes que conocen cada condición en las carreteras a Park City, Little Cottonwood Canyon y los cinco principales resorts de esquí de las Montañas Wasatch.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes tecnológicos, empresariales y de resorts de esquí de Salt Lake City",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Salt Lake City.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El SLC recientemente inauguró una terminal completamente nueva—el proyecto Gateway reemplazó las viejas terminales. Hub Oeste de Delta. A solo 5 millas del centro."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Salt Lake City.", caption: "Desde las salas de juntas de Silicon Slopes hasta los lodges ski-in/ski-out de Deer Valley, Viaro mueve a los viajeros más exigentes de Utah." },
      items: [
        { label: "Centro de SLC", time: "10 min", desc: "Temple Square, Grand America Hotel, Salt Palace Convention Center, Gateway" },
        { label: "Silicon Slopes / Lehi", time: "30 min", desc: "Adobe, Qualtrics, Domo, Overstock, corredor tecnológico de la I-15" },
        { label: "Park City", time: "45 min", desc: "Main Street, Park City Mountain, Waldorf Astoria, Festival de Cine de Sundance" },
        { label: "Deer Valley", time: "50 min", desc: "Stein Eriksen Lodge, Montage Deer Valley, St. Regis, lujo ski-in/ski-out" },
        { label: "Alta / Snowbird", time: "40 min", desc: "Little Cottonwood Canyon, Cliff Lodge, área de esquí de Alta, nieve de polvo de clase mundial" },
        { label: "Brighton / Solitude", time: "45 min", desc: "Big Cottonwood Canyon, resorts familiares, acceso al backcountry" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Salt Lake City",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera en un día de nieve en polvo. Contáctenos para cotizaciones a Park City, Deer Valley, traslados a resorts y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "jackson-hole",
    FA: "locationJacksonHoleFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/JacksonLocation.png", alt: "Servicio de Auto de Lujo en Jackson Hole.", caption: "Servicio de Auto de Lujo en Jackson Hole." },
      h1: "Servicio de Auto de Lujo en Jackson Hole",
      h2: "JAC — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Jackson Hole en su horario. Ya sea que aterrice en el Aeropuerto de Jackson Hole, llegue para la temporada de esquí en el JHMR o se dirija a un rancho privado en el corredor del Snake River—Viaro ya está ahí. Sin alzas durante los fines de semana de mayor afluencia de esquiadores. Choferes con los vehículos correctos para las condiciones invernales que conocen cada ruta desde el JAC hasta Teton Village, Wilson, Moose y más allá.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los huéspedes más exigentes de resorts y viajeros privados de Jackson Hole",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Jackson Hole.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El JAC es el único aeropuerto comercial dentro de un parque nacional—el Parque Nacional Grand Teton rodea la pista en tres lados. Viaro programa la recogida con precisión—su conductor estaciona y espera, no circula."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Jackson Hole.", caption: "Desde los lodges ski-in/ski-out de Teton Village hasta los ranchos privados del Snake River, Viaro mueve a los huéspedes más exigentes de Jackson Hole." },
      items: [
        { label: "Teton Village", time: "20 min", desc: "Four Seasons, Hotel Terra, base del Mountain Resort de Jackson Hole, ski-in/ski-out" },
        { label: "Jackson Town Square", time: "10 min", desc: "Rusty Parrot Lodge, restaurantes del centro, galerías, plaza del arco de cuernos" },
        { label: "Amangani / East Gros Ventre", time: "15 min", desc: "Resort Amangani, Shooting Star, fincas de lujo en la cresta, vistas al cañón" },
        { label: "Wilson / Snake River", time: "15 min", desc: "Corredor del Snake River, ranchos privados, acceso a pesca, Stagecoach Bar" },
        { label: "Moose / Grand Teton NP", time: "20 min", desc: "Entrada al Parque Nacional Grand Teton, Murie Ranch, Laurance Rockefeller Preserve" },
        { label: "Yellowstone", time: "1.5 hrs", desc: "Entrada Sur, Old Faithful, Grand Prismatic Spring, tours de vida silvestre" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Jackson Hole",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante la temporada alta de nieve. Contáctenos para cotizaciones a Yellowstone, Grand Targhee, Star Valley y excursiones de día completo.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "raleigh-rdu",
    FA: "locationRaleighDurhamFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/RaleighLocation.png", alt: "Servicio de Auto de Lujo en Raleigh-Durham.", caption: "Servicio de Auto de Lujo en Raleigh-Durham." },
      h1: "Servicio de Auto de Lujo en Raleigh-Durham",
      h2: "RDU — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Raleigh-Durham en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Raleigh-Durham o se dirija a una reunión en Research Triangle Park—Viaro ya está ahí. Sin alzas durante los fines de semana de Duke vs. Carolina, la Feria Estatal de Carolina del Norte o cuando las conferencias farmacéuticas y tecnológicas llenan el Centro de Convenciones de Raleigh. Choferes que conocen cada ruta desde las dos terminales del RDU hasta el centro de Raleigh, Durham, Chapel Hill, RTP y toda la metrópolis del Triángulo.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes farmacéuticos, tecnológicos y universitarios del Triángulo",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Raleigh-Durham.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El RDU sirve al Research Triangle—dos terminales (1 y 2) conectadas por una pasarela, a 14 millas tanto del centro de Raleigh como del centro de Durham."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Raleigh-Durham.", caption: "Desde los laboratorios de Research Triangle Park hasta el Duke University Medical Center, Viaro mueve a los viajeros más exigentes del Triángulo." },
      items: [
        { label: "Research Triangle Park", time: "10 min", desc: "IBM, Cisco, GSK, Biogen, campus de la EPA, corredor de Davis Drive" },
        { label: "Centro de Raleigh", time: "20 min", desc: "PNC Arena, Centro de Convenciones de Raleigh, Fayetteville Street, hoteles de lujo" },
        { label: "Durham / American Tobacco", time: "20 min", desc: "American Tobacco Campus, Universidad de Duke, Durham Bulls, 21c Museum Hotel" },
        { label: "Chapel Hill / UNC", time: "25 min", desc: "Universidad de Carolina del Norte, UNC Health, Dean Dome, Franklin Street" },
        { label: "Cary / Morrisville", time: "15 min", desc: "Sede de SAS Institute, parques tecnológicos de Morrisville, corredor corporativo de Cary" },
        { label: "Umstead / North Raleigh", time: "15 min", desc: "Umstead Hotel and Spa, North Hills, Crabtree Valley, residencial de lujo" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Raleigh-Durham",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante el fin de semana de Duke-Carolina. Contáctenos para cotizaciones a Charlotte, Wilmington, Greensboro y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "new-orleans-msy",
    FA: "locationNewOrleansFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/NewLocation.png", alt: "Servicio de Auto de Lujo en Nueva Orleans.", caption: "Servicio de Auto de Lujo en Nueva Orleans." },
      h1: "Servicio de Auto de Lujo en Nueva Orleans",
      h2: "MSY · NEW — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Nueva Orleans en su horario. Ya sea que aterrice en el Aeropuerto Internacional Louis Armstrong de Nueva Orleans, baje de un jet privado en el Aeropuerto Lakefront o se dirija a una reunión en el CBD—Viaro ya está ahí. Sin alzas durante el Mardi Gras, Jazz Fest, el Sugar Bowl o cuando el Ernest N. Morial Convention Center se llena para una gran conferencia. Choferes que conocen cada ruta desde el MSY hasta el Barrio Francés, Garden District, Uptown y cada barrio.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los grupos de convenciones, viajeros de festivales y líderes empresariales de Nueva Orleans",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Nueva Orleans.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Nueva Orleans significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Nueva Orleans.", caption: "Desde el Windsor Court hasta los predios del Jazz Fest, Viaro mueve a los viajeros más exigentes de Nueva Orleans." },
      items: [
        { label: "Barrio Francés", time: "25 min", desc: "Hotel Monteleone, Audubon Cottages, Bourbon Street, Jackson Square" },
        { label: "Garden District", time: "30 min", desc: "Magazine Street, Commander's Palace, mansiones históricas, tranvía de St. Charles" },
        { label: "CBD / Warehouse Arts District", time: "25 min", desc: "Windsor Court, Roosevelt Hotel, Centro de Convenciones, Smoothie King Center" },
        { label: "Uptown / Magazine Street", time: "35 min", desc: "Universidad de Tulane, Loyola, Audubon Park, corredor gastronómico exclusivo" },
        { label: "Marigny / Bywater", time: "30 min", desc: "Sedes musicales de Frenchmen Street, hoteles boutique, distrito creativo" },
        { label: "Metairie", time: "15 min", desc: "Oficinas corporativas, hoteles suburbanos, corredor del Lago Pontchartrain" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Nueva Orleans",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante el Mardi Gras. Contáctenos para cotizaciones a Baton Rouge, Lafayette, la Costa del Golfo y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "cincinnati",
    FA: "locationCincinnatiFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/CincinnatiLocation.png", alt: "Servicio de Auto de Lujo en Cincinnati.", caption: "Servicio de Auto de Lujo en Cincinnati." },
      h1: "Servicio de Auto de Lujo en Cincinnati",
      h2: "CVG — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Cincinnati en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Cincinnati/Northern Kentucky o se dirija a una reunión en Blue Ash—Viaro ya está ahí. Sin alzas durante los playoffs de los Bengals, el Festival de Música de Cincinnati o cuando las conferencias corporativas llenan el Duke Energy Convention Center. Choferes que conocen cada ruta desde el CVG, cruzando el puente del Río Ohio, hasta el centro, Hyde Park, Mason y todo el Gran Cincinnati.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes corporativos, de salud y de marcas de consumo de Cincinnati",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Cincinnati.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El CVG está técnicamente en el norte de Kentucky—a 12 millas al sur del centro de Cincinnati. El hub de carga aérea principal de Amazon ha impulsado una expansión significativa."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Cincinnati.", caption: "Desde el Paycor Stadium hasta la sede de P&G, Viaro mueve a los viajeros más exigentes de Cincinnati." },
      items: [
        { label: "Centro de Cincinnati", time: "20 min", desc: "Paycor Stadium, Great American Ball Park, Duke Energy Convention Center, Fountain Square" },
        { label: "Over-the-Rhine", time: "20 min", desc: "21c Museum Hotel, Music Hall, Findlay Market, corredor de cervecerías" },
        { label: "Hyde Park / Mt. Lookout", time: "25 min", desc: "Hyde Park Square, residencial de lujo, gastronomía boutique, Eden Park" },
        { label: "Blue Ash", time: "25 min", desc: "P&G, Kroger, Luxottica, corredor corporativo de Blue Ash" },
        { label: "Mason / Deerfield Township", time: "35 min", desc: "Great Wolf Lodge, Kings Island, campus corporativos, residencial de lujo" },
        { label: "Northern Kentucky / Covington", time: "10 min", desc: "Hotel Covington, Newport on the Levee, parques corporativos de Florence" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Cincinnati",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Columbus, Dayton, Louisville, Lexington y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "portland",
    FA: "locationPortlandFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/PortlandLocation.png", alt: "Servicio de Auto de Lujo en Portland.", caption: "Servicio de Auto de Lujo en Portland." },
      h1: "Servicio de Auto de Lujo en Portland",
      h2: "PDX · HIO — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Portland en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Portland, baje de un jet privado en el Aeropuerto de Hillsboro o se dirija a una reunión en el Intel Ronler Acres o el Nike World Campus—Viaro ya está ahí. Sin alzas durante el Festival de las Rosas, los playoffs de los Trail Blazers o cuando las conferencias tecnológicas llenan el Centro de Convenciones de Oregon. Choferes que conocen cada ruta desde las terminales del PDX hasta el centro, el Pearl District, Silicon Forest y más allá.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes tecnológicos, creativos y corporativos de Portland",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Portland.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["Portland significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Portland.", caption: "Desde el Pearl District hasta el Nike World Campus, Viaro mueve a los viajeros más exigentes de Portland." },
      items: [
        { label: "Centro / Pearl District", time: "20 min", desc: "The Nines, Sentinel Hotel, Pioneer Courthouse Square, Powell's Books" },
        { label: "NW Portland / Nob Hill", time: "25 min", desc: "23rd Avenue, hoteles boutique, gastronomía exclusiva, senderos de Forest Park" },
        { label: "Beaverton / Washington Square", time: "35 min", desc: "Washington Square Mall, oficinas corporativas, Oregon Health & Science University" },
        { label: "Hillsboro / Silicon Forest", time: "40 min", desc: "Intel Ronler Acres, Nike World Campus, Tektronix, corredor SolarWorld" },
        { label: "Lake Oswego", time: "30 min", desc: "Residencial de lujo, hoteles boutique, George Rogers Park, corredor ejecutivo" },
        { label: "Mt. Hood / Columbia Gorge", time: "1 hr", desc: "Timberline Lodge, Multnomah Falls, Hood River, ruta panorámica del Gorge" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Portland",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Mt. Hood, Columbia Gorge, Salem, Seattle y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "san-jose-sjo",
    FA: "locationCostaRicaFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/SanLocation.png", alt: "Servicio de Auto de Lujo en Costa Rica.", caption: "Servicio de Auto de Lujo en Costa Rica." },
      h1: "Servicio de Auto de Lujo en Costa Rica",
      h2: "SJO · LIR — Tarifas Fijas, Sin Recargos, 24/7",
      description: "San José y Liberia en su horario. Ya sea que aterrice en el Aeropuerto Internacional Juan Santamaría después de un vuelo desde EE.UU., llegue al Aeropuerto de Liberia para una estadía en un resort en Guanacaste o haga traslados entre las costas de Costa Rica—Viaro ya está ahí. Precios transparentes con tarifas fijas al reservar. Sin alzas durante la temporada alta navideña o cuando los jets privados se acumulan en el LIR. Conductores licenciados y profesionales que conocen cada ruta desde el Valle Central hasta la costa del Pacífico, Arenal hasta la Península Papagayo.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los huéspedes de resorts, ecoturistas y visitantes de negocios de Costa Rica",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Costa Rica.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["San José y Liberia significan navegar 2 aeropuertos distintos—cada uno sirviendo una parte completamente diferente de Costa Rica."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Costa Rica.", caption: "Desde la Península Papagayo hasta el volcán Arenal, Viaro mueve a los huéspedes más exigentes de Costa Rica." },
      items: [
        { label: "Península Papagayo", time: "30 min desde LIR", desc: "Four Seasons Papagayo, Andaz Costa Rica, comunidades de marina privada" },
        { label: "Tamarindo / Flamingo", time: "1 hr desde LIR", desc: "Playa Flamingo, Reserva Conchal, playas de surf, hoteles boutique" },
        { label: "Nosara / Sámara", time: "2 hrs desde LIR", desc: "Comunidad de surf de Nosara, Sámara beach, Mal País, retiros de yoga" },
        { label: "Manuel Antonio", time: "3.5 hrs desde SJO", desc: "Arenas del Mar, Gaia Hotel, parque nacional, costa central del Pacífico" },
        { label: "Arenal / La Fortuna", time: "3 hrs desde SJO", desc: "Nayara Tented Camp, Volcán Arenal, aguas termales, actividades de aventura" },
        { label: "Monteverde", time: "3 hrs desde SJO", desc: "Bosque nuboso, Monteverde Lodge, puentes colgantes, reservas naturales" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Costa Rica",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Manuel Antonio, Arenal, Monteverde, traslados entre costas y rutas personalizadas de múltiples días.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "sacramento",
    FA: "locationSacramentoFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/SacramentoLocation.png", alt: "Servicio de Auto de Lujo en Sacramento.", caption: "Servicio de Auto de Lujo en Sacramento." },
      h1: "Servicio de Auto de Lujo en Sacramento",
      h2: "SMF — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Sacramento en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Sacramento, se dirija a una reunión en el Capitolio o vaya camino a Napa o Tahoe—Viaro ya está ahí. Sin alzas durante la Feria Estatal, los playoffs de los Kings o cuando las conferencias de gobierno y agricultura llenan el Centro de Convenciones de Sacramento. Choferes que conocen cada ruta desde el SMF hasta el centro, Roseville, el campus de Oracle en Folsom y los corredores de las montañas y la región vinícola.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes gubernamentales, tecnológicos y agrícolas de Sacramento",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Sacramento.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El SMF es un aeropuerto limpio y eficiente—dos terminales (A y B) con un conector compartido. Ubicado a 10 millas al noroeste del centro de Sacramento, directamente en la I-5."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Sacramento.", caption: "Desde el Tech Center hasta los viñedos de Vail, Viaro mueve a los viajeros más exigentes de Sacramento." },
      items: [
        { label: "Centro de Sacramento / Capitol Mall", time: "20 min", desc: "Capitolio de California, Citizen Hotel, Golden 1 Center, Centro de Convenciones" },
        { label: "Midtown / R Street", time: "25 min", desc: "The Sawyer Hotel, Kimpton Sawyer, R Street Corridor, gastronomía farm-to-fork" },
        { label: "Roseville / Rocklin", time: "30 min", desc: "Campus de HP, corredor tecnológico, Galleria at Roseville, parques corporativos" },
        { label: "Folsom / Oracle", time: "35 min", desc: "Campus de Oracle, Intel Folsom, Empire Ranch, Folsom Premium Outlets" },
        { label: "Napa Valley", time: "1.5 hrs", desc: "Región vinícola de Napa, Yountville, St. Helena, tours de fincas vinícolas" },
        { label: "Lake Tahoe", time: "2 hrs", desc: "South Lake Tahoe, Heavenly, North Shore, Truckee, esquí y recreación de verano" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Sacramento",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Napa, Sonoma, Lake Tahoe y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "st-louis",
    FA: "locationStLouisFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/StLocation.png", alt: "Servicio de Auto de Lujo en San Luis.", caption: "Servicio de Auto de Lujo en San Luis." },
      h1: "Servicio de Auto de Lujo en San Luis",
      h2: "STL · SUS — Tarifas Fijas, Sin Recargos, 24/7",
      description: "San Luis en su horario. Ya sea que aterrice en el Aeropuerto Internacional Lambert de San Luis, baje de un jet privado en el Aeropuerto Spirit of St. Louis o se dirija a una reunión en Clayton—Viaro ya está ahí. Sin alzas durante las temporadas de playoffs de los Cardinals, el Abierto de EE.UU. en Bellerive o cuando las conferencias corporativas llenan el America's Center. Choferes que conocen cada ruta desde el STL hasta el centro, Clayton, el Valle de Chesterfield y ambas orillas del Mississippi.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes corporativos, de salud y de biotecnología de San Luis",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en San Luis.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["San Luis significa navegar 2 aeropuertos distintos. Así es como Viaro le ayuda."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en San Luis.", caption: "Desde el Busch Stadium hasta el Cortex Innovation District, Viaro mueve a los viajeros más exigentes de San Luis." },
      items: [
        { label: "Centro / Gateway Arch", time: "20 min", desc: "Gateway Arch, Busch Stadium, Enterprise Center, America's Center, hoteles de lujo" },
        { label: "Clayton CBD", time: "25 min", desc: "Sede del Condado de San Luis, firmas de abogados, servicios financieros, Ritz-Carlton, Centene Plaza" },
        { label: "Midtown / Cortex", time: "25 min", desc: "Cortex Innovation District, Washington University Medical, BJC Healthcare" },
        { label: "Chesterfield Valley", time: "30 min", desc: "Corredor corporativo, Chesterfield Mall, Mastercard, sede de Express Scripts" },
        { label: "Ladue / Town & Country", time: "30 min", desc: "Residencial de lujo, corredor de escuelas privadas, Country Club Plaza" },
        { label: "St. Charles", time: "25 min", desc: "Historic Main Street, parques corporativos, corredor del Río Missouri" },
      ],
      content: ["Vea nuestros servicios de transporte corporativo y opciones de chofer por hora."],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en San Luis",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Kansas City, Memphis, Chicago y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "columbus",
    FA: "locationColumbusFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/ColumbusLocation.png", alt: "Servicio de Auto de Lujo en Columbus.", caption: "Servicio de Auto de Lujo en Columbus." },
      h1: "Servicio de Auto de Lujo en Columbus",
      h2: "CMH — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Columbus en su horario. Ya sea que aterrice en el Aeropuerto Internacional John Glenn Columbus o se dirija a una reunión en el campus de Intel en New Albany—Viaro ya está ahí. Sin alzas durante los fines de semana de juegos de Ohio State, el Festival Arnold Sports o cuando las conferencias de tecnología y comercio minorista llenan el Greater Columbus Convention Center. Choferes que conocen cada ruta desde el CMH hasta el centro, Short North, Dublin, Polaris y el creciente corredor tecnológico de New Albany.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes tecnológicos, del comercio minorista y universitarios de Columbus",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Columbus.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El CMH es un aeropuerto compacto y eficiente—una terminal, a 10 millas al este del centro por la I-670."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Columbus.", caption: "Desde el Ohio Stadium hasta el campus de Intel, Viaro mueve a los viajeros más exigentes de Columbus." },
      items: [
        { label: "Centro de Columbus", time: "15 min", desc: "Nationwide Arena, Centro de Convenciones, Huntington Park, The Joseph, Scioto Mile" },
        { label: "Short North / OSU", time: "20 min", desc: "Short North Arts District, Ohio State University, Ohio Stadium, corredor High Street" },
        { label: "German Village", time: "20 min", desc: "Calles históricas de ladrillo, gastronomía boutique, residencial del South Side" },
        { label: "Easton / New Albany", time: "20 min", desc: "Easton Town Center, Amazon, Abercrombie & Fitch HQ, campus de Intel" },
        { label: "Dublin / Tuttle Crossing", time: "30 min", desc: "Sede de Wendy's, Cardinal Health, corredor tecnológico de Dublin, comunidades del Scioto River" },
        { label: "Polaris", time: "25 min", desc: "Parque corporativo Polaris, Polaris Fashion Place, campus norte de Nationwide Children's" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Columbus",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera el día de un juego de Ohio State. Contáctenos para cotizaciones a Cincinnati, Cleveland, Pittsburgh y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "indianapolis-ind",
    FA: "locationIndianapolisFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/IndianapolisLocation.png", alt: "Servicio de Auto de Lujo en Indianápolis.", caption: "Servicio de Auto de Lujo en Indianápolis." },
      h1: "Servicio de Auto de Lujo en Indianápolis",
      h2: "IND — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Indianápolis en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Indianápolis o se dirija a una reunión en Carmel o el corredor tecnológico de Fishers—Viaro ya está ahí. Sin alzas durante las 500 Millas de Indianápolis, el Campeonato de la Big Ten o cuando el Indiana Convention Center se llena para la Gen Con o una gran conferencia corporativa. Choferes que conocen cada ruta desde el IND hasta el centro, Carmel, Fishers y todo el cruce de Indianápolis.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes de ciencias de la vida, tecnología y corporativos de Indianápolis",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Indianápolis.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El IND tiene uno de los diseños de terminal más eficientes de EE.UU.—la Terminal Midfield abrió en 2008 con un lado tierra y un lado aire conectados por tren. A solo 7 millas al suroeste del centro por la I-70."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Indianápolis.", caption: "Desde el Gainbridge Fieldhouse hasta el Indianapolis Motor Speedway, Viaro mueve a los viajeros más exigentes de Indianápolis." },
      items: [
        { label: "Centro / Monument Circle", time: "15 min", desc: "Conrad Indianapolis, Lucas Oil Stadium, Gainbridge Fieldhouse, Centro de Convenciones" },
        { label: "Broad Ripple / Midtown", time: "20 min", desc: "Broad Ripple Village, hoteles boutique, Monon Trail, gastronomía exclusiva" },
        { label: "Carmel / Keystone", time: "30 min", desc: "Carmel Arts & Design District, Keystone Crossing, oficinas corporativas, residencial de lujo" },
        { label: "Fishers", time: "30 min", desc: "Corredor tecnológico de Fishers, Launch Fishers, DeveloperTown, Geist Reservoir" },
        { label: "Indianapolis Motor Speedway", time: "15 min", desc: "Indy 500, Brickyard 400, predios del IMS, comunidad de Speedway" },
        { label: "Zionsville", time: "30 min", desc: "Residencial de lujo, Zionsville Village, corredor ejecutivo, fincas privadas" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Indianápolis",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante las 500 Millas de Indianápolis. Contáctenos para cotizaciones a Bloomington, Purdue, Chicago y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "charleston-chs",
    FA: "locationCharlestonFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/CharlestonchLocation.png", alt: "Servicio de Auto de Lujo en Charleston.", caption: "Servicio de Auto de Lujo en Charleston." },
      h1: "Servicio de Auto de Lujo en Charleston",
      h2: "CHS — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Charleston en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Charleston, llegue para una estadía en el resort de Kiawah Island o se dirija a una boda en Sullivan's Island—Viaro ya está ahí. Sin alzas durante el Festival Spoleto USA, el RBC Heritage en Harbour Town o la temporada alta de bodas en la Península. Choferes que conocen cada ruta desde el CHS hasta el histórico centro, las islas y todo el Bajo País.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los huéspedes de resorts, viajeros de bodas y visitantes del Bajo País de Charleston",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Charleston.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El CHS es un aeropuerto compacto y agradable—a 13 millas al noroeste de la histórica Península del centro. Una terminal, filas cortas y una recogida de equipaje que consistentemente impresiona a los viajeros."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Charleston.", caption: "Desde Rainbow Row hasta los fairways del océano de Kiawah Island, Viaro mueve a los huéspedes más exigentes de Charleston." },
      items: [
        { label: "Península Histórica del Centro de Charleston", time: "20 min", desc: "The Dewberry, Belmond Charleston Place, King Street, Rainbow Row, Battery Park" },
        { label: "Mount Pleasant", time: "25 min", desc: "Patriot's Point, Towne Centre, residencial de lujo, malecón de Shem Creek" },
        { label: "Sullivan's Island", time: "30 min", desc: "Comunidad de playa, Fort Moultrie, faro de Sullivan's Island, fincas privadas" },
        { label: "Isle of Palms", time: "35 min", desc: "Wild Dunes Resort, alquileres de playa, comunidades frente al océano" },
        { label: "Kiawah Island", time: "45 min", desc: "Kiawah Island Golf Resort, The Sanctuary, Ocean Course, comunidades privadas de playa" },
        { label: "Folly Beach", time: "30 min", desc: "Folly Beach Pier, comunidad de surf, cabañas de playa, corredor de James Island" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Charleston",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante Spoleto o la temporada alta de bodas. Contáctenos para cotizaciones a Hilton Head, Savannah y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "cleveland",
    FA: "locationClevelandFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/ClevelandLocation.png", alt: "Servicio de Auto de Lujo en Cleveland.", caption: "Servicio de Auto de Lujo en Cleveland." },
      h1: "Servicio de Auto de Lujo en Cleveland",
      h2: "CLE — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Cleveland en su horario. Ya sea que aterrice en el Aeropuerto Internacional Hopkins de Cleveland o se dirija a una reunión en la Cleveland Clinic o un campus corporativo en Beachwood—Viaro ya está ahí. Sin alzas durante los playoffs de los Cavaliers, el NFL Draft en el Mall o cuando las conferencias médicas y de salud llenan el Huntington Convention Center. Choferes que conocen cada ruta desde el CLE hasta el centro, University Circle, los suburbios del este y todo el noreste de Ohio.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes de salud, corporativos y culturales de Cleveland",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Cleveland.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El CLE está a 10 millas al suroeste del centro—la Línea Roja del RTA conecta directamente a Public Square, pero para equipaje y grupos, el servicio de auto negro es la opción práctica."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Cleveland.", caption: "Desde la Cleveland Clinic hasta el Rock & Roll Hall of Fame, Viaro mueve a los viajeros más exigentes de Cleveland." },
      items: [
        { label: "Centro / Public Square", time: "15 min", desc: "Rocket Mortgage FieldHouse, Progressive Field, Centro de Convenciones, Rock Hall" },
        { label: "University Circle", time: "20 min", desc: "Campus principal de la Cleveland Clinic, University Hospitals, Case Western Reserve, Cleveland Museum of Art" },
        { label: "Shaker Heights", time: "20 min", desc: "Residencial histórico de lujo, Shaker Square, Van Aken District" },
        { label: "Beachwood", time: "25 min", desc: "Beachwood Place Mall, oficinas corporativas, corredor KeyBank, residencial de lujo" },
        { label: "Mayfield Heights / I-271", time: "25 min", desc: "Corredor corporativo de la I-271, oficinas de salud, Landerwood Plaza" },
        { label: "Westlake / Rocky River", time: "20 min", desc: "Crocker Park, parques corporativos del lado oeste, comunidades frente al lago" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Cleveland",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Akron, Pittsburgh, Columbus y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "pittsburgh-pit",
    FA: "locationPittsburghFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/PittsburghpiLocation.png", alt: "Servicio de Auto de Lujo en Pittsburgh.", caption: "Servicio de Auto de Lujo en Pittsburgh." },
      h1: "Servicio de Auto de Lujo en Pittsburgh",
      h2: "PIT — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Pittsburgh en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Pittsburgh o se dirija a una reunión en UPMC, CMU o un campus corporativo en Wexford—Viaro ya está ahí. Sin alzas durante los playoffs de los Steelers, el Maratón de Pittsburgh o cuando las conferencias de tecnología y salud llenan el David L. Lawrence Convention Center. Choferes que conocen cada túnel, cada puente y cada ruta desde el PIT hasta el Triángulo Dorado, Oakland y todo el suroeste de Pensilvania.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes tecnológicos, de salud y académicos de Pittsburgh",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Pittsburgh.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El PIT es un aeropuerto grande y bien diseñado a 16 millas al oeste del centro—la terminal aérea se conecta con la terrestre mediante un tren automático. Menos congestionado que la mayoría de los aeropuertos importantes de su tamaño."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Pittsburgh.", caption: "Desde el Triángulo Dorado hasta Carnegie Mellon, Viaro mueve a los viajeros más exigentes de Pittsburgh." },
      items: [
        { label: "Centro / Triángulo Dorado", time: "25 min", desc: "PPG Paints Arena, PNC Park, Centro de Convenciones, Fairmont, Market Square" },
        { label: "Oakland / Universidad", time: "30 min", desc: "UPMC, Universidad de Pittsburgh, Carnegie Mellon, Carnegie Museums, Pitt Medical" },
        { label: "Shadyside / East Liberty", time: "30 min", desc: "Walnut Street, hoteles boutique, Google Pittsburgh, Bakery Square" },
        { label: "South Side / Mt. Washington", time: "30 min", desc: "Acrisure Stadium, South Side Works, mirador de Grandview, Station Square" },
        { label: "Sewickley", time: "20 min", desc: "Pueblo histórico, residencial de lujo, Sewickley Heights Country Club, fincas privadas" },
        { label: "Wexford / Cranberry", time: "20 min", desc: "Corredor tecnológico de Cranberry, campus corporativos, oficinas de salud, suburbios del norte de Pittsburgh" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Pittsburgh",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera el día de un juego de los Steelers. Contáctenos para cotizaciones a Morgantown, Cleveland, Filadelfia y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "san-antonio-sat",
    FA: "locationSanAntonioFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/SanantoniosaLocation.png", alt: "Servicio de Auto de Lujo en San Antonio.", caption: "Servicio de Auto de Lujo en San Antonio." },
      h1: "Servicio de Auto de Lujo en San Antonio",
      h2: "SAT — Tarifas Fijas, Sin Recargos, 24/7",
      description: "San Antonio en su horario. Ya sea que aterrice en el Aeropuerto Internacional de San Antonio o se dirija a una reunión en el Medical Center o un resort en el Hill Country—Viaro ya está ahí. Sin alzas durante la Feria de San Antonio, los playoffs de la NBA en el AT&T Center o cuando las conferencias militares y gubernamentales llenan el Henry B. González Convention Center. Choferes que conocen cada ruta desde el SAT hasta el centro, el Pearl District, Stone Oak y todo el camino hasta el Hill Country.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes militares, de salud y turísticos de San Antonio",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en San Antonio.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El SAT es un aeropuerto mediano y sin congestión—dos terminales (A y B) que comparten un solo edificio, a 8 millas al norte del centro."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en San Antonio.", caption: "Desde el River Walk hasta los resorts del Hill Country, Viaro mueve a los viajeros más exigentes de San Antonio." },
      items: [
        { label: "Centro / River Walk", time: "15 min", desc: "Hotel Emma, Mokara Hotel, AT&T Center, Alamodome, Centro de Convenciones" },
        { label: "Pearl District", time: "15 min", desc: "Hotel Emma at Pearl, Pearl Brewery, gastronomía farm-to-table, tiendas boutique" },
        { label: "Medical Center / UT Health", time: "20 min", desc: "UT Health San Antonio, Methodist Hospital, South Texas Medical Center" },
        { label: "Stone Oak / Loop 1604", time: "25 min", desc: "Parques corporativos, oficinas médicas de Stone Oak, residencial de lujo del corredor norte" },
        { label: "La Cantera / The Rim", time: "25 min", desc: "La Cantera Resort, The Rim Shopping Center, campus de USAA, Valero Energy" },
        { label: "Hill Country / Fredericksburg", time: "1.5 hrs", desc: "Ruta vinícola, boutiques de Fredericksburg, Kerrville, capital del vaquero Bandera" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en San Antonio",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante la Feria. Contáctenos para cotizaciones a Austin, Fredericksburg, Corpus Christi y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "milwaukee-mke",
    FA: "locationMilwaukeeFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/MilwaukeemkeLocation.png", alt: "Servicio de Auto de Lujo en Milwaukee.", caption: "Servicio de Auto de Lujo en Milwaukee." },
      h1: "Servicio de Auto de Lujo en Milwaukee",
      h2: "MKE — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Milwaukee en su horario. Ya sea que aterrice en el Aeropuerto Internacional Mitchell de Milwaukee, use el MKE como alternativa más inteligente a O'Hare para los suburbios del oeste, o se dirija a una reunión en Northwestern Mutual o Johnson Controls—Viaro ya está ahí. Sin alzas durante el Summerfest, los playoffs de los Bucks o cuando las conferencias de manufactura y salud llenan el Baird Center. Choferes que conocen cada ruta desde el MKE hasta el centro, Brookfield, Waukesha, Racine y todo el camino hasta Chicago.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes de manufactura, corporativos y culturales de Milwaukee",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Milwaukee.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El MKE es un aeropuerto compacto y bien gestionado—a 7 millas al sur del centro por la I-894. Hub de Southwest Airlines en Milwaukee."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Milwaukee.", caption: "Desde el Fiserv Forum hasta los predios del Summerfest, Viaro mueve a los viajeros más exigentes de Milwaukee." },
      items: [
        { label: "Centro / Third Ward", time: "15 min", desc: "The Pfister, Fiserv Forum, predios del Summerfest, Milwaukee Art Museum, Riverwalk" },
        { label: "Wauwatosa / Brookfield", time: "20 min", desc: "Brookfield Square, campus de Milwaukee Tool, oficinas corporativas, residencial de lujo" },
        { label: "Waukesha / Corredor I-94", time: "25 min", desc: "Parques corporativos de Waukesha, GE Healthcare, corredor empresarial I-94" },
        { label: "Racine", time: "30 min", desc: "Sede de Johnson Controls, SC Johnson, Case IH, malecón de Racine" },
        { label: "Lake Geneva", time: "1 hr", desc: "Grand Geneva Resort, Abbey Resort, fincas frente al lago, recreación durante todo el año" },
        { label: "Suburbios de Chicago", time: "1 hr", desc: "Waukegan, Lake Forest, Libertyville, corredor corporativo del Condado de Lake en Illinois" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Milwaukee",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante el Summerfest. Contáctenos para cotizaciones a Chicago, Madison, Lake Geneva y traslados en el corredor.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "savannah-sav",
    FA: "locationSavannahFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/SavannahsavLocation.png", alt: "Servicio de Auto de Lujo en Savannah y Hilton Head.", caption: "Servicio de Auto de Lujo en Savannah y Hilton Head." },
      h1: "Servicio de Auto de Lujo en Savannah y Hilton Head",
      h2: "SAV — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Savannah e Hilton Head en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Savannah/Hilton Head, se dirija a una posada histórica en las plazas del centro o llegue a Sea Pines o Palmetto Bluffs—Viaro ya está ahí. Sin alzas durante el Día de San Patricio, el RBC Heritage en Harbour Town o la temporada alta de bodas en una de las ciudades más románticas de América. Choferes que conocen cada ruta desde el SAV hasta las plazas históricas, Hilton Head, Bluffton y todo el Bajo País de Georgia.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los huéspedes de resorts, viajeros de bodas y visitantes del Bajo País de Savannah",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Savannah y Hilton Head.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El SAV sirve tanto a Savannah como al corredor de Hilton Head Island—a 8 millas al noroeste del centro de Savannah por la I-16."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Savannah y Hilton Head.", caption: "Desde las plazas empedradas de Savannah hasta los fairways del océano de Hilton Head, Viaro mueve a los huéspedes más exigentes del Bajo País." },
      items: [
        { label: "Centro Histórico de Savannah", time: "15 min", desc: "The Brice, Perry Lane Hotel, The Gastonian, Forsyth Park, City Market" },
        { label: "Suburbios de Savannah / Ardsley Park", time: "20 min", desc: "Ardsley Park, Midtown Savannah, barrios residenciales, Garden City" },
        { label: "Hilton Head Island", time: "45 min", desc: "Sea Pines Resort, Harbour Town, South Beach, comunidades de alquiler de lujo" },
        { label: "Bluffton", time: "40 min", desc: "Old Town Bluffton, Palmetto Bluffs, oficinas corporativas, corredor May River" },
        { label: "Palmetto Bluffs / Montage", time: "45 min", desc: "Montage Palmetto Bluffs, Wilson Village, golf May River, fincas privadas" },
        { label: "Beaufort / Port Royal", time: "1 hr", desc: "Beaufort SC histórico, MCAS Beaufort, Port Royal Sound, fincas antebellum" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Savannah y Hilton Head",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Ni siquiera durante el Día de San Patricio. Contáctenos para cotizaciones a Charleston, Jacksonville, Beaufort y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  /* {
    id: "oakland-oak",
    FA: "locationOaklandFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/OaklandoakLocation.png", alt: "Servicio de Auto de Lujo en Oakland.", caption: "Servicio de Auto de Lujo en Oakland." },
      h1: "Servicio de Auto de Lujo en Oakland",
      h2: "OAK — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Oakland en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Oakland, se dirija a una reunión en Berkeley o Walnut Creek, o necesite transporte ejecutivo en el East Bay—Viaro ya está ahí. Sin alzas de precio. Choferes que conocen cada ruta desde el OAK hasta el centro de Oakland, Berkeley, el East Bay y San Francisco por los puentes.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes tecnológicos, universitarios y empresariales del East Bay",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Oakland.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El OAK es el aeropuerto del East Bay—bastión de Southwest Airlines con acceso rápido a Berkeley, Walnut Creek y todo el corredor del East Bay. Frecuentemente menos concurrido que el SFO."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Oakland.", caption: "Desde UC Berkeley hasta el centro de San Francisco, Viaro mueve a los viajeros más exigentes del East Bay." },
      items: [
        { label: "Centro de Oakland", time: "15 min", desc: "Jack London Square, Oakland Coliseum, centro financiero, hoteles boutique" },
        { label: "Berkeley / UC Berkeley", time: "20 min", desc: "Universidad de California Berkeley, Telegraph Avenue, corredor de biotecnología" },
        { label: "Walnut Creek", time: "25 min", desc: "Broadway Plaza, campus corporativos, Rossmoor, BART del East Bay" },
        { label: "Pleasanton / Tri-Valley", time: "30 min", desc: "Campus de Oracle, parques tecnológicos de Hacienda, corredor empresarial de Dublin" },
        { label: "San Francisco", time: "30 min", desc: "Centro de SF, SOMA, Silicon Valley vía Bay Bridge o San Mateo Bridge" },
        { label: "Fremont / Milpitas", time: "35 min", desc: "Campus de Tesla, Silicon Valley del sur, BART hasta San José" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Oakland",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "orange-county-sna",
    FA: "locationOrangeCountyFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/OrangecountyLocation.png", alt: "Servicio de Auto de Lujo en Orange County.", caption: "Servicio de Auto de Lujo en Orange County." },
      h1: "Servicio de Auto de Lujo en Orange County",
      h2: "SNA — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Orange County en su horario. Ya sea que aterrice en el Aeropuerto John Wayne/Orange County o se dirija a un resort en Newport Beach, Disneyland o los campus tecnológicos de Irvine—Viaro ya está ahí. Sin alzas de precio. Choferes que conocen cada ruta desde el SNA hasta las comunidades costeras exclusivas, Disneyland, Irvine y el corredor corporativo del sur de California.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los residentes de la costa, visitantes de parques temáticos y líderes empresariales de Orange County",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Orange County.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El Aeropuerto John Wayne (SNA/JWA) sirve a las comunidades costeras exclusivas de Orange County—Newport Beach, Laguna Beach, Irvine y el Complejo Disneyland."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Orange County.", caption: "Desde Rodeo Drive de Newport Beach hasta Disneyland, Viaro mueve a los viajeros más exigentes de Orange County." },
      items: [
        { label: "Newport Beach", time: "15 min", desc: "Fashion Island, Balboa Island, yates de lujo, residencial exclusivo" },
        { label: "Laguna Beach", time: "20 min", desc: "Galerías de arte, montblom de playa, resorts boutique, Montage Laguna Beach" },
        { label: "Disneyland / Anaheim", time: "15 min", desc: "Disneyland Resort, Centro de Convenciones de Anaheim, hoteles del parque temático" },
        { label: "Irvine / Spectrum", time: "15 min", desc: "Campus tecnológicos, Irvine Spectrum, UCI, corredores corporativos" },
        { label: "Los Ángeles", time: "40 min", desc: "Beverly Hills, Hollywood, LAX, DTLA, conexiones a todo el sur de California" },
        { label: "San Diego", time: "1.5 hrs", desc: "Balboa Park, La Jolla, Coronado, corredor de biotecnología de Torrey Pines" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Orange County",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones de larga distancia, chofer por día completo y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
  {
    id: "jacksonville-jax",
    FA: "locationJacksonvilleFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/JacksonvilleLocation.png", alt: "Servicio de Auto de Lujo en Jacksonville.", caption: "Servicio de Auto de Lujo en Jacksonville." },
      h1: "Servicio de Auto de Lujo en Jacksonville",
      h2: "JAX — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Jacksonville en su horario. Ya sea que aterrice en el Aeropuerto Internacional de Jacksonville o se dirija a un resort en Ponte Vedra, una reunión en el corredor empresarial de Southside o la famosa playa de Jacksonville—Viaro ya está ahí. Sin alzas durante los juegos de los Jaguars, el Players Championship en el TPC Sawgrass o los festivales de temporada en el malecón. Choferes que conocen cada ruta desde el JAX hasta el centro, Southside, Ponte Vedra, las playas de Jacksonville y el norte de Florida.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los líderes empresariales, de salud y viajeros de golf de Jacksonville",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Jacksonville.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El JAX es el aeropuerto principal del norte de Florida—a 14 millas al norte del centro por la I-95."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Jacksonville.", caption: "Desde el TPC Sawgrass hasta las playas de Jacksonville, Viaro mueve a los viajeros más exigentes del norte de Florida." },
      items: [
        { label: "Centro de Jacksonville", time: "20 min", desc: "EverBank Stadium, Vystar Veterans Memorial Arena, malecón, hoteles del CBD" },
        { label: "Southside / St. Johns Town Center", time: "20 min", desc: "St. Johns Town Center, campus corporativos, corredor empresarial de Southside" },
        { label: "Ponte Vedra / TPC Sawgrass", time: "30 min", desc: "TPC Sawgrass, The Players Championship, Sawgrass Marriott, comunidades de golf de lujo" },
        { label: "Jacksonville Beach", time: "30 min", desc: "Jacksonville Beach Pier, Sea Walk Pavilion, comunidades costeras, surfing" },
        { label: "Amelia Island", time: "45 min", desc: "Amelia Island Plantation, Ritz-Carlton Amelia Island, centro histórico de Fernandina Beach" },
        { label: "St. Augustine", time: "1 hr", desc: "Ciudad más antigua de EE.UU., Flagler College, Castillo de San Marcos, resorts históricos" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Jacksonville",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Amelia Island, St. Augustine, Orlando y de larga distancia.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  }, */
  {
    id: "liberia-lir",
    FA: "locationCostaRicaFA",
    Testi: "locationTestimonials",
    hero: {
      image: { src: "/images/LiberialirLocation.png", alt: "Servicio de Auto de Lujo en Liberia, Costa Rica.", caption: "Servicio de Auto de Lujo en Liberia, Costa Rica." },
      h1: "Servicio de Auto de Lujo en Liberia, Costa Rica",
      h2: "LIR — Tarifas Fijas, Sin Recargos, 24/7",
      description: "Liberia y Guanacaste en su horario. Ya sea que aterrice en el Aeropuerto Internacional Daniel Oduber Quirós para una estadía en la Península Papagayo o en un resort de Tamarindo—Viaro ya está ahí. Sin alzas de precio durante la temporada alta. Conductores licenciados que conocen cada ruta desde el LIR hasta los principales resorts de Guanacaste, las playas del Pacífico norte y los destinos naturales de Costa Rica.",
      cta: { book: "Reservar Su Auto Negro", phone: "(206) 672-8281" },
    },
    trustBarTitle: "La confianza de los huéspedes de resorts, ecoturistas y viajeros de aviación privada de Guanacaste",
    trustBar: ["60,000+ Viajes", "99.8% Puntualidad", "Soporte en Vivo 24/7"],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Traslados sin Contratiempos",
      image: { src: "/images/arrival.png", alt: "Servicio de Auto de Lujo en Liberia, Costa Rica.", caption: "Conocemos cada terminal y cada ruta." },
      content: ["El Aeropuerto de Liberia (LIR) es la puerta de entrada a Guanacaste—la costa del bosque seco del Pacífico de Costa Rica, hogar de Tamarindo, Flamingo, Conchal y la Península Papagayo."],
    },
    whereSection: {
      h2: "A Dónde Se Mueve con Viaro",
      image: { src: "/images/hotels.png", alt: "Servicio de Auto de Lujo en Liberia, Costa Rica.", caption: "Desde la Península Papagayo hasta las playas de surf de Tamarindo, Viaro mueve a los huéspedes más exigentes de Guanacaste." },
      items: [
        { label: "Península Papagayo", time: "30 min", desc: "Four Seasons Papagayo, Andaz Costa Rica, comunidades de marina privada" },
        { label: "Tamarindo / Flamingo", time: "1 hr", desc: "Playa Flamingo, Reserva Conchal, playas de surf, hoteles boutique" },
        { label: "Nosara / Sámara", time: "2 hrs", desc: "Comunidad de surf de Nosara, Sámara beach, retiros de yoga, Mal País" },
        { label: "Playa Hermosa / Coco", time: "45 min", desc: "Playas del norte de Guanacaste, comunidades residenciales, vida marina" },
        { label: "Rincón de la Vieja", time: "1.5 hrs", desc: "Parque Nacional volcánico, aguas termales, aventura en la naturaleza" },
        { label: "San José / Aeropuerto SJO", time: "4 hrs", desc: "Conexión entre costas, Valle Central, traslados intercostarricenses" },
      ],
      content: [
        "Vea nuestros servicios de <a href='/es/servicio-auto-lujo/transporte-corporativo'>transporte corporativo</a> y <a href='/es/servicio-auto-lujo/chofer-por-hora'>opciones de chofer por hora</a>.",
      ],
      cta: "Explorar Servicios →",
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Liberia, Costa Rica",
      vehicles: [
        { type: "Sedán", price: 149, passengers: 3, bags: 2, extras: ["Chofer profesional", "Seguimiento de vuelo en tiempo real", "Tarifa fija — sin aumentos", "Meet & greet incluido"] },
        { type: "SUV", price: 189, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Conductor pre-asignado", "Seguimiento de vuelo incluido", "Meet & greet incluido"], badge: "Más Popular" },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 13, bags: 10, extras: ["Viaje grupal y corporativo", "Asientos capitán", "Carga USB en todo el vehículo", "Seguimiento de vuelo incluido"] },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin alzas de precio — nunca. Contáctenos para cotizaciones a Manuel Antonio, Arenal, Monteverde, traslados entre costas y rutas personalizadas.",
      cta: "Obtener Cotización Exacta para Su Viaje →",
    },
  },
// Total generated: 13 cities
];