import "./singlepost.css";

const Singlepost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ali</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptas veniam facilis recusandae! Excepturi doloribus aliquam
          quibusdam cumque nisi culpa corrupti harum iusto sequi. Laboriosam
          facere mollitia quod accusamus quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Delectus voluptas veniam facilis
          recusandae! Excepturi doloribus aliquam quibusdam cumque nisi culpa
          corrupti harum iusto sequi. Laboriosam facere mollitia quod accusamus
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus voluptas veniam facilis recusandae! Excepturi doloribus
          aliquam quibusdam cumque nisi culpa corrupti harum iusto sequi.
          Laboriosam facere mollitia quod accusamus quos. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Delectus voluptas veniam facilis
          recusandae! Excepturi doloribus aliquam quibusdam cumque nisi culpa
          corrupti harum iusto sequi. Laboriosam facere mollitia quod accusamus
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus voluptas veniam facilis recusandae! Excepturi doloribus
          aliquam quibusdam cumque nisi culpa corrupti harum iusto sequi.
          Laboriosam facere mollitia quod accusamus quos. Laboriosam facere
          mollitia quod accusamus quos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus voluptas veniam facilis recusandae!
          Excepturi doloribus aliquam quibusdam cumque nisi culpa corrupti harum
          iusto sequi. Laboriosam facere mollitia quod accusamus quos.
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
