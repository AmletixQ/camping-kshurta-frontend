import styles from "./Rules.module.scss";

const Rules = () => {
  const first = [
    "— Документы;",
    "— Мобильный телефон;",
    "— Сменную одежду;",
    "— Теплую одежду (ветровку, кофту, носки);",
    "— Удобную обувь для пеших прогулок и подъема в горы (например, кроссовки);",
    "— Дождевик;",
    "— Прописанные вашим лечащим врачом необходимые лекарства.",
  ];

  const second = [
    "— Уважать друг друга, местное население, прохожих и сотрудников;",
    "— Соблюдать чистоту;",
    "— Не причинять порчу имуществу лагеря, местной флоре и фауне;",
    "— Вы несете ответственность за своё здоровье, безопасность и имущество;",
    "— Не оставлять автографы на камнях;",
    "— Не оставлять детей без присмотра;",
    "— Не использовать на территории лагеря пиротехнические средства;",
    "— Не употреблять крепкие алкогольные напитки, наркотические средства;",
    "не включать громко музыку и соблюдать тишину в ночное время;",
    "— Прежде, чем покинуть территорию палаточного лагеря, предупредите; об этом сотрудника лагеря, оставьте контактную информацию и свое направление;",
  ];

  return (
    <div className={styles.rules}>
      <div className={styles.rules__container}>
        <div className={styles.rules__content}>
          <h2>Что с собой брать?</h2>
          <div className={styles.rules__content_items}>
            {first.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <img src="/images/rules/first.png" alt="first-rules-image" />
      </div>
      <div className={styles.rules__container}>
        <div className={styles.rules__content}>
          <h2>Правила</h2>
          <div className={styles.rules__content_items}>
            {second.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <img src="/images/rules/second.png" alt="second-rules-image" />
      </div>
    </div>
  );
};
export default Rules;
