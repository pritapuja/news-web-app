import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function ArticleList({ query }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${
            import.meta.env.VITE_API_KEY
          }`
        );

        setArticles(res.data.response.docs);
      } catch (error) {
        console.error(error);
      }
    };

    if (query) {
      fetchArticles();
    }
  }, [query]);

 
  const isNewsSaved = (articleId) => {
    const savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
    return savedNews.some((news) => news._id === articleId);
  };

  const saveNews = (article) => {
    const savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
    savedNews.push(article);
    localStorage.setItem("savedNews", JSON.stringify(savedNews));
    
   
    setArticles((prevArticles) =>
      prevArticles.map((art) => {
        if (art._id === article._id) {
          return { ...art, saved: true }; 
        }
        return art;
      })
    );
  };

  const unsaveNews = (articleId) => {
    let savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
    savedNews = savedNews.filter((news) => news._id !== articleId); 
    localStorage.setItem("savedNews", JSON.stringify(savedNews));

    
    setArticles((prevArticles) =>
      prevArticles.map((art) => {
        if (art._id === articleId) {
          return { ...art, saved: false }; 
        }
        return art;
      })
    );
  };

  return (
    <div className="container mt-3">
      <hr />
      <div className="row">
        {articles.map((article) => {
          const {
            abstract,
            headline: { main },
            byline: { original },
            section_name,
            web_url,
            _id,
            multimedia,
          } = article;

          
          const imageUrl =
            multimedia && multimedia.length > 0
              ? `https://www.nytimes.com/${multimedia[0].url}`
              : "news.jpg"; 

          const saved = isNewsSaved(_id); 

          return (
            <div className="col-md-4 mb-4" key={_id}>
              <div className="card h-100">
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt="news image"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <p className="fw-normal mb-1">{section_name}</p>
                  <h5 className="card-title mt-2">{main}</h5>
                  <p className="fw-light">{original}</p>
                  <p className="card-text text-bold">{abstract}</p>
                  <a
                    href={web_url}
                    className="btn btn-info me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    News Page
                  </a>
                  {saved ? (
                   
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => unsaveNews(_id)}
                    >
                      Unsave
                    </button>
                  ) : (
                   
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        saveNews({
                          _id: _id, 
                          source: original,
                          title: main,
                          description: abstract,
                          link: web_url,
                        })
                      }
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


ArticleList.propTypes = {
  query: PropTypes.string.isRequired,
};
