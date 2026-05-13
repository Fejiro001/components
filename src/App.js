import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const bannerTitle = "Happiness in Every Scoop";
  const bannerSubtitle = "Handcrafted ice cream made with rich flavors, crunchy toppings, and a little extra joy. Drop by, taste the magic, and leave with a smile.";
  const imageURLs = [
    {
      index: 0,
      name: "Classic Swirl",
      url: "https://images.unsplash.com/photo-1711307479905-f5f7145d98c3?q=80&w=947&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      index: 1,
      name: "Sunrise Lemon",
      url: "https://images.unsplash.com/photo-1564507973526-cc6a411f8307?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      index: 2,
      name: "Chocolate Dream",
      url: "https://images.unsplash.com/photo-1591636687027-a157c53387cd?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      index: 3,
      name: "Matcha Bliss",
      url: "https://images.unsplash.com/photo-1755566003314-2120c5656210?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <Banner bannerTitle={bannerTitle} bannerSubtitle={bannerSubtitle} />
        <Gallery imageURLs={imageURLs} />
      </main>
      <Footer />
    </>
  );
}

export default App;
