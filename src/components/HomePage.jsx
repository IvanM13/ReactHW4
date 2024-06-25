import Vk from "../img/vk.svg";
import Instagram from "../img/instagram.svg";

function HomePage({ articles }) {
  return (
    <div>
      <h1>{articles}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ratione?
        Dolorum id fuga amet eveniet repellat, doloribus dignissimos cupiditate
        inventore totam sequi commodi nisi vitae blanditiis dolor hic modi!
        Enim?
      </p>

      <h2>Добро пожаловать на сайт</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        quasi reiciendis quibusdam quos voluptas voluptatem quia, quam incidunt
        maiores. Molestias illo nihil animi eaque nisi voluptatem vitae
        distinctio omnis tenetur!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        quasi reiciendis quibusdam quos voluptas voluptatem quia, quam incidunt
        maiores. Molestias illo nihil animi eaque nisi voluptatem vitae
        distinctio omnis tenetur!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        quasi reiciendis quibusdam quos voluptas voluptatem quia, quam incidunt
        maiores. Molestias illo nihil animi eaque nisi voluptatem vitae
        distinctio omnis tenetur!
      </p>

      <a href="https://vk.com">
        <img width="40" src={Vk} alt="vk" />
      </a>
      <a href="https://vk.com">
        <img width="40" src={Instagram} alt="instagram" />
      </a>
    </div>
  );
}

export default HomePage;
