import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  GroupScreen: undefined;
  GroupDetailsScreen:{groupName:string};
};



type Props = NativeStackScreenProps<RootStackParamList, 'GroupScreen'>;
type PropsGroupDetailsScreen = NativeStackScreenProps<RootStackParamList, 'GroupDetailsScreen'>;


export type {RootStackParamList,Props,PropsGroupDetailsScreen};
// export default Props;