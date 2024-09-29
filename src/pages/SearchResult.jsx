
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArticleList from "../components/ArticleList";

export default function SearchResult() {
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [location]);

  return (
    <div className="container mt-3">
      <h3 className="text-center mt-3">{query} News</h3>
      <ArticleList query={query} />
    </div>
  );
}
