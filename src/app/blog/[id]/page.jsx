import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.left}>
          <h1 className="title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
            aspernatur rerum consequuntur blanditiis numquam molestias illum
            deleniti, tempora, reiciendis voluptate perspiciatis! Ad pariatur
            aspernatur, cupiditate amet molestias minus dolore facilis!
          </p>
          <div className={styles.userDetails}>
            <Image src={'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-1024.png'} height={30} width={30} />
            <p className={styles.uName}>user name</p>
          </div>
        </div>
        <div className={styles.right}>
          <Image className={styles.blogImg}
            src={
              "https://th.bing.com/th/id/OIP.a5YOm_1N-oe-O025Jw4PTQHaE8?rs=1&pid=ImgDetMain"
            }
            fill={true}
          />
        </div>
      </div>

      <div className={styles.lower}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          explicabo ipsam facilis. Eligendi sunt porro quasi reprehenderit vero
          iste ex natus ab dicta autem, rerum nisi maiores et odit tenetur
          consequuntur repellat inventore. Nihil dolorum, beatae provident vero
          nisi, omnis vitae quidem magnam laborum corporis voluptate in cum odit
          quas?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          totam dolor, molestiae harum, nobis quasi eum illum libero maiores
          odio alias rem quidem. Quae ea sapiente natus suscipit maxime sunt
          ducimus facilis, temporibus hic rem velit unde, necessitatibus culpa.
          Animi ullam, quam accusantium quas adipisci reprehenderit cupiditate
          ipsam saepe nulla totam provident perspiciatis voluptatum quis ducimus
          sequi, hic fugit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          cum quidem sequi aut dolores facilis ad tempore eaque debitis
          voluptatum veniam assumenda aliquam delectus aperiam quas unde,
          veritatis voluptates repellat necessitatibus expedita, dolor nemo illo
          eligendi voluptas! Earum, corrupti? Beatae accusamus eum repellat ipsa
          fuga? Voluptatum delectus quaerat pariatur et quasi quas excepturi?
          Sequi, porro.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
