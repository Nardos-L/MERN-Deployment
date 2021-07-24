import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import { Link } from "@reach/router";

const EditPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skillone, setSkillone] = useState("");
    const [skilltwo, setSkilltwo] = useState("");
    const [skillthree, setSkillthree] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/pets/" + props.id)
            .then((res) => {
                console.log(res);
                setName(res.data.name);
                setType(res.data.type);
                setDesc(res.data.desc);
                setSkillone(res.data.skillone);
                setSkilltwo(res.data.skilltwo);
                setSkillthree(res.data.skillthree);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const handleNewPetonSubmit = (event) => {
        event.preventDefault();

        const editedPet = {
            name: name,
            type: type,
            desc: desc,
            skillone: skillone,
            skilltwo: skilltwo,
            skillthree: skillthree
        };

        axios
            .put(
                `http://localhost:5000/api/pets/${props.id}`,
                editedPet
            )
            .then((res) => {
                console.log(res);
                navigate("/pets/" + props.id);
            })
            .catch((err) => {
                /* 
                This .catch only happens if the controller .catch has:
                res.status(400).json(err);
                */
                setErrors(err.response?.data?.errors);
                console.log(err);
            });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto ">
            <h1 className="text-center">Favorite pets</h1>
            <Link to={"/pets/"}>Home</Link>
            <p>Edit this pet</p>
            <form
                onSubmit={(e) => {
                    handleNewPetonSubmit(e);
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
                        type="text" value={name}
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
                        type="text" value={type}
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
                        type="text" value={desc}
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
                        type="text" value={skillone}
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
                        type="text" value={skilltwo}
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
                        type="text" value={skillthree}
                    />
                </div>
                <button className="btn btn-sm btn btn-primary mt-2 ms-2" > Edit Pet</button>
            </form>
        </div>
    );
};

export default EditPet;