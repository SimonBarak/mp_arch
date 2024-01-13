import React from 'react';

const ProjectCardMd = ({ item, site, include }) => {
  const imageUrl = item.images[0] ? `${site.img_url}c_thumb,h_600,w_1000${item.images[0]}` : '';

  return (
    <a
      className="
        block
        h-full
        max-w-sm
        overflow-hidden
        rounded
        bg-white
        border-2 border-gray-300
        hover:border-blue-300 hover:text-blue-500
        transition
      "
      href={`${site.baseurl}${item.url}`}
    >
      {item.images[0] && (
        <img
          loading="lazy"
          className="h-48 w-full object-cover"
          src={imageUrl}
          alt={`${item.title}, ${site.title}`}
        />
      )}
      <div className="py-2 px-3">
        <p className="text-lg">{include.headline}</p>
        <p className="text-lg">{include.subline}</p>
      </div>
    </a>
  );
};

export default ProjectCardMd;
