import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadState from "../LoadState";

const PostNews = () => {
  const navigate = useNavigate();
  const [newsImage, setNewsImage] = useState();
  let [loading, setLoading] = useState(false);

  const formSchema = yup.object().shape({
    title: yup.string().required("Please Fill Out This Field"),
    reporterName: yup.string().required("Please Fill out this field"),
    details: yup.string().required("Please Fill out this field"),
  });

  const {
    register,
    handleSubmit,
    // formState: {errors}
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    setNewsImage(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { title, reporterName, details } = value;
    const liveURL = "https://allstar-api.onrender.com";
    // const localURL = "http://localhost:2099"
    const postURL = `${liveURL}/api/createNewsFeed`;
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("reporterName", reporterName);
    formData.append("details", details);
    formData.append("newsImage", newsImage);

    await axios.post(postURL, formData).then((res) => {
      console.log("Data: ", res);
      setLoading(false);
      navigate("/");
    });
  });

  return (
    <Container>
      {loading ? <LoadState /> : null}
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <InputHold>
            <span>Image</span>
            <input type="file" onChange={handleImage} />
          </InputHold>
          <InputHold>
            <span>Reporter Name</span>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("reporterName")}
            />
          </InputHold>
          <InputHold>
            <span>Report Title</span>
            <input
              type="text"
              placeholder="What is the title of Your Report?"
              {...register("title")}
            />
          </InputHold>
          <InputHold>
            <span>Report Detail</span>
            <textarea
              placeholder="Your Report Details Here..."
              {...register("details")}
            ></textarea>
          </InputHold>

          <button type="submit">Post Report</button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default PostNews;

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    height: 35px;
    width: 280px;
    background-color: #087cc5;
    border: none;
    outline: none;
    font-family: montserrat;
    font-weight: 800;
    color: #fff;
    margin-top: 5px;
  }
`;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  span {
    font-size: 11px;
    font-weight: 700;
  }

  input {
    width: 280px;
    height: 35px;
    border: none;
    background-color: rgba(100, 149, 237, 0.3);
    font-family: montserrat;
    font-weight: 800;
    padding-left: 10px;
    outline: none;
  }

  textarea {
    width: 280px;
    height: 100px;
    font-family: montserrat;
    font-weight: 800;
    border: none;
    background-color: rgba(100, 149, 237, 0.3);
    padding-left: 10px;
    outline: none;
    /* resize: none; */
  }
`;
