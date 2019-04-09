import React from "react";

const TableRow = ({props, index, handleClick}) => {
    const onClick = () => {
        handleClick(props);
    }
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td className="text-left">{props.title}</td>
            <td>{props.director}</td>
            <td>{props.producer}</td>
            <td>{props.release_date}</td>
            <td><i onClick={onClick} className="fa fa-eye"></i></td>
        </tr>
    );
}

export default TableRow;