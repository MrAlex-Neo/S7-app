// import { atom } from "jotai";
import { useEffect } from 'react';
import { Dimensions } from 'react-native';

// Создаем атомы для ширины и высоты экрана
export const screenWidthAtom = Dimensions.get('window').width
export const screenHeightAtom = Dimensions.get('window').height

const UseScreenSize = ({screenWidth, screenHeight}) => {

    
    // const [screenWidth, setScreenWidth] = useAtom(screenWidthAtom);
    // const [screenHeight, setScreenHeight] = useAtom(screenHeightAtom);

    useEffect(() => {
        // const handleResize = () => {
        //     setScreenWidth(Dimensions.get('window').width);
        //     setScreenHeight(Dimensions.get('window').height);
        // };
        props.screenWidth(Dimensions.get('window').width)
        props.screenHeight(Dimensions.get('window').width)
        const subscription = Dimensions.addEventListener('change', handleResize);

        return () => {
            subscription.remove();
        };
    }, [Dimensions.get('window').width, Dimensions.get('window').width]); // Пустой массив зависимостей, чтобы эффект выполнялся один раз

    return { screenWidth, screenHeight };
};

export default UseScreenSize;
