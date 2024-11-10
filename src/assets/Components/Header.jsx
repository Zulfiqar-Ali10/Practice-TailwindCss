import React from "react";

export const Header = ({ students }) => {
    return (
        <>
            <h2 className=" hover:bg-red-700 text-center mt-10 mb-10 bg-[brown] text-white p-4 w-40 m-auto rounded">
                Header</h2>

            <table className="border-2 w-full h-[100px] border-collapse">
                <thead>
                    <tr className="border-2">
                        <th className="border-2 px-2 py-1">Name</th>
                        <th className="border-2 px-2 py-1">Class</th>
                        <th className="border-2 px-2 py-1">Roll-Number</th>
                        <th className="border-2 px-2 py-1">isActive</th>
                    </tr>
                </thead>
                <tbody>

                    {students.map((item, index) => (
                        <tr className="text-center border-2" key={index}>
                            <td className="border-2 px-2 py-1">{item.name}</td>
                            <td className="border-2 px-2 py-1">{item.class}</td>
                            <td className="border-2 px-2 py-1">{item.rollNum}</td>
                            <td className="border-2 px-2 py-1">{item.isActive ? 'True' : 'False'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
