import ArticleList from "../components/ArticleList";

export default function Programming() {
  return (
    <div className="programming">
      <h3 className="text-center mt-3">Programming News</h3>
      <ArticleList query="Programming" />
    </div>
  );
}
