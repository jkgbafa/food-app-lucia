// The Total Wife — content drawn from "Model Marriage" by Dag Heward-Mills
// (Ch. 12 "Duties of the Wife", Ch. 13 "The Total Wife") plus Josh's notes.

export type Role = {
  slug: string;
  n: string; // display number, e.g. "01"
  title: string;
  tagline: string;
  duties: string[]; // duties of the wife that fit under this role (Ch. 12 + 13)
  oneLiners: string[]; // powerful one-liners to remember
  listen: { label: string; query: string }[]; // messages to listen to (YouTube search)
  read: string[]; // books that help on this topic
};

const DAG = "Dag Heward-Mills ";

export const FOUNDATION =
  "Eve was created to be Adam's helpmeet. Whatever the woman does, her motive must be to help, project, motivate, uplift and promote her husband.";

export const ROLES: Role[] = [
  {
    slug: "christian",
    n: "01",
    title: "A Christian",
    tagline: "Above all, she is committed to the Lord.",
    duties: [
      "Pray — she rises early to pray and work (Proverbs 31:15).",
      "Read your Bible.",
      "Have and attend fellowship.",
      "Be involved in church activities.",
      "Submit to your husband, as unto the Lord (Ephesians 5:22–24).",
      "Purity and reverence of life can win a husband without words (1 Peter 3:1–3).",
    ],
    oneLiners: [
      "Above all, she is committed to the Lord.",
      "I can do all things through Christ who strengthens me. — Philippians 4:13",
      "A woman that feareth the LORD, she shall be praised. — Proverbs 31:30",
    ],
    listen: [
      { label: "The virtuous woman", query: DAG + "virtuous woman" },
      { label: "Submission in marriage", query: DAG + "submission marriage" },
    ],
    read: ["Model Marriage — Dag Heward-Mills (Ch. 12–13)", "Those Who Are Proud — Dag Heward-Mills", "Proverbs 31"],
  },
  {
    slug: "worker",
    n: "02",
    title: "A Worker & Student",
    tagline: "Put in your best and attain good results in any endeavour.",
    duties: [
      "Put in your best and attain good results in any endeavour.",
      "She is hard-working — she does not leave all work for the maid (Proverbs 31:13–17).",
      "She is a good planner; considers before buying (Proverbs 31:16).",
      "She learns a craft or trade — baking, sewing, serving (Proverbs 31:19).",
      "She helps out financially when possible (Proverbs 31:18).",
    ],
    oneLiners: [
      "Her candle goeth not out by night. — Proverbs 31:18",
      "She eateth not the bread of idleness. — Proverbs 31:27",
      "I will plan in advance for all things.",
    ],
    listen: [
      { label: "Hard work & excellence", query: DAG + "hard work excellence" },
      { label: "The Proverbs 31 woman", query: DAG + "Proverbs 31" },
    ],
    read: ["Model Marriage — Dag Heward-Mills", "Proverbs 31"],
  },
  {
    slug: "mother",
    n: "03",
    title: "A Mother",
    tagline: "Her children arise up, and call her blessed.",
    duties: [
      "As a mother you must be loving and patient.",
      "Be prepared to talk and converse with the children.",
      "Help out with homework.",
      "Teach the young women to love their husbands, to love their children (Titus 2:4).",
    ],
    oneLiners: [
      "Her children arise up, and call her blessed; her husband also, and he praiseth her. — Proverbs 31:28",
      "Be loving and patient.",
    ],
    listen: [
      { label: "Raising godly children", query: DAG + "parenting children" },
      { label: "The Christian home", query: DAG + "Christian home" },
    ],
    read: ["Model Marriage — Dag Heward-Mills (Ch. 57: Parenting)"],
  },
  {
    slug: "lover",
    n: "04",
    title: "A Sex Partner",
    tagline: "Always eager and ready — it is a God-given duty.",
    duties: [
      "Always be eager and ready to meet the needs of your partner and your own.",
      "Initiate sometimes.",
      "Satisfy him at home, so he never has a reason to look elsewhere.",
      "Remember you will only be doing your God-given duty.",
    ],
    oneLiners: [
      "I will have a positive attitude towards sex.",
      "Her husband has confidence in her and he does not lack anything of value. — Proverbs 31:11",
    ],
    listen: [
      { label: "Marriage & intimacy", query: DAG + "marriage intimacy" },
      { label: "Love in marriage", query: DAG + "love in marriage" },
    ],
    read: ["Model Marriage — Dag Heward-Mills (Sections 9–12)"],
  },
  {
    slug: "cook",
    n: "05",
    title: "A Cook",
    tagline: "Cooking is an art which must be learnt and mastered!",
    duties: [
      "Produce good food always and regularly, with variety and zeal.",
      "Be very innovative — introduce a lot of variety.",
      "Adjust to your husband's work schedule, no matter how \"ungodly\" his eating hours may be.",
      "As much as possible, serve him yourself and sit by him to keep him company, even if you ate earlier.",
    ],
    oneLiners: [
      "Cooking is an art which must be learnt and mastered!",
      "She bringeth her food from afar. — Proverbs 31:14",
    ],
    listen: [{ label: "Duties of the wife", query: DAG + "duties of the wife" }],
    read: ["Model Marriage — Dag Heward-Mills (Ch. 12)", "Joshua's Table — the food guide in this app"],
  },
  {
    slug: "homekeeper",
    n: "06",
    title: "A Homekeeper",
    tagline: "She looketh well to the ways of her household.",
    duties: [
      "Your home must be very tidy and clean — not only for visitors but for your husband and children as well.",
      "Be a keeper at home (Titus 2:5).",
      "She is not idle nor a busybody (Proverbs 31:27).",
      "Make sure your husband is presentable and neat (Proverbs 31:23).",
    ],
    oneLiners: [
      "She looketh well to the ways of her household, and eateth not the bread of idleness. — Proverbs 31:27",
      "I will organize, delegate or get help and use it when I have to.",
    ],
    listen: [{ label: "Home keeping", query: DAG + "home keeping wife" }],
    read: ["Model Marriage — Dag Heward-Mills (Ch. 14: Home Keeping and House Helps)"],
  },
  {
    slug: "hostess",
    n: "07",
    title: "A Hostess & Companion",
    tagline: "Cheerfulness and a happy disposition at all times is an asset.",
    duties: [
      "Be as hospitable as possible — be a friend to your husband's friends.",
      "Chat with him when he is quiet.",
      "Encourage him when he is down.",
      "She is kind and does not drive away visitors (Proverbs 31:20).",
      "She speaks with wisdom and does not nag (Proverbs 31:26).",
      "She dresses well to look attractive to her husband (Proverbs 31:22).",
    ],
    oneLiners: [
      "Cheerfulness and a happy disposition at all times is an asset.",
      "She openeth her mouth with wisdom; and in her tongue is the law of kindness. — Proverbs 31:26",
      "Love your husband — it makes every other duty light. — after Titus 2:4",
    ],
    listen: [
      { label: "Communication in marriage", query: DAG + "communication marriage" },
      { label: "Friendship in marriage", query: DAG + "friendship marriage" },
    ],
    read: ["Model Marriage — Dag Heward-Mills (Ch. 8–9)"],
  },
];

export const PRINCIPLES = [
  "All my roles are equally important.",
  "I cannot and will not leave out any of these roles.",
  "I will plan in advance for all things.",
  "I will organize, delegate or get help and use it when I have to.",
  "I will have a positive attitude towards sex.",
  "I can do all things through Christ who strengthens me (Philippians 4:13).",
];

// Special, non-public notes — shared privately by Bishop Dag Heward-Mills.
export const NURSING_WIFE = {
  title: "The Nursing Wife",
  note: "Special non-public notes from Bishop Dag Heward-Mills on how to be a specially outstanding and pleasing wife.",
  items: [
    "Gentleness",
    "Breastfeeding",
    "Interest",
    "Intensive care",
    "Special food",
    "Spoon feeding",
    "Intensive continuous rehydration",
    "Bed making",
    "Deep muscle massage",
    "Deep tissue massage",
    "Thai massage",
    "Massage with a happy ending",
    "Temperature control — a nursing wife warms up the husband and never allows him to feel cold",
    "Conversation therapy",
    "Oral care",
    "Mouth to mouth resuscitation",
    "Light-hearted cheering up",
  ],
};

export const youtubeSearch = (query: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
