import Container from "@/components/UI/Container/Container";
import styles from "./Numbers.module.css";
const Numbers = () => {
  return (
    <div className="background-color-black ">
      <Container>
        <div className={styles["numbers-container"]}>
          <h2>Клиника Alta Medicus сегодня это:</h2>
          <p className="text-gray">
            Наши достижения в медицинском путешествии обозначено цифрами
          </p>
        </div>
        <ul className={styles.achievments}>
          <li className={styles.achievment}>
            <p className={styles.numbers}>3,000</p>
            <p className={styles["text-container"]}>
              Благодарных
              <span className={styles.text}>пациентов</span>
            </p>
          </li>
          <li className={styles.achievment}>
            <p className={styles.numbers}>70</p>
            <p className={styles["text-container"]}>
              Научных
              <span className={styles.text}>Статей</span>
            </p>
          </li>
          <li className={styles.achievment}>
            <p className={styles.numbers}>2,000</p>
            <p className={styles["text-container"]}>
              Операций
              <span className={styles.text}>в год</span>
            </p>
          </li>
          <li className={styles.achievment}>
            <p className={styles.numbers}>100</p>
            <p className={styles["text-container"]}>
              Дипломов
              <span className={styles.text}> и наград</span>
            </p>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Numbers;
