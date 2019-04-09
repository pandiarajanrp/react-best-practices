import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>SNo</th>
                <th className="text-left">Title</th>
                <th>Director</th>
                <th>Producer</th>
                <th>Release Date</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

export default TableHeader;