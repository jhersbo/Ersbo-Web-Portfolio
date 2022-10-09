import { useState, useEffect } from "react"

import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Listr = ()=>{

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const cacheImages = async (srcArr: any)=>{
            const promises = await srcArr.map((src: string)=>{
                return new Promise<void>((resolve, reject)=>{
                    const img: any = new Image()
                    img.src = src
                    img.onload = resolve()
                    img.onerror = reject()
                })
            })
            await Promise.all(promises)
            setIsLoading(false)
        }
        const imgs = [
            `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Home.jpg`,
            `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/List.jpg`,
            `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Account.jpg`
        ]
        cacheImages(imgs)
    }, [])

    const styles = {
        container:{
            display: "flex",
            justifyContent: "space-around"
        },
        image: {
            width: "20%",
            height: "fit-content",
        }
    }

    return(
        <div>
            {!isLoading ? 
                <div>
                    <h1>Listr</h1>
                    <div style={styles.container}>
                        <img style={styles.image} src={process.env.PUBLIC_URL + "/images/project_screenshots/Listr/Home.jpg"} alt="Screenshot of Listr's home screen."/>
                        <img style={styles.image} src={process.env.PUBLIC_URL + "/images/project_screenshots/Listr/List.jpg"} alt="Screenshot of Listr's list screen."/>
                        <img style={styles.image} src={process.env.PUBLIC_URL + "/images/project_screenshots/Listr/Account.jpg"} alt="Screenshot of Listr's account screen."/>
                    </div>
                </div>
            :
                <div style={styles.container}>
                    <h1>Listr</h1>
                    <HourglassBottomIcon/>
                </div>
            }
        </div>
    )
}

export default Listr