import { Collection } from "types/Collection";


export const highlightsCollection: Collection = {
  folder: "Highlights",
  type: "People & Nature",
  totalRows: 147,
  albumPhoto: "",
  photos: [
    { src: "DSCF2941.jpg", rows: 11, cols: 11, folder: "Innocents_Society" },
    { src: "DSCF5384.jpg", rows: 11, cols: 7, folder: "KC_Roses" },
    { src: "DSC_4695.jpg", rows: 8, cols: 11, folder:  "Kally_Chi_O_Reveal" },
    { src: "DSCF6123.jpg", rows: 11, cols: 7, folder: "KC_Garmin_Arkansas_Trip" },
    { src: "DSCF6423.jpg", rows: 12, cols: 11, folder: "Home_Flower_Bees" },
    { src: "DSCF1961.jpg", rows: 9, cols: 7, folder: "RS_Advisory_Board" },

    { src: "DSCF4249.jpg", rows: 8, cols: 8, folder: "Lara_Megan_Mary_Clare" },
    { src: "DSC_5527.jpg", rows: 8, cols: 10, folder: "Vivian_G_Phi_Reveal" },

    { src: "DSCF5119.jpg", rows: 12, cols: 10, folder: "Snow_Squirrels" },
    { src: "DSCF7892.jpg", rows: 12, cols: 8, folder: "RS_Career_Fair_Prep" },

    { src: "DSCF5381.jpg", rows: 12, cols: 18, folder: "KC_Roses" },

    { src: "DSC_4660.jpg", rows: 14, cols: 11, folder: "Kally_Chi_O_Reveal" },
    { src: "DSC_7597.jpg", rows: 11, cols: 7, folder: "Florida_Trip" },
    { src: "DSCF3387.jpg", rows: 11, cols: 7, folder: "Innocents_Society" },
    { src: "DSCF6297.jpg", rows: 8, cols: 11, folder: "Home_Flower_Bees" },

    { src: "DSCF5924.jpg", rows: 14, cols: 11, folder: "KC_Garmin_Arkansas_Trip" },
    { src: "DSC_5802.jpg", rows: 10, cols: 7, folder: "Home_Winter_Sunset_Lake" },
    { src: "DSC_5284.jpg", rows: 6, cols: 7, folder: "Random" },
    { src: "DSCF0505.jpg", rows: 7, cols: 11, folder: "Random" },
    { src: "DSCF4948.jpg", rows: 10, cols: 7, folder: "Lara_Megan_Mary_Clare" },
    { src: "DSCF8419.jpg", rows: 12, cols: 11, folder: "RS_Career_Fair_Prep" },
    { src: "DSC_3769.jpg", rows: 9, cols: 7, folder: "RS_Internship_Highlights_1" },
    { src: "DSC_7557.jpg", rows: 12, cols: 11, folder: "Florida_Trip" },
    { src: "DSC_5565.jpg", rows: 10, cols: 7, folder: "Vivian_G_Phi_Reveal" },
    
    { src: "DSC_5770.jpg", rows: 6, cols: 8, folder: "Home_Winter_Sunset_Lake" },
    { src: "DSCF7026.jpg", rows: 8, cols: 10, folder: "Cohort_Christmas" },
    { src: "DSCF6059.jpg", rows: 11, cols: 8, folder: "KC_Garmin_Arkansas_Trip" },
    { src: "DSC_2402.jpg", rows: 8, cols: 10, folder: "Nathan_and_Charlie" },
  ]
};

