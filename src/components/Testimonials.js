import { useRef } from "react";
export default function Testimonials ({para}) {
    const containerRef = useRef(null); 
    function handlePrevClick(){
        let width=containerRef.current.clientWidth; 
        containerRef.current.scrollLeft = containerRef.current.scrollLeft - width;
    }
    function handleNextClick(){
        let width=containerRef.current.clientWidth; 
        containerRef.current.scrollLeft = containerRef.current.scrollLeft + width;
    }

    return (
        <section className='testimonials'>
            <button className="prev-btn" onClick={handlePrevClick}>◀</button>
            <div className='testimonials-container' ref={containerRef}>
                {  
                    para.map((p, index) => (
                            <div key={index} className='testimonials-card'>
                                <p>{p[0]}</p>
                                <p>{p[1]}</p>
                            </div>
                        )
                    )
                }
            </div>
            <button className="next-btn" onClick={handleNextClick}>▶</button>
        </section>
    );
}