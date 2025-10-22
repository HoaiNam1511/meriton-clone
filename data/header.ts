import { INavData } from "@/interfaces";

export enum NavLeft {
  RESIDENTIAL = "/residential",
  COMMERCIAL_RETAIL = "/commercial-retail",
  MERITON_SUITES = "/meriton-suites",
  PARKING = "/parking",
  ENERGY = "/energy",
}

export const navLefts: INavData[] = [
  { title: "Residential", href: NavLeft.RESIDENTIAL },
  { title: "Commercial & Retail", href: NavLeft.COMMERCIAL_RETAIL },
  { title: "Meriton Suites", href: NavLeft.MERITON_SUITES },
  { title: "Parking", href: NavLeft.PARKING },
  { title: "Energy", href: NavLeft.ENERGY },
];

export const navRights: INavData[] = [
  { title: "Services", href: "/services" },
  { title: "About", href: "/about" },
  { title: "News", href: "/news" },
  { title: "Contact", href: "/contact" },
];

export const searchMenu = [
  {
    title: "Residential",
    children: [
      { title: "Properties to Buy", href: "/residential/properties-to-buy" },
      {
        title: "Home-loan Calculator",
        href: "/residential/home-loan-calculator",
      },
      { title: "Properties to Rent", href: "/residential/properties-to-rent" },
      { title: "Built for Rent", href: "/residential/built-for-rent" },
      {
        title: "Property Management",
        href: "/residential/property-management",
      },
    ],
  },
  {
    title: "Commercial & Retail",
    children: [
      {
        title: "Properties to Buy",
        href: "/commercial-retail/properties-to-buy",
      },
      {
        title: "Properties to Rent",
        href: "/commercial-retail/properties-to-rent",
      },
      {
        title: "Retail Precinct Directory",
        href: "/commercial-retail/retail-precinct-directory",
      },
    ],
  },
  {
    title: "Services",
    children: [
      { title: "Meriton 360", href: "/services/meriton-360" },
      { title: "Property Finance", href: "/services/property-finance" },
      { title: "Sell For Meriton", href: "/services/sell-for-meriton" },
      { title: "Property Management", href: "/services/property-management" },
      { title: "Property Resales", href: "/services/property-resales" },
    ],
  },
  {
    title: "About",
    children: [
      { title: "About Meriton", href: "/about/about-meriton" },
      { title: "Meriton News", href: "/about/meriton-news" },
      { title: "Careers at Meriton", href: "/about/careers-at-meriton" },
    ],
  },
];

export enum ResidentialMenu {
  BUY = "/residential/buy",
  RENT = "/residential/rent",
}

export const residentialMenu: INavData[] = [
  {
    title: "Available to Buy",
    href: "available-to-buy",
    children: [
      { title: "Explore All Properties", href: "/residential/buy/explore" },
      { title: "Sydney", href: "/residential/buy/sydney" },
      { title: "Brisbane", href: "/residential/buy/brisbane" },
      { title: "Gold Coast", href: "/residential/buy/gold-coast" },
    ],
  },
  {
    title: "Preowned",
    href: "preowned",
    children: [
      { title: "For Sale", href: "/residential/buy/preowned/for-sale" },
      {
        title: "Recently Sold",
        href: "/residential/buy/preowned/recently-sold",
      },
    ],
  },
  {
    title: "More",
    href: "more",
    children: [
      {
        title: "Property Finance",
        href: "/residential/buy/property-finance",
      },
      {
        title: "Home-loan Calculator",
        href: "/residential/buy/home-loan-calculator",
      },
      {
        title: "Why buy an investment property with Meriton",
        href: "/residential/buy/why-buy-investment",
      },
      {
        title: "Government incentives for first home buyers",
        href: "/residential/buy/government-incentives",
      },
    ],
  },
];

export const residentialRentMenu: INavData[] = [
  {
    title: "Available to Rent",
    href: "available-to-rent",
    children: [
      { title: "Explore All Properties", href: "/residential/rent/explore" },
      { title: "Sydney", href: "/residential/rent/sydney" },
      { title: "Brisbane", href: "/residential/rent/brisbane" },
      { title: "Gold Coast", href: "/residential/rent/gold-coast" },
    ],
  },
  {
    title: "More",
    href: "more",
    children: [
      {
        title: "Built for Rent",
        image:
          "https://cms.meriton.com.au/wp-content/uploads/2024/07/26de4ac354774253c6b9010319d1729c.png",
        href: "/residential/rent/built-for-rent",
        subtitle:
          "Meriton Built For Rent is a highly-refined operator and has been in the build-to-rent space for more than two decades.",
      },
      {
        title: "Meriton Property Management",
        href: "/residential/rent/property-management",
        image:
          "https://cms.meriton.com.au/wp-content/uploads/2024/09/Ocean-5.jpg",
        subtitle:
          "Meriton Property Management have premium properties for lease across Sydney, Brisbane and the Gold Coast.",
      },
    ],
  },
];
