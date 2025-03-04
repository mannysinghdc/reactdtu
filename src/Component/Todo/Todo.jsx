
import { useOutletContext } from "react-router-dom"
import TodoContextProvider from "../../store/Todo-Item"  // Todo and it use context api and outlet context and vedio key features
import Create from "./Create"
import Read from "./Read"
import Search from "./Search"


const Todo = () => {
    const { mode } = useOutletContext()  // react router hook 

    const cardSTyle = {
        position: "absolute",
        top: "10%",
        left: "15%",
        height: "70vh",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        overflow: "auto",
        scrollbarWidth: "none",
        padding: "20px",
        borderRadius: "10px",
        width: "70vw"

    }
    return (
        <TodoContextProvider>
            <div style={{ width: "auto", height: "auto", overflow: "hidden", position: "relative" }}>
                <video
                    key={mode}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}>
                    {/* vedio toggle background chage on toggle mode*/}
                    {
                        !mode && <source src='vedio.mp4' type="video/mp4" />
                    }


                </video>
                <div style={cardSTyle}>
                    <Create />
                    <Search />
                    <Read />
                </div>

            </div>

        </TodoContextProvider>
    )
}

export default Todo
