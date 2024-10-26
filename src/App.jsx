import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./components/card";

import { Form } from "./components/form/form";

function App() {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get(`${import.meta.env.VITE_APP_URL}/todos`).then((res) => {
            setData(res.data);
        });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Form refetch={getData} />
            {data.map((item) => {
                return <Card key={item.id} user={item} refetch={getData} />;
            })}
        </>
    );
}

export default App;
