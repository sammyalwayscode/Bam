import styled from "styled-components";

const PostNews = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <InputHold>
            <span>Image</span>
            <input type="file" />
          </InputHold>
          <InputHold>
            <span>Reporter Name</span>
            <input type="text" placeholder="Enter Your Name" />
          </InputHold>
          <InputHold>
            <span>Report Title</span>
            <input
              type="text"
              placeholder="What is the title of Your Report?"
            />
          </InputHold>
          <InputHold>
            <span>Report Detail</span>
            <textarea placeholder="Your Report Details Here..."></textarea>
          </InputHold>

          <button>Post Report</button>
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
const Form = styled.div`
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
