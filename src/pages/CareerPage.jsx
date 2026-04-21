import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./CareerPage.css";

function CareerPage() {
  const [careerItems, setCareerItems] = useState([]);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    const { data, error } = await supabase
      .from("careers")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetch careers:", error.message);
      return;
    }

    if (data) {
      setCareerItems(data);
    }
  };

  return (
    <section className="career-page">
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
                <img src={item.image_url} alt={item.title} />
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