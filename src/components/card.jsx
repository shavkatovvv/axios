import React from "react";
import axios from "axios";

export const Card = ({ user, refetch }) => {
    const deleteItem = () => {
        axios
            .delete(`${import.meta.env.VITE_APP_URL}/todos/${user.id}`)
            .then((res) => {
                refetch();
            });
    };
    return (
        <div className="container p-[20px] rounded-[20px] bg-[gray] mb-[20px] ">
            <div className="flex items-center gap-[20px]">
                <h1 className="font-bold text-[20px] text-black">
                    title: {user.title}
                </h1>
                <h2 className="font-bold text-[20px] text-black">
                    description: {user.description}
                </h2>
            </div>
            <button
                className="mt-[10px] font-medium text-[20px] bg-[white] text-red-500 p-[10px] rounded-[15px]"
                onClick={deleteItem}
            >
                Delete
            </button>
        </div>
    );
};
