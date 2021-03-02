const CardItem = (props) => {
    return (
        <li className="item">
            <img
                src={`https://robohash.org/${props.idx + 1}?set=set4`}
                alt="cat"
                className="item__image"
            />
            <div className="item__header">{props.cat.name}</div>
            <div>{props.cat.email}</div>
        </li>
    );
};

export default CardItem;
