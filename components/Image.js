const Image = ({ url, alt = "" }) => {
  return (
    <img
      loading=""
      // srcSet={`
      //   ${img_url}w_500${url} 500w,
      //   ${img_url}w_1420${url} 710w,
      //   ${img_url}w_1000${url} 1000w,
      //   ${img_url}w_1420${url} 1420w
      // `}
      //src={`${img_url}w_500${url}`}
      src={`${url}`}
      sizes=""
      alt={`${alt}, MP architekti`}
      className="swiper-container-img"
    />
  );
};
