import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Arrow } from "./Arrow";
import useStyles from "../styles/Scrollbar";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import SubTitle from "./SubTitle";

// const getItems = content;

function HorizontalScrolling({ getItems }) {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const classes = useStyles();
  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <ArrowBackIosRoundedIcon className={classes.arrow} />
      </Arrow>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        <ArrowForwardIosRoundedIcon className={classes.arrow} />
      </Arrow>
    );
  }

  function Card({
    onClick,
    discount,
    title,
    items,
    img,
    vendor,
    location,
    endingDate,
    url,
  }) {
    const visibility = React.useContext(VisibilityContext);

    return (
      <div onClick={() => onClick(visibility)}>
        <div className={classes.card}>
          <img src={img} alt={vendor} height='10px' width='300px' />
          <SubTitle
            src={img}
            vendor={vendor}
            location={location}
            endingDate={endingDate}
            discount={discount}
            items={items}
          />
        </div>
      </div>
    );
  }

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      className={classes.scrollMenu}>
      {items.map(
        ({ id, vendor, location, endingDate, url, discount, items }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            vendor={vendor}
            location={location}
            endingDate={endingDate}
            key={id}
            img={url}
            discount={discount}
            items={items}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
          />
        )
      )}
    </ScrollMenu>
  );
}

export default HorizontalScrolling;
