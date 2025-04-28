import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import styles from "./Gallery.module.scss";
import { gallery } from "../../constants/gallery";

const Gallery = () => {
  return (
    <Container id={"gallery"}>
      <SectionTitle>Галерея</SectionTitle>
      <div className={styles.gallery}>
        {gallery.map((image, index) => (
          <img
            loading="lazy"
            key={index + 1}
            src={image}
            alt={`image-${index + 1}`}
          />
        ))}
      </div>
    </Container>
  );
};
export default Gallery;
