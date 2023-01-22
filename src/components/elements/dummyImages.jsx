function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const assets = importAll(
  require.context("../../assets/", false, /\.(png|jpe?g|svg)$/)
);

const resAssets = importAll(
  require.context("../../assets/res", false, /\.(png|jpe?g|svg)$/)
);

export const content = [
  {
    id: "1",
    url: `${assets["dummy1.jpg"]}`,
    vendor: "Aafanta Mart",
    location: "Kadaghari",
    endingDate: "2022/01/23",
    discount: 80,
    items: "Dairy Items",
  },
  {
    id: "2",
    url: `${assets["dummy2.jpg"]}`,
    vendor: "Kasturi Mart",
    location: "Pepsicola",
    endingDate: "2022/01/24",
    discount: 70,
    items: "Chips and Crackers",
  },
  {
    id: "3",
    url: `${assets["dummy3.jpeg"]}`,
    vendor: "Sherpa Store",
    location: "Koteshwor",
    endingDate: "2022/01/25",
    discount: 75,
    items: "Confectionaries",
  },
  {
    id: "4",
    url: `${assets["dummy4.jpg"]}`,
    vendor: "Saleways",
    location: "Jawalakhel",
    endingDate: "2022/01/26",
    discount: 80,
    items: "Fresh Produce",
  },
  {
    id: "5",
    url: `${assets["dummy5.jpg"]}`,
    vendor: "Shyam Holsel",
    location: "Baneshwor",
    endingDate: "2022/01/27",
    discount: 70,
    items: "Masala Items",
  },
];

export const res_content = [
  {
    id: "1",
    url: `${resAssets["res1.jpeg"]}`,
    vendor: "Namaste Khajaghar",
    location: "Pokhara",
    endingDate: "2022/01/23 8 PM to 10 PM",
    discount: 100,
    items: "Leftover Items",
  },
  {
    id: "2",
    url: `${resAssets["res2.jpeg"]}`,
    vendor: "Thule dai ko Momo",
    location: "Bakhundole",
    endingDate: "2022/01/24 after 9 PM",
    discount: 100,
    items: "Leftover Items",
  },
  {
    id: "3",
    url: `${resAssets["res3.jpg"]}`,
    vendor: "Small Star Restaurant",
    location: "Koteshwor after 9 PM",
    endingDate: "2022/01/25",
    discount: 100,
    items: "Leftover Items",
  },
  {
    id: "4",
    url: `${resAssets["res4.jpeg"]}`,
    vendor: "Saleways",
    location: "Jawalakhel",
    endingDate: "2022/01/26 from 8 PM to 9 PM",
    discount: 100,
    items: "Leftover Items",
  },
];
