import { useState } from "react";
import { useFormik } from "formik";

export default function CommentForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  // A custom validation function. This must return an object
  // which keys are symmetrical to our values/initialValues
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username cannot be empty!";
    }
    return errors;
  };

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   addNewComment(formData);
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Give a review!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username:</label>
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          id="username"
          // onChange={handleInputChange}
          onChange={formik.handleChange}
          // value={formData.username}
          value={formik.values.username}
        />
        {formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        ) : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks:</label>
        &nbsp;&nbsp;
        <textarea
          name="remarks"
          id="remarks"
          placeholder="Enter remarks"
          // onChange={handleInputChange}
          onChange={formik.handleChange}
          // value={formData.remarks}
          value={formik.values.remarks}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        &nbsp;&nbsp;
        <input
          type="number"
          id="rating"
          min={1}
          max={5}
          name="rating"
          // onChange={handleInputChange}
          onChange={formik.handleChange}
          // value={formData.rating}
          value={formik.values.rating}
        />
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
