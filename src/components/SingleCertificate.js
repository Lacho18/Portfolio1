export default function SingleCertificate(props) {

    function handleClick(currentImage) {
        props.onImageClicked(currentImage);
    }

    if (!props.isMobile) {
        if (props.id % 2 === 0) {
            return (
                <div className="w-full h-auto flex flex-row m-5 inline-block">
                    <div className="w-1/2 flex flex-1 justify-center items-center p-3 certificatesImageDiv"
                        style={{
                            height: "40rem", borderTop: "3px solid #E47F73", borderRight: "3px solid #E47F73",
                            borderTopRightRadius: "40px"
                        }}>
                        <img className="block w-1/2 max-w-full max-h-full m-3" src={props.image} onClick={() => { handleClick(props.id); }} />
                    </div>
                    <div className="flex flex-1 justify-center items-center m-3 mr-4">
                        <div className=" justify-center items-center inline-block p-2 textCertificatesDiv">
                            <p className="text-center font-bold text-3xl underline mb-5">Certificate from {props.from}</p>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="w-full h-auto flex flex-row m-5 inline-block">
                    <div className="flex flex-1 justify-center items-center m-3 mr-4">
                        <div className=" justify-center items-center inline-block p-2">
                            <p className="text-center font-bold text-3xl underline mb-5">Certificate from {props.from}</p>
                            <p>{props.description}</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-1 justify-center items-center p-3 overflow-hidden certificatesImageDiv"
                        style={{
                            height: "40rem", borderTop: "3px solid #E47F73",
                            borderLeft: "3px solid #E47F73",
                            borderTopLeftRadius: "40px"
                        }}>
                        <img className="block w-1/2 max-w-full max-h-full m-3" src={props.image} onClick={() => { handleClick(props.id); }} />
                    </div>
                </div>
            );
        }
    }
    else {
        return (
            <div className="w-full h-auto flex flex-row m-5 inline-block">
                <div className="flex flex-1 justify-center items-center m-3 mr-4">
                    <div className=" justify-center items-center inline-block p-2">
                        <p className="text-center font-bold text-3xl underline mb-5">Certificate from {props.from}</p>
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-1 justify-center items-center p-3 overflow-hidden certificatesImageDiv">
                    <img className="block w-1/2 max-w-full max-h-full m-3" src={props.image} />
                </div>
            </div>
        )
    }

}