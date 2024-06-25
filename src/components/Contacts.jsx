import Vk from "../img/vk.svg";
import Instagram from "../img/instagram.svg";

const Contacts = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in quis
        blanditiis accusamus tempore placeat quia incidunt autem quam ratione!
      </p>

      <ul>
        <li>
          <a href="tel:+79999999999">+7-999-999-99-99</a>
        </li>
        <li>
          <a href="https://vk.com">
            <img src={Vk} width="30" alt="Vk" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} width="30" alt="Instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
