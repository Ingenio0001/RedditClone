import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import posts from '../../../assets/data/posts.json'
import { formatDistanceToNowStrict } from 'date-fns'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import PostListItem from '../../components/postListItem'


export default function HomeScreen() {

    
    return (
        <View>
            <FlatList 
                data = {posts}
                renderItem={({item}) => <PostListItem post = {item} />  }
            />
        </View>


    )
}