export const collections: Collection[] = [
  {
    folder: "RS_Career_Fair_Prep",
    type: "People",
    numPeople: 38,
    totalRows: 130,
    albumPhoto: "DSCF7429",
    photos: [
      "DSCF7892.jpg",
      "DSCF7429.jpg",
      "DSCF0502.jpg",
      "DSCF8728.jpg",
      "DSCF7996.jpg",
      "DSCF8419.jpg",
      "DSCF0417.jpg",
      "DSCF9039.jpg",
      "DSCF0203.jpg",
      "DSCF0486.jpg",
      "DSCF0765.jpg",
      "DSCF0973.jpg",
      "DSCF9120.jpg",
      "DSCF7413.jpg",
      "DSCF0091.jpg",
      "DSCF7832.jpg",
      "DSCF8767.jpg",
      "DSCF8407.jpg",
      "DSCF8238.jpg",
      "DSCF7943.jpg",
    ].map(each => {
      return { src: each, rows: 13, cols: 9 }
    })
  },
  {
    folder: "Innocents_Society",
    type: "People",
    numPeople: 13,
    totalRows: 94,
    albumPhoto: "DSCF2941",
    photos: [
      { src: "DSCF2941.jpg", rows: 12, cols: 10 },
      { src: "DSCF2981.jpg", rows: 9, cols: 8 },
      { src: "DSCF3447.jpg", rows: 10, cols: 8 },
      { src: "DSCF3387.jpg", rows: 13, cols: 10 },
      { src: "DSCF2692.jpg", rows: 9, cols: 8 },
      { src: "DSCF3176.jpg", rows: 12, cols: 10 },
      { src: "DSCF2744.jpg", rows: 9, cols: 8 },
      
      { src: "DSCF3312.jpg", rows: 12, cols: 18 },
      { src: "DSCF3346.jpg", rows: 12, cols: 18 },
    ].concat(
      [
        "DSCF3526.jpg",
        "DSCF3631.jpg",
        "DSCF2793.jpg",
        "DSCF3073.jpg",
        "DSCF3884.jpg",
        "DSCF3941.jpg",
      ].map(each => {
        return { src: each, rows: 11, cols: 9 }
      })
    )
  },
  {
    folder: "RS_Advisory_Board",
    type: "People",
    numPeople: 16,
    totalRows: 88,
    albumPhoto: "DSCF2036",
    photos: [
      "DSCF2036.jpg",
      "DSCF2135.jpg",
      "DSCF1961.jpg",
      "DSCF1575.jpg",
      "DSCF1784.jpg",
      "DSCF1603.jpg",
      "DSCF1672.jpg",
      "DSCF1624.jpg",
      "DSCF1734.jpg",
      "DSCF1693.jpg",
      "DSCF1524.jpg",
      "DSCF1872.jpg",
      "DSCF2092.jpg",
      "DSCF1814.jpg",
      "DSCF2175.jpg",
      "DSCF1911.jpg"
    ].map(each => {
      return { src: each, rows: 11, cols: 9 }
    })
  },
  {
    folder: "Kally_Chi_O_Reveal",
    type: "People",
    numPeople: 4,
    totalRows: 74,
    albumPhoto: "DSC_4695",
    photos: [
      { src: "DSC_4695.jpg", rows: 12, cols: 18 },
      { src: "DSC_4660.jpg", rows: 14, cols: 10 },
      { src: "DSC_4590.jpg", rows: 11, cols: 8 },
      { src: "DSC_4553.jpg", rows: 8, cols: 10 },
      { src: "DSC_4628.jpg", rows: "24 / span 11", cols: "11 / span 8" },
      { src: "DSC_4481.jpg", rows: 12, cols: 8 },
      { src: "DSC_4677.jpg", rows: 16, cols: 10 },
      { src: "DSC_4743.jpg", rows: 10, cols: 8 },
      { src: "DSC_4576.jpg", rows: 16, cols: 10 },
      { src: "DSC_4664.jpg", rows: 12, cols: 8 },
      { src: "DSC_4785.jpg", rows: 8, cols: 10, }
    ]
  },
  // {
  //   folder: "Kally_Chi_O_Reveal",
  //   type: "People",
  //   numPeople: 4,
  //   totalRows: 31,
  //   albumPhoto: "DSC_4695",
  //   photos: [
  //     { src: "DSC_4695.jpg", rows: 6, cols: 9 },
  //     { src: "DSC_4590.jpg", rows: 6, cols: 4 },
  //     { src: "DSC_4628.jpg", rows: 7, cols: 5 },
  //     { src: "DSC_4576.jpg", rows: 7, cols: 5 },
  //     { src: "DSC_4660.jpg", rows: "7 / span 11", cols: "6 / span 8" },
  //     { src: "DSC_4481.jpg", rows: 8, cols: 5 },
  //     { src: "DSC_4677.jpg", rows: 8, cols: 5 },
  //     { src: "DSC_4553.jpg", rows: 6, cols: 8 },
  //     { src: "DSC_4664.jpg", rows: "16 / span 8", cols: "14 / span 5" },
  //     { src: "DSC_4743.jpg", rows: 6, cols: "1 / span 5" },
  //     { src: "DSC_4785.jpg", rows: 8, cols: 13, },
  //   ]
  // },
  {
    folder: "Home_Flower_Bees",
    type: "Nature",
    totalRows: 61,
    albumPhoto: "DSCF6423",
    photos: [
      { src: "DSCF6314.jpg", rows: 12, cols: 18 },
      { src: "DSCF6423.jpg", rows: 16, cols: 11 },
      { src: "DSCF6466.jpg", rows: 9, cols: 7 },
      { src: "DSCF6314_Cropped.jpg", rows: 7, cols: 7 },
      { src: "DSCF6297.jpg", rows: 12, cols: 18 },
      { src: "DSCF6399.jpg", rows: 11, cols: 8 },
      { src: "DSCF6304.jpg", rows: 7, cols: 10 },
      { src: "DSCF6350.jpg", rows: 8, cols: 8 },
      { src: "DSCF6449.jpg", rows: "48 / span 14", cols: "9 / span 10" }
    ]
  },
  {
    folder: "KC_Roses",
    type: "Nature",
    totalRows: 48,
    albumPhoto: "DSCF5381",
    photos: [
      { src: "DSCF5381.jpg", rows: 12, cols: 18 },
      { src: "DSCF5384.jpg", rows: 14, cols: 10 },
      { src: "DSCF5446.jpg", rows: 12, cols: 8 },
      { src: "DSCF5467.jpg", rows: "25 / span 12", cols: "11 / span 8" },
      { src: "DSCF5426.jpg", rows: 14, cols: 10 },
      { src: "DSCF5432.jpg", rows: "37 / span 12", cols: "11 / span 8" }
    ]
  },
  {
    folder: "Snow_Squirrels",
    type: "Nature",
    totalRows: 46,
    albumPhoto: "DSCF5119",
    photos: [
      { src: "DSCF5119.jpg", rows: 22, cols: 18 },
      { src: "DSCF4917.jpg", rows: 12, cols: 18 },
      { src: "DSCF5054.jpg", rows: 12, cols: 8 },
      { src: "DSCF4641.jpg", rows: 8, cols: 10 }
    ]
  },
  {
    folder: "KC_Garmin_Arkansas_Trip",
    type: "People & Nature",
    totalRows: 97,
    albumPhoto: "DSCF6123",
    photos: [
      { src: "DSCF6123.jpg", rows: 14, cols: 10 },
      { src: "DSCF5752.jpg", rows: 11, cols: 8 },
      { src: "DSCF5731.jpg", rows: 10, cols: 8 },
      { src: "DSCF5924.jpg", rows: 14, cols: 10 },
      { src: "DSCF6059.jpg", rows: 11, cols: 8 },
      { src: "DSCF6015.jpg", rows: 14, cols: 10 },
      { src: "DSCF5876.jpg", rows: 10, cols: 8 },

      { src: "DSCF6177.jpg", rows: 11, cols: 8 },
      { src: "DSCF5946.jpg", rows: 7, cols: 10 },
      { src: "DSCF5891.jpg", rows: 15, cols: 10 },
      { src: "DSCF5963.jpg", rows: 11, cols: 8 },

      { src: "DSCF5935.jpg", rows: 6, cols: 10 },
      { src: "DSCF6053.jpg", rows: 11, cols: 8 },
      { src: "DSCF6223.jpg", rows: 13, cols: 10 },
      { src: "DSCF6233.jpg", rows: 12, cols: 8 },
      { src: "DSCF5687.jpg", rows: 14, cols: 10 },
    ]
  },
  {
    folder: "Nathan_and_Charlie",
    type: "People",
    numPeople: 2,
    totalRows: 65,
    albumPhoto: "DSC_2805",
    photos: [
      { src: "DSC_2805.jpg", rows: 12, cols: 18 },
      { src: "DSC_2402.jpg", rows: 7, cols: 10 },
      { src: "DSC_2577.jpg", rows: 12, cols: 8 },
      { src: "DSC_2780.jpg", rows: 8, cols: 10 },
      { src: "DSC_2379.jpg", rows: 6, cols: 8 },
      { src: "DSC_2638.jpg", rows: 13, cols: 10 },
      { src: "DSC_2556.jpg", rows: 10, cols: 8 },

      { src: "DSC_2591.jpg", rows: 8, cols: 11 },
      { src: "DSC_2500.jpg", rows: 7, cols: 7 },
      { src: "DSC_2440.jpg", rows: 9, cols: 7 },
      { src: "DSC_2521.jpg", rows: 8, cols: 11 },
      { src: "DSC_2623.jpg", rows: 9, cols: 14 },
    ]
  },
  {
    folder: "Lara_Megan_Mary_Clare",
    type: "People",
    numPeople: 3,
    totalRows: 77,
    albumPhoto: "DSCF4948",
    photos: [
      { src: "DSCF4948.jpg", rows: 16, cols: 11 },
      { src: "DSCF4286.jpg", rows: 9, cols: 7 },
      { src: "DSCF4227.jpg", rows: 7, cols: 7 },
      { src: "DSCF4249.jpg", rows: 12, cols: 18 },
      { src: "DSCF4731.jpg", rows: 18, cols: 11 },
      { src: "DSCF4398.jpg", rows: 9, cols: 7 },
      { src: "DSCF4515.jpg", rows: 9, cols: 7 },
      { src: "DSCF5201.jpg", rows: 10, cols: 7 },
      { src: "DSCF4717.jpg", rows: 16, cols: 11 },
      { src: "DSCF4423.jpg", rows: 9, cols: 7 },
      { src: "DSCF4748.jpg", rows: 16, cols: 11 },
      { src: "DSCF4370.jpg", rows: 9, cols: 7 },
    ]
  },
  {
    folder: "Vivian_G_Phi_Reveal",
    type: "People",
    numPeople: 4,
    totalRows: 52,
    albumPhoto: "DSC_5527",
    photos: [
      { src: "DSC_5527.jpg", rows: 12, cols: 18 },
      { src: "DSC_5568.jpg", rows: 8, cols: 11 },
      { src: "DSC_5448.jpg", rows: 10, cols: 7 },
      { src: "DSC_5409.jpg", rows: 8, cols: 11 },
      { src: "DSC_5613.jpg", rows: 10, cols: 7 },
      { src: "DSC_5565.jpg", rows: 18, cols: 11 },
      { src: "DSC_5385.jpg", rows: 10, cols: 7 },
      { src: "DSC_5421.jpg", rows: 10, cols: 7 }
    ]
  },
  {
    folder: "Home_Winter_Sunset_Lake",
    type: "Nature",
    totalRows: 69,
    albumPhoto: "DSC_5770",
    photos: [
      { src: "DSC_5770.jpg", rows: 12, cols: 18 },
      { src: "DSC_5802.jpg", rows: 14, cols: 10 },
      { src: "DSC_5904.jpg", rows: 10, cols: 8 },
      { src: "DSC_6065.jpg", rows: "23 / span 11", cols: "11 / span 8" },
      { src: "DSC_5832.jpg", rows: 7, cols: 10 },
      { src: "DSC_5970.jpg", rows: 12, cols: 18 },
      { src: "DSC_5896.jpg", rows: 12, cols: 8 },
      { src: "DSC_6081.jpg", rows: 7, cols: 10 },
      { src: "DSC_5913.jpg", rows: 5, cols: 10 },
      { src: "DSC_5864.jpg", rows: 12, cols: 18 },
    ]
  },
  {
    folder: "Florida_Trip",
    type: "Nature",
    totalRows: 42,
    albumPhoto: "DSC_7597",
    photos: [
      { src: "DSC_7597.jpg", rows: 13, cols: 9 },
      { src: "DSC_7557.jpg", rows: 13, cols: 9 },
      { src: "DSC_7496.jpg", rows: 7, cols: 11 },
      { src: "DSC_7200.jpg", rows: 13, cols: 7 },
      { src: "DSC_7301.jpg", rows: 6, cols: 11 },
      { src: "DSC_7161.jpg", rows: 7, cols: 9 },
      { src: "DSC_7296.jpg", rows: 7, cols: 9 },
      { src: "DSC_7378.jpg", rows: 9, cols: 14 }
    ]
  },
  {
    folder: "RS_DS_Internal_Celebration",
    type: "People",
    totalRows: 48,
    albumPhoto: "DSCF2482",
    photos: [
      { src: "DSCF2482.jpg", rows: 12, cols: 18 },
      { src: "DSCF2268.jpg", rows: 9, cols: 12 },
      { src: "DSCF2389.jpg", rows: 9, cols: 6 },
      { src: "DSCF2307.jpg", rows: 9, cols: 12 },
      { src: "DSCF2444.jpg", rows: 9, cols: 6 },
      { src: "DSCF2512.jpg", rows: 9, cols: 6 },
      { src: "DSCF2359.jpg", rows: 9, cols: 6 },
      { src: "DSCF2545.jpg", rows: 9, cols: 6 },
      { src: "DSCF2336.jpg", rows: 9, cols: 6 },
      { src: "DSCF2419.jpg", rows: 9, cols: 6 },
      { src: "DSCF2532.jpg", rows: 9, cols: 6 },
    ]
  },
  {
    folder: "RS_Internship_Highlights_1",
    type: "People",
    numPeople: 14,
    totalRows: 91,
    albumPhoto: "DSC_3769",
    photos: [
      "DSC_3769.jpg",
      "DSC_4962.jpg",
      "DSC_4018.jpg",
      "DSC_4115.jpg",
      "DSC_3619.jpg",
      "DSC_3666.jpg",
      "DSC_5165.jpg",
      "DSC_3714.jpg",
      "DSC_3925.jpg",
      "DSC_5104.jpg",
      "DSC_5034.jpg",
      "DSC_3854.jpg",
      "DSC_4982.jpg",
      "DSC_5199.jpg"
    ].map(each => {
      return { src: each, rows: 13, cols: 9 }
    })
  },
  {
    folder: "RS_Internship_Highlights_2",
    type: "People",
    numPeople: 7,
    totalRows: 52,
    albumPhoto: "DSCF7087",
    photos: [
      "DSCF7087.jpg",
      "DSCF7206.jpg",
      "DSCF7124.jpg",
      "DSCF7173.jpg",
      "DSCF7107.jpg",
      "DSCF7052.jpg",
      "DSCF7002.jpg",
    ].map(each => {
      return { src: each, rows: 13, cols: 9 }
    })
  },
  {
    folder: "Cohort_Christmas",
    type: "People",
    totalRows: 68,
    albumPhoto: "DSCF7026",
    photos: [
      { src: "DSCF7026.jpg", rows: 12, cols: 18 },
      { src: "DSCF8245.jpg", rows: 9, cols: 11 },
      { src: "DSCF7283.jpg", rows: 10, cols: 7 },
      { src: "DSCF7096.jpg", rows: 8, cols: 11 },
      { src: "DSCF7650.jpg", rows: 10, cols: 7 },
      { src: "DSCF7304.jpg", rows: 13, cols: 11 },
      { src: "DSCF7743.jpg", rows: 10, cols: 7 },
      { src: "DSCF7512.jpg", rows: 13, cols: 9 },
      { src: "DSCF7589.jpg", rows: 13, cols: 9 },
      { src: "DSCF7381.jpg", rows: 13, cols: 9 },
      { src: "DSCF8257.jpg", rows: 13, cols: 9 },
    ]
  },
  {
    folder: "RS_Fall_Speaker",
    type: "People",
    totalRows: 41,
    albumPhoto: "DSCF2627",
    photos: [
      { src: "DSCF2627.jpg", rows: 12, cols: 18 },
      { src: "DSCF2652.jpg", rows: 8, cols: 10 },
      { src: "DSCF2258.jpg", rows: 8, cols: 8 },
      { src: "DSCF2295.jpg", rows: 12, cols: 18 },
      { src: "DSCF2249.jpg", rows: 9, cols: 14 },
    ]
  },
];