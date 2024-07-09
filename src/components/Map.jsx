import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParmas, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParmas.get("lat");
  const lng = searchParmas.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position:{lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}

export default Map;
