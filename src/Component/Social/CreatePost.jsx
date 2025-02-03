import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocialContext } from '../../store/Social-Item';

const CreatePost = () => {
  const [data, setData] = useState({ userId: "", title: "", body: "", tags: "", likes: "" })
  const navigate = useNavigate()

   const { setPost } = useContext(SocialContext)


  // Change Functionlity
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // Submit Functionlity
  const submitHandler = (e) => {
    e.preventDefault()

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: data.userId,
        title: data.title,
        body: data.body,
        tags: data.tags.split(" ").filter(e => e !== ""),
        reactions: { likes: data.likes }

        /* other post data */
      })
    })
      .then(res => res.json())
      .then(res=>{setPost(res), navigate('/social/post')});
  }
  return (
    <div className="container my-4 w-50 img-fluid hover-shadow p-4 rounded-2">
      <h2>Create Post</h2>
      <form onSubmit={submitHandler}>

        <MDBRow className='mb-3'>
          <MDBCol>
            <MDBInput id='userId' name='userId' label='UserId' value={data.userId} onChange={changeHandler} />
          </MDBCol>
          <MDBCol>
            <MDBInput id='title' name='title' label='Title' value={data.title} onChange={changeHandler} />
          </MDBCol>
        </MDBRow>
        <MDBTextArea className='mb-3' id='body' name='body' label='Description' rows={4} value={data.body} onChange={changeHandler}></MDBTextArea>
        <MDBInput className='mb-3' id='tags' name='tags' label='Tags' value={data.tags} onChange={changeHandler} />

        <MDBRow className='mb-3'>
          <MDBCol>
            <MDBInput className='mb-3' id='like' name='likes' label='Like' value={data.likes} onChange={changeHandler} />
          </MDBCol>
        </MDBRow>

        <MDBBtn type='submit' size='sm'>
          Save
        </MDBBtn>
      </form>
      <button className='btn btn-primary btn-sm mt-2' onClick={() => navigate('/social/post')}>Post</button>
    </div>

  );
}

export default CreatePost
