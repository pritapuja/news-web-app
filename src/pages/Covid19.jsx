import ArticleList from "../components/ArticleList";

export default function Covid19() {
  return (
    <div className="covid19">
      <h3 className="text-center mt-3">COVID-19 News</h3>
      <ArticleList query="Covid-19" />
    </div>
  );
}
