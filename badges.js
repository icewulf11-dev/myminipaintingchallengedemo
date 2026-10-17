// ============================================================================
//  BADGES – My Mini Painting Challenge
// ----------------------------------------------------------------------------
//  One badge per block. Change the names, descriptions and rules freely, then
//  run  npm run check  to make sure nothing is mistyped.
//
//  id      short, lowercase, never change it after release (the app remembers
//          which badges were earned by their id).
//  name    shown under the badge.
//  desc    how to earn it, shown when the badge is tapped.
//  image   your artwork, a square PNG or WebP (512 × 512 works well,
//          transparent background). Put the file in  www/badges/  and give its name here.
//          Until the file exists the app draws a simple placeholder badge.
//  rule    what earns it. Every rule counts FINISHED projects only, except
//          "saved". Rule types:
//
//    { type: "finished", count: 10 }        finish 10 minis in total
//    { type: "streak",   months: 3 }        finish at least one mini in each of
//                                           3 calendar months in a row
//    { type: "month",    count: 3 }         finish 3 minis in one calendar month
//    { type: "schemes",  count: 4 }         finish minis in 4 different colour
//                                           schemes (Complementary, Split
//                                           complementary, Tetrad, Random)
//    { type: "scheme",   name: "Tetrad", count: 1 }      a particular scheme
//    { type: "palettes", count: 4 }         finish minis in 4 different palettes
//                                           (Grimdark, Cold, Warm, Bright)
//    { type: "palette",  name: "Grimdark", count: 1 }    a particular palette
//    { type: "ranges",   count: 10 }        use paints from 10 different paint
//                                           ranges across your finished minis
//    { type: "photos",   count: 1 }         finish minis with both a before
//                                           and an after photo
//    { type: "saved",    count: 1 }         save challenges as projects
//                                           (finished or not)
//    { type: "seasonal", count: 1 }         finish seasonal challenges (each season
//                                           counts once)
//    { type: "release",  count: 1 }         finish release day challenges (each
//                                           release counts once)
//
//  Badges appear in the app in the order they are listed here.
// ============================================================================
window.BADGE_DATA = [
  { id: "first-roll",    name: "Dice Are Cast",    desc: "Save your first challenge as a project.",                image: "first-roll.webp",    rule: { type: "saved", count: 1 } },
  { id: "first-finish",  name: "First Finish",     desc: "Finish your first challenge mini.",                      image: "first-finish.webp",  rule: { type: "finished", count: 1 } },
  { id: "finish-5",      name: "Squad Painted",    desc: "Finish 5 challenge minis.",                              image: "finish-5.webp",      rule: { type: "finished", count: 5 } },
  { id: "finish-10",     name: "Ten Down",         desc: "Finish 10 challenge minis.",                             image: "finish-10.webp",     rule: { type: "finished", count: 10 } },
  { id: "finish-25",     name: "Pile of Shame? Never", desc: "Finish 25 challenge minis.",                         image: "finish-25.webp",     rule: { type: "finished", count: 25 } },
  { id: "streak-3",      name: "Three Month Streak", desc: "Finish a mini every month for 3 months in a row.",     image: "streak-3.webp",      rule: { type: "streak", months: 3 } },
  { id: "streak-6",      name: "Six Month Streak", desc: "Finish a mini every month for 6 months in a row.",       image: "streak-6.webp",      rule: { type: "streak", months: 6 } },
  { id: "streak-12",     name: "Year of Paint",    desc: "Finish a mini every month for 12 months in a row.",      image: "streak-12.webp",     rule: { type: "streak", months: 12 } },
  { id: "busy-month",    name: "Hot Brushes",      desc: "Finish 3 minis in one calendar month.",                  image: "busy-month.webp",    rule: { type: "month", count: 3 } },
  { id: "all-schemes",   name: "Colour Theorist",  desc: "Finish a mini in every colour scheme: Complementary, Split complementary, Tetrad and Random.", image: "all-schemes.webp", rule: { type: "schemes", count: 4 } },
  { id: "tetrad",        name: "Four Corners",     desc: "Finish a mini with a Tetrad scheme.",                    image: "tetrad.webp",        rule: { type: "scheme", name: "Tetrad", count: 1 } },
  { id: "all-palettes",  name: "Mood Swings",      desc: "Finish a mini in every palette: Grimdark, Cold, Warm and Bright.", image: "all-palettes.webp", rule: { type: "palettes", count: 4 } },
  { id: "grimdark",      name: "Only War",         desc: "Finish a mini with the Grimdark palette.",               image: "grimdark.webp",      rule: { type: "palette", name: "Grimdark", count: 1 } },
  { id: "ranges-10",     name: "Paint Collector",  desc: "Use paints from 10 different ranges across your finished minis.", image: "ranges-10.webp", rule: { type: "ranges", count: 10 } },
  { id: "seasonal-1",    name: "Seasonal Challenger", desc: "Finish a seasonal challenge.",                    image: "seasonal-1.webp",   rule: { type: "seasonal", count: 1 } },
  { id: "seasonal-4",    name: "Four Seasons",     desc: "Finish 4 seasonal challenges.",                      image: "seasonal-4.webp",   rule: { type: "seasonal", count: 4 } },
  { id: "release-1",     name: "Fresh Pots",       desc: "Finish a release day challenge.",                image: "release-1.webp",    rule: { type: "release", count: 1 } },
  { id: "before-after",  name: "Glow Up",          desc: "Finish a mini with a before and an after photo.",        image: "before-after.webp",  rule: { type: "photos", count: 1 } },
];
