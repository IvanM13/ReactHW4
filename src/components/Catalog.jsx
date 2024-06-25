import React from "react";
import Gibson from "../img/gibson.jpg";
import Fender from "../img/fender.jpg";
import Ibanez from "../img/ibanez.jpg";

const Catalog = () => {
  return (
    <div>
      <h1>Каталог</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        voluptatibus. Nostrum neque sapiente suscipit at reiciendis quos veniam
        eligendi aut dolor. Neque facere debitis culpa sunt harum suscipit cum
        vitae id recusandae saepe atque perspiciatis ipsum sed ut qui iure
        obcaecati soluta voluptatibus, deserunt esse, ipsam quae officiis
        quibusdam itaque. Facere, doloribus molestias illum ab ullam veritatis
        dignissimos aspernatur repellat omnis. Dolorem id facere quibusdam
        aspernatur voluptates tempore exercitationem optio deserunt eius, hic
        quidem earum quia, laudantium, consectetur in aperiam incidunt ab
        nesciunt! Quasi quo sint nemo consequuntur deserunt, nulla quos
        voluptatum aut ullam nam minima in praesentium cum ad, minus omnis
        pariatur neque ipsa ut id. Enim, accusantium ratione! Doloribus expedita
        aliquam illo, nisi deleniti a, iure cupiditate exercitationem error
        soluta quod sequi est provident quos excepturi deserunt? Modi voluptatem
        ut labore itaque debitis, voluptatibus sed in consequatur nobis nostrum
        nihil saepe autem at accusamus voluptate facere molestias magni.
      </p>

      <img width="300" src={Gibson} alt="Gibson" />
      <div>
        <strong>Gibson</strong>
      </div>
      <p>

        американская компания, производитель гитар. Продукцию фирмы можно также
        увидеть под брендами Epiphone, Kramer Guitars, Valley Arts, Tobias,
        Steinberger и Kalamazoo.
      </p>

      <img width="300" src={Fender} alt="Fender" />
      <div>
        <strong>Fender</strong>
      </div>
      <p>
        американская компания, производящая электрические и акустические гитары,
        музыкальное оборудование. Занимает одно из лидирующих мест на рынке
        музыкальных инструментов.
      </p>

      <img width="300" src={Ibanez} alt="Ibanez" />
      <div>
        <strong>Ibanez</strong>
      </div>
      <p>
        (яп. アイバニーズ Aibanīzu) — гитарный бренд, которым владеет компания
        Hoshino Gakki, расположенная в городе Нагоя (Япония).
      </p>
    </div>
  );
};

export default Catalog;
