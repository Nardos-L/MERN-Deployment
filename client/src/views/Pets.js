import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Pets = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/pets")
            .then((res) => {
                setPets(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Pet Shelter</h1>
            <div className="float-right">
                <Link to="/pets/new">Add a Pet to the shelter</Link>
            </div>

            <p>These pets are looking for a good home</p>
            <div style={{ width: "75%", margin: "0 auto", padding: "20px" }}>
                <table class="table table-success table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.map((pet) => {
                            return (

                                <tr key={pet._id} >
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <span>
                                            <Link to={"/pets/" + pet._id}>details</Link>
                                        </span>
                                        <span>
                                            <Link
                                                to={`/pets/${pet._id}/edit`}
                                                className="btn btn-sm btn-outline-warning mx-1"
                                            >
                                                edit
                                            </Link>
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pets;