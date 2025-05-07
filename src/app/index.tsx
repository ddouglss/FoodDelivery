import {Text, View, ScrollView} from "react-native";
import Constants from 'expo-constants';

import {Header} from "../components/header";
import {Banner} from "../components/banner";
import {Search} from "../components/search";
import {Section} from "../components/section";
import {Trending} from "../components/trending";

const statusBarHeight = Constants.getStatusBarHeight;

export default function Index() {
    return (
        <ScrollView
            style={{flex: 1}}
            className="bg-gray-200"
            showsVerticalScrollIndicator={false}
        >
            <View className="w-full px-4" style={{paddingTop: statusBarHeight + 8}}>
                <Header/>

                <Banner/>

                <Search/>

            </View>

            <Section
                name="Comidas em alta"
                label="Veja mais"
                action={() => console.log("CLICOU NO VEJA MAIS")}
                size="text-2xl"
            />

            <Trending/>

        </ScrollView>
    );
}
