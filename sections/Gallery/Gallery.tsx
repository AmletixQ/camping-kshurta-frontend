import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <Container id={"gallery"}>
      <SectionTitle>Галерея</SectionTitle>
      <div className={styles.gallery}>
        {Array(18).map((image, index) => (
          <img
            loading="lazy"
            key={index + 1}
            src={`/images/gallery/image-${index + 1}.png`}
            alt={`image-${index + 1}`}
          />
        ))}
      </div>
    </Container>
  );
};
export default Gallery;
