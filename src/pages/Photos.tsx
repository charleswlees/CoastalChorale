import { Container } from "react-bootstrap";
import PhotoGallery from "../components/PhotoGallery"; // Adjust path if needed

const images2025 = import.meta.glob(
  "/src/assets/group_photos/2025/*.{jpg,jpeg,png,gif,webp}",
  { eager: true },
);
const images2024 = import.meta.glob(
  "/src/assets/group_photos/2024/*.{jpg,JPG,jpeg,png,gif,webp}",
  { eager: true },
);
const images2023 = import.meta.glob(
  "/src/assets/group_photos/2023/*.{jpg,JPG,jpeg,png,gif,webp}",
  { eager: true },
);

const getImageUrls = (modules: Record<string, any>): string[] => {
  return Object.values(modules).map((module) => module.default);
};

function Photos() {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1>Photo Gallery</h1>
        <p className="lead">
          Group photos over the years
        </p>
      </div>

      {/* Render a gallery for each year, passing the dynamically loaded URLs */}
      <PhotoGallery year="2025" imageUrls={getImageUrls(images2025)} />
      <PhotoGallery year="2024" imageUrls={getImageUrls(images2024)} />
      <PhotoGallery year="2023" imageUrls={getImageUrls(images2023)} />
    </Container>
  );
}

export default Photos;
