// ─────────────────────────────────────────────────────────────────────────
//  BRANDS BOX — brand directory
//  The 9 houses represented in the Athens showroom (per Dimitra's brand list).
//
//  NOTE: blurbs are drafted from public information — please have Dimitra
//  review/refine each before launch. `logo` points at each label's official
//  logo, stored in /public/brands. Brand photography is intentionally NOT
//  used here — only Brands Box's own showroom photos appear as imagery.
// ─────────────────────────────────────────────────────────────────────────

export const brands = [
  {
    slug: 'manila-grace',
    name: 'Manila Grace',
    origin: 'Italy',
    category: 'Womenswear',
    since: '',
    short: 'Playful, contemporary Italian femininity.',
    blurb:
      'Manila Grace is an Italian house built on a confident, eclectic femininity — mixing prints, textures and proportions into a wardrobe for the modern “urban heroine”: romantic, a little rock, always directional.',
    logo: '/brands/manila-grace-logo.png',
    site: 'https://www.manilagrace.com',
  },
  {
    slug: 'osklen',
    name: 'OSKLEN',
    origin: 'Brazil',
    category: 'Lifestyle · Ready-to-Wear',
    since: '1989',
    short: 'Brazilian soul, sustainable sophistication.',
    blurb:
      'Founded in Rio de Janeiro by Oskar Metsavaht, OSKLEN is one of Brazil’s most influential lifestyle houses — an effortless “tropical minimalism” of natural fibres and sun-washed, beach-to-city ease, with a pioneering commitment to sustainability.',
    logo: '/brands/osklen-logo.png',
    site: 'https://www.osklen.com',
  },
  {
    slug: 'absolut-cashmere',
    name: 'Absolut Cashmere',
    origin: 'France',
    category: 'Cashmere Knitwear',
    since: '',
    short: 'The art of essential cashmere.',
    blurb:
      'Absolut Cashmere distils the wardrobe down to its most desirable essentials — pure cashmere knitwear in a refined, year-round palette with joyful pops of colour, made to be lived in and layered season after season.',
    logo: '/brands/absolut-cashmere-logo.png',
    site: 'https://www.absolutcashmere.com',
  },
  {
    slug: 'ottodame',
    name: "Ottod'Ame",
    origin: 'Italy',
    category: 'Womenswear',
    since: '2003',
    short: 'Tuscan craft, modern romance.',
    blurb:
      "Born in Tuscany, Ottod'Ame brings together Italian manufacturing heritage and a playful, dandy-chic sensibility — tailored elegance mixed with festive, eclectic styling and a quietly modern femininity.",
    logo: '/brands/ottodame-logo.png',
    site: 'https://www.ottodame.it',
  },
  {
    slug: 'alessia-santi',
    name: 'Alessia Santi',
    origin: 'Italy',
    category: 'Womenswear',
    since: '2018',
    short: 'Soft tailoring with a poetic hand.',
    blurb:
      'Alessia Santi offers a delicate, considered take on Italian womenswear — soft sartorial tailoring and fluid silhouettes in natural fabrics, composed into a feminine, easy-to-wear wardrobe with a poetic finish.',
    logo: '/brands/alessia-santi-logo.png',
    site: 'https://alessiasanti.com',
  },
  {
    slug: 'jei-o',
    name: "Jei O'",
    origin: 'Italy',
    category: 'Knitwear',
    since: '',
    short: 'Contemporary Italian knitwear, modern and directional.',
    blurb:
      "Jei O' is a contemporary knitwear label from Carpi, Italy — modern silhouettes with occasional oversized volumes, an original stylistic path driven by research into colour and detail, season after season.",
    logo: '/brands/jei-o-logo.png',
    site: 'https://www.jei-o.it',
  },
  {
    slug: 'sincere-paris',
    name: "SINCE'RE PARIS",
    origin: 'France',
    category: 'Womenswear · Ready-to-Wear',
    since: '',
    short: 'Parisian ready-to-wear, quietly timeless.',
    blurb:
      "SINCE'RE PARIS is a Paris-based French house offering timeless, elegant ready-to-wear — dresses, blazers, shirts and jackets cut for an understated, effortless wardrobe.",
    logo: '/brands/sincere-paris-logo.png',
    site: 'https://sincere-paris.com',
  },
  {
    slug: 'moismont',
    name: 'Moismont',
    origin: 'France',
    category: 'Accessories · Scarves',
    since: '2012',
    short: 'Hand-finished French scarves and prints.',
    blurb:
      'Founded in Picardy in 2012, Moismont is a French accessories label known for its hand-made, signed and numbered scarves and silk squares — prints designed in France and crafted with artisanal care.',
    logo: '/brands/moismont-logo.png',
    site: 'https://moismont.com/en',
  },
];

export const getBrand = (slug) => brands.find((b) => b.slug === slug);
