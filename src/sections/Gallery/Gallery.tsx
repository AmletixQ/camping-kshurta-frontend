import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./Gallery.module.scss";
import { gallery } from "../../constants/gallery";

const Gallery = () => {

  return (
    <Container>
      <SectionTitle side="right">Галерея</SectionTitle>
      <div className={styles.gallery}>
        {gallery.map((image, index) => {
          return <img key={index + 1} src={image} alt={`image-${index + 1}`} />;
        })}
      </div>
    </Container>
  );
};
export default Gallery;
