import { View, Text, Image, StyleSheet } from "react-native";
import posts from '../../../assets/data/posts.json'
import { formatDistanceToNowStrict } from 'date-fns'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import PostListItem from '../../components/postListItem'


export default function HomeScreen() {


    return (
        <View>
            <PostListItem />
        </View>


    )
}
