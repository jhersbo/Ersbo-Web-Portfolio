import WebFont from "webfontloader"

const useCache = async (srcArr: any, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, family: string[])=>{
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

    WebFont.load({
        google: {
            families: family
        }
    })
}

export default useCache