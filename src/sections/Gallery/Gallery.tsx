import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  const array = new Array(18).fill(0, 0, 18);

  return (
    <Container>
      <SectionTitle side="right">Галерея</SectionTitle>
      <div className={styles.gallery}>
        {array.map((_, index) => {
          return (
            <img
              key={index + 1}
              src={`/images/gallery/image-${index + 1}.png`}
              alt={`image-${index + 1}`}
            />
          );
        })}
      </div>
    </Container>
  );
};
export default Gallery;
