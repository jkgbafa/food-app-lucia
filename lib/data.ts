// All content sourced from "Joshua's Table — A Personal Food Guide, Made for Lucia"

export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  colors: [string, string]; // card gradient
  tags: string[];
  confirmed: boolean; // confirmed favorite vs "wants to try"
  ig?: string;
  note?: string;
  ingredients: { label: string; items: string[] }[];
  steps: string[];
};

export const RECIPES: Recipe[] = [
  {
    id: "cheeseburger-tacos",
    title: "Sheet-Pan Cheeseburger Tacos",
    emoji: "🌮",
    colors: ["#FFB86B", "#FF7A45"],
    tags: ["Beef", "Mexican", "Dinner"],
    confirmed: false,
    ig: "https://www.instagram.com/superfoodsguy/reel/Dcj4_sHxccz/",
    ingredients: [
      {
        label: "Ingredients",
        items: [
          "1 lb 80/20 ground beef",
          "¾ tsp sea salt",
          "½ tsp black pepper",
          "8 small flour tortillas",
          "4 oz grated medium cheddar",
          "1 cup finely shredded iceberg lettuce",
          "¼ small white onion, thinly sliced",
          "1 Roma tomato, thinly sliced",
          "½ cup dill-pickle chips",
          "Avocado-oil spray",
        ],
      },
      {
        label: "Special sauce",
        items: [
          "2 tbsp mayonnaise",
          "3 tbsp ketchup",
          "1 tbsp yellow mustard",
          "1 tbsp finely chopped dill pickles",
          "2 tsp pickle juice",
        ],
      },
    ],
    steps: [
      "Heat the oven to 425°F and put a wire rack inside a sheet pan.",
      "Mix the special-sauce ingredients.",
      "Season and divide the beef into eight portions.",
      "Spread one portion thinly over half of each tortilla. Add cheese, fold and spray lightly with oil.",
      "Bake beef-side up for 7–9 minutes.",
      "Broil for 1–2 minutes per side until browned and crisp.",
      "Open carefully and add lettuce, onion, tomato, pickles and sauce.",
    ],
  },
  {
    id: "scallion-breakfast-burrito",
    title: "Scallion-Pancake Breakfast Burrito",
    emoji: "🌯",
    colors: ["#7BD88F", "#3CB371"],
    tags: ["Breakfast", "Eggs"],
    confirmed: false,
    ig: "https://www.instagram.com/owen.han/reel/DZL71stvTKu/",
    ingredients: [
      {
        label: "Ingredients / assembly",
        items: [
          "Scallion pancake used as the wrap",
          "Chili-crunch mayonnaise",
          "Hash-brown patty",
          "Soft scrambled eggs",
          "American cheese",
          "Bacon",
          "Fresh scallions",
        ],
      },
    ],
    steps: [
      "Layer everything inside the hot scallion pancake and fold it like a breakfast burrito.",
    ],
  },
  {
    id: "beef-arayes",
    title: "Beef Arayes with Garlic-Tahini Yogurt Sauce",
    emoji: "🥙",
    colors: ["#F5C97B", "#D99A3D"],
    tags: ["Beef", "Dinner"],
    confirmed: false,
    ig: "https://www.instagram.com/thecontrarianmoney/reel/DXzqiXKP_RE/",
    ingredients: [
      {
        label: "Beef filling",
        items: [
          "1 lb 85/15 ground beef",
          "1 small yellow onion, grated and squeezed dry",
          "5 grated garlic cloves",
          "1 grated jalapeño",
          "2 tbsp tomato paste",
          "⅓ cup chopped parsley",
          "¼ cup chopped cilantro",
          "1 tbsp olive oil",
          "1 tbsp ice water",
          "1 tsp salt · 1 tsp black pepper",
          "2 tsp cumin · 2 tsp paprika",
          "1 tsp allspice · 1 tsp coriander",
          "1 tsp garlic powder · ¼ tsp cinnamon",
          "4 pitas, halved",
        ],
      },
      {
        label: "Sauce",
        items: [
          "¾ cup Greek yogurt",
          "¼ cup tahini",
          "3 grated garlic cloves",
          "Juice of ½ lemon",
          "1 tbsp olive oil",
          "½ tsp salt · ¼ tsp cumin",
          "2 tbsp chopped parsley",
          "2 tbsp chopped cilantro",
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F.",
      "Mix the beef filling until slightly sticky.",
      "Put a thin layer inside each pita half and brush the outside with olive oil.",
      "Sear the exposed meat edge for 1–2 minutes, then brown both pita sides.",
      "Bake for about 15 minutes, until the beef reaches a safe temperature.",
      "Mix the sauce and serve it alongside the crisp arayes.",
    ],
  },
  {
    id: "chocolate-cremeux-cake",
    title: "Chocolate Moist Cake with Dark-Chocolate Crémeux",
    emoji: "🍫",
    colors: ["#8D6748", "#5C3A21"],
    tags: ["Dessert"],
    confirmed: false,
    ig: "https://www.instagram.com/nahlahrsl/reel/DSCIdEKEmFt/",
    ingredients: [
      {
        label: "Cake",
        items: [
          "250 g brown sugar",
          "160 ml buttermilk",
          "160 ml vegetable oil",
          "120 g plain yogurt",
          "2 large eggs",
          "1 tsp vanilla",
          "280 g all-purpose flour",
          "1 tsp baking powder · 2 tsp baking soda",
          "½ tsp salt",
          "250 ml hot water + 1 tbsp instant coffee",
          "50 g cocoa powder",
        ],
      },
      {
        label: "Dark-chocolate crémeux",
        items: [
          "200 g dark chocolate",
          "120 ml milk",
          "120 ml whipping cream",
          "2 eggs + 1 egg yolk",
          "25 g sugar",
        ],
      },
      {
        label: "Cream-cheese filling",
        items: [
          "250 g cream cheese",
          "15 g cocoa powder",
          "30 g powdered sugar",
          "120 ml whipping cream",
        ],
      },
    ],
    steps: [
      "Bake the cake for 30–35 minutes in a 13 × 10-inch tray.",
      "Cut it to fit a 4 × 8-inch loaf pan and slice the cake horizontally for more layers.",
      "Layer with crémeux and cream-cheese filling.",
    ],
  },
  {
    id: "creamy-tuscan-chicken",
    title: "Creamy Tuscan Chicken + Roasted-Garlic Mash",
    emoji: "🍗",
    colors: ["#F7A072", "#E86A33"],
    tags: ["Chicken", "Dinner"],
    confirmed: false,
    ig: "https://www.instagram.com/thecontrarianmoney/reel/DQusjunkwoy/",
    ingredients: [
      {
        label: "Chicken and sauce",
        items: [
          "4 chicken breasts, about 6 oz each",
          "1 tsp Italian seasoning · 1 tsp kosher salt",
          "½ tsp black pepper · ½ tsp garlic powder · ½ tsp onion powder",
          "3 tbsp olive oil · 3 tbsp butter",
          "½ cup diced yellow onion",
          "5 minced garlic cloves",
          "½ cup sliced sun-dried tomatoes",
          "2 cups baby spinach",
          "2 cups heavy cream",
          "½ cup grated Parmesan",
        ],
      },
      {
        label: "Mashed potatoes",
        items: [
          "3 lb yellow potatoes",
          "¾ cup heavy cream",
          "8 tbsp salted butter",
          "2 heads roasted garlic",
        ],
      },
    ],
    steps: [
      "Season and sear the chicken in olive oil. Add butter, coat the chicken and set it aside.",
      "In the same pan, sauté onion, sun-dried tomatoes and garlic. Add spinach.",
      "Stir in cream and Parmesan, return the chicken and simmer until cooked through.",
      "Boil the potatoes until tender and mash with butter, cream and roasted garlic.",
    ],
  },
  {
    id: "garlic-parm-pasta",
    title: "Chicken Garlic-Parmesan Pasta",
    emoji: "🍝",
    colors: ["#F9D976", "#F39F3F"],
    tags: ["Chicken", "Pasta", "Dinner"],
    confirmed: false,
    ig: "https://www.instagram.com/meatlicious/reel/DQJ9ONZAB6V/",
    ingredients: [
      {
        label: "Ingredients",
        items: [
          "2 tbsp olive oil",
          "1½ lb chicken breast",
          "12 oz mafaldine or another pasta",
          "4 tbsp butter",
          "2 tsp dried shallots, or minced fresh shallot",
          "2 tsp Italian seasoning",
          "2 tbsp flour",
          "½ cup chicken broth",
          "3 cups heavy cream",
          "12 oz shredded Parmesan",
          "About ¼ cup reserved pasta water",
          "Salt, garlic powder, paprika, oregano, thyme and black pepper",
          "Optional: 1 bulb roasted garlic",
        ],
      },
    ],
    steps: [
      "Cook the pasta until al dente and reserve some pasta water.",
      "Season and sear the chicken, then cover and finish cooking it to 165°F. Rest and slice.",
      "In the same pan, melt butter and cook the shallot and seasonings.",
      "Stir in flour, then gradually whisk in broth and cream.",
      "Melt in the Parmesan and optional roasted garlic.",
      "Toss in the pasta, loosening with pasta water, then return the sliced chicken.",
    ],
  },
  {
    id: "homemade-peanut-butter",
    title: "Homemade Peanut Butter",
    emoji: "🥜",
    colors: ["#D9A066", "#A9713B"],
    tags: ["Snack"],
    confirmed: false,
    ig: "https://www.instagram.com/thecontrarianmoney/reel/DOt2JGIkoQe/",
    ingredients: [
      {
        label: "Ingredients",
        items: [
          "16 oz unsalted roasted peanuts, about 3 cups",
          "1 tsp salt",
          "1 tsp honey, optional",
        ],
      },
    ],
    steps: [
      "Roast the peanuts again at 400°F for 5 minutes.",
      "Blend until grainy, scrape down the sides and continue until creamy.",
      "Blend in salt and optional honey.",
      "Refrigerate in an airtight container for up to 3 weeks.",
    ],
  },
  {
    id: "pb-protein-cookies",
    title: "Peanut-Butter Protein Cookies",
    emoji: "🍪",
    colors: ["#E8B98C", "#C68B59"],
    tags: ["Dessert", "Snack"],
    confirmed: false,
    ig: "https://www.instagram.com/mattwest_roadtoaesthetics/reel/DN7c4SS4t9u/",
    ingredients: [
      {
        label: "Original version — 6 cookies",
        items: [
          "1 small ripe banana, about 100 g peeled",
          "125 g natural peanut butter",
          "60 g vanilla protein powder",
          "Optional chocolate chips and flaky salt",
        ],
      },
      {
        label: "Lighter version — 6 cookies",
        items: [
          "1 small ripe banana, about 100 g peeled",
          "60 g natural peanut butter",
          "40 g PB2 mixed with water into a thick paste",
          "60 g vanilla whey protein powder",
          "Optional chocolate chips and flaky salt",
        ],
      },
    ],
    steps: [
      "Heat the oven to 160°C.",
      "Mash the banana and mix in the peanut butter and protein powder.",
      "Rest the mixture for 1–2 minutes.",
      "Form six cookies, flatten lightly and add optional chocolate chips.",
      "Bake for 10–12 minutes. Cool for 5 minutes before moving them.",
    ],
  },
  {
    id: "hot-honey-buffalo-tenders",
    title: "Hot-Honey Buffalo Chicken Tenders",
    emoji: "🍯",
    colors: ["#FF8E53", "#E5484D"],
    tags: ["Chicken", "Dinner", "Air fryer"],
    confirmed: false,
    ig: "https://www.instagram.com/_aussiefitness/reel/DLCiqIyTeJj/",
    note: "Chicken tenders are Josh's #1 safe zone — this one is a very strong bet.",
    ingredients: [
      {
        label: "Ingredients",
        items: [
          "1.2 kg boneless, skinless chicken breast, cut into 8 strips",
          "1 tsp each salt, hot paprika, onion powder and garlic powder",
          "½ tsp each chili powder, cayenne and oregano",
          "200 g all-purpose flour",
          "135 g potato starch",
          "1 cup sparkling water",
          "Cooking-oil spray",
          "85 ml Buffalo sauce",
          "40 g honey",
        ],
      },
    ],
    steps: [
      "Coat the seasoned chicken with the flour-and-starch mixture using sparkling water.",
      "Air-fry until crisp and the center reaches 165°F, spraying any dry flour patches during cooking.",
      "Toss the cooked tenders with Buffalo sauce and honey.",
    ],
  },
  {
    id: "caramelized-onion-spaghetti",
    title: "Caramelized-Onion and Garlic Spaghetti",
    emoji: "🧅",
    colors: ["#C9A0DC", "#8E6BBF"],
    tags: ["Pasta", "Dinner"],
    confirmed: false,
    ig: "https://www.instagram.com/recipeincaption/reel/DLQKCZ1Pdmc/",
    ingredients: [
      {
        label: "Ingredients",
        items: [
          "1 large thinly sliced onion",
          "4 minced garlic cloves",
          "2 tbsp chili crisp",
          "1 cup room-temperature cream or coconut milk",
          "1 tbsp soy sauce, optional",
          "½ cup grated Parmesan",
          "8 oz / 225 g pasta",
          "2 tbsp butter · 1 tbsp olive oil",
          "1 tsp each paprika, garlic powder, salt, black pepper and Italian seasoning",
        ],
      },
    ],
    steps: [
      "Caramelize the onion in butter and olive oil over medium heat for 15–20 minutes.",
      "Cook the pasta until al dente and reserve some pasta water.",
      "Add garlic, seasonings and chili crisp to the onions.",
      "Stir in cream and Parmesan and simmer briefly.",
      "Toss in the pasta and loosen with reserved pasta water as needed.",
    ],
  },
  {
    id: "nashville-popcorn-chicken",
    title: "Nashville Popcorn Chicken + Buttermilk Ranch",
    emoji: "🔥",
    colors: ["#FF6B6B", "#C0392B"],
    tags: ["Chicken", "Dinner", "Spicy"],
    confirmed: false,
    ig: "https://www.instagram.com/recipeincaption/reel/DI9crjRztdR/",
    note: "Serve with rice or regular mashed potatoes; skip the suggested slaw.",
    ingredients: [
      {
        label: "Buttermilk chicken",
        items: [
          "1½ lb boneless, skinless chicken thighs",
          "1 cup buttermilk",
          "¼ cup vinegar-based hot sauce",
          "2 tsp paprika",
          "1 tsp each garlic powder, onion powder, salt and black pepper",
        ],
      },
      {
        label: "Breading",
        items: [
          "1½ cups flour",
          "½ cup cornstarch",
          "1 tsp paprika · ¼ tsp cayenne",
          "1 tsp salt · 2 tsp garlic powder",
        ],
      },
      {
        label: "Spicy oil",
        items: [
          "3 tbsp butter",
          "¾ cup reserved frying oil",
          "2–4 tbsp cayenne",
          "1 tbsp smoked paprika",
          "1 tbsp brown sugar",
          "2 tsp chili powder",
          "1 tsp each garlic powder, salt and black pepper",
        ],
      },
      {
        label: "Buttermilk ranch",
        items: [
          "½ cup mayonnaise · ½ cup sour cream · ½ cup buttermilk",
          "2 minced garlic cloves",
          "2 tsp lemon juice",
          "½ tsp salt · 1 tsp black pepper",
          "2 tsp chopped chives · ½ tsp dried parsley · 1 tsp dried dill",
        ],
      },
    ],
    steps: [
      "Marinate the chicken as long as practical.",
      "Use separate wet and dry hands while breading.",
      "Double-fry for maximum crunch, or air-fry for 8–10 minutes, flipping halfway and spraying with oil.",
      "Toss or drizzle with the spiced oil and serve with ranch.",
    ],
  },
  {
    id: "mongolian-chicken",
    title: "Mongolian Chicken — Seafood-Safe Version",
    emoji: "🥢",
    colors: ["#6BB8FF", "#3D6FD9"],
    tags: ["Chicken", "Asian", "Dinner"],
    confirmed: false,
    ig: "https://www.instagram.com/donaldo_cooks/reel/DLPbeo8s3Gy/",
    note: "Use verified seafood-free hoisin — do NOT use oyster sauce.",
    ingredients: [
      {
        label: "Chicken",
        items: [
          "3 or more chicken thighs",
          "1 tbsp salt · 1 tbsp black pepper",
          "2–3 tbsp baking powder",
          "2 tbsp avocado oil",
        ],
      },
      {
        label: "Sauce",
        items: [
          "2 tbsp sesame oil",
          "2 tbsp soy sauce",
          "1 tbsp hoisin sauce — do not use oyster sauce",
          "1 tbsp brown sugar or preferred substitute",
          "3 finely chopped garlic cloves",
          "1 inch finely chopped ginger",
          "Whole Thai chilies",
          "1 bunch chives, cut into large pieces",
          "Optional: 2 tbsp water + 2 tbsp honey for extra sauce",
        ],
      },
    ],
    steps: [
      "Cut the chicken into roughly 1½-inch pieces and coat with seasoning, baking powder and oil.",
      "Air-fry in spaced batches at 385°F for about 12 minutes, or until the chicken reaches 165°F.",
      "Simmer the sauce ingredients, except the chives, until thickened.",
      "Fold in the chicken, then add the chives. Serve over rice or vegetables.",
    ],
  },
  {
    id: "garlic-cheese-loaf",
    title: "Garlic-Cheese Pull-Apart Loaf — Air Fryer",
    emoji: "🧄",
    colors: ["#FFE29A", "#F6B93B"],
    tags: ["Bread", "Side", "Air fryer"],
    confirmed: false,
    ig: "https://www.instagram.com/elixer.javier/reel/DLPJK9XS-N6/",
    ingredients: [
      {
        label: "Dough",
        items: [
          "½ cup lukewarm milk",
          "1 tbsp sugar",
          "¾ tsp instant dry yeast",
          "1 cup / 160 g all-purpose or bread flour",
          "½ tsp salt",
          "25 g butter",
        ],
      },
      {
        label: "Garlic filling",
        items: [
          "1 bulb boiled garlic",
          "Chopped parsley",
          "30 g unsalted butter",
          "Salt",
          "Quick-melt cheese",
          "Egg wash",
        ],
      },
    ],
    steps: [
      "Bake in a covered loaf pan at 160°C for 25 minutes.",
      "Remove the cover and continue at 160°C for 10 minutes.",
    ],
  },
];

export type Idea = { title: string; emoji: string; note: string; ig?: string };

export const IDEA_BANK: Idea[] = [
  { title: "Brookie loaf", emoji: "🍩", note: "Recipe offered by the creator through DM", ig: "https://www.instagram.com/sadieskitchenjournal/reel/DcxCOJ3J6l2/" },
  { title: "GhaPanAmerican burgers", emoji: "🍔", note: "Restaurant review — Cowboy & Samurai", ig: "https://www.instagram.com/abena.zip/reel/Da0qQhDo0DV/" },
  { title: "Brown-butter brownie-stuffed banana bread", emoji: "🍌", note: "Recipe on creator's blog", ig: "https://www.instagram.com/wellmadebykiley/reel/DY7WLCERvf9/" },
  { title: "Mixed-fruit & mango shaved ice", emoji: "🍧", note: "Bobo GH, Marina Mall — outing idea", ig: "https://www.instagram.com/abena.zip/reel/DYVLMrYoD_r/" },
  { title: "Chocolate-chip-cookie tips", emoji: "🍪", note: "Full recipe linked by creator", ig: "https://www.instagram.com/buzzfeedtasty/reel/DZLYB8EAiqz/" },
  { title: "Chili-oil garlic-butter pasta", emoji: "🌶️", note: "Recipe linked by creator", ig: "https://www.instagram.com/erinscozykitchen/reel/DOdrc7pjXmG/" },
  { title: "Beef-and-broccoli fried rice", emoji: "🥦", note: "Recipe linked by creator", ig: "https://www.instagram.com/geniuseatss/reel/DOUedHhE902/" },
  { title: "Oreo cinnamon rolls", emoji: "🌀", note: "Recipe linked by creator", ig: "https://www.instagram.com/stephaniesweettreats/reel/DJZUb0ixL_h/" },
  { title: "Five chicken marinades", emoji: "🧊", note: "Freezer meal prep — recipe linked by creator", ig: "https://www.instagram.com/moribyan/reel/DMF7eG7x3F4/" },
  { title: "Honey-butter chicken", emoji: "🍯", note: "Recipe linked by creator", ig: "https://www.instagram.com/hermanathome/reel/DJpO8cuysso/" },
  { title: "Work-lunch sandwich", emoji: "🥪", note: "Visual assembly only", ig: "https://www.instagram.com/iamuniquedaily/reel/DPLWMSqDKHz/" },
  { title: "Chocolate-chip-cookie churro + ice cream", emoji: "🍦", note: "Restaurant / product inspiration", ig: "https://www.instagram.com/foodbeast/reel/DJJ_k3HJ9To/" },
];

// ---- Dish pool for the weekly plan generator ----

export type Dish = {
  name: string;
  emoji: string;
  meal: "breakfast" | "main"; // main = lunch or dinner
  confirmed: boolean; // ⭐ confirmed favorite → weighted up
  protein: string;
  recipeId?: string; // links to a full recipe card
};

export const DISHES: Dish[] = [
  // Breakfast
  { name: "Breakfast burritos", emoji: "🌯", meal: "breakfast", confirmed: true, protein: "eggs" },
  { name: "Chorizo breakfast burrito", emoji: "🌯", meal: "breakfast", confirmed: true, protein: "chorizo" },
  { name: "Cheese omelette", emoji: "🍳", meal: "breakfast", confirmed: true, protein: "eggs" },
  { name: "Loaded omelette", emoji: "🍳", meal: "breakfast", confirmed: true, protein: "eggs" },
  { name: "Chorizo + potatoes + eggs", emoji: "🥔", meal: "breakfast", confirmed: true, protein: "chorizo" },
  { name: "Bacon + potatoes + eggs", emoji: "🥓", meal: "breakfast", confirmed: true, protein: "bacon" },
  { name: "Scrambled eggs + fried potatoes", emoji: "🍳", meal: "breakfast", confirmed: true, protein: "eggs" },
  { name: "Potato tortilla (Spanish tortilla)", emoji: "🇪🇸", meal: "breakfast", confirmed: true, protein: "eggs" },
  { name: "Pancakes", emoji: "🥞", meal: "breakfast", confirmed: true, protein: "none" },
  { name: "Breakfast skillet", emoji: "🍲", meal: "breakfast", confirmed: false, protein: "eggs" },
  { name: "Breakfast quesadilla", emoji: "🫓", meal: "breakfast", confirmed: false, protein: "eggs" },
  { name: "Breakfast fried rice (leftover rice + eggs + meat)", emoji: "🍚", meal: "breakfast", confirmed: false, protein: "eggs" },
  { name: "French toast", emoji: "🍞", meal: "breakfast", confirmed: false, protein: "none" },
  { name: "Waffles", emoji: "🧇", meal: "breakfast", confirmed: false, protein: "none" },
  { name: "Scallion-pancake breakfast burrito", emoji: "🌯", meal: "breakfast", confirmed: false, protein: "eggs", recipeId: "scallion-breakfast-burrito" },

  // Mains — Ghanaian
  { name: "Jollof rice + chicken", emoji: "🍛", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Beef jollof", emoji: "🍛", meal: "main", confirmed: true, protein: "beef" },
  { name: "Waakye + beef", emoji: "🫘", meal: "main", confirmed: true, protein: "beef" },
  { name: "Chicken fried rice", emoji: "🍚", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Groundnut soup + rice", emoji: "🥜", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Light soup + chicken", emoji: "🍲", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Palm nut soup + rice", emoji: "🍲", meal: "main", confirmed: true, protein: "beef" },
  { name: "Rice + beef sauce", emoji: "🍚", meal: "main", confirmed: true, protein: "beef" },
  { name: "Rice + chicken tomato stew", emoji: "🍅", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Goat stew + rice", emoji: "🐐", meal: "main", confirmed: false, protein: "goat" },
  { name: "Yam + stew, with kelewele", emoji: "🍠", meal: "main", confirmed: false, protein: "beef" },

  // Mains — chicken
  { name: "Chicken tenders + fries", emoji: "🍗", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Spicy chicken sandwich", emoji: "🥪", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Chicken katsu + rice", emoji: "🍱", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Teriyaki chicken + rice", emoji: "🍚", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Chicken Pad Thai", emoji: "🍜", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Chicken fried noodles", emoji: "🍜", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Honey-garlic chicken + rice", emoji: "🍯", meal: "main", confirmed: false, protein: "chicken" },
  { name: "Chicken curry + rice", emoji: "🍛", meal: "main", confirmed: false, protein: "chicken" },
  { name: "Chicken Alfredo", emoji: "🍝", meal: "main", confirmed: true, protein: "chicken" },
  { name: "Chicken Parmesan + spaghetti", emoji: "🍝", meal: "main", confirmed: false, protein: "chicken" },
  { name: "Hot-honey Buffalo chicken tenders", emoji: "🔥", meal: "main", confirmed: false, protein: "chicken", recipeId: "hot-honey-buffalo-tenders" },
  { name: "Nashville popcorn chicken + mash", emoji: "🔥", meal: "main", confirmed: false, protein: "chicken", recipeId: "nashville-popcorn-chicken" },
  { name: "Mongolian chicken (seafood-safe)", emoji: "🥢", meal: "main", confirmed: false, protein: "chicken", recipeId: "mongolian-chicken" },
  { name: "Creamy Tuscan chicken + garlic mash", emoji: "🍗", meal: "main", confirmed: false, protein: "chicken", recipeId: "creamy-tuscan-chicken" },
  { name: "Chicken garlic-Parmesan pasta", emoji: "🍝", meal: "main", confirmed: false, protein: "chicken", recipeId: "garlic-parm-pasta" },
  { name: "Honey-butter chicken + rice", emoji: "🍯", meal: "main", confirmed: false, protein: "chicken" },

  // Mains — beef / pork
  { name: "Carne asada tacos", emoji: "🌮", meal: "main", confirmed: true, protein: "beef" },
  { name: "Carne asada fries", emoji: "🍟", meal: "main", confirmed: true, protein: "beef" },
  { name: "Beef stir-fry + rice", emoji: "🥩", meal: "main", confirmed: true, protein: "beef" },
  { name: "Spaghetti Bolognese", emoji: "🍝", meal: "main", confirmed: true, protein: "beef" },
  { name: "Baked ziti", emoji: "🧀", meal: "main", confirmed: true, protein: "beef" },
  { name: "Steak + roasted potatoes", emoji: "🥩", meal: "main", confirmed: false, protein: "beef" },
  { name: "Garlic-butter steak + rice", emoji: "🧄", meal: "main", confirmed: false, protein: "beef" },
  { name: "Cheeseburger + fries", emoji: "🍔", meal: "main", confirmed: false, protein: "beef" },
  { name: "Meatballs + pasta", emoji: "🍝", meal: "main", confirmed: false, protein: "beef" },
  { name: "Sheet-pan cheeseburger tacos", emoji: "🌮", meal: "main", confirmed: false, protein: "beef", recipeId: "cheeseburger-tacos" },
  { name: "Beef arayes + garlic-tahini sauce", emoji: "🥙", meal: "main", confirmed: false, protein: "beef", recipeId: "beef-arayes" },
  { name: "Beef-and-broccoli fried rice", emoji: "🥦", meal: "main", confirmed: false, protein: "beef" },
  { name: "Pork chops + roasted potatoes", emoji: "🐖", meal: "main", confirmed: false, protein: "pork" },
  { name: "Honey-garlic pork + rice", emoji: "🍯", meal: "main", confirmed: false, protein: "pork" },
  { name: "Pork stir-fry + noodles", emoji: "🍜", meal: "main", confirmed: false, protein: "pork" },
  { name: "Chorizo + potatoes", emoji: "🥔", meal: "main", confirmed: false, protein: "chorizo" },

  // Mains — pasta / other
  { name: "Caramelized-onion garlic spaghetti", emoji: "🧅", meal: "main", confirmed: false, protein: "none", recipeId: "caramelized-onion-spaghetti" },
  { name: "Creamy garlic chicken pasta", emoji: "🍝", meal: "main", confirmed: false, protein: "chicken" },
  { name: "Mac and cheese + crispy chicken", emoji: "🧀", meal: "main", confirmed: false, protein: "chicken" },
  { name: "Chicken quesadillas", emoji: "🫓", meal: "main", confirmed: false, protein: "chicken" },
  { name: "Steak fajitas", emoji: "🥩", meal: "main", confirmed: false, protein: "beef" },
  { name: "Nachos with meat + cheese", emoji: "🧀", meal: "main", confirmed: false, protein: "beef" },
];

// ---- Josh's guide content ----

export const DONT_MAKE = {
  allergy: ["Seafood of any kind", "Seafood-containing sauces & seasonings (fish sauce, oyster sauce, shrimp paste)"],
  dislikes: [
    "Hot dogs", "Onion rings", "Coleslaw", "Baked beans", "Potato salad",
    "Mashed sweet potatoes", "Kontomire stew", "Okro/okra stew", "Egg sandwiches",
  ],
  depends: [
    "Regular salad — not really a fan",
    "Plantain — only small, well-fried pieces like kelewele; never a big plain piece as the default side",
    "Cheddar — fine when it belongs in the recipe, not a cheese he seeks out",
  ],
};

export const VERY_SAFE = [
  "Chicken tenders", "Spicy chicken sandwiches", "Jollof rice", "Waakye", "Fried rice",
  "Groundnut, light or palm-nut soup", "Beef or chicken sauce with rice", "Carne asada",
  "Chicken Pad Thai", "Chicken katsu", "Teriyaki chicken", "Pasta", "Potatoes",
  "Kelewele", "Bofrot", "Breakfast burritos", "Omelettes",
];

export const CHEAT_CODE: [string, string, string][] = [
  ["Chicken", "Rice", "Ghanaian stew"],
  ["Beef", "Jollof", "Pepper/chili"],
  ["Pork", "Fried rice", "Garlic butter"],
  ["Steak", "Potatoes", "Savory beef sauce"],
  ["Chicken", "Pasta", "Alfredo"],
  ["Beef", "Pasta", "Tomato/meat sauce"],
  ["Chicken", "Noodles", "Thai"],
  ["Beef", "Rice", "Stir-fry"],
  ["Chicken", "Rice", "Teriyaki"],
  ["Carne asada", "Tortilla", "Mexican"],
  ["Chorizo", "Potatoes", "Breakfast"],
  ["Eggs", "Potatoes", "Breakfast"],
];

export type Category = {
  title: string;
  emoji: string;
  intro?: string;
  groups: { label: string; items: string[] }[];
};

export const CATEGORIES: Category[] = [
  {
    title: "Ghanaian food", emoji: "🇬🇭",
    groups: [
      { label: "Rice dishes — definitely works", items: ["Jollof rice (chicken / beef / pork)", "Jollof + chili or pepper sauce", "Fried rice (chicken / beef / pork)", "Waakye (+ beef, chicken or stew)", "Plain rice + beef or chicken sauce or stew", "Rice + groundnut, light or palm nut soup"] },
      { label: "Soups — definitely works", items: ["Groundnut soup (chicken / beef / goat)", "Light soup (chicken / beef / goat)", "Palm nut soup (chicken / beef / goat)"] },
      { label: "Stews & sauces", items: ["Beef or chicken sauce", "Beef or chicken tomato stew", "Goat stew", "Pork stew", "Bean stew + the right side", "Tomato-based meat sauces", "Pepper/chili sauces"] },
      { label: "Sides & snacks", items: ["Kelewele ⭐", "Bofrot ⭐", "Meat pies", "Fried yam", "Yam + stew or sauce", "Fried or roasted potatoes"] },
      { label: "No", items: ["Okro soup/stew", "Kontomire stew"] },
    ],
  },
  {
    title: "Chicken", emoji: "🍗",
    intro: "Chicken is very safe territory. If a restaurant has chicken tenders, there's a good chance Josh orders them.",
    groups: [
      { label: "Fried / crispy", items: ["Chicken tenders ⭐", "Spicy chicken tenders", "Fried chicken", "Chicken wings", "Chicken katsu ⭐ (+ rice or fries)", "Popcorn chicken", "Chicken schnitzel", "Breaded cutlets"] },
      { label: "Sandwiches / handheld", items: ["Spicy chicken sandwich ⭐", "Crispy or grilled chicken sandwich", "Chicken wrap", "Chicken quesadilla", "Chicken tacos / burrito / fajitas", "Chicken shawarma wrap"] },
      { label: "Chicken + rice", items: ["Teriyaki chicken + rice ⭐", "Chicken fried rice", "Chicken stir-fry + rice", "Chicken curry + rice", "Garlic or honey-garlic chicken + rice", "BBQ or pepper chicken + rice", "Chicken jollof", "Chicken katsu rice bowl"] },
      { label: "Other", items: ["Roast or grilled chicken", "Garlic-butter / lemon-garlic / honey-garlic chicken", "Teriyaki or BBQ chicken", "Chicken curry or stir-fry", "Chicken skewers or kebabs", "Chicken Parmesan", "Chicken shawarma"] },
    ],
  },
  {
    title: "Beef & carne asada", emoji: "🥩",
    intro: "Savory meats you can slice into — beef and steak dishes fit perfectly.",
    groups: [
      { label: "Beef", items: ["Steak (+ rice, fries, potatoes or vegetables)", "Garlic-butter or pepper steak", "Beef skewers or kebabs", "Beef stir-fry + rice ⭐ or noodles", "Beef fried rice or noodles", "Beef curry + rice", "Beef sauce + rice ⭐", "Beef stew or jollof", "Meatballs + pasta or rice", "Cheeseburger", "Loaded beef fries"] },
      { label: "Carne asada / Mexican beef", items: ["Carne asada ⭐", "Carne asada tacos ⭐", "Carne asada fries ⭐", "Carne asada burrito, quesadilla or rice bowl", "Steak tacos or fajitas", "Beef tacos, burritos or quesadillas"] },
    ],
  },
  {
    title: "Pork", emoji: "🐖",
    intro: "Pork is a yes.",
    groups: [
      { label: "Pork dishes", items: ["Pork chops (grilled, pan-fried or garlic-butter)", "Pork + rice, potatoes or vegetables", "Pork fried rice, stir-fry or noodles", "BBQ, honey-garlic or teriyaki pork", "Pork skewers or kebabs", "Pork tacos, burritos or quesadillas", "Pork jollof or stew", "Bacon", "Chorizo"] },
    ],
  },
  {
    title: "Pasta", emoji: "🍝",
    intro: "Different types of pasta generally work — that gives you a LOT of freedom.",
    groups: [
      { label: "Pasta dishes", items: ["Chicken Alfredo ⭐", "Fettuccine Alfredo", "Spaghetti Bolognese ⭐", "Spaghetti + meat sauce or meatballs", "Penne + tomato or meat sauce, chicken or beef", "Carbonara (chicken, bacon or spaghetti)", "Baked ziti ⭐", "Lasagna", "Chicken Parmesan + spaghetti", "Creamy garlic or garlic-butter chicken pasta", "Spicy chicken pasta", "Pasta bakes", "Mac and cheese"] },
    ],
  },
  {
    title: "Thai / Asian-style", emoji: "🍜",
    intro: "⚠️ Check every Asian sauce for seafood: fish sauce, oyster sauce, shrimp paste and some curry pastes contain it.",
    groups: [
      { label: "Confirmed", items: ["Chicken Pad Thai ⭐", "Chicken katsu + rice ⭐", "Teriyaki chicken (+ rice) ⭐", "Beef stir-fry + rice ⭐", "Chicken fried noodles ⭐"] },
      { label: "Fits those tastes", items: ["Chicken / beef / pork stir-fry", "Fried rice (any meat)", "Noodles (any meat)", "Teriyaki beef or pork", "Garlic chicken or beef + rice", "Honey-garlic chicken", "Chicken or beef curry + rice", "Rice bowls"] },
    ],
  },
  {
    title: "Mexican / Tex-Mex", emoji: "🌮",
    groups: [
      { label: "Confirmed favorites", items: ["Carne asada tacos ⭐", "Carne asada fries ⭐"] },
      { label: "Very compatible", items: ["Carne asada burrito, quesadilla or rice bowl", "Tacos (steak, chicken, beef or pork)", "Burritos and quesadillas (any meat, or cheese)", "Fajitas (chicken, steak or beef)", "Loaded fries or nachos with meat + cheese", "Mexican-style rice bowls", "Chorizo + potatoes and/or eggs", "Breakfast burritos ⭐ and quesadillas"] },
    ],
  },
  {
    title: "Breakfast", emoji: "🍳",
    groups: [
      { label: "Confirmed", items: ["Cereal", "Omelettes", "Eggs + potatoes", "Chorizo", "Potato tortilla / Spanish tortilla", "Pancakes", "Breakfast burritos"] },
      { label: "Omelettes", items: ["Cheese", "Meat + cheese", "Chorizo", "Chicken", "Bacon", "Potato", "Pepper + cheese", "Loaded"] },
      { label: "Eggs + potatoes", items: ["Scrambled or fried eggs + fried/roasted potatoes", "Chorizo or bacon + potatoes + eggs", "Breakfast skillet", "Cheesy potato + egg skillet"] },
      { label: "More ideas", items: ["Waffles", "French toast", "Breakfast quesadilla", "Hash browns", "Leftover rice + eggs + meat", "Breakfast fried rice"] },
      { label: "No", items: ["Egg sandwiches"] },
    ],
  },
  {
    title: "American / comfort", emoji: "🍔",
    groups: [
      { label: "Good", items: ["Chicken tenders ⭐", "Fried chicken and wings", "Spicy chicken sandwich ⭐", "Cheeseburger + fries", "Loaded fries", "Grilled cheese", "Mac and cheese", "BBQ chicken or pork", "Steak + fries", "Garlic bread and dinner rolls", "Roasted potatoes, fries, sweet potato fries"] },
      { label: "No", items: ["Hot dogs", "Onion rings"] },
    ],
  },
  {
    title: "Potatoes", emoji: "🥔",
    intro: "Different kinds of potatoes are confirmed — don't limit this to fries.",
    groups: [
      { label: "Good", items: ["French fries and sweet potato fries", "Roasted (plain or garlic)", "Fried / pan-fried / breakfast potatoes", "Potato wedges and baked potatoes", "Mashed regular potatoes", "Hash browns", "Potato tortilla", "Potatoes + eggs / chorizo / steak / chicken / pork", "Cheesy or loaded potatoes", "Carne asada fries"] },
      { label: "No", items: ["Mashed sweet potatoes", "Potato salad"] },
    ],
  },
  {
    title: "Sides & drinks", emoji: "🥤",
    groups: [
      { label: "Good sides", items: ["Rice, jollof, fried rice", "Kelewele", "Fries, roasted or mashed potatoes", "Mac and cheese", "Corn on the cob", "Sautéed / cooked vegetables", "Noodles and pasta", "Garlic bread, dinner rolls", "Yam fries"] },
      { label: "Depends", items: ["Plantain — preparation matters", "Salad — not really a fan"] },
      { label: "No sides", items: ["Potato salad", "Coleslaw", "Baked beans", "Onion rings", "Mashed sweet potatoes"] },
      { label: "Drinks", items: ["Lemonade", "Orange, pineapple and mango juice", "BEL Active", "Other fruit juices", "Water", "(Generally avoids soda)"] },
    ],
  },
  {
    title: "Pantry / ingredient bank", emoji: "🛒",
    intro: "Look at what's available and think: “Okay, what can I make from this?”",
    groups: [
      { label: "Meat & protein — NO seafood", items: ["Chicken (breasts, thighs, tenderloins, wings, whole)", "Ground beef, beef strips, steak, stew beef", "Goat meat", "Pork chops, loin, strips", "Bacon and chorizo", "Eggs", "Beans for bean stew"] },
      { label: "Rice, pasta & noodles", items: ["Long-grain, jasmine and local Ghanaian rice", "Spaghetti, fettuccine, penne, ziti, lasagna, macaroni", "Regular noodles and rice / Pad Thai noodles"] },
      { label: "Starches", items: ["White and sweet potatoes", "Yam", "Plantain (mainly for kelewele)", "Tortillas, bread, buns, rolls", "Breadcrumbs and flour"] },
      { label: "Fresh", items: ["Tomatoes and tomato paste", "Onions, garlic, ginger", "Green and bell peppers", "Carrots, corn, mixed vegetables", "Scallions, fresh chilies, hot peppers", "Limes and lemons"] },
      { label: "Dairy & cheese", items: ["Milk, cream, butter", "Mozzarella and Parmesan", "Cheddar when appropriate", "Evaporated milk where needed"] },
      { label: "Ghanaian pantry", items: ["Groundnut/peanut paste", "Palm-nut soup base and palm oil", "Tomato paste and fresh tomatoes", "Stock/bouillon", "Ingredients for bofrot and meat pies"] },
      { label: "Asian / Thai pantry — check labels for seafood", items: ["Soy and teriyaki sauce", "Sesame oil and rice vinegar", "Chili sauce, honey, brown sugar", "Curry seasonings"] },
      { label: "Seasonings & sauces", items: ["Salt, pepper, garlic and onion powder", "Paprika (plain + smoked), chili powder, cayenne", "Curry powder, cumin, thyme, oregano, basil, rosemary", "BBQ, pepper and chili sauces", "Garlic butter, cream and cheese sauces", "Salsa, ketchup, mustard, honey, hot sauce"] },
    ],
  },
];
