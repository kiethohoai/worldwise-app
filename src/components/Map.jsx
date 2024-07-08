import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParmas, setSearchParams] = useSearchParams();
  console.log("🚀CHECK  searchParmas, setSearchParams =", searchParmas, setSearchParams);

  const lat = searchParmas.get("lat");
  const lng = searchParmas.get("lng");
  console.log("🚀CHECK  lat =", lat);
  console.log("🚀CHECK  lng =", lng);

  return (
    <div className={styles.mapContainer}>
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
