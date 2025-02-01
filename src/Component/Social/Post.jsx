import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBadge, MDBRipple, MDBIcon } from 'mdb-react-ui-kit'
import { useContext, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { SocialContext } from '../../store/Social-Item';

const Post = ({ item }) => {
    const [show, setShow] = useState(false)

     const { deletePost } = useContext(SocialContext)

    
    return (
        <>
            <MDBCard className='mt-2' style={{ height: "300px" }}>
                {/* Delete Button */}
                <span title='Delete' className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-danger" style={{ cursor: 'pointer' }}>
                    <RxCross1 onClick={() => deletePost(item.id)} />
                    <span className="visually-hidden">unread messages</span>
                </span>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' style={{ height: "147px", width: "100%" }} />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle> {item.title}</MDBCardTitle>
                    <MDBIcon fas icon={`${show ? "angle-up" : "angle-down"}`} style={{ float: "right", cursor: "pointer" }} onClick={() => setShow(!show)} />
                    {
                        show && <MDBCardText>
                            {item.body}
                        </MDBCardText>
                    }
                    {
                        item.tags.map((tags, i) => (
                            <MDBBadge key={i} pill className='mx-1' light>{tags}</MDBBadge>
                        ))
                    }
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <div className='mt-3'>
                            <MDBIcon far icon="heart" color={`${item.reactions.likes > 500 ? "danger" : "primary"}`} /> <span>{item.reactions.likes}</span>
                        </div>
                        {/* <div>
                            <MDBIcon far icon="eye" className='mx-1' /><span>{item.views}</span>
                        </div> */}
                    </div>




                </MDBCardBody>

            </MDBCard>
        </>

    );
}
export default Post
