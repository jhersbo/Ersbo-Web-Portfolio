import { useState, RefObject, useEffect, useRef } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>, clicked:boolean) {
  let prevPointRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef()
  const [point, setPoint] = useState(prevPointRef.current);

  useEffect(()=>{
    prevPointRef.current = point
    // console.log(prevPointRef.current)
  }, [point])

  useEffect(() => {
    if (!ref.current) return;
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };
    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);
  // console.log(point)
  return point;
}