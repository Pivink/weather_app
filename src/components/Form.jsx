import { useState } from "react";

function Form() {
    let [formData, setFormData] = useState({
        name: "",
        feedback: ""
    });

    let onChangeData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        console.log(event.target.value)
    };
    let onSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            feedback: ""
        });
    };
    return (
        <div style={{
            width: "300px",
            padding: "20px",
            margin: "20px auto",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            backgroundColor: "#f9f9f9",
            textAlign: "center"
        }}>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>Give a Feedback</h3>
            <form action="">
                <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Username:</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={onChangeData}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                />

                <label htmlFor="feedback" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Feedback:</label>
                <input type="text" name="feedback" id="feedback" value={formData.feedback} onChange={onChangeData}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                />

                <button type="submit" onClick={onSubmit}
                    style={{
                        backgroundColor: "#007BFF",
                        color: "white",
                        padding: "10px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        width: "100%"
                    }}>
                    Submit
                </button>
            </form>
        </div>

    );
}

export default Form;
