import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          obcaecati explicabo maxime maiores, mollitia facere praesentium quasi
          alias consectetur, quae vero earum! Est consequuntur suscipit porro
          harum quidem distinctio? Unde delectus, incidunt dolore facere
          laboriosam explicabo a distinctio deserunt sequi minima vero officia
          nulla corporis amet. Hic deserunt rerum similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          laborum.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo
          neque eos vitae a sapiente molestias provident explicabo ipsum
          deserunt maiores impedit est architecto, facilis dolore temporibus
          fugit magnam repellat pariatur quis eius numquam animi.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis non repellat!</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
