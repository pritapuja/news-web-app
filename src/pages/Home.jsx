import ArticleList from "../components/ArticleList";

export default function Home() {
  return (
    <div className="home">
      <h3 className="text-center mt-3">News</h3>
      <ArticleList query="Indonesia" />
    </div>
  );
}
