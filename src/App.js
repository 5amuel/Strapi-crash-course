import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails"
import Category from "./pages/Category"
import SiteHeader from "./components/SiteHeader";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
