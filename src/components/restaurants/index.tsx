import { FlatList } from "react-native";
import {useEffect, useState} from "react";
import { RestaurantItem } from "./horizontal"

export interface RestauranteProps{
    id: string;
    name: string;
    image: string;
}

export function Restaurants() {
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
        <FlatList
            data={restaurants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <RestaurantItem item={item} />}
            horizontal={true}
            contentContainerStyle={{gap:14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}