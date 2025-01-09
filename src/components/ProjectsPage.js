import React from "react";
import './ProjectsPage.css'
import ProjectCard from "./ProjectCard";
import { Button, Card } from 'antd'
import { useState } from 'react';

import ProjectImage from '../assets/img/bubbles_static.png'
import ProjectGIF from '../assets/img/bubbles_animated.GIF'
import Spade from '../assets/img/2S.jpg'
import big2 from '../assets/img/Big2_ss.png'
import HarmonicHusttleCover from '../assets/img/Harmonic_Hustle.png'
import InsightUBCCover from '../assets/img/Insight_UBC.png'
import Big2Cover from '../assets/img/Big_2.png'
import GalleryManagerCover from '../assets/img/Gallery_Manager.png'

import demo from '../assets/img/Big2_Demo.mp4'

import { Image, Modal } from 'antd'

/*  Carousal style referenced from:  https://codepen.io/team/keyframers/pen/rNxmVZN?editors=0100 */
const slides = [
    {
        title: "Harmonic Hustle",
        subtitle: "A Rythm Game",
        description: "Using C++ and OpenGL, develop a user-interactive rhythm-based game that \
            contains multiple different scenes along with key-mapping and audio based on ECS pattern",
        image: HarmonicHusttleCover,
        color: "white",
        demo: "",
    },
    {
        title: "Insight UBC",
        subtitle: "",
        description: "Using HTML and CSS, developed the user interface and JavaScript to send and \
            get REST API calls to and from the server to query a dataset",
        image: InsightUBCCover,
        color: "white",
        demo: "",
    },
    {
        title: "Big 2",
        subtitle: "An Alternate Version",
        description: "An altered version of the game Big 2 in Java with a graphic user interface \
            through Swing and layering multiple JFrames and JPanels",
        image: Big2Cover,
        color: "white",
        demo: demo,
    },
    {
        title: "Gallery Manager",
        subtitle: "",
        description: "Helping manage galleries and art pieces by processing data on the gallery \
            or art piece onto a database for the client to query and track related attributes",
        image: GalleryManagerCover,
        color: "white",
        demo: "",
    },
]

function useTilt(active) {
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }
        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;
        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({slide, offset}) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    }
    
    const handleCancel = () => {
        document.querySelectorAll("video").forEach((video) => video.pause());
        setOpen(false);
    }

    return (
        <div ref={ref} className="slide" data-active={active} style={{"--offset": offset, "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1}}>
            <div className="slideBackground" style={{backgroundImage: `url('${slide.image}')`}}/>
            <div className="slideContent" style={{backgroundImage: `url('${slide.image}')`}}>
                {/* <div className="slideContentInnerBackground"></div> */}
                <div className="slideContentInner" style={{color: slide.color}}>
                    <h2 className="slideTitle">{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription">{slide.description}</p>
                </div>
                {/* <Button className="demo-btn" type="dashed" ghost style={{color: slide.color, "border-color": slide.color}}>Demo</Button> */}
                {slide.demo != "" ? (
                    <Button className="demo-btn" id='demo-btn' type="dashed" onClick={showModal} ghost>Demo</Button>
                ) : null}
                <Modal
                    className="demo-modal"
                    width={1000}
                    open={open}
                    // title="Demo"
                    onCancel={handleCancel}
                    footer={[]}
                >
                    <video width='100%' id="demo-video" controls>
                        <source src={slide.demo}/>
                    </video>
                </Modal>
            </div>
        </div>
    );
}

function ProjectsPage() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        // <div>Projects: "carousal" of cards</div>
        // <li>each card is a project</li>
        // <li>cards set in a carousal fashion but can see other ones</li>

        // <ProjectCard></ProjectCard>

        <div className="slides">
            <button onClick={() => dispatch({type: "PREV"})}>‹</button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => dispatch({type: "NEXT"})}>›</button>
        </div>
    );
}

// const elApp = document.getElementById("app");
// ReactDOM.render(<App />, elApp);
export default ProjectsPage;