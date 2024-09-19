import React from "react";
import './ProjectsPage.css'
import ProjectCard from "./ProjectCard";
import ProjectImage from '../assets/img/bubbles_static.png'
import ProjectGIF from '../assets/img/bubbles_animated.GIF'

/*  Carousal style referenced from:  https://codepen.io/team/keyframers/pen/rNxmVZN?editors=0100 */
const slides = [
    {
        title: "Slide 1",
        subtitle: "subtitle 1",
        description: "description 1",
        image: ProjectImage
    },
    {
        title: "Slide 2",
        subtitle: "subtitle 2",
        description: "description 2",
        image: ProjectGIF
    },
    {
        title: "Slide 3",
        subtitle: "subtitle 3",
        description: "description 3",
        image: ProjectImage
    },
    {
        title: "Slide 4",
        subtitle: "subtitle 4",
        description: "description 4",
        image: ProjectGIF
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

    return (
        <div ref={ref} className="slide" data-active={active} style={{"--offset": offset, "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1}}>
            <div className="slideBackground" style={{backgroundImage: `url('${slide.image}')`}}/>
            <div className="slideContent" style={{backgroundImage: `url('${slide.image}')`}}>
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription">{slide.description}</p>
                </div>
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