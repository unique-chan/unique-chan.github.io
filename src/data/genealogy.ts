export interface GenPerson {
  name: string;
  /** Mathematics Genealogy Project record id. */
  mgp?: number;
  degree?: string;
  institution?: string;
  year?: string;
  note?: string;
  key?: boolean;
  terminal?: boolean;
}

export interface GenRow {
  /** Generation depth shown on every card in the row. */
  level?: number;
  /** Link drawn above this row. */
  link: "none" | "line" | "split" | "bridge" | "merge";
  people: GenPerson[];
}

export const genealogy: GenRow[] = [
  {
    level: 1,
    link: "none",
    people: [
      {
        name: "Wolfgang Fabricius Capito", mgp: 131399,
        degree: "Magister Artium, Theol. Dr.",
        institution: "Universität Ingolstadt · Albert-Ludwigs-Universität Freiburg im Breisgau",
        year: "1506 · 1515"
      }
    ]
  },
  {
    level: 2,
    link: "line",
    people: [
      {
        name: "Simon Sulzer", mgp: 182092,
        degree: "Magister Artium",
        institution: "Collège de Saint-Guillaume à Strasbourg",
        year: "1531"
      }
    ]
  },
  {
    level: 3,
    link: "line",
    people: [
      {
        name: "Johann Jacob Grynaeus", mgp: 143045,
        degree: "Magister Artium",
        institution: "Universität Basel, Switzerland",
        year: "1559"
      }
    ]
  },
  {
    level: 4,
    link: "line",
    people: [
      { name: "Sebastian Beck", mgp: 143082, degree: "Theol. Dr.", institution: "Universität Basel", year: "1610" }
    ]
  },
  {
    level: 5,
    link: "line",
    people: [
      { name: "Theodor Zwinger, Jr.", mgp: 143083, degree: "Theol. Dr.", institution: "Universität Basel", year: "1630" }
    ]
  },
  {
    level: 6,
    link: "line",
    people: [
      { name: "Peter Werenfels", mgp: 143084, degree: "Theol. Dr.", institution: "Universität Basel", year: "1649" }
    ]
  },
  {
    level: 7,
    link: "line",
    people: [
      { name: "Jacob Bernoulli", mgp: 54440, degree: "Theol. Dr.", institution: "Universität Basel", year: "1676" }
    ]
  },
  {
    level: 8,
    link: "line",
    people: [
      {
        name: "Johann Bernoulli", mgp: 53410,
        degree: "Medicinae Dr.",
        institution: "Universität Basel",
        year: "1690 · 1694"
      }
    ]
  },
  {
    level: 9,
    link: "line",
    people: [
      {
        name: "Leonhard Euler", mgp: 38586,
        degree: "Ph.D.",
        institution: "Universität Basel",
        year: "1726",
        note: "Advisor of Joseph Louis Lagrange"
      }
    ]
  },
  {
    level: 10,
    link: "split",
    people: [{ name: "Joseph Louis Lagrange", mgp: 17864 }, { name: "Pierre-Simon Laplace", mgp: 108295 }]
  },
  {
    level: 11,
    link: "bridge",
    people: [
      {
        name: "Jean-Baptiste Joseph Fourier", mgp: 17981,
        degree: "Ph.D.",
        institution: "École Normale Supérieure"
      },
      {
        name: "Siméon Denis Poisson", mgp: 17865,
        degree: "Ph.D.",
        institution: "École Polytechnique",
        year: "1800"
      }
    ]
  },
  {
    level: 12,
    link: "merge",
    people: [
      {
        name: "Gustav Peter Lejeune Dirichlet", mgp: 17946,
        degree: "Honorary",
        institution: "Rheinische Friedrich-Wilhelms-Universität Bonn",
        year: "1827"
      }
    ]
  },
  {
    level: 13,
    link: "line",
    people: [
      {
        name: "Rudolf Otto Sigismund Lipschitz", mgp: 19964,
        degree: "Dr. phil.",
        institution: "Universität Berlin",
        year: "1853"
      }
    ]
  },
  {
    level: 14,
    link: "line",
    people: [
      {
        name: "C. Felix (Christian) Klein", mgp: 7401,
        degree: "Dr. phil.",
        institution: "Rheinische Friedrich-Wilhelms-Universität Bonn",
        year: "1868"
      }
    ]
  },
  {
    level: 15,
    link: "line",
    people: [
      { name: "Frank Nelson Cole", mgp: 7611, degree: "Ph.D.", institution: "Harvard University", year: "1886" }
    ]
  },
  {
    level: 16,
    link: "line",
    people: [
      { name: "Eric Temple Bell", mgp: 7868, degree: "Ph.D.", institution: "Columbia University", year: "1912" }
    ]
  },
  {
    level: 17,
    link: "line",
    people: [
      {
        name: "Howard Percy Robertson", mgp: 10384,
        degree: "Ph.D.",
        institution: "California Institute of Technology",
        year: "1925"
      }
    ]
  },
  {
    level: 18,
    link: "line",
    people: [
      { name: "Abraham Haskel Taub", mgp: 40575, degree: "Ph.D.", institution: "Princeton University", year: "1935" }
    ]
  },
  {
    level: 19,
    link: "line",
    people: [
      {
        name: "Gene Howard Golub", mgp: 39145,
        degree: "Ph.D.",
        institution: "University of Illinois at Urbana-Champaign",
        year: "1959"
      }
    ]
  },
  {
    level: 20,
    link: "line",
    people: [
      {
        name: "Franklin Tai-Cheung Luk", mgp: 46413,
        degree: "Ph.D.",
        institution: "Stanford University",
        year: "1978"
      }
    ]
  },
  {
    level: 21,
    link: "line",
    people: [
      { name: "Haesun Park", mgp: 41742, degree: "Ph.D.", institution: "Cornell University", year: "1987" }
    ]
  },
  {
    level: 22,
    link: "line",
    people: [
      {
        name: "Moongu Jeon", mgp: 59985,
        degree: "Ph.D.",
        institution: "University of Minnesota–Minneapolis",
        year: "2001",
        // note: "Professor of GIST, Dept. of Electrical Engineering and Computer Sciences",
        key: false
      }
    ]
  },
  {
    level: 23,
    link: "line",
    people: [
      {
        name: "Yechan Kim",
        degree: "Ph.D.",
        institution: "GIST",
        year: "2026",
        key: true,
        note: "Research Engineer, LIG Defense&Aerospace - AI Laboratory",
      }
    ]
  },
  {
    link: "line",
    people: [{ name: "Next?", terminal: true }]
  }
];

export const MGP_BASE = "https://www.mathgenealogy.org/id.php?id=";

export const genealogyMeta = {
  generations: 23,
  span: "1506 - 2026",
  origin: "Universität Ingolstadt"
};
