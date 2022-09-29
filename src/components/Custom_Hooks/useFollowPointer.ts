import { useState, RefObject, useEffect, useRef } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  let prevPointRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef()
  const [point, setPoint] = useState(prevPointRef.current);

  useEffect(()=>{
    prevPointRef.current = point
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
  });

  return point;
}