import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const NewPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skillone, setSkillone] = useState("");
    const [skilltwo, setSkilltwo] = useState("");
    const [skillthree, setSkillthree] = useState("");
    const [errors, setErrors] = useState(null);


    const handleNewPetSubmit = (event) => {
        event.preventDefault();

        const newPet = {
            name: name,
            type: type,
            desc: desc,
            skillone: skillone,
            skilltwo: skilltwo,
            skillthree: skillthree
        };

        axios
            .post("http://localhost:5000/api/pets", newPet)
            .then((res) => {
                navigate("/pets/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response?.data?.errors);
            });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto ">
            <h1 className="text-center">Pet Shelter</h1>
            <Link to={"/pets/"}>Home</Link>
            <p>Know a pet needing a home?</p>
            <form
                onSubmit={(e) => {
                    handleNewPetSubmit(e);
                }}
            >
                <div className="form-group">
                    <label className="h6">Pet Name: </label>
                    {errors?.name && (
                        <span style={{ color: "red" }}>{errors.name.message}</span>
                    )}
                    <input className="form-control"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Pet Type: </label>
                    {errors?.type && (
                        <span style={{ color: "red" }}>{errors.type.message}</span>
                    )}
                    <input className="form-control"
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Pet Description: </label>
                    {errors?.desc && (
                        <span style={{ color: "red" }}>{errors.desc.message}</span>
                    )}
                    <input className="form-control"
                        onChange={(e) => {
                            setDesc(e.target.value);
                        }}
                        type="text"
                    />
                </div>
                <p>Skills (Optional)</p>
                <div className="form-group">
                    <label className="h6">Skill 1: </label>
                    {errors?.skillone && (
                        <span style={{ color: "red" }}>{errors.skillone.message}</span>
                    )}
                    <input className="form-control"
                        onChange={(e) => {
                            setSkillone(e.target.value);
                        }}
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Skill 2: </label>
                    {errors?.skilltwo && (
                        <span style={{ color: "red" }}>{errors.skilltwo.message}</span>
                    )}
                    <input className="form-control"
                        onChange={(e) => {
                            setSkilltwo(e.target.value);
                        }}
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Skill 3: </label>
                    {errors?.skillthree && (
                        <span style={{ color: "red" }}>{errors.skillthree.message}</span>
                    )}
                    <input className="form-control"
                        onChange={(e) => {
                            setSkillthree(e.target.value);
                        }}
                        type="text"
                    />
                </div>
                <button className="btn btn-sm btn btn-primary mt-2 ms-2" > Add Pet</button>
            </form>
        </div>
    );
};

export default NewPet;