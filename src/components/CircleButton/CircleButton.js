import { useState } from "react";
import styles from "./CircleButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function CircleButton() {
  const [active, setActive] = useState(false);

  const setStateChanged = () => {
    setActive(!active);
  };

  // если мы подключим стили по обычному, без модуля: className="btn btn--circle"
  // если мы подключим стили с модулем: className="btn_i5yuo45 btn--circle_i54325yuo45 container_i23545655yuo45 container_4332445dfs5"

  return (
    <button className={`${styles["btn"]} ${styles["btn--circle"]} ${active === true ? styles["btn--active"] : ""}`} onClick={setStateChanged}>
      {/* для отображения разных иконкок в зависимости от состояния, нужен условный рендер */}
      {active === true ? <FontAwesomeIcon icon={faCheckDouble} /> : <FontAwesomeIcon icon={faPlus} />}
    </button>
  );
}

export default CircleButton;
