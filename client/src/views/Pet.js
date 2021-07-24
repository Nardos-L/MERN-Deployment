import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const Pet = (props) => {
    const [pet, setPet] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/pets/" + props.id)
            .then((res) => {
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const deletePet = (_id) => {
        axios
            .delete("http://localhost:5000/api/pets/" + _id)
            .then((res) => {
                //removeFromDom(_id)
                navigate("/pets");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (pet === null) {
        return "Loading...";
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={"/pets/"}>Home</Link>
            <h3>Details about: {pet.name}</h3>
            <button className="btn btn-outline-success float-right" onClick={e => { deletePet(pet._id) }}>Adopt {pet.name}</button>
            <div>
                <h3>Pet type: {pet.type}</h3>
                <h3>Description: {pet.desc}</h3>
                <h3>Skills:</h3>
                <div className="ms-5">
                    <p>{pet.skillone}</p>
                    <p>{pet.skilltwo}</p>
                    <p>{pet.skillthree}</p>
                </div>



                <div>
                    {/* <span
                        onClick={(e) => {
                            handleDelete(pet._id);
                        }}
                        style={{ color: "red", cursor: "pointer" }}
                    >
                        &#10006;
                    </span> */}


                </div>
            </div>
        </div>
    );
};

export default Pet;