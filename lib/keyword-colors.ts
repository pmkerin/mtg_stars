// Color mapping for MTG keywords
export const keywordColors: Record<string, string> = {
  // Evergreen keywords
  flying: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100",
  deathtouch: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  defender: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100",
  doublestrike: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  "double strike": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  enchant: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
  equip: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
  firststrike: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
  "first strike": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
  flash: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  haste: "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100",
  hexproof: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100",
  indestructible: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  lifelink: "bg-white text-gray-800 dark:bg-gray-200 dark:text-gray-800 border border-gray-200 dark:border-gray-400",
  menace: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100",
  prowess: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
  reach: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-100",
  trample: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",
  vigilance: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100",

  // New keywords with unique color combinations
  "living weapon": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-100",
  "jump-start": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-100",
  "commander ninjutsu": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
  "legendary landwalk": "bg-amber-50 text-amber-700 dark:bg-amber-800 dark:text-amber-50",
  "nonbasic landwalk": "bg-lime-50 text-lime-700 dark:bg-lime-800 dark:text-lime-50",
  megamorph: "bg-emerald-50 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-50",
  haunt: "bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200",
  forecast: "bg-sky-50 text-sky-700 dark:bg-sky-800 dark:text-sky-50",
  graft: "bg-green-50 text-green-700 dark:bg-green-800 dark:text-green-50",
  fortify: "bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-100",
  frenzy: "bg-red-50 text-red-700 dark:bg-red-800 dark:text-red-50",
  gravestorm: "bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200",
  hideaway: "bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-50",
  "level up": "bg-yellow-50 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-50",
  infect: "bg-green-200 text-green-900 dark:bg-green-950 dark:text-green-200",
  rampage: "bg-red-200 text-red-900 dark:bg-red-950 dark:text-red-200",
  phasing: "bg-indigo-50 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-50",
  multikicker: "bg-amber-200 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  morph: "bg-teal-50 text-teal-700 dark:bg-teal-800 dark:text-teal-50",
  provoke: "bg-orange-50 text-orange-700 dark:bg-orange-800 dark:text-orange-50",
  modular: "bg-zinc-50 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-50",
  ninjutsu: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-50",
  replicate: "bg-purple-50 text-purple-700 dark:bg-purple-800 dark:text-purple-50",
  recover: "bg-emerald-200 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
  poisonous: "bg-lime-200 text-lime-900 dark:bg-lime-950 dark:text-lime-200",
  prowl: "bg-violet-50 text-violet-700 dark:bg-violet-800 dark:text-violet-50",
  reinforce: "bg-stone-50 text-stone-700 dark:bg-stone-800 dark:text-stone-50",
  persist: "bg-neutral-50 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-50",
  retrace: "bg-cyan-50 text-cyan-700 dark:bg-cyan-800 dark:text-cyan-50",
  rebound: "bg-sky-200 text-sky-900 dark:bg-sky-950 dark:text-sky-200",
  miracle: "bg-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-200",
  overload: "bg-blue-200 text-blue-900 dark:bg-blue-950 dark:text-blue-200",
  outlast: "bg-orange-200 text-orange-900 dark:bg-orange-950 dark:text-orange-200",
  renown: "bg-rose-50 text-rose-700 dark:bg-rose-800 dark:text-rose-50",
  myriad: "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-800 dark:text-fuchsia-50",
  shroud: "bg-teal-200 text-teal-900 dark:bg-teal-950 dark:text-teal-200",
  storm: "bg-indigo-200 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200",
  soulshift: "bg-purple-200 text-purple-900 dark:bg-purple-950 dark:text-purple-200",
  splice: "bg-violet-200 text-violet-900 dark:bg-violet-950 dark:text-violet-200",
  transmute: "bg-slate-200 text-slate-900 dark:bg-slate-950 dark:text-slate-200",
  ripple: "bg-cyan-200 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-200",
  suspend: "bg-amber-300 text-amber-950 dark:bg-amber-950 dark:text-amber-300",
  vanishing: "bg-zinc-200 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-200",
  transfigure: "bg-stone-200 text-stone-900 dark:bg-stone-950 dark:text-stone-200",
  wither: "bg-lime-300 text-lime-950 dark:bg-lime-950 dark:text-lime-300",
  undying: "bg-neutral-300 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-300",
  soulbond: "bg-rose-200 text-rose-900 dark:bg-rose-950 dark:text-rose-200",
  unleash: "bg-red-300 text-red-950 dark:bg-red-950 dark:text-red-300",
  ascend: "bg-yellow-300 text-yellow-950 dark:bg-yellow-950 dark:text-yellow-300",
  assist: "bg-blue-300 text-blue-950 dark:bg-blue-950 dark:text-blue-300",
  afterlife: "bg-gray-300 text-gray-950 dark:bg-gray-950 dark:text-gray-300",
  companion: "bg-green-300 text-green-950 dark:bg-green-950 dark:text-green-300",
  fabricate: "bg-orange-300 text-orange-950 dark:bg-orange-950 dark:text-orange-300",
  embalm: "bg-sky-300 text-sky-950 dark:bg-sky-950 dark:text-sky-300",
  escape: "bg-black text-white dark:bg-gray-800 dark:text-gray-100",
  fuse: "bg-emerald-300 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-300",
  ingest: "bg-purple-300 text-purple-950 dark:bg-purple-950 dark:text-purple-300",
  melee: "bg-rose-300 text-rose-950 dark:bg-rose-950 dark:text-rose-300",
  improvise: "bg-indigo-300 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-300",
  mentor: "bg-amber-400 text-amber-950 dark:bg-amber-950 dark:text-amber-400",
  partner: "bg-teal-300 text-teal-950 dark:bg-teal-950 dark:text-teal-300",
  mutate: "bg-lime-400 text-lime-950 dark:bg-lime-950 dark:text-lime-400",
  tribute: "bg-yellow-400 text-yellow-950 dark:bg-yellow-950 dark:text-yellow-400",
  surge: "bg-blue-400 text-blue-950 dark:bg-blue-950 dark:text-blue-400",
  skulk: "bg-slate-300 text-slate-950 dark:bg-slate-950 dark:text-slate-300",
  undaunted: "bg-violet-300 text-violet-950 dark:bg-violet-950 dark:text-violet-300",
  riot: "bg-red-400 text-red-950 dark:bg-red-950 dark:text-red-400",
  spectacle: "bg-fuchsia-300 text-fuchsia-950 dark:bg-fuchsia-950 dark:text-fuchsia-300",
  forestwalk: "bg-green-400 text-green-950 dark:bg-green-950 dark:text-green-400",
  islandwalk: "bg-blue-500 text-white dark:bg-blue-950 dark:text-blue-500",
  mountainwalk: "bg-red-500 text-white dark:bg-red-950 dark:text-red-500",
  "cumulative upkeep": "bg-amber-500 text-white dark:bg-amber-950 dark:text-amber-500",
  scavenge: "bg-emerald-400 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-400",
  encore: "bg-purple-400 text-purple-950 dark:bg-purple-950 dark:text-purple-400",
  amplify: "bg-sky-400 text-sky-950 dark:bg-sky-950 dark:text-sky-400",
  affinity: "bg-stone-300 text-stone-950 dark:bg-stone-950 dark:text-stone-300",
  bushido: "bg-rose-400 text-rose-950 dark:bg-rose-950 dark:text-rose-400",
  convoke: "bg-lime-500 text-white dark:bg-lime-950 dark:text-lime-500",
  bloodthirst: "bg-red-600 text-white dark:bg-red-950 dark:text-red-600",
  absorb: "bg-cyan-300 text-cyan-950 dark:bg-cyan-950 dark:text-cyan-300",
  "aura swap": "bg-violet-400 text-violet-950 dark:bg-violet-950 dark:text-violet-400",
  changeling: "bg-neutral-400 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-400",
  conspire: "bg-orange-400 text-orange-950 dark:bg-orange-950 dark:text-orange-400",
  cascade: "bg-indigo-400 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-400",
  annihilator: "bg-red-700 text-white dark:bg-red-950 dark:text-red-700",
  "battle cry": "bg-orange-500 text-white dark:bg-orange-950 dark:text-orange-500",
  cipher: "bg-blue-600 text-white dark:bg-blue-950 dark:text-blue-600",
  bestow: "bg-purple-500 text-white dark:bg-purple-950 dark:text-purple-500",
  dash: "bg-rose-500 text-white dark:bg-rose-950 dark:text-rose-500",
  awaken: "bg-green-500 text-white dark:bg-green-950 dark:text-green-500",
  crew: "bg-slate-400 text-slate-950 dark:bg-slate-950 dark:text-slate-400",
  aftermath: "bg-fuchsia-400 text-fuchsia-950 dark:bg-fuchsia-950 dark:text-fuchsia-400",
  afflict: "bg-stone-400 text-stone-950 dark:bg-stone-950 dark:text-stone-400",
  flanking: "bg-yellow-500 text-white dark:bg-yellow-950 dark:text-yellow-500",
  foretell: "bg-sky-500 text-white dark:bg-sky-950 dark:text-sky-500",
  fading: "bg-zinc-300 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-300",
  eternalize: "bg-amber-600 text-white dark:bg-amber-950 dark:text-amber-600",
  entwine: "bg-teal-400 text-teal-950 dark:bg-teal-950 dark:text-teal-400",
  epic: "bg-violet-500 text-white dark:bg-violet-950 dark:text-violet-500",
  dredge: "bg-green-600 text-white dark:bg-green-950 dark:text-green-600",
  delve: "bg-blue-700 text-white dark:bg-blue-950 dark:text-blue-700",
  evoke: "bg-cyan-400 text-cyan-950 dark:bg-cyan-950 dark:text-cyan-400",
  exalted: "bg-yellow-600 text-white dark:bg-yellow-950 dark:text-yellow-600",
  evolve: "bg-emerald-500 text-white dark:bg-emerald-950 dark:text-emerald-500",
  extort: "bg-neutral-500 text-white dark:bg-neutral-950 dark:text-neutral-500",
  dethrone: "bg-purple-600 text-white dark:bg-purple-950 dark:text-purple-600",
  exploit: "bg-red-800 text-white dark:bg-red-950 dark:text-red-800",
  devoid: "bg-gray-400 text-gray-950 dark:bg-gray-950 dark:text-gray-400",
  emerge: "bg-lime-600 text-white dark:bg-lime-950 dark:text-lime-600",
  escalate: "bg-orange-600 text-white dark:bg-orange-950 dark:text-orange-600",
  intimidate: "bg-stone-500 text-white dark:bg-stone-950 dark:text-stone-500",
  horsemanship: "bg-indigo-500 text-white dark:bg-indigo-950 dark:text-indigo-500",
  kicker: "bg-amber-700 text-white dark:bg-amber-950 dark:text-amber-700",
  madness: "bg-rose-600 text-white dark:bg-rose-950 dark:text-rose-600",
  swampwalk: "bg-purple-700 text-white dark:bg-purple-950 dark:text-purple-700",
  desertwalk: "bg-yellow-700 text-white dark:bg-yellow-950 dark:text-yellow-700",
  craft: "bg-zinc-400 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-400",
  plainswalk: "bg-neutral-600 text-white dark:bg-neutral-950 dark:text-neutral-600",
  "split second": "bg-sky-600 text-white dark:bg-sky-950 dark:text-sky-600",
  augment: "bg-teal-500 text-white dark:bg-teal-950 dark:text-teal-500",
  "double agenda": "bg-fuchsia-500 text-white dark:bg-fuchsia-950 dark:text-fuchsia-500",
  reconfigure: "bg-slate-500 text-white dark:bg-slate-950 dark:text-slate-500",
  ward: "bg-cyan-500 text-white dark:bg-cyan-950 dark:text-cyan-500",
  "partner with": "bg-indigo-600 text-white dark:bg-indigo-950 dark:text-indigo-600",
  daybound: "bg-yellow-800 text-white dark:bg-yellow-950 dark:text-yellow-800",
  nightbound: "bg-blue-800 text-white dark:bg-blue-950 dark:text-blue-800",
  decayed: "bg-green-700 text-white dark:bg-green-950 dark:text-green-700",
  disturb: "bg-violet-600 text-white dark:bg-violet-950 dark:text-violet-600",
  squad: "bg-emerald-600 text-white dark:bg-emerald-950 dark:text-emerald-600",
  enlist: "bg-stone-600 text-white dark:bg-stone-950 dark:text-stone-600",
  "read ahead": "bg-amber-800 text-white dark:bg-amber-950 dark:text-amber-800",
  ravenous: "bg-red-500 text-white dark:bg-red-950 dark:text-red-500",
  blitz: "bg-rose-700 text-white dark:bg-rose-950 dark:text-rose-700",
  offering: "bg-purple-800 text-white dark:bg-purple-950 dark:text-purple-800",
  "living metal": "bg-zinc-500 text-white dark:bg-zinc-950 dark:text-zinc-500",
  backup: "bg-sky-700 text-white dark:bg-sky-950 dark:text-sky-700",
  banding: "bg-neutral-700 text-white dark:bg-neutral-950 dark:text-neutral-700",
  "hidden agenda": "bg-slate-600 text-white dark:bg-slate-950 dark:text-slate-600",
  "for mirrodin!": "bg-orange-700 text-white dark:bg-orange-950 dark:text-orange-700",
  "friends forever": "bg-pink-400 text-pink-950 dark:bg-pink-950 dark:text-pink-400",
  casualty: "bg-lime-700 text-white dark:bg-lime-950 dark:text-lime-700",
  protection: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
  compleated: "bg-teal-600 text-white dark:bg-teal-950 dark:text-teal-600",
  devour: "bg-red-900 text-white dark:bg-red-950 dark:text-red-900",
  boast: "bg-orange-800 text-white dark:bg-orange-950 dark:text-orange-800",
  demonstrate: "bg-cyan-600 text-white dark:bg-cyan-950 dark:text-cyan-600",
  sunburst: "bg-yellow-900 text-white dark:bg-yellow-950 dark:text-yellow-900",
  flashback: "bg-blue-900 text-white dark:bg-blue-950 dark:text-blue-900",
  cycling: "bg-indigo-700 text-white dark:bg-indigo-950 dark:text-indigo-700",
  buyback: "bg-violet-700 text-white dark:bg-violet-950 dark:text-violet-700",
  "hexproof from": "bg-teal-700 text-white dark:bg-teal-950 dark:text-teal-700",
  "more than meets the eye": "bg-pink-500 text-white dark:bg-pink-950 dark:text-pink-500",
  cleave: "bg-fuchsia-600 text-white dark:bg-fuchsia-950 dark:text-fuchsia-600",
  champion: "bg-emerald-700 text-white dark:bg-emerald-950 dark:text-emerald-700",
  specialize: "bg-stone-700 text-white dark:bg-stone-950 dark:text-stone-700",
  training: "bg-lime-800 text-white dark:bg-lime-950 dark:text-lime-800",
  prototype: "bg-slate-700 text-white dark:bg-slate-950 dark:text-slate-700",
  toxic: "bg-green-800 text-white dark:bg-green-950 dark:text-green-800",
  unearth: "bg-neutral-800 text-white dark:bg-neutral-950 dark:text-neutral-800",
  intensity: "bg-rose-800 text-white dark:bg-rose-950 dark:text-rose-800",
  plainscycling: "bg-gray-500 text-white dark:bg-gray-950 dark:text-gray-500",
  swampcycling: "bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-900",
  typecycling: "bg-sky-800 text-white dark:bg-sky-950 dark:text-sky-800",
  wizardcycling: "bg-blue-500 text-white dark:bg-blue-950 dark:text-blue-500",
  mountaincycling: "bg-red-600 text-white dark:bg-red-950 dark:text-red-600",
  "basic landcycling": "bg-emerald-800 text-white dark:bg-emerald-950 dark:text-emerald-800",
  islandcycling: "bg-cyan-700 text-white dark:bg-cyan-950 dark:text-cyan-700",
  forestcycling: "bg-green-900 text-white dark:bg-green-950 dark:text-green-900",
  slivercycling: "bg-zinc-600 text-white dark:bg-zinc-950 dark:text-zinc-600",
  landcycling: "bg-amber-900 text-white dark:bg-amber-950 dark:text-amber-900",
  bargain: "bg-indigo-800 text-white dark:bg-indigo-950 dark:text-indigo-800",
  "choose a background": "bg-pink-600 text-white dark:bg-pink-950 dark:text-pink-600",
  echo: "bg-fuchsia-700 text-white dark:bg-fuchsia-950 dark:text-fuchsia-700",
  disguise: "bg-slate-800 text-white dark:bg-slate-950 dark:text-slate-800",
  "doctor's companion": "bg-pink-700 text-white dark:bg-pink-950 dark:text-pink-700",
  landwalk: "bg-stone-800 text-white dark:bg-stone-950 dark:text-stone-800",
  "umbra armor": "bg-violet-800 text-white dark:bg-violet-950 dark:text-violet-800",
  freerunning: "bg-lime-900 text-white dark:bg-lime-950 dark:text-lime-900",
  spree: "bg-rose-900 text-white dark:bg-rose-950 dark:text-rose-900",
  saddle: "bg-orange-900 text-white dark:bg-orange-950 dark:text-orange-900",
  shadow: "bg-gray-600 text-white dark:bg-gray-950 dark:text-gray-600",
  offspring: "bg-emerald-900 text-white dark:bg-emerald-950 dark:text-emerald-900",
  impending: "bg-cyan-800 text-white dark:bg-cyan-950 dark:text-cyan-800",
  gift: "bg-pink-800 text-white dark:bg-pink-950 dark:text-pink-800",
  harmonize: "bg-teal-800 text-white dark:bg-teal-950 dark:text-teal-800",
  exhaust: "bg-neutral-900 text-white dark:bg-neutral-950 dark:text-neutral-900",
  "max speed": "bg-fuchsia-800 text-white dark:bg-fuchsia-950 dark:text-fuchsia-800",
  fear: "bg-gray-700 text-white dark:bg-gray-950 dark:text-gray-700",
  mobilize: "bg-sky-900 text-white dark:bg-sky-950 dark:text-sky-900",
  "double team": "bg-pink-900 text-white dark:bg-pink-950 dark:text-pink-900",

  // Ensure all keywords from the list are covered
  coven: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  eerie: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",

  // Default for unknown keywords
  default: "bg-gray-100 text-black-800 dark:bg-gray-700 dark:text-black-100",
}

export function getKeywordColor(keyword: string): string {
  const normalizedKeyword = keyword.toLowerCase().replace(/\s+/g, "")
  return keywordColors[normalizedKeyword] || keywordColors[keyword.toLowerCase()] || keywordColors.default
}
