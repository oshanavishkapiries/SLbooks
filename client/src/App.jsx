import Search_input from "./components/Search_input";
import LoadMore from "./components/LoadMore";
import { useState } from "react";
import Mordal from "./components/Mordal";
import env from "./data/env"
function App() {

 const Base_url = env.Base_url
 const [search, setSearch] = useState(Base_url);

  const keyword = (word) => {
    setSearch(Base_url + word);
  }

  return (
    <>
      <Search_input keyword={keyword} />
      <LoadMore url={search} />
      <Mordal />
    </>
  );
}

export default App;
