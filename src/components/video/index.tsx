const Video = () => {

    return (
        <div className="wallet-main-section video-section">
            <div className="video-wrapper">

                {/* <img
                        src="/gif/modal-video.gif"
                        alt="modal-video"
                        width="1080"
                        height="768"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        style={{ maxWidth: "100%", height: "auto" }}
                    /> */}
                <video autoPlay loop muted playsInline width="800" height="400" className="real-world-left-video">
                    <source src="/videos/modal-video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Video;
