import React, { useState } from "react";

export interface Genres {
  _id: string;
  name: string;
}
interface Props {
  genres: Genres[];
  onSelectGenres: (genre: Genres) => void;
  // valueProperty: keyof Genres;
  // textProperty: keyof Genres;
  valueProperty?: keyof Genres;
  textProperty?: keyof Genres;
  selectedItem: Genres;
}

const ListGroup = ({
  genres,
  onSelectGenres,
  textProperty = "name",
  valueProperty = "_id",
  selectedItem,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <ul className="list-group">
      {genres.map((item, index) => (
        <li
          key={item[valueProperty]}
          className={`list-group-item  ${
            item === selectedItem ? "active" : ""
          }`}
          onClick={() => {
            onSelectGenres(item);
            // setSelectedIndex(index);
          }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
