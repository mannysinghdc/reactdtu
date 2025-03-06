

const Vedio = () => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    position: "fixed",
                    zIndex: -1
                }}>
                <source src='earth.mp4' type="video/mp4" />
            </video>
        </div>
    )
}

export default Vedio
