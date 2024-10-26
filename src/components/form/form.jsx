import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export const Form = ({ refetch }) => {
    const { register, handleSubmit, reset } = useForm();

    const submit = (data) => {
        axios.post(`${import.meta.env.VITE_APP_URL}/todos`, data).then(() => {
            toast.success("successfully added", { position: "top-right" });
            refetch();
        });

        reset();
    };
    return (
        <form
            className="flex items-center justify-center pb-[80px] pt-[80px]"
            onSubmit={handleSubmit(submit)}
        >
            <input
                className="w-[400px] rounded-[20px] text-blue-600 bg-black p-[20px]"
                {...register("title")}
                type="text"
                placeholder="type title"
            />
            <input
                className="w-[400px] rounded-[20px] text-blue-600 bg-black p-[20px] ml-[20px]"
                {...register("description")}
                type="text"
                placeholder="type description"
            />

            <button
                type="submit"
                className="py-[20px] px-[40px] rounded-[20px] bg-blue-500 text-white ml-[10px]"
            >
                send
            </button>
        </form>
    );
};
