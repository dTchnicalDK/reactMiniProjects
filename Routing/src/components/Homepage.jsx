import ItemCards from "./ItemCards";
import "../assets/css/homepage.css";
// import "../assets/images/books.png";

function Homepage() {
  return (
    <>
      <h1 className="courses-heading">Set practice courses</h1>
      <div className="courses">
        <ItemCards
          item={{
            name: "सक्षमता परीक्षा",
            description: "this is description here",
            image: "/assets/images/books.png",
            // image: "src/assets/images/books.png",
            path: "/chapters/sakshamta",
          }}
        />
        <ItemCards
          item={{
            name: "BPSC 70TH",
            description: "here you can practice set for bpsc",
            image: "src/assets/images/stack-of-books.png",
            path: "/bpsc",
          }}
        />
        <ItemCards
          item={{
            name: "बिहार SSC",
            description: "here you can practice set for bihar ssc",
            image: "src/assets/images/books-stack-of-three.png",
            path: "/BiharSsc",
          }}
        />
        <ItemCards
          item={{
            name: "BIHAR SSC",
            description: "here you can practice set for bihar ssc",
            image: "src/assets/images/books-stack-of-three.png",
          }}
        />
      </div>
    </>
  );
}

export default Homepage;
