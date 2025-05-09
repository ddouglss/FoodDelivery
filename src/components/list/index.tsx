import { View, Text } from 'react-native';
import {useState, useEffect} from "react";
import {RestaurantesItem} from "./item";

export interface RestauranteProps{
    id: string;
    name: string;
    image: string;
}

export function RestauranteVerticalList() {
    const [restaurants, setRestaurants] = useState<RestauranteProps[]>([])

    useEffect(() => {
        async function getFoods() {
            try {
                const response = await fetch("http://192.168.0.105:3000/restaurants");
                const data = await response.json();
                setRestaurants(data);
                console.log(data);
            } catch (error) {
                console.error("Erro ao buscar os restaurantes: ", error);
            }
        }
        getFoods();
    }, []);


    return (
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
            {restaurants.map( item => (
                <RestaurantesItem item={item} key={item.id}/>
            ))}
        </View>
    );
}
