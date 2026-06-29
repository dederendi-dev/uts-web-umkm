import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Loading from "../components/Loading/Loading";
import ErrorState from "../components/ErrorState/ErrorState";
import useReveal from "../hooks/useReveal";
import "./CareerPage.css";

function CareerPage() {
  const [careerItems, setCareerItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const heroReveal = useReveal({ immediate: true });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setLoading(true);
    setError(false);

    const { data, error } = await supabase
      .from("careers")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetch careers:", error.message);
      setError(true);
      setLoading(false);
      return;
    }

    setCareerItems(data || []);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState onRetry={fetchCareers} />;
  }

  return (
    <section ref={heroReveal} className="career-page reveal">
      <div className="career-container">
        <div className="career-header">
          <h5>CAREERS</h5>
          <h2>Bergabung Bersama Javacafe</h2>
          <p>
            Temukan peluang karier terbaik dan jadilah bagian dari
            pertumbuhan bisnis minuman modern bersama Javacafe Indonesia.
          </p>
        </div>

        <div className="career-list">
          {careerItems.map((item, index) => (
            <div
              className={`career-item ${index % 2 !== 0 ? "reverse" : ""}`}
              key={item.id}
            >
              <div className="career-image">
                <img
                  src={item.image_url}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="career-content">
                <h5>{item.category}</h5>
                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <p>
                  <strong>Lokasi:</strong> {item.location}
                </p>

                <span className="career-status">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerPage;