import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import styles from "./Gallery.module.scss";

const Gallery = () => {
  const images = Array(18)
    .fill(0)
    .map((_, i) => `/images/gallery/image-${i + 1}.webp`);

  return (
    <Container id={"gallery"}>
      <SectionTitle>Галерея</SectionTitle>
      <div className={styles.gallery}>
        {images.map((image, i) => (
          <img loading="lazy" key={i + 1} src={image} alt={`image-${i + 1}`} />
        ))}
      </div>
    </Container>
  );
};
export default Gallery;
