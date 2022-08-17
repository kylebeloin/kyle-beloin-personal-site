import { contact } from "../data/global";
import icons from "../common/icons";
import style from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      {Object.entries(contact).map(([key, value]) => {
        return (
          <a
            key={key}
            className={style.icon}
            href={value}
            target="_blank"
            rel="noreferrer"
          >
            {icons(key)}
          </a>
        );
      })}
    </section>
  );
};
