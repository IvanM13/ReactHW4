import Vk from "../img/vk.svg";
import Instagram from "../img/instagram.svg";

function AboutPage({ articles }) {
  return (
    <>
      <h1>{articles}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi
        natus soluta amet praesentium totam temporibus, porro cum error laborum
        vero distinctio et perferendis officia illo culpa doloremque odit
        reprehenderit.
      </p>

      <a href="https://vk.com">
        <img width="40" src={Vk} alt="vk" />
      </a>
      <a href="https://vk.com">
        <img width="40" src={Instagram} alt="instagram" />
      </a>
    </>
  );
}

export default AboutPage;
