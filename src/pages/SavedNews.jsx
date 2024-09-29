import { useEffect, useState } from "react";

const SavedNews = () => {
  const [savedNews, setSavedNews] = useState([]);

  // Ambil berita yang sudah disimpan dari localStorage ketika page pertama kali load
  useEffect(() => {
    const savedNewsData = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedNews(savedNewsData);
  }, []);

  // Jika tidak ada berita yang disimpan
  if (savedNews.length === 0) {
    return <p className="text-center mt-3">No news saved yet.</p>;
  }

  return (
    <div className="container mt-3">
      {/* <h3>Saved News</h3> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Source</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {savedNews.map((news, index) => (
            <tr key={index}>
              <td>{news.source}</td>
              <td>
                <a href={news.link} target="_blank" rel="noopener noreferrer">
                  {news.title}
                </a>
              </td>
              <td>{news.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedNews;
