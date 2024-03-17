import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  GroupScreen: undefined;
  GroupDetailsScreen:{groupName:string, groupId:number};
};



type Props = NativeStackScreenProps<RootStackParamList, 'GroupScreen'>;
type PropsGroupDetailsScreen = NativeStackScreenProps<RootStackParamList, 'GroupDetailsScreen'>;

type GroupsType = {
  user_group_name: string
  user_group_id: number
  created_by:string
  creation_date:string
}

type GroupDetailResponse = {
  expenses_list:Array<GroupDetailType>
  payments_list:Array<PaymentDetailType>
}

type GroupDetailType = {
  description: "Guava Pani puri",
  amount: number,
  splitType: string,
  participantList: Array<string>,
  paidByList: Array<string>,
  usergroup_name: string,
  owes: Array<string>,
  groupId: number,
  expenseId: number,
  created_by: string,
  updated_by: string,
  creation_date: string,
  updated_on: string
}

type PaymentDetailType = {
  payer: string,
  recipient: string,
  amount: number,
  groupId: number,
  paymentId: number,
  created_by: string,
  updated_by: string,
  creation_date: string,
  updated_on: string
}


export type {RootStackParamList,Props,PropsGroupDetailsScreen,GroupsType,GroupDetailResponse};
// export default Props;