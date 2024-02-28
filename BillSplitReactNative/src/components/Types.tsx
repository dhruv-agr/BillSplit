import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  GroupScreen: undefined;
  GroupDetailsScreen:{groupName:string};
};



type Props = NativeStackScreenProps<RootStackParamList, 'GroupScreen'>;
type PropsGroupDetailsScreen = NativeStackScreenProps<RootStackParamList, 'GroupDetailsScreen'>;

type GroupsType = {
  user_group_name: string
  user_group_id: number
}


export type {RootStackParamList,Props,PropsGroupDetailsScreen,GroupsType};
// export default Props;