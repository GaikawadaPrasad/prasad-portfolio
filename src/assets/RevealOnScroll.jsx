import { useEffect, useRef, useState } from "react"


export const RevealOnScroll = ({children})=>{
    const ref = useRef();
    const [visiable , setVisible] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                    if(entry.isIntersecting){
                        setVisible(true);
                        observer.disconnect();
                    }
            },{threshold: 0.05, rootMargin: "0px 0px -40px 0px"}
        );
        observer.observe(ref.current);

        return ()=> observer.disconnect();
    } , []);
    return (
      <>
        <div
          ref={ref}
          className={`reveal ${visiable ? "reveal-visible" : ""}`}
        >
          {children}
        </div>
      </>
    );
}